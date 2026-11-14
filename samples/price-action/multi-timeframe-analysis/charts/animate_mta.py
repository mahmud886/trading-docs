"""Explainer video: top-down multi-timeframe analysis. Reuses mta_chart.build()."""

import shutil
import sys

import mta_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("p1", "p2", "p3", "trade")


def captions(t):
    return {
        "intro": "<b>Multi-timeframe analysis</b> — start high, finish low",
        "s1": "<b>① Daily</b>: higher highs and lows — the bias is up; price pulls back toward 1.0875 – 1.0885",
        "s2": "<b>② 4H</b>: the pullback reaches the demand zone — the setup",
        "s3": "<b>③ 15m</b>: a CHOCH above 1.0889, then a retrace to the order block — the trigger",
        "s4": "Buy 1.0883 · stop 1.0868 · target 1.0945 · plan 1 : 4.1",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(len(d.D), 2, "s1").fade("p1", "s1", 10).hold("s1", 35)
    tl.fade("p2", "s2", 12).hold("s2", 35)
    tl.fade("p3", "s3", 12).hold("s3", 35)
    tl.fade("trade", "s4", 10).hold("s4", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("multi-timeframe-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
