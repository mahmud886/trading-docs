"""Explainer video: zone strength scoring. Reuses score_chart.build()."""

import shutil
import sys

import score_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("zA", "zB", "card", "bfail", "position")


def captions(t):
    return {
        "intro": "<b>Zone strength scoring</b> — grade a zone before you trade it",
        "s1": "<b>Zone A</b>: one base candle, then displacement with an FVG that breaks the high",
        "s2": "<b>Zone B</b>: four base candles, a slow leg-out, in premium",
        "s3": "Score both, 0–2 per factor: <b>A 10/10 · B 4/10</b>",
        "s4": "B (4/10) is touched twice, then closes below its distal line",
        "s5": "A (10/10), first touch → buy 1.0838 · stop 1.0822 · target 1.0900 (plan 1 : 3.9)",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(6, 5, "s1").fade("zA", "s1", 10).hold("s1", 25)
    tl.candles_to(14, 5, "s2").fade("zB", "s2", 10).hold("s2", 25)
    tl.fade("card", "s3", 10).hold("s3", 40)
    tl.candles_to(19, 6, "s4").fade("bfail", "s4", 10).hold("s4", 25)
    tl.candles_to(22, 8, "s5").fade("position", "s5", 10).hold("s5", 20)
    tl.candles_to(d.N, 6, "s5").hold("s5", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("zone-scoring-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
