import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { localBusinessSchema } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.niche} ${siteConfig.city} ${siteConfig.state} | ${siteConfig.businessName}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.tagline,
  keywords: [
    `${siteConfig.niche.toLowerCase()} ${siteConfig.city}`,
    `${siteConfig.niche.toLowerCase()} ${siteConfig.city} ${siteConfig.state}`,
    `${siteConfig.niche.toLowerCase()} near me`,
    `cheap ${siteConfig.niche.toLowerCase()} ${siteConfig.city}`,
    `same day ${siteConfig.niche.toLowerCase()} ${siteConfig.city}`,
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    siteName: siteConfig.businessName,
    title: `${siteConfig.niche} ${siteConfig.city} ${siteConfig.state} | ${siteConfig.businessName}`,
    description: siteConfig.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.niche} ${siteConfig.city} | ${siteConfig.businessName}`,
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
            __html: JSON.stringify(localBusinessSchema()),
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
