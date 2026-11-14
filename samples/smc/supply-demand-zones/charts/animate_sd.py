"""Explainer video: supply and demand zones. Reuses sd_chart.build()."""

import shutil
import sys

import sd_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("supply", "demand", "position")


def captions(t):
    return {
        "intro": "<b>Supply & demand zones</b> — the base before a fast move",
        "s1": "Rally, small base candles, fast drop: a <b>supply</b> zone, 1.0963 – 1.0975",
        "s2": "Drop, small base candles, fast rally: a <b>demand</b> zone, 1.0880 – 1.0891",
        "s3": "First return to demand → buy at the proximal line 1.0891 · stop 1.0875",
        "s4": "Target: the next opposing zone, supply at 1.0963 · plan 1 : 4.5",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(7, 5, "s1").fade("supply", "s1", 10).hold("s1", 30)
    tl.candles_to(13, 5, "s2").fade("demand", "s2", 10).hold("s2", 30)
    tl.candles_to(19, 6, "s3").fade("position", "s3", 10).hold("s3", 30)
    tl.candles_to(d.N, 6, "s4").hold("s4", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("supply-demand-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
