"""Explainer video: trend strength and exhaustion. Reuses trend_chart.build()."""

import shutil
import sys

import trend_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("ema", "tl", "strong", "exhaust")


def captions(t):
    return {
        "intro": "<b>Trend analysis</b> — is the trend strong, or ending?",
        "s1": "Higher highs, and pullbacks of only 38% and 40% — a strong uptrend",
        "s2": "The higher lows line up: a trendline · price stays above the 20 EMA",
        "s3": "Then an 80% pullback breaks the trendline and touches the 20 EMA",
        "s4": "A lower high at 1.2705 — buyers can't make a new high",
        "s5": "A close below the last higher low (1.2632): the uptrend is over",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(25, 2, "s1").fade("strong", "s1", 10).hold("s1", 25)
    tl.fade("tl", "s2", 10).fade("ema", "s2", 10).hold("s2", 25)
    tl.candles_to(30, 5, "s3").hold("s3", 25)
    tl.candles_to(36, 4, "s4").hold("s4", 20)
    tl.candles_to(d.N, 6, "s5").fade("exhaust", "s5", 10).hold("s5", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("trend-analysis-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
