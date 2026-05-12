import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
      <Link href="/" className="transition-colors hover:text-foreground">
        <Home size={14} />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight size={12} />
          {item.href ? (
            <Link
              href={item.href}
              className="capitalize transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ) : (
            <span className="capitalize text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
