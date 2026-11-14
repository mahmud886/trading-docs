"""Explainer video: buying support in a range. Reuses range_chart.build()."""

import shutil
import sys

import range_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("range", "reject", "position")


def captions(t):
    return {
        "intro": "<b>Range trading</b> — when price moves sideways between two levels",
        "s1": "Two touches of 1.2760 and two of 1.2700: a 60-pip range, midpoint 1.2730",
        "s2": "At support, a candle wicks below 1.2700 and closes back inside",
        "s3": "Buy 1.2708 · stop 1.2690 below the wick",
        "s4": "TP1 at the midpoint (1 : 1.2), TP2 near resistance (1 : 2.4)",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.BOTS[1] + 2, 3, "s1").fade("range", "s1", 10).hold("s1", 25)
    tl.candles_to(d.I_REJECT + 1, 6, "s2").fade("reject", "s2", 10).hold("s2", 25)
    tl.candles_to(d.N, 6, "s3").fade("position", "s3", 10).hold("s3", 25)
    tl.hold("s4", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("range-trading-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
