/**
 * Site layouts. A layout changes the structure of the whole site (navigation, sidebar, page frame, home page);
 * a style (see styles.ts) changes colour, type and corners. The layout id is mirrored to <html data-layout>,
 * and app/layouts.css positions the shell from that attribute.
 */

export interface LayoutOption {
  id: string;
  name: string;
  description: string;
}

export const SITE_LAYOUTS: LayoutOption[] = [
  { id: "classic", name: "Classic", description: "Top bar, left sidebar, centred content." },
  { id: "app", name: "App", description: "Left navigation rail, resume card and course covers." },
  { id: "index", name: "Index", description: "Ruled top bar, sidebar on the right, large type." },
  { id: "immersive", name: "Immersive", description: "Floating pill bar, roomy pages and a chart hero." },
  { id: "bento", name: "Bento", description: "Floating bar and content in rounded panels." },
];

export const DEFAULT_LAYOUT = SITE_LAYOUTS[0].id;
export const LAYOUT_STORAGE_KEY = "td-layout";

export function isLayoutId(value: string | null | undefined): value is string {
  return !!value && SITE_LAYOUTS.some((l) => l.id === value);
}

/** One click sets a style and a layout together. */
export interface Preset {
  id: string;
  name: string;
  style: string;
  layout: string;
}

export const PRESETS: Preset[] = [
  { id: "original", name: "Original", style: "neon", layout: "classic" },
  { id: "editorial", name: "Editorial", style: "editorial", layout: "index" },
  { id: "swiss", name: "Swiss", style: "swiss", layout: "index" },
  { id: "app", name: "App", style: "app", layout: "app" },
  { id: "bento", name: "Bento", style: "bento", layout: "bento" },
  { id: "immersive", name: "Immersive", style: "immersive", layout: "immersive" },
  { id: "indigo", name: "Indigo", style: "saas", layout: "classic" },
  { id: "bold", name: "Bold", style: "bold", layout: "bento" },
  { id: "luxe", name: "Navy and gold", style: "navy-gold", layout: "immersive" },
];
