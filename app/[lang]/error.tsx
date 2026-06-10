"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <AlertTriangle size={48} className="mx-auto text-accent-orange" />
        <h2 className="mt-4 text-2xl font-bold text-foreground">Something went wrong</h2>
        <p className="mt-2 text-muted-foreground">An error occurred while loading this page.</p>
        <button
          onClick={reset}
          className="mt-6 rounded-full bg-muted px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/80"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
