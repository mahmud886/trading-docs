"""Explainer video: the ICT time map in BD time. Reuses time_map.build()."""

import shutil
import sys

import time_map as tm
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("kz", "sb", "macro", "example")


def captions(t):
    return {
        "intro": "<b>Time and price</b> — when to look, in Bangladesh time",
        "s1": "<b>Kill zones</b>: London 12 – 3 PM, NY AM 5 – 8 PM (US summer)",
        "s2": "<b>Silver Bullet</b>: one hour inside or after each kill zone",
        "s3": "<b>Macros</b>: 20 – 30 minute windows for the final entry",
        "s4": "Time first, then price: the setup must form <b>in</b> the window",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("kz", "s1", 15).hold("s1", 60)
    tl.fade("sb", "s2", 15).hold("s2", 60)
    tl.fade("macro", "s3", 15).hold("s3", 60)
    tl.fade("example", "s4", 15).hold("s4", 90)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("time-map-explainer", tm.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
