import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { serviceSchema } from "@/lib/schema";
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
    title: `${service.name} in ${siteConfig.city}, ${siteConfig.state} — Find a Local Pro | ${siteConfig.displayName}`,
    description: `Need ${service.name.toLowerCase()} in ${siteConfig.city}? ${service.shortDesc} We connect you with a vetted local pro. Free quote, no obligation.`,
    alternates: { canonical: `/services/${slug}` },
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

  const otherServices = siteConfig.services.filter((s) => s.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service.name, service.longDesc)),
        }}
      />

      {/* Hero */}
      <section className="bg-green-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
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
            <span className="text-green-200 text-sm">
              Free quote · No obligation
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">

          {/* What to expect */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-green-800 mb-3">
              What to Expect from {service.name} in {siteConfig.city}
            </h2>
            <p className="text-green-900 text-sm leading-relaxed">{service.whatToExpect}</p>
          </div>

          {/* Rich content */}
          <div className="rich-content">
            <h2>How {service.name} Works in {siteConfig.city}</h2>
            <p>
              When you submit a request through {siteConfig.displayName}, you&apos;re connected with a licensed, insured {service.name.toLowerCase()} professional who serves your part of {siteConfig.county}. They&apos;ll contact you to confirm the details and give you an exact price before any work begins.
            </p>
            <p>
              <strong>There&apos;s no obligation to book</strong> until you&apos;ve heard the price and agreed. The referral through this site is completely free.
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
                  </Link>{": "}
                  {area.blurb}
                </li>
              ))}
            </ul>
          </div>

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
              Free referral · No obligation
            </p>
            <LeadForm compact />
          </div>
        </aside>
      </div>
    </>
  );
}
