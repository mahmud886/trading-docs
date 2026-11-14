"""Explainer video: managing a trend trade with a trailing stop. Reuses trail_chart.build()."""

import shutil
import sys

import trail_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("structure", "entry", "step0", "partial", "step1", "step2", "exit")


def captions(t):
    return {
        "intro": "<b>Trend trading</b> — enter with the trend, then let it work",
        "s1": "Lower highs and lower lows: a downtrend. Sell the first lower high at 1.0970",
        "s2": "Initial stop 1.0985 above the LH (15 pips) · half is closed at 2R, 1.0940",
        "s3": "After a new lower low breaks structure, trail the stop above the new LH: 1.0950",
        "s4": "Another BOS → trail again to 1.0917",
        "s5": "The rally hits the trailed stop: the rest closes +53 pips (3.5R) — the trend has paused",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_ENTRY + 1, 4, "s1").fade("structure", "s1", 8).fade("entry", "s1", 8).hold("s1", 25)
    tl.fade("step0", "s2", 8).candles_to(12, 5, "s2").fade("partial", "s2", 8).hold("s2", 20)
    tl.candles_to(16, 5, "s3").fade("step1", "s3", 8).hold("s3", 20)
    tl.candles_to(23, 5, "s4").fade("step2", "s4", 8).hold("s4", 20)
    tl.candles_to(d.N, 5, "s5").fade("exit", "s5", 10).hold("s5", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("trend-trading-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
