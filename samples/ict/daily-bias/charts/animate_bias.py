"""Explainer video: building a daily bias step by step. Reuses eurusd_daily_bias.build()."""

import shutil
import sys

import eurusd_daily_bias as db
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("range", "hl", "po3", "draw", "today")


def captions(t):
    return {
        "intro": "<b>Daily bias</b> — decide the direction before the session",
        "s0": "Three weeks of EUR/USD daily candles",
        "s1": "Mark the dealing range: 1.0800 – 1.1000, equilibrium 1.0900",
        "s2": "<b>①</b> Structure: a higher low at 1.0845, still in discount",
        "s3": "<b>②</b> Yesterday: down first, then closed near the high — bullish PO3",
        "s4": "<b>③</b> Draw: last week's high at 1.0950 is untouched",
        "s5": "<b>④</b> Today's bias: <b>bullish</b> — look for buys only, toward 1.0950",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(11, 8, "s0").hold("s0", 10)
    tl.fade("range", "s1", 12).hold("s1", 40)
    tl.candles_to(12, 10, "s2").fade("hl", "s2", 10).hold("s2", 40)
    tl.fade("po3", "s3", 10).hold("s3", 45)
    tl.fade("draw", "s4", 10).hold("s4", 45)
    tl.fade("today", "s5", 12).hold("s5", 75)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("daily-bias-explainer", db.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
