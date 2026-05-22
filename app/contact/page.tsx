import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: `Get a Free Junk Removal Quote in ${siteConfig.city} | ${siteConfig.displayName}`,
  description: `Submit your junk removal job in ${siteConfig.city}, ${siteConfig.state}. A local licensed pro will contact you with a free quote. No obligation.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Info column */}
        <div>
          <h1 className="text-4xl font-extrabold mb-4">
            Get a Free Junk Removal Quote in {siteConfig.city}
          </h1>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Describe your job and we&apos;ll connect you with a licensed, insured local junk removal professional in {siteConfig.county}. They will contact you directly with a free, no-obligation quote.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 text-sm text-yellow-900">
            <strong>Note:</strong> {siteConfig.displayName} is a free referral service, not a junk removal company. The local professional you&apos;re connected with performs the work and sets the price.
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✉️</div>
              <div>
                <div className="font-semibold text-gray-800">Email</div>
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-green-700 hover:underline">
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <div className="font-semibold text-gray-800">Service Area</div>
                <p className="text-gray-600 text-sm">
                  {siteConfig.city}, {siteConfig.stateFullName} and all of {siteConfig.county}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">⏱️</div>
              <div>
                <div className="font-semibold text-gray-800">Response Time</div>
                <p className="text-gray-600 text-sm">
                  A local pro will contact you during business hours (Mon–Sat, 7am–6pm).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form column */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-xl font-bold mb-1">Describe Your Job</h2>
          <p className="text-sm text-gray-500 mb-6">
            A local pro will contact you with a free quote.
          </p>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
