"""
Short explainer video: a bullish Fair Value Gap forms, gets retested at the CE, and becomes a trade plan.

Reuses fair_value_gap_eurusd.build() with a partial Reveal per frame, so the video always matches the chart.
Writes output/fvg-explainer-{light,dark}.mp4 (1920x1080, 30 fps, H.264). Requires ffmpeg on PATH.

Usage: python animate_fvg.py [light|dark ...]   (default: both)
"""

import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import plotly.io as pio

import fair_value_gap_eurusd as fvg
from chartkit import HEIGHT, OUT_DIR, THEMES, WIDTH, Reveal

FPS = 30
SCALE = 1920 / WIDTH  # 1600x900 layout -> 1920x1080 video
GROUPS = ("prior_high", "c_labels", "fvg", "retrace", "position", "projection")


def smooth(x: float) -> float:
    x = min(max(x, 0.0), 1.0)
    return x * x * (3 - 2 * x)


def captions(t):
    step = lambda n, text: f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"  # noqa: E731
    return {
        "intro": "<b>Fair Value Gap</b> — how a bullish FVG forms and gets traded",
        "s1": step("①", "Sell-off: price drops from the 1.0950 high to 1.0850"),
        "s2": step("②", "Displacement: three candles rally to 1.0920"),
        "s3": step("③", "The gap between C1's high and C3's low is the <b>Fair Value Gap</b>"),
        "s4": step("④", "Two hours later price retraces to the CE (50%) — bullish engulfing"),
        "s5": step("⑤", "Plan: entry at the CE · stop below the FVG · targets at liquidity"),
        "s6": "<span style='color:%s'>Hypothetical path</span> — a scenario, not a result" % t.ink3,
    }


def timeline():
    """Yield (candles, {group: alpha}, caption_key) for every video frame."""
    n, shown = 0.0, {g: 0.0 for g in GROUPS}

    def frame(cap):
        return (round(n, 3), {g: round(a, 3) for g, a in shown.items()}, cap)

    def candles_to(target, per, cap, fade=None, fade_frames=12):
        nonlocal n
        start, frames = n, int((target - n) * per)
        for i in range(1, frames + 1):
            n = start + (target - start) * i / frames
            if fade and i <= fade_frames:
                shown[fade] = smooth(i / fade_frames)
            yield frame(cap)

    def fade(group, cap, frames=12):
        for i in range(1, frames + 1):
            shown[group] = smooth(i / frames)
            yield frame(cap)

    def hold(cap, frames):
        for _ in range(frames):
            yield frame(cap)

    yield from hold("intro", 36)
    yield from candles_to(15, 5, "s1", fade="prior_high")  # 12:30 → 16:00 (C1)
    yield from hold("s1", 12)
    yield from candles_to(17, 9, "s2")  # C2, C3
    yield from fade("c_labels", "s2", 10)
    yield from hold("s2", 30)
    yield from fade("fvg", "s3")
    yield from hold("s3", 45)
    yield from candles_to(25, 5, "s4")  # retrace → 18:30 engulfing at the CE
    yield from fade("retrace", "s4", 10)
    yield from hold("s4", 36)
    yield from fade("position", "s5")
    yield from candles_to(27, 6, "s5")
    yield from hold("s5", 30)
    yield from fade("projection", "s6", 10)
    yield from hold("s6", 75)


def render(t):
    frames = list(timeline())
    caps = captions(t)
    unique = {}
    for key in frames:
        k = (key[0], tuple(sorted(key[1].items())), key[2])
        unique.setdefault(k, len(unique))
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        keys = sorted(unique, key=unique.get)
        figs = [fvg.build(t, Reveal(candles=k[0], groups=dict(k[1]), caption=caps[k[2]]), y_top=1.0978)
                for k in keys]
        paths = [tmp / f"u{unique[k]:04d}.png" for k in keys]
        pio.write_images(figs, paths, scale=SCALE, width=WIDTH, height=HEIGHT)
        for i, key in enumerate(frames):
            k = (key[0], tuple(sorted(key[1].items())), key[2])
            os.link(tmp / f"u{unique[k]:04d}.png", tmp / f"f{i:04d}.png")
        OUT_DIR.mkdir(exist_ok=True)
        out = OUT_DIR / f"fvg-explainer-{t.name}.mp4"
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", str(FPS), "-i", str(tmp / "f%04d.png"),
                        "-vf", "scale=1920:1080:flags=lanczos,format=yuv420p", "-c:v", "libx264", "-preset", "slow",
                        "-crf", "20", "-movflags", "+faststart", str(out)], check=True)
    print(f"{out.name}: {len(frames)} frames ({len(frames) / FPS:.1f}s), {len(unique)} rendered")


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    for t in THEMES:
        if t.name in wanted:
            render(t)


if __name__ == "__main__":
    main()
