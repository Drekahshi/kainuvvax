import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAI Nuvari | Trusted data for the green economy",
  description:
    "KAI Nuvari builds infrastructure connecting verified conservation data, real-world assets and sustainable economic opportunities.",
  keywords: [
    "KAI Nuvari",
    "JazaMiti",
    "GTCI",
    "Conservation Data",
    "Real World Assets",
    "Avalanche",
    "Sustainable Finance",
    "Community Forest Associations",
  ],
  authors: [{ name: "KAI Nuvari" }],
  openGraph: {
    title: "KAI Nuvari | Trusted data for the green economy",
    description:
      "KAI Nuvari builds infrastructure connecting verified conservation data, real-world assets and sustainable economic opportunities.",
    type: "website",
    locale: "en_US",
    siteName: "KAI Nuvari",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAI Nuvari | Trusted data for the green economy",
    description:
      "KAI Nuvari builds infrastructure connecting verified conservation data, real-world assets and sustainable economic opportunities.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KAI Nuvari",
    url: "https://kainuvari.org",
    logo: "https://kainuvari.org/logo.png",
    description:
      "Infrastructure connecting verified conservation data, real-world assets and sustainable economic opportunities.",
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[var(--color-sand-100)] text-[var(--color-ink-900)]">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-[var(--color-green-700)] text-[var(--color-sand-100)] rounded-md font-mono-data text-xs"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
