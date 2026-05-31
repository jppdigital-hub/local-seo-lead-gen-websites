import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Mattress Disposal in Chattanooga, TN: All Your Options | ChattanoogaJunkRemovalPros.com",
  description:
    "How to get rid of an old mattress in Chattanooga. City bulk pickup, refuse centers, donations, and private haulers -- each option explained.",
  alternates: { canonical: "/resources/mattress-disposal-chattanooga" },
};

const faqs = [
  {
    q: "Does Chattanooga pick up old mattresses?",
    a: "Yes -- the city bulk pickup program accepts mattresses and box springs for residents within the city limits. However, each property is limited to 12 collection events per 12-month period, and landlords cannot use the service.",
  },
  {
    q: "Can I donate a mattress in Chattanooga?",
    a: "Rarely. Habitat for Humanity ReStore, the Samaritan Center in Ooltewah, and Salvation Army all refuse mattresses. Most donation organizations reject mattresses due to hygiene and regulatory concerns. In most cases, donation is not a viable option.",
  },
  {
    q: "Can a landlord use city bulk pickup to remove a tenant's old mattress?",
    a: "No. City bulk pickup explicitly prohibits landlords and property managers from using the service. A private junk removal pro is the only legal option for landlords.",
  },
  {
    q: "How much does mattress removal cost with a private hauler?",
    a: "Starting at $95 to $125 for one or two mattresses. Junk King Chattanooga charges an additional $10 per mattress surcharge on top of base job pricing. Get a quote upfront before the crew arrives.",
  },
  {
    q: "What do junk removal pros do with old mattresses?",
    a: "Pros transport mattresses to licensed disposal or recycling facilities. Mattress recycling -- breaking down foam, springs, and fabric into reusable materials -- is available at some facilities in the region.",
  },
];

