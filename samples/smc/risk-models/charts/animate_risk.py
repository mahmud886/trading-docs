"""Explainer video: structural stop and position sizing. Reuses risk_chart.build()."""

import shutil
import sys

import risk_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("ob", "position", "sizing", "tight", "wick")


def captions(t):
    return {
        "intro": "<b>Risk models</b> — stop at invalidation, then size the position",
        "s1": "A bullish OB: full range 1.0852 – 1.0872",
        "s2": "Buy 1.0870 · structural stop 1.0845, beyond the OB's low · target 1.0920",
        "s3": "1% of 10,000 USD = 100 USD · 100 ÷ (25 pips × 10 USD) = <b>0.40 lots</b>",
        "s4": "A tight 8-pip stop at 1.0862 would allow 1.25 lots for the same 100 USD",
        "s5": "But a wick to 1.0855 takes it — the structural stop holds",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(4, 5, "s1").fade("ob", "s1", 10).hold("s1", 20)
    tl.candles_to(8, 6, "s2").fade("position", "s2", 10).hold("s2", 30)
    tl.fade("sizing", "s3", 10).hold("s3", 35)
    tl.fade("tight", "s4", 10).hold("s4", 30)
    tl.candles_to(9, 10, "s5").fade("wick", "s5", 10).hold("s5", 25)
    tl.candles_to(d.N, 6, "s5").hold("s5", 40)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("risk-models-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
