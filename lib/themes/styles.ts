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
  /** Corner scale for rounded-lg to rounded-3xl. 1 is the default, 0 is square. */
  radius?: number;
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
    radius: 0.25,
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
    radius: 1,
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
    radius: 0,
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
    radius: 1.25,
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
    radius: 0.75,
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
  {
    id: "bento",
    name: "Mint glass",
    description: "Near black with soft glass panels and a mint accent.",
    swatch: ["#06090b", "#00e68a", "#93a79c"],
    light: palette({
      bg: "#f2f7f5",
      fg: "#0b1a14",
      card: "rgba(255,255,255,0.8)",
      border: "#cfe0d8",
      muted: "#e5f0eb",
      mutedFg: "#4d6459",
      accent: "#00a96b",
      accentDim: "#008656",
      rgb: "0, 169, 107",
    }),
    dark: palette({
      bg: "#06090b",
      fg: "#eaf3ee",
      card: "rgba(255,255,255,0.05)",
      border: "rgba(255,255,255,0.1)",
      muted: "rgba(255,255,255,0.06)",
      mutedFg: "#93a79c",
      accent: "#00e68a",
      accentDim: "#00bd70",
      rgb: "0, 230, 138",
    }),
  },
  {
    id: "app",
    name: "Coral app",
    description: "Dark app dashboard feel with a coral accent.",
    swatch: ["#0c0e14", "#ff7a59", "#8a90a8"],
    light: palette({
      bg: "#faf7f5",
      fg: "#1c1713",
      card: "#ffffff",
      border: "#eadfd8",
      muted: "#f3ebe6",
      mutedFg: "#6e625a",
      accent: "#e8552f",
      accentDim: "#c4421f",
      rgb: "232, 85, 47",
    }),
    dark: palette({
      bg: "#0c0e14",
      fg: "#eceef5",
      card: "#151925",
      border: "#222838",
      muted: "#1a1f2e",
      mutedFg: "#8a90a8",
      accent: "#ff7a59",
      accentDim: "#e8613f",
      rgb: "255, 122, 89",
      glowAlpha: 0.08,
    }),
  },
  {
    id: "immersive",
    name: "Immersive",
    description: "Black canvas, glowing green and large type.",
    swatch: ["#050807", "#00e68a", "#9db3a7"],
    light: palette({
      bg: "#f4f8f6",
      fg: "#07120d",
      card: "rgba(255,255,255,0.7)",
      border: "#cadbd2",
      muted: "#e6efea",
      mutedFg: "#4a6257",
      accent: "#00a366",
      accentDim: "#007f4e",
      rgb: "0, 163, 102",
    }),
    dark: palette({
      bg: "#050807",
      fg: "#ecf5f0",
      card: "rgba(255,255,255,0.04)",
      border: "rgba(255,255,255,0.1)",
      muted: "rgba(255,255,255,0.05)",
      mutedFg: "#9db3a7",
      accent: "#00e68a",
      accentDim: "#00bd70",
      rgb: "0, 230, 138",
      glowAlpha: 0.1,
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
      if (s.radius !== undefined && s.radius !== 1) {
        const sizes: Record<string, number> = { sm: 0.25, md: 0.375, lg: 0.5, xl: 0.75, "2xl": 1, "3xl": 1.5 };
        const vars = Object.entries(sizes)
          .map(([k, v]) => `--radius-${k}:${(v * (s.radius as number)).toFixed(3)}rem;`)
          .join("");
        css += `${sel}{${vars}}`;
      }
      if (s.id === "bold") {
        css += `${sel} [class*="border-border"]{border-width:2px}${sel} :is(.glass-card,[class*="bg-card"]){box-shadow:4px 4px 0 var(--foreground)}`;
      }
      if (s.display) css += `${sel} :is(h1,h2,h3){font-family:${s.display};letter-spacing:-0.01em}`;
      return css;
    })
    .join("\n");
}
