import Link from "next/link";
import { GraduationCap, Zap, ArrowRight, Calculator } from "lucide-react";
import type { getDictionary } from "@/lib/i18n";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export function HeroSection({ lang, dict }: { lang: string; dict: Dictionary }) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 text-center sm:pt-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,157,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-green/20 bg-accent-green/5 px-5 py-2.5 text-sm font-medium text-accent-green">
        <Zap size={14} className="animate-pulse-glow" />
        {lang === "bn" ? "ইনস্টিটিউশনাল-গ্রেড ট্রেডিং শিক্ষা" : "Institutional-Grade Trading Education"}
      </div>

      <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">{dict.hero.title}</h1>
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
          <div
            key={stat.label}
            className="rounded-xl border border-border/50 bg-card/50 p-4 text-center backdrop-blur-sm"
          >
            <div className="text-2xl font-bold neon-text sm:text-3xl">{stat.value}</div>
            <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
