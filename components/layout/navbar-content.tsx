"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

interface NavbarContentProps {
  lang?: Locale;
  links: { href: string; label: string }[];
}

export function NavbarContent({ links }: NavbarContentProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="hidden items-center gap-0 md:flex xl:gap-1">
      {links.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative rounded-md px-2 py-2 text-[10px] leading-tight transition-all xl:rounded-lg xl:px-2.5 xl:py-2 xl:text-[14px] ${
              active
                ? "font-medium text-accent-green"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active && (
              <span className="absolute inset-x-0.5 -bottom-[10px] h-[2px] rounded-full bg-accent-green shadow-[0_0_8px_var(--accent-green)] xl:inset-x-1 xl:-bottom-[13px]" />
            )}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
