import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import LeadForm from "@/components/LeadForm";

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} in ${siteConfig.city}, ${siteConfig.state} | Free Local Quote`,
    description: `Need ${service.name.toLowerCase()} in ${siteConfig.city}? ${service.shortDesc} We connect you with a local pro. Free quote, no obligation.`,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.name} in ${siteConfig.city}, ${siteConfig.state}`,
      description: `${service.shortDesc} Free referral service, the local pro contacts you with a quote.`,
      url: `${siteConfig.domain}/services/${slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = siteConfig.services.filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service.name, service.longDesc)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.name, url: `/services/${slug}` },
          ])),
        }}
      />
      {service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(service.faqs)),
          }}
        />
      )}

      {/* Hero */}
      <section className="bg-green-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-green-300 text-xs mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            {" › "}
            <Link href="/services" className="hover:text-white">Services</Link>
            {" › "}
            <span className="text-white">{service.name}</span>
          </nav>
          <div className="text-5xl mb-4">{service.icon}</div>
          <p className="text-green-300 text-sm font-medium mb-2 uppercase tracking-wide">
            Free Referral Service · {siteConfig.city}, {siteConfig.state}
          </p>
          <h1 className="text-4xl font-extrabold mb-3">
            {service.name} in {siteConfig.city}, {siteConfig.state}
          </h1>
          <p className="text-green-100 text-lg max-w-2xl leading-relaxed">{service.longDesc}</p>
          <div className="mt-5 flex gap-3 flex-wrap items-center">
            <span className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full text-sm">
              Typical cost: {service.avgCost}
            </span>
            <span className="bg-green-600/50 text-white text-sm px-4 py-2 rounded-full">
              {service.timeEstimate}
            </span>
          </div>
          <p className="text-green-200 text-xs mt-3">
            We are not a junk removal company. We connect you with a local pro who performs the work, sets pricing, and handles scheduling directly.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">

          {/* Regulatory notes shown only if present */}
          {service.regulatoryNotes && (
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5">
              <h2 className="text-base font-bold text-amber-900 mb-2">
                Local Rules and Regulations for {service.name}
              </h2>
              <p className="text-amber-800 text-sm leading-relaxed">{service.regulatoryNotes}</p>
            </div>
          )}

          {/* What to expect */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-green-800 mb-3">
              What to Expect from {service.name} in {siteConfig.city}
            </h2>
            <p className="text-green-900 text-sm leading-relaxed">{service.whatToExpect}</p>
          </div>

          {/* Accepted and refused items */}
          {(service.acceptedItems.length > 0 || service.refusedItems.length > 0) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {service.acceptedItems.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-green-600">✓</span> What Pros Can Haul
                  </h3>
                  <ul className="space-y-1.5 list-none pl-0">
                    {service.acceptedItems.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {service.refusedItems.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-red-500">✗</span> What Pros Cannot Haul
                  </h3>
                  <ul className="space-y-1.5 list-none pl-0">
                    {service.refusedItems.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Rich content */}
          <div className="rich-content">
            <h2>How {service.name} Works in {siteConfig.city}</h2>
            <p>
              When you submit a request through {siteConfig.displayName}, you are connected with a local {service.name.toLowerCase()} professional who serves your part of {siteConfig.county}. They contact you to confirm the details and give you an exact price before any work begins.
            </p>
            <p>
              <strong>There is no obligation to book</strong> until you have heard the price and agreed. The referral through this site is completely free. You should verify insurance, pricing, and service details directly with the pro before work begins.
            </p>

            <h2>Tips for Your {service.name} Job</h2>
            <ul>
              {service.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>

            <h2>Service Areas for {service.name} Near {siteConfig.city}</h2>
            <p>
              Professionals in our network provide {service.name.toLowerCase()} throughout {siteConfig.city} and all of {siteConfig.county}, including:
            </p>
            <ul>
              {siteConfig.areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`}>
                    {service.name} in {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ section */}
          {service.faqs.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions About {service.name} in {siteConfig.city}
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq) => (
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

          {/* Other services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Other Services Available in {siteConfig.city}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 hover:border-green-400 hover:text-green-700 transition-colors text-sm font-medium"
                >
                  <span>{s.icon}</span>
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="mt-3">
              <Link href="/services" className="text-green-700 text-sm font-semibold hover:underline">
                View all services
              </Link>
            </div>
          </div>

          {/* Resource links */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-800 mb-3">Related Guides</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/resources/junk-removal-cost-chattanooga" className="text-green-700 hover:underline">Junk Removal Cost in Chattanooga (2026 Guide)</Link></li>
              <li><Link href="/resources/city-pickup-vs-junk-removal" className="text-green-700 hover:underline">City Pickup vs. Private Hauler: What You Can and Cannot Use</Link></li>
              <li><Link href="/resources/donate-furniture-chattanooga" className="text-green-700 hover:underline">Where to Donate Furniture in Chattanooga</Link></li>
            </ul>
          </div>
        </div>

        {/* Sticky form */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-1">Get Connected with a Pro</h3>
            <p className="text-sm text-gray-500 mb-1">
              {service.name} in {siteConfig.city}
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Free referral · No obligation · Local pro contacts you
            </p>
            <LeadForm compact />
          </div>
        </aside>
      </div>
    </>
  );
}
