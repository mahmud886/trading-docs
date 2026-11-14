"""Explainer video: a cursor walks through the BD trading day while sessions open. Reuses map_chart.build()."""

import shutil
import sys

import map_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("Sydney", "Tokyo", "London", "New York", "overlaps", "kill")


def captions(t):
    return {
        "intro": "<b>Forex sessions</b> — the trading day in Bangladesh time",
        "syd": "3:00 AM BD: Sydney opens the week's trading day — the quietest session",
        "tok": "6:00 AM: Tokyo opens. The Asian range forms until about noon",
        "lon": "1:00 PM: London opens — volume rises; Tokyo and London overlap until 3:00 PM",
        "ny": "6:00 PM: New York opens. London–New York overlap until 10:00 PM",
        "late": "New York runs until 3:00 AM BD — then the cycle starts again",
        "kill": "Kill zones (summer): Asian range 6–12, London 12–3 PM, New York 5–8 PM BD",
        "end": "In winter London and New York start one hour later in BD time; Tokyo doesn't move",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("Sydney", "syd", 10).candles_to(4, 6, "syd").hold("syd", 15)
    tl.fade("Tokyo", "tok", 10).candles_to(11, 6, "tok").hold("tok", 15)
    tl.fade("London", "lon", 10).fade("overlaps", "lon", 10).candles_to(16, 6, "lon").hold("lon", 15)
    tl.fade("New York", "ny", 10).candles_to(20, 6, "ny").hold("ny", 15)
    tl.candles_to(26, 6, "late").hold("late", 15)
    tl.candles_to(26.5, 2, "kill").fade("kill", "kill", 10).hold("kill", 30)
    tl.hold("end", 50)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("sessions-bd-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
