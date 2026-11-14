"""Explainer video: the bull flag. Reuses flag_chart.build()."""

import shutil
import sys

import flag_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("pole", "flag", "break", "position")


def captions(t):
    return {
        "intro": "<b>Continuation</b> — the trend pauses, then carries on",
        "s1": "<b>Flagpole</b>: a fast 80-pip rally, 1.2600 → 1.2680",
        "s2": "<b>Flag</b>: a small channel sloping down, retracing only 38% of the pole",
        "s3": "A candle closes above the flag → buy 1.2674",
        "s4": "Stop 1.2645 below the flag · target = entry + 80-pip pole = 1.2754 · plan 1 : 2.8",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_TOP + 1, 4, "s1").fade("pole", "s1", 10).hold("s1", 25)
    tl.candles_to(d.I_FLAG_END + 1, 5, "s2").fade("flag", "s2", 10).hold("s2", 30)
    tl.candles_to(d.I_BREAK + 1, 10, "s3").fade("break", "s3", 10).hold("s3", 25)
    tl.fade("position", "s4", 10).candles_to(d.N, 5, "s4").hold("s4", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("continuation-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
