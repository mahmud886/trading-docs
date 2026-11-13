"""Explainer video: a bullish Power of 3 day. Reuses eurusd_po3_day.build()."""

import shutil
import sys

import eurusd_po3_day as po3
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("asia", "manip", "mss", "position", "entry", "dist", "projection")


def idx(hhmm):
    return po3.CANDLES.index(by_time(po3.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Power of 3</b> — accumulate, manipulate, distribute",
        "s1": step("①", "<b>Accumulation</b>: Asia builds a quiet range, 1.0850 – 1.0870"),
        "s2": step("②", "<b>Manipulation</b>: London takes the Asian low to 1.0838 — the false move"),
        "s3": f"<b>1:30 PM BD</b>: a {po3.STATS['mss_body']:.0f}-pip CHOCH — the manipulation is over",
        "s4": "Back into the bullish OB → buy 1.0845 · stop 1.0830 · target 1.0920 (1 : 5)",
        "s5": step("③", "<b>Distribution</b>: New York delivers the real move up"),
        "s6": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("12:00"), 3, "s1").fade("asia", "s1", 12).hold("s1", 25)
    tl.candles_to(idx("13:00"), 10, "s2").fade("manip", "s2", 10).hold("s2", 30)
    tl.candles_to(idx("14:00"), 12, "s3").fade("mss", "s3", 10).hold("s3", 25)
    tl.candles_to(idx("15:00"), 8, "s4").fade("position", "s4", 10).fade("entry", "s4", 10).hold("s4", 30)
    tl.candles_to(idx("17:00"), 6, "s5").fade("dist", "s5", 10)
    tl.candles_to(len(po3.CANDLES), 8, "s5").hold("s5", 25)
    tl.fade("projection", "s6", 10).hold("s6", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("po3-explainer", po3.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
