"""Explainer video: writing the daily bias before London opens. Reuses bias_chart.build()."""

import shutil
import sys

import bias_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("structure", "range", "draw", "invalid", "card", "today")


def captions(t):
    return {
        "intro": "<b>Daily session bias</b> — decided before the session, with an exit if it's wrong",
        "s1": "Step 1: daily structure — higher highs and higher lows, so the trend is up",
        "s2": "Step 2: where is price in the dealing range? A pullback into discount, below the 50% line",
        "s3": "Step 3: yesterday's daily candle closed up, and unswept liquidity sits above at 1.2712",
        "s4": "Write the bias, the target and the invalidation: a daily close below 1.2580 cancels it",
        "s5": "Today: London and New York are read through this bias — long pullbacks only",
        "end": "No clear checklist, no bias. And a bias is a filter, not a forecast",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(12, 5, "s1").fade("structure", "s1", 10).hold("s1", 25)
    tl.candles_to(d.I_YEST, 5, "s2").fade("range", "s2", 10).hold("s2", 25)
    tl.candles_to(d.I_YEST + 1, 5, "s3").fade("draw", "s3", 10).hold("s3", 25)
    tl.fade("invalid", "s4", 10).fade("card", "s4", 10).hold("s4", 30)
    tl.fade("today", "s5", 10).candles_to(d.N, 6, "s5").hold("s5", 25)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("daily-bias-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
