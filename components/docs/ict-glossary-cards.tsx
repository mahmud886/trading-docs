"use client";

import { useState, useMemo } from "react";
import { Search, BookOpen, Filter } from "lucide-react";
import { usePathname } from "next/navigation";
import type { GlossaryTerm } from "@/lib/data/glossary/types";
import { ictTermsEn } from "@/lib/data/glossary/ict-en";
import { ictTermsBn } from "@/lib/data/glossary/ict-bn";
import {
  ictCategories,
  ictCategoriesBn,
  ictCategoryColors,
  ictCategoryIcons,
} from "@/lib/data/glossary/ict-categories";

export function ICTGlossaryCards() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const pathname = usePathname();
  const lang = pathname?.split("/")[1] || "en";
  const terms = lang === "bn" ? ictTermsBn : ictTermsEn;

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
    <div className="mt-8">
      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: lang === "bn" ? "মোট শব্দ" : "Total Terms", value: terms.length, icon: "📚" },
          { label: lang === "bn" ? "বিভাগ" : "Categories", value: ictCategories.length - 1, icon: "📂" },
          { label: lang === "bn" ? "ফিল্টার ফলাফল" : "Filtered", value: filtered.length, icon: "🔎" },
          { label: lang === "bn" ? "অক্ষর গ্রুপ" : "Letter Groups", value: grouped.length, icon: "🔤" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-3 text-center">
            <div className="text-lg">{stat.icon}</div>
            <div className="text-xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={lang === "bn" ? "শব্দ বা সংজ্ঞা খুঁজুন..." : "Search terms or definitions..."}
          className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-foreground outline-none placeholder:text-muted-foreground focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/30 transition-all"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {ictCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium border transition-all ${
              activeCategory === cat
                ? "bg-accent-green/10 text-accent-green border-accent-green/30 shadow-sm shadow-accent-green/10"
                : "bg-card text-muted-foreground border-border hover:border-accent-green/20 hover:text-foreground"
            }`}
          >
            {cat !== "All" && <span className="mr-1.5">{ictCategoryIcons[cat]}</span>}
            {lang === "bn" ? ictCategoriesBn[cat] : cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="mb-4 flex items-center gap-2">
        <Filter size={14} className="text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          {lang === "bn"
            ? `${filtered.length}টি ফলাফল দেখাচ্ছে`
            : `Showing ${filtered.length} of ${terms.length} terms`}
        </p>
      </div>

      {/* Terms grouped by letter */}
      {grouped.map(([letter, items]) => (
        <div key={letter} className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10 text-accent-green font-bold text-lg">
              {letter}
            </span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">
              {items.length} {lang === "bn" ? "টি" : items.length === 1 ? "term" : "terms"}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((item) => (
              <div
                key={item.term}
                className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-accent-green/30 hover:shadow-lg hover:shadow-accent-green/5"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-accent-green transition-colors text-sm">
                    {item.term}
                  </h3>
                  {item.category && (
                    <span
                      className={`shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                        ictCategoryColors[item.category] || "bg-muted text-muted-foreground border-border"
                      }`}
                    >
                      {ictCategoryIcons[item.category]} {item.category}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-16 text-center rounded-xl border border-border bg-card">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
          <p className="text-lg text-muted-foreground">
            {lang === "bn" ? "কোনো শব্দ পাওয়া যায়নি।" : "No terms found."}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "bn" ? "অন্য সার্চ টার্ম বা বিভাগ চেষ্টা করুন" : "Try a different search term or category"}
          </p>
        </div>
      )}

      {/* Quick Reference */}
      <div className="mt-10 rounded-xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {lang === "bn" ? "📖 দ্রুত রেফারেন্স" : "📖 Quick Reference"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">
              {lang === "bn" ? "মার্কেট স্ট্রাকচার:" : "Market Structure:"}
            </span>
            <span className="text-muted-foreground ml-1">BOS, CHOCH, MSS, Swing High, Swing Low</span>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">{lang === "bn" ? "লিকুইডিটি:" : "Liquidity:"}</span>
            <span className="text-muted-foreground ml-1">BSL, SSL, EQH, EQL, Sweep, Stop Hunt</span>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">{lang === "bn" ? "PD অ্যারে:" : "PD Arrays:"}</span>
            <span className="text-muted-foreground ml-1">OB, FVG, Breaker, Mitigation, IFVG, BPR</span>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">{lang === "bn" ? "জোন:" : "Zones:"}</span>
            <span className="text-muted-foreground ml-1">Premium, Discount, OTE, Equilibrium, CE</span>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">{lang === "bn" ? "টাইম:" : "Time:"}</span>
            <span className="text-muted-foreground ml-1">Kill Zones, Session Liquidity, Judas Swing</span>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">{lang === "bn" ? "মডেল:" : "Models:"}</span>
            <span className="text-muted-foreground ml-1">PO3, CISD, MMBM, MMSM, Silver Bullet</span>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="mt-6 rounded-xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {lang === "bn" ? "🎓 লার্নিং পাথ" : "🎓 Learning Path"}
        </h3>
        <div className="space-y-3">
          {[
            {
              level: lang === "bn" ? "বিগিনার" : "Beginner",
              desc:
                lang === "bn"
                  ? "Foundation, Market Structure, Basic Liquidity দিয়ে শুরু করুন"
                  : "Start with Foundation, Market Structure, Basic Liquidity",
              color: "bg-green-500/10 text-green-400 border-green-500/20",
            },
            {
              level: lang === "bn" ? "ইন্টারমিডিয়েট" : "Intermediate",
              desc:
                lang === "bn"
                  ? "PD Arrays (OB, FVG, Breaker), Premium/Discount, OTE মাস্টার করুন"
                  : "Master PD Arrays (OB, FVG, Breaker), Premium/Discount, OTE",
              color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
            },
            {
              level: lang === "bn" ? "অ্যাডভান্সড" : "Advanced",
              desc:
                lang === "bn"
                  ? "PO3, CISD, SMT, Kill Zones, Session Analysis শিখুন"
                  : "Learn PO3, CISD, SMT, Kill Zones, Session Analysis",
              color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
            },
            {
              level: lang === "bn" ? "প্রফেশনাল" : "Professional",
              desc:
                lang === "bn"
                  ? "IPDA, Market Narrative, Complete Trading System মাস্টার করুন"
                  : "Master IPDA, Market Narrative, Complete Trading System",
              color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
            },
          ].map((path) => (
            <div key={path.level} className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className={`shrink-0 rounded-md border px-2.5 py-1 text-xs font-semibold ${path.color}`}>
                {path.level}
              </span>
              <span className="text-sm text-muted-foreground">{path.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
