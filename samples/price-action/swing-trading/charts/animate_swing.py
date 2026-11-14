"""Explainer video: a daily swing trade. Reuses swing_chart.build()."""

import shutil
import sys

import swing_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("zone", "flip", "retest", "position", "size")


def captions(t):
    return {
        "intro": "<b>Swing trading</b> — daily setups, held for days",
        "s1": "Daily resistance at 1.2580 – 1.2600 rejects price twice",
        "s2": "A daily close above it: the zone becomes support",
        "s3": "The retest dips into the zone and closes above; 4H confirms → buy 1.2615",
        "s4": "Stop 1.2555 (60 pips) · target the next daily level 1.2800 · plan 1 : 3.1",
        "s5": "Wider stop, smaller size: 100 USD ÷ (60 × 10 USD) ≈ 0.16 lots",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_BREAK, 3, "s1").fade("zone", "s1", 10).hold("s1", 20)
    tl.candles_to(d.I_BREAK + 3, 6, "s2").fade("flip", "s2", 10).hold("s2", 20)
    tl.candles_to(d.I_FILL + 1, 6, "s3").fade("retest", "s3", 10).hold("s3", 25)
    tl.fade("position", "s4", 10).candles_to(d.N, 5, "s4").hold("s4", 20)
    tl.fade("size", "s5", 10).hold("s5", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("swing-trading-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
