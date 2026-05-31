import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Electronics and E-Waste Disposal in Chattanooga, TN | ChattanoogaJunkRemovalPros.com",
  description:
    "Where to dispose of old TVs, computers, and electronics in Chattanooga. Hamilton County recycling centers have strict limits on what they accept.",
  alternates: { canonical: "/resources/electronics-disposal-chattanooga" },
};

const routingGuide = [
  {
    item: "Laptop or desktop computer",
    where: "Hamilton County recycling center",
  },
  {
    item: "Rechargeable batteries",
    where: "Hamilton County recycling center",
  },
  {
    item: "Computer monitor (LCD)",
    where: "Hamilton County recycling center",
  },
  {
    item: "CRT tube television",
    where: "Specialty e-waste recycler via private hauler -- surcharge applies",
  },
  {
    item: "Flat-screen TV",
    where:
      "Specialty e-waste recycler -- Hamilton County recycling centers and HHW facility both refuse",
  },
  {
    item: "Microwave",
    where:
      "Hamilton County recycling centers refuse -- private hauler required",
  },
  {
    item: "Refrigerator",
    where:
      "City refuse center (eligible residents only) or compliant transfer station with refrigerant evacuation",
  },
  {
    item: "Window air conditioner",
    where:
      "Requires refrigerant evacuation -- Hamilton County recycling centers refuse all appliances",
  },
];

const recyclingCenters = [
  {
    name: "Highway 58",
    address: "5414 Hwy. 58, Chattanooga, TN 37416",
    hours: "Mon & Wed 9am-5pm, Sat 8am-4pm",
  },
  {
    name: "Middle Valley (Hixson)",
    address: "1868 Crabtree Road, Hixson, TN 37343",
    hours: "Mon & Wed 9am-5pm, Sat 8am-4pm",
  },
  {
    name: "Red Bank",
    address: "4857 Dayton Blvd., Red Bank, TN",
    hours: "Tue-Fri 10am-6pm, Sat 8am-4pm",
  },
  {
    name: "Standifer Gap",
    address: "7625 Standifer Gap Road, Chattanooga, TN 37421",
    hours: "Mon-Fri 9am-5pm, Sat 8am-4pm",
  },
  {
    name: "Sequoyah (Soddy-Daisy)",
    address: "9525 Lovell Road, Soddy-Daisy, TN 37379",
    hours: "Tue, Thu & Sat 8am-4pm",
  },
];

const faqs = [
  {
    q: "Will Hamilton County recycling centers take my old TV?",
    a: "No. Televisions, microwaves, and all appliances are refused at Hamilton County recycling centers. Those centers only accept computers, computer components, and rechargeable batteries in the electronics category.",
  },
  {
    q: "Where do I take a CRT tube television in Chattanooga?",
    a: "CRT TVs require specialty e-waste routing. Private junk removal pros can transport them to specialized e-waste recyclers, but a surcharge typically applies. No charitable organizations or standard recycling centers accept CRT televisions.",
  },
  {
    q: "Can I put old electronics in the regular trash?",
    a: "This is not recommended and in some cases is not legal. Computers, batteries, and televisions contain materials that should be properly recycled. Use an appropriate recycling center, the HHW facility for computer electronics, or a private hauler for items the centers refuse.",
  },
  {
    q: "Does the city HHW facility take electronics?",
    a: "The Household Hazardous Waste Facility at 4063 North Hawthorne Street accepts computer-related electronics only. Televisions and general appliances are refused even there.",
  },
  {
    q: "Can a junk removal pro take my electronics?",
    a: "Yes. Pros handle e-waste routing including CRT TVs. Specialty items like CRT televisions incur surcharges because they must go to licensed e-waste recyclers. For mixed loads spanning multiple categories, a single pro pickup is often the most practical option.",
  },
];

