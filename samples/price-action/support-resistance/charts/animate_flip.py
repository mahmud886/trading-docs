"""Explainer video: support, resistance and the flip. Reuses flip_chart.build()."""

import shutil
import sys

import flip_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("res", "sup", "wick", "flip", "position")


def captions(t):
    return {
        "intro": "<b>Support & resistance</b> — zones where price has turned before",
        "s1": "Price turns down near 1.0900 and up near 1.0840 — mark both as zones",
        "s2": "Four tests of resistance; one wick pokes to 1.0901 — the bodies define the zone",
        "s3": "A close above 1.0900 breaks resistance",
        "s4": "Price returns from above, dips into the zone and closes above it: the <b>flip</b>",
        "s5": "Buy 1.0905 · stop 1.0878 below the zone · target 1.0960 · plan 1 : 2.0",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(12, 3, "s1").fade("res", "s1", 10).fade("sup", "s1", 10).hold("s1", 25)
    tl.candles_to(18, 4, "s2").fade("wick", "s2", 10).hold("s2", 30)
    tl.candles_to(19, 8, "s3").fade("flip", "s3", 10).hold("s3", 25)
    tl.candles_to(23, 5, "s4").hold("s4", 25)
    tl.candles_to(24, 6, "s5").fade("position", "s5", 10).hold("s5", 20)
    tl.candles_to(d.N, 5, "s5").hold("s5", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("support-resistance-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
