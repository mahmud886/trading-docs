"""Explainer video: a Fibonacci pullback at a level. Reuses pullback_chart.build()."""

import shutil
import sys

import pullback_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("old", "fib", "position")


def captions(t):
    return {
        "intro": "<b>Pullbacks</b> — entering a trend after it pauses",
        "s1": "Old resistance near 1.0850 before the move",
        "s2": "An impulse from 1.0800 to 1.0920 breaks through it — 120 pips",
        "s3": "Fibonacci levels on the impulse: 38.2%, 50%, 61.8% (1.0846), 78.6%",
        "s4": "The pullback stops at 61.8% — right on the old resistance",
        "s5": "Buy 1.0852 · stop 1.0825 below 78.6% · target 1.0940 · plan 1 : 3.3",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(4, 5, "s1").fade("old", "s1", 10).hold("s1", 20)
    tl.candles_to(12, 4, "s2").hold("s2", 20)
    tl.fade("fib", "s3", 10).hold("s3", 30)
    tl.candles_to(17, 6, "s4").hold("s4", 25)
    tl.fade("position", "s5", 10).candles_to(d.N, 5, "s5").hold("s5", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("pullbacks-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
