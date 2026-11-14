"""Explainer video: a cursor walks the BD day and each block's job appears. Reuses playbook_chart.build()."""

import shutil
import sys

import playbook_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = tuple(b[0] for b in d.BLOCKS)


def captions(t):
    return {
        "intro": "<b>Session strategies</b> — one job per block of the Bangladesh day",
        "prep": "6:00 AM – 12:30 PM: don't trade — mark the Asian range and write the daily bias",
        "watch": "1:00 PM: London opens. Watch the first move for 30 minutes",
        "lon": "1:30 – 5:00 PM: sweep reversal or opening-range break — only on a close and a CHOCH",
        "dec": "6:00 PM: New York decision — London stretched and swept → reversal, otherwise continuation",
        "ny": "6:30 – 10:00 PM: trade after the US data, with a pullback or a sweep and CHOCH",
        "stop": "10:00 PM: London closes. Manage or close; no new trades",
        "end": "Most days offer one or two setups. The playbook is about not trading the rest",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("prep", "prep", 10).candles_to(7.5, 5, "prep").hold("prep", 20)
    tl.candles_to(8.0, 5, "watch").fade("watch", "watch", 10).hold("watch", 20)
    tl.candles_to(8.6, 6, "lon").fade("lon", "lon", 10).candles_to(11.6, 5, "lon").hold("lon", 20)
    tl.candles_to(13.0, 5, "dec").fade("dec", "dec", 10).hold("dec", 25)
    tl.candles_to(13.5, 3, "ny").fade("ny", "ny", 10).candles_to(16.8, 5, "ny").hold("ny", 20)
    tl.candles_to(17.0, 3, "stop").fade("stop", "stop", 10).hold("stop", 25)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("session-playbook-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
