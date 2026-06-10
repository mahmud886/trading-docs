"use client";

import { AlertTriangle } from "lucide-react";

export default function RootError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <AlertTriangle size={48} className="mx-auto text-orange-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Application Error</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">An unexpected error occurred. Please try again.</p>
        {process.env.NODE_ENV === "development" && (
          <pre className="mt-6 max-w-xl overflow-auto rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-left text-sm text-gray-800 dark:text-gray-200">
            {error.message}
          </pre>
        )}
        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-gray-200 dark:bg-gray-700 px-6 py-2 text-sm font-medium text-gray-900 dark:text-white transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
