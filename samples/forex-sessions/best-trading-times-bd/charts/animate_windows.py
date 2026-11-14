"""Explainer video: trading windows by schedule, with a BD-time cursor. Reuses window_chart.build()."""

import shutil
import sys

import window_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = tuple(r[0] for r in d.ROWS)


def captions(t):
    return {
        "intro": "<b>Best trading times for Bangladesh</b> — choose the window that fits your day",
        "morning": "Mornings free: the Tokyo range, 6:00 AM – 12:00 PM. Smaller targets, JPY/AUD/NZD pairs",
        "afternoon": "Afternoons free: the London kill zone, 12:00 – 3:00 PM (1:00 – 4:00 PM in winter)",
        "evening": "Evenings free: the London–New York overlap, 6:00 – 10:00 PM — US data at 6:30 PM",
        "flex": "Flexible: prepare at noon, trade one or both windows, stop when London closes",
        "night": "Late nights are thinner: mostly FOMC nights, not a default window",
        "end": "Pick one window, write it down in both seasons, and journal what happens there",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    for key, n, cap in (("morning", 7.0, "morning"), ("afternoon", 10.0, "afternoon"), ("evening", 17.0, "evening"),
                        ("flex", 17.5, "flex"), ("night", 21.0, "night")):
        tl.candles_to(n, 4, cap).fade(key, cap, 8).hold(cap, 22)
    tl.hold("end", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("trading-windows-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
