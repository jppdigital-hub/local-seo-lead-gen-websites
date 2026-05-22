import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Junk Removal Services in ${siteConfig.city}, ${siteConfig.state} | ${siteConfig.displayName}`,
  description: `Browse all junk removal services available in ${siteConfig.city}: furniture removal, appliance haul-away, estate cleanouts, yard waste, construction debris, and more. Free quotes from local pros.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="max-w-2xl mb-10">
        <p className="text-green-700 text-sm font-semibold uppercase tracking-wide mb-2">
          Free Referral Service · {siteConfig.city}, {siteConfig.state}
        </p>
        <h1 className="text-4xl font-extrabold mb-4">
          Junk Removal Services in {siteConfig.city}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Local pros in our network handle all types of junk removal across {siteConfig.county}. Select a service below to learn what to expect, typical costs, and how to get a free quote.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-10 text-sm text-yellow-900 max-w-2xl">
        <strong>Note:</strong> {siteConfig.displayName} is a free referral service. We connect you with local professionals who perform the work and set the pricing.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-green-400 transition-all group flex flex-col"
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
              {service.name}
            </h2>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-grow">
              {service.shortDesc}
            </p>
            <div className="mt-auto">
              <span className="inline-block bg-green-50 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                {service.avgCost}
              </span>
              <div className="text-green-700 text-sm font-semibold group-hover:underline">
                Learn more and get a free quote →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14 bg-green-700 text-white rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-3">Not Sure What You Need?</h2>
        <p className="text-green-100 mb-6 max-w-xl mx-auto">
          Describe your job and a local pro will assess it and give you a free quote. Most jobs, from single items to full estate cleanouts, are handled by the same professional crew.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-yellow-400 text-gray-900 font-extrabold px-8 py-4 rounded-full text-lg hover:bg-yellow-300 transition-colors"
        >
          Get a Free Quote
        </Link>
        <p className="mt-4 text-green-200 text-sm">
          Free referral service. No obligation until you agree to a price.
        </p>
      </div>
    </div>
  );
}
