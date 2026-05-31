import { type NextRequest } from "next/server";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SPAM_KEYWORDS = [
  "casino",
  "crypto",
  "seo",
  "adult",
  "pharma",
  "loan",
  "cbd",
  "backlink",
  "marketing agency",
  "link building",
  "guest post",
  "apply",
  "resume",
  "hiring",
  "job application",
  "affiliate",
];

const DISPOSABLE_DOMAINS = [
  "mailinator",
  "guerrillamail",
  "tempmail",
  "throwaway",
  "fakeinbox",
  "yopmail",
  "sharklasers",
  "trashmail",
  "dispostable",
  "maildrop",
  "spamgourmet",
  "spam4.me",
];

// All valid service area names (lowercase for matching)
const VALID_AREA_NAMES = [
  "chattanooga",
  "east ridge",
  "red bank",
  "hixson",
  "ooltewah",
  "soddy-daisy",
  "soddy daisy",
  "collegedale",
  "signal mountain",
  "lookout mountain",
  "harrison",
  "hamilton county",
];

// Common Hamilton County zip codes
const VALID_ZIPS = new Set([
  "37401", "37402", "37403", "37404", "37405", "37406", "37407", "37408",
  "37409", "37410", "37411", "37412", "37415", "37416", "37419", "37421",
  "37450", // Chattanooga
  "37302", // East Ridge
  "37315", // Collegedale
  "37341", // Harrison
  "37343", // Hixson
  "37350", // Lookout Mountain
  "37363", // Ooltewah
  "37373", // Sale Creek / Harrison area
  "37377", // Signal Mountain
  "37379", // Soddy-Daisy
  "37391", // Harrison
]);

// Obviously fake phone patterns (10-digit normalized)
const FAKE_PHONE_PATTERNS = new Set([
  "1234567890",
  "5555555555",
  "0000000000",
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
]);

// ---------------------------------------------------------------------------
// In-memory duplicate detection
// NOTE: This is best-effort. In a Vercel serverless environment, each warm
// container maintains its own Map. For cross-instance deduplication, replace
// this with Vercel KV or a similar persistent store. (Manual follow-up item.)
// ---------------------------------------------------------------------------
const recentSubmissions = new Map<string, number>();

