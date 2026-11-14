"use client";

import { useEffect, useState } from "react";

export function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/60 backdrop-blur-2xl shadow-[0_1px_20px_rgba(0,0,0,0.1)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {children}
    </header>
  );
}
