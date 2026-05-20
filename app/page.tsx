import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { faqSchema } from "@/lib/schema";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: `${siteConfig.niche} ${siteConfig.city} TN | Same-Day Service | ${siteConfig.businessName}`,
  description: `Need ${siteConfig.niche.toLowerCase()} in ${siteConfig.city}, ${siteConfig.state}? ${siteConfig.businessName} offers same-day pickup, upfront pricing, and serves all of ${siteConfig.county}. Call ${siteConfig.phone}.`,
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
              ⚡ Same-Day Service Available
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              {siteConfig.heroHeading}
            </h1>
            <p className="text-lg text-green-100 mb-6 leading-relaxed">
              {siteConfig.heroSubheading}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {siteConfig.trustPoints.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-1.5 bg-green-600/50 text-white text-sm px-3 py-1.5 rounded-full"
                >
                  ✓ {point}
                </span>
              ))}
            </div>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-block bg-yellow-400 text-gray-900 font-extrabold text-xl px-8 py-4 rounded-full hover:bg-yellow-300 transition-colors shadow-lg"
            >
              📞 {siteConfig.phone}
            </a>
            <p className="mt-3 text-green-200 text-sm">
              ⭐ {siteConfig.stats.rating}/5 from {siteConfig.stats.reviewCount} reviews
            </p>
          </div>

          {/* Lead form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-900">
            <h2 className="text-xl font-bold mb-1 text-gray-900">Get Your Free Quote</h2>
            <p className="text-sm text-gray-500 mb-5">We respond within 1 hour</p>
            <LeadForm compact />
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-green-800 text-white py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: siteConfig.stats.jobsCompleted, label: "Jobs Completed" },
            { value: siteConfig.stats.yearsInBusiness + " Years", label: "In Business" },
            { value: siteConfig.stats.rating + " ⭐", label: "Average Rating" },
            { value: siteConfig.stats.citiesServed, label: "Cities Served" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-yellow-400">{stat.value}</div>
              <div className="text-green-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-16 px-4 bg-gray-50" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">
            {siteConfig.niche} Services in {siteConfig.city}
          </h2>
          <p className="text-center text-gray-500 mb-10">
            We haul almost anything. Click a service for details and pricing.
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
                <span className="text-green-700 font-semibold text-sm">{service.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">How It Works</h2>
          <p className="text-center text-gray-500 mb-10">
            {siteConfig.niche} in {siteConfig.city} couldn&apos;t be simpler.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Call or Request a Quote",
                desc: `Call ${siteConfig.phone} or fill out the form. We give you a price before we start — no surprises.`,
              },
              {
                step: "2",
                title: "We Show Up & Haul",
                desc: "Our uniformed crew arrives on time, loads everything, and cleans up after themselves.",
              },
              {
                step: "3",
                title: "You're Done",
                desc: "We handle disposal, recycling, and donation wherever possible. You just enjoy your clear space.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas served ── */}
      <section className="py-16 px-4 bg-gray-50" id="areas">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">
            Areas We Serve
          </h2>
          <p className="text-center text-gray-500 mb-8">
            We serve {siteConfig.city} and all surrounding communities in {siteConfig.county}.
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
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {siteConfig.faqs.map((faq) => (
              <details
                key={faq.q}
                className="border border-gray-200 rounded-xl overflow-hidden group"
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
          Get a free, no-obligation quote today. Same-day service available for {siteConfig.city} and surrounding areas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="bg-white text-green-700 font-extrabold px-8 py-4 rounded-full text-lg hover:bg-green-50 transition-colors"
          >
            📞 Call {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="bg-yellow-400 text-gray-900 font-extrabold px-8 py-4 rounded-full text-lg hover:bg-yellow-300 transition-colors"
          >
            Request a Quote Online
          </Link>
        </div>
      </section>
    </>
  );
}
