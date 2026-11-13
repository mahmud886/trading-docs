"""Explainer video: gamma exposure and the flip. Reuses gex.build()."""

import shutil
import sys

import gex
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("strikes", "curve", "flip")


def captions(t):
    return {
        "intro": "<b>Gamma exposure</b> — are dealers dampening moves or chasing them?",
        "s1": "Per strike: calls add positive gamma, puts negative (common convention)",
        "s2": "Sum it for every possible spot price",
        "s3": f"Above the flip (~{gex.FLIP:,.0f}) dealers dampen moves; below it they chase them",
        "s4": "Spot 4,500 is above the flip → expect calmer, range-bound trade",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("strikes", "s1", 15).hold("s1", 60)
    tl.fade("curve", "s2", 15).hold("s2", 45)
    tl.fade("flip", "s3", 15).hold("s3", 60).hold("s4", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("gex-explainer", gex.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
