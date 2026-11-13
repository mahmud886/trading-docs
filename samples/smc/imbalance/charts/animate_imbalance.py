"""Explainer video: imbalance types. Reuses imbalance_types.build()."""

import shutil
import sys

import imbalance_types as im
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("fvg", "vi", "void")


def captions(t):
    return {
        "intro": "<b>Imbalance</b> — price that traded only one way",
        "s1": "<b>Fair value gap</b>: candle 1 and candle 3 don't overlap",
        "s2": "<b>Volume imbalance</b>: a gap between bodies, wicks still overlap",
        "s3": "<b>Liquidity void</b>: a fast run of big candles",
        "s4": "Price often comes back to these areas — often, not always",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("fvg", "s1", 15).hold("s1", 50)
    tl.fade("vi", "s2", 15).hold("s2", 50)
    tl.fade("void", "s3", 15).hold("s3", 50)
    tl.hold("s4", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("imbalance-explainer", im.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
