import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.displayName}`,
  description: `Privacy policy for ${siteConfig.displayName}. Learn how we collect, use, and protect information submitted through our free junk removal referral service.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-10 text-sm">Last updated: May 2026</p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-yellow-800 mb-2">Who We Are</h2>
        <p className="text-yellow-900 text-sm leading-relaxed">
          {siteConfig.displayName} is a free referral service that connects residents and property owners in {siteConfig.city}, {siteConfig.stateFullName} with independent, local junk removal professionals. We are not a junk removal company. We do not perform junk removal, set prices, or employ the professionals you are referred to.
        </p>
      </div>

      <div className="rich-content space-y-6">
        <h2>Information We Collect</h2>
        <p>
          We collect information that you voluntarily provide when you submit a quote request through our lead form. This may include:
        </p>
        <ul>
          <li>Your name</li>
          <li>Your phone number</li>
          <li>Your email address</li>
          <li>Your service address or general location within {siteConfig.county}</li>
          <li>A description of the items or debris you need removed</li>
          <li>Any additional details you choose to include about your job</li>
        </ul>
        <p>
          We do not collect payment information. All financial transactions occur directly between you and the junk removal professional.
        </p>
        <p>
          We may also collect standard technical information automatically when you visit our site, including your IP address, browser type, referring URL, and pages visited. This information is collected through standard web server logs and analytics tools and is used only in aggregate to understand site usage.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          The information you submit through our lead form is used solely to connect you with a local junk removal professional who can respond to your request. Specifically:
        </p>
        <ul>
          <li>Your contact details and job description are forwarded to a vetted, local junk removal professional who serves your area in {siteConfig.county}.</li>
          <li>That professional uses your information to contact you directly and provide a free quote.</li>
          <li>We retain a record of your submission for business tracking and quality purposes (see Data Retention below).</li>
        </ul>
        <p>
          We do not use your information for marketing emails, automated messaging campaigns, or any purpose unrelated to connecting you with a junk removal professional.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          To operate this referral service, we work with the following third-party platforms:
        </p>
        <ul>
          <li>
            <strong>Make.com (formerly Integromat):</strong> We use Make.com to route lead form submissions. When you submit a request, your information passes through Make.com&apos;s automation infrastructure before being forwarded to the appropriate local professional. Make.com&apos;s privacy policy is available at make.com.
          </li>
          <li>
            <strong>Airtable:</strong> We use Airtable as a lead tracking database to store records of submitted requests. This allows us to manage referrals and maintain records for business purposes. Airtable&apos;s privacy policy is available at airtable.com.
          </li>
        </ul>
        <p>
          Both platforms are reputable business tools with their own privacy and security practices. We configure these services to handle your data only as described in this policy.
        </p>

        <h2>Data Retention</h2>
        <p>
          Lead records submitted through this site are retained for up to 12 months from the date of submission. This retention period allows us to maintain records for legitimate business purposes including referral tracking, quality review, and responding to any questions about a submitted request.
        </p>
        <p>
          After 12 months, records are deleted or anonymized. If you would like your information removed sooner, contact us at the email address below.
        </p>

        <h2>No Sale of Personal Information</h2>
        <p>
          We do not sell your personal information to third parties. Your contact details and job description are shared only with the local junk removal professional who is responding to your specific request. We do not share your information with data brokers, advertising networks, or unrelated businesses.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to request access to the personal information we hold about you, to request that it be corrected, or to request that it be deleted. To make any of these requests, email us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>
        <p>
          We will respond to valid requests within a reasonable timeframe. Note that we may need to retain certain records for legitimate business purposes even after a deletion request.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          This site is not directed at children under the age of 13, and we do not knowingly collect personal information from anyone under 13. If you believe a child has submitted information through this site, contact us and we will delete it promptly.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. The date at the top of this page will be updated when changes are made. Continued use of the site after an update constitutes acceptance of the revised policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this privacy policy or how your information is handled, contact us at:
        </p>
        <p>
          <strong>{siteConfig.displayName}</strong>
          <br />
          Email: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </p>
      </div>
    </div>
  );
}
