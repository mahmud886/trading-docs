"""Explainer video: how max pain is found. Reuses max_pain.build()."""

import shutil
import sys

import max_pain as mp
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("calls", "puts", "total", "min")


def captions(t):
    return {
        "intro": "<b>Max pain</b> — where expiring options are worth least",
        "s1": "Calls pay out more the higher price settles",
        "s2": "Puts pay out more the lower price settles",
        "s3": "Add them up for every possible settlement price",
        "s4": f"The lowest total is max pain: <b>{mp.MAX_PAIN:g}</b> here",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("calls", "s1", 15).hold("s1", 50)
    tl.fade("puts", "s2", 15).hold("s2", 50)
    tl.fade("total", "s3", 15).hold("s3", 50)
    tl.fade("min", "s4", 15).hold("s4", 80)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("max-pain-explainer", mp.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
