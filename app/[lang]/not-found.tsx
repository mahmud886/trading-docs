import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <div className="text-7xl font-bold text-muted-foreground/30">404</div>
        <h2 className="mt-4 text-2xl font-bold text-foreground">Page not found</h2>
        <p className="mt-2 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-accent-green px-6 py-2 text-sm font-semibold text-black transition-colors hover:opacity-90"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
