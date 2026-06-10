import Link from "next/link";
import { type Locale, getDictionary } from "@/lib/i18n";
import { LogoMark } from "@/components/brand/logo-mark";

export async function Footer({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <footer className="relative border-t border-border/30">
      {/* Subtle top glow line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />

      <div className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-2.5 text-lg font-bold text-foreground">
              <LogoMark className="h-7 w-7 rounded-lg xl:h-7 xl:w-7" />
              Trading<span className="neon-text">Docs</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{dict.footer.description}</p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-green/80">
              {dict.footer.resources}
            </h4>
            <ul className="space-y-3">
              {[
                { href: `/${lang}/price-action`, label: dict.nav.priceAction },
                { href: `/${lang}/smc`, label: dict.nav.smc },
                { href: `/${lang}/ict`, label: dict.nav.ict },
                { href: `/${lang}/glossary`, label: dict.nav.glossary },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-green/80">
              {dict.footer.learning}
            </h4>
            <ul className="space-y-3">
              {[
                { href: `/${lang}/academy`, label: dict.nav.academy },
                { href: `/${lang}/blog`, label: dict.nav.blog },
                { href: `/${lang}/charts`, label: dict.nav.charts },
                { href: `/${lang}/tools`, label: dict.nav.tools },
                { href: `/${lang}/dashboard`, label: dict.nav.dashboard },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-green/80">
              {dict.footer.legal}
            </h4>
            <ul className="space-y-3">
              {[
                { href: `/${lang}/privacy-policy`, label: lang === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy" },
                { href: `/${lang}/terms`, label: lang === "bn" ? "ব্যবহারের শর্তাবলী" : "Terms of Service" },
                { href: `/${lang}/disclaimer`, label: lang === "bn" ? "দায়মুক্তি" : "Disclaimer" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TradingDocs. {dict.footer.rights}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground/60">
                {lang === "bn" ? "তৈরি করেছেন" : "Built by"}{" "}
                <span className="text-muted-foreground">Md. Iqbal Mahmud</span>
              </span>
              <Link
                href="https://github.com/mahmud886"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 transition-colors hover:text-accent-green"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
              </Link>
              <Link
                href="https://bd.linkedin.com/in/mahmud886"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 transition-colors hover:text-accent-green"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
