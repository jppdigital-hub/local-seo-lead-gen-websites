import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Junk Removal for Landlords in Chattanooga, TN | ChattanoogaJunkRemovalPros.com",
  description:
    "Chattanooga landlords cannot use city bulk pickup for rental property cleanouts. A private junk removal pro is the only legal option. Here's what you need to know.",
  alternates: { canonical: "/resources/landlord-junk-removal-chattanooga" },
};

const faqs = [
  {
    q: "Can a landlord use Chattanooga city bulk pickup for a rental unit cleanout?",
    a: "No. The City of Chattanooga explicitly prohibits landlords, rental property owners, and property managers from using the city bulk trash pickup service. A private hauler is required for all rental property cleanouts.",
  },
  {
    q: "What is the fastest way to clear a rental property between tenants?",
    a: "Hire a private junk removal professional. They can often schedule same-day or next-day service, handle all loading and hauling, and clear a full unit in a single visit.",
  },
  {
    q: "Does the city distinguish between a landlord-generated load and a homeowner load?",
    a: "The rule is clear: landlords managing rental properties are prohibited, regardless of the type of debris. There is no distinction based on what the items are.",
  },
  {
    q: "What if I only have a few items left by a tenant?",
    a: "Even single-item removal from a rental property is not permitted under the city service rules. A private hauler is still required, even for a single piece of furniture.",
  },
  {
    q: "How much does a rental property cleanout cost?",
    a: "Pricing depends on volume. Minimum charges run $95 to $125 for light cleanouts, $591 or more for a full truckload, and $1,200 or more for heavy multi-room cleanouts. Always get a quote upfront.",
  },
  {
    q: "Can a pro handle an eviction cleanout urgently?",
    a: "Yes. Many pros can schedule same-day or next-day service for urgent turnovers. Mention the urgency when you submit your request so we can connect you with an available professional.",
  },
];

