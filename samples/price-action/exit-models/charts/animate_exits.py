"""Explainer video: one long, four exit rules. Reuses exits_chart.build()."""

import shutil
import sys

import exits_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("levels", "A", "B", "C", "D", "results")


def captions(t):
    return {
        "intro": "<b>Exit models</b> — one long, four ways out",
        "s0": "Buy GBP/USD 1.2700 · stop 1.2680 (1R = 20 pips) · resistance above at 1.2760",
        "sA": "<b>A</b> Fixed 2R target fills at 1.2740 — +2R, then price keeps going without you",
        "sB": "<b>B</b> Structural exit just below resistance, 1.2758 — +2.9R",
        "sC": "<b>C</b> Stop trailed under each higher low — stopped at 1.2735, +1.75R",
        "sD": "<b>D</b> Time exit: flat at the New York close (2:00 AM BD) — 1.2726, +1.3R",
        "end": "On another path the ranking flips. Pick the exit before the entry, and keep it",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("levels", "s0", 10).candles_to(1, 2, "s0").hold("s0", 20)
    tl.candles_to(d.I_FIXED + 1, 8, "sA").fade("A", "sA", 10).hold("sA", 25)
    tl.candles_to(d.I_STRUCT + 1, 8, "sB").fade("B", "sB", 10).hold("sB", 25)
    tl.candles_to(d.I_TRAIL + 1, 8, "sC").fade("C", "sC", 10).hold("sC", 25)
    tl.candles_to(d.N, 4, "sD").fade("D", "sD", 10).hold("sD", 25)
    tl.fade("results", "end", 10).hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("exit-models-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
