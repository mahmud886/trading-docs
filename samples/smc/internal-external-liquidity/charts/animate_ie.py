"""Explainer video: internal vs external liquidity. Reuses ie_chart.build()."""

import shutil
import sys

import ie_chart as ie
from _paths import OUT
from chartkit import THEMES, Timeline, render_video
from structure import IDX

GROUPS = ("external", "internal", "s1", "s2", "s3", "s4")


def captions(t):
    return {
        "intro": "<b>Internal vs external liquidity</b>",
        "s0": "External: the swing highs and lows of the range — targets",
        "s1": "Internal: gaps and zones inside the range — the path",
        "s2": "<b>①</b> The external high is taken",
        "s3": "<b>②–③</b> Price trades back into the internal gaps",
        "s4": "<b>④</b> The next external pool, 1.0822, is the next target",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 25)
    tl.candles_to(IDX["H3"] + 1, 3, "s0").fade("external", "s0", 12).hold("s0", 20)
    tl.fade("internal", "s1", 12).hold("s1", 25)
    tl.candles_to(IDX["H4"] + 1, 8, "s2").fade("s1", "s2", 10).hold("s2", 25)
    tl.candles_to(ie.R20 + 1, 8, "s3").fade("s2", "s3", 10)
    tl.candles_to(ie.N, 8, "s3").fade("s3", "s3", 10).hold("s3", 25)
    tl.fade("s4", "s4", 10).hold("s4", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("internal-external-explainer", ie.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
