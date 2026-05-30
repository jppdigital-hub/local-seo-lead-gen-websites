import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { organizationSchema, websiteSchema, referralServiceSchema } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.niche} ${siteConfig.city} ${siteConfig.state} | ${siteConfig.displayName}`,
    template: `%s | ${siteConfig.displayName}`,
  },
  description: siteConfig.tagline,
  keywords: [
    `${siteConfig.niche.toLowerCase()} ${siteConfig.city}`,
    `${siteConfig.niche.toLowerCase()} ${siteConfig.city} ${siteConfig.state}`,
    `${siteConfig.niche.toLowerCase()} near me`,
    `find ${siteConfig.niche.toLowerCase()} ${siteConfig.city}`,
    `${siteConfig.niche.toLowerCase()} ${siteConfig.city} quote`,
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    siteName: siteConfig.displayName,
    title: `${siteConfig.niche} ${siteConfig.city} ${siteConfig.state} | ${siteConfig.displayName}`,
    description: siteConfig.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.niche} ${siteConfig.city} | ${siteConfig.displayName}`,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(referralServiceSchema()),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
