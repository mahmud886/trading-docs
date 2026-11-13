"""Explainer video: London sets up, NY continues on the pullback. Reuses eurusd_ny_continuation.build()."""

import shutil
import sys

import eurusd_ny_continuation as ny
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("sessions", "london", "fvg", "entry", "position", "projection")


def idx(hhmm):
    return ny.CANDLES.index(by_time(ny.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>New York Open</b> — read London first, then decide",
        "s1": step("①", "<b>London</b> sweeps the Asian low (1.0850) and rallies — the day's low may be in"),
        "s2": "The rally leaves a <b>bullish FVG</b> 1.0871 – 1.0879 · CE 1.0875",
        "s3": "The afternoon is quiet. <b>NY AM</b> opens at 5 PM BD (US summer time)",
        "s4": step("②", "<b>6:15 PM BD</b>: NY pulls back into London's FVG → buy the CE 1.0875"),
        "s5": "<b>Plan</b>: stop 1.0862 · target BSL 1.0940 · R:R 1 : 5",
        "s6": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("sessions", "intro", 10)
    tl.candles_to(idx("14:00"), 6, "s1").fade("london", "s1", 10).hold("s1", 25)
    tl.fade("fvg", "s2", 12).hold("s2", 30)
    tl.candles_to(idx("17:15"), 4, "s3").hold("s3", 20)
    tl.candles_to(idx("18:30"), 8, "s4").fade("entry", "s4", 10).hold("s4", 25)
    tl.fade("position", "s5", 12).candles_to(len(ny.CANDLES), 8, "s5").hold("s5", 30)
    tl.fade("projection", "s6", 10).hold("s6", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("ny-open-explainer", ny.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0958)


if __name__ == "__main__":
    main()
