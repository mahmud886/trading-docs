"use client";

import { useEffect, useRef } from "react";

/** Scroll progress bar. Updates the bar through a ref in an animation frame, so scrolling never re-renders React. */
export function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const el = bar.current;
      if (!el) return;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;
      el.style.transform = `scaleX(${progress})`;
      el.style.boxShadow = progress > 0 ? "0 0 10px var(--accent-green), 0 0 20px var(--glow-color)" : "none";
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] h-0.5 w-full" aria-hidden="true">
      <div
        ref={bar}
        className="h-full origin-left bg-accent-green will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
