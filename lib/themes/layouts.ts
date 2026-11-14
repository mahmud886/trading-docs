/** Selectable page layouts. A layout changes structure, a style (see styles.ts) changes colour and type. */

export interface LayoutOption {
  id: string;
  name: string;
  description: string;
}

export const HOME_LAYOUTS: LayoutOption[] = [
  { id: "classic", name: "Classic", description: "Hero, category grid, learning paths and tools." },
  { id: "bento", name: "Bento", description: "Featured lesson and course tiles in a grid." },
  { id: "index", name: "Index", description: "Large type with a numbered list of courses." },
  { id: "app", name: "App", description: "Sidebar, resume card and course covers." },
  { id: "immersive", name: "Immersive", description: "Full-width chart hero and a course rail." },
];

export const DEFAULT_HOME_LAYOUT = HOME_LAYOUTS[0].id;
export const HOME_LAYOUT_STORAGE_KEY = "td-home-layout";

export function isHomeLayoutId(value: string | null | undefined): value is string {
  return !!value && HOME_LAYOUTS.some((l) => l.id === value);
}
