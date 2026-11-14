"""Explainer video: the fight inside a hammer. Reuses inside_chart.build()."""

import shutil
import sys

import inside_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("support", "sellers", "absorb", "buyers", "h1")


def captions(t):
    return {
        "intro": "<b>Candlestick psychology</b> — what happened inside one candle",
        "s0": "The hour opens at 1.0862, just above support at 1.0820 – 1.0830",
        "s1": "<b>①</b> Sellers push hard: five bearish 5m candles, 40 pips down",
        "s2": "<b>②</b> At support the selling stops at 1.0822 — buyers absorb it",
        "s3": "<b>③</b> Buyers take it all back and close above the open, at 1.0866",
        "s4": "On the 1H chart all of this is one candle: a <b>hammer</b> at support",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("support", "s0", 10).hold("s0", 20)
    tl.candles_to(5, 6, "s1").fade("sellers", "s1", 10).hold("s1", 20)
    tl.candles_to(6, 8, "s2").fade("absorb", "s2", 10).hold("s2", 25)
    tl.candles_to(d.N, 5, "s3").fade("buyers", "s3", 10).hold("s3", 25)
    tl.fade("h1", "s4", 14).hold("s4", 55)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("candlestick-psychology-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
