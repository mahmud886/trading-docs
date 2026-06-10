"use client";

import { usePathname } from "next/navigation";
import { CATEGORIES, CATEGORY_CONFIG, getCategoryLabel, type Category } from "@/lib/constants";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { TreeNode } from "@/lib/content";
import { SidebarNav } from "./sidebar-nav";

interface SidebarClientProps {
  lang: Locale;
  trees: Record<string, TreeNode[]>;
}

export function SidebarClient({ lang, trees }: SidebarClientProps) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const catSegment = segments[2] || "price-action";
  const currentCat = CATEGORIES.includes(catSegment as Category) ? catSegment : "price-action";

  return (
    <div className="flex h-full flex-col">
      {/* Category selector */}
      <div className="border-b border-border/50 p-4">
        <div className="flex flex-wrap gap-1">
          {CATEGORIES.map((cat) => {
            const config = CATEGORY_CONFIG[cat];
            const isActive = currentCat === cat;
            return (
              <Link
                key={cat}
                href={`/${lang}/${cat}`}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                  isActive ? "shadow-sm" : "text-muted-foreground hover:bg-accent-green/5 hover:text-foreground"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: `${config.color}15`,
                        color: config.color,
                        boxShadow: `0 0 10px ${config.color}10`,
                      }
                    : {}
                }
              >
                {getCategoryLabel(cat, lang)}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Tree navigation */}
      <div className="flex-1 overflow-y-auto">
        <SidebarNav tree={trees[currentCat] || []} category={currentCat} lang={lang} />
      </div>
    </div>
  );
}
