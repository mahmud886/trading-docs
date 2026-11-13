"""Explainer video: reading put/call ratio extremes. Reuses pcr.build()."""

import shutil
import sys

import pcr
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("ratio", "bands", "marks")


def captions(t):
    return {
        "intro": "<b>Put/call ratio</b> — a sentiment gauge",
        "s1": "The ratio rises as traders buy puts for protection",
        "s2": "Very high = fear, very low = complacency",
        "s3": "Extremes can last for days while price keeps going",
        "s4": "The turn came when the ratio <b>fell back</b> from the extreme — wait for that",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("ratio", "s1", 15).hold("s1", 50)
    tl.fade("bands", "s2", 15).hold("s2", 50)
    tl.fade("marks", "s3", 15).hold("s3", 60).hold("s4", 75)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("pcr-explainer", pcr.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
