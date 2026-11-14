"""Explainer video: the London opening range and its breakout. Reuses london_chart.build()."""

import shutil
import sys

import london_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("london", "or", "break", "position", "entry")


def captions(t):
    return {
        "intro": "<b>London</b> — the opening range and its breakout (BD time, US/UK summer)",
        "s0": "Before 1:00 PM BD, GBP/USD drifts quietly",
        "s1": "1:00 PM BD: London opens. The first 30 minutes set a 20-pip range, 1.2725 – 1.2745",
        "s2": "1:45 PM: the first 15m close above the range",
        "s3": "2:30 PM: price retests the broken high → buy 1.2748 · stop 1.2733 · target 2R 1.2778",
        "s4": "The plan is set before the breakout. The target is a plan, not a promise",
        "end": "London: let the open show its range, then trade the close outside it",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_OPEN, 6, "s0").hold("s0", 10)
    tl.fade("london", "s1", 10).candles_to(d.OR[1], 6, "s1").fade("or", "s1", 10).hold("s1", 25)
    tl.candles_to(d.I_BREAK + 1, 6, "s2").fade("break", "s2", 10).hold("s2", 25)
    tl.candles_to(d.I_FILL + 1, 6, "s3").fade("position", "s3", 10).fade("entry", "s3", 8).hold("s3", 25)
    tl.candles_to(d.N, 4, "s4").hold("s4", 20)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("london-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
