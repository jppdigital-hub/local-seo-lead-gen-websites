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
    title: `Junk Removal in ${area.name}, ${siteConfig.state} — Find a Local Pro | ${siteConfig.displayName}`,
    description: `Need junk removal in ${area.name}, ${siteConfig.state}? We connect ${area.name} residents with licensed, insured local pros. Free quotes, same-day available.`,
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

  const otherAreas = siteConfig.areas.filter((a) => a.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-green-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-300 text-sm font-medium mb-2 uppercase tracking-wide">
            Free Referral Service · {siteConfig.county}, {siteConfig.state}
          </p>
          <h1 className="text-4xl font-extrabold mb-3">
            Junk Removal in {area.name}, {siteConfig.state}
          </h1>
          <p className="text-green-100 text-lg max-w-2xl leading-relaxed">
            {area.blurb} We connect {area.name} residents with licensed, insured junk removal professionals — free quotes, no obligation.
          </p>
          <div className="mt-5">
            <span className="bg-green-600/50 text-white text-sm px-4 py-2 rounded-full">
              ✓ Serving {area.name} (pop. {area.pop}) and surrounding areas
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">

          {/* How it works callout */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-green-800 mb-2">
              How the Referral Works for {area.name} Residents
            </h2>
            <ol className="space-y-2 text-sm text-green-900">
              {siteConfig.howItWorks.map((step) => (
                <li key={step.step} className="flex gap-3">
                  <span className="w-5 h-5 bg-green-700 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {step.step}
                  </span>
                  <span><strong>{step.title}:</strong> {step.desc}</span>
                </li>
              ))}
            </ol>
            <p className="text-xs text-green-700 mt-3">
              This is a free referral service. The local professional charges for the work — we charge nothing.
            </p>
          </div>

          {/* Rich content */}
          <div className="rich-content">
            <h2>Junk Removal Services Available in {area.name}</h2>
            <p>
              Junk removal professionals in our network serve {area.name} and can handle all common residential and commercial haul-away needs. Here&apos;s what&apos;s available:
            </p>
            <ul>
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>
                    <strong>{s.name}</strong>
                  </Link>{" "}
                  — {s.shortDesc} Typical cost: {s.avgCost}.
                </li>
              ))}
            </ul>

            <h2>What Does Junk Removal Cost in {area.name}?</h2>
            <p>
              Pricing for junk removal in {area.name} follows the same general structure as the broader {siteConfig.city} market. Jobs are priced by truckload volume:
            </p>
            <ul>
              <li><strong>Single item (one sofa, one appliance):</strong> $75 – $125</li>
              <li><strong>Quarter truckload:</strong> $100 – $175</li>
              <li><strong>Half truckload:</strong> $175 – $275</li>
              <li><strong>Full truckload:</strong> $300 – $500</li>
              <li><strong>Specialty or estate jobs:</strong> Quoted individually</li>
            </ul>
            <p>
              All quotes are free and given before any work begins. You have no obligation to book.
            </p>

            <h2>About {area.name}, {siteConfig.stateFullName}</h2>
            <p>
              {area.blurb} As part of {siteConfig.county}, {area.name} residents have access to the same professional junk removal network that serves greater {siteConfig.city}.
            </p>

            <h2>Other Areas We Serve Near {area.name}</h2>
            <p>
              In addition to {area.name}, our network covers {siteConfig.city} and the following surrounding communities in {siteConfig.county}:
            </p>
            <ul>
              <li>
                <Link href="/">{siteConfig.city} (main service area)</Link>
              </li>
              {otherAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`}>{a.name}</Link> — {a.blurb}
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
              Junk removal — same day available
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
