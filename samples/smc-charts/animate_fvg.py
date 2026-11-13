"""
Short explainer video: a bullish Fair Value Gap forms, gets retested at the CE, and becomes a trade plan.

Reuses fair_value_gap_eurusd.build() with a partial Reveal per frame, so the video always matches the chart.
Writes output/fvg-explainer-{light,dark}.mp4 (1920x1080, 30 fps, H.264). Requires ffmpeg on PATH.

Usage: python animate_fvg.py [light|dark ...]   (default: both)
"""

import shutil
import sys

import fair_value_gap_eurusd as fvg
from chartkit import THEMES, Timeline, render_video

GROUPS = ("prior_high", "c_labels", "fvg", "retrace", "position", "projection")


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Fair Value Gap</b> — how a bullish FVG forms and gets traded",
        "s1": step("①", "Sell-off: price drops from the 1.0950 high to 1.0850"),
        "s2": step("②", "Displacement: three candles rally to 1.0920"),
        "s3": step("③", "The gap between C1's high and C3's low is the <b>Fair Value Gap</b>"),
        "s4": step("④", "Two hours later price retraces to the CE (50%) — bullish engulfing"),
        "s5": step("⑤", "Plan: entry at the CE · stop below the FVG · targets at liquidity"),
        "s6": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 36)
    tl.candles_to(15, 5, "s1", fade="prior_high").hold("s1", 12)  # 12:30 → 16:00 (C1)
    tl.candles_to(17, 9, "s2").fade("c_labels", "s2", 10).hold("s2", 30)  # C2, C3
    tl.fade("fvg", "s3").hold("s3", 45)
    tl.candles_to(25, 5, "s4").fade("retrace", "s4", 10).hold("s4", 36)  # retrace → 18:30 engulfing at the CE
    tl.fade("position", "s5").candles_to(27, 6, "s5").hold("s5", 30)
    tl.fade("projection", "s6", 10).hold("s6", 75)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("fvg-explainer", fvg.build, timeline(), captions, themes=[t for t in THEMES if t.name in wanted],
                 y_top=1.0978)


if __name__ == "__main__":
    main()
