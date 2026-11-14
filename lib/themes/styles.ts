/**
 * Design-token styles ("themes"). Each style overrides the CSS variables that globals.css
 * defines for light and dark mode, so every Tailwind token (bg-background, text-accent-green,
 * border-border, ...) follows the selected style. The first style is the default and has no overrides.
 */

export type TokenName =
  | "background"
  | "foreground"
  | "card"
  | "card-foreground"
  | "border"
  | "muted"
  | "muted-foreground"
  | "accent-green"
  | "accent-green-dim"
  | "accent-blue"
  | "accent-orange"
  | "accent-purple"
  | "code-bg"
  | "sidebar-bg"
  | "nav-bg"
  | "glow-color"
  | "neon-green"
  | "neon-line"
  | "surface-elevated"
  | "ring"
  | "emerald-glow";

export type Palette = Partial<Record<TokenName, string>>;

export interface StyleDefinition {
  id: string;
  name: string;
  description: string;
  /** Three colours shown in the picker. */
  swatch: [string, string, string];
  /** Optional serif/display stack applied to headings. */
  display?: string;
  light: Palette;
  dark: Palette;
}

const SERIF = 'Georgia, "Times New Roman", "Noto Serif Bengali", serif';

interface Seed {
  bg: string;
  fg: string;
  card: string;
  border: string;
  muted: string;
  mutedFg: string;
  accent: string;
  accentDim: string;
  /** rgb triplet of the accent, e.g. "233, 196, 106" */
  rgb: string;
  glowAlpha?: number;
}

function palette(s: Seed): Palette {
  const a = (alpha: number) => `rgba(${s.rgb}, ${alpha})`;
  return {
    background: s.bg,
    foreground: s.fg,
    card: s.card,
    "card-foreground": s.fg,
    border: s.border,
    muted: s.muted,
    "muted-foreground": s.mutedFg,
    "accent-green": s.accent,
    "accent-green-dim": s.accentDim,
    "neon-green": s.accent,
    "neon-line": a(0.3),
    "code-bg": s.muted,
    "sidebar-bg": s.bg,
    "nav-bg": s.bg,
    "surface-elevated": s.card,
    "glow-color": a(s.glowAlpha ?? 0.12),
    "emerald-glow": a(s.glowAlpha ?? 0.12),
    ring: a(0.45),
  };
}

