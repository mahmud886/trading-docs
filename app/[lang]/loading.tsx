export default function Loading() {
  // Fades in after a short delay, so quick navigations never flash a spinner.
  return (
    <div className="flex min-h-[60vh] animate-[loading-in_0.2s_ease_0.35s_both] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent-green" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
