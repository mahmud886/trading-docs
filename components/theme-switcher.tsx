"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full p-1.5 text-muted-foreground transition-all hover:bg-accent-green/10 hover:text-accent-green lg:p-2"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={16} className="lg:h-4.5 lg:w-4.5" /> : <Moon size={16} className="lg:h-4.5 lg:w-4.5" />}
    </button>
  );
}
