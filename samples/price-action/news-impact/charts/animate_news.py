"""Explainer video: a news spike, a 30-minute wait, then the aftermath trade. Reuses news_chart.build()."""

import shutil
import sys

import news_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("pre", "news", "break", "position", "entry")


def captions(t):
    return {
        "intro": "<b>News impact</b> — don't trade the spike, trade what it leaves",
        "s0": "6:00 PM BD: EUR/USD sits in a 10-pip range before US CPI",
        "s1": "6:30 PM: one 5-minute candle runs +32 pips, then −54. Spreads widen, stops slip",
        "s2": "Wait 30 minutes. The news candle's high and low become the levels",
        "s3": "① 7:00 PM: the first close below the news-candle low",
        "s4": "② Sell the retest at 1.0856 · stop 1.0866 · target 1.0826 (planned 1 : 3.0)",
        "end": "No position into the release. Let it print, then read the structure it leaves",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_NEWS, 8, "s0").fade("pre", "s0", 10).hold("s0", 20)
    tl.candles_to(d.I_NEWS + 1, 2, "s1").fade("news", "s1", 10).hold("s1", 30)
    tl.candles_to(d.I_WAIT_END, 8, "s2").hold("s2", 20)
    tl.candles_to(d.I_BREAK + 1, 3, "s3").fade("break", "s3", 10).hold("s3", 25)
    tl.candles_to(d.I_FILL + 1, 4, "s4").fade("position", "s4", 10).fade("entry", "s4", 8).hold("s4", 25)
    tl.candles_to(d.N, 8, "end").hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("news-impact-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
