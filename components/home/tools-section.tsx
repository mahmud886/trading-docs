import Link from "next/link";
import { BarChart3, Shield, ArrowRight, Brain } from "lucide-react";

export function ToolsSection({ lang }: { lang: string }) {
  return (
    <section className="mx-auto max-w-6xl px-3 sm:px-5 xl:px-6 py-28">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          {lang === "bn" ? "প্রো ট্রেডিং টুলস" : "Professional Trading Tools"}
        </h2>
        <p className="mt-4 text-muted-foreground">
          {lang === "bn"
            ? "ইনস্টিটিউশনাল ডেস্ক-লেভেল ক্যালকুলেটর — সম্পূর্ণ বিনামূল্যে"
            : "Institutional desk-level calculators and analysis tools — completely free"}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: Shield,
            title: lang === "bn" ? "রিস্ক ম্যানেজমেন্ট সুইট" : "Risk Management Suite",
            desc:
              lang === "bn"
                ? "পজিশন সাইজার, ড্রডাউন ক্যালকুলেটর, মার্জিন ট্র্যাকার"
                : "Position sizer, drawdown calculator, margin tracker, expectancy calculator",
            href: `/${lang}/tools`,
            color: "#00ff9d",
          },
          {
            icon: BarChart3,
            title: lang === "bn" ? "লাইভ চার্ট ও COT ডেটা" : "Live Charts & COT Data",
            desc:
              lang === "bn"
                ? "TradingView চার্ট, COT পজিশনিং, কারেন্সি স্ট্রেংথ"
                : "TradingView charts, COT positioning data, currency strength meter",
            href: `/${lang}/charts`,
            color: "#38bdf8",
          },
          {
            icon: Brain,
            title: lang === "bn" ? "কোয়ান্ট টুলস" : "Quant Tools",
            desc:
              lang === "bn"
                ? "ইকুইটি কার্ভ সিমুলেটর, রিজিম ডিটেক্টর, কম্পাউন্ডিং"
                : "Equity curve simulator, Monte Carlo, regime detector, compounding",
            href: `/${lang}/tools/equity-simulator`,
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
  );
}
