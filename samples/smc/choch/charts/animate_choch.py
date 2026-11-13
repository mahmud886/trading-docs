"""Explainer video: bearish CHOCH. Reuses choch_chart.build()."""

import shutil
import sys

import choch_chart as cc
from _paths import OUT
from chartkit import THEMES, Timeline, render_video
from structure import BOS_DN, CHOCH, IDX

GROUPS = ("trend", "choch", "lh", "bos")


def captions(t):
    return {
        "intro": "<b>Change of character</b> — the first sign a trend may end",
        "s1": "Uptrend: higher highs and higher lows",
        "s2": "<b>① CHOCH</b>: the first close below the last higher low",
        "s3": "<b>②</b> The bounce stalls at a lower high",
        "s4": "<b>③</b> A bearish BOS below the new low confirms the downtrend",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(IDX["H4"] - 14 + 2, 4, "s1").fade("trend", "s1", 10).hold("s1", 25)
    tl.candles_to(CHOCH - 14 + 2, 10, "s2").fade("choch", "s2", 10).hold("s2", 35)
    tl.candles_to(IDX["LH"] - 14 + 2, 8, "s3").fade("lh", "s3", 10).hold("s3", 30)
    tl.candles_to(len(cc.C), 8, "s4").fade("bos", "s4", 10).hold("s4", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("choch-explainer", cc.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
