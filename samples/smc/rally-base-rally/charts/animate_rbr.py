"""Explainer video: rally-base-rally. Reuses rbr_chart.build()."""

import shutil
import sys

import rbr_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("z1", "z2", "position")


def captions(t):
    return {
        "intro": "<b>Rally-base-rally</b> — demand that forms inside an uptrend",
        "s1": "<b>RBR ①</b>: rally, two small base candles, rally again · 1.0816 – 1.0824",
        "s2": "A pullback that doesn't reach it — the zone stays fresh",
        "s3": "<b>RBR ②</b>: the next pause · 1.0863 – 1.0870 · its leg-out breaks the 1.0862 high",
        "s4": "First return to RBR ② → buy 1.0870 · stop 1.0855 · target 1.0930 (plan 1 : 4.0)",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(6, 5, "s1").fade("z1", "s1", 10).hold("s1", 25)
    tl.candles_to(9, 6, "s2").hold("s2", 20)
    tl.candles_to(14, 6, "s3").fade("z2", "s3", 10).hold("s3", 30)
    tl.candles_to(17, 6, "s4").fade("position", "s4", 10).hold("s4", 20)
    tl.candles_to(d.N, 6, "s4").hold("s4", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("rally-base-rally-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
