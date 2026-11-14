"""Explainer video: the weekly open gap on AUD/USD. Reuses gap_chart.build()."""

import shutil
import sys

import gap_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("weekend", "gap", "position", "signal", "tokyo", "fill")


def captions(t):
    return {
        "intro": "<b>Sydney</b> — the weekly open and its gap (BD time, US summer)",
        "s0": "Friday: AUD/USD closes the week at 0.6650 — 3:00 AM Saturday in Bangladesh",
        "s1": "Monday 3:00 AM BD: trading reopens at 0.6672 — a 22-pip weekend gap",
        "s2": "The first 30 minutes: spreads are often wide. Then a close back below the open → sell 0.6669",
        "s3": "Stop 0.6681 above the opening high · target: the full fill at 0.6650 (planned 1 : 1.6)",
        "s4": "Tokyo opens at 6:00 AM BD. 17 of 22 pips filled — the full fill hasn't come",
        "end": "Gaps often fill partly — not always fully. Plan the trade, not the hope",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_OPEN, 6, "s0").fade("weekend", "s0", 10).hold("s0", 20)
    tl.candles_to(d.I_OPEN + 1, 4, "s1").fade("gap", "s1", 10).hold("s1", 25)
    tl.candles_to(d.I_SIGNAL + 1, 6, "s2").fade("signal", "s2", 10).hold("s2", 25)
    tl.fade("position", "s3", 10).hold("s3", 25)
    tl.candles_to(d.N, 5, "s4").fade("tokyo", "s4", 10).fade("fill", "s4", 10).hold("s4", 25)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("sydney-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
