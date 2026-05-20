import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: `Contact | Free ${siteConfig.niche} Quote in ${siteConfig.city}`,
  description: `Get a free ${siteConfig.niche.toLowerCase()} quote in ${siteConfig.city}, ${siteConfig.state}. Call ${siteConfig.phone} or fill out the form — we respond within 1 hour.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Info column */}
        <div>
          <h1 className="text-4xl font-extrabold mb-4">
            Get a Free {siteConfig.niche} Quote
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            We serve {siteConfig.city} and all of {siteConfig.county}. Fill out
            the form or call us directly — we&apos;re typically available same day.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <div className="font-semibold text-gray-800">Phone</div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="text-green-700 font-bold text-lg hover:underline"
                >
                  {siteConfig.phone}
                </a>
                <p className="text-sm text-gray-500 mt-0.5">
                  Mon–Fri 7am–7pm, Sat 8am–5pm
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">✉️</div>
              <div>
                <div className="font-semibold text-gray-800">Email</div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-green-700 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <div className="font-semibold text-gray-800">Service Area</div>
                <p className="text-gray-600 text-sm">
                  {siteConfig.city}, {siteConfig.stateFullName} and all of{" "}
                  {siteConfig.county}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-2">⚡ Need Same-Day?</h3>
            <p className="text-green-700 text-sm">
              Call before noon for the best chance of same-day service. We do our
              best to accommodate urgent requests.
            </p>
          </div>
        </div>

        {/* Form column */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-xl font-bold mb-1">Request a Quote</h2>
          <p className="text-sm text-gray-500 mb-6">
            We&apos;ll get back to you within 1 hour.
          </p>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
