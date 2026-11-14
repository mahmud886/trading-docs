"""Explainer video: a cursor walks the BD day while each scheduled release appears. Reuses release_chart.build()."""

import shutil
import sys

import release_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("bands",) + tuple(e[0] for e in d.EVENTS)


def captions(t):
    return {
        "intro": "<b>Economic releases</b> — the big scheduled events in Bangladesh time",
        "asia": "Morning: Japan 5:50 AM, Australian jobs 7:30 AM, China 7:30 AM, RBA 10:30 AM (summer)",
        "uk": "Noon: UK data at 12:00 PM — then the London open",
        "evening": "Evening: BoE 5:00 PM, ECB 6:15 PM, US data 6:30 PM — three big events in 90 minutes",
        "fomc": "Midnight: the FOMC decision at 12:00 AM",
        "end": "Winter: add one hour to UK and US events. Australia moves the other way",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("bands", "asia", 8)
    for key, n in (("jp", 1.0), ("au", 2.5), ("cn", 2.6), ("rba", 5.6)):
        tl.candles_to(n, 4, "asia").fade(key, "asia", 6)
    tl.hold("asia", 20)
    tl.candles_to(7.0, 4, "uk").fade("uk", "uk", 6).hold("uk", 20)
    for key, n in (("boe", 12.0), ("ecb", 13.3), ("us", 13.6)):
        tl.candles_to(n, 4, "evening").fade(key, "evening", 6)
    tl.hold("evening", 25)
    tl.candles_to(19.0, 4, "fomc").fade("fomc", "fomc", 6).hold("fomc", 25)
    tl.hold("end", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("release-clock-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
