"""Explainer video: expiry pinning. Reuses pinning.build()."""

import shutil
import sys

import pinning as pn
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("strikes", "pin", "release")


def captions(t):
    return {
        "intro": "<b>Expiry pinning</b> — price sticks to a big strike into expiry",
        "s1": "Heavy open interest at 445, 450 and 455; 450 is the biggest",
        "s2": "Thursday: price keeps returning to 450",
        "s3": "Friday: the ranges shrink and price closes at 450.10",
        "s4": "Monday: those options have expired — price moves freely",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("strikes", "s1", 15).hold("s1", 35)
    tl.candles_to(7, 8, "s2").hold("s2", 25)
    tl.candles_to(14, 10, "s3").fade("pin", "s3", 10).hold("s3", 40)
    tl.candles_to(len(pn.CANDLES), 12, "s4").fade("release", "s4", 10).hold("s4", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("pinning-explainer", pn.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
