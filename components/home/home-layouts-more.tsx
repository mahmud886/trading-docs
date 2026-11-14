import Link from "next/link";
import { Play } from "lucide-react";
import { HOME_COURSES, HOME_LEVEL_LABEL, HOME_TOOLS } from "@/lib/data/home";

const text = {
  en: {
    greeting: "Ready for the next lesson?",
    resume: "Resume lesson",
    resumeKicker: "Continue · Smart Money Concepts",
    resumeTitle: "Order blocks, from zone to trade plan",
    left: "7 min left",
    courses: "All courses",
    sidebar: "Courses",
    tools: "Tools",
    lessons: "lessons",
    kicker: "306 lessons · 22 calculators · EN + BN",
    heroA: "See the move",
    heroB: "before it moves.",
    sub: "Structure, liquidity and risk, taught with charts you can zoom and trades planned to the pip.",
    start: "Start learning",
    rule: "Know where you are wrong. Size from there.",
    note: "All charts are synthetic. Educational content only.",
  },
  bn: {
    greeting: "পরের লেসনের জন্য প্রস্তুত?",
    resume: "লেসন চালিয়ে যান",
    resumeKicker: "চলমান · স্মার্ট মানি কনসেপ্ট",
    resumeTitle: "অর্ডার ব্লক: জোন থেকে ট্রেড প্ল্যান",
    left: "আরও ৭ মিনিট",
    courses: "সব কোর্স",
    sidebar: "কোর্স",
    tools: "টুলস",
    lessons: "লেসন",
    kicker: "৩০৬ লেসন · ২২ ক্যালকুলেটর · EN + BN",
    heroA: "মুভ দেখুন",
    heroB: "মুভ হওয়ার আগেই।",
    sub: "স্ট্রাকচার, লিকুইডিটি ও রিস্ক। জুম করা যায় এমন চার্ট আর পিপ পর্যন্ত প্ল্যান করা ট্রেড দিয়ে শেখানো।",
    start: "শেখা শুরু করুন",
    rule: "কোথায় ভুল তা জানুন। সেখান থেকে সাইজ করুন।",
    note: "সব চার্ট সিন্থেটিক। শুধুমাত্র শিক্ষামূলক কনটেন্ট।",
  },
};

const covers = [
  "from-sky-500 to-cyan-400",
  "from-emerald-500 to-lime-400",
  "from-orange-500 to-pink-500",
  "from-violet-500 to-fuchsia-500",
  "from-amber-500 to-red-500",
  "from-cyan-500 to-blue-500",
  "from-pink-500 to-orange-400",
  "from-teal-500 to-indigo-500",
  "from-lime-500 to-emerald-600",
];

function pick(lang: string) {
  const l = lang === "bn" ? "bn" : "en";
  return { l, t: text[l] } as const;
}

