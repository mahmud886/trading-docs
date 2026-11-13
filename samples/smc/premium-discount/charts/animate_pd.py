"""Explainer video: premium and discount. Reuses pd_chart.build()."""

import shutil
import sys

import pd_chart as p
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("range", "prem", "disc", "position", "entry")


def captions(t):
    return {
        "intro": "<b>Premium and discount</b> — where in the range are you buying?",
        "s1": "The leg: 1.0800 → 1.1000. Its 50% is 1.0900",
        "s2": "Above 50% is premium, below is discount",
        "s3": "A bullish OB in premium: price closes straight through it",
        "s4": "A bullish OB in discount, at the top of OTE: it holds → buy 1.0874",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(p.I_HIGH + 1, 4, "s1").hold("s1", 15)
    tl.fade("range", "s2", 15).hold("s2", 30)
    tl.candles_to(p.I_FAIL + 1, 8, "s3").fade("prem", "s3", 10).hold("s3", 35)
    tl.candles_to(p.I_FILL + 1, 8, "s4").fade("disc", "s4", 10).fade("position", "s4", 10).fade("entry", "s4", 10)
    tl.hold("s4", 25).candles_to(len(p.C), 8, "s4").hold("s4", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("premium-discount-explainer", p.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
