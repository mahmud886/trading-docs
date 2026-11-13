"""
Explainer video: an ICT bullish FVG (BISI) — the displacement, the three candles, the CE, the limit entry
on the first retrace, and the plan toward buy-side liquidity.

Reuses eurusd_bullish_fvg.build() so the video always matches the static chart.
Writes output/ict-fvg-explainer-{light,dark}.mp4 (1920x1080, 30 fps, H.264). Requires ffmpeg.

Usage: python animate_fvg.py [light|dark ...]   (default: both)
"""

import shutil
import sys

import eurusd_bullish_fvg as fvg
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("levels", "c_labels", "fvg", "retrace", "position", "projection")


def idx(hhmm):
    return fvg.CANDLES.index(by_time(fvg.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Fair Value Gap</b> — the ICT way: three candles, one gap, one line (the CE)",
        "s0": "Context: Daily bullish, price in discount — the draw is <b>BSL 1.0950</b>",
        "s1": step("①", "<b>Displacement</b> from 1.0880 — C2 is an 18-pip candle"),
        "s2": "2:30 PM BD: C3 closes — <b>C1 high 1.0885 to C3 low 1.0895</b> is the FVG; its 50% is the <b>CE 1.0890</b>",
        "s3": step("②", "<b>First retrace to the CE</b> — the limit buy at 1.0890 fills, the candle closes above"),
        "s4": "<b>Plan</b>: stop 1.0882 below the gap · target BSL 1.0950 · R:R 1 : 7.5",
        "s5": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 36)
    tl.fade("levels", "s0", 12).candles_to(idx("14:00"), 4, "s0").hold("s0", 20)
    tl.candles_to(idx("14:30"), 14, "s1").hold("s1", 20)
    tl.candles_to(idx("14:45"), 12, "s2").fade("c_labels", "s2", 10).fade("fvg", "s2", 12).hold("s2", 45)
    tl.candles_to(idx("15:30"), 8, "s3").fade("retrace", "s3", 10).hold("s3", 35)
    tl.fade("position", "s4", 12).candles_to(len(fvg.CANDLES), 8, "s4").hold("s4", 30)
    tl.fade("projection", "s5", 10).hold("s5", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("ict-fvg-explainer", fvg.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0968)


if __name__ == "__main__":
    main()
