"""Explainer video: volume as breakout confirmation. Reuses vol_chart.build()."""

import shutil
import sys

import vol_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("range", "fake", "real", "trade")


def captions(t):
    return {
        "intro": "<b>Volume</b> — is there real participation behind the move?",
        "s1": "A range under resistance at 1.0940; average tick volume about 1,280",
        "s2": "<b>Break 1</b>: a close above on only 900 — below average. It fails",
        "s3": "<b>Break 2</b>: a close above on 3,200 — 2.5× average. It holds",
        "s4": "The retest is quiet (1,050) → buy 1.0947 · stop 1.0928 · target 1.0985 · plan 1 : 2.0",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_FAKE, 3, "s1").fade("range", "s1", 10).hold("s1", 20)
    tl.candles_to(d.I_FAKE + 3, 6, "s2").fade("fake", "s2", 10).hold("s2", 25)
    tl.candles_to(d.I_BREAK + 2, 5, "s3").fade("real", "s3", 10).hold("s3", 25)
    tl.candles_to(d.I_RETEST + 1, 6, "s4").fade("trade", "s4", 10).candles_to(d.N, 5, "s4").hold("s4", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("volume-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
