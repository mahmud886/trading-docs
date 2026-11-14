"""Explainer video: liquidity pools and a sweep. Reuses liq_chart.build()."""

import shutil
import sys

import liq_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("pools", "sweep", "position")


def captions(t):
    return {
        "intro": "<b>Liquidity</b> — where stop orders collect",
        "s1": "Equal highs at 1.1060 and equal lows at 1.1000 — obvious levels",
        "s2": "Buy stops rest above the highs (BSL); sell stops below the lows (SSL)",
        "s3": "A wick to 1.0985 runs the sell stops, then the candle closes back above 1.1000",
        "s4": "Buy 1.1005 · stop 1.0980 below the sweep · target the buy stops at 1.1060 · plan 1 : 2.2",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.EQL[1] + 1, 3, "s1").hold("s1", 20)
    tl.fade("pools", "s2", 10).hold("s2", 30)
    tl.candles_to(d.I_SWEEP + 1, 6, "s3").fade("sweep", "s3", 10).hold("s3", 30)
    tl.fade("position", "s4", 10).candles_to(d.N, 5, "s4").hold("s4", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("liquidity-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
