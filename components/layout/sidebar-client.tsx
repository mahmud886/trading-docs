"use client";

import { usePathname } from "next/navigation";
import { CATEGORIES, CATEGORY_CONFIG, getCategoryLabel, type Category } from "@/lib/constants";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronsUpDown } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { TreeNode } from "@/lib/content";
import { SidebarNav } from "./sidebar-nav";

interface SidebarClientProps {
  lang: Locale;
  trees: Record<string, TreeNode[]>;
}

function countLeaves(nodes: TreeNode[]): number {
  return nodes.reduce((n, node) => n + (node.children && node.children.length > 0 ? countLeaves(node.children) : 1), 0);
}

export function SidebarClient({ lang, trees }: SidebarClientProps) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const catSegment = segments[2] || "price-action";
  const currentCat = CATEGORIES.includes(catSegment as Category) ? catSegment : "price-action";

  return (
    <div className="flex h-full flex-col">
      {/* Category selector */}
      <div className="border-b border-border/50 p-3">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex w-full items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2.5 text-left text-sm font-medium text-foreground transition-colors hover:border-accent-green/40 data-[state=open]:border-accent-green/50">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: CATEGORY_CONFIG[currentCat as Category].color }}
              />
              <span className="flex-1 truncate">{getCategoryLabel(currentCat as Category, lang)}</span>
              <ChevronsUpDown size={14} className="shrink-0 text-muted-foreground" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="start"
              sideOffset={6}
              className="z-[100] max-h-[70vh] w-64 overflow-y-auto rounded-xl border border-border bg-background p-1.5 shadow-2xl"
            >
              {CATEGORIES.map((cat) => {
                const config = CATEGORY_CONFIG[cat];
                const isActive = currentCat === cat;
                return (
                  <DropdownMenu.Item key={cat} asChild>
                    <Link
                      href={`/${lang}/${cat}`}
                      className={`flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm outline-none transition-colors data-[highlighted]:bg-muted ${
                        isActive ? "font-medium text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: config.color }} />
                      <span className="flex-1">{getCategoryLabel(cat, lang)}</span>
                      {isActive && <Check size={14} className="text-accent-green" />}
                    </Link>
                  </DropdownMenu.Item>
                );
              })}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      {/* Section heading */}
      <div className="flex items-center justify-between px-5 pb-1 pt-4">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {getCategoryLabel(currentCat as Category, lang)}
        </span>
        <span className="text-[11px] text-muted-foreground/70">{countLeaves(trees[currentCat] || [])}</span>
      </div>

      {/* Tree navigation */}
      <div className="sidebar-scroll flex-1 overflow-y-auto pb-6">
        <SidebarNav tree={trees[currentCat] || []} category={currentCat} lang={lang} />
      </div>
    </div>
  );
}
