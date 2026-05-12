"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { MobileMenuContent } from "./mobile-menu-content";

/* ── shared state via context ── */
const MobileMenuCtx = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
}>({ open: false, setOpen: () => {} });

export function MobileMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <MobileMenuCtx.Provider value={{ open, setOpen }}>
      {children}
    </MobileMenuCtx.Provider>
  );
}

/** Small hamburger / X button — goes inside the navbar */
export function MobileMenuTrigger() {
  const { open, setOpen } = useContext(MobileMenuCtx);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="rounded-lg p-1.5 text-muted-foreground transition-all hover:bg-accent-green/10 hover:text-accent-green lg:hidden"
      aria-label="Toggle menu"
    >
      {open ? <X size={18} /> : <Menu size={18} />}
    </button>
  );
}

/** Full-screen overlay + slide-in panel — rendered OUTSIDE the navbar */
export function MobileMenuPanel({
  lang,
  links,
}: {
  lang: Locale;
  links: { href: string; label: string }[];
}) {
  const { open, setOpen } = useContext(MobileMenuCtx);

  if (!open) return null;

  return (
    <div className="lg:hidden">
      {/* Full-screen dark backdrop */}
      <div
        className="fixed inset-0"
        style={{ zIndex: 9998, backgroundColor: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
        onClick={() => setOpen(false)}
      />
      {/* Slide-in menu panel */}
      <div
        className="fixed inset-y-0 right-0 w-72 border-l border-border p-6 shadow-2xl"
        style={{ zIndex: 9998, backgroundColor: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">
            {lang === "bn" ? "মেনু" : "Menu"}
          </span>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-1 text-muted-foreground hover:text-accent-green"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          <MobileMenuContent
            lang={lang}
            links={links}
            onClose={() => setOpen(false)}
          />
        </nav>
      </div>
    </div>
  );
}

