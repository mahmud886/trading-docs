"""
Explainer video: a bullish OTE — the expansion leg, the Fibonacci retracement, the 62–79 % zone, the order block inside
it, and the entry on the first retrace.

Reuses eurusd_bullish_ote.build() so the video always matches the static chart.
Writes output/ote-explainer-{light,dark}.mp4 (1920x1080, 30 fps, H.264). Requires ffmpeg.

Usage: python animate_ote.py [light|dark ...]   (default: both)
"""

import shutil
import sys

import eurusd_bullish_ote as ote
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("levels", "expansion", "fib", "ob", "entry", "position", "projection")


def idx(hhmm):
    return ote.CANDLES.index(by_time(ote.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Optimal Trade Entry</b> — where to join a move after it shifts structure",
        "s1": step("①", "<b>Expansion</b>: a displacement from the 1.0820 low closes above the 1.0842 lower high"),
        "s2": "The leg tops at <b>1.0880</b>. Draw the Fibonacci from the swing low (1.0820) to the swing high",
        "s3": "<b>OTE = 62–79 %</b> of the leg: 1.0843 – 1.0833 · sweet spot 70.5 % = 1.0838",
        "s4": "Inside the zone sits a <b>bullish order block</b> — the exact level to work from",
        "s5": step("②", "<b>6:15 PM BD</b>: the first retrace reaches 1.0836 and reacts → buy"),
        "s6": "<b>Plan</b>: stop 1.0818 below the swing low · target BSL 1.0920 · R:R 1 : 4.7",
        "s7": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 36)
    tl.fade("levels", "intro", 10).candles_to(idx("17:00"), 4, "s1")
    tl.candles_to(idx("17:15"), 12, "s1").fade("expansion", "s1", 10).hold("s1", 25)
    tl.candles_to(idx("17:45"), 8, "s2").hold("s2", 25)
    tl.fade("fib", "s3", 14).hold("s3", 40)
    tl.fade("ob", "s4", 12).hold("s4", 30)
    tl.candles_to(idx("18:30"), 10, "s5").fade("entry", "s5", 10).hold("s5", 30)
    tl.fade("position", "s6", 12).candles_to(len(ote.CANDLES), 8, "s6").hold("s6", 30)
    tl.fade("projection", "s7", 10).hold("s7", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("ote-explainer", ote.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0940)


if __name__ == "__main__":
    main()
