import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.displayName}`,
  description: `Terms of service and referral disclaimer for ${siteConfig.displayName}. This site is a free referral service connecting Chattanooga residents with local junk removal professionals.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold mb-4">Terms of Service and Referral Disclaimer</h1>
      <p className="text-gray-500 mb-10 text-sm">Last updated: May 2026</p>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-green-900 mb-2">We Are Not a Junk Removal Company</h2>
        <p className="text-green-900 text-sm leading-relaxed">
          {siteConfig.displayName} is a <strong>free referral service only</strong>. We do not perform junk removal, employ junk removal crews, own trucks, or operate as a junk removal business in any form. When you submit a request through this site, your information is forwarded to an independent, locally owned junk removal professional operating in {siteConfig.city}, {siteConfig.stateFullName}. That professional contacts you, quotes the job, and performs the work. Your agreement is with the professional, not with this site.
        </p>
      </div>

      <div className="rich-content space-y-6">
        <h2>Acceptance of Terms</h2>
        <p>
          By using {siteConfig.displayName} and submitting a request through this site, you agree to these terms. If you do not agree, do not submit a request or use this site.
        </p>

        <h2>How the Referral Service Works</h2>
        <p>
          {siteConfig.displayName} operates as follows:
        </p>
        <ul>
          <li>You submit a junk removal request through the form on this site, providing your contact information and a description of the job.</li>
          <li>We forward your request to a local junk removal professional who serves your area in {siteConfig.county}.</li>
          <li>That professional contacts you directly to discuss the job and provide a free, no-obligation quote.</li>
          <li>If you choose to proceed, you schedule and pay the professional directly. You are under no obligation to book.</li>
        </ul>
        <p>
          We act only as a conduit to connect you with a local professional. We are not a party to any agreement between you and the junk removal professional.
        </p>

        <h2>No Cost for the Referral</h2>
        <p>
          Using this referral service is completely free. We charge nothing to you for submitting a request or being connected with a local professional. All pricing for junk removal services is set by the professional and quoted before any work begins. Payment for junk removal services is made directly between you and the professional.
        </p>

        <h2>Your Responsibilities</h2>
        <p>
          By submitting a request through this site, you agree to:
        </p>
        <ul>
          <li>Provide accurate and complete information about your job, including the type and approximate volume of items to be removed.</li>
          <li>Be reasonably available for contact by the referred professional, including by phone and email.</li>
          <li>Provide a valid service address within the area served by this referral network.</li>
          <li>Communicate directly and honestly with the junk removal professional regarding the scope, access conditions, and timeline of your job.</li>
        </ul>

        <h2>Prohibited Uses</h2>
        <p>
          You may not use this site or the referral service to:
        </p>
        <ul>
          <li>Submit false, incomplete, or intentionally misleading information about a job.</li>
          <li>Submit requests on behalf of a commercial operation without disclosing the commercial nature of the job.</li>
          <li>Harvest contact information or use the service to solicit professionals for unrelated purposes.</li>
          <li>Interfere with the operation of the site or its referral processes.</li>
        </ul>

        <h2>Disclaimer of Warranties</h2>
        <p>
          {siteConfig.displayName} makes no warranties, express or implied, regarding the junk removal professionals connected through this service. Specifically, we do not guarantee:
        </p>
        <ul>
          <li>The quality of work performed by any referred professional.</li>
          <li>The pricing offered by any referred professional.</li>
          <li>The availability of any referred professional for your requested date or timeframe.</li>
          <li>That a referred professional will contact you within any specific period.</li>
          <li>That any referred professional will be licensed, insured, or otherwise qualified beyond our standard vetting process.</li>
        </ul>
        <p>
          You should always confirm a professional&apos;s license and insurance status before authorizing any work to begin.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          {siteConfig.displayName} is not liable for any damages, losses, injuries, or disputes arising from work performed by a referred junk removal professional. This includes but is not limited to property damage, personal injury, incomplete work, disputes over pricing, or any other issue arising from the professional&apos;s services.
        </p>
        <p>
          Your relationship is with the junk removal professional, not with this site. Any claims related to the work itself must be directed to the professional who performed it.
        </p>
        <p>
          To the maximum extent permitted by applicable law, {siteConfig.displayName}&apos;s total liability to you for any claim arising out of your use of this referral service is limited to zero dollars, as this service is provided to you at no charge.
        </p>

        <h2>No Endorsement</h2>
        <p>
          Referral through this site does not constitute an endorsement, guarantee, or warranty of any specific professional or their work. We connect you with professionals based on service area and availability. Final decisions about whether to hire any professional rest entirely with you.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of {siteConfig.stateFullName}, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of this site shall be resolved in the appropriate courts of {siteConfig.stateFullName}.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site after an update constitutes acceptance of the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Contact us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>
      </div>
    </div>
  );
}
