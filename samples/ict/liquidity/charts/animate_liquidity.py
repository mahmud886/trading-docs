"""
Explainer video: the liquidity cycle — stops build on both sides, London sweeps the equal lows,
a displacement shifts structure, and price delivers to the buy-side liquidity.

Reuses liquidity_cycle_eurusd.build() so the video always matches the static chart.
Writes output/liquidity-cycle-explainer-{light,dark}.mp4 (1920x1080, 30 fps, H.264). Requires ffmpeg.

Usage: python animate_liquidity.py [light|dark ...]   (default: both)
"""

import shutil
import sys

import liquidity_cycle_eurusd as cycle
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("pools", "asian", "steps", "sweep", "mss", "fvg", "draw")


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Liquidity</b> — where the stops rest, and how price uses them",
        "s1": step("①", "<b>Build</b>: price leaves equal highs near 1.0950 and equal lows near 1.0850"),
        "s2": step("①", "<b>Build</b>: stops collect beyond them — buy stops above (BSL), sell stops below (SSL)"),
        "s3": step("②", "<b>Sweep</b>: London open takes the equal lows — wick to 1.0845, close back above"),
        "s4": step("③", "<b>Shift</b>: a displacement closes above 1.0874 — MSS, FVG left behind"),
        "s5": step("④", "<b>Deliver</b>: the draw on liquidity — price runs the buy stops above 1.0950"),
        "end": f"<span style='color:{t.ink3}'>Synthetic illustration</span> — build · sweep · shift · deliver",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 36)
    tl.candles_to(cycle.I_SWEEP, 3, "s1").fade("steps", "s1", 10).hold("s1", 15)
    tl.fade("pools", "s2", 14).fade("asian", "s2", 10).hold("s2", 45)
    tl.candles_to(cycle.I_SWEEP + 1, 16, "s3").fade("sweep", "s3", 10).hold("s3", 40)
    tl.candles_to(cycle.I_SWEEP + 2, 14, "s4").fade("mss", "s4", 10).candles_to(cycle.I_SWEEP + 3, 8, "s4")
    tl.fade("fvg", "s4", 10).hold("s4", 35)
    tl.candles_to(len(cycle.CANDLES), 8, "s5").fade("draw", "s5", 10).hold("s5", 45)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("liquidity-cycle-explainer", cycle.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0996)


if __name__ == "__main__":
    main()
