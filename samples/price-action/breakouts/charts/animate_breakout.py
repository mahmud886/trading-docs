"""Explainer video: a range breakout and retest. Reuses breakout_chart.build()."""

import shutil
import sys

import breakout_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("range", "break", "position")


def captions(t):
    return {
        "intro": "<b>Breakouts</b> — when price leaves a range",
        "s1": "USD/JPY ranges between 149.50 and 150.50 — a 100-pip range",
        "s2": "A large candle <b>closes</b> above 150.50: the breakout",
        "s3": "Price pulls back to the old range top, dips to 150.48 and closes above it",
        "s4": "Buy 150.55 · stop 150.30 · target = range top + height = 151.50 · plan 1 : 3.8",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_BREAK, 2, "s1").fade("range", "s1", 10).hold("s1", 25)
    tl.candles_to(d.I_BREAK + 1, 10, "s2").fade("break", "s2", 10).hold("s2", 25)
    tl.candles_to(d.I_RETEST + 1, 6, "s3").hold("s3", 25)
    tl.fade("position", "s4", 10).candles_to(d.N, 5, "s4").hold("s4", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("breakouts-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
