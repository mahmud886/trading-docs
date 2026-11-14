"""Explainer video: three ways to manage one trade. Reuses mgmt_chart.build()."""

import shutil
import sys

import mgmt_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("levels", "pull", "results")


def captions(t):
    return {
        "intro": "<b>Trade management</b> — what you do between entry and exit",
        "s1": "Long 1.0850 · stop 1.0830 (1R = 20 pips) · targets at 1R, 2R and 3R",
        "s2": "Price reaches 1.8R, then pulls back to 1.0849",
        "s3": "With a break-even stop the trade closes at 0R; with 50% taken at 1R, +0.5R is banked",
        "s4": "Then price runs to 3R: holding made +3R. Same path, three results — each choice has a cost",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("levels", "s1", 10).candles_to(1, 4, "s1").hold("s1", 20)
    tl.candles_to(10, 4, "s2").hold("s2", 20)
    tl.candles_to(12, 6, "s3").fade("pull", "s3", 10).hold("s3", 30)
    tl.candles_to(d.N, 4, "s4").fade("results", "s4", 10).hold("s4", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("trade-management-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
