import { ImageResponse } from "next/og";
import { PwaIconMark } from "@/lib/brand/pwa-icon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<PwaIconMark size={32} padding={4} radius={6} />, {
    ...size,
  });
}
