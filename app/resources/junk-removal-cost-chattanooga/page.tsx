import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Junk Removal Cost in Chattanooga, TN (2026 Price Guide) | ChattanoogaJunkRemovalPros.com",
  description:
    "How much does junk removal cost in Chattanooga? Real 2026 pricing from local operators: minimum loads, full truckloads, and specialty item surcharges explained.",
  alternates: { canonical: "/resources/junk-removal-cost-chattanooga" },
};

export default function JunkRemovalCostPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      {/* Green header section */}
      <div className="bg-green-700 rounded-2xl px-8 py-10 mb-10 text-white">
        <h1 className="text-4xl font-extrabold mb-4">
          Junk Removal Cost in Chattanooga, TN (2026 Price Guide)
        </h1>
        <p className="text-green-100 text-xl leading-relaxed">
          Real 2026 pricing from local operators -- minimum loads, full truckloads, and specialty
          item surcharges explained. {siteConfig.displayName} is a free referral service and does
          not charge for connecting you with a local pro.
        </p>
      </div>

      {/* Pricing table */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2026 Junk Removal Pricing in Chattanooga</h2>
        <p className="text-gray-600 mb-6">
          Most junk removal companies in Chattanooga price jobs by the fraction of a truckload. Here
          are the typical price ranges based on volume:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="text-left px-5 py-3 font-semibold">Service Tier</th>
                <th className="text-left px-5 py-3 font-semibold">Average Cost</th>
                <th className="text-left px-5 py-3 font-semibold">Approx. Volume</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Minimum / Single Item", "$95 to $125", "1 to 2 cubic yards"],
                ["Quarter Truckload", "$144", "80 to 120 cubic feet"],
                ["Half Truckload", "$287", "180 to 240 cubic feet"],
                ["Three-Quarter Truckload", "$414", "300 to 360 cubic feet"],
                ["Full Truckload", "$591", "420 to 480 cubic feet"],
              ].map(([tier, cost, volume], i) => (
                <tr key={tier} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-4 font-medium text-gray-800">{tier}</td>
                  <td className="px-5 py-4 text-green-700 font-semibold">{cost}</td>
                  <td className="px-5 py-4 text-gray-600">{volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3 italic">
          All prices above are estimates. Exact quotes require an in-person or photo assessment.
          Prices vary by provider, job complexity, and current disposal fees.
        </p>
      </div>

      {/* Local operators */}
      <div className="rich-content mb-10">
        <h2>What Local Chattanooga Operators Charge</h2>
        <p>
          Published pricing from named local and national operators active in the Chattanooga market
          (per public pricing):
        </p>
        <ul>
          <li>
            <strong>Papa Haul Away Services (Papa Services):</strong> Minimum dispatch $125, full
            truckload starting at $400, approximately $25 per cubic yard. This is significantly
            below the regional average of $42 to $46 per cubic yard.
          </li>
          <li>
            <strong>Junk King Chattanooga:</strong> DIY dumpster rental $325 flat for a 7-day
            rental, up to 2,000 lbs. Item surcharges: $10 per mattress, $3 per tire.
          </li>
          <li>
            <strong>College HUNKS Hauling Junk:</strong> Published range $99 to $699 per job
            depending on volume and item type.
          </li>
          <li>
            <strong>911 Junk Out:</strong> Flat-rate roll-off dumpster rentals; pricing provided by
            photo quote only, not published on their site.
          </li>
          <li>
            <strong>1-800-GOT-JUNK? Chattanooga:</strong> Does not publish pricing; estimate
            provided through their online booking engine.
          </li>
        </ul>
      </div>

      {/* What drives price */}
      <div className="rich-content mb-10">
        <h2>What Drives the Price of Junk Removal</h2>

        <h2 style={{ fontSize: "1.1rem", fontWeight: "700", marginTop: "1.25rem" }}>
          Volume (the primary driver)
        </h2>
        <p>
          All Chattanooga junk removal companies price by the fraction of the truck they fill. A
          minimum-load job and a full truckload job can differ by $400 or more. Anything that
          reduces volume -- breaking down furniture, removing unnecessary packaging -- lowers the
          final price.
        </p>

        <h2 style={{ fontSize: "1.1rem", fontWeight: "700", marginTop: "1.25rem" }}>
          Item density
        </h2>
        <p>
          Concrete, tile, and stone weigh far more per cubic foot than furniture or mattresses.
          Dense, heavy loads take longer to move and cost more to dispose of at transfer stations,
          so some operators apply a weight surcharge on construction debris.
        </p>

        <h2 style={{ fontSize: "1.1rem", fontWeight: "700", marginTop: "1.25rem" }}>
          Accessibility
        </h2>
        <p>
          Narrow driveways, multi-flight staircases, basement-only access, or elevator-only
          buildings all add labor time. Pros factor in anything that slows the crew down. If your
          items are already at the curb or in the garage, you may pay less.
        </p>

        <h2 style={{ fontSize: "1.1rem", fontWeight: "700", marginTop: "1.25rem" }}>
          Special disposal fees
        </h2>
        <p>
          Certain items carry mandatory disposal surcharges that pros pass through to customers:
        </p>
        <ul>
          <li>
            <strong>Appliances with refrigerants</strong> (refrigerators, window AC units, freezers)
            require certified refrigerant evacuation before disposal -- up to $32 per item at some
            local transfer stations.
          </li>
          <li>
            <strong>Mattresses</strong> carry a $10 surcharge at Junk King Chattanooga per unit.
          </li>
          <li>
            <strong>Tires</strong> cost $3 per passenger tire at the Junk King scale.
          </li>
        </ul>

        <h2 style={{ fontSize: "1.1rem", fontWeight: "700", marginTop: "1.25rem" }}>
          Distance to disposal site
        </h2>
        <p>
          Haul distance affects fuel and time costs. Properties near Harrison have shorter hauls to
          the Birchwood II Landfill, which can reduce disposal costs. Customers in Signal Mountain
          and Soddy-Daisy may see slightly higher prices due to longer haul distances.
        </p>
      </div>

      {/* FAQs */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "What is the minimum charge for junk removal in Chattanooga?",
              a: "Most operators charge between $95 and $125 for a single item or minimum load. This covers the cost of sending a truck and crew even if the load only fills a small portion of the truck.",
            },
            {
              q: "How do junk removal companies price their jobs?",
              a: "By volume -- specifically, by what fraction of the truck your items fill. The crew assesses your load before work begins and gives you an upfront price based on the truckload fraction. You pay only for the space you use.",
            },
            {
              q: "Why does appliance removal cost more?",
              a: "Appliances containing refrigerants (refrigerators, freezers, window AC units) must be evacuated by a certified technician before disposal. This refrigerant recovery process adds up to $32 per unit at some Chattanooga-area transfer stations, and reputable pros pass that cost through rather than absorb it.",
            },
            {
              q: "Is junk removal cheaper than renting a dumpster?",
              a: "It depends on volume and your timeline. Junk King Chattanooga offers a 7-day dumpster rental for $325 flat (up to 2,000 lbs), which can be cost-effective for renovation projects where you need to fill it over several days. Full-service junk removal costs more per load but includes the labor -- the crew does all the loading and hauling for you.",
            },
            {
              q: "Does Chattanooga offer free bulk trash pickup?",
              a: "Yes -- the City of Chattanooga operates a bulk trash pickup program through its rotating area schedule. However, collections are capped at 12 per property per year, landlords are excluded, and many items are not accepted (no lumber, concrete, or renovation debris). See our guide to city pickup for full details.",
            },
            {
              q: "Can I get an exact price before the crew arrives?",
              a: "Yes. All reputable junk removal pros in Chattanooga provide a firm price before work begins -- typically after viewing the load in person or by photo. You have no obligation to book if you don't like the price.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-green-700 rounded-2xl px-8 py-10 mb-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Get a Free Quote from a Chattanooga Pro</h2>
        <p className="text-green-100 mb-6 leading-relaxed">
          {siteConfig.displayName} is a free referral service. Fill out the form below and a local,
          licensed junk removal professional will contact you with an upfront price. No obligation
          until you agree.
        </p>
        <a
          href="#lead-form"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Request a Free Quote
        </a>
      </div>

      {/* Lead form */}
      <div id="lead-form" className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold mb-2 text-center">Connect With a Local Junk Removal Pro</h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Free referral service -- no fees, no obligation until you agree to a price.
        </p>
        <LeadForm />
      </div>

      {/* Internal links */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold mb-4 text-gray-700">Related Guides</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/resources/city-pickup-vs-junk-removal"
              className="text-green-700 hover:underline font-medium"
            >
              Chattanooga City Bulk Pickup vs. Private Junk Removal: When to Use Each
            </Link>
          </li>
          <li>
            <Link
              href="/resources/donate-furniture-chattanooga"
              className="text-green-700 hover:underline font-medium"
            >
              Where to Donate Furniture in Chattanooga, TN (2026 Guide)
            </Link>
          </li>
          <li>
            <Link
              href="/resources/chattanooga-refuse-centers-guide"
              className="text-green-700 hover:underline font-medium"
            >
              Chattanooga Refuse Collection Centers: Locations, Hours, and Rules
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-green-700 hover:underline font-medium">
              How {siteConfig.displayName} Works
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-green-700 hover:underline font-medium">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/services/appliance-removal"
              className="text-green-700 hover:underline font-medium"
            >
              Appliance Removal in Chattanooga
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
