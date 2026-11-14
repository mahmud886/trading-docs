"""Explainer video: one Initial Balance, three outcomes. Reuses ib_chart.build()."""

import shutil
import sys

import ib_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("ib", "ext", "note_a", "note_b", "note_c")


def captions(t):
    return {
        "intro": "<b>Initial Balance</b> — the first hour's range, and three ways the day can treat it",
        "s0": "The first hour, 9:30 – 10:30: a 10-pip range, 1.0856 – 1.0866",
        "s1": "Reference: one IB width above and below gives extension levels, 1.0876 and 1.0846",
        "sa": "A: a close above the IB high, a retest that holds, and an extension up",
        "sb": "B: a close above, then back inside — the break fails and price falls through the IB low",
        "sc": "C: no close outside the IB — a balanced day so far",
        "end": "Wait for closes outside the IB, and decide beforehand what would prove you wrong",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.N_IB, 8, "s0").fade("ib", "s0", 10).hold("s0", 20)
    tl.fade("ext", "s1", 10).hold("s1", 25)
    span = d.N - d.N_IB
    tl.candles_to(d.N_IB + span, 8, "sa").fade("note_a", "sa", 10).hold("sa", 20)
    tl.candles_to(d.N_IB + 2 * span, 8, "sb").fade("note_b", "sb", 10).hold("sb", 20)
    tl.candles_to(d.N_IB + 3 * span, 8, "sc").fade("note_c", "sc", 10).hold("sc", 20)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("ib-explainer", d.build, timeline(), captions, out_dir=OUT, themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
