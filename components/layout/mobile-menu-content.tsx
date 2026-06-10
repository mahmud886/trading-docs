"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

interface MobileMenuContentProps {
  lang: Locale;
  links: { href: string; label: string }[];
  onClose: () => void;
}

export function MobileMenuContent({ lang, links, onClose }: MobileMenuContentProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="flex flex-col gap-1">
      {links.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`rounded-lg px-4 py-3 text-sm transition-all ${
              active
                ? "bg-accent-green/10 text-accent-green font-medium shadow-[inset_3px_0_0_var(--accent-green)]"
                : "text-muted-foreground hover:bg-accent-green/5 hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
      <div className="my-4 border-t border-border/50" />
      <Link
        href={`/${lang}/dashboard`}
        onClick={onClose}
        className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-all hover:bg-accent-green/5 hover:text-foreground"
      >
        {lang === "bn" ? "ড্যাশবোর্ড" : "Dashboard"}
      </Link>
      <Link
        href={`/${lang}/charts`}
        onClick={onClose}
        className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-all hover:bg-accent-green/5 hover:text-foreground"
      >
        {lang === "bn" ? "চার্ট" : "Charts"}
      </Link>
      <Link
        href={`/${lang}/tools`}
        onClick={onClose}
        className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-all hover:bg-accent-green/5 hover:text-foreground"
      >
        {lang === "bn" ? "টুলস" : "Tools"}
      </Link>
    </nav>
  );
}
