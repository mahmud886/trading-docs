import Link from "next/link";
import { type Locale, getDictionary } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { SearchModal } from "@/components/search-modal";
import {
  MobileMenuProvider,
  MobileMenuTrigger,
  MobileMenuPanel,
} from "@/components/layout/mobile-menu";
import { NavbarContent } from "@/components/layout/navbar-content";
import { NavbarWrapper } from "@/components/layout/navbar-wrapper";
import { BarChart3 } from "lucide-react";

export async function Navbar({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  const links = [
    { href: `/${lang}/price-action`, label: dict.nav.priceAction },
    { href: `/${lang}/smc`, label: dict.nav.smc },
    { href: `/${lang}/ict`, label: dict.nav.ict },
    { href: `/${lang}/forex-sessions`, label: dict.nav.forexSessions },
    { href: `/${lang}/academy`, label: dict.nav.academy },
    { href: `/${lang}/tools`, label: dict.nav.tools },
    { href: `/${lang}/glossary`, label: dict.nav.glossary },
    { href: `/${lang}/blog`, label: dict.nav.blog },
  ];

  return (
    <MobileMenuProvider>
      {/* Navbar — sticky header with backdrop-blur (creates stacking context) */}
      <NavbarWrapper>
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-3 md:h-12 xl:h-16 xl:px-6">
          <Link
            href={`/${lang}`}
            className="flex items-center gap-1.5 text-base font-bold text-foreground transition-opacity hover:opacity-80 md:text-sm xl:gap-2.5 xl:text-xl"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-green/10 xl:h-8 xl:w-8 xl:rounded-lg">
              <BarChart3 size={14} className="text-accent-green xl:hidden" />
              <BarChart3 size={18} className="hidden text-accent-green xl:block" />
            </div>
            <span>
              Trading<span className="neon-text">Docs</span>
            </span>
          </Link>

          <NavbarContent links={links} />

          <div className="flex items-center gap-0.5 xl:gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher currentLang={lang} />
            <SearchModal />
            {/* Only the small trigger button lives inside the header */}
            <MobileMenuTrigger />
          </div>
        </div>
      </NavbarWrapper>

      {/* Menu overlay rendered OUTSIDE the header — never trapped by backdrop-blur */}
      <MobileMenuPanel lang={lang} links={links} />
    </MobileMenuProvider>
  );
}
