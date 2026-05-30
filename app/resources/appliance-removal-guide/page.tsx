import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Appliance Removal in Chattanooga, TN: What You Need to Know | ChattanoogaJunkRemovalPros.com",
  description:
    "Removing old appliances in Chattanooga requires more than just hauling. Learn about refrigerant laws, disposal options, and why appliances cost more to remove.",
  alternates: { canonical: "/resources/appliance-removal-guide" },
};

const faqs = [
  {
    q: "Why do appliances cost more to remove than furniture?",
    a: "Federal EPA law requires refrigerants in refrigerators, freezers, and window AC units to be professionally evacuated before the appliance can be legally recycled or landfilled. This certified process adds cost on top of the standard hauling fee.",
  },
  {
    q: "Do Chattanooga recycling centers accept old appliances?",
    a: "No. Hamilton County recycling centers explicitly refuse all appliances and air conditioners. They only accept computers, computer components, and rechargeable batteries in the electronics category.",
  },
  {
    q: "Can I take my old refrigerator to a city refuse center?",
    a: "City residents with a standard pickup truck or smaller and valid residency documents (Tennessee driver's license with a City of Chattanooga address and Hamilton County vehicle tags) can use the refuse centers. Landlords, businesses, and anyone with commercial vehicle tags cannot. Visit limits of 12 per year also apply.",
  },
  {
    q: "What happens to an appliance once it's hauled away?",
    a: "Certified technicians evacuate any refrigerants, usable parts may be sold for scrap metal, and remaining materials go to licensed disposal or recycling facilities. A reputable pro will confirm they follow proper disposal procedures.",
  },
  {
    q: "Do I need to prepare my appliance before the pro arrives?",
    a: "Defrost and empty refrigerators at least 24 hours ahead of pickup. Disconnect washing machine water lines if you can. Everything else -- all heavy lifting, disconnection, and hauling -- is handled by the crew.",
  },
];

