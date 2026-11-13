"""Explainer video: bullish SMT divergence. Reuses smt_chart.build()."""

import shutil
import sys

import smt_chart as s
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("lows", "smt")


def captions(t):
    return {
        "intro": "<b>SMT divergence</b> — two correlated pairs, one disagreement",
        "s1": "EUR/USD and GBP/USD usually move together",
        "s2": "At the second low, EUR/USD makes a lower low — GBP/USD doesn't",
        "s3": "<b>Bullish SMT</b>: the sell-off isn't confirmed across both pairs",
        "s4": "Use it as confluence with a sweep and a CHOCH, not on its own",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(s.I2, 5, "s1").hold("s1", 20)
    tl.candles_to(s.I2 + 1, 10, "s2").fade("lows", "s2", 12).hold("s2", 35)
    tl.fade("smt", "s3", 12).hold("s3", 30)
    tl.candles_to(len(s.EUR), 8, "s4").hold("s4", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("smt-explainer", s.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
