"""Explainer video: equal highs and lows. Reuses eqh_chart.build()."""

import shutil
import sys

import eqh_chart as e
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("eqh", "eql", "sweep", "position", "run")


def captions(t):
    return {
        "intro": "<b>Equal highs and lows</b> — where stops stack up",
        "s1": "Two highs at the same price: buy stops pile up above",
        "s2": "Two lows at the same price: sell stops pile up below",
        "s3": "<b>①</b> The highs are swept to 1.0957 and rejected",
        "s4": "Sell 1.0942 · stop 1.0960 · target below the equal lows (1 : 2)",
        "s5": "<b>②</b> The equal lows are run: price closes through them",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(9, 4, "s1").fade("eqh", "s1", 10).hold("s1", 20)
    tl.candles_to(12, 6, "s2").fade("eql", "s2", 10).hold("s2", 20)
    tl.candles_to(15, 10, "s3").fade("sweep", "s3", 10).hold("s3", 30)
    tl.candles_to(16, 10, "s4").fade("position", "s4", 10).hold("s4", 30)
    tl.candles_to(len(e.C), 8, "s5").fade("run", "s5", 10).hold("s5", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("equal-highs-lows-explainer", e.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
