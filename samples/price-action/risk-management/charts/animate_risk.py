"""Explainer video: the same trades at 1%, 2% and 5% risk. Reuses risk_chart.build()."""

import shutil
import sys

import risk_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("streak",)


def captions(t):
    return {
        "intro": "<b>Risk per trade</b> — the same 40 trades at 1%, 2% and 5%",
        "s1": "40% winners at 1 : 2 — a small positive edge",
        "s2": "Then 7 losses in a row: at 5% the account falls about 30%",
        "s3": "A 30% drawdown needs a 43% gain just to get back — at 1% it was only 7%",
        "s4": "Higher risk means bigger swings both ways. Survive the streaks first",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(8, 3, "s1").hold("s1", 20)
    tl.candles_to(15, 4, "s2").fade("streak", "s2", 10).hold("s2", 35)
    tl.candles_to(26, 3, "s3").hold("s3", 30)
    tl.candles_to(d.N + 1, 3, "s4").hold("s4", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("risk-management-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
