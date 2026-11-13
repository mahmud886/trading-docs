"""Explainer video: Wyckoff phases in SMC terms. Reuses phases_chart.build()."""

import shutil
import sys

import phases_chart as p
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("pA", "pB", "pC", "pD", "pE")


def captions(t):
    return {
        "intro": "<b>Wyckoff and SMC</b> — the same picture, two vocabularies",
        "sA": "<b>Phase A</b>: the decline stops — selling climax and automatic rally",
        "sB": "<b>Phase B</b>: the range builds — internal liquidity, order blocks",
        "sC": "<b>Phase C</b>: the spring — a sell-side sweep",
        "sD": "<b>Phase D</b>: sign of strength = BOS; last point of support = OB retest",
        "sE": "<b>Phase E</b>: markup — the expansion",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    for g, cap, end in (("pA", "sA", 18), ("pB", "sB", 29), ("pC", "sC", 35), ("pD", "sD", 42), ("pE", "sE", p.N)):
        tl.candles_to(end, 3, cap).fade(g, cap, 10).hold(cap, 25)
    tl.hold("sE", 40)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("wyckoff-phases-explainer", p.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
