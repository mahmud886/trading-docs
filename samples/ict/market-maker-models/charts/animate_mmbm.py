"""Explainer video: Market Maker Buy Model. Reuses eurusd_mmbm.build()."""

import shutil
import sys

import eurusd_mmbm as mm
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("s1", "s2", "s3", "ote", "position", "s4", "s5")


def captions(t):
    return {
        "intro": "<b>Market Maker Buy Model</b> — the stages of a bullish cycle",
        "s1": "<b>①</b> Original consolidation: 1.0800 – 1.0830",
        "s2": "<b>②</b> Smart-money reversal: sell-side swept to 1.0785, then MSS",
        "s3": "<b>③</b> First leg up to 1.0880 leaves an FVG 1.0840 – 1.0855",
        "s4": "<b>④</b> Pullback to the FVG CE 1.0848 — above the OTE zone",
        "s5": "Stop 1.0780 below the reversal · target 1.0970 → planned 1 : 1.8",
        "s6": "<b>⑤</b> Second leg: expansion toward buy-side",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(5, 5, "s1").fade("s1", "s1", 10).hold("s1", 25)
    tl.candles_to(7, 12, "s2").fade("s2", "s2", 10).hold("s2", 30)
    tl.candles_to(9, 12, "s3").fade("s3", "s3", 10).hold("s3", 30)
    tl.candles_to(11, 12, "s4").fade("s4", "s4", 10).fade("ote", "s4", 10).hold("s4", 35)
    tl.fade("position", "s5", 10).hold("s5", 40)
    tl.candles_to(len(mm.CANDLES), 8, "s6").fade("s5", "s6", 10).hold("s6", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("mmbm-explainer", mm.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
