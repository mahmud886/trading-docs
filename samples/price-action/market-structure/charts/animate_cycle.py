"""Explainer video: one market structure cycle. Reuses cycle_chart.build()."""

import shutil
import sys

import cycle_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("up", "range", "chochg", "down")


def captions(t):
    return {
        "intro": "<b>Market structure</b> — the pattern of swing highs and lows",
        "s1": "<b>Uptrend</b>: higher highs and higher lows; each break of a high is a bullish BOS",
        "s2": "<b>Range</b>: price stops making higher highs and moves sideways, 1.0884 – 1.0910",
        "s3": "<b>CHOCH</b>: a close below 1.0884 — the last higher low and the range low",
        "s4": "<b>Downtrend</b>: lower highs and lower lows; each break of a low is a bearish BOS",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(22, 2, "s1").fade("up", "s1", 10).hold("s1", 30)
    tl.candles_to(37, 2, "s2").fade("range", "s2", 10).hold("s2", 30)
    tl.candles_to(38, 8, "s3").fade("chochg", "s3", 10).hold("s3", 30)
    tl.candles_to(d.N, 2, "s4").fade("down", "s4", 10).hold("s4", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("market-structure-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
