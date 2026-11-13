"""Explainer video: the session liquidity chain. Reuses chain_chart.build()."""

import shutil
import sys

import chain_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("pdh", "asia", "london", "lh", "position", "ny")


def captions(t):
    return {
        "intro": "<b>Session liquidity</b> — each session targets the last one's highs and lows",
        "s0": "Bias bullish: the draw is the previous day's high, 1.1050",
        "s1": "Asian session, 6 AM – 12 PM BD: ASH 1.1012, ASL 1.0992",
        "s2": "<b>①</b> London takes the Asian low, leaving a bullish OB",
        "s3": "<b>②</b> …then displaces through the Asian high: London high 1.1030",
        "s4": "<b>③</b> NY returns to the London OB → buy 1.0980 · stop 1.0962",
        "s5": "<b>④</b> NY takes the London high, drawing toward the PDH · plan 1 : 3.9",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("pdh", "s0", 10).hold("s0", 25)
    tl.candles_to(6, 4, "s1").fade("asia", "s1", 10).hold("s1", 20)
    tl.candles_to(8, 10, "s2").fade("london", "s2", 10).hold("s2", 20)
    tl.candles_to(10, 10, "s3").fade("lh", "s3", 10).hold("s3", 25)
    tl.candles_to(13, 8, "s4").fade("position", "s4", 10).hold("s4", 30)
    tl.candles_to(d.N, 8, "s5").fade("ny", "s5", 10).hold("s5", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("session-liquidity-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
