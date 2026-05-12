"use client";

import { usePathname, useRouter } from "next/navigation";
import { type Locale, locales } from "@/lib/i18n";

const labels: Record<Locale, string> = { en: "EN", bn: "বাং" };

export function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border p-0.5 lg:gap-1 lg:p-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`rounded-full px-2 py-0.5 text-[11px] font-medium transition-all lg:px-3 lg:py-1 lg:text-xs ${
            locale === currentLang
              ? "bg-accent-green/10 text-accent-green"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {labels[locale]}
        </button>
      ))}
    </div>
  );
}