export default function MattressDisposalPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-green-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-wide mb-3">
            Resource Guide
          </p>
          <h1 className="text-4xl font-extrabold mb-4 leading-tight">
            Mattress Disposal in Chattanooga, TN: All Your Options
          </h1>
          <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
            City bulk pickup, refuse centers, donation, and private haulers --
            each option has different rules. Here is what you need to know
            before you try to get rid of an old mattress.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="rich-content">
          <h2>Option 1: City of Chattanooga Bulk Trash Pickup</h2>
          <p>
            The City of Chattanooga bulk trash pickup program accepts mattresses
            and box springs from city residents. This is often the lowest-cost
            route for eligible homeowners.
          </p>
          <p>How to request a pickup:</p>
          <ul>
            <li>Use the CHA 311 app</li>
            <li>Submit through the online 311 portal</li>
            <li>Call 311 directly</li>
          </ul>
          <p>
            Items must be at the curb by 7:00 a.m. on the Monday of your
            scheduled collection week.
          </p>
          <p>
            <strong>Important limits to know:</strong>
          </p>
          <ul>
            <li>
              Maximum 12 collection events per property per 12-month period
            </li>
            <li>
              <strong>
                Landlords and property managers are prohibited from using this
                service
              </strong>{" "}
              -- it applies to city residents only
            </li>
            <li>Only works for properties within City of Chattanooga limits</li>
          </ul>

          <h2>Option 2: City Refuse Collection Centers</h2>
          <p>
            All three city refuse collection centers accept mattresses. This
            option works if you have a qualifying vehicle and valid residency
            documents.
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
            <strong>Hours:</strong> Tuesday through Friday 10am-6pm, Saturday
            9am-6pm, Sunday 1pm-5pm
          </p>
          <p>
            <strong>Requirements:</strong>
          </p>
          <ul>
            <li>
              Valid Tennessee driver&apos;s license with a City of Chattanooga
              address
            </li>
            <li>Valid Hamilton County vehicle tags</li>
            <li>
              Standard pickup truck or smaller -- no dump bodies, tandem axle
              trailers, or commercial vehicles
            </li>
          </ul>
          <p>
            Visit limits apply: 8 bags per visit, 12 visits per calendar year.
            Mattresses count toward this limit. If you have already used your
            12 annual visits, you will be turned away.
          </p>

          <h2>Option 3: Donation (Not Usually Possible)</h2>
          <p>
            Donation is the first instinct for many people with a mattress in
            good condition, but local organizations almost universally refuse
            them:
          </p>
          <ul>
            <li>
              <strong>Habitat for Humanity ReStore:</strong> Does not accept
              mattresses
            </li>
            <li>
              <strong>The Samaritan Center (Ooltewah):</strong> Does not accept
              mattresses
            </li>
            <li>
              <strong>Salvation Army:</strong> Does not accept mattresses
            </li>
          </ul>
          <p>
            Most charitable organizations refuse mattresses due to hygiene
            concerns and regulatory requirements around reselling used bedding.
            In most cases, donation is simply not an option for mattresses in
            Chattanooga.
          </p>

          <h2>Option 4: Private Junk Removal</h2>
          <p>
            A private junk removal professional will pick up your mattress
            regardless of whether you are a homeowner, landlord, or business.
            There are no annual limits, no vehicle restrictions, and no city
            residency requirement.
          </p>
          <p>What to expect on pricing:</p>
          <ul>
            <li>
              General pricing starts at $95 to $125 for one or two mattresses
            </li>
            <li>
              Junk King Chattanooga charges a $10 per mattress surcharge on top
              of base job pricing
            </li>
            <li>
              Always get a firm quote before the crew arrives
            </li>
          </ul>
          <p>
            Pros transport mattresses to licensed disposal or recycling
            facilities. Mattress recycling breaks down the components -- foam,
            springs, fabric -- for reuse and keeps the material out of the
            landfill.
          </p>

          <h2>When a Private Hauler Is the Only Practical Choice</h2>
          <p>
            For many Chattanooga residents and nearly all landlords, a private
            junk removal pro is the most practical path. That includes when:
          </p>
          <ul>
            <li>
              You are a landlord clearing a rental unit -- city programs do not
              apply to you (see the{" "}
              <Link href="/resources/landlord-junk-removal-chattanooga">
                landlord junk removal guide
              </Link>)
            </li>
            <li>
              You have already used your 12 city pickup allowances for the year
            </li>
            <li>You need same-day or urgent service</li>
            <li>
              You have multiple mattresses to remove at once
            </li>
            <li>
              You do not have access to a pickup truck or other vehicle large
              enough to transport a mattress to a refuse center
            </li>
          </ul>
          <p>
            For other large item removal questions, see the{" "}
            <Link href="/resources/appliance-removal-guide">
              appliance removal guide
            </Link>{" "}
            and the{" "}
            <Link href="/resources/city-pickup-vs-junk-removal">
              city pickup vs. junk removal comparison
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
            Need a Mattress Hauled Away in Chattanooga?
          </h2>
          <p className="text-green-800 mb-6">
            {siteConfig.displayName} is a free referral service. Tell us what
            you need removed and a licensed, insured local pro will contact you
            with an upfront price. No obligation. You can also visit the{" "}
            <Link
              href="/contact"
              className="text-green-700 underline font-semibold"
            >
              contact page
            </Link>{" "}
            with any questions.
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
                href="/resources/landlord-junk-removal-chattanooga"
                className="text-green-700 underline hover:text-green-900"
              >
                Junk Removal for Landlords in Chattanooga, TN
              </Link>
            </li>
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
                href="/resources/electronics-disposal-chattanooga"
                className="text-green-700 underline hover:text-green-900"
              >
                Electronics and E-Waste Disposal in Chattanooga, TN
              </Link>
            </li>
            <li>
              <Link
                href="/resources/donate-furniture-chattanooga"
                className="text-green-700 underline hover:text-green-900"
              >
                Where to Donate Furniture in Chattanooga, TN
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
          </ul>
        </div>
      </div>
    </div>
  );
}
