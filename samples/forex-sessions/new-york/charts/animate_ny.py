"""Explainer video: US data, a fair value gap and the pullback on gold. Reuses ny_chart.build()."""

import shutil
import sys

import ny_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("events", "data", "fvg", "position", "entry")


def captions(t):
    return {
        "intro": "<b>New York</b> — US data, a gap, and the pullback (BD time, US summer)",
        "s0": "6:00 PM BD: New York is open; US data is due at 6:30 PM",
        "s1": "6:30 PM: the data candle runs +11 USD and leaves a fair value gap, 2,404.5 – 2,412",
        "s2": "7:15 PM: the pullback reaches the gap → buy 2,410 · stop 2,400 · target 2,438 (planned 1 : 2.8)",
        "s3": "7:30 PM: US stocks open. London closes at 10:00 PM BD",
        "end": "New York: let the data print, then trade the pullback it leaves",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("events", "s0", 10).candles_to(d.I_DATA, 6, "s0").hold("s0", 15)
    tl.candles_to(d.I_DATA + 2, 6, "s1").fade("data", "s1", 10).fade("fvg", "s1", 10).hold("s1", 25)
    tl.candles_to(d.I_FILL + 1, 6, "s2").fade("position", "s2", 10).fade("entry", "s2", 8).hold("s2", 25)
    tl.candles_to(d.N, 5, "s3").hold("s3", 20)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("newyork-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
