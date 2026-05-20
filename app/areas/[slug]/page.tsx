import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
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
    title: `${siteConfig.niche} in ${area.name}, ${siteConfig.state} | ${siteConfig.businessName}`,
    description: `Looking for ${siteConfig.niche.toLowerCase()} in ${area.name}, ${siteConfig.state}? ${siteConfig.businessName} serves ${area.name} with same-day service. Call ${siteConfig.phone}.`,
    alternates: { canonical: `/areas/${slug}` },
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

  return (
    <>
      {/* Hero */}
      <section className="bg-green-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-green-300 mb-2 font-medium">
            📍 Serving {area.name}, {siteConfig.state}
          </div>
          <h1 className="text-4xl font-extrabold mb-3">
            {siteConfig.niche} in {area.name}, {siteConfig.state}
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            {siteConfig.businessName} provides fast, affordable{" "}
            {siteConfig.niche.toLowerCase()} to {area.name} residents.
            Same-day service available. Call {siteConfig.phone} for a free quote.
          </p>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="mt-6 inline-block bg-yellow-400 text-gray-900 font-extrabold px-8 py-4 rounded-full text-lg hover:bg-yellow-300 transition-colors"
          >
            📞 Call {siteConfig.phone}
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rich-content">
            <h2>
              {siteConfig.niche} Services Available in {area.name}
            </h2>
            <p>
              {area.name} residents trust {siteConfig.businessName} for reliable,
              same-day {siteConfig.niche.toLowerCase()}. Our team serves{" "}
              {area.name} (pop. {area.pop}) as part of our broader{" "}
              {siteConfig.county} service area.
            </p>
            <p>
              Whether you need a single item hauled or a full property cleanout,
              we handle it all. We&apos;re licensed, insured, and offer upfront pricing
              before we start any work.
            </p>

            <h2>What We Haul in {area.name}</h2>
            <ul>
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-green-700 font-medium">
                    {s.name}
                  </Link>{" "}
                  — {s.shortDesc}
                </li>
              ))}
            </ul>

            <h2>Why {area.name} Chooses Us</h2>
            <ul>
              {siteConfig.trustPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Other areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Other Areas We Serve Near {area.name}</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className="border border-gray-200 rounded-full px-4 py-2 text-sm hover:border-green-400 hover:text-green-700 transition-colors"
              >
                {siteConfig.city} (Main)
              </Link>
              {siteConfig.areas
                .filter((a) => a.slug !== slug)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/areas/${a.slug}`}
                    className="border border-gray-200 rounded-full px-4 py-2 text-sm hover:border-green-400 hover:text-green-700 transition-colors"
                  >
                    {a.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Sticky form */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-1">Free Quote for {area.name}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {siteConfig.niche} — same day available
            </p>
            <LeadForm compact />
          </div>
        </aside>
      </div>
    </>
  );
}
