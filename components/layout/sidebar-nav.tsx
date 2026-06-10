"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { TreeNode } from "@/lib/content";
import { cn } from "@/lib/utils";

interface SidebarNavProps {
  tree: TreeNode[];
  category: string;
  lang: string;
}

export function SidebarNav({ tree, category, lang }: SidebarNavProps) {
  return (
    <nav className="space-y-1 p-4">
      {tree.map((node) => (
        <SidebarItem key={node.slug} node={node} category={category} lang={lang} depth={0} />
      ))}
    </nav>
  );
}

function SidebarItem({
  node,
  category,
  lang,
  depth,
}: {
  node: TreeNode;
  category: string;
  lang: string;
  depth: number;
}) {
  const pathname = usePathname();
  const href = `/${lang}/${category}/${node.slug}`;
  const isActive = pathname === href;
  const hasChildren = node.children && node.children.length > 0;
  const isChildActive = hasChildren && node.children!.some((c) => pathname.includes(c.slug));
  const [expanded, setExpanded] = useState(isActive || isChildActive);

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all",
            isChildActive ? "text-foreground" : "text-muted-foreground hover:bg-accent-green/5 hover:text-foreground",
          )}
          style={{ paddingLeft: `${depth * 12 + 12}px` }}
        >
          {expanded ? (
            <ChevronDown size={14} className="shrink-0 text-accent-green/60" />
          ) : (
            <ChevronRight size={14} className="shrink-0" />
          )}
          <span className="capitalize">{node.title}</span>
        </button>
        {expanded && (
          <div className="mt-0.5">
            {node.children!.map((child) => (
              <SidebarItem key={child.slug} node={child} category={category} lang={lang} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "block rounded-lg px-3 py-2 text-sm capitalize transition-all",
        isActive
          ? "bg-accent-green/10 font-medium text-accent-green shadow-[inset_2px_0_0_var(--accent-green)]"
          : "text-muted-foreground hover:bg-accent-green/5 hover:text-foreground",
      )}
      style={{ paddingLeft: `${depth * 12 + 24}px` }}
    >
      {node.title}
    </Link>
  );
}
