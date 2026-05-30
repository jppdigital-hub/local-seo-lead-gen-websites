import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title:
    "Where to Donate Furniture in Chattanooga, TN (2026 Guide) | ChattanoogaJunkRemovalPros.com",
  description:
    "Find Chattanooga-area furniture donation options with hours, pickup availability, and what each organization accepts and refuses.",
  alternates: { canonical: "/resources/donate-furniture-chattanooga" },
};

export default function DonateFurniturePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      {/* Green header section */}
      <div className="bg-green-700 rounded-2xl px-8 py-10 mb-10 text-white">
        <h1 className="text-4xl font-extrabold mb-4">
          Where to Donate Furniture in Chattanooga, TN (2026 Guide)
        </h1>
        <p className="text-green-100 text-xl leading-relaxed">
          Several Chattanooga-area organizations accept used furniture and appliances. Each has
          different hours, pickup availability, item requirements, and lead times. Here is what you
          need to know before loading the truck.
        </p>
      </div>

      {/* Habitat ReStore */}
      <div className="rich-content mb-10">
        <h2>Habitat for Humanity ReStore Chattanooga</h2>
        <p>
          <strong>Address:</strong> 1150 E 14th Street, Chattanooga, TN 37408
          <br />
          <strong>Hours:</strong> Tuesday through Saturday, 9:00 a.m. to 5:00 p.m.
          <br />
          <strong>Phone:</strong> (423) 634-1004
        </p>
        <p>
          The ReStore offers <strong>free pickup within Hamilton County</strong> for select items.
          Pickup requests are submitted through an online form, evaluated within 5 business days,
          and scheduled 3 to 4 weeks out from approval.
        </p>
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 not-prose">
          <p className="text-yellow-900 text-sm leading-relaxed font-medium">
            Important: The 3-to-4 week pickup lead time makes the ReStore unsuitable for urgent
            timelines. If you are working against a lease termination date, real estate closing, or
            estate liquidation deadline, plan ahead or arrange a private junk removal pro to
            transport donation-eligible items on your schedule.
          </p>
        </div>
        <p>
          <strong>What the ReStore accepts:</strong>
        </p>
        <ul>
          <li>
            Couches, loveseats, and recliners in excellent condition (no rips, heavy stains, or pet
            hair)
          </li>
          <li>Dining sets, bedroom suites, and outdoor furniture</li>
          <li>
            Working washers, dryers, electric stoves, full-size refrigerators, and deep freezers
            under 10 years old
          </li>
          <li>HVAC units under 10 years old</li>
          <li>
            Assembled cabinetry, countertops, lumber over 6 feet, new flooring (minimum 500 sq ft),
            and complete doors
          </li>
        </ul>
        <p>
          <strong>What the ReStore does NOT accept:</strong>
        </p>
        <ul>
          <li>Mattresses or box springs</li>
          <li>Toilets or plumbing fixtures</li>
          <li>Unframed glass or granite countertops</li>
          <li>Furniture with heavy damage, rips, stains, or pet hair</li>
          <li>Recalled baby or infant equipment</li>
        </ul>
      </div>

      {/* Samaritan Center */}
      <div className="rich-content mb-10">
        <h2>The Samaritan Center (Ooltewah)</h2>
        <p>
          <strong>Address:</strong> 6017 Ooltewah Georgetown Road, Ooltewah, TN
          <br />
          <strong>Hours:</strong> Sunday afternoons and standard weekday hours. Closed Saturdays.
        </p>
        <p>
          The Samaritan Center offers <strong>free pickup for large furniture and appliances</strong>{" "}
          for donors within a 20-mile radius. Items must be located on the main level of the home.
          Pickups for donors outside the 20-mile radius are subject to cancellation.
        </p>
        <p>
          <strong>What the Samaritan Center accepts:</strong>
        </p>
        <ul>
          <li>Clothing and flatware</li>
          <li>Home decor items</li>
          <li>Large working appliances</li>
          <li>Functional electronics</li>
        </ul>
        <p>
          <strong>What the Samaritan Center does NOT accept:</strong>
        </p>
        <ul>
          <li>Pianos</li>
          <li>Mattresses or hospital beds or water beds</li>
          <li>CRT televisions (tube TVs)</li>
          <li>Incomplete china cabinets or unframed mirrors</li>
          <li>Automotive parts or building materials</li>
        </ul>
      </div>

      {/* Salvation Army */}
      <div className="rich-content mb-10">
        <h2>Salvation Army Chattanooga</h2>
        <p>
          <strong>Locations:</strong> 822 McCallie Avenue (Chattanooga Area Command), 2140 E 28th
          Street (East Lake Corps), and thrift stores on Brainerd Road and Highway 58.
        </p>
        <p>
          Pickup scheduling is available by calling <strong>1-800-SA-TRUCK</strong> or through
          their online portal. Tax-deductible receipts are issued.
        </p>
        <p>
          <strong>What the Salvation Army accepts:</strong>
        </p>
        <ul>
          <li>Men&apos;s, women&apos;s, and children&apos;s clothing</li>
          <li>Operational non-built-in appliances</li>
          <li>Automobiles and general household goods</li>
          <li>Furniture in usable condition</li>
        </ul>
        <p>
          <strong>What the Salvation Army does NOT accept:</strong>
        </p>
        <ul>
          <li>Built-in appliances</li>
          <li>Recalled items</li>
          <li>Heavily damaged goods</li>
        </ul>
      </div>

      {/* When donation is not realistic */}
      <div className="rich-content mb-10">
        <h2>When Donation Is Not a Realistic Option</h2>
        <p>
          Several categories of items are consistently refused by all Chattanooga-area donation
          centers:
        </p>
        <ul>
          <li>
            <strong>Mattresses:</strong> Refused by every organization listed above. If you have a
            mattress to dispose of, a junk removal professional or Junk King&apos;s dumpster rental
            (which applies a $10 mattress surcharge) are your options.
          </li>
          <li>
            <strong>CRT tube televisions:</strong> Refused by charitable organizations. These
            require specialty e-waste routing and often carry a hauler surcharge.
          </li>
          <li>
            <strong>Heavily damaged furniture:</strong> Any piece with structural damage,
            significant staining, rips, or pet hair will be turned away by the ReStore and the
            Samaritan Center.
          </li>
          <li>
            <strong>Items with pet hair, odors, or visible damage:</strong> Organizations screen
            items before accepting them and will decline pieces that do not meet their standards.
          </li>
          <li>
            <strong>When you are on a tight timeline:</strong> The ReStore&apos;s 3-to-4 week
            pickup lead time is not compatible with estate deadlines, lease terminations, or real
            estate closings. If your move-out date is in two weeks, a private junk removal pro is
            the practical solution.
          </li>
        </ul>
      </div>

      {/* How a junk removal pro can help */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-green-900 mb-3">
          How a Junk Removal Pro Can Help With Donations
        </h2>
        <p className="text-green-900 leading-relaxed mb-3">
          A junk removal professional can transport donation-eligible items to these organizations
          as part of a larger cleanout job -- often faster than waiting weeks for a donation pickup
          to be scheduled.
        </p>
        <p className="text-green-900 leading-relaxed">
          Many Chattanooga junk removal pros actively sort loads and donate usable items to local
          centers rather than sending everything straight to the landfill. Ask the pro whether they
          partner with local donation organizations when you request a quote. This is especially
          useful during estate cleanouts where a mix of donation-eligible and non-eligible items
          need to be handled in a single visit.
        </p>
      </div>

      {/* FAQs */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "Does Habitat for Humanity ReStore pick up furniture in Chattanooga?",
              a: "Yes, the ReStore offers free pickup within Hamilton County for select items. However, the process involves submitting an online request, a 5-business-day evaluation period, and pickup scheduled 3 to 4 weeks after approval. This is not suitable for urgent timelines.",
            },
            {
              q: "Will donation centers accept mattresses in Chattanooga?",
              a: "No. All three major organizations covered in this guide -- the ReStore, the Samaritan Center, and the Salvation Army -- refuse mattresses and box springs. A private junk removal professional is the appropriate option for mattress disposal.",
            },
            {
              q: "Can I drop off items at the ReStore without an appointment?",
              a: "Yes. You can drive to 1150 E 14th Street during Tuesday through Saturday hours (9:00 a.m. to 5:00 p.m.) for drop-off. The staff will assess items at the door and may decline pieces that do not meet their condition standards.",
            },
            {
              q: "What happens to furniture that cannot be donated?",
              a: "A junk removal professional will transport non-donatable furniture to licensed disposal or recycling facilities. Many Chattanooga pros separate loads at the transfer station to divert recyclable materials from the landfill where possible.",
            },
            {
              q: "Can a junk removal pro drop my items at a donation center?",
              a: "Yes. Many Chattanooga junk removal professionals partner with or routinely drop off at local donation centers as part of a cleanout job. Ask about this when you request a quote -- it can reduce landfill waste and, in some cases, lower your overall cost.",
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
          Need Help Clearing Out a Property in Chattanooga?
        </h2>
        <p className="text-green-100 mb-6 leading-relaxed">
          {siteConfig.displayName} is a free referral service. Submit your job details below and a
          licensed local pro will contact you with an upfront price. Many pros sort and donate
          eligible items as part of the job.
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
              href="/resources/city-pickup-vs-junk-removal"
              className="text-green-700 hover:underline font-medium"
            >
              Chattanooga City Bulk Pickup vs. Private Junk Removal: When to Use Each
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
              href="/services/estate-cleanout"
              className="text-green-700 hover:underline font-medium"
            >
              Estate Cleanout Services in Chattanooga
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
