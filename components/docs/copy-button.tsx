"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    const pre = (e.currentTarget as HTMLElement)
      .closest(".group")
      ?.querySelector("pre");
    if (!pre) return;
    await navigator.clipboard.writeText(pre.textContent ?? "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 rounded-lg border border-border bg-muted p-1.5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 hover:text-foreground"
      aria-label="Copy code"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

