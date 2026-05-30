import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title:
    "Chattanooga Refuse Collection Centers: Locations, Hours, and Rules | ChattanoogaJunkRemovalPros.com",
  description:
    "Complete guide to Chattanooga's three refuse collection centers: addresses, hours, what you can bring, vehicle restrictions, and annual visit limits.",
  alternates: { canonical: "/resources/chattanooga-refuse-centers-guide" },
};

export default function RefuseCentersGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      {/* Green header section */}
      <div className="bg-green-700 rounded-2xl px-8 py-10 mb-10 text-white">
        <h1 className="text-4xl font-extrabold mb-4">
          Chattanooga Refuse Collection Centers: Locations, Hours, and Rules
        </h1>
        <p className="text-green-100 text-xl leading-relaxed">
          The City of Chattanooga operates three refuse collection centers where eligible residents
          can drop off materials free of charge. Here is everything you need to know before you
          load the truck -- including who qualifies, what vehicles are allowed, and what the
          centers will and will not accept.
        </p>
      </div>

      {/* Three locations */}
      <div className="rich-content mb-10">
        <h2>The Three Refuse Collection Centers</h2>
        <p>
          All three centers are free for City of Chattanooga residents who meet the eligibility
          requirements below.
        </p>
        <ul>
          <li>4276 Airport Road, Chattanooga, TN</li>
          <li>4500 North Access Road, Chattanooga, TN</li>
          <li>1400 West 57th Street, Chattanooga, TN</li>
        </ul>
        <p>
          <strong>Hours (all three locations):</strong>
        </p>
        <ul>
          <li>Tuesday through Friday: 10:00 a.m. to 6:00 p.m.</li>
          <li>Saturday: 9:00 a.m. to 6:00 p.m.</li>
          <li>Sunday: 1:00 p.m. to 5:00 p.m.</li>
          <li>Closed Mondays</li>
        </ul>
      </div>

      {/* Who can use them */}
      <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-yellow-900 mb-3">
          Who Can Use the Refuse Collection Centers
        </h2>
        <p className="text-yellow-900 leading-relaxed mb-3">
          Access to city refuse centers is restricted to eligible residents. You must meet all of
          the following requirements:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-yellow-900 text-sm leading-relaxed">
          <li>
            <strong>Valid Tennessee driver&apos;s license</strong> showing a City of Chattanooga
            residential address.
          </li>
          <li>
            <strong>Valid Hamilton County vehicle tags</strong> on the vehicle you bring.
            Commercial tags are turned away at the gate.
          </li>
          <li>
            <strong>Vehicle must be a standard pickup truck or smaller.</strong> Dump bodies,
            tandem axle trailers, and any larger vehicle are prohibited. If you arrive in a box
            truck, a dump trailer, or a vehicle with commercial tags, you will be turned away.
          </li>
        </ul>
        <p className="text-yellow-900 text-sm leading-relaxed mt-3">
          Businesses, landlords managing rental properties, and contractors are not eligible for
          city refuse center access.
        </p>
      </div>

      {/* Visit and volume limits */}
      <div className="rich-content mb-10">
        <h2>Visit and Volume Limits</h2>
        <p>
          Each eligible resident is limited to:
        </p>
        <ul>
          <li>
            <strong>Maximum 8 bags of refuse per visit.</strong>
          </li>
          <li>
            <strong>Maximum 12 visits per calendar year.</strong>
          </li>
        </ul>
        <p>
          These limits apply per household. Once you have used 12 visits in a calendar year, city
          refuse centers are no longer available to you until the next calendar year begins.
        </p>
      </div>

      {/* What is accepted */}
      <div className="rich-content mb-10">
        <h2>What the Refuse Centers Accept</h2>
        <p>
          City refuse centers accept a narrower range of materials than many residents expect.
          Confirmed accepted items include:
        </p>
        <ul>
          <li>
            <strong>Drywall</strong> -- limited to one truckload per visit.
          </li>
          <li>
            <strong>Mattresses</strong>
          </li>
          <li>
            <strong>Automotive tires</strong> -- up to 4 per visit.
          </li>
        </ul>
      </div>

      {/* What is refused */}
      <div className="rich-content mb-10">
        <h2>What the Refuse Centers Will Not Accept</h2>
        <p>
          The following items are refused at city refuse centers. Bring them and staff will turn
          you away or ask you to remove them from the load:
        </p>
        <ul>
          <li>Asphalt</li>
          <li>Biological waste</li>
          <li>Explosives or ammunition</li>
          <li>Roofing materials (shingles, tar paper, flashing)</li>
          <li>Household garbage beyond the 8-bag limit</li>
          <li>Unidentifiable hazardous compounds</li>
        </ul>
        <p>
          <strong>Note on household hazardous waste:</strong> Oil-based paint, pesticides, motor
          oil, solvents, and similar materials do not go to the refuse centers. They belong at the
          dedicated Household Hazardous Waste (HHW) facility -- see below.
        </p>
      </div>

      {/* HHW facility */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-green-900 mb-3">
          Household Hazardous Waste Facility
        </h2>
        <p className="text-green-900 leading-relaxed mb-1">
          <strong>Address:</strong> 4063 North Hawthorne Street, Chattanooga, TN 37406
        </p>
        <p className="text-green-900 leading-relaxed mb-3">
          <strong>Hours:</strong> Tuesday through Saturday, 8:00 a.m. to 3:00 p.m.
        </p>
        <p className="text-green-900 leading-relaxed mb-3">
          This facility serves all Hamilton County residents -- not just those within city limits.
        </p>
        <p className="text-green-900 leading-relaxed mb-1">
          <strong>Accepted:</strong> Oil-based paint, pesticides, propane tanks up to 30 pounds,
          AC refrigerants, computer electronics, motor oil, thermometers, many solvents, gasoline,
          pool chemicals, and lithium batteries.
        </p>
        <p className="text-green-900 leading-relaxed">
          <strong>Not accepted:</strong> Latex paint (non-toxic -- dry it out and place in regular
          trash), medical waste, explosives, and commercial hazardous waste.
        </p>
      </div>

      {/* Hamilton County recycling centers */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Hamilton County Recycling Centers (For Non-City Residents and Recyclables)
        </h2>
        <p className="text-gray-600 mb-4">
          Residents outside city limits, and city residents with recyclables rather than refuse,
          can use Hamilton County&apos;s network of recycling centers. All centers accept the
          following: plastics #1 and #2, brown/green/clear glass, aluminum and mixed metals, mixed
          paper, corrugated cardboard, newspaper, computers and computer components, and
          rechargeable batteries.
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Not accepted at any county recycling center:</strong> Televisions, microwaves,
          air conditioners, or any appliances.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="text-left px-5 py-3 font-semibold">Center</th>
                <th className="text-left px-5 py-3 font-semibold">Address</th>
                <th className="text-left px-5 py-3 font-semibold">Hours</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Highway 58",
                  "5414 Hwy. 58, Chattanooga, TN 37416",
                  "Mon & Wed 9am-5pm, Sat 8am-4pm",
                ],
                [
                  "Middle Valley (Hixson)",
                  "1868 Crabtree Road, Hixson, TN 37343",
                  "Mon & Wed 9am-5pm, Sat 8am-4pm",
                ],
                [
                  "Red Bank",
                  "4857 Dayton Blvd., Red Bank, TN",
                  "Tue-Fri 10am-6pm, Sat 8am-4pm",
                ],
                [
                  "Standifer Gap",
                  "7625 Standifer Gap Road, Chattanooga, TN 37421",
                  "Mon-Fri 9am-5pm, Sat 8am-4pm",
                ],
                [
                  "Sequoyah (Soddy-Daisy)",
                  "9525 Lovell Road, Soddy-Daisy, TN 37379",
                  "Tue, Thu & Sat 8am-4pm",
                ],
              ].map(([center, address, hours], i) => (
                <tr key={center} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-4 font-medium text-gray-800">{center}</td>
                  <td className="px-5 py-4 text-gray-600">{address}</td>
                  <td className="px-5 py-4 text-gray-600">{hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* When a private hauler makes sense */}
      <div className="rich-content mb-10">
        <h2>When a Private Hauler Makes More Sense</h2>
        <p>
          City refuse centers are a useful resource for eligible residents with small loads and the
          right vehicle. They are not the right tool for every situation. A private junk removal
          professional is the better option when:
        </p>
        <ul>
          <li>
            <strong>You are a landlord, contractor, or business.</strong> City centers do not
            accept commercial waste and will turn you away if your tags or license address do not
            match eligibility requirements.
          </li>
          <li>
            <strong>Your vehicle is larger than a standard pickup truck.</strong> If you own a box
            truck, dump trailer, or similar vehicle, city centers will not allow you in.
          </li>
          <li>
            <strong>You have more than 8 bags per visit</strong> or have already used 12 visits
            this calendar year.
          </li>
          <li>
            <strong>You have materials the centers refuse:</strong> lumber, concrete, renovation
            debris, and roofing materials all require a private hauler with proper disposal
            relationships.
          </li>
          <li>
            <strong>You need same-day service.</strong> Refuse centers operate on fixed hours with
            no on-demand option. Private junk removal pros can often schedule same-day or next-day.
          </li>
        </ul>
      </div>

      {/* FAQs */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "Do I need to prove I live in Chattanooga to use the refuse centers?",
              a: "Yes. You must present a valid Tennessee driver's license showing a City of Chattanooga residential address, and your vehicle must have valid Hamilton County tags. Commercial tags are turned away.",
            },
            {
              q: "Can I bring a trailer to a refuse center?",
              a: "No. Standard pickup trucks and smaller passenger vehicles are the maximum allowed. Dump bodies, tandem axle trailers, and larger vehicles are prohibited.",
            },
            {
              q: "How many times per year can I use a refuse center?",
              a: "Maximum 12 visits per calendar year, with no more than 8 bags of refuse per visit.",
            },
            {
              q: "Can businesses or landlords use city refuse centers?",
              a: "No. City refuse centers are for residential use by eligible City of Chattanooga residents only. Businesses, landlords managing rental properties, and contractors are not eligible.",
            },
            {
              q: "Where do Hamilton County residents outside city limits take their junk?",
              a: "Hamilton County operates five recycling centers (see the table above) that accept recyclables from all county residents regardless of city residency. For non-recyclable items or larger loads, a private junk removal professional is the appropriate option.",
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
        <h2 className="text-2xl font-bold mb-3">
          Have More Than the Centers Can Handle?
        </h2>
        <p className="text-green-100 mb-6 leading-relaxed">
          {siteConfig.displayName} is a free referral service connecting Chattanooga residents with
          licensed, insured junk removal professionals. Submit your job details below and a local
          pro will contact you with an upfront price.
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
              href="/resources/junk-removal-cost-chattanooga"
              className="text-green-700 hover:underline font-medium"
            >
              Junk Removal Cost in Chattanooga, TN (2026 Price Guide)
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
