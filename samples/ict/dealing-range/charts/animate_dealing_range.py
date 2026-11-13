"""
Explainer video: buying in discount — mark the weekly dealing range and its equilibrium, wait for a sweep and an MSS
in the discount half, buy the FVG CE, and target equilibrium then the range high.

Reuses eurusd_discount_buy.build() so the video always matches the static chart.
Writes output/dealing-range-explainer-{light,dark}.mp4 (1920x1080, 30 fps, H.264). Requires ffmpeg.

Usage: python animate_dealing_range.py [light|dark ...]   (default: both)
"""

import shutil
import sys

import eurusd_discount_buy as trade
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("range", "ssl", "sweep", "mss", "fvg", "entry", "position", "projection")


def idx(hhmm):
    return trade.CANDLES.index(by_time(trade.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Dealing Range</b> — buy in discount, sell in premium",
        "s0": "Weekly range 1.0750 – 1.0950 · <b>equilibrium 1.0850</b> · price below it = <b>discount</b>",
        "s1": "In discount we only look for buys. Lows near 1.0770 hold sell stops (SSL)",
        "s2": step("①", "<b>Sweep</b>: 12:15 PM BD, price takes the SSL to 1.0765 and closes back above"),
        "s3": step("②", "<b>MSS</b>: a 20-pip displacement closes above the 1.0784 lower high · FVG 1.0785 – 1.0795"),
        "s4": step("③", "<b>Enter</b>: 1:30 PM BD, first touch of the CE → buy 1.0790"),
        "s5": "<b>Targets from the range</b>: TP1 equilibrium 1.0850 (1 : 2) · TP2 range high 1.0950 (1 : 5.3)",
        "s6": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 36)
    tl.fade("range", "s0", 16).hold("s0", 40)
    tl.candles_to(idx("12:15"), 4, "s1").fade("ssl", "s1", 10).hold("s1", 20)
    tl.candles_to(idx("12:30"), 14, "s2").fade("sweep", "s2", 10).hold("s2", 30)
    tl.candles_to(idx("13:15"), 10, "s3").fade("mss", "s3", 10).fade("fvg", "s3", 10).hold("s3", 35)
    tl.candles_to(idx("13:45"), 10, "s4").fade("entry", "s4", 10).hold("s4", 30)
    tl.fade("position", "s5", 12).candles_to(len(trade.CANDLES), 7, "s5").hold("s5", 40)
    tl.fade("projection", "s6", 10).hold("s6", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("dealing-range-explainer", trade.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0985)


if __name__ == "__main__":
    main()
