import { siteConfig } from "./site-config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: siteConfig.domain,
    email: siteConfig.contactEmail,
    areaServed: [
      { "@type": "City", name: siteConfig.city, containedInPlace: { "@type": "State", name: siteConfig.stateFullName } },
      ...siteConfig.areas.map((a) => ({ "@type": "City", name: a.name })),
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    name: siteConfig.displayName,
    url: siteConfig.domain,
    description: siteConfig.siteDescription,
    publisher: { "@id": `${siteConfig.domain}/#organization` },
  };
}

export function referralServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.domain}/#service`,
    name: `${siteConfig.niche} Referral Service`,
    description: siteConfig.siteDescription,
    provider: { "@id": `${siteConfig.domain}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: siteConfig.county,
      containedInPlace: { "@type": "State", name: siteConfig.stateFullName },
    },
    serviceType: "Referral Service",
  };
}

export function serviceSchema(serviceName: string, description: string, areaName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: { "@id": `${siteConfig.domain}/#organization` },
    areaServed: {
      "@type": "City",
      name: areaName ?? siteConfig.city,
      containedInPlace: { "@type": "State", name: siteConfig.stateFullName },
    },
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url.startsWith("http") ? crumb.url : `${siteConfig.domain}${crumb.url}`,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url.startsWith("http") ? opts.url : `${siteConfig.domain}${opts.url}`,
    datePublished: opts.datePublished ?? "2026-01-01",
    dateModified: opts.dateModified ?? "2026-05-30",
    publisher: { "@id": `${siteConfig.domain}/#organization` },
    author: { "@id": `${siteConfig.domain}/#organization` },
  };
}

export function contactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType: "customer service",
    email: siteConfig.contactEmail,
    areaServed: siteConfig.county,
    availableLanguage: "English",
  };
}

export function faqSchema(faqs?: { q: string; a: string }[]) {
  const items = faqs ?? siteConfig.faqs;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
