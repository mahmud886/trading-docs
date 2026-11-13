"""Explainer video: bearish mitigation block. Reuses mitigation_chart.build()."""

import shutil
import sys

import mitigation_chart as m
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("ob", "fail", "break", "mb", "position", "retest")


def captions(t):
    return {
        "intro": "<b>Mitigation block</b> — a failed OB without a sweep",
        "s1": "<b>①</b> A bullish OB: the last down-close candle before the rally",
        "s2": "<b>②</b> The rally can't reach the old high — buyers are weak",
        "s3": "<b>③</b> Price closes below the OB",
        "s4": "<b>④</b> Retest from below → sell 1.0861 · stop 1.0870 · target 1.0820",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(m.I_OB + 2, 4, "s1").fade("ob", "s1", 10).hold("s1", 25)
    tl.candles_to(m.I_LH + 2, 8, "s2").fade("fail", "s2", 10).hold("s2", 30)
    tl.candles_to(m.I_BREAK + 1, 10, "s3").fade("break", "s3", 10).fade("mb", "s3", 10).hold("s3", 30)
    tl.candles_to(m.I_RETEST + 1, 8, "s4").fade("position", "s4", 10).fade("retest", "s4", 10).hold("s4", 25)
    tl.candles_to(len(m.C), 8, "s4").hold("s4", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("mitigation-explainer", m.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
