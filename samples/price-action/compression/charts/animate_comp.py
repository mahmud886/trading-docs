"""Explainer video: compression into resistance. Reuses comp_chart.build()."""

import shutil
import sys

import comp_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("tri", "break", "position")


def captions(t):
    return {
        "intro": "<b>Compression</b> — swings getting smaller against a level",
        "s1": "Price keeps stopping at 1.0950 — flat highs",
        "s2": "Each low is higher: 1.0900 → 1.0915 → 1.0928 → 1.0938 — the swings shrink",
        "s3": "A close above 1.0950, then a retest that holds → buy 1.0953",
        "s4": "Stop 1.0935 below the last low · target 1.0950 + 50-pip height = 1.1000 · plan 1 : 2.6",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.HIGHS[1] + 1, 4, "s1").hold("s1", 20)
    tl.candles_to(d.I_BREAK, 4, "s2").fade("tri", "s2", 10).hold("s2", 30)
    tl.candles_to(d.I_RETEST + 1, 8, "s3").fade("break", "s3", 10).hold("s3", 25)
    tl.fade("position", "s4", 10).candles_to(d.N, 5, "s4").hold("s4", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("compression-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
