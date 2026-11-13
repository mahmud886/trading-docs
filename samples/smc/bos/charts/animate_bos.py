"""Explainer video: break of structure. Reuses bos_chart.build()."""

import shutil
import sys

import bos_chart as b
from _paths import OUT
from chartkit import THEMES, Timeline, render_video
from structure import BOS1, BOS2, IDX

GROUPS = ("swings", "bos1", "bos2", "wick")


def captions(t):
    return {
        "intro": "<b>Break of structure</b> — how a trend confirms itself",
        "s1": "Mark the swings: highs and lows",
        "s2": "<b>BOS ①</b>: a candle closes above the last high",
        "s3": "A higher low, then <b>BOS ②</b>: another close above the high",
        "s4": "A wick above 1.0925 that closes back below is <b>not</b> a BOS — it's a liquidity grab",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(IDX["H1"] + 3, 4, "s1").fade("swings", "s1", 10).hold("s1", 15)
    tl.candles_to(BOS1 + 1, 8, "s2").fade("bos1", "s2", 10).hold("s2", 30)
    tl.candles_to(BOS2 + 1, 6, "s3").fade("bos2", "s3", 10).hold("s3", 30)
    tl.candles_to(len(b.C), 8, "s4").fade("wick", "s4", 10).hold("s4", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("bos-explainer", b.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
