"""Explainer video: fresh vs tested zones. Reuses touches_chart.build()."""

import shutil
import sys

import touches_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("zone", "t1", "t2", "t3", "ssl", "break")


def captions(t):
    return {
        "intro": "<b>Fresh vs tested</b> — each touch uses up part of the zone",
        "s0": "A demand zone forms: drop, base, fast rally · 1.2600 – 1.2614",
        "s1": "<b>①</b> First return (fresh): a 45-pip reaction",
        "s2": "<b>②</b> Second touch goes deeper: a 22-pip reaction",
        "s3": "<b>③</b> Third touch: only 10 pips — the lows keep stepping down",
        "s4": "Sell stops now sit just below the zone…",
        "s5": "<b>④</b> …and a close below 1.2600 ends the zone",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(7, 5, "s0").fade("zone", "s0", 10).hold("s0", 25)
    tl.candles_to(13, 6, "s1").fade("t1", "s1", 10).hold("s1", 25)
    tl.candles_to(17, 6, "s2").fade("t2", "s2", 10).hold("s2", 25)
    tl.candles_to(20, 6, "s3").fade("t3", "s3", 10).hold("s3", 25)
    tl.fade("ssl", "s4", 10).hold("s4", 25)
    tl.candles_to(d.N, 8, "s5").fade("break", "s5", 10).hold("s5", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("fresh-vs-tested-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
