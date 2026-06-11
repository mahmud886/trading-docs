"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarDrawerProps {
  children: React.ReactNode;
}

export function SidebarDrawer({ children }: SidebarDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change (mobile navigation)
  useEffect(() => {
    setIsOpen(false); // eslint-disable-line react-hooks/set-state-in-effect -- intentional: close drawer on navigation
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close on Escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      {/* Toggle Button — half-circle on the left edge, only visible on mobile/tablet */}
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        className="fixed left-0 top-1/2 z-50 flex h-10 w-5 -translate-y-1/2 items-center justify-center rounded-r-full border border-l-0 border-border bg-card/90 backdrop-blur-md shadow-lg transition-all hover:w-6 hover:bg-accent-green/10 hover:border-accent-green/30 lg:hidden"
      >
        {isOpen ? (
          <ChevronLeft size={14} className="text-accent-green" />
        ) : (
          <ChevronRight size={14} className="text-accent-green" />
        )}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding sidebar panel */}
      <aside
        className={`fixed left-0 top-0 z-40 h-full w-64 shrink-0 overflow-y-auto border-r border-border/30 bg-background transition-transform duration-300 ease-in-out lg:hidden sidebar-drawer-mobile ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {children}
      </aside>
    </>
  );
}
