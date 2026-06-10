import type { MDXComponents } from "mdx/types";
import { CopyButton } from "./copy-button";
import { Callout } from "./callout";
import { ICTGlossaryCards } from "./ict-glossary-cards";
import { SessionTimeline } from "@/components/trading/session-timeline";
import { WorldMarketClock } from "@/components/trading/world-market-clock";
import { SessionCardsGrid } from "@/components/trading/session-card";
import { SessionHeatmap } from "@/components/trading/session-heatmap";

// Create a factory function to generate components with fresh ID tracking
export function createMdxComponents(): MDXComponents {
  const headingIdMap = new Map<string, number>();

  function generateHeadingId(text: string | undefined): string | undefined {
    if (typeof text !== "string") return undefined;

    let id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/^-+/, "") // Remove leading dashes
      .replace(/-+$/, "") // Remove trailing dashes
      .replace(/-+/g, "-"); // Replace multiple dashes with single dash

    if (!id) return undefined;

    // Ensure uniqueness
    const baseId = id;
    const count = headingIdMap.get(baseId) ?? 0;
    if (count > 0) {
      id = `${baseId}-${count}`;
    }
    headingIdMap.set(baseId, count + 1);

    return id;
  }

  return {
    h1: (props) => (
      <h1 className="mt-10 text-3xl font-bold tracking-tight text-foreground" {...props} />
    ),
    h2: (props) => {
    const id = generateHeadingId(
      typeof props.children === "string" ? props.children : undefined
    );
    return (
      <h2
        id={id}
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold text-foreground"
        {...props}
      />
    );
  },
  h3: (props) => {
    const id = generateHeadingId(
      typeof props.children === "string" ? props.children : undefined
    );
    return (
      <h3 id={id} className="mt-8 scroll-mt-20 text-xl font-semibold text-foreground" {...props} />
    );
  },
  h4: (props) => {
    const id = generateHeadingId(
      typeof props.children === "string" ? props.children : undefined
    );
    return (
      <h4 id={id} className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground" {...props} />
    );
  },
    p: (props) => <p className="mt-4 leading-7 text-card-foreground" {...props} />,
    ul: (props) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-card-foreground marker:text-accent-green/40" {...props} />
    ),
    ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-card-foreground" {...props} />,
  li: (props) => <li className="leading-7" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-accent-blue underline decoration-accent-blue/30 underline-offset-4 transition-colors hover:decoration-accent-blue/60"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
    em: (props) => <em className="text-foreground/90" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-4 border-l-2 border-accent-orange/50 pl-4 italic text-muted-foreground" {...props} />
  ),
    hr: () => <hr className="my-8 border-border/50" />,
  pre: (props) => (
    <div className="group relative mt-4">
      <CopyButton />
      <pre className="overflow-x-auto rounded-xl border border-border bg-[var(--code-bg)] p-4 text-sm leading-relaxed" {...props} />
    </div>
  ),
  code: (props) => {
    const isInline = typeof props.children === "string";
    if (isInline) {
      return (
        <code className="rounded-md bg-muted px-1.5 py-0.5 text-sm font-mono text-accent-green" {...props} />
      );
    }
    return <code {...props} />;
  },
  table: (props) => (
    <div className="mt-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-muted/50" {...props} />,
  th: (props) => (
    <th className="border-b border-border px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-foreground/80" {...props} />
  ),
  td: (props) => (
    <td className="border-b border-border/50 px-4 py-3 text-muted-foreground" {...props} />
  ),
  tr: (props) => <tr className="transition-colors hover:bg-muted/30" {...props} />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="mt-6 rounded-xl border border-border" alt="" loading="lazy" {...props} />
    ),
    Callout,
    ICTGlossaryCards,
    SessionTimeline,
    WorldMarketClock,
    SessionCardsGrid,
    SessionHeatmap,
  };
}

// Default export for backward compatibility
export const mdxComponents = createMdxComponents();
