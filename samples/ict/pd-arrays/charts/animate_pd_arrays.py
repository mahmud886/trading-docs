"""
Explainer video: stacked PD arrays — after a sweep and an MSS, a bullish OB, a bullish FVG and the OTE zone line up
at one price, and the first return to it is the entry.

Reuses eurusd_pd_confluence.build() so the video always matches the static chart.
Writes output/pd-arrays-explainer-{light,dark}.mp4 (1920x1080, 30 fps, H.264). Requires ffmpeg.

Usage: python animate_pd_arrays.py [light|dark ...]   (default: both)
"""

import shutil
import sys

import eurusd_pd_confluence as pd
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("levels", "mss", "ob", "fvg", "ote", "entry", "position", "projection")


def idx(hhmm):
    return pd.CANDLES.index(by_time(pd.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>PD Arrays</b> — when several of them stack at one price",
        "s1": step("①", "<b>Sweep</b>: London takes the sell stops below 1.0838 — wick to 1.0833"),
        "s2": step("②", "<b>MSS</b>: a 23-pip displacement closes above the 1.0868 lower high"),
        "s3": "Array 1 · <b>bullish order block</b>: the last down-close candle — its 50 % is 1.0852",
        "s4": "Array 2 · <b>bullish FVG</b> 1.0848 – 1.0856, left by the displacement",
        "s5": "Array 3 · <b>OTE</b>: 62–79 % of the 1.0833 → 1.0892 leg = 1.0855 – 1.0845",
        "s6": step("③", "<b>2:30 PM BD</b>: the first return reaches 1.0852, inside all three → buy"),
        "s7": "<b>Plan</b>: stop 1.0840 · target BSL 1.0920 · R:R 1 : 5.7 (a stop below 1.0833 gives 1 : 3.1)",
        "s8": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 36)
    tl.fade("levels", "s1", 10).candles_to(idx("12:30"), 5, "s1").hold("s1", 25)
    tl.candles_to(idx("13:30"), 10, "s2").fade("mss", "s2", 10).hold("s2", 25)
    tl.candles_to(idx("14:00"), 6, "s3").fade("ob", "s3", 12).hold("s3", 30)
    tl.fade("fvg", "s4", 12).hold("s4", 30)
    tl.fade("ote", "s5", 12).hold("s5", 35)
    tl.candles_to(idx("14:45"), 8, "s6").fade("entry", "s6", 10).hold("s6", 30)
    tl.fade("position", "s7", 12).candles_to(len(pd.CANDLES), 7, "s7").hold("s7", 40)
    tl.fade("projection", "s8", 10).hold("s8", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("pd-arrays-explainer", pd.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0940)


if __name__ == "__main__":
    main()
