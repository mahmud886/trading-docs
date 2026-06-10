"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  FileText,
  ArrowRight,
  X,
  BookOpen,
  TrendingUp,
  BarChart3,
  Clock,
  Sparkles,
  Command,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
  Zap,
} from "lucide-react";

interface SearchResult {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
}

const CATEGORY_CONFIG: Record<string, { icon: typeof FileText; color: string; label: string }> = {
  academy: { icon: BookOpen, color: "text-accent-blue", label: "Academy" },
  "price-action": {
    icon: TrendingUp,
    color: "text-accent-green",
    label: "Price Action",
  },
  smc: { icon: BarChart3, color: "text-accent-purple", label: "SMC" },
  ict: { icon: Zap, color: "text-accent-orange", label: "ICT" },
  "forex-sessions": {
    icon: Clock,
    color: "text-accent-blue",
    label: "Sessions",
  },
  "order-flow": { icon: BarChart3, color: "text-red-400", label: "Order Flow" },
  intermarket: { icon: TrendingUp, color: "text-accent-blue", label: "Intermarket" },
  quantitative: { icon: Zap, color: "text-accent-purple", label: "Quantitative" },
  wyckoff: { icon: BookOpen, color: "text-accent-orange", label: "Wyckoff" },
  "auction-market": { icon: BarChart3, color: "text-accent-green", label: "Auction Market" },
  blog: { icon: FileText, color: "text-muted-foreground", label: "Blog" },
};

