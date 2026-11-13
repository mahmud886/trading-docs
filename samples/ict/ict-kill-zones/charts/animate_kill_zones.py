"""
Explainer video: a London kill zone session — the Asian range forms, London sweeps its low inside the kill zone,
a displacement shifts structure, and the order-block retest is the entry.

Reuses eurusd_london_kz.build(). Writes output/kill-zones-explainer-{light,dark}.mp4. Requires ffmpeg.
"""

import shutil
import sys

import eurusd_london_kz as kz
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("zones", "sweep", "mss", "position", "entry", "projection")


def idx(hhmm):
    return kz.CANDLES.index(by_time(kz.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Kill Zones</b> — the same setup works best at the right time of day",
        "s0": "6 AM – 12 PM BD: the <b>Asian session</b> builds a quiet range, 1.0870 – 1.0885",
        "s1": "12 PM BD: the <b>London kill zone</b> opens (12–3 PM BD in US summer time)",
        "s2": step("①", "<b>12:15 PM BD</b>: London sweeps the Asian low to 1.0867"),
        "s3": step("②", "<b>12:30 PM BD</b>: a 17-pip displacement closes above 1.0879 → MSS"),
        "s4": step("③", "<b>1:30 PM BD</b>: price returns to the bullish OB → buy 1.0872"),
        "s5": "<b>Plan</b>: stop 1.0864 · target 1.0910 · R:R 1 : 4.75",
        "s6": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("12:00"), 2, "s0").hold("s0", 20)
    tl.fade("zones", "s1", 14).hold("s1", 30)
    tl.candles_to(idx("12:30"), 16, "s2").fade("sweep", "s2", 10).hold("s2", 25)
    tl.candles_to(idx("12:45"), 16, "s3").fade("mss", "s3", 10).hold("s3", 25)
    tl.candles_to(idx("13:45"), 7, "s4").fade("position", "s4", 10).fade("entry", "s4", 10).hold("s4", 25)
    tl.candles_to(len(kz.CANDLES), 7, "s5").hold("s5", 30)
    tl.fade("projection", "s6", 10).hold("s6", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("kill-zones-explainer", kz.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0928)


if __name__ == "__main__":
    main()
