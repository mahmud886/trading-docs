import Link from "next/link";
import type { getDictionary } from "@/lib/i18n";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export function LearningPathsSection({ lang, dict }: { lang: string; dict: Dictionary }) {
  return (
    <section className="relative border-t border-border/30">
      <div className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{dict.home.featuredTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{dict.home.featuredSubtitle}</p>
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
              href: `/${lang}/order-flow`,
            },
          ].map((path) => (
            <Link
              key={path.level}
              href={path.href}
              className="card-hover group rounded-2xl border border-border bg-card p-7 backdrop-blur-xl"
            >
              <div className="mb-4 text-5xl font-bold opacity-20" style={{ color: path.color }}>
                {path.level}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{path.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{path.desc}</p>
              <div
                className="mt-4 h-1 w-8 rounded-full opacity-0 transition-all group-hover:w-12 group-hover:opacity-100"
                style={{ backgroundColor: path.color }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
