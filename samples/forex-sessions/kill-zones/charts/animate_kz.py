"""Explainer video: a clock walks through the BD day while each kill zone appears. Reuses kz_chart.build()."""

import shutil
import sys

import kz_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = tuple(w[0] for w in d.WINDOWS) + ("data",)


def captions(t):
    return {
        "intro": "<b>Kill zones</b> in Bangladesh time — defined in New York time, converted",
        "asia": "6:00 AM – 12:00 PM BD: the Asian range forms (summer)",
        "lkz": "12:00 – 3:00 PM: London kill zone · 1:00 – 2:00 PM: London silver bullet",
        "nykz": "5:00 – 8:00 PM: NY kill zone — US data lands at 6:30 PM inside it",
        "sb": "8:00 – 9:00 PM: NY AM silver bullet · 8:00 – 10:00 PM: London close",
        "pm": "12:00 – 1:00 AM: NY PM silver bullet",
        "end": "US winter: add one hour to every window. They tell you when to look, not what will happen",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(1, 3, "asia").fade("Asian range", "asia", 10).candles_to(7, 4, "asia").hold("asia", 10)
    tl.fade("London kill zone", "lkz", 10).fade("London silver bullet", "lkz", 10).candles_to(10, 5, "lkz")
    tl.hold("lkz", 10)
    tl.candles_to(12, 4, "nykz").fade("NY kill zone", "nykz", 10).fade("data", "nykz", 8).candles_to(15, 5, "nykz")
    tl.hold("nykz", 10)
    tl.fade("NY AM silver bullet", "sb", 10).fade("London close", "sb", 10).candles_to(19, 5, "sb").hold("sb", 10)
    tl.fade("NY PM silver bullet", "pm", 10).candles_to(22, 5, "pm").hold("pm", 15)
    tl.hold("end", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("kill-zones-bd-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
