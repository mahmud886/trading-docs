"""
Explainer video: anatomy of a liquidity sweep — mark the pools, the raid, the close back inside with an MSS,
the FVG retest entry, and the plan toward the opposite pool.

Reuses eurusd_pdh_sweep.build() so the video always matches the static chart.
Writes output/sweep-anatomy-explainer-{light,dark}.mp4 (1920x1080, 30 fps, H.264). Requires ffmpeg.

Usage: python animate_sweep.py [light|dark ...]   (default: both)
"""

import shutil
import sys

import eurusd_pdh_sweep as sweep
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("levels", "raid", "mss", "fvg", "position", "projection")


def idx(hhmm):
    return sweep.CANDLES.index(by_time(sweep.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Liquidity Sweep</b> — the anatomy of a raid, step by step",
        "s0": "Before the session: mark the pools — <b>PDH 1.0920</b> above, <b>PDL 1.0870</b> below",
        "s1": step("①", "<b>Raid</b>: in the NY AM kill zone price runs the buy stops above PDH to 1.0928"),
        "s2": step("②", "<b>Close back inside + MSS</b>: displacement closes below PDH and the 1.0918 higher low"),
        "s3": step("③", "<b>Enter</b>: the move leaves an FVG — its CE is retested at 5:45 PM BD → sell 1.0918"),
        "s4": "<b>Plan</b>: stop 1.0930 above the raid · target PDL 1.0870 · R:R 1 : 4",
        "s5": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 36)
    tl.fade("levels", "s0", 14).hold("s0", 30)
    tl.candles_to(idx("17:25"), 4, "s0")
    tl.candles_to(idx("17:35"), 12, "s1").fade("raid", "s1", 10).hold("s1", 30)
    tl.candles_to(idx("17:40"), 16, "s2").fade("mss", "s2", 10).hold("s2", 40)
    tl.candles_to(idx("17:45"), 8, "s3").candles_to(idx("17:50"), 10, "s3").fade("fvg", "s3", 10).hold("s3", 35)
    tl.fade("position", "s4", 12).candles_to(len(sweep.CANDLES), 7, "s4").hold("s4", 30)
    tl.fade("projection", "s5", 10).hold("s5", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("sweep-anatomy-explainer", sweep.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0952)


if __name__ == "__main__":
    main()
