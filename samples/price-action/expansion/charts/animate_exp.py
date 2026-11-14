"""Explainer video: from compression to expansion. Reuses exp_chart.build()."""

import shutil
import sys

import exp_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("range", "exp", "position")


def captions(t):
    return {
        "intro": "<b>Expansion</b> — the move after a quiet period",
        "s1": "A quiet range, 1.1000 – 1.1050: small candles, about 13 pips each",
        "s2": "Then expansion: three large candles, about 21 pips each, leaving an FVG",
        "s3": "Price pulls back into the FVG → buy 1.1062 · stop 1.1044 below the gap",
        "s4": "Target: 1.1050 + the 50-pip range = 1.1100 · plan 1 : 2.1",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.RANGE_END, 3, "s1").fade("range", "s1", 10).hold("s1", 25)
    tl.candles_to(d.EXP[-1] + 1, 8, "s2").fade("exp", "s2", 10).hold("s2", 30)
    tl.candles_to(d.I_FILL + 1, 8, "s3").fade("position", "s3", 10).hold("s3", 25)
    tl.candles_to(d.N, 5, "s4").hold("s4", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("expansion-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
