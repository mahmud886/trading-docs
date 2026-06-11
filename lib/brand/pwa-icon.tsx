export const PWA_BRAND = {
  accent: "#00ff9d",
  accentMuted: "rgba(0, 255, 157, 0.08)",
  background: "#000000",
} as const;

type PwaIconMarkProps = {
  size: number;
  padding: number;
  radius: number;
};

export function PwaIconMark({ size, padding, radius }: PwaIconMarkProps) {
  const inner = size - padding * 2;
  const chartSize = inner * 0.7;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: PWA_BRAND.background,
        borderRadius: radius,
      }}
    >
      <div
        style={{
          width: inner,
          height: inner,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: radius * 0.8,
          background: PWA_BRAND.accentMuted,
        }}
      >
        <svg width={chartSize} height={chartSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Candlestick wicks */}
          <line x1="7" y1="3" x2="7" y2="21" stroke={PWA_BRAND.accent} strokeWidth="1" strokeLinecap="round" />
          <line x1="13" y1="2" x2="13" y2="20" stroke={PWA_BRAND.accent} strokeWidth="1" strokeLinecap="round" />
          <line x1="19" y1="4" x2="19" y2="22" stroke={PWA_BRAND.accent} strokeWidth="1" strokeLinecap="round" />
          {/* Candlestick bodies */}
          <rect x="5" y="7" width="4" height="9" rx="0.8" fill={PWA_BRAND.accent} />
          <rect x="11" y="6" width="4" height="10" rx="0.8" fill="none" stroke={PWA_BRAND.accent} strokeWidth="1" />
          <rect x="17" y="8" width="4" height="8" rx="0.8" fill={PWA_BRAND.accent} />
        </svg>
      </div>
    </div>
  );
}
