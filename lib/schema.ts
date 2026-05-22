import { siteConfig } from "./site-config";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    // Use a generic service business type appropriate for a referral directory
    "@id": siteConfig.domain,
    name: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: siteConfig.domain,
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.lat,
      longitude: siteConfig.lng,
    },
    areaServed: [
      { "@type": "City", name: siteConfig.city },
      ...siteConfig.areas.map((a) => ({ "@type": "City", name: a.name })),
    ],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function serviceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.siteName,
      url: siteConfig.domain,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city,
    },
  };
}