function purgeExpiredSubmissions(): void {
  const cutoff = Date.now() - 60 * 60 * 1000; // 60 minutes
  for (const [key, ts] of recentSubmissions.entries()) {
    if (ts < cutoff) recentSubmissions.delete(key);
  }
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SubmitLeadBody {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  city?: string;
  description?: string;
  company_website?: string; // honeypot
  formLoadedAt?: number;
  sourcePage?: string;
  turnstileToken?: string;
}

// ---------------------------------------------------------------------------
// Route Handler
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  // Parse body
  let body: SubmitLeadBody;
  try {
    body = (await request.json()) as SubmitLeadBody;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const {
    name = "",
    phone = "",
    email = "",
    service = "",
    city = "",
    description = "",
    company_website = "",
    formLoadedAt,
    sourcePage = "",
    turnstileToken = "",
  } = body;

  const submittedAt = new Date().toISOString();
  const spamReasons: string[] = [];
  let spamScore = 0;

  // ---------------------------------------------------------------------------
  // Cloudflare Turnstile (skip if keys not configured)
  // ---------------------------------------------------------------------------
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;

  if (turnstileSiteKey && turnstileSecretKey) {
    if (!turnstileToken) {
      return Response.json(
        { error: "Turnstile verification required" },
        { status: 400 }
      );
    }
    try {
      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: turnstileSecretKey,
            response: turnstileToken,
          }),
        }
      );
      const verifyData = (await verifyRes.json()) as { success: boolean };
      if (!verifyData.success) {
        return Response.json(
          { error: "Bot verification failed. Please refresh and try again." },
          { status: 400 }
        );
      }
    } catch {
      console.error("[Turnstile] Verification request failed");
      return Response.json(
        { error: "Verification service unavailable. Please try again." },
        { status: 503 }
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Honeypot check
  // ---------------------------------------------------------------------------
  const honeypotTriggered = company_website.trim().length > 0;
  if (honeypotTriggered) {
    spamScore += 10;
    spamReasons.push("honeypot_triggered");
  }

  // ---------------------------------------------------------------------------
  // Time-to-submit check
  // ---------------------------------------------------------------------------
  const timeToSubmitSeconds =
    formLoadedAt != null
      ? Math.round((Date.now() - Number(formLoadedAt)) / 1000)
      : 999;
  if (timeToSubmitSeconds < 4) {
    spamScore += 3;
    spamReasons.push(`time_to_submit_${timeToSubmitSeconds}s`);
  }

  // ---------------------------------------------------------------------------
  // Required field validation (hard reject on missing)
  // ---------------------------------------------------------------------------
  const missingFields: string[] = [];
  if (!name.trim()) missingFields.push("name");
  if (!phone.trim()) missingFields.push("phone");
  if (!email.trim()) missingFields.push("email");
  if (!service.trim()) missingFields.push("service");
  if (!city.trim()) missingFields.push("city");
  if (!description.trim()) missingFields.push("description");

  if (missingFields.length > 0) {
    return Response.json(
      {
        error: `Please complete all required fields: ${missingFields.join(", ")}`,
      },
      { status: 400 }
    );
  }

  // ---------------------------------------------------------------------------
  // Email format & disposable domain check
  // ---------------------------------------------------------------------------
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }
  const emailDomain = email.split("@")[1]?.toLowerCase() ?? "";
  if (DISPOSABLE_DOMAINS.some((d) => emailDomain.includes(d))) {
    spamScore += 2;
    spamReasons.push(`disposable_email_domain: ${emailDomain}`);
  }

  // ---------------------------------------------------------------------------
  // Phone format check
  // ---------------------------------------------------------------------------
  const digitsOnly = phone.replace(/\D/g, "");
  if (digitsOnly.length < 10 || digitsOnly.length > 11) {
    spamScore += 2;
    spamReasons.push("phone_invalid_length");
  } else {
    const normalized = digitsOnly.length === 11 ? digitsOnly.slice(1) : digitsOnly;
    if (FAKE_PHONE_PATTERNS.has(normalized)) {
      spamScore += 2;
      spamReasons.push("phone_fake_pattern");
    }
  }

  // ---------------------------------------------------------------------------
  // Service area validation
  // ---------------------------------------------------------------------------
  const cityLower = city.trim().toLowerCase();
  const zipMatch = city.trim().match(/\b(\d{5})\b/);
  const serviceAreaValid =
    VALID_AREA_NAMES.some((area) => cityLower.includes(area)) ||
    (zipMatch !== null && VALID_ZIPS.has(zipMatch[1]));

  if (!serviceAreaValid) {
    spamScore += 3;
    spamReasons.push(`service_area_invalid: ${city.trim()}`);
  }

  // ---------------------------------------------------------------------------
  // Spam keyword check (name + email + description)
  // ---------------------------------------------------------------------------
  const textToScan = `${name} ${email} ${description}`.toLowerCase();
  for (const keyword of SPAM_KEYWORDS) {
    if (textToScan.includes(keyword)) {
      spamScore += 4;
      spamReasons.push(`spam_keyword: ${keyword}`);
      console.log(
        `[LeadSpam] Keyword "${keyword}" matched — email: ${email}, ip: ${request.headers.get("x-forwarded-for") ?? "unknown"}`
      );
      break; // One keyword match is sufficient to flag
    }
  }

  // ---------------------------------------------------------------------------
  // Description length check
  // ---------------------------------------------------------------------------
  if (description.trim().length < 15) {
    spamScore += 2;
    spamReasons.push("description_too_short");
  }

  // ---------------------------------------------------------------------------
  // Duplicate detection (same phone or email within 60 minutes)
  // ---------------------------------------------------------------------------
  purgeExpiredSubmissions();
  const emailKey = `email:${email.toLowerCase().trim()}`;
  const phoneKey = `phone:${digitsOnly}`;
  const isDuplicate =
    recentSubmissions.has(emailKey) || recentSubmissions.has(phoneKey);

  if (isDuplicate) {
    spamScore += 4;
    spamReasons.push("duplicate_submission");
  } else {
    const now = Date.now();
    recentSubmissions.set(emailKey, now);
    recentSubmissions.set(phoneKey, now);
  }

  // ---------------------------------------------------------------------------
  // Lead qualification
  // ---------------------------------------------------------------------------
  const qualifiedCandidate =
    spamScore <= 2 &&
    serviceAreaValid &&
    !honeypotTriggered &&
    name.trim().length > 0 &&
    phone.trim().length > 0;

  // ---------------------------------------------------------------------------
  // Build and send payload to Make webhook
  // ---------------------------------------------------------------------------
  const payload = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    service: service.trim(),
    city: city.trim(),
    description: description.trim(),
    sourcePage,
    leadType: "Form",
    spamScore,
    spamReasons,
    serviceAreaValid,
    honeypotTriggered,
    timeToSubmitSeconds,
    qualifiedCandidate,
    isDuplicate,
    submittedAt,
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("[LeadWebhook] Failed to deliver to Make:", err);
      // Don't surface this error to the user — the form submission is valid
    }
  }

  return Response.json({ success: true, qualifiedCandidate });
}
