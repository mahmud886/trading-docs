"""Explainer video: bearish breaker. Reuses breaker_chart.build()."""

import shutil
import sys

import breaker_chart as b
from _paths import OUT
from chartkit import THEMES, Timeline, render_video
from structure import CHOCH, IDX

GROUPS = ("ob", "sweep", "break", "breaker", "position", "retest")
X0 = b.X0


def captions(t):
    return {
        "intro": "<b>Breaker block</b> — when an order block fails",
        "s1": "<b>①</b> A bullish OB: the last down-close candle before the rally",
        "s2": "<b>②</b> The rally sweeps the high at 1.0925, then turns",
        "s3": "<b>③</b> Price closes below the whole OB — it has failed",
        "s4": "The failed OB is now a <b>bearish breaker</b>",
        "s5": "<b>④</b> Retest from below → sell 1.0903 · stop 1.0914 · target 1.0850",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(b.I_OB - X0 + 2, 4, "s1").fade("ob", "s1", 10).hold("s1", 25)
    tl.candles_to(IDX["H4"] - X0 + 1, 8, "s2").fade("sweep", "s2", 10).hold("s2", 25)
    tl.candles_to(CHOCH - X0 + 1, 10, "s3").fade("break", "s3", 10).hold("s3", 25)
    tl.fade("breaker", "s4", 12).hold("s4", 25)
    tl.candles_to(IDX["LH"] - X0 + 1, 8, "s5").fade("position", "s5", 10).fade("retest", "s5", 10).hold("s5", 30)
    tl.candles_to(len(b.C), 8, "s5").hold("s5", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("breaker-explainer", b.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
