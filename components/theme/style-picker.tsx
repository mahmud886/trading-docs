"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, Palette } from "lucide-react";
import { useLocalPref } from "@/hooks/use-local-pref";
import { DEFAULT_LAYOUT, LAYOUT_STORAGE_KEY, PRESETS, SITE_LAYOUTS, isLayoutId } from "@/lib/themes/layouts";
import { DEFAULT_STYLE_ID, STYLES, STYLE_STORAGE_KEY, isStyleId } from "@/lib/themes/styles";

const copy = {
  en: { title: "Appearance", style: "Style", presets: "Presets", layout: "Layout", open: "Change style and layout" },
  bn: { title: "চেহারা", style: "স্টাইল", presets: "প্রিসেট", layout: "লেআউট", open: "স্টাইল ও লেআউট বদলান" },
};

export function StylePicker({ lang }: { lang: string }) {
  const t = lang === "bn" ? copy.bn : copy.en;
  const [style, setStyle] = useLocalPref(STYLE_STORAGE_KEY, DEFAULT_STYLE_ID, isStyleId);
  const [layout, setLayout] = useLocalPref(LAYOUT_STORAGE_KEY, DEFAULT_LAYOUT, isLayoutId);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label={t.open}
          className="rounded-full p-0.5 text-muted-foreground transition-all hover:bg-accent-green/10 hover:text-accent-green xl:p-2"
        >
          <Palette size={12} className="xl:h-[18px] xl:w-[18px]" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-[100] w-72 rounded-xl border border-border bg-background p-2 shadow-2xl"
        >
          <DropdownMenu.Label className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {t.presets}
          </DropdownMenu.Label>
          <div className="grid grid-cols-3 gap-1.5 px-1 pb-1">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setStyle(p.style);
                  setLayout(p.layout);
                }}
                className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors ${
                  style === p.style && layout === p.layout
                    ? "border-accent-green bg-accent-green/10 text-accent-green"
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <DropdownMenu.Separator className="my-2 h-px bg-border" />
          <DropdownMenu.Label className="px-2 pb-1 pt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {t.style}
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={style} onValueChange={setStyle}>
            {STYLES.map((s) => (
              <DropdownMenu.RadioItem
                key={s.id}
                value={s.id}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm text-foreground outline-none data-[highlighted]:bg-muted"
              >
                <span className="flex shrink-0 overflow-hidden rounded-md border border-border">
                  {s.swatch.map((c) => (
                    <span key={c} className="h-6 w-3" style={{ background: c }} />
                  ))}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{s.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{s.description}</span>
                </span>
                <DropdownMenu.ItemIndicator>
                  <Check size={16} className="text-accent-green" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Separator className="my-2 h-px bg-border" />

          <DropdownMenu.Label className="px-2 pb-1 pt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {t.layout}
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={layout} onValueChange={setLayout}>
            {SITE_LAYOUTS.map((l) => (
              <DropdownMenu.RadioItem
                key={l.id}
                value={l.id}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm text-foreground outline-none data-[highlighted]:bg-muted"
              >
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{l.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{l.description}</span>
                </span>
                <DropdownMenu.ItemIndicator>
                  <Check size={16} className="text-accent-green" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
