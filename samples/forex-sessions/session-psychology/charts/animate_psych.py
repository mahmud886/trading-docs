"""Explainer video: one London open, three decisions. Reuses psych_chart.build()."""

import shutil
import sys

import psych_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("asia", "A", "B", "C", "Cnote")


def captions(t):
    return {
        "intro": "<b>Session psychology</b> — one London open, three decisions",
        "s0": "12:45 PM BD: EUR/USD sits inside the Asian range 1.0852 – 1.0872",
        "sa": "1:00 PM: the first spike jumps above the range. A chases it — fear of missing out",
        "sb": "The spike fails and price breaks the Asian low. B sells the break — and gets stopped on the turn",
        "sc": "C waited: a close back inside the range, then a retest → buy 1.0856 · stop 1.0841",
        "end": "A and B reacted to the candle. C followed a plan — and still risks 1R. That's the difference",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("asia", "s0", 10).candles_to(d.I_OPEN, 5, "s0").hold("s0", 15)
    tl.candles_to(d.I_OPEN + 1, 5, "sa").hold("sa", 15)
    tl.candles_to(d.I_A + 1, 6, "sa").fade("A", "sa", 10).hold("sa", 25)
    tl.candles_to(d.I_B + 1, 6, "sb").fade("B", "sb", 10).hold("sb", 25)
    tl.candles_to(d.I_FILL + 1, 6, "sc").fade("C", "sc", 10).fade("Cnote", "sc", 8).hold("sc", 25)
    tl.candles_to(d.N, 4, "end").hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("session-psychology-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
