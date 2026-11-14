"""Explainer video: a New York reversal of London's rally. Reuses nyrev_chart.build()."""

import shutil
import sys

import nyrev_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("london", "ny", "sweep", "choch", "position", "entry")


def captions(t):
    return {
        "intro": "<b>New York reversal</b> — London's move, turned by New York (BD time, US/UK summer)",
        "s0": "1:00 – 6:00 PM BD: London rallies GBP/USD from 1.2700 to 1.2768",
        "s1": "6:00 PM: New York opens. US data is due at 6:30 PM",
        "s2": "① The data candle sweeps London's high to 1.2779 — and closes back below it",
        "s3": "② 6:45 PM: a close below London's last higher low, 1.2758 — the CHOCH",
        "s4": "③ 7:15 PM: sell the retest at 1.2757 · stop 1.2781 · target 1.2714 (planned 1 : 1.8)",
        "end": "No sweep and CHOCH, no reversal trade — London's trend gets the benefit of the doubt",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("london", "s0", 10).candles_to(d.I_NY, 3, "s0").hold("s0", 15)
    tl.fade("ny", "s1", 10).candles_to(d.I_DATA, 5, "s1").hold("s1", 10)
    tl.candles_to(d.I_DATA + 1, 4, "s2").fade("sweep", "s2", 10).hold("s2", 25)
    tl.candles_to(d.I_CHOCH + 1, 5, "s3").fade("choch", "s3", 10).hold("s3", 20)
    tl.candles_to(d.I_FILL + 1, 5, "s4").fade("position", "s4", 10).fade("entry", "s4", 8).hold("s4", 25)
    tl.candles_to(d.N, 3, "end").hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("newyork-reversal-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
