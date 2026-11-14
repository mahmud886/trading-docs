"""Explainer video: swing points and the swing failure pattern. Reuses swings_chart.build()."""

import shutil
import sys

import swings_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("minor", "major", "sfp", "position")


def captions(t):
    return {
        "intro": "<b>Swing highs and lows</b> — the turning points that build structure",
        "s1": "3-candle rule: a high above the candle on each side — many small swings",
        "s2": "5-candle rule: two lower highs on each side — only the major swings remain",
        "s3": "The major swing high at 1.0950: buy stops rest just above it",
        "s4": "<b>Swing failure</b>: a wick to 1.0958, then a close back below at 1.0942",
        "s5": "Sell 1.0940 · stop 1.0965 above the wick · target 1.0880 · plan 1 : 2.4",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_SFP, 2, "s1").fade("minor", "s1", 10).hold("s1", 30)
    tl.fade("major", "s2", 10).hold("s2", 30)
    tl.hold("s3", 25)
    tl.candles_to(d.I_SFP + 1, 10, "s4").fade("sfp", "s4", 10).hold("s4", 30)
    tl.candles_to(d.N, 8, "s5").fade("position", "s5", 10).hold("s5", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("swing-high-low-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
