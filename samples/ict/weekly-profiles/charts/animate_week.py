"""Explainer video: a Tuesday-low week. Reuses eurusd_week.build()."""

import shutil
import sys

import eurusd_week as wk
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("draw", "mon", "tue", "mss", "wed", "thu")


def captions(t):
    return {
        "intro": "<b>Weekly profile</b> — a Tuesday-low week",
        "s0": "The draw: last week's high at 1.0960",
        "s1": "<b>Monday</b> builds a range, 1.0890 – 1.0915",
        "s2": "<b>Tuesday</b> drops below Monday's low to 1.0870 — the Judas swing",
        "s3": "<b>Tuesday PM</b>: a 4H MSS above 1.0880 — the low may be in",
        "s4": "<b>Wednesday</b> expands up and reaches 1.0960",
        "s5": "<b>Thursday–Friday</b>: a shallow retrace, close 1.0945",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 25)
    tl.fade("draw", "s0", 10).hold("s0", 25)
    tl.candles_to(6, 5, "s1").fade("mon", "s1", 10).hold("s1", 25)
    tl.candles_to(9, 8, "s2").fade("tue", "s2", 10).hold("s2", 30)
    tl.candles_to(12, 8, "s3").fade("mss", "s3", 10).hold("s3", 30)
    tl.candles_to(18, 6, "s4").fade("wed", "s4", 10).hold("s4", 30)
    tl.candles_to(len(wk.CANDLES), 4, "s5").fade("thu", "s5", 10).hold("s5", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("weekly-profile-explainer", wk.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
