"use client";

import { useEffect } from "react";
import { useLocalPref } from "@/hooks/use-local-pref";
import { DEFAULT_LAYOUT, LAYOUT_STORAGE_KEY, isLayoutId } from "@/lib/themes/layouts";
import { DEFAULT_STYLE_ID, STYLE_STORAGE_KEY, isStyleId } from "@/lib/themes/styles";

/** Keeps <html data-style> and <html data-layout> in step with the saved preferences (also across tabs). */
export function StyleSync() {
  const [style] = useLocalPref(STYLE_STORAGE_KEY, DEFAULT_STYLE_ID, isStyleId);
  const [layout] = useLocalPref(LAYOUT_STORAGE_KEY, DEFAULT_LAYOUT, isLayoutId);

  useEffect(() => {
    const root = document.documentElement;
    if (style === DEFAULT_STYLE_ID) root.removeAttribute("data-style");
    else root.setAttribute("data-style", style);
    if (layout === DEFAULT_LAYOUT) root.removeAttribute("data-layout");
    else root.setAttribute("data-layout", layout);
  }, [style, layout]);

  return null;
}
