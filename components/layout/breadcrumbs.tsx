import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  /** Locale used for the home link. */
  lang?: string;
}

/**
 * Breadcrumb trail. On small screens only the parent and the current page show (the rest collapse to an
 * ellipsis), and long titles are truncated so the trail never wraps onto several lines.
 */
export function Breadcrumbs({ items, lang = "en" }: BreadcrumbsProps) {
  const last = items.length - 1;
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex min-w-0 items-center gap-1.5 text-[13px] text-muted-foreground">
        <li className="shrink-0">
          <Link
            href={`/${lang}`}
            aria-label="Home"
            className="flex h-7 w-7 items-center justify-center rounded-md transition-colors hover:bg-muted hover:text-foreground"
          >
            <Home size={14} />
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === last;
          // On mobile keep only the section before the current page and the current page.
          const hiddenOnMobile = items.length > 2 && i < last - 1;
          return (
            <li
              key={`${item.label}-${i}`}
              className={`min-w-0 items-center gap-1.5 ${hiddenOnMobile ? "hidden sm:flex" : "flex"} ${
                isLast ? "flex-1" : "shrink-0 sm:shrink"
              }`}
            >
              <ChevronRight size={12} className="shrink-0 opacity-60" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="max-w-[10rem] truncate capitalize transition-colors hover:text-foreground sm:max-w-[14rem]"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="truncate font-medium text-foreground">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
