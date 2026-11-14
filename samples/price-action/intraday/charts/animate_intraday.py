"""Explainer video: an intraday FVG trade across London and New York. Reuses intraday_chart.build()."""

import shutil
import sys

import intraday_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("sessions", "fvg", "position")


def captions(t):
    return {
        "intro": "<b>Intraday</b> — one day, one direction, closed by the end of the session",
        "s1": "Bullish daily bias. London opens at 12:00 PM BD and drives up from 1.0850",
        "s2": "The impulse leaves a fair value gap, 1.0867 – 1.0879; London tops at 1.0906",
        "s3": "New York (from 5:00 PM BD) retraces into the gap → buy 1.0874 · stop 1.0858",
        "s4": "Target just above the London high, 1.0912 · plan 1 : 2.4 · flat before the session ends",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("sessions", "s1", 10).candles_to(d.IMPULSE[1], 4, "s1").hold("s1", 20)
    tl.candles_to(d.I_NY, 3, "s2").fade("fvg", "s2", 10).hold("s2", 25)
    tl.candles_to(d.I_FILL + 1, 6, "s3").fade("position", "s3", 10).hold("s3", 25)
    tl.candles_to(d.N, 5, "s4").hold("s4", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("intraday-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
