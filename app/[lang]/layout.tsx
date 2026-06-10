import { Noto_Sans, Noto_Sans_Bengali, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ReadingProgress } from "@/components/docs/reading-progress";
import { generateWebsiteSchema, generateOrganizationSchema } from "@/lib/schema";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
});

// Combine font CSS variables into a single, server-stable class string
const fontClasses = `${notoSans.variable} ${geistMono.variable} ${notoSansBengali.variable}`;

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) notFound();

  const websiteSchema = generateWebsiteSchema();
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang={lang} suppressHydrationWarning={true} data-scroll-behavior="smooth" className={fontClasses}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body suppressHydrationWarning={true} className="relative min-h-screen text-foreground antialiased">
        {/* Emerald Depths background */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, var(--emerald-glow), transparent 70%), var(--background)",
          }}
        />
        <div className="bg-grid pointer-events-none fixed inset-0 z-0" />

        <Providers>
          <div className="relative z-10">
            <ReadingProgress />
            <Navbar lang={lang as Locale} />
            <main className="flex-1">{children}</main>
            <Footer lang={lang as Locale} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