export const STYLES: StyleDefinition[] = [
  {
    id: "neon",
    name: "Neon green",
    description: "The original dark green look.",
    swatch: ["#000000", "#00ff9d", "#9cc4ad"],
    light: {},
    dark: {},
  },
  {
    id: "navy-gold",
    name: "Navy and gold",
    description: "Deep navy with a gold accent and serif headings.",
    swatch: ["#0a1220", "#e9c46a", "#ece7da"],
    display: SERIF,
    light: palette({
      bg: "#f8f4ea",
      fg: "#14203a",
      card: "rgba(255,255,255,0.75)",
      border: "#e3d9bf",
      muted: "#f0e9d6",
      mutedFg: "#5b6478",
      accent: "#b8860b",
      accentDim: "#946b08",
      rgb: "184, 134, 11",
    }),
    dark: palette({
      bg: "#0a1220",
      fg: "#ece7da",
      card: "rgba(23,40,74,0.5)",
      border: "rgba(233,196,106,0.16)",
      muted: "rgba(23,40,74,0.65)",
      mutedFg: "#aeb6c8",
      accent: "#e9c46a",
      accentDim: "#c9a24d",
      rgb: "233, 196, 106",
    }),
  },
  {
    id: "editorial",
    name: "Editorial",
    description: "Warm paper tones, forest green and serif headings.",
    swatch: ["#f5f1e8", "#0b6b46", "#16231c"],
    display: SERIF,
    light: palette({
      bg: "#f5f1e8",
      fg: "#16231c",
      card: "#fffdf8",
      border: "#ddd5c3",
      muted: "#ece6d6",
      mutedFg: "#5d6b63",
      accent: "#0b6b46",
      accentDim: "#085437",
      rgb: "11, 107, 70",
      glowAlpha: 0.06,
    }),
    dark: palette({
      bg: "#101a15",
      fg: "#f1ece0",
      card: "rgba(255,253,248,0.05)",
      border: "rgba(241,236,224,0.14)",
      muted: "rgba(255,253,248,0.07)",
      mutedFg: "#b3bfb7",
      accent: "#4cc38a",
      accentDim: "#36a171",
      rgb: "76, 195, 138",
    }),
  },
  {
    id: "swiss",
    name: "Swiss",
    description: "Black and white with a single red accent.",
    swatch: ["#f4f4f0", "#0a0a0a", "#e5391a"],
    light: palette({
      bg: "#f4f4f0",
      fg: "#0a0a0a",
      card: "#ffffff",
      border: "#c9c9c3",
      muted: "#e9e9e3",
      mutedFg: "#5b5b57",
      accent: "#e5391a",
      accentDim: "#bf2c12",
      rgb: "229, 57, 26",
      glowAlpha: 0.04,
    }),
    dark: palette({
      bg: "#0a0a0a",
      fg: "#f4f4f0",
      card: "rgba(255,255,255,0.04)",
      border: "rgba(255,255,255,0.16)",
      muted: "rgba(255,255,255,0.06)",
      mutedFg: "#a8a8a2",
      accent: "#ff5a3c",
      accentDim: "#e0452a",
      rgb: "255, 90, 60",
      glowAlpha: 0.05,
    }),
  },
  {
    id: "saas",
    name: "Indigo",
    description: "Clean white surfaces with an indigo accent.",
    swatch: ["#fbfbfe", "#5b50ff", "#14142b"],
    light: palette({
      bg: "#fbfbfe",
      fg: "#14142b",
      card: "#ffffff",
      border: "#e3e3f0",
      muted: "#f0f0fa",
      mutedFg: "#5f5f7a",
      accent: "#5b50ff",
      accentDim: "#4338d6",
      rgb: "91, 80, 255",
      glowAlpha: 0.08,
    }),
    dark: palette({
      bg: "#0d0d1f",
      fg: "#ecebff",
      card: "rgba(255,255,255,0.05)",
      border: "rgba(160,150,255,0.18)",
      muted: "rgba(255,255,255,0.07)",
      mutedFg: "#a5a3c9",
      accent: "#8b7dff",
      accentDim: "#6f60f0",
      rgb: "139, 125, 255",
    }),
  },
  {
    id: "bold",
    name: "Bold",
    description: "Cream paper, thick outlines and a yellow accent.",
    swatch: ["#fff7e0", "#111111", "#ffe14d"],
    light: palette({
      bg: "#fff7e0",
      fg: "#111111",
      card: "#ffffff",
      border: "#111111",
      muted: "#ffefb8",
      mutedFg: "#4a4a40",
      accent: "#00a876",
      accentDim: "#008560",
      rgb: "0, 168, 118",
      glowAlpha: 0.04,
    }),
    dark: palette({
      bg: "#111111",
      fg: "#fff7e0",
      card: "#1b1b1b",
      border: "#fff7e0",
      muted: "#222222",
      mutedFg: "#c9c3ad",
      accent: "#ffe14d",
      accentDim: "#e6c82e",
      rgb: "255, 225, 77",
      glowAlpha: 0.05,
    }),
  },
];

export const DEFAULT_STYLE_ID = STYLES[0].id;
export const STYLE_STORAGE_KEY = "td-style";

export function isStyleId(value: string | null | undefined): value is string {
  return !!value && STYLES.some((s) => s.id === value);
}

function declarations(p: Palette): string {
  return Object.entries(p)
    .map(([k, v]) => `--${k}:${v};`)
    .join("");
}

/** CSS for every non-default style. Light overrides `html[data-style]`, dark overrides `html.dark[data-style]`. */
export function buildStyleCss(): string {
  return STYLES.filter((s) => Object.keys(s.light).length > 0)
    .map((s) => {
      const sel = `html[data-style="${s.id}"]`;
      let css = `${sel}{${declarations(s.light)}}${sel}.dark{${declarations(s.dark)}}`;
      if (s.display) css += `${sel} :is(h1,h2,h3){font-family:${s.display};letter-spacing:-0.01em}`;
      return css;
    })
    .join("\n");
}
