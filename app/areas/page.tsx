import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Junk Removal Service Areas in ${siteConfig.county} | ${siteConfig.displayName}`,
  description: `Find a local junk removal pro in ${siteConfig.city} and all of ${siteConfig.county}: East Ridge, Red Bank, Hixson, Signal Mountain, Soddy-Daisy, Collegedale, Ooltewah, and Lookout Mountain.`,
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="max-w-2xl mb-10">
        <p className="text-green-700 text-sm font-semibold uppercase tracking-wide mb-2">
          Free Referral Service · {siteConfig.county}, {siteConfig.state}
        </p>
        <h1 className="text-4xl font-extrabold mb-4">
          Junk Removal Service Areas in {siteConfig.county}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our network of licensed, insured junk removal professionals covers {siteConfig.city} and all communities throughout {siteConfig.county}. Select your area for local pricing, availability, and service details.
        </p>
      </div>

      {/* Main city */}
      <div className="mb-8">
        <Link
          href="/"
          className="flex items-start gap-4 bg-green-700 text-white rounded-xl p-6 hover:bg-green-800 transition-colors group"
        >
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold">{siteConfig.city}, {siteConfig.state}</h2>
              <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">
                Main Service Area
              </span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              The primary {siteConfig.niche.toLowerCase()} service area. Covers all of downtown {siteConfig.city} and the surrounding urban core.
            </p>
          </div>
          <div className="text-green-300 text-xl font-bold group-hover:translate-x-1 transition-transform">
            →
          </div>
        </Link>
      </div>

      {/* Area grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {siteConfig.areas.map((area) => (
          <Link
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200 hover:border-green-400 hover:shadow-md transition-all group"
          >
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  {area.name}
                </h2>
                <span className="text-xs text-gray-400">
                  Pop. {area.pop}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {area.blurb}
              </p>
            </div>
            <div className="text-green-600 text-lg font-bold group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1">
              →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 text-sm text-gray-600">
        <p>
          <strong>Don&apos;t see your area?</strong> Our network covers all of {siteConfig.county} and some surrounding areas. Submit a request on the{" "}
          <Link href="/contact" className="text-green-700 hover:underline font-medium">contact page</Link>{" "}
          and describe your location. We will do our best to connect you with a local professional.
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/contact"
          className="inline-block bg-green-700 text-white font-extrabold px-8 py-4 rounded-full text-lg hover:bg-green-800 transition-colors"
        >
          Get a Free Quote for Your Area
        </Link>
        <p className="mt-3 text-gray-400 text-sm">
          Free referral service. No obligation until you agree to a price.
        </p>
      </div>
    </div>
  );
}
