import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">{siteConfig.displayName}</h3>
          <p className="text-sm leading-relaxed text-gray-400 mb-3">
            A free referral service connecting {siteConfig.city} residents with licensed, insured junk removal professionals in {siteConfig.county}.
          </p>
          <p className="text-xs text-gray-500">
            We are not a junk removal company. We connect you with local pros who perform the work.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Services We Cover</h4>
          <ul className="space-y-1 text-sm">
            {siteConfig.services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Areas We Serve</h4>
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
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {year} {siteConfig.displayName} · {siteConfig.city}, {siteConfig.stateFullName} ·{" "}
        <Link href="/about" className="hover:text-gray-300">How It Works</Link> ·{" "}
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </footer>
  );
}
