"""Explainer video: bearish manipulation. Reuses manip_chart.build()."""

import shutil
import sys

import manip_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("liq", "sweep", "choch", "zone", "position", "entry")


def captions(t):
    return {
        "intro": "<b>Manipulation</b> — the false move before the real one",
        "s1": "A range forms: equal highs at 1.0950 (BSL), equal lows at 1.0862 (SSL)",
        "s2": "<b>①</b> A wick to 1.0968 runs the buy stops — then closes back inside",
        "s3": "<b>②</b> CHOCH: a close below the 1.0918 higher low",
        "s4": "The drop leaves an FVG inside the last up-close candle (OB)",
        "s5": "<b>③</b> Sell 1.0938 · stop 1.0971 above the sweep · target 1.0858 below SSL",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(11, 4, "s1").fade("liq", "s1", 10).hold("s1", 25)
    tl.candles_to(16, 8, "s2").fade("sweep", "s2", 10).hold("s2", 30)
    tl.candles_to(18, 10, "s3").fade("choch", "s3", 10).hold("s3", 25)
    tl.fade("zone", "s4", 10).hold("s4", 25)
    tl.candles_to(20, 10, "s5").fade("position", "s5", 10).fade("entry", "s5", 10).hold("s5", 25)
    tl.candles_to(d.N, 8, "s5").hold("s5", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("manipulation-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
