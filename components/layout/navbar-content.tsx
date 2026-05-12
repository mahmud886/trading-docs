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
    <nav className="hidden items-center gap-0.5 lg:flex">
      {links.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative rounded-lg px-3 py-2 text-sm transition-all ${
              active
                ? "font-medium text-accent-green"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active && (
              <span className="absolute inset-x-1 -bottom-[13px] h-[2px] rounded-full bg-accent-green shadow-[0_0_8px_var(--accent-green)]" />
            )}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
