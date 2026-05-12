import { getSidebarTree } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { CATEGORIES } from "@/lib/constants";
import { SidebarClient } from "./sidebar-client";
import type { TreeNode } from "@/lib/content";

export async function Sidebar({ lang }: { lang: Locale }) {
  const trees: Record<string, TreeNode[]> = {};
  for (const cat of CATEGORIES) {
    trees[cat] = getSidebarTree(lang, cat);
  }

  return <SidebarClient lang={lang} trees={trees} />;
}
