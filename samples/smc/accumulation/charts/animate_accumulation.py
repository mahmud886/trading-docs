"""Explainer video: Wyckoff accumulation. Reuses accumulation_chart.build()."""

import shutil
import sys

import accumulation_chart as a
from _paths import OUT
from chartkit import THEMES, Timeline, render_video
from wyckoff import EVENTS

GROUPS = ("range", "events", "position")


def captions(t):
    return {
        "intro": "<b>Accumulation</b> — a range where a downtrend ends",
        "s1": "Selling climax: the low of the range, on the biggest volume",
        "s2": "The automatic rally sets the top; the secondary test sets the floor",
        "s3": "The <b>spring</b>: a sweep below 1.0800 on low volume, closed back inside",
        "s4": "Test holds → buy 1.0818 · stop below the spring",
        "s5": "Sign of strength on rising volume, then markup",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(EVENTS["SC"] + 1, 3, "s1").fade("events", "s1", 10).hold("s1", 25)
    tl.candles_to(EVENTS["ST"] + 1, 5, "s2").fade("range", "s2", 10).hold("s2", 25)
    tl.candles_to(EVENTS["Spring"] + 2, 4, "s3").hold("s3", 30)
    tl.candles_to(EVENTS["Test"] + 1, 8, "s4").fade("position", "s4", 10).hold("s4", 25)
    tl.candles_to(len(a.C), 5, "s5").hold("s5", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("accumulation-explainer", a.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
