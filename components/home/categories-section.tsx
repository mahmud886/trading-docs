import Link from "next/link";
import {
  TrendingUp,
  GraduationCap,
  Target,
  LineChart,
  Clock,
  ArrowRight,
  Activity,
  Layers,
  Brain,
  Workflow,
  Globe,
} from "lucide-react";

export function CategoriesSection({ lang }: { lang: string }) {
  return (
    <section className="relative mx-auto max-w-6xl px-3 sm:px-5 xl:px-6 pb-28">
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          {lang === "bn" ? "কোর ট্রেডিং ফ্রেমওয়ার্ক" : "Core Trading Frameworks"}
        </h2>
        <p className="mt-3 text-muted-foreground">
          {lang === "bn"
            ? "ফাউন্ডেশন থেকে এক্সপার্ট লেভেল পর্যন্ত সম্পূর্ণ কারিকুলাম"
            : "Complete curriculum from foundation to expert-level institutional trading"}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {[
          {
            title: lang === "bn" ? "প্রাইস অ্যাকশন" : "Price Action",
            href: `/${lang}/price-action`,
            color: "#00ff9d",
            icon: TrendingUp,
            desc: lang === "bn" ? "ক্যান্ডেলস্টিক, মার্কেট স্ট্রাকচার" : "Candlesticks, market structure",
          },
          {
            title: lang === "bn" ? "স্মার্ট মানি" : "Smart Money",
            href: `/${lang}/smc`,
            color: "#38bdf8",
            icon: Target,
            desc: lang === "bn" ? "অর্ডার ব্লক, FVG, লিকুইডিটি" : "Order blocks, FVG, liquidity",
          },
          {
            title: lang === "bn" ? "ICT কনসেপ্ট" : "ICT Concepts",
            href: `/${lang}/ict`,
            color: "#fb923c",
            icon: LineChart,
            desc: lang === "bn" ? "কিল জোন, মার্কেট মেকার মডেল" : "Kill zones, market maker models",
          },
          {
            title: lang === "bn" ? "অর্ডার ফ্লো" : "Order Flow",
            href: `/${lang}/order-flow`,
            color: "#ef4444",
            icon: Activity,
            desc: lang === "bn" ? "DOM, ভলিউম প্রোফাইল, VWAP" : "DOM, volume profile, VWAP",
          },
          {
            title: lang === "bn" ? "ওয়াইকফ" : "Wyckoff",
            href: `/${lang}/wyckoff`,
            color: "#f59e0b",
            icon: Workflow,
            desc: lang === "bn" ? "একুমুলেশন, ডিস্ট্রিবিউশন, VSA" : "Accumulation, distribution, VSA",
          },
          {
            title: lang === "bn" ? "ইন্টারমার্কেট" : "Intermarket",
            href: `/${lang}/intermarket`,
            color: "#38bdf8",
            icon: Globe,
            desc: lang === "bn" ? "কোরিলেশন, ইয়েল্ড কার্ভ" : "Correlations, yield curves",
          },
          {
            title: lang === "bn" ? "কোয়ান্টিটেটিভ" : "Quantitative",
            href: `/${lang}/quantitative`,
            color: "#c084fc",
            icon: Brain,
            desc: lang === "bn" ? "এক্সপেক্টেন্সি, মন্টে কার্লো" : "Expectancy, Monte Carlo",
          },
          {
            title: lang === "bn" ? "অকশন মার্কেট" : "Auction Market",
            href: `/${lang}/auction-market`,
            color: "#00ff9d",
            icon: Layers,
            desc: lang === "bn" ? "মার্কেট প্রোফাইল, TPO চার্ট" : "Market profile, TPO charts",
          },
          {
            title: lang === "bn" ? "ফরেক্স সেশন" : "Forex Sessions",
            href: `/${lang}/forex-sessions`,
            color: "#a855f7",
            icon: Clock,
            desc: lang === "bn" ? "কিল জোন, সেশন ওভারল্যাপ" : "Kill zones, session overlaps",
          },
          {
            title: lang === "bn" ? "একাডেমি" : "Academy",
            href: `/${lang}/academy`,
            color: "#10b981",
            icon: GraduationCap,
            desc: lang === "bn" ? "সাইকোলজি, রিস্ক ম্যানেজমেন্ট" : "Psychology, risk management",
          },
        ].map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.href}
              href={cat.href}
              className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card p-6 backdrop-blur-xl"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(300px at 50% 0%, ${cat.color}08, transparent 70%)` }}
              />
              <div
                className="absolute left-0 right-0 top-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
              />
              <div className="relative">
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${cat.color}12` }}
                >
                  <Icon size={20} style={{ color: cat.color }} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{cat.desc}</p>
                <div
                  className="mt-4 flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                  style={{ color: cat.color }}
                >
                  {lang === "bn" ? "দেখুন" : "Explore"} <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
