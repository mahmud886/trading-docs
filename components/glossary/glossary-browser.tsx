"use client";

import { useState, useMemo } from "react";
import { Search, BookOpen } from "lucide-react";
import type { GlossaryTerm } from "@/lib/data/glossary/types";
import { tradingCategories, tradingCategoriesBn, tradingCategoryColors } from "@/lib/data/glossary/trading-categories";

export function GlossaryBrowser({ lang, terms }: { lang: string; terms: GlossaryTerm[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return terms.filter((t) => {
      const matchesSearch =
        search === "" ||
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || t.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [terms, search, activeCategory]);

  const grouped = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filtered.forEach((t) => {
      const letter = t.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(t);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green/10">
          <BookOpen className="h-5 w-5 text-accent-green" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">{lang === "bn" ? "ট্রেডিং শব্দকোষ" : "Trading Glossary"}</h1>
      </div>
      <p className="text-muted-foreground mb-6">
        {lang === "bn"
          ? `সম্পূর্ণ A-Z ট্রেডিং পরিভাষা — ${terms.length}টি শব্দ`
          : `Complete A-Z trading terminology — ${terms.length} terms`}
      </p>

      <div className="relative mb-4">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={lang === "bn" ? "শব্দ খুঁজুন..." : "Search terms..."}
          className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-foreground outline-none placeholder:text-muted-foreground focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/30"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tradingCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium border transition-all ${
              activeCategory === cat
                ? "bg-accent-green/10 text-accent-green border-accent-green/30"
                : "bg-card text-muted-foreground border-border hover:border-accent-green/20 hover:text-foreground"
            }`}
          >
            {lang === "bn" ? tradingCategoriesBn[cat] : cat}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {lang === "bn" ? `${filtered.length}টি ফলাফল দেখাচ্ছে` : `Showing ${filtered.length} results`}
      </p>

      {grouped.length > 1 && (
        <nav
          aria-label="Jump to letter"
          className="sticky top-14 z-20 -mx-2 mb-6 flex flex-wrap gap-1 rounded-xl border border-border bg-background/85 px-2 py-2 backdrop-blur-md xl:top-16"
        >
          {grouped.map(([letter]) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent-green/10 hover:text-accent-green"
            >
              {letter}
            </a>
          ))}
        </nav>
      )}

      {grouped.map(([letter, items]) => (
        <div key={letter} id={`letter-${letter}`} className="mb-8 scroll-mt-36">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10 text-accent-green font-bold text-lg">
              {letter}
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((item) => (
              <div
                key={item.term}
                className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-accent-green/30 hover:shadow-lg hover:shadow-accent-green/5"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-accent-green transition-colors">
                    {item.term}
                  </h3>
                  {item.category && (
                    <span
                      className={`shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${tradingCategoryColors[item.category] || "bg-muted text-muted-foreground border-border"}`}
                    >
                      {item.category}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg text-muted-foreground">
            {lang === "bn" ? "কোনো শব্দ পাওয়া যায়নি।" : "No terms found."}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "bn" ? "অন্য সার্চ টার্ম চেষ্টা করুন" : "Try a different search term"}
          </p>
        </div>
      )}
    </div>
  );
}