/** App layout: course sidebar, a resume card and covers. Uses style tokens only. */
export function AppHome({ lang }: { lang: string }) {
  const { l, t } = pick(lang);
  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-6 pb-24 pt-10">
      <aside className="hidden w-60 shrink-0 lg:block">
        <div className="sticky top-24 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            {t.sidebar}
          </div>
          {HOME_COURSES.map((c) => (
            <Link
              key={c.slug}
              href={`/${lang}/${c.slug}`}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span>{c[l].title}</span>
              <span className="text-xs">{c.lessons}</span>
            </Link>
          ))}
          <div className="px-3 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            {t.tools}
          </div>
          {HOME_TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${lang}/tools/${tool.slug}`}
              className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {tool[l]}
            </Link>
          ))}
        </div>
      </aside>

      <div className="min-w-0 flex-1 space-y-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t.greeting}</h1>

        <Link
          href={`/${lang}/smc/order-blocks`}
          className="relative block overflow-hidden rounded-3xl bg-gradient-to-br from-accent-green via-accent-green-dim to-accent-purple p-8 sm:p-10"
        >
          <span className="inline-block rounded-full bg-black/25 px-3 py-1 text-xs font-bold text-white">
            {t.resumeKicker}
          </span>
          <span className="mt-16 block max-w-md text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {t.resumeTitle}
          </span>
          <span className="mt-6 flex items-center gap-4">
            <span className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-black">
              <Play size={14} fill="currentColor" /> {t.resume}
            </span>
            <span className="text-sm font-semibold text-white/90">{t.left}</span>
          </span>
        </Link>

        <div>
          <h2 className="mb-4 text-xl font-bold text-foreground">{t.courses}</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {HOME_COURSES.map((c, i) => (
              <Link
                key={c.slug}
                href={`/${lang}/${c.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent-green/50"
              >
                <div className={`h-24 bg-gradient-to-br p-4 ${covers[i % covers.length]}`}>
                  <span className="rounded-full bg-black/30 px-2.5 py-1 text-xs font-bold text-white">
                    {HOME_LEVEL_LABEL[l][c.level]}
                  </span>
                </div>
                <div className="p-4">
                  <div className="font-semibold text-foreground">{c[l].title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {c.lessons} {t.lessons}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">{t.note}</p>
      </div>
    </div>
  );
}

const spark = [
  "M0 100 L60 80 L110 90 L170 50 L230 60 L300 20",
  "M0 90 L70 95 L120 60 L190 70 L250 30 L300 40",
  "M0 80 L50 60 L100 75 L160 40 L220 50 L300 15",
  "M0 100 L80 70 L130 85 L200 45 L260 55 L300 25",
  "M0 70 L60 90 L120 50 L180 70 L240 30 L300 45",
  "M0 95 L55 55 L115 80 L175 35 L235 55 L300 20",
  "M0 85 L65 100 L125 65 L185 75 L245 35 L300 50",
  "M0 90 L60 70 L120 80 L180 40 L240 65 L300 25",
  "M0 75 L55 85 L115 50 L180 60 L240 30 L300 35",
];

/** Immersive layout: a chart behind the hero and a scrolling course rail. Uses style tokens only. */
export function ImmersiveHome({ lang }: { lang: string }) {
  const { l, t } = pick(lang);
  return (
    <div>
      <section className="relative overflow-hidden">
        <svg
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="imm-line" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="var(--accent-green)" stopOpacity="0.08" />
              <stop offset="0.55" stopColor="var(--accent-green)" stopOpacity="0.6" />
              <stop offset="1" stopColor="var(--accent-green)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="imm-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="var(--accent-green)" stopOpacity="0.28" />
              <stop offset="1" stopColor="var(--accent-green)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 430 L120 400 L220 415 L330 360 L430 375 L540 300 L640 325 L760 250 L860 270 L980 190 L1090 210 L1200 140 L1320 160 L1440 100 L1440 520 L0 520Z"
            fill="url(#imm-area)"
          />
          <path
            d="M0 430 L120 400 L220 415 L330 360 L430 375 L540 300 L640 325 L760 250 L860 270 L980 190 L1090 210 L1200 140 L1320 160 L1440 100"
            fill="none"
            stroke="url(#imm-line)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-green">{t.kicker}</p>
          <h1 className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            {t.heroA}
            <br />
            <span className="text-accent-green">{t.heroB}</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">{t.sub}</p>
          <Link
            href={`/${lang}/price-action`}
            className="mt-8 inline-block rounded-full bg-accent-green px-8 py-4 font-bold text-black shadow-[0_0_40px_-8px_var(--accent-green)]"
          >
            {t.start}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <h2 className="mb-5 text-2xl font-bold text-foreground">{t.courses}</h2>
        <div className="-mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-4">
          {HOME_COURSES.map((c, i) => (
            <Link
              key={c.slug}
              href={`/${lang}/${c.slug}`}
              className="relative flex h-80 w-72 shrink-0 snap-start flex-col justify-end overflow-hidden rounded-3xl border border-border bg-card p-6"
            >
              <svg viewBox="0 0 300 120" className="absolute inset-x-0 top-8 w-full" aria-hidden="true">
                <path d={spark[i % spark.length]} fill="none" stroke="var(--accent-green)" strokeWidth="2.5" />
              </svg>
              <div className="relative">
                <div className="font-mono text-xs uppercase tracking-widest text-accent-green">
                  {HOME_LEVEL_LABEL[l][c.level]} · {c.lessons} {t.lessons}
                </div>
                <div className="mt-2 text-2xl font-bold leading-tight text-foreground">{c[l].title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 py-16 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-accent-green/15 to-transparent p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-green">The rule</p>
          <p className="mt-3 text-3xl font-extrabold leading-tight text-foreground">{t.rule}</p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Position size</p>
          <p className="mt-3 font-mono text-5xl text-foreground">0.40 lots</p>
          <p className="mt-2 font-mono text-sm text-muted-foreground">200 / (50 x 10) = 0.40</p>
        </div>
      </section>
      <p className="mx-auto max-w-6xl px-6 pb-8 text-xs text-muted-foreground">{t.note}</p>
    </div>
  );
}
