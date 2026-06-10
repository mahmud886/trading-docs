export const PWA_BRAND = {
  accent: "#00ff9d",
  accentMuted: "rgba(0, 255, 157, 0.15)",
  background: "#000000",
} as const;

type PwaIconMarkProps = {
  size: number;
  padding: number;
  radius: number;
};

export function PwaIconMark({ size, padding, radius }: PwaIconMarkProps) {
  const inner = size - padding * 2;
  const chartSize = inner * 0.62;
  const chartX = padding + (inner - chartSize) / 2;
  const chartY = padding + (inner - chartSize) / 2;
  const stroke = Math.max(3, size * 0.045);

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: PWA_BRAND.background,
      }}
    >
      <div
        style={{
          width: inner,
          height: inner,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: radius,
          background: PWA_BRAND.accentMuted,
        }}
      >
        <svg
          width={chartSize}
          height={chartSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke={PWA_BRAND.accent}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginTop: chartSize * 0.04 }}
        >
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      </div>
    </div>
  );
}
