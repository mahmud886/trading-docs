"""Explainer video: the three pillars of price action. Reuses intro_chart.build()."""

import shutil
import sys

import intro_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("structure", "level", "signal", "position")


def captions(t):
    return {
        "intro": "<b>Price action</b> — reading a clean chart with three pillars",
        "s1": "<b>Pillar 1 · structure</b>: higher highs and higher lows = uptrend",
        "s2": "<b>Pillar 2 · key level</b>: 1.0880 rejects price twice, then breaks",
        "s3": "Price pulls back to the old resistance — now support",
        "s4": "<b>Pillar 3 · candle</b>: a bullish engulfing at the level",
        "s5": "Buy 1.0885 · stop 1.0850 · target the 1.0960 high · plan 1 : 2.1",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(15, 3, "s1").fade("structure", "s1", 10).hold("s1", 25)
    tl.fade("level", "s2", 10).hold("s2", 25)
    tl.candles_to(20, 6, "s3").hold("s3", 20)
    tl.candles_to(21, 8, "s4").fade("signal", "s4", 10).hold("s4", 25)
    tl.candles_to(22, 6, "s5").fade("position", "s5", 10).hold("s5", 20)
    tl.candles_to(d.N, 6, "s5").hold("s5", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("price-action-intro-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
