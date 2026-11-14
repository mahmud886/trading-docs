"use client";

import type { ReactNode } from "react";
import { useLocalPref } from "@/hooks/use-local-pref";
import { DEFAULT_HOME_LAYOUT, HOME_LAYOUT_STORAGE_KEY, isHomeLayoutId } from "@/lib/themes/layouts";

/** Shows the home layout the visitor picked. The server renders the default layout. */
export function HomeLayoutSwitch({ layouts }: { layouts: Record<string, ReactNode> }) {
  const [layout] = useLocalPref(HOME_LAYOUT_STORAGE_KEY, DEFAULT_HOME_LAYOUT, isHomeLayoutId);
  return <>{layouts[layout] ?? layouts[DEFAULT_HOME_LAYOUT]}</>;
}