export default function ApplianceRemovalGuidePage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-green-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-wide mb-3">
            Resource Guide
          </p>
          <h1 className="text-4xl font-extrabold mb-4 leading-tight">
            Appliance Removal in Chattanooga, TN: What You Need to Know
          </h1>
          <p className="text-green-100 text-xl leading-relaxed max-w-2xl">
            Federal refrigerant laws, strict city center restrictions, and
            surcharges for certified disposal -- here is what makes appliance
            removal more complicated than a standard junk pickup.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="rich-content">
          <h2>Why Appliance Removal Is More Complicated Than Other Junk</h2>
          <p>
            Refrigerators, deep freezers, and window air conditioning units
            contain chlorofluorocarbons (CFCs) and hydrochlorofluorocarbons
            (HCFCs). Federal EPA law mandates that these refrigerants must be
            professionally evacuated by certified technicians before the
            appliance can be legally recycled or landfilled. Regional transfer
            stations may charge evacuation fees up to $32 per item.
          </p>
          <p>
            This regulatory requirement is the primary reason appliances with
            refrigerants cost more to remove than furniture or general
            household junk. The extra cost reflects certified handling, not
            just hauling.
          </p>

          <h2>What Chattanooga Disposal Options Exist</h2>

          <h2 style={{ fontSize: "1.2rem", marginTop: "1.25rem" }}>
            Hamilton County Recycling Centers
          </h2>
          <p>
            Hamilton County recycling centers explicitly refuse all appliances
            and air conditioners. They only accept computers, computer
            components, and rechargeable batteries in the electronics category.
            If you arrive with a refrigerator, window AC, or washer, you will
            be turned away. For the full list of center locations and hours,
            see the{" "}
            <Link href="/resources/electronics-disposal-chattanooga">
              electronics disposal guide
            </Link>.
          </p>

          <h2 style={{ fontSize: "1.2rem", marginTop: "1.25rem" }}>
            City of Chattanooga Refuse Collection Centers
          </h2>
          <p>
            The city operates three refuse collection centers that accept heavy
            appliances, but access is strictly limited:
          </p>
          <ul>
            <li>
              <strong>Locations:</strong> 4276 Airport Road, 4500 North Access
              Road, and 1400 West 57th Street
            </li>
            <li>
              <strong>Hours:</strong> Tuesday through Friday 10am-6pm, Saturday
              9am-6pm, Sunday 1pm-5pm
            </li>
            <li>
              <strong>Residency requirement:</strong> Valid Tennessee driver&apos;s
              license with a City of Chattanooga address plus valid Hamilton
              County vehicle tags
            </li>
            <li>
              <strong>Vehicle restriction:</strong> Standard pickup truck or
              smaller only -- no dump bodies, tandem axle trailers, or larger
              vehicles
            </li>
            <li>
              <strong>Visit limits:</strong> Maximum 8 bags per visit, maximum
              12 visits per calendar year -- heavy appliances count toward this
              limit
            </li>
            <li>
              <strong>Commercial tags turned away:</strong> Landlords,
              businesses, and contractors cannot use this service
            </li>
          </ul>

          <h2 style={{ fontSize: "1.2rem", marginTop: "1.25rem" }}>
            Household Hazardous Waste Facility (HHW)
          </h2>
          <p>
            The city HHW facility accepts AC refrigerants but does not handle
            complete appliance removal.
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
          </ul>

          <h2>Appliances That Require Extra Steps</h2>
          <p>
            Not all appliances require the same handling. These categories
            involve additional requirements beyond standard hauling:
          </p>
          <ul>
            <li>
              <strong>Refrigerators and deep freezers:</strong> Refrigerant
              must be evacuated by a certified technician before legal disposal
            </li>
            <li>
              <strong>Window AC units:</strong> Same refrigerant evacuation
              requirement as refrigerators and freezers
            </li>
            <li>
              <strong>Large built-in appliances:</strong> May require partial
              disassembly or coordination with a contractor before the hauling
              crew can remove them
            </li>
          </ul>

          <h2>Preparing Your Appliance for Removal</h2>
          <p>
            A little preparation makes the job faster and can help you get an
            accurate quote upfront:
          </p>
          <ul>
            <li>
              Empty and defrost refrigerators at least 24 hours before pickup
            </li>
            <li>
              Disconnect washing machines from water lines if possible before
              the crew arrives
            </li>
            <li>
              Confirm the pro is certified to handle refrigerant-containing
              units if your appliance has a compressor
            </li>
            <li>
              Most pros handle all heavy lifting and disconnection -- there is
              no need to move the appliance yourself
            </li>
          </ul>

          <h2>Appliance Removal Pricing Context</h2>
          <p>
            Appliance removal pricing depends on the type of appliance, access
            conditions, and whether refrigerant evacuation is required:
          </p>
          <ul>
            <li>
              Single appliance minimum: $95 to $125
            </li>
            <li>
              Large appliances (refrigerators, washers, dryers): typically $85
              to $175 per item depending on type and access
            </li>
            <li>
              Refrigerant evacuation fees and specialty disposal add to the base
              cost
            </li>
          </ul>
          <p>
            Always get a quote before the crew arrives. Reputable pros give firm
            prices upfront so there are no surprises.
          </p>
          <p>
            For context on how appliance pricing compares to full-volume jobs,
            see the{" "}
            <Link href="/resources/junk-removal-cost-chattanooga">
              junk removal cost guide
            </Link>. Landlords clearing appliances from rental units should also
            review the{" "}
            <Link href="/resources/landlord-junk-removal-chattanooga">
              landlord junk removal guide
            </Link>{" "}
            since city disposal options do not apply to rental properties.
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
            Connect with an Appliance Removal Pro in Chattanooga
          </h2>
          <p className="text-green-800 mb-6">
            {siteConfig.displayName} is a free referral service. Describe your
            appliance and a licensed, insured local pro will contact you with an
            upfront price. No obligation until you agree. You can also reach us
            via the{" "}
            <Link
              href="/contact"
              className="text-green-700 underline font-semibold"
            >
              contact page
            </Link>.
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
                href="/resources/electronics-disposal-chattanooga"
                className="text-green-700 underline hover:text-green-900"
              >
                Electronics and E-Waste Disposal in Chattanooga, TN
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
            <li>
              <Link
                href="/services/appliance-removal"
                className="text-green-700 underline hover:text-green-900"
              >
                Appliance Removal Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
