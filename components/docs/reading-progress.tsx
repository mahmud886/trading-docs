"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-0.5 w-full">
      <div
        className="h-full bg-accent-green transition-[width] duration-150"
        style={{
          width: `${progress}%`,
          boxShadow:
            progress > 0
              ? "0 0 10px var(--accent-green), 0 0 20px var(--glow-color)"
              : "none",
        }}
      />
    </div>
  );
}
