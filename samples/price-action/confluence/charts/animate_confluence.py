"""Explainer video: three independent factors overlap in one zone. Reuses confluence_chart.build()."""

import shutil
import sys

import confluence_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("res", "fib", "round", "zone", "notcounted", "position")


def captions(t):
    return {
        "intro": "<b>Confluence</b> — independent reasons at one price",
        "s1": "① Old resistance at 1.0850 – 1.0860 caps price twice",
        "s2": "Price breaks out: a new impulse from 1.0780 to 1.0960",
        "s3": "② The 61.8% retracement of that impulse is 1.0849",
        "s4": "③ And 1.0850 is a round number. Three reasons, one zone: 1.0845 – 1.0860",
        "s5": "RSI oversold isn't a fourth reason — it measures the same pullback",
        "s6": "Buy 1.0858 on the pullback · stop 1.0828 · target 1.0955 (planned 1 : 3.2)",
        "end": "Count factors that are independent, not indicators that repeat each other",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(8, 8, "s1").fade("res", "s1", 10).hold("s1", 20)
    tl.candles_to(d.I_HIGH + 1, 10, "s2").hold("s2", 15)
    tl.fade("fib", "s3", 10).hold("s3", 25)
    tl.fade("round", "s4", 10).fade("zone", "s4", 10).hold("s4", 25)
    tl.candles_to(d.I_FILL, 6, "s5").fade("notcounted", "s5", 10).hold("s5", 25)
    tl.candles_to(d.I_FILL + 1, 2, "s6").fade("position", "s6", 10).hold("s6", 25)
    tl.candles_to(d.N, 5, "end").hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("confluence-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
