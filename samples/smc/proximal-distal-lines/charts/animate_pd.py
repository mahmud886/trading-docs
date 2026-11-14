"""Explainer video: proximal and distal lines. Reuses pd_chart.build()."""

import shutil
import sys

import pd_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("zone", "alt", "levels", "A", "B", "C", "turn")


def captions(t):
    return {
        "intro": "<b>Proximal & distal lines</b> — where to enter inside a zone",
        "s1": "A drop-base-rally demand: proximal 1.0898 (highest body), distal 1.0882 (lowest wick)",
        "s2": "Some traders draw wick to wick: proximal at 1.0903 — a wider zone",
        "s3": "Same stop (1.0876) and target (1.0955) for every entry",
        "s4": "<b>A</b> proximal 1.0898 (1 : 2.6) · <b>B</b> 50% 1.0890 (1 : 4.6) · <b>C</b> deep 1.0885 (1 : 7.8)",
        "s5": "The return turns at 1.0888: A and B fill, C misses the trade",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(6, 5, "s1").fade("zone", "s1", 10).hold("s1", 30)
    tl.fade("alt", "s2", 10).hold("s2", 25)
    tl.candles_to(9, 6, "s3").fade("levels", "s3", 10).hold("s3", 20)
    tl.fade("A", "s4", 8).fade("B", "s4", 8).fade("C", "s4", 8).hold("s4", 35)
    tl.candles_to(11, 8, "s5").fade("turn", "s5", 10).hold("s5", 20)
    tl.candles_to(d.N, 6, "s5").hold("s5", 40)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("proximal-distal-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
