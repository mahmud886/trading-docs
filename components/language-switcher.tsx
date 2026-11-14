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
    <div className="flex items-center gap-0 rounded-full border border-border p-0.5 xl:gap-1 xl:p-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-all xl:px-3 xl:py-1 xl:text-xs ${
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
