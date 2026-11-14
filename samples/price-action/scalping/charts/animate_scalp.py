"""Explainer video: an M1 scalp and the cost of the spread. Reuses scalp_chart.build()."""

import shutil
import sys

import scalp_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("levels", "reject", "position", "spread")


def captions(t):
    return {
        "intro": "<b>Scalping</b> — small, fast trades on the 1-minute chart",
        "s1": "From the M5 chart: support at 1.0850, swing high at 1.0865",
        "s2": "At 7:17 PM BD an M1 candle wicks to 1.0848 and closes back above support",
        "s3": "Buy 1.0853 · stop 1.0847 (6 pips) · target 1.0865 (12 pips) · 1 : 2.0 before costs",
        "s4": "A 1-pip spread turns it into 7 risked for 11 — about 1 : 1.6",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("levels", "s1", 10).candles_to(d.I_REJECT, 3, "s1").hold("s1", 20)
    tl.candles_to(d.I_REJECT + 1, 8, "s2").fade("reject", "s2", 10).hold("s2", 25)
    tl.fade("position", "s3", 10).candles_to(d.N, 4, "s3").hold("s3", 25)
    tl.fade("spread", "s4", 10).hold("s4", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("scalping-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
