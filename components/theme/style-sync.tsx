"use client";

import { useEffect } from "react";
import { useLocalPref } from "@/hooks/use-local-pref";
import { DEFAULT_STYLE_ID, STYLE_STORAGE_KEY, isStyleId } from "@/lib/themes/styles";

/** Keeps <html data-style> in step with the saved preference (also across tabs). */
export function StyleSync() {
  const [style] = useLocalPref(STYLE_STORAGE_KEY, DEFAULT_STYLE_ID, isStyleId);

  useEffect(() => {
    const root = document.documentElement;
    if (style === DEFAULT_STYLE_ID) root.removeAttribute("data-style");
    else root.setAttribute("data-style", style);
  }, [style]);

  return null;
}
