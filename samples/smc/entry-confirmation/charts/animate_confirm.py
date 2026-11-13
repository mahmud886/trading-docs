"""Explainer video: entry confirmation tiers. Reuses confirm_chart.build()."""

import shutil
import sys

import confirm_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("ob", "levels", "A", "B", "C")


def captions(t):
    return {
        "intro": "<b>Entry confirmation</b> — three entries at the same POI",
        "s0": "Price falls into a 1H bullish OB: 1.0840 – 1.0850 · stop 1.0838 · target 1.0900",
        "sA": "<b>A</b> Risk entry: a limit at 1.0850 — best R:R (1 : 4.2), no proof yet",
        "sB": "<b>B</b> Bullish engulfing closes 1.0854 — some proof, R:R 1 : 2.9",
        "sC": "<b>C</b> CHOCH above 1.0866, entry in the new FVG at 1.0861 — most proof, R:R 1 : 1.7",
        "end": "More confirmation filters out failed setups, but costs R:R",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(4, 5, "s0").fade("ob", "s0", 10).fade("levels", "s0", 10).hold("s0", 25)
    tl.candles_to(5, 8, "sA").fade("A", "sA", 10).hold("sA", 30)
    tl.candles_to(7, 8, "sB").fade("B", "sB", 10).hold("sB", 30)
    tl.candles_to(11, 8, "sC").fade("C", "sC", 10).hold("sC", 35)
    tl.candles_to(d.N, 6, "end").hold("end", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("entry-confirmation-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
