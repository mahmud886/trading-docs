"""
Explainer video: a bullish Market Structure Shift — lower highs and lower lows, a sweep of the last low,
a displacement through the lower high, and the FVG entry.

Reuses eurusd_bullish_mss.build() so the video always matches the static chart.
Writes output/mss-explainer-{light,dark}.mp4 (1920x1080, 30 fps, H.264). Requires ffmpeg.

Usage: python animate_mss.py [light|dark ...]   (default: both)
"""

import shutil
import sys

import eurusd_bullish_mss as mss
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("structure", "sweep", "mss", "fvg", "entry", "position", "projection")


def idx(hhmm):
    return mss.CANDLES.index(by_time(mss.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Market Structure Shift</b> — when a downtrend really turns",
        "s0": "The 15m trend is down: <b>lower highs and lower lows</b>. Mark the last LL and the LH that made it",
        "s1": step("①", "<b>Sweep</b>: the London kill zone takes the SSL below the last low — wick to 1.0845"),
        "s2": step("②", "<b>MSS</b>: a 16-pip displacement closes above the 1.0875 lower high"),
        "s3": "The displacement leaves an <b>FVG 1.0868 – 1.0878</b> — the entry zone",
        "s4": step("③", "<b>Enter</b>: first touch of the FVG CE at 1:30 PM BD → buy 1.0873"),
        "s5": "<b>Plan</b>: stop 1.0842 below the sweep · target 1.0930 · R:R 1 : 1.8",
        "s6": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 36)
    tl.candles_to(idx("11:15"), 4, "s0").fade("structure", "s0", 14).hold("s0", 30)
    tl.candles_to(idx("12:30"), 6, "s1").fade("sweep", "s1", 10).hold("s1", 30)
    tl.candles_to(idx("13:00"), 14, "s2").fade("mss", "s2", 10).hold("s2", 35)
    tl.candles_to(idx("13:15"), 8, "s3").fade("fvg", "s3", 10).hold("s3", 25)
    tl.candles_to(idx("13:45"), 10, "s4").fade("entry", "s4", 10).hold("s4", 30)
    tl.fade("position", "s5", 12).candles_to(len(mss.CANDLES), 7, "s5").hold("s5", 30)
    tl.fade("projection", "s6", 10).hold("s6", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("mss-explainer", mss.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0948)


if __name__ == "__main__":
    main()
