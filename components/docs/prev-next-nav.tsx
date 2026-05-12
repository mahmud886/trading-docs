import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PrevNextNavProps {
  lang: string;
  category: string;
  prev: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}

export function PrevNextNav({ lang, category, prev, next }: PrevNextNavProps) {
  return (
    <div className="mt-16 flex items-stretch gap-4 border-t border-border/50 pt-8">
      {prev ? (
        <Link
          href={`/${lang}/${category}/${prev.slug}`}
          className="card-hover group flex flex-1 flex-col items-start rounded-xl border border-border bg-card/50 p-5 backdrop-blur-xl"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <ChevronLeft size={12} />
            {lang === "bn" ? "আগের" : "Previous"}
          </span>
          <span className="mt-2 text-sm font-medium capitalize text-card-foreground transition-colors group-hover:text-accent-green">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={`/${lang}/${category}/${next.slug}`}
          className="card-hover group flex flex-1 flex-col items-end rounded-xl border border-border bg-card/50 p-5 backdrop-blur-xl"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            {lang === "bn" ? "পরের" : "Next"}
            <ChevronRight size={12} />
          </span>
          <span className="mt-2 text-sm font-medium capitalize text-card-foreground transition-colors group-hover:text-accent-green">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
