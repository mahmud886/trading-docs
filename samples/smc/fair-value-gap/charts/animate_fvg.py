"""Explainer video: bullish FVG. Reuses fvg_chart.build()."""

import shutil
import sys

import fvg_chart as f
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("candles123", "fvg", "retrace", "position", "entry")


def idx(hhmm):
    return f.C.index(by_time(f.C, hhmm))


def captions(t):
    return {
        "intro": "<b>Fair value gap</b> — a gap the market skipped",
        "s1": "London drops to 1.0850, then three candles rip to 1.0920",
        "s2": "Candle 1's high and candle 3's low don't overlap: the FVG, 1.0870 – 1.0885",
        "s3": "Price drifts back into the gap",
        "s4": "<b>5 PM BD</b>: the 50% level is reached → buy 1.0878 · stop 1.0866 · target 1.0950",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("13:30") + 1, 6, "s1").fade("candles123", "s1", 10).hold("s1", 25)
    tl.fade("fvg", "s2", 12).hold("s2", 35)
    tl.candles_to(idx("16:45") + 1, 4, "s3").fade("retrace", "s3", 10).hold("s3", 25)
    tl.candles_to(idx("17:00") + 1, 10, "s4").fade("position", "s4", 10).fade("entry", "s4", 10).hold("s4", 25)
    tl.candles_to(len(f.C), 8, "s4").hold("s4", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("smc-fvg-explainer", f.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
