import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const partnerStandards = [
  "Serve Chattanooga and Hamilton County",
  "Respond directly to quote requests",
  "Provide upfront pricing before work begins",
  "Handle scheduling, loading, hauling, and disposal directly",
  "Confirm insurance and service details with the customer when asked",
];

export const metadata: Metadata = {
  title: `How It Works | ${siteConfig.displayName}`,
  description: `${siteConfig.displayName} is a free referral service connecting Chattanooga residents with local junk removal professionals in ${siteConfig.county}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold mb-4">How {siteConfig.displayName} Works</h1>
      <p className="text-xl text-gray-500 mb-10">
        We&apos;re a free referral service, not a junk removal company.
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-yellow-800 mb-2">Important: What We Are (and Aren&apos;t)</h2>
        <p className="text-yellow-900 text-sm leading-relaxed">
          {siteConfig.displayName} does <strong>not</strong> perform junk removal. We connect residents and property owners in {siteConfig.city} and {siteConfig.county} with independent junk removal professionals who operate in the area. When you submit a quote request, a local pro, not us, will contact you directly. You deal with them for pricing, scheduling, and the actual work.
        </p>
      </div>

      <div className="rich-content space-y-6">
        <h2>The Simple Version</h2>
        <p>
          Finding a reliable junk removal pro in {siteConfig.city} takes time. You&apos;d normally spend 20 to 30 minutes searching, reading reviews, calling multiple companies, and comparing prices. We help by forwarding your job request to a local pro who serves {siteConfig.county} and handles your type of job.
        </p>
        <p>
          When the pro contacts you, they will give you a price. If you like it, you book. If not, there&apos;s no obligation.
        </p>

        <h2>Step-by-Step: What Happens After You Submit a Request</h2>
        <ol style={{paddingLeft: "1.5rem", listStyleType: "decimal"}}>
          {siteConfig.howItWorks.map((step) => (
            <li key={step.step} style={{marginBottom: "0.75rem"}}>
              <strong>{step.title}:</strong> {step.desc}
            </li>
          ))}
          <li>
            <strong>The pro does the work:</strong> If you agree to the quote, you schedule directly with the professional. They handle loading, hauling, disposal, and cleanup.
          </li>
          <li>
            <strong>You pay the pro directly:</strong> Payment goes to the local business, not to us. We charge nothing for the referral.
          </li>
        </ol>

        <h2>Who Are the Pros?</h2>
        <p>
          The professionals we refer to are independent junk removal businesses operating in {siteConfig.city} and {siteConfig.county}. We aim to work with pros who meet these standards:
        </p>
        <ul>
          {partnerStandards.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p>
          You should always verify insurance, pricing, availability, and service details directly with the pro before work begins.
        </p>

        <h2>Our Service Area</h2>
        <p>
          We connect homeowners, landlords, property managers, and businesses throughout {siteConfig.city} and {siteConfig.county}, including:
        </p>
        <ul>
          {siteConfig.areas.map((area) => (
            <li key={area.slug}>
              <Link href={`/areas/${area.slug}`}>{area.name}</Link>: {area.blurb}
            </li>
          ))}
        </ul>

        <h2>Is There Any Cost to Use This Service?</h2>
        <p>
          No. Submitting a request and being connected to a local pro is completely free. The junk removal professional charges for the work. Those prices are set entirely by the pro and quoted before any work begins. We don&apos;t mark up the price or add any fees.
        </p>

        <h2>Questions?</h2>
        <p>
          Email us at <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> or use the <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
