#!/usr/bin/env python3
"""Shrink lesson assets in public/: PNG -> lossless WebP, MP4 -> 1600x900 H.264 (the charts are drawn at 1600x900).

Idempotent: PNGs that no longer exist and videos already 1600 px wide are skipped.
Usage: python3 scripts/optimize-assets.py [--content]   (--content also rewrites .png -> .webp in content/)
"""
import re
import subprocess
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"


def to_webp(png: Path) -> Path:
    out = png.with_suffix(".webp")
    Image.open(png).save(out, "WEBP", lossless=True, method=6)
    png.unlink()
    return out


def shrink_video(mp4: Path) -> bool:
    w = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width",
                        "-of", "csv=p=0", str(mp4)], capture_output=True, text=True).stdout.strip()
    if w == "1600":
        return False
    tmp = mp4.with_suffix(".tmp.mp4")
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", str(mp4), "-vf", "scale=1600:900:flags=lanczos",
                    "-c:v", "libx264", "-preset", "slow", "-crf", "27", "-pix_fmt", "yuv420p", "-an",
                    "-movflags", "+faststart", str(tmp)], check=True)
    tmp.replace(mp4)
    return True


def main():
    before = sum(f.stat().st_size for f in PUBLIC.rglob("*") if f.is_file())
    pngs = [p for p in (PUBLIC / "images").rglob("*.png") if "og" not in p.relative_to(PUBLIC / "images").parts[:1]]
    for p in pngs:
        to_webp(p)
    vids = list((PUBLIC / "videos").rglob("*.mp4"))
    done = sum(shrink_video(v) for v in vids)
    if "--content" in sys.argv:
        pat = re.compile(r"(/images/(?!og/)[A-Za-z0-9/._-]+)\.png")
        for f in (ROOT / "content").rglob("*.mdx"):
            s = f.read_text()
            n = pat.sub(r"\1.webp", s)
            if n != s:
                f.write_text(n)
    after = sum(f.stat().st_size for f in PUBLIC.rglob("*") if f.is_file())
    print(f"images: {len(pngs)} converted · videos: {done}/{len(vids)} recompressed · "
          f"public {before / 1e6:.0f} MB -> {after / 1e6:.0f} MB")


if __name__ == "__main__":
    main()