export default function LandlordJunkRemovalPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-green-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-wide mb-3">
            Resource Guide
          </p>
          <h1 className="text-4xl font-extrabold mb-4 leading-tight">
            Junk Removal for Landlords in Chattanooga, TN
          </h1>
          <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
            City bulk pickup is off-limits for rental properties. Here is what
            the rules say and how to get a cleanout done legally and fast.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Prominent callout */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10">
          <p className="font-bold text-amber-900 text-lg mb-2">Important</p>
          <p className="text-amber-800 leading-relaxed">
            Chattanooga&apos;s city bulk trash pickup service explicitly prohibits
            use by landlords, rental property owners, and property managers.
            Every piece of tenant left-behind debris requires a private hauler.
            This is not a workaround -- it is the only legal option.
          </p>
        </div>

        <div className="rich-content">
          <h2>What the City Rules Say</h2>
          <p>
            The City of Chattanooga bulk trash pickup program states directly
            that &quot;businesses, contractors performing land clearing, and landlords
            managing rental properties are strictly prohibited from using this
            service.&quot; The same exclusion applies at City Refuse Collection
            Centers, which reject commercial activity and contractor loads.
          </p>
          <p>
            This prohibition covers every common landlord scenario:
          </p>
          <ul>
            <li>Eviction cleanouts</li>
            <li>Tenant move-out cleanouts</li>
            <li>Renovation debris from rental unit updates</li>
          </ul>
          <p>
            There is no workaround or exception for small volumes. Even a
            single piece of furniture left behind in a rental unit falls under
            the restriction.
          </p>

          <h2>Why This Matters More in Chattanooga</h2>
          <p>
            East Ridge and Red Bank are epicenters for real estate fix-and-flip
            activity in the Chattanooga market. East Ridge is characterized by
            mid-century brick ranches, dense apartment complexes, and high
            rental turnover. The I-75 corridor running through East Ridge drives
            a significant transient rental population, which means landlord
            cleanout volume is consistently high.
          </p>
          <p>
            Aging housing stock across East Ridge, Red Bank, and other inner
            suburbs generates consistent demand for estate cleanouts and landlord
            turnovers. Older units tend to accumulate more left-behind debris
            between tenants, and multi-unit buildings compound the volume
            quickly.
          </p>
          <p>
            Because private hauling is the only legal path, landlords in these
            markets rely on professional junk removal services as a core part of
            their turnover workflow. Building a relationship with a reliable
            local pro pays off over time.
          </p>

          <h2>Common Landlord Junk Removal Jobs</h2>
          <ul>
            <li>
              <strong>Tenant move-out cleanouts</strong> -- furniture, clothing,
              food, and debris left behind after a tenant vacates
            </li>
            <li>
              <strong>Eviction cleanouts</strong> -- often more urgent with
              larger volume and less time to plan
            </li>
            <li>
              <strong>Renovation debris</strong> -- drywall, carpet, cabinetry,
              and fixtures from unit updates between tenants
            </li>
            <li>
              <strong>Between-tenant quick turnovers</strong> -- appliance swaps
              and furniture removal to prep a unit for showing
            </li>
            <li>
              <strong>Hoarder unit cleanouts</strong> -- requires additional
              labor, multiple trips, and sometimes multiple days
            </li>
          </ul>

          <h2>What to Tell the Pro</h2>
          <p>
            The more detail you provide upfront, the more accurate your quote
            will be and the smoother the job will go. Be ready to share:
          </p>
          <ul>
            <li>
              The property type and location (apartment, single-family house,
              multi-unit building)
            </li>
            <li>Whether the property is vacant or still occupied</li>
            <li>
              Volume estimate -- number of rooms, and whether it is a light or
              heavy cleanout
            </li>
            <li>Whether there are large items requiring disassembly</li>
            <li>Your timeline for turnover</li>
          </ul>

          <h2>Pricing for Landlord Cleanouts</h2>
          <p>
            Junk removal pricing is volume-based. Here is what to expect for
            common landlord scenarios:
          </p>
          <ul>
            <li>
              Single items (one appliance, one piece of furniture): $95 to $125
              minimum
            </li>
            <li>Full truckload: averages around $591</li>
            <li>
              Multi-room cleanouts: typically 1 to 3 full truckloads depending
              on how heavily the unit was furnished and how much debris tenants
              left
            </li>
            <li>
              Estate-level full-property cleanouts: $1,200 to $2,000 or more
            </li>
          </ul>
          <p>
            Getting a photo or in-person quote before the crew arrives is
            standard practice. Reputable pros will give you a firm price before
            any work begins.
          </p>

          <h2>Ready to Connect with a Pro?</h2>
          <p>
            {siteConfig.displayName} is a free referral service. Submit your
            job details and a licensed, insured local pro serving Chattanooga
            will contact you directly with a quote. You can also visit our{" "}
            <Link href="/contact">contact page</Link> or review the{" "}
            <Link href="/services/estate-cleanout">estate cleanout service page</Link>{" "}
            for more detail on full-property cleanouts.
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
            Connect with a Chattanooga Junk Removal Pro
          </h2>
          <p className="text-green-800 mb-6">
            Tell us about your rental property cleanout. We will connect you
            with a licensed, insured local professional. Free referral service,
            no obligation.
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
                href="/resources/mattress-disposal-chattanooga"
                className="text-green-700 underline hover:text-green-900"
              >
                Mattress Disposal in Chattanooga, TN: All Your Options
              </Link>
            </li>
            <li>
              <Link
                href="/resources/electronics-disposal-chattanooga"
                className="text-green-700 underline hover:text-green-900"
              >
                Electronics and E-Waste Disposal in Chattanooga, TN
              </Link>
            </li>
            <li>
              <Link
                href="/resources/city-pickup-vs-junk-removal"
                className="text-green-700 underline hover:text-green-900"
              >
                City Pickup vs. Junk Removal: Which Option Is Right for You?
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
