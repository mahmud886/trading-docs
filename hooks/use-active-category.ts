"use client";

import { usePathname } from "next/navigation";
import { CATEGORIES, type Category } from "@/lib/constants";

export function useActiveCategory(): Category | undefined {
  const pathname = usePathname();
  const segments = pathname.split("/");
  // URL structure: /[lang]/[category]/...
  const catSegment = segments[2];
  if (catSegment && CATEGORIES.includes(catSegment as Category)) {
    return catSegment as Category;
  }
  return undefined;
}

