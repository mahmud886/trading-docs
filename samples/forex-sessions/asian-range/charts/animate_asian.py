"""Explainer video: one Asian range, three London outcomes. Reuses asian_chart.build()."""

import shutil
import sys

import asian_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("range", "note_a", "note_b", "note_c")


def captions(t):
    return {
        "intro": "<b>Asian range</b> — one range, three ways London can treat it",
        "s0": "6:00 AM – 12:59 PM BD: Asia builds a 20-pip range, 1.0852 – 1.0872",
        "sa": "A: London drops below the low, closes back inside, then rallies — the sweep-and-reverse",
        "sb": "B: London closes above the high and holds the retest — a real breakout",
        "sc": "C: no close outside the range — no Asian-range trade today",
        "end": "Mark the range before London. Let the closes tell you which day it is",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.N_ASIA, 6, "s0").fade("range", "s0", 10).hold("s0", 20)
    span = d.N - d.N_ASIA
    tl.candles_to(d.N_ASIA + span, 8, "sa").fade("note_a", "sa", 10).hold("sa", 20)
    tl.candles_to(d.N_ASIA + 2 * span, 8, "sb").fade("note_b", "sb", 10).hold("sb", 20)
    tl.candles_to(d.N_ASIA + 3 * span, 8, "sc").fade("note_c", "sc", 10).hold("sc", 20)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("asian-range-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
