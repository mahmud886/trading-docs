import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Master the Markets Like Institutional Traders | Free Trading Education`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    // Core topics
    "trading education",
    "price action trading",
    "smart money concepts",
    "ICT methodology",
    "institutional trading",
    "forex trading",
    "order flow trading",
    "liquidity",
    "kill zones",
    "market structure",
    // Institutional concepts
    "order blocks",
    "fair value gap",
    "break of structure",
    "change of character",
    "volume profile trading",
    "VWAP trading",
    "footprint charts",
    "delta analysis",
    "wyckoff method",
    "auction market theory",
    "market profile",
    // Strategy keywords
    "bank trading strategy",
    "hedge fund strategy",
    "prop firm trading",
    "prop firm challenge",
    "supply and demand zones",
    "fibonacci trading",
    "scalping strategies",
    "swing trading",
    "day trading",
    // Specific models
    "ICT silver bullet",
    "ICT unicorn model",
    "market maker model",
    "power of 3",
    "optimal trade entry",
    "liquidity sweep",
    // Tools keywords
    "position size calculator",
    "risk reward calculator",
    "pip value calculator",
    "trading journal",
    "monte carlo simulation trading",
    "currency strength meter",
    "correlation matrix forex",
    // Intermarket
    "intermarket analysis",
    "DXY correlation",
    "yield curve trading",
    "risk on risk off",
    "COT report trading",
    // Quantitative
    "trading expectancy",
    "kelly criterion trading",
    "backtesting methodology",
    "equity curve management",
    // Bangla keywords
    "trading bangla",
    "ট্রেডিং শিক্ষা",
    "ফরেক্স ট্রেডিং বাংলা",
    "স্মার্ট মানি কনসেপ্ট",
    "প্রাইস অ্যাকশন বাংলা",
    "ICT বাংলা",
    // Long-tail
    "how banks trade forex",
    "institutional order flow analysis",
    "free trading course",
    "learn trading online free",
    "best trading education platform",
  ],
  authors: [{ name: "Md. Iqbal Mahmud", url: "https://github.com/mahmud886" }],
  creator: "Md. Iqbal Mahmud",
  publisher: SITE_NAME,
  category: "Education",
  classification: "Trading Education, Financial Education",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Institutional Trading Education | Free`,
    description:
      "350+ topics covering Price Action, Smart Money, ICT, Order Flow, Wyckoff & Quantitative Trading. 22+ professional tools. Completely free.",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "TradingDocs — Master the Markets Like Institutional Traders",
      },
    ],
    locale: "en_US",
    alternateLocale: ["bn_BD"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Free Institutional Trading Education`,
    description:
      "350+ topics. 22+ tools. Price Action, SMC, ICT, Order Flow, Wyckoff & more. Learn how banks and hedge funds move markets.",
    images: ["/images/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: `${SITE_URL}/en`,
      bn: `${SITE_URL}/bn`,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
