"""Explainer video: three execution models. Reuses models_chart.build()."""

import shutil
import sys

import models_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("ob", "m1", "m2", "m3")


def captions(t):
    return {
        "intro": "<b>Execution models</b> — same POI, three ways in",
        "s0": "Price rallies into a 1H bearish OB: 1.0950 – 1.0960 · target 1.0880",
        "s1": "<b>1</b> Risk entry: sell limit at 1.0950, stop 1.0963 — 1 : 5.4, no proof",
        "s2": "<b>2</b> Confirmation: sell the CHOCH close at 1.0928, same stop — 1 : 1.4",
        "s3": "<b>3</b> Refined: sell the CHOCH's FVG at 1.0938, stop above the lower high — 1 : 3.6",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(4, 5, "s0").fade("ob", "s0", 10).hold("s0", 25)
    tl.candles_to(5, 8, "s1").fade("m1", "s1", 10).hold("s1", 30)
    tl.candles_to(9, 8, "s2").fade("m2", "s2", 10).hold("s2", 30)
    tl.candles_to(11, 8, "s3").fade("m3", "s3", 10).hold("s3", 30)
    tl.candles_to(d.N, 6, "s3").hold("s3", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("execution-models-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
