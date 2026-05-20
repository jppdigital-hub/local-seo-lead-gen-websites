import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About | ${siteConfig.businessName}`,
  description: `${siteConfig.businessName} is a locally-owned ${siteConfig.niche.toLowerCase()} company serving ${siteConfig.city}, ${siteConfig.state} and all of ${siteConfig.county}. Fully licensed and insured.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold mb-4">
        About {siteConfig.businessName}
      </h1>
      <p className="text-xl text-gray-500 mb-10">
        Locally owned and operated in {siteConfig.city}, {siteConfig.stateFullName}.
      </p>

      <div className="rich-content space-y-6">
        <p>
          {siteConfig.businessName} has been serving {siteConfig.city} and{" "}
          {siteConfig.county} for {siteConfig.stats.yearsInBusiness} years. We
          started as a small local operation and have grown to complete over{" "}
          {siteConfig.stats.jobsCompleted} jobs for homeowners, landlords,
          contractors, and businesses across the region.
        </p>

        <p>
          Our mission is simple: make {siteConfig.niche.toLowerCase()} fast,
          affordable, and stress-free. We quote before we start, we show up when
          we say we will, and we clean up after ourselves. No surprises.
        </p>

        <h2>What Makes Us Different</h2>
        <ul>
          {siteConfig.trustPoints.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <h2>Our Service Area</h2>
        <p>
          We serve {siteConfig.city} and all surrounding communities in{" "}
          {siteConfig.county}:
        </p>
        <ul>
          {siteConfig.areas.map((area) => (
            <li key={area.slug}>
              <Link href={`/areas/${area.slug}`} className="text-green-700 font-medium hover:underline">
                {area.name}
              </Link>{" "}
              (pop. {area.pop})
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block bg-green-700 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-green-800 transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
