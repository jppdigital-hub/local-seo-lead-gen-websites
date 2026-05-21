"use client";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg leading-tight">
          {siteConfig.displayName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/services/furniture-removal" className="hover:text-green-200 transition-colors">Services</Link>
          <Link href="/areas/hixson" className="hover:text-green-200 transition-colors">Areas Served</Link>
          <Link href="/about" className="hover:text-green-200 transition-colors">How It Works</Link>
          <Link
            href="/contact"
            className="bg-yellow-400 text-gray-900 font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition-colors"
          >
            Get a Free Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-green-800 px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/services/furniture-removal" className="py-2 border-b border-green-700" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/areas/hixson" className="py-2 border-b border-green-700" onClick={() => setOpen(false)}>Areas Served</Link>
          <Link href="/about" className="py-2 border-b border-green-700" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="/contact" className="bg-yellow-400 text-gray-900 font-bold text-center py-2 rounded-full" onClick={() => setOpen(false)}>
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
