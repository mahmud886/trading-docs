"""Explainer video: the two-candle fakeout trap. Reuses trap_chart.build()."""

import shutil
import sys

import trap_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("range", "trap", "engulf", "position")


def captions(t):
    return {
        "intro": "<b>Fakeouts</b> — breakouts that fail",
        "s1": "EUR/USD ranges between 1.0875 and 1.0931",
        "s2": "<b>①</b> Two candles close above resistance — breakout buyers join",
        "s3": "<b>②</b> One large candle closes back inside and engulfs both — they're trapped",
        "s4": "<b>③</b> Price retraces to the old level → sell 1.0938 · stop 1.0968 above the high",
        "s5": "Target the range bottom area, 1.0870 · plan 1 : 2.3",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_B1, 2, "s1").fade("range", "s1", 10).hold("s1", 20)
    tl.candles_to(d.I_B2 + 1, 10, "s2").fade("trap", "s2", 10).hold("s2", 25)
    tl.candles_to(d.I_TRAP + 1, 10, "s3").fade("engulf", "s3", 10).hold("s3", 30)
    tl.candles_to(d.I_FILL + 1, 8, "s4").fade("position", "s4", 10).hold("s4", 25)
    tl.candles_to(d.N, 6, "s5").hold("s5", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("fakeouts-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
