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
    <nav className="hidden items-center gap-1 xl:flex">
      {links.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative rounded-lg px-2 py-1.5 text-[10px] leading-tight transition-all xl:px-3 xl:py-2 xl:text-[14px] ${
              active
                ? "bg-accent-green/10 font-medium text-accent-green"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
