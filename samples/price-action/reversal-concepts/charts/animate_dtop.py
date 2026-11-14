"""Explainer video: a double-top reversal. Reuses dtop_chart.build()."""

import shutil
import sys

import dtop_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("tops", "neck", "break", "position")


def captions(t):
    return {
        "intro": "<b>Reversals</b> — when a trend stops and turns",
        "s1": "An uptrend reaches 1.1000, pulls back to 1.0950",
        "s2": "The second push fails at 1.0998 — just under the first top",
        "s3": "The neckline: the 1.0950 low between the tops — the last higher low",
        "s4": "A close below 1.0950: structure has turned",
        "s5": "Retest from below → sell 1.0945 · stop 1.0962 · target 1.0900 (neckline − height) · plan 1 : 2.6",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_NECK + 1, 4, "s1").hold("s1", 20)
    tl.candles_to(d.I_T2 + 2, 6, "s2").fade("tops", "s2", 10).hold("s2", 25)
    tl.fade("neck", "s3", 10).hold("s3", 25)
    tl.candles_to(d.I_BREAK + 1, 8, "s4").fade("break", "s4", 10).hold("s4", 25)
    tl.candles_to(d.I_RETEST + 1, 8, "s5").fade("position", "s5", 10).hold("s5", 20)
    tl.candles_to(d.N, 6, "s5").hold("s5", 40)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("reversal-concepts-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
