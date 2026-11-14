import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_COURSES, HOME_LEVEL_LABEL, HOME_TOOLS } from "@/lib/data/home";

const text = {
  en: {
    kicker: "306 lessons · 22 calculators · English and Bangla",
    title: "Plan the trade, then take it",
    sub: "Structure, liquidity and risk, with every example showing entry, stop, target and size.",
    start: "Start learning",
    tools: "Open tools",
    courses: "Courses",
    toolsTitle: "Calculators",
    lessons: "lessons",
    rule: "Decide where you are wrong, then size the trade from there.",
    note: "All charts are synthetic. Educational content only.",
  },
  bn: {
    kicker: "৩০৬টি লেসন · ২২টি ক্যালকুলেটর · ইংরেজি ও বাংলা",
    title: "আগে ট্রেড প্ল্যান করুন, তারপর নিন",
    sub: "স্ট্রাকচার, লিকুইডিটি ও রিস্ক। প্রতিটি উদাহরণে এন্ট্রি, স্টপ, টার্গেট ও সাইজ দেখানো আছে।",
    start: "শেখা শুরু করুন",
    tools: "টুলস খুলুন",
    courses: "কোর্স",
    toolsTitle: "ক্যালকুলেটর",
    lessons: "লেসন",
    rule: "কোথায় ভুল প্রমাণিত হবেন আগে ঠিক করুন, তারপর সেখান থেকে সাইজ করুন।",
    note: "সব চার্ট সিন্থেটিক। শুধুমাত্র শিক্ষামূলক কনটেন্ট।",
  },
};

function pick(lang: string) {
  const l = lang === "bn" ? "bn" : "en";
  return { l, t: text[l] } as const;
}

/** Bento layout: featured tile, stat tiles and one tile per course. Uses style tokens only. */
export function BentoHome({ lang }: { lang: string }) {
  const { l, t } = pick(lang);
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-accent-green">{t.kicker}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">{t.sub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={`/${lang}/price-action`}
            className="rounded-xl bg-accent-green px-6 py-3 font-semibold text-black"
          >
            {t.start}
          </Link>
          <Link
            href={`/${lang}/tools`}
            className="rounded-xl border border-border bg-card px-6 py-3 font-semibold text-foreground"
          >
            {t.tools}
          </Link>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-4">
        <Link
          href={`/${lang}/smc/order-blocks`}
          className="flex flex-col justify-between rounded-3xl border border-border bg-card p-7 md:col-span-3 md:row-span-2"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">SMC</span>
          <span className="mt-16 block text-3xl font-bold text-foreground sm:text-4xl">Order blocks</span>
          <span className="mt-2 flex items-center gap-2 text-muted-foreground">
            {t.rule} <ArrowRight size={16} />
          </span>
        </Link>
        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="text-4xl font-bold text-foreground">306</div>
          <div className="text-sm text-muted-foreground">{t.lessons}</div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="text-4xl font-bold text-foreground">22</div>
          <div className="text-sm text-muted-foreground">{t.toolsTitle}</div>
        </div>
        {HOME_COURSES.map((c) => (
          <Link
            key={c.slug}
            href={`/${lang}/${c.slug}`}
            className="flex min-h-36 flex-col justify-between rounded-3xl border border-border bg-card p-5 transition-colors hover:border-accent-green/50"
          >
            <span className="text-xs text-muted-foreground">
              {c.lessons} {t.lessons}
            </span>
            <span>
              <span className="block text-lg font-semibold text-foreground">{c[l].title}</span>
              <span className="block text-sm text-muted-foreground">{HOME_LEVEL_LABEL[l][c.level]}</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <span className="text-sm text-muted-foreground">{t.toolsTitle}</span>
        {HOME_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${lang}/tools/${tool.slug}`}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground hover:border-accent-green/50"
          >
            {tool[l]}
          </Link>
        ))}
      </div>
      <p className="mt-12 text-xs text-muted-foreground">{t.note}</p>
    </div>
  );
}

/** Index layout: large type and a numbered course list. Uses style tokens only. */
export function IndexHome({ lang }: { lang: string }) {
  const { l, t } = pick(lang);
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-green">{t.kicker}</p>
      <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
        {t.title}
        <span className="text-accent-green">.</span>
      </h1>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <p className="max-w-lg text-lg text-muted-foreground">{t.sub}</p>
        <div className="flex gap-3">
          <Link href={`/${lang}/price-action`} className="bg-foreground px-6 py-3 font-semibold text-background">
            {t.start}
          </Link>
          <Link href={`/${lang}/tools`} className="border border-foreground px-6 py-3 font-semibold text-foreground">
            {t.tools}
          </Link>
        </div>
      </div>

      <div className="mt-16 border-t-2 border-foreground">
        {HOME_COURSES.map((c, i) => (
          <Link
            key={c.slug}
            href={`/${lang}/${c.slug}`}
            className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-border py-5 transition-colors hover:bg-muted/50 md:grid-cols-[3rem_1.2fr_1.5fr_6rem_7rem]"
          >
            <span className="font-mono text-sm text-accent-green">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{c[l].title}</span>
            <span className="hidden text-muted-foreground md:block">{c[l].desc}</span>
            <span className="hidden text-sm font-medium text-foreground md:block">{HOME_LEVEL_LABEL[l][c.level]}</span>
            <span className="text-right font-mono text-sm text-muted-foreground">
              {c.lessons} {t.lessons}
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-12 text-xs text-muted-foreground">{t.note}</p>
    </div>
  );
}
