"""Explainer video: three entry models and the break-even win rate. Reuses entries_chart.build()."""

import shutil
import sys

import entries_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("zone", "A", "B", "C")


def captions(t):
    return {
        "intro": "<b>Entry models</b> — the same short, three ways in",
        "s0": "Gold rallies into resistance at 2,420 – 2,425 · stop 2,428 · target 2,388",
        "sA": "<b>A</b> Risk entry: sell 2,420 — 1 : 4.0, needs only 20% winners to break even",
        "sB": "<b>B</b> Confirmation: sell the engulfing close at 2,414 — 1 : 1.9, needs 35%",
        "sC": "<b>C</b> Break-retest after the CHOCH: sell 2,412 — 1 : 1.5, needs 40%",
        "end": "More proof = worse price = a higher win rate needed. Know which you can deliver",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("zone", "s0", 10).candles_to(7, 4, "s0").hold("s0", 20)
    tl.candles_to(8, 8, "sA").fade("A", "sA", 10).hold("sA", 25)
    tl.candles_to(9, 8, "sB").fade("B", "sB", 10).hold("sB", 25)
    tl.candles_to(13, 6, "sC").fade("C", "sC", 10).hold("sC", 25)
    tl.candles_to(d.N, 5, "end").hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("entry-models-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