export default function ElectronicsDisposalPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-green-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-wide mb-3">
            Resource Guide
          </p>
          <h1 className="text-4xl font-extrabold mb-4 leading-tight">
            Electronics and E-Waste Disposal in Chattanooga, TN
          </h1>
          <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
            Hamilton County recycling centers accept computers but refuse TVs,
            microwaves, and all appliances. Here is where each item can legally
            go.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="rich-content">
          <h2>What Hamilton County Recycling Centers Accept</h2>
          <p>
            All Hamilton County recycling centers accept the following
            electronics:
          </p>
          <ul>
            <li>Computers and computer components</li>
            <li>Rechargeable batteries</li>
          </ul>
          <p>
            The same centers do <strong>not</strong> accept:
          </p>
          <ul>
            <li>Televisions (any type)</li>
            <li>Microwaves</li>
            <li>Air conditioners</li>
            <li>Any appliances</li>
          </ul>
          <p>
            This means a laptop goes to the recycling center without issue, but
            a flat-screen TV from the same household is refused at every
            Hamilton County location.
          </p>

          <h2>The Chattanooga Household Hazardous Waste Facility</h2>
          <p>
            The city operates a Household Hazardous Waste (HHW) facility with
            limited electronics acceptance:
          </p>
          <ul>
            <li>
              <strong>Address:</strong> 4063 North Hawthorne Street, Chattanooga,
              TN 37406
            </li>
            <li>
              <strong>Hours:</strong> Tuesday through Saturday, 8:00 a.m. to
              3:00 p.m.
            </li>
            <li>
              <strong>Accepts:</strong> Computer-related electronics
            </li>
            <li>
              <strong>Does not accept:</strong> Non-computer electronics,
              including flat-screen televisions and appliances
            </li>
          </ul>
          <p>
            Even the HHW facility draws the line at televisions. A flat-screen
            TV is refused here just as it is at the recycling centers.
          </p>

          <h2>CRT Televisions (Old Tube TVs)</h2>
          <p>
            CRT televisions present the hardest disposal challenge in
            Chattanooga. They are refused by:
          </p>
          <ul>
            <li>All Hamilton County recycling centers</li>
            <li>The city HHW facility</li>
            <li>
              All charitable organizations, including the Samaritan Center
            </li>
          </ul>
          <p>
            CRTs require specialty e-waste routing to licensed recyclers who can
            handle the lead and other hazardous materials inside the tube.
            Private haulers who transport CRTs to these recyclers typically
            impose a surcharge on top of the standard job price. They cannot go
            in regular trash.
          </p>
        </div>

        {/* Routing Guide Table */}
        <div className="my-10">
          <h2 className="text-2xl font-bold mb-4">
            Practical Routing Guide
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-800 text-white">
                  <th className="text-left px-5 py-3 font-semibold">Item</th>
                  <th className="text-left px-5 py-3 font-semibold">
                    Where to Take It
                  </th>
                </tr>
              </thead>
              <tbody>
                {routingGuide.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3 font-medium text-gray-800 align-top">
                      {row.item}
                    </td>
                    <td className="px-5 py-3 text-gray-600 align-top">
                      {row.where}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recycling Center Locations Table */}
        <div className="my-10">
          <h2 className="text-2xl font-bold mb-4">
            Hamilton County Recycling Center Locations
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-800 text-white">
                  <th className="text-left px-5 py-3 font-semibold">Center</th>
                  <th className="text-left px-5 py-3 font-semibold">Address</th>
                  <th className="text-left px-5 py-3 font-semibold">Hours</th>
                </tr>
              </thead>
              <tbody>
                {recyclingCenters.map((center, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3 font-medium text-gray-800 align-top whitespace-nowrap">
                      {center.name}
                    </td>
                    <td className="px-5 py-3 text-gray-600 align-top">
                      {center.address}
                    </td>
                    <td className="px-5 py-3 text-gray-600 align-top whitespace-nowrap">
                      {center.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rich-content">
          <h2>When to Use a Junk Removal Pro for Electronics</h2>
          <p>
            The DIY route works well for computers and batteries at the
            recycling centers. A private junk removal pro makes more sense when:
          </p>
          <ul>
            <li>
              You have a TV, microwave, or other non-computer electronics that
              the centers refuse
            </li>
            <li>
              You have multiple items spanning different categories and want a
              single pickup rather than multiple trips to different locations
            </li>
            <li>You have a CRT television that requires specialty routing</li>
            <li>
              You are a <Link href="/resources/landlord-junk-removal-chattanooga">landlord clearing electronics left by tenants</Link>,
              since city services do not apply to rental properties
            </li>
          </ul>
          <p>
            For more on disposing of appliances that require refrigerant
            handling, see our{" "}
            <Link href="/resources/appliance-removal-guide">
              appliance removal guide
            </Link>.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 list-none">
                  {faq.q}
                  <span className="arrow ml-4 text-gray-400 transition-transform duration-200">
                    &#8964;
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed text-sm border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA + Lead Form */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Need Electronics or E-Waste Hauled Away?
          </h2>
          <p className="text-green-800 mb-6">
            If your electronics do not qualify for the recycling centers, a
            local pro can handle pickup and proper disposal. Free referral
            service, no obligation. Visit our{" "}
            <Link
              href="/contact"
              className="text-green-700 underline font-semibold"
            >
              contact page
            </Link>{" "}
            or submit below.
          </p>
          <LeadForm />
        </div>

        {/* Related guides */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Related Guides
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/resources/appliance-removal-guide"
                className="text-green-700 underline hover:text-green-900"
              >
                Appliance Removal in Chattanooga, TN: What You Need to Know
              </Link>
            </li>
            <li>
              <Link
                href="/resources/landlord-junk-removal-chattanooga"
                className="text-green-700 underline hover:text-green-900"
              >
                Junk Removal for Landlords in Chattanooga, TN
              </Link>
            </li>
            <li>
              <Link
                href="/resources/mattress-disposal-chattanooga"
                className="text-green-700 underline hover:text-green-900"
              >
                Mattress Disposal in Chattanooga, TN: All Your Options
              </Link>
            </li>
            <li>
              <Link
                href="/resources/chattanooga-refuse-centers-guide"
                className="text-green-700 underline hover:text-green-900"
              >
                Chattanooga Refuse Centers: Hours, Locations, and Rules
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
