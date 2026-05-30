import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const resourceLinks = [
  { href: "/resources/junk-removal-cost-chattanooga", label: "Junk Removal Cost Guide" },
  { href: "/resources/city-pickup-vs-junk-removal", label: "City Pickup vs. Private Hauler" },
  { href: "/resources/donate-furniture-chattanooga", label: "Where to Donate Furniture" },
  { href: "/resources/landlord-junk-removal-chattanooga", label: "Junk Removal for Landlords" },
  { href: "/resources/mattress-disposal-chattanooga", label: "Mattress Disposal Options" },
  { href: "/resources/appliance-removal-guide", label: "Appliance Removal Guide" },
  { href: "/resources/electronics-disposal-chattanooga", label: "Electronics Disposal Guide" },
  { href: "/resources/chattanooga-refuse-centers-guide", label: "Refuse Centers Guide" },
];

const officialSourceLinks = [
  {
    href: "https://chattanooga.gov/services/waste-recycling/bulky-trash-collection",
    label: "City of Chattanooga Bulky Trash Collection",
  },
  {
    href: "https://chattanooga.gov/services/waste-recycling/refuse-collection-centers",
    label: "City of Chattanooga Refuse Collection Centers",
  },
  {
    href: "https://www.hamiltontn.gov/Recycling.aspx",
    label: "Hamilton County Recycling Centers",
  },
  {
    href: "https://www.epa.gov/section608/stationary-refrigeration-safe-disposal-requirements",
    label: "EPA Refrigerant Safe Disposal Requirements",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">{siteConfig.displayName}</h3>
          <p className="text-sm leading-relaxed text-gray-400 mb-3">
            A free referral service connecting {siteConfig.city} residents with local junk removal professionals serving {siteConfig.county}.
          </p>
          <p className="text-xs text-gray-500">
            We are not a junk removal company. We connect you with local pros who perform the work, set pricing, and handle scheduling directly.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-1 text-sm">
            {siteConfig.services.slice(0, 10).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="hover:text-white transition-colors text-green-400">
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Service Areas</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                {siteConfig.city}, {siteConfig.state} (main)
              </Link>
            </li>
            {siteConfig.areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/areas/${a.slug}`} className="hover:text-white transition-colors">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Resources and Guides</h4>
          <ul className="space-y-1 text-sm">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="bg-gray-800/70 rounded-xl p-5">
          <h4 className="text-white font-semibold mb-2 text-sm">Official local sources referenced in our guides</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {officialSourceLinks.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500 px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          <Link href="/about" className="hover:text-gray-300">How It Works</Link>
          <Link href="/contact" className="hover:text-gray-300">Get a Free Quote</Link>
          <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-300">Terms and Disclaimer</Link>
        </div>
        <p>© {year} {siteConfig.displayName} · {siteConfig.city}, {siteConfig.stateFullName}</p>
      </div>
    </footer>
  );
}
