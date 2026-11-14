"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize, Maximize2, Minus, Plus, RotateCcw, X } from "lucide-react";

const MIN_SCALE = 1;
const MAX_SCALE = 6;

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

/** A lesson image that opens in a full-screen viewer: wheel / pinch / buttons to zoom, drag to pan, Esc to close. */
export function ZoomImage({ themeClass = "", className = "", ...img }: ImgProps & { themeClass?: string }) {
  const [open, setOpen] = useState(false);
  const label = typeof img.alt === "string" && img.alt ? img.alt : "Chart";

  return (
    <div className={`${themeClass} group relative mt-6`}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label={`Open full screen: ${label}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" loading="lazy" {...img} className={`w-full rounded-xl border border-border ${className}`} />
      </button>
      <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-lg border border-border bg-background/80 px-2 py-1 text-xs text-muted-foreground opacity-70 backdrop-blur transition-opacity group-hover:opacity-100">
        <Maximize2 size={13} aria-hidden />
        Zoom
      </span>
      {open && <Viewer src={String(img.src)} alt={label} onClose={() => setOpen(false)} />}
    </div>
  );
}

function Viewer({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const [view, setView] = useState({ s: 1, x: 0, y: 0 });
  const stage = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ dist: number; s: number } | null>(null);

  // Zoom to `next`, keeping the point (cx, cy) — measured from the stage centre — fixed on screen.
  const zoomAt = useCallback((next: number, cx = 0, cy = 0) => {
    setView((v) => {
      const s = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
      if (s === MIN_SCALE) return { s, x: 0, y: 0 };
      const k = s / v.s;
      return { s, x: cx - (cx - v.x) * k, y: cy - (cy - v.y) * k };
    });
  }, []);

  const centre = useCallback((clientX: number, clientY: number) => {
    const r = stage.current?.getBoundingClientRect();
    return r ? { cx: clientX - (r.left + r.width / 2), cy: clientY - (r.top + r.height / 2) } : { cx: 0, cy: 0 };
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "+" || e.key === "=") setView((v) => ({ ...v, s: Math.min(MAX_SCALE, v.s * 1.4) }));
      else if (e.key === "-") zoomAt(view.s / 1.4);
      else if (e.key === "0") setView({ s: 1, x: 0, y: 0 });
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, zoomAt, view.s]);

  // React's onWheel is passive; attach a non-passive listener so the page behind doesn't scroll.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const { cx, cy } = centre(e.clientX, e.clientY);
      zoomAt(view.s * Math.exp(-e.deltaY * 0.002), cx, cy);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [centre, zoomAt, view.s]);

  function onPointerDown(e: React.PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = { dist: Math.hypot(a.x - b.x, a.y - b.y), s: view.s };
    }
  }

  function onPointerMove(e: React.PointerEvent) {
    const last = pointers.current.get(e.pointerId);
    if (!last) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const mid = centre((a.x + b.x) / 2, (a.y + b.y) / 2);
      zoomAt((pinch.current.s * Math.hypot(a.x - b.x, a.y - b.y)) / pinch.current.dist, mid.cx, mid.cy);
    } else if (pointers.current.size === 1 && view.s > 1) {
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      setView((v) => ({ ...v, x: v.x + dx, y: v.y + dy }));
    }
  }

  function onPointerUp(e: React.PointerEvent) {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
  }

  function onDoubleClick(e: React.MouseEvent) {
    const { cx, cy } = centre(e.clientX, e.clientY);
    if (view.s > 1) setView({ s: 1, x: 0, y: 0 });
    else zoomAt(2.5, cx, cy);
  }

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-black/60 text-white transition-colors hover:bg-black/80";

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-black/90" role="dialog" aria-modal="true" aria-label={alt}>
      <div
        ref={stage}
        className="absolute inset-0 flex touch-none select-none items-center justify-center overflow-hidden"
        style={{ cursor: view.s > 1 ? "grab" : "zoom-in" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={onDoubleClick}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-h-[92vh] max-w-[96vw] rounded-lg bg-white/0 object-contain"
          style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.s})`, transformOrigin: "center" }}
        />
      </div>
      <div className="absolute right-4 top-4 flex gap-2">
        <button type="button" className={btn} aria-label="Zoom out" onClick={() => zoomAt(view.s / 1.5)}>
          <Minus size={18} />
        </button>
        <button type="button" className={btn} aria-label="Zoom in" onClick={() => zoomAt(view.s * 1.5)}>
          <Plus size={18} />
        </button>
        <button type="button" className={btn} aria-label="Reset zoom" onClick={() => setView({ s: 1, x: 0, y: 0 })}>
          <RotateCcw size={18} />
        </button>
        <button type="button" className={btn} aria-label="Close" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black/60 px-3 py-1.5 text-xs text-white/80">
        Scroll or pinch to zoom · drag to move · double-click to toggle · Esc to close
      </p>
    </div>,
    document.body,
  );
}

type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;
type FullscreenVideoEl = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

/** A lesson video with an explicit full-screen button (iOS Safari falls back to its native player). */
export function FullscreenVideo({ themeClass = "", className = "", ...video }: VideoProps & { themeClass?: string }) {
  const ref = useRef<FullscreenVideoEl>(null);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else if (v.requestFullscreen) void v.requestFullscreen();
    else v.webkitEnterFullscreen?.();
  }

  return (
    <div className={`${themeClass} group relative mt-6`}>
      <video ref={ref} {...video} className={className.replace(/\bmt-6\b/, "").trim()} />
      <button
        type="button"
        onClick={toggle}
        aria-label="Full screen video"
        className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg border border-border bg-background/80 px-2 py-1 text-xs text-muted-foreground opacity-70 backdrop-blur transition-opacity hover:text-foreground group-hover:opacity-100"
      >
        <Maximize size={13} aria-hidden />
        Full screen
      </button>
    </div>
  );
}
