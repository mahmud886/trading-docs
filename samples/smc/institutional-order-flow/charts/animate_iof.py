"""Explainer video: order flow. Reuses iof_chart.build()."""

import shutil
import sys

import iof_chart as o
from _paths import OUT
from chartkit import THEMES, Timeline, render_video
from structure import BOS1, BOS2, CHOCH

GROUPS = ("ob1", "ob2", "ob3", "flip")


def captions(t):
    return {
        "intro": "<b>Order flow</b> — which side's zones are holding?",
        "s1": "OB 1 holds on the pullback, then a BOS: bullish order flow",
        "s2": "OB 2 holds, another BOS: still bullish",
        "s3": "OB 3 is closed through: the bullish zones stop holding",
        "s4": "Order flow is now bearish — look for sells at bearish zones",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(BOS1 + 1, 4, "s1").fade("ob1", "s1", 10).hold("s1", 25)
    tl.candles_to(BOS2 + 1, 5, "s2").fade("ob2", "s2", 10).hold("s2", 25)
    tl.candles_to(CHOCH + 1, 6, "s3").fade("ob3", "s3", 10).hold("s3", 30)
    tl.candles_to(o.N, 6, "s4").fade("flip", "s4", 10).hold("s4", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("order-flow-explainer", o.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
