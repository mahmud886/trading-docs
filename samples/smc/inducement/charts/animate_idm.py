"""Explainer video: bullish inducement. Reuses idm_chart.build()."""

import shutil
import sys

import idm_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("ob", "idm", "take", "position", "entry", "choch")


def captions(t):
    return {
        "intro": "<b>Inducement</b> — the obvious level before the real one",
        "s1": "A bullish OB starts the rally: 1.0850 – 1.0856",
        "s2": "On the pullback, a minor low forms at 1.0870 — the obvious level",
        "s3": "<b>①</b> 1.0870 breaks: it looks bearish, but it's the inducement",
        "s4": "<b>②</b> Price reaches the real OB → buy 1.0855 · stop 1.0842",
        "s5": "<b>③</b> CHOCH above 1.0893 confirms · target 1.0950",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(3, 6, "s1").fade("ob", "s1", 10).hold("s1", 20)
    tl.candles_to(11, 5, "s2").fade("idm", "s2", 10).hold("s2", 25)
    tl.candles_to(13, 10, "s3").fade("take", "s3", 10).hold("s3", 30)
    tl.candles_to(14, 10, "s4").fade("position", "s4", 10).fade("entry", "s4", 10).hold("s4", 30)
    tl.candles_to(len(d.C), 8, "s5").fade("choch", "s5", 10).hold("s5", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("inducement-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
