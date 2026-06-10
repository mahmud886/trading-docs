import { Sidebar } from "@/components/layout/sidebar";
import { type Locale } from "@/lib/i18n";
import { Suspense } from "react";
// Loading skeleton for sidebar
function SidebarSkeleton() {
  return (
    <div className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 overflow-y-auto border-r border-border/30 lg:block">
      <div className="space-y-4 p-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 bg-muted rounded animate-pulse" />
        ))}
      </div>
    </div>
  );
}
export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <div className="mx-auto flex max-w-[1440px]">
      <Suspense fallback={<SidebarSkeleton />}>
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 overflow-y-auto border-r border-border/30 lg:block">
          <Sidebar lang={lang as Locale} />
        </aside>
      </Suspense>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
