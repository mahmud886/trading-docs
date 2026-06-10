"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/toc";
import { cn } from "@/lib/utils";

export function Toc({ items, label }: { items: TocItem[]; label?: string }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -80% 0px" },
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="sticky top-24 w-56">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent-green/70">
        {label || "On this page"}
      </p>
      <ul className="space-y-1.5 border-l border-border">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12 + 12}px` }}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block text-[13px] leading-relaxed transition-all",
                activeId === item.id
                  ? "font-medium text-accent-green shadow-[-1px_0_0_var(--accent-green)]"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
