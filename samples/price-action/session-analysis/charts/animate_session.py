"""Explainer video: Asian range, London fakeout, second-move break, NY continuation. Reuses session_chart.build()."""

import shutil
import sys

import session_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("sessions", "range", "sweep", "break", "position", "entry")


def captions(t):
    return {
        "intro": "<b>Session analysis</b> — one EUR/USD day, session by session (BD time)",
        "s0": "Asia, 6:00 AM – 12:00 PM: a quiet 20-pip range, 1.0852 – 1.0872",
        "s1": "① 1:00 PM, London opens: the first push sweeps the Asian high and closes back inside",
        "s2": "② The second move closes below the Asian low",
        "s3": "③ Sell the retest at 1.0850 · stop 1.0861 · target 2× the range, 1.0812 (planned 1 : 3.5)",
        "s4": "6:00 PM, New York: continuation in London's direction — this time",
        "end": "Sessions give you times and levels. Price still decides the direction",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("sessions", "s0", 10).candles_to(d.I_ASIA_END, 14, "s0").fade("range", "s0", 10).hold("s0", 20)
    tl.candles_to(d.I_SWEEP + 1, 6, "s1").fade("sweep", "s1", 10).hold("s1", 25)
    tl.candles_to(d.I_BREAK + 1, 6, "s2").fade("break", "s2", 10).hold("s2", 25)
    tl.candles_to(d.I_FILL + 1, 4, "s3").fade("position", "s3", 10).fade("entry", "s3", 8).hold("s3", 25)
    tl.candles_to(d.N, 10, "s4").hold("s4", 20)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("session-analysis-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
