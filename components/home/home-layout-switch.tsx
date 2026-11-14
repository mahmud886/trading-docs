"use client";

import type { ReactNode } from "react";
import { useLocalPref } from "@/hooks/use-local-pref";
import { DEFAULT_LAYOUT, LAYOUT_STORAGE_KEY, isLayoutId } from "@/lib/themes/layouts";

/** Shows the home layout the visitor picked. The server renders the default layout. */
export function HomeLayoutSwitch({ layouts }: { layouts: Record<string, ReactNode> }) {
  const [layout] = useLocalPref(LAYOUT_STORAGE_KEY, DEFAULT_LAYOUT, isLayoutId);
  return <>{layouts[layout] ?? layouts[DEFAULT_LAYOUT]}</>;
}
