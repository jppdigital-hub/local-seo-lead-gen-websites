import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const resourceSlugs = [
  "junk-removal-cost-chattanooga",
  "city-pickup-vs-junk-removal",
  "donate-furniture-chattanooga",
  "chattanooga-refuse-centers-guide",
  "landlord-junk-removal-chattanooga",
  "electronics-disposal-chattanooga",
  "appliance-removal-guide",
  "mattress-disposal-chattanooga",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = siteConfig.services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const areaPages: MetadataRoute.Sitemap = siteConfig.areas.map((a) => ({
    url: `${base}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const resourcePages: MetadataRoute.Sitemap = resourceSlugs.map((slug) => ({
    url: `${base}/resources/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // thank-you is noindex — excluded from sitemap intentionally

  return [...staticPages, ...servicePages, ...areaPages, ...resourcePages];
}
