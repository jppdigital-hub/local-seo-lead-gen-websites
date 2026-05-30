import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Request Received | ${siteConfig.displayName}`,
  description: `Your junk removal request has been received. A local professional will be in touch with a free quote.`,
  alternates: { canonical: "/thank-you" },
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      {/* Success icon */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto mb-8">
        <svg
          className="w-10 h-10 text-green-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
        Your request has been received.
      </h1>

      <p className="text-xl text-gray-600 mb-6 leading-relaxed">
        A local junk removal pro will be in touch with a free quote. You are not obligated to book.
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-10 text-sm text-yellow-900 text-left">
        <p>
          <strong>This is a free referral service.</strong>{" "}
          {siteConfig.displayName} connects you with the professional. You deal directly with them for pricing, scheduling, and the work.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
        >
          Return to Homepage
        </Link>
        <Link
          href="/services"
          className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg border border-green-700 hover:bg-green-50 transition-colors"
        >
          Browse Our Service Coverage
        </Link>
      </div>
    </div>
  );
}
