import Link from "next/link";
import { LogoMark } from "@/components/brand/logo-mark";

export default function OfflinePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 text-center">
      <LogoMark className="h-16 w-16 rounded-2xl xl:h-16 xl:w-16" iconSize={36} />
      <h1 className="mt-6 text-2xl font-bold">
        Trading<span className="neon-text">Docs</span>
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        You are offline. Reconnect to browse the latest trading education content.
      </p>
      <Link
        href="/en"
        className="mt-8 rounded-lg border border-accent-green/30 bg-accent-green/10 px-4 py-2 text-sm font-medium text-accent-green transition-colors hover:bg-accent-green/20"
      >
        Try again
      </Link>
    </main>
  );
}
