"""Explainer video: liquidity → imbalance → liquidity. Reuses delivery_sequence.build()."""

import shutil
import sys

import delivery_sequence as ds
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("pools", "a", "imb", "fill", "b")


def captions(t):
    return {
        "intro": "<b>Algorithmic delivery</b> — from one pool of liquidity to the next",
        "s0": "Two pools form: equal highs above, equal lows below",
        "s1": "<b>①</b> Pool A (sell-side) is swept",
        "s2": "<b>②</b> The reversal leaves an imbalance — an FVG",
        "s3": "<b>③</b> Price comes back to rebalance it",
        "s4": "<b>④</b> Then it delivers to pool B (buy-side)",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(9, 5, "s0").fade("pools", "s0", 10).hold("s0", 30)
    tl.candles_to(10, 12, "s1").fade("a", "s1", 10).hold("s1", 25)
    tl.candles_to(13, 10, "s2").fade("imb", "s2", 10).hold("s2", 30)
    tl.candles_to(16, 10, "s3").fade("fill", "s3", 10).hold("s3", 25)
    tl.candles_to(len(ds.CANDLES), 10, "s4").fade("b", "s4", 10).hold("s4", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("delivery-explainer", ds.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