function highlightMatch(text: string, query: string) {
  if (!query || query.length < 2) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded-sm bg-accent-green/20 px-0.5 text-accent-green">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setResults([]);
    setActiveIndex(-1);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Search with debounce
  const search = useCallback(async (q: string) => {
    if (q.length < 2) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const lang = window.location.pathname.split("/")[1] || "en";
      const res = await fetch(`/${lang}/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data);
      setActiveIndex(-1);
    } catch {
      setResults([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => search(query), 250);
    return () => clearTimeout(timer);
  }, [query, search]);

  // Keyboard navigation inside results
  function handleKeyNav(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      e.preventDefault();
      router.push(results[activeIndex].slug);
      close();
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-result]");
      items[activeIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  /* ── Trigger button ── */
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="group flex items-center gap-0.5 rounded-full border border-border bg-card p-0.5 text-[8px] text-muted-foreground transition-all duration-300 hover:border-accent-green/40 hover:bg-accent-green/5 hover:shadow-[0_0_20px_rgba(0,255,157,0.06)] xl:gap-2 xl:px-3.5 xl:py-1.5 xl:text-sm"
      >
        <Search
          size={10}
          className="text-accent-green/60 transition-colors group-hover:text-accent-green xl:h-3.5 xl:w-3.5"
        />
        {/*<span className="hidden xl:inline">Search...</span>*/}
        <kbd className="ml-0.5 hidden rounded border border-border bg-muted/60 px-0.5 py-px font-mono text-[7px] text-muted-foreground md:inline xl:ml-1 xl:rounded-md xl:px-1.5 xl:py-0.5 xl:text-[10px]">
          ⌘K
        </kbd>
      </button>
    );
  }

  /* ── Modal ── */
  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-4"
      style={{
        zIndex: 9997,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      onKeyDown={handleKeyNav}
    >
      {/* Clickaway backdrop */}
      <div className="fixed inset-0 -z-10" onClick={close} />

      {/* Search container */}
      <div
        className="relative w-full max-w-3xl animate-fade-in overflow-hidden rounded-2xl border border-border shadow-2xl"
        style={{ backgroundColor: "var(--background)" }}
      >
        {/* Glow accent line at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-green/50 to-transparent" />

        {/* Search input area */}
        <div className="flex items-center gap-3 border-b border-border px-6 py-3">
          <Search
            size={22}
            className={`shrink-0 transition-colors duration-300 ${
              loading ? "animate-pulse text-accent-green" : "text-accent-green/70"
            }`}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent text-lg text-foreground outline-none placeholder:text-muted-foreground/60"
            autoFocus
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setResults([]);
                inputRef.current?.focus();
              }}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={close}
            className="rounded-lg border border-border bg-muted/50 px-2 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
          >
            ESC
          </button>
        </div>

        {/* Results area */}
        <div ref={listRef} className="max-h-[60vh] overflow-y-auto">
          {/* Loading skeleton */}
          {loading && (
            <div className="space-y-1 p-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl p-3">
                  <div className="h-8 w-8 animate-pulse rounded-lg bg-muted" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 animate-pulse rounded-md bg-muted" style={{ width: `${60 + i * 10}%` }} />
                    <div className="h-3 animate-pulse rounded-md bg-muted/60" style={{ width: `${40 + i * 15}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No results */}
          {!loading && query.length >= 2 && results.length === 0 && (
            <div className="flex flex-col items-center gap-3 p-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/50">
                <Search size={20} className="text-muted-foreground/50" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">No results found</p>
                <p className="mt-1 text-xs text-muted-foreground">Try different keywords or check spelling</p>
              </div>
            </div>
          )}

          {/* Results list */}
          {!loading && results.length > 0 && (
            <div className="space-y-2 p-3">
              <div className="mb-1 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
                {results.length} result{results.length !== 1 ? "s" : ""} found
              </div>
              {results.map((result, idx) => {
                const config = CATEGORY_CONFIG[result.category] || {
                  icon: FileText,
                  color: "text-muted-foreground",
                  label: result.category,
                };
                const Icon = config.icon;
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={`${result.category}-${result.slug}`}
                    data-result
                    onClick={() => {
                      router.push(result.slug);
                      close();
                    }}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`group flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition-all duration-150 ${
                      isActive
                        ? "border-accent-green/30 bg-accent-green/8 shadow-sm"
                        : "border-border/50 hover:border-border hover:bg-accent-green/5"
                    }`}
                  >
                    {/* Category icon */}
                    <div
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive ? "bg-accent-green/15 text-accent-green" : "bg-muted/60 text-muted-foreground"
                      }`}
                    >
                      <Icon size={15} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-medium transition-colors ${
                            isActive ? "text-accent-green" : "text-foreground"
                          }`}
                        >
                          {highlightMatch(result.title, query)}
                        </span>
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${config.color} ${
                            isActive ? "bg-accent-green/10" : "bg-muted/60"
                          }`}
                        >
                          {config.label}
                        </span>
                      </div>
                      {result.excerpt && (
                        <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                          {highlightMatch(result.excerpt, query)}
                        </p>
                      )}
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      size={14}
                      className={`mt-2 shrink-0 transition-all duration-200 ${
                        isActive ? "translate-x-0.5 text-accent-green" : "text-muted-foreground/30"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          )}

          {/* Empty state — quick tips */}
          {!loading && query.length < 2 && (
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                <Sparkles size={12} className="text-accent-green/50" />
                Quick Tips
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { label: "Price Action", q: "price action" },
                  { label: "Smart Money", q: "smart money" },
                  { label: "ICT Concepts", q: "ict" },
                  { label: "Candlestick", q: "candlestick" },
                  { label: "Support Resistance", q: "support" },
                  { label: "Order Block", q: "order block" },
                ].map((tip) => (
                  <button
                    key={tip.q}
                    onClick={() => setQuery(tip.q)}
                    className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-left text-xs text-muted-foreground transition-all hover:border-accent-green/30 hover:bg-accent-green/5 hover:text-foreground"
                  >
                    <Search size={11} className="shrink-0 text-accent-green/40" />
                    {tip.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer with keyboard hints */}
        <div className="flex items-center gap-4 border-t border-border px-6 py-3">
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/60">
            <kbd className="flex h-5 w-5 items-center justify-center rounded border border-border bg-muted/50 text-[10px]">
              <ArrowUp size={10} />
            </kbd>
            <kbd className="flex h-5 w-5 items-center justify-center rounded border border-border bg-muted/50 text-[10px]">
              <ArrowDown size={10} />
            </kbd>
            <span>Navigate</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/60">
            <kbd className="flex h-5 items-center justify-center rounded border border-border bg-muted/50 px-1 text-[10px]">
              <CornerDownLeft size={10} />
            </kbd>
            <span>Open</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/60">
            <kbd className="flex h-5 items-center justify-center rounded border border-border bg-muted/50 px-1.5 text-[10px]">
              esc
            </kbd>
            <span>Close</span>
          </div>
          <div className="ml-auto flex items-center gap-1 text-[11px] text-muted-foreground/40">
            <Command size={10} />
            <span>K to search</span>
          </div>
        </div>
      </div>
    </div>
  );
}
