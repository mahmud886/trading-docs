"use client";

import { useEffect, useRef } from "react";

interface TradingViewChartProps {
  symbol?: string;
  interval?: string;
  theme?: "dark" | "light";
  height?: number;
}

export function TradingViewChart({
  symbol = "OANDA:EURUSD",
  interval = "60",
  theme = "dark",
  height = 500,
}: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerId = `tv_chart_${Math.random().toString(36).slice(2)}`;
    containerRef.current.id = containerId;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      interval,
      timezone: "Etc/UTC",
      theme,
      style: "1",
      locale: "en",
      toolbar_bg: "#0a0a0a",
      enable_publishing: false,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      container_id: containerId,
      width: "100%",
      height,
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [symbol, interval, theme, height]);

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div ref={containerRef} style={{ height }} />
    </div>
  );
}

