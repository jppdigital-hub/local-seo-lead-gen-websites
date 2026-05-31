"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

interface LeadFormFields {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  description: string;
  consent: boolean;
}

const EMPTY_FORM: LeadFormFields = {
  name: "",
  phone: "",
  email: "",
  service: "",
  city: "",
  description: "",
  consent: false,
};

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<LeadFormFields>(EMPTY_FORM);
  const [photo, setPhoto] = useState<File | null>(null);
  const [honeypot, setHoneypot] = useState(""); // filled only by bots
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const formLoadedAt = useRef<number>(0);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Record when the form page loads
  useEffect(() => {
    formLoadedAt.current = Date.now();
  }, []);

  // Render Turnstile widget once the script loads
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileRef.current) return;

    function renderWidget() {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
        });
      }
    }

    if (window.turnstile) {
      renderWidget();
    } else {
      window.onTurnstileLoad = renderWidget;
    }
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [target.name]: target.checked }));
      return;
    }
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhoto(e.target.files?.[0] ?? null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("phone", form.phone);
      payload.append("email", form.email);
      payload.append("service", form.service);
      payload.append("city", form.city);
      payload.append("description", form.description);
      payload.append("consent", form.consent ? "yes" : "no");
      payload.append("company_website", honeypot); // honeypot — blank for real users
      payload.append("formLoadedAt", String(formLoadedAt.current));
      payload.append("sourcePage", typeof window !== "undefined" ? window.location.href : "");

      if (TURNSTILE_SITE_KEY) {
        payload.append("turnstileToken", turnstileToken);
      }

      if (photo) {
        payload.append("photo", photo);
      }

      const res = await fetch("/api/submit-lead", {
        method: "POST",
        body: payload,
      });

      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(EMPTY_FORM);
      setPhoto(null);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    } catch {
      setStatus("error");
      setErrorMsg(`Something went wrong. Please email us at ${siteConfig.contactEmail}.`);
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Request received!</h3>
        <p className="text-green-700 leading-relaxed">
          Your request has been received. A local junk removal pro will be in touch with a free quote.
        </p>
        <p className="text-green-600 text-sm mt-3">
          No obligation until you agree to a price. The pro performs the work. We charge nothing for the connection.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500";

  return (
    <>
      {/* Load Turnstile script only if site key is configured */}
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad"
          strategy="lazyOnload"
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/*
          Honeypot field — visually hidden, never filled by real users.
          Bots that auto-fill all fields will trigger server-side rejection.
        */}
        <input
          type="text"
          name="company_website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
        />

        {/* Name + Phone */}
        <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Your Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Smith"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="(423) 555-0100"
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>

        {/* Service + City */}
        <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="service">
              What do you need removed? *
            </label>
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className={`${inputClass} bg-white`}
            >
              <option value="">— Select a service —</option>
              {siteConfig.services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Other / Multiple Items">Other / Multiple Items</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="city">
              Your City or Zip Code *
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              value={form.city}
              onChange={handleChange}
              placeholder="Chattanooga or 37401"
              className={inputClass}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">
            Describe what you need hauled *
          </label>
          <textarea
            id="description"
            name="description"
            rows={compact ? 2 : 3}
            required
            value={form.description}
            onChange={handleChange}
            placeholder="e.g. Old couch and mattress in the garage, needs same-day pickup"
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Photo upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="photo">
            Photo (optional)
          </label>
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700"
          />
          <p className="text-xs text-gray-400 mt-1">
            Upload a photo if you can. It helps the pro give a faster, more accurate quote.
          </p>
        </div>

        {/* Consent checkbox */}
        <label className="flex items-start gap-3 text-xs text-gray-500 leading-relaxed">
          <input
            name="consent"
            type="checkbox"
            required
            checked={form.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-500"
          />
          <span>
            I agree to be contacted about my junk removal request by ChattanoogaJunkRemovalPros.com and/or a local junk removal professional. I understand this is a free referral service and there is no obligation to book.
          </span>
        </label>

        {/* Cloudflare Turnstile widget (rendered only when site key is set) */}
        {TURNSTILE_SITE_KEY && <div ref={turnstileRef} />}

        {status === "error" && (
          <p className="text-red-600 text-sm">
            {errorMsg || `Something went wrong. Please email us at ${siteConfig.contactEmail}.`}
          </p>
        )}

        <button
          type="submit"
          disabled={
            status === "sending" ||
            (Boolean(TURNSTILE_SITE_KEY) && !turnstileToken)
          }
          className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-bold py-4 rounded-full text-lg transition-colors"
        >
          {status === "sending" ? "Sending…" : "Get My Free Quote →"}
        </button>

        <div className="text-xs text-gray-500 space-y-0.5 text-center">
          <p>Free referral service. No obligation.</p>
          <p>We are not a junk removal company. The local pro contacts you directly.</p>
        </div>
      </form>
    </>
  );
}
