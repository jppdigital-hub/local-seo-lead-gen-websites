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
    title: `${service.name} in ${siteConfig.city}, ${siteConfig.state}`,
    description: `${service.name} in ${siteConfig.city} — ${service.shortDesc} ${service.price}. Call ${siteConfig.phone} for same-day service.`,
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
          <h1 className="text-4xl font-extrabold mb-3">
            {service.name} in {siteConfig.city}, {siteConfig.state}
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">{service.longDesc}</p>
          <div className="mt-4 flex gap-4 flex-wrap items-center">
            <span className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full text-sm">
              {service.price}
            </span>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="text-white underline underline-offset-2 font-medium"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rich-content">
            <h2>
              Why Choose {siteConfig.businessName} for {service.name}?
            </h2>
            <p>
              When you need {service.name.toLowerCase()} in {siteConfig.city},{" "}
              {siteConfig.state}, you want a crew that shows up on time, does the
              job right, and charges a fair price. That&apos;s exactly what we deliver.
            </p>
            <ul>
              {siteConfig.trustPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <h2>Serving All of {siteConfig.county}</h2>
            <p>
              We provide {service.name.toLowerCase()} throughout {siteConfig.city} and
              all surrounding communities including{" "}
              {siteConfig.areas.map((a) => a.name).join(", ")}.
            </p>
          </div>

          {/* Other services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Other Services We Offer</h3>
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
            <h3 className="text-lg font-bold mb-1">Get a Free Quote</h3>
            <p className="text-sm text-gray-500 mb-4">
              For {service.name.toLowerCase()} in {siteConfig.city}
            </p>
            <LeadForm compact />
          </div>
        </aside>
      </div>
    </>
  );
}
