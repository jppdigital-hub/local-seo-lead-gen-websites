import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import LeadForm from "@/components/LeadForm";

export function generateStaticParams() {
  return siteConfig.areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = siteConfig.areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Junk Removal in ${area.name}, ${siteConfig.state} | Free Local Quote`,
    description: `Need junk removal in ${area.name}, ${siteConfig.state}? We connect ${area.name} residents with licensed, insured local pros. Free quotes, no obligation.`,
    alternates: { canonical: `/areas/${slug}` },
    openGraph: {
      title: `Junk Removal in ${area.name}, ${siteConfig.state}`,
      description: `Free referral service connecting ${area.name} residents with licensed junk removal pros. No obligation until you agree to a price.`,
      url: `${siteConfig.domain}/areas/${slug}`,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = siteConfig.areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const otherAreas = siteConfig.areas.filter((a) => a.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(
            `Junk Removal Referral Service in ${area.name}`,
            `Free referral service connecting ${area.name} residents with licensed, insured junk removal professionals.`,
            area.name
          )),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/areas" },
            { name: area.name, url: `/areas/${slug}` },
          ])),
        }}
      />
      {area.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(area.faqs)),
          }}
        />
      )}

      {/* Hero */}
      <section className="bg-green-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-green-300 text-xs mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            {" › "}
            <Link href="/areas" className="hover:text-white">Service Areas</Link>
            {" › "}
            <span className="text-white">{area.name}</span>
          </nav>
          <p className="text-green-300 text-sm font-medium mb-2 uppercase tracking-wide">
            Free Referral Service · {siteConfig.county}, {siteConfig.state}
          </p>
          <h1 className="text-4xl font-extrabold mb-3">
            Junk Removal in {area.name}, {siteConfig.state}
          </h1>
          <p className="text-green-100 text-lg max-w-2xl leading-relaxed">
            {area.blurb} We connect {area.name} residents with licensed, insured junk removal professionals. Free quotes, no obligation.
          </p>
          <div className="mt-5 flex gap-3 flex-wrap">
            <span className="bg-green-600/50 text-white text-sm px-4 py-2 rounded-full">
              ✓ Serving {area.name} (pop. {area.pop})
            </span>
            <span className="bg-green-600/50 text-white text-sm px-4 py-2 rounded-full">
              ✓ Free quotes, no obligation
            </span>
          </div>
          <p className="text-green-200 text-xs mt-3">
            We are not a junk removal company. We connect you with a licensed local pro who performs the work.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">

          {/* Neighborhood profile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h2 className="text-base font-bold text-green-800 mb-2">Property Types</h2>
              <p className="text-green-900 text-sm leading-relaxed">{area.propertyTypes}</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h2 className="text-base font-bold text-green-800 mb-2">Access and Logistics</h2>
              <p className="text-green-900 text-sm leading-relaxed">{area.logistics}</p>
            </div>
          </div>

          {/* Common jobs */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Most Common Junk Removal Jobs in {area.name}</h2>
            <ul className="space-y-2">
              {area.commonJobs.map((job) => (
                <li key={job} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                  {job}
                </li>
              ))}
            </ul>
          </div>

          {/* How it works callout */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              How the Referral Works for {area.name} Residents
            </h2>
            <ol className="space-y-2 text-sm text-gray-700">
              {siteConfig.howItWorks.map((step) => (
                <li key={step.step} className="flex gap-3">
                  <span className="w-5 h-5 bg-green-700 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {step.step}
                  </span>
                  <span><strong>{step.title}:</strong> {step.desc}</span>
                </li>
              ))}
            </ol>
            <p className="text-xs text-gray-500 mt-3">
              This is a free referral service. The local professional charges for the work — we charge nothing for the connection.
            </p>
          </div>

          {/* Pricing section */}
          <div className="rich-content">
            <h2>What Does Junk Removal Cost in {area.name}?</h2>
            <p>
              Pricing for junk removal in {area.name} follows the same volume-based structure as the broader {siteConfig.city} market:
            </p>
            <ul>
              <li><strong>Minimum load (1 to 2 cubic yards, 1 to 2 items):</strong> $95 to $125</li>
              <li><strong>Quarter truckload (80 to 120 cubic feet):</strong> approximately $144</li>
              <li><strong>Half truckload (180 to 240 cubic feet):</strong> approximately $287</li>
              <li><strong>Three-quarter truckload (300 to 360 cubic feet):</strong> approximately $414</li>
              <li><strong>Full truckload (420 to 480 cubic feet):</strong> approximately $591</li>
              <li><strong>Estate cleanouts and specialty jobs:</strong> quoted individually, typically $1,200 to $2,000+ for a full property</li>
            </ul>
            <p>
              All quotes are free and given before any work begins. You have no obligation to book.
            </p>

            <h2>Junk Removal Services Available in {area.name}</h2>
            <p>
              Professionals in our network serve {area.name} and handle all common residential and commercial haul-away needs:
            </p>
            <ul>
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>
                    <strong>{s.name}</strong>
                  </Link>{": "}
                  {s.shortDesc}
                </li>
              ))}
            </ul>
          </div>

          {/* Local resources — shown only if present */}
          {area.localResources.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Local Resources Near {area.name}</h2>
              <div className="space-y-4">
                {area.localResources.map((resource) => (
                  <div key={resource.name} className="text-sm">
                    <strong className="text-blue-800">{resource.name}</strong>
                    <p className="text-blue-700">{resource.address}</p>
                    <p className="text-blue-700 mt-0.5">{resource.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ section */}
          {area.faqs.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Junk Removal in {area.name}: Common Questions
              </h2>
              <div className="space-y-3">
                {area.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="border border-gray-200 rounded-xl overflow-hidden group bg-white"
                  >
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 list-none text-sm">
                      {faq.q}
                      <span className="ml-4 text-green-700 group-open:rotate-180 transition-transform text-lg flex-shrink-0">▾</span>
                    </summary>
                    <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Other areas */}
          <div className="rich-content">
            <h2>Other Areas We Serve Near {area.name}</h2>
            <p>
              In addition to {area.name}, our network covers {siteConfig.city} and these surrounding communities in {siteConfig.county}:
            </p>
            <ul>
              <li>
                <Link href="/">{siteConfig.city} (main service area)</Link>
              </li>
              {otherAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`}>{a.name}</Link>: {a.blurb}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky form */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-1">Free Quote for {area.name}</h3>
            <p className="text-sm text-gray-500 mb-1">
              Junk removal — all of {siteConfig.county}
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Free referral · No obligation · Local pro contacts you
            </p>
            <LeadForm compact />
          </div>

          <div className="mt-4 bg-white border border-gray-200 rounded-xl p-4">
            <h4 className="font-bold text-sm text-gray-800 mb-2">Related Guides</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="/resources/junk-removal-cost-chattanooga" className="text-green-700 hover:underline">2026 Pricing Guide</Link></li>
              <li><Link href="/resources/city-pickup-vs-junk-removal" className="text-green-700 hover:underline">City Pickup vs. Private Hauler</Link></li>
              <li><Link href="/resources/donate-furniture-chattanooga" className="text-green-700 hover:underline">Where to Donate Furniture</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
