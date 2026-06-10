import type { Metadata } from "next";
import Link from "next/link";
import { getFeaturedBlogPosts } from "@/lib/blog";
import { FeaturedBlogs } from "@/components/blog/featured-blogs";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import {
  BarChart3,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Zap,
  Target,
  LineChart,
  Shield,
  Clock,
  ArrowRight,
  Activity,
  Layers,
  Brain,
  Workflow,
  Calculator,
  Globe,
} from "lucide-react";

function getLocaleAlternates(path: string) {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = locales.includes(lang as Locale) ? (lang as Locale) : "en";
  const dict = await getDictionary(locale);
  const title = dict.hero.title;
  const description = dict.hero.subtitle;
  const url = `${SITE_URL}/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: getLocaleAlternates(""),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: ["/images/og/default.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/default.png"],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const featuredPosts = getFeaturedBlogPosts(lang as Locale, 3);

  return (
    <div className="relative">

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 text-center sm:pt-36">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,157,0.03)_0%,transparent_70%)]" />
        </div>

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-green/20 bg-accent-green/5 px-5 py-2.5 text-sm font-medium text-accent-green">
          <Zap size={14} className="animate-pulse-glow" />
          {lang === "bn" ? "ইনস্টিটিউশনাল-গ্রেড ট্রেডিং শিক্ষা" : "Institutional-Grade Trading Education"}
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          {dict.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {lang === "bn"
            ? "প্রাইস অ্যাকশন থেকে অর্ডার ফ্লো, ওয়াইকফ থেকে কোয়ান্টিটেটিভ ট্রেডিং — সম্পূর্ণ ইনস্টিটিউশনাল ফ্রেমওয়ার্ক। শিখুন কিভাবে ব্যাংক ও হেজ ফান্ড মার্কেট মুভ করে।"
            : "From Price Action to Order Flow, Wyckoff to Quantitative Trading — the complete institutional framework. Learn how banks, hedge funds, and proprietary firms move the markets."}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={`/${lang}/academy`}
            className="group flex items-center gap-2 rounded-full bg-accent-green px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(0,255,157,0.2)] transition-all hover:shadow-[0_0_50px_rgba(0,255,157,0.4)]"
          >
            <GraduationCap size={18} />
            {dict.hero.cta}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={`/${lang}/tools`}
            className="neon-border flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-foreground"
          >
            <Calculator size={18} />
            {lang === "bn" ? "প্রো টুলস" : "Pro Tools"}
          </Link>
        </div>

        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {[
            { value: "350+", label: lang === "bn" ? "টপিক" : "Topics" },
            { value: "22+", label: lang === "bn" ? "প্রো টুলস" : "Pro Tools" },
            { value: "10", label: lang === "bn" ? "বিভাগ" : "Categories" },
            { value: "2", label: lang === "bn" ? "ভাষা" : "Languages" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border/50 bg-card/50 p-4 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold neon-text sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Categories Grid */}
      <section className="relative mx-auto max-w-6xl px-6 pb-28">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {lang === "bn" ? "কোর ট্রেডিং ফ্রেমওয়ার্ক" : "Core Trading Frameworks"}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {lang === "bn" ? "ফাউন্ডেশন থেকে এক্সপার্ট লেভেল পর্যন্ত সম্পূর্ণ কারিকুলাম" : "Complete curriculum from foundation to expert-level institutional trading"}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { title: lang === "bn" ? "প্রাইস অ্যাকশন" : "Price Action", href: `/${lang}/price-action`, color: "#00ff9d", icon: TrendingUp, desc: lang === "bn" ? "ক্যান্ডেলস্টিক, মার্কেট স্ট্রাকচার" : "Candlesticks, market structure" },
            { title: lang === "bn" ? "স্মার্ট মানি" : "Smart Money", href: `/${lang}/smc`, color: "#38bdf8", icon: Target, desc: lang === "bn" ? "অর্ডার ব্লক, FVG, লিকুইডিটি" : "Order blocks, FVG, liquidity" },
            { title: lang === "bn" ? "ICT কনসেপ্ট" : "ICT Concepts", href: `/${lang}/ict`, color: "#fb923c", icon: LineChart, desc: lang === "bn" ? "কিল জোন, মার্কেট মেকার মডেল" : "Kill zones, market maker models" },
            { title: lang === "bn" ? "অর্ডার ফ্লো" : "Order Flow", href: `/${lang}/order-flow`, color: "#ef4444", icon: Activity, desc: lang === "bn" ? "DOM, ভলিউম প্রোফাইল, VWAP" : "DOM, volume profile, VWAP" },
            { title: lang === "bn" ? "ওয়াইকফ" : "Wyckoff", href: `/${lang}/wyckoff`, color: "#f59e0b", icon: Workflow, desc: lang === "bn" ? "একুমুলেশন, ডিস্ট্রিবিউশন, VSA" : "Accumulation, distribution, VSA" },
            { title: lang === "bn" ? "ইন্টারমার্কেট" : "Intermarket", href: `/${lang}/intermarket`, color: "#38bdf8", icon: Globe, desc: lang === "bn" ? "কোরিলেশন, ইয়েল্ড কার্ভ" : "Correlations, yield curves" },
            { title: lang === "bn" ? "কোয়ান্টিটেটিভ" : "Quantitative", href: `/${lang}/quantitative`, color: "#c084fc", icon: Brain, desc: lang === "bn" ? "এক্সপেক্টেন্সি, মন্টে কার্লো" : "Expectancy, Monte Carlo" },
            { title: lang === "bn" ? "অকশন মার্কেট" : "Auction Market", href: `/${lang}/auction-market`, color: "#00ff9d", icon: Layers, desc: lang === "bn" ? "মার্কেট প্রোফাইল, TPO চার্ট" : "Market profile, TPO charts" },
            { title: lang === "bn" ? "ফরেক্স সেশন" : "Forex Sessions", href: `/${lang}/forex-sessions`, color: "#a855f7", icon: Clock, desc: lang === "bn" ? "কিল জোন, সেশন ওভারল্যাপ" : "Kill zones, session overlaps" },
            { title: lang === "bn" ? "একাডেমি" : "Academy", href: `/${lang}/academy`, color: "#10b981", icon: GraduationCap, desc: lang === "bn" ? "সাইকোলজি, রিস্ক ম্যানেজমেন্ট" : "Psychology, risk management" },
          ].map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(300px at 50% 0%, ${cat.color}08, transparent 70%)` }} />
                <div className="absolute left-0 right-0 top-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }} />
                <div className="relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${cat.color}12` }}>
                    <Icon size={20} style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{cat.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2" style={{ color: cat.color }}>
                    {lang === "bn" ? "দেখুন" : "Explore"} <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="relative border-t border-border/30">
        <div className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{dict.home.featuredTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{dict.home.featuredSubtitle}</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: dict.home.beginnerPath, desc: dict.home.beginnerDesc, color: "#00ff9d", level: "01", href: `/${lang}/price-action/introduction` },
              { title: dict.home.intermediatePath, desc: dict.home.intermediateDesc, color: "#38bdf8", level: "02", href: `/${lang}/smc` },
              { title: dict.home.advancedPath, desc: dict.home.advancedDesc, color: "#fb923c", level: "03", href: `/${lang}/ict` },
              { title: dict.home.expertPath, desc: dict.home.expertDesc, color: "#c084fc", level: "04", href: `/${lang}/order-flow` },
            ].map((path) => (
              <Link key={path.level} href={path.href} className="card-hover group rounded-2xl border border-border bg-card p-7 backdrop-blur-xl">
                <div className="mb-4 text-5xl font-bold opacity-20" style={{ color: path.color }}>{path.level}</div>
                <h3 className="text-lg font-semibold text-foreground">{path.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{path.desc}</p>
                <div className="mt-4 h-1 w-8 rounded-full opacity-0 transition-all group-hover:w-12 group-hover:opacity-100" style={{ backgroundColor: path.color }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tools & Features */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{lang === "bn" ? "প্রো ট্রেডিং টুলস" : "Professional Trading Tools"}</h2>
          <p className="mt-4 text-muted-foreground">{lang === "bn" ? "ইনস্টিটিউশনাল ডেস্ক-লেভেল ক্যালকুলেটর — সম্পূর্ণ বিনামূল্যে" : "Institutional desk-level calculators and analysis tools — completely free"}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Shield, title: lang === "bn" ? "রিস্ক ম্যানেজমেন্ট সুইট" : "Risk Management Suite", desc: lang === "bn" ? "পজিশন সাইজার, ড্রডাউন ক্যালকুলেটর, মার্জিন ট্র্যাকার" : "Position sizer, drawdown calculator, margin tracker, expectancy calculator", href: `/${lang}/tools`, color: "#00ff9d" },
            { icon: BarChart3, title: lang === "bn" ? "লাইভ চার্ট ও COT ডেটা" : "Live Charts & COT Data", desc: lang === "bn" ? "TradingView চার্ট, COT পজিশনিং, কারেন্সি স্ট্রেংথ" : "TradingView charts, COT positioning data, currency strength meter", href: `/${lang}/charts`, color: "#38bdf8" },
            { icon: Brain, title: lang === "bn" ? "কোয়ান্ট টুলস" : "Quant Tools", desc: lang === "bn" ? "ইকুইটি কার্ভ সিমুলেটর, রিজিম ডিটেক্টর, কম্পাউন্ডিং" : "Equity curve simulator, Monte Carlo, regime detector, compounding", href: `/${lang}/tools/equity-simulator`, color: "#c084fc" },
          ].map((feature) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.title} href={feature.href} className="card-hover group rounded-2xl border border-border bg-card p-7 backdrop-blur-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: `${feature.color}12` }}>
                  <Icon size={20} style={{ color: feature.color }} />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent-green opacity-0 transition-all group-hover:opacity-100">
                  {lang === "bn" ? "টুলস দেখুন" : "View Tools"} <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Institutional Edge Section */}
      <section className="relative border-t border-border/30">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-5 py-2.5 text-sm font-medium text-accent-blue">
              🏦 {lang === "bn" ? "ইনস্টিটিউশনাল এজ" : "The Institutional Edge"}
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{lang === "bn" ? "ব্যাংকদের মতো ট্রেড করুন" : "Trade Like the Banks"}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {lang === "bn"
                ? "শিখুন কিভাবে JP Morgan, Goldman Sachs, এবং Citadel-এর মতো ইনস্টিটিউশনরা মার্কেটে লিকুইডিটি ইঞ্জিনিয়ার করে।"
                : "Learn how institutions like JP Morgan, Goldman Sachs, and Citadel engineer liquidity and position against retail traders."}
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: lang === "bn" ? "অর্ডার ফ্লো অ্যানালাইসিস" : "Order Flow Analysis", desc: lang === "bn" ? "DOM, ফুটপ্রিন্ট চার্ট, ডেল্টা — ইনস্টিটিউশনাল ফুটপ্রিন্ট দেখুন" : "DOM, footprint charts, delta — see institutional footprints invisible on regular charts", color: "#00ff9d" },
              { title: lang === "bn" ? "লিকুইডিটি ইঞ্জিনিয়ারিং" : "Liquidity Engineering", desc: lang === "bn" ? "ইনস্টিটিউশনরা কিভাবে স্টপ হান্ট করে এবং ফাঁদে ফেলে" : "How institutions hunt stops and trap retail traders before the real move", color: "#38bdf8" },
              { title: lang === "bn" ? "টাইম-বেসড ট্রেডিং" : "Time-Based Trading", desc: lang === "bn" ? "কিল জোন, লন্ডন ফিক্স, NY ওপেন — কখন ব্যাংকরা অ্যাক্টিভ" : "Kill zones, London Fix, NY Open — when banks are most active in the markets", color: "#fb923c" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-7 backdrop-blur-xl">
                <div className="mb-4 h-1 w-12 rounded-full" style={{ backgroundColor: item.color }} />
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-border/30">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{lang === "bn" ? "আজই শুরু করুন" : "Start Your Journey Today"}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {lang === "bn" ? "সম্পূর্ণ বিনামূল্যে। কোনো সাইনআপ প্রয়োজন নেই। ট্রেডারদের জন্য তৈরি।" : "Completely free. No signup required. Built by traders, for traders who refuse to stay retail."}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/price-action/introduction`} className="group flex items-center gap-2 rounded-full bg-accent-green px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(0,255,157,0.2)] transition-all hover:shadow-[0_0_50px_rgba(0,255,157,0.4)]">
              <BookOpen size={18} />
              {lang === "bn" ? "বিগিনার থেকে শুরু" : "Start from Beginner"}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href={`/${lang}/order-flow`} className="neon-border flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-foreground">
              <Activity size={18} />
              {lang === "bn" ? "অর্ডার ফ্লো শিখুন" : "Learn Order Flow"}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      {featuredPosts.length > 0 && (
        <section className="relative mx-auto max-w-6xl px-6 py-28">
          <FeaturedBlogs posts={featuredPosts} locale={lang} />
        </section>
      )}
    </div>
  );
}
