import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title:
    "Chattanooga City Bulk Pickup vs. Junk Removal: When to Use Each | ChattanoogaJunkRemovalPros.com",
  description:
    "The City of Chattanooga offers free bulk trash pickup -- but it has limits. Here's when city service works and when a private junk removal pro is the only option.",
  alternates: { canonical: "/resources/city-pickup-vs-junk-removal" },
};

export default function CityPickupVsJunkRemovalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      {/* Green header section */}
      <div className="bg-green-700 rounded-2xl px-8 py-10 mb-10 text-white">
        <h1 className="text-4xl font-extrabold mb-4">
          Chattanooga City Bulk Pickup vs. Junk Removal: When to Use Each
        </h1>
        <p className="text-green-100 text-xl leading-relaxed">
          The City of Chattanooga offers free bulk trash pickup -- but it has strict limits on who
          can use it, what it accepts, and how often. Here is when city service works and when a
          private junk removal professional is the better or only option.
        </p>
      </div>

      {/* Comparison table */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">At a Glance: City Pickup vs. Private Junk Removal</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="text-left px-5 py-3 font-semibold">Factor</th>
                <th className="text-left px-5 py-3 font-semibold">City Bulk Pickup</th>
                <th className="text-left px-5 py-3 font-semibold">Private Junk Removal</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Cost", "Free", "$95 to $591+ depending on volume"],
                ["Speed", "Scheduled pickup week", "Same-day or next-day available"],
                [
                  "Who can use it",
                  "City residents only, no landlords or contractors",
                  "Anyone",
                ],
                ["Volume limit", "12 events per year per property", "No limit"],
                ["Items accepted", "Limited list, no renovation debris", "Most items"],
                [
                  "Scheduling",
                  "311 request, wait for your area's rotation",
                  "Book directly with the pro",
                ],
              ].map(([factor, city, private_], i) => (
                <tr key={factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-4 font-medium text-gray-800">{factor}</td>
                  <td className="px-5 py-4 text-gray-600">{city}</td>
                  <td className="px-5 py-4 text-gray-600">{private_}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* How city pickup works */}
      <div className="rich-content mb-10">
        <h2>How Chattanooga&apos;s City Bulk Pickup Works</h2>
        <p>
          The City of Chattanooga runs a rotating bulk trash collection program divided into four
          geographic areas (Areas 1 through 4), with collections scheduled Monday through Friday.
          You can request pickup through the CHA 311 app, the online portal at the city website, or
          by calling 311.
        </p>
        <p>Key rules for using city bulk pickup:</p>
        <ul>
          <li>
            Items must be at the curb by <strong>7:00 a.m. on the Monday</strong> of your
            scheduled collection week.
          </li>
          <li>
            Brush, bulky trash, and bagged leaves must be placed in <strong>separate piles</strong>{" "}
            -- do not mix them.
          </li>
          <li>
            Debris must be at least <strong>5 feet from parked cars, mailboxes, and overhead
            wires</strong>.
          </li>
          <li>Placement must not block roadways, sidewalks, drainage ditches, or catch basins.</li>
        </ul>
      </div>

      {/* What is accepted and refused */}
      <div className="rich-content mb-10">
        <h2>What City Bulk Pickup Accepts and Refuses</h2>
        <p>
          The city program accepts a defined list of items. Anything outside the list will be left
          behind.
        </p>
        <p>
          <strong>Accepted:</strong> Heavy appliances, BBQ grills, mattresses and box springs,
          furniture, water heaters, carpets, large toys, televisions, and construction materials --
          but only when placed in rigid containers weighing under 50 lbs each.
        </p>
        <p>
          <strong>Refused (not collected):</strong> Household garbage, auto parts, 55-gallon drums,
          liquids, hazardous materials, lumber, dirt, rock, brick, concrete, drywall, glass,
          mirrors, tires, and roofing shingles.
        </p>
      </div>

      {/* 12-collection cap - prominent */}
      <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-yellow-900 mb-3">
          The 12-Collection Cap and Landlord Exclusion
        </h2>
        <p className="text-yellow-900 leading-relaxed mb-3">
          <strong>
            The city program has a maximum of 12 unique collection events per property within any
            consecutive 12-month period.
          </strong>{" "}
          Once you reach that limit, city pickup is not available again until the window resets.
        </p>
        <p className="text-yellow-900 leading-relaxed mb-3">
          <strong>
            Businesses, contractors performing land clearing, and landlords managing rental
            properties are strictly prohibited from using this service.
          </strong>{" "}
          If you manage a rental property -- even a single-family home -- you cannot use the city
          bulk pickup program for that property.
        </p>
        <p className="text-yellow-900 leading-relaxed text-sm">
          Incorrectly placed items, or items placed by ineligible parties, will not be collected.
        </p>
      </div>

      {/* Refuse collection centers */}
      <div className="rich-content mb-10">
        <h2>City Refuse Collection Centers</h2>
        <p>
          In addition to curbside bulk pickup, the city operates three refuse collection centers
          where eligible residents can drop off materials. These are free for City of Chattanooga
          residents with the required documentation.
        </p>
        <p>
          <strong>Locations:</strong>
        </p>
        <ul>
          <li>4276 Airport Road</li>
          <li>4500 North Access Road</li>
          <li>1400 West 57th Street</li>
        </ul>
        <p>
          <strong>Hours:</strong> Tuesday through Friday 10:00 a.m. to 6:00 p.m., Saturday 9:00
          a.m. to 6:00 p.m., Sunday 1:00 p.m. to 5:00 p.m.
        </p>
        <p>
          <strong>Vehicle restrictions:</strong> Dump bodies, tandem axle trailers, and any vehicle
          larger than a standard pickup truck are prohibited. You must arrive in a standard pickup
          truck or smaller passenger vehicle.
        </p>
        <p>
          <strong>Documentation required:</strong> Valid Tennessee driver&apos;s license showing a
          City of Chattanooga address, plus valid Hamilton County vehicle tags. Commercial tags are
          turned away at the gate.
        </p>
        <p>
          <strong>Visit and volume limits:</strong> Maximum 8 bags of refuse per visit, maximum 12
          visits per calendar year.
        </p>
        <p>
          <strong>Accepted at collection centers:</strong> Drywall (limited to one truckload),
          mattresses, and up to 4 automotive tires.
        </p>
        <p>
          <strong>Refused at collection centers:</strong> Asphalt, biological waste, explosives,
          roofing materials, and household garbage beyond the bag limit.
        </p>
      </div>

      {/* When private junk removal is the only option */}
      <div className="rich-content mb-10">
        <h2>When a Private Junk Removal Pro Is the Only Option</h2>
        <p>
          City services are a good starting point -- but they exclude a significant portion of
          Chattanooga residents and a wide range of materials. A private junk removal professional
          is necessary when:
        </p>
        <ul>
          <li>
            <strong>You are a landlord or property manager.</strong> City service explicitly
            prohibits use for rental properties.
          </li>
          <li>
            <strong>You are a contractor generating renovation debris.</strong> Contractors
            performing land clearing are excluded from city programs.
          </li>
          <li>
            <strong>Your volume exceeds 12 collection events per year.</strong> Heavy users of
            city pickup will hit the annual cap.
          </li>
          <li>
            <strong>Your vehicle is larger than a standard pickup truck.</strong> Dump bodies,
            tandem axle trailers, and larger vehicles are turned away at city centers.
          </li>
          <li>
            <strong>You have building materials.</strong> Lumber, concrete, and roofing materials
            are all refused by city bulk pickup -- private pros can handle them.
          </li>
          <li>
            <strong>You need same-day or urgent service.</strong> City pickup operates on a
            rotating area schedule -- not on demand. Private pros offer same-day availability.
          </li>
          <li>
            <strong>You have hazardous or regulated materials</strong> requiring a licensed hauler
            with proper disposal credentials.
          </li>
        </ul>
      </div>

      {/* FAQs */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "Is there a limit to how many bulk pickups Chattanooga provides?",
              a: "Yes -- the city caps bulk pickup at 12 unique collection events per property within any consecutive 12-month period. After that, you must wait until the window resets.",
            },
            {
              q: "Can landlords use Chattanooga's bulk trash pickup?",
              a: "No. Landlords managing rental properties are explicitly prohibited from using the city bulk pickup program. A private junk removal professional is the appropriate option for rental properties.",
            },
            {
              q: "Can I drive a large truck or trailer to a city refuse center?",
              a: "No. City refuse centers only allow standard pickup trucks or smaller. Dump bodies, tandem axle trailers, and larger vehicles are prohibited. You also need a valid Tennessee driver's license with a City of Chattanooga address and Hamilton County vehicle tags.",
            },
            {
              q: "What if I miss my bulk pickup collection week?",
              a: "You will need to submit a new request through 311 and wait for your area's next rotation. Collections are scheduled and not available on demand.",
            },
            {
              q: "Does city pickup handle renovation debris?",
              a: "No. Lumber, drywall, concrete, and roofing shingles are all explicitly refused by city bulk pickup. For renovation debris, a private junk removal pro or dumpster rental is the appropriate solution.",
            },
            {
              q: "Can a business use city bulk pickup?",
              a: "No. Businesses and contractors are explicitly excluded from the city bulk trash program. Only eligible City of Chattanooga residential properties can use it.",
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
        <h2 className="text-2xl font-bold mb-3">Need a Pro for a Job the City Won&apos;t Handle?</h2>
        <p className="text-green-100 mb-6 leading-relaxed">
          {siteConfig.displayName} is a free referral service. Describe your job below and a
          licensed, insured Chattanooga junk removal professional will contact you with an upfront
          price. No obligation.
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
              href="/resources/junk-removal-cost-chattanooga"
              className="text-green-700 hover:underline font-medium"
            >
              Junk Removal Cost in Chattanooga, TN (2026 Price Guide)
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
            <Link
              href="/resources/donate-furniture-chattanooga"
              className="text-green-700 hover:underline font-medium"
            >
              Where to Donate Furniture in Chattanooga, TN (2026 Guide)
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
              href="/services/construction-debris-removal"
              className="text-green-700 hover:underline font-medium"
            >
              Construction Debris Removal in Chattanooga
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
