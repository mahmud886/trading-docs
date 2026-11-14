"""Explainer video: one day by session block, ranges and an overlap continuation. Reuses overlap_chart.build()."""

import shutil
import sys

import overlap_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("Asia", "London", "London–NY overlap", "After London closes", "position", "entry")


def captions(t):
    return {
        "intro": "<b>Session overlaps</b> — one EUR/USD day in hourly candles (BD time)",
        "s1": "Asia, 6:00 AM – 1:00 PM: small candles — about 7 pips an hour on this day",
        "s2": "London from 1:00 PM: the day's direction appears — about 13 pips an hour",
        "s3": "6:00 PM: New York joins. The overlap pulls back into London's move and holds → buy 1.0871",
        "s4": "Stop 1.0860 · target 1.0910 (planned 1 : 3.5). The overlap is the busiest block — 15 pips an hour",
        "s5": "After 10:00 PM BD London closes and ranges shrink again",
        "end": "Overlaps add participants. That's why ranges grow — and why your plan matters most there",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("Asia", "s1", 10).candles_to(7, 4, "s1").hold("s1", 20)
    tl.fade("London", "s2", 10).candles_to(12, 5, "s2").hold("s2", 20)
    tl.fade("London–NY overlap", "s3", 10).candles_to(13, 5, "s3").fade("entry", "s3", 10).hold("s3", 25)
    tl.fade("position", "s4", 10).candles_to(16, 6, "s4").hold("s4", 20)
    tl.fade("After London closes", "s5", 10).candles_to(d.N, 3, "s5").hold("s5", 20)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("overlaps-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
