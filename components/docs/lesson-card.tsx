import Link from "next/link";
import { BookOpen, Clock } from "lucide-react";
import type { DocMeta } from "@/lib/content";

interface LessonCardProps {
  meta: DocMeta;
  lang: string;
  category: string;
  levelLabel?: string;
}

const levelColors = {
  beginner:
    "bg-accent-green/10 text-accent-green border-accent-green/20",
  intermediate:
    "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  advanced:
    "bg-accent-orange/10 text-accent-orange border-accent-orange/20",
  expert:
    "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
};

export function LessonCard({ meta, lang, category, levelLabel }: LessonCardProps) {
  return (
    <Link
      href={`/${lang}/${category}/${meta.slug}`}
      className="card-hover group rounded-xl border border-border bg-card p-5 backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-medium capitalize text-card-foreground transition-colors group-hover:text-accent-green">
            {meta.title}
          </h3>
          {meta.description && (
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {meta.description}
            </p>
          )}
        </div>
        <BookOpen size={16} className="mt-1 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-accent-green/50" />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span
          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium capitalize ${
            levelColors[meta.level] || levelColors.beginner
          }`}
        >
          {levelLabel || meta.level}
        </span>
        {meta.readingTime && (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock size={10} />
            {meta.readingTime} {lang === "bn" ? "মিনিট" : "min"}
          </span>
        )}
      </div>
    </Link>
  );
}
