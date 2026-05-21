import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { faqSchema } from "@/lib/schema";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: `Junk Removal Chattanooga TN — Find a Local Pro | ${siteConfig.displayName}`,
  description: `Need junk removal in Chattanooga, TN? We connect you with licensed, insured local pros who serve all of Hamilton County. Free quotes, same-day available.`,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Free Referral Service — No Obligation
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              {siteConfig.heroHeading}
            </h1>
            <p className="text-lg text-green-100 mb-6 leading-relaxed">
              {siteConfig.heroSubheading}
            </p>
            <div className="bg-green-600/40 border border-green-400/40 rounded-xl p-4 mb-6 text-sm text-green-100 leading-relaxed">
              <strong className="text-white">How it works:</strong> You describe the job → we connect you with a vetted local pro → they call you with a free quote. You only pay if you decide to book.
            </div>
            <div className="flex flex-wrap gap-3">
              {siteConfig.trustPoints.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-1.5 bg-green-600/50 text-white text-sm px-3 py-1.5 rounded-full"
                >
                  ✓ {point}
                </span>
              ))}
            </div>
          </div>

          {/* Lead form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-900">
            <h2 className="text-xl font-bold mb-1 text-gray-900">Get a Free Quote</h2>
            <p className="text-sm text-gray-500 mb-5">
              A local pro will contact you — usually within 1 hour.
            </p>
            <LeadForm compact />
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">How Our Referral Service Works</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            We&apos;re not the junk removal company — we connect you with the right local professional for your job. Here&apos;s what happens after you submit your request.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.howItWorks.map((item) => (
              <div key={item.step} className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-8">
            This is a free referral service. The local professional charges for the junk removal work — we charge nothing for the connection.
          </p>
        </div>
      </section>

      {/* ── About junk removal in Chattanooga ── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Junk Removal in Chattanooga, TN — What You Need to Know
          </h2>
          <div className="rich-content">
            <p>
              Chattanooga and Hamilton County generate significant demand for junk removal services year-round. Between the region&apos;s older housing stock, active real estate market, and frequent storms that leave yards full of debris, local residents and property owners regularly need fast, reliable haul-away service.
            </p>
            <p>
              Unlike many larger metro areas, Chattanooga&apos;s junk removal market is dominated by small, locally owned operators — not national franchises. That means the quality and availability of service can vary significantly from one provider to the next. Price differences of 30–50% for the same job are common. A referral service like this one helps you skip the guesswork and get connected with a professional who knows the local area, pricing, and disposal options.
            </p>
            <h2>What Does Junk Removal Cost in Chattanooga?</h2>
            <p>
              Most junk removal in Chattanooga is priced by the truckload or fraction thereof. Here&apos;s a rough guide to what you can expect:
            </p>
            <ul>
              <li><strong>Single item (one sofa, one appliance):</strong> $75 – $125</li>
              <li><strong>Quarter truckload (a few items, small pile):</strong> $100 – $175</li>
              <li><strong>Half truckload (medium cleanout or 6–8 items):</strong> $175 – $275</li>
              <li><strong>Full truckload (large cleanout, renovation debris):</strong> $300 – $500</li>
              <li><strong>Estate cleanout or specialty items (hot tubs, pianos):</strong> Quoted individually</li>
            </ul>
            <p>
              Prices vary based on the type of material, ease of access, and whether any items require special disposal (appliances with refrigerants, electronics with e-waste fees, etc.). All quotes from pros in our network are free and given before any work begins.
            </p>
            <h2>What Can Junk Removal Pros Haul?</h2>
            <p>
              Licensed junk removal professionals in Chattanooga handle a wide range of materials. Common items include:
            </p>
            <ul>
              <li>Furniture (sofas, beds, dressers, tables, chairs)</li>
              <li>Appliances (refrigerators, washers, dryers, dishwashers, AC units)</li>
              <li>Electronics (TVs, computers, printers — e-waste fees may apply)</li>
              <li>Mattresses and box springs</li>
              <li>Yard waste and storm debris (branches, brush, stumps, soil)</li>
              <li>Construction and renovation debris (drywall, lumber, tile, concrete)</li>
              <li>Hot tubs and spas</li>
              <li>Exercise equipment</li>
              <li>Estate and garage cleanouts</li>
            </ul>
            <p>
              Items that cannot be hauled include: hazardous waste, paint and solvents, asbestos, motor oil, propane tanks, medical waste, and certain chemicals. If you&apos;re unsure about a specific item, mention it in your request and the pro will clarify.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-16 px-4 bg-gray-50" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">
            Types of Junk Removal We Connect You With
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Local pros in Chattanooga handle all of the following. Click any service for a full guide.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-300 transition-all group"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{service.shortDesc}</p>
                <span className="text-green-700 font-semibold text-sm">{service.avgCost}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas served ── */}
      <section className="py-16 px-4" id="areas">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">
            Serving Chattanooga and All of Hamilton County
          </h2>
          <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
            The professionals in our network cover {siteConfig.city} and all surrounding communities. Click your area to see local junk removal details.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="bg-green-700 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-green-800 transition-colors"
            >
              {siteConfig.city} (Main)
            </Link>
            {siteConfig.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white border border-gray-200 text-gray-700 font-medium px-5 py-2.5 rounded-full hover:border-green-400 hover:text-green-700 transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {siteConfig.faqs.map((faq) => (
              <details
                key={faq.q}
                className="border border-gray-200 rounded-xl overflow-hidden group bg-white"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 list-none">
                  {faq.q}
                  <span className="ml-4 text-green-700 group-open:rotate-180 transition-transform text-lg">▾</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-green-700 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Ready to Clear the Clutter?
        </h2>
        <p className="text-green-100 mb-6 max-w-xl mx-auto">
          Submit your job details and we&apos;ll connect you with a local Chattanooga junk removal pro — free, no obligation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-yellow-400 text-gray-900 font-extrabold px-10 py-4 rounded-full text-lg hover:bg-yellow-300 transition-colors"
        >
          Get Your Free Quote
        </Link>
        <p className="mt-4 text-green-200 text-sm">
          This is a free referral service. No fees, no obligation until you book with the pro.
        </p>
      </section>
    </>
  );
}
