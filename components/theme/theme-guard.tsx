"use client";

import { useLayoutEffect } from "react";

/**
 * Switching language re-renders the root layout, and React resets the <html> class and style that next-themes
 * set. That removed the "dark" class for a frame and made the page flash. This puts the saved theme back
 * before the browser paints (layout effects run before paint), on every commit.
 */
export function ThemeGuard() {
  useLayoutEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem("theme");
    } catch {
      stored = null;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : stored === "system"
          ? prefersDark
            ? "dark"
            : "light"
          : "dark";
    const root = document.documentElement;
    if (root.classList.contains("dark") !== (theme === "dark")) root.classList.toggle("dark", theme === "dark");
    if (root.style.colorScheme !== theme) root.style.colorScheme = theme;
  });
  return null;
}
