import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";
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
} from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="relative">

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 text-center sm:pt-36">

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-green/20 bg-accent-green/5 px-5 py-2.5 text-sm font-medium text-accent-green">
          <Zap size={14} className="animate-pulse-glow" />
          {lang === "bn" ? "সম্পূর্ণ ট্রেডিং শিক্ষা প্ল্যাটফর্ম" : "Complete Trading Education Platform"}
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          {dict.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {dict.hero.subtitle}
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
            href={`/${lang}/price-action`}
            className="neon-border flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-foreground"
          >
            <BookOpen size={18} />
            {dict.hero.explore}
          </Link>
        </div>

        <div className="mx-auto mt-20 flex max-w-lg justify-center gap-12">
          {[
            { value: "200+", label: dict.home.statsTopics },
            { value: "50+", label: dict.home.statsLessons },
            { value: "2", label: dict.nav.language },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold neon-text">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Cards */}
      <section className="relative mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: dict.nav.priceAction,
              href: `/${lang}/price-action`,
              color: "#00ff9d",
              icon: TrendingUp,
              desc: lang === "bn"
                ? "ক্যান্ডেলস্টিক, মার্কেট স্ট্রাকচার, এন্ট্রি ও এক্সিট"
                : "Candlesticks, market structure, entries & exits",
            },
            {
              title: dict.nav.smc,
              href: `/${lang}/smc`,
              color: "#38bdf8",
              icon: Target,
              desc: lang === "bn"
                ? "অর্ডার ব্লক, FVG, লিকুইডিটি, ইনস্টিটিউশনাল ফ্লো"
                : "Order blocks, FVG, liquidity, institutional flow",
            },
            {
              title: dict.nav.ict,
              href: `/${lang}/ict`,
              color: "#fb923c",
              icon: LineChart,
              desc: lang === "bn"
                ? "কিল জোন, PD অ্যারে, মার্কেট মেকার মডেল"
                : "Kill zones, PD arrays, market maker models",
            },
            {
              title: dict.nav.forexSessions,
              href: `/${lang}/forex-sessions`,
              color: "#c084fc",
              icon: Clock,
              desc: lang === "bn"
                ? "সেশন টাইমিং, কিল জোন ও ওভারল্যাপ (BD সময়)"
                : "Session timing, kill zones & overlaps in BD time",
            },
          ].map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-xl"
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(500px at 50% 0%, ${cat.color}08, transparent 70%)`,
                  }}
                />
                {/* Top border accent */}
                <div
                  className="absolute left-0 right-0 top-0 h-[2px] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
                    boxShadow: `0 0 10px ${cat.color}40`,
                  }}
                />
                <div className="relative">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${cat.color}12` }}
                  >
                    <Icon size={22} style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cat.desc}
                  </p>
                  <div
                    className="mt-5 flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2"
                    style={{ color: cat.color }}
                  >
                    {lang === "bn" ? "দেখুন" : "Explore"}
                    <ArrowRight size={14} />
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
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {dict.home.featuredTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {dict.home.featuredSubtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: dict.home.beginnerPath,
                desc: dict.home.beginnerDesc,
                color: "#00ff9d",
                level: "01",
                href: `/${lang}/price-action/introduction`,
              },
              {
                title: dict.home.intermediatePath,
                desc: dict.home.intermediateDesc,
                color: "#38bdf8",
                level: "02",
                href: `/${lang}/smc`,
              },
              {
                title: dict.home.advancedPath,
                desc: dict.home.advancedDesc,
                color: "#fb923c",
                level: "03",
                href: `/${lang}/ict`,
              },
              {
                title: dict.home.expertPath,
                desc: dict.home.expertDesc,
                color: "#c084fc",
                level: "04",
                href: `/${lang}/ict/algorithmic-delivery-concepts`,
              },
            ].map((path) => (
              <Link
                key={path.level}
                href={path.href}
                className="card-hover group rounded-2xl border border-border bg-card p-7 backdrop-blur-xl"
              >
                <div
                  className="mb-4 text-5xl font-bold opacity-20"
                  style={{ color: path.color }}
                >
                  {path.level}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {path.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {path.desc}
                </p>
                <div
                  className="mt-4 h-1 w-8 rounded-full opacity-0 transition-all group-hover:w-12 group-hover:opacity-100"
                  style={{ backgroundColor: path.color }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Shield,
              title: lang === "bn" ? "রিস্ক ম্যানেজমেন্ট" : "Risk Management",
              desc: lang === "bn"
                ? "পজিশন সাইজিং, স্টপ লস, এবং ট্রেড ম্যানেজমেন্ট"
                : "Position sizing, stop loss, and trade management",
              href: `/${lang}/academy`,
              color: "#00ff9d",
            },
            {
              icon: BarChart3,
              title: lang === "bn" ? "লাইভ চার্ট" : "Live Charts",
              desc: lang === "bn"
                ? "TradingView ইন্টিগ্রেশন সহ ইন্টারেক্টিভ চার্ট"
                : "Interactive charts with TradingView integration",
              href: `/${lang}/charts`,
              color: "#38bdf8",
            },
            {
              icon: BookOpen,
              title: lang === "bn" ? "শব্দকোষ" : "Trading Glossary",
              desc: lang === "bn"
                ? "সম্পূর্ণ A-Z ট্রেডিং পরিভাষা"
                : "Complete A-Z trading terminology reference",
              href: `/${lang}/glossary`,
              color: "#c084fc",
            },
          ].map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="card-hover group rounded-2xl border border-border bg-card p-7 backdrop-blur-xl"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${feature.color}12` }}
                >
                  <Icon size={20} style={{ color: feature.color }} />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
