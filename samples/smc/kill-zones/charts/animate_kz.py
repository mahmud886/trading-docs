"""Explainer video: one day through the SMC kill zones. Reuses kz_chart.build()."""

import shutil
import sys

import kz_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("asia", "pdh", "london", "ny", "lclose")


def captions(t):
    return {
        "intro": "<b>Kill zones</b> — one day in Bangladesh time (US summer)",
        "s1": "Asian range, 6 AM – 12 PM: mark the high (1.0870) and low (1.0850)",
        "s2": "<b>①</b> London KZ, 12 – 3 PM: the Asian low is swept, then price displaces up",
        "s3": "Between sessions, 3 – 5 PM: a pullback, no new direction",
        "s4": "<b>②</b> NY AM KZ, 5 – 8 PM: the move continues to the previous day's high",
        "s5": "<b>③</b> London close, 8 – 10 PM: profit-taking — then a quiet night",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("pdh", "s1", 8).candles_to(6, 4, "s1").fade("asia", "s1", 10).hold("s1", 25)
    tl.candles_to(9, 8, "s2").fade("london", "s2", 10).hold("s2", 30)
    tl.candles_to(11, 6, "s3").hold("s3", 20)
    tl.candles_to(14, 8, "s4").fade("ny", "s4", 10).hold("s4", 30)
    tl.candles_to(d.N, 3, "s5").fade("lclose", "s5", 10).hold("s5", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("smc-kill-zones-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
