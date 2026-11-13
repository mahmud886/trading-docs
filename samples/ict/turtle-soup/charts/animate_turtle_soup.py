"""
Explainer video: a bearish Turtle Soup — breakout traders buy above the previous week high, the breakout fails
on the next candle, and the trade is taken at the close back inside.

Reuses eurusd_bearish_turtle_soup.build() so the video always matches the static chart.
Writes output/turtle-soup-explainer-{light,dark}.mp4 (1920x1080, 30 fps, H.264). Requires ffmpeg.

Usage: python animate_turtle_soup.py [light|dark ...]   (default: both)
"""

import shutil
import sys

import eurusd_bearish_turtle_soup as soup
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("levels", "breakout", "trap", "position", "projection")


def idx(hhmm):
    return soup.CANDLES.index(by_time(soup.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Turtle Soup</b> — trading the breakout that fails",
        "s0": "Mark the level: <b>PWH 1.0950</b>. Breakout traders plan to buy above it",
        "s1": step("①", "<b>The breakout</b>: 6:30 PM BD, price runs to 1.0958 and even closes above"),
        "s2": step("②", "<b>The trap</b>: the next candle closes back below, at 1.0945 — the breakout failed"),
        "s3": "<b>Turtle Soup entry</b>: sell 1.0945 at the close · stop 1.0960 · target SSL 1.0880 (1 : 4.3)",
        "s4": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 36)
    tl.fade("levels", "s0", 14).candles_to(idx("18:30"), 5, "s0").hold("s0", 20)
    tl.candles_to(idx("18:45"), 18, "s1").fade("breakout", "s1", 10).hold("s1", 40)
    tl.candles_to(idx("19:00"), 18, "s2").fade("trap", "s2", 10).hold("s2", 40)
    tl.fade("position", "s3", 12).candles_to(len(soup.CANDLES), 8, "s3").hold("s3", 40)
    tl.fade("projection", "s4", 10).hold("s4", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("turtle-soup-explainer", soup.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0986)


if __name__ == "__main__":
    main()
