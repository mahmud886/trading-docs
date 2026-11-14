"""Explainer video: a bullish London-open Judas swing. Reuses judas_chart.build()."""

import shutil
import sys

import judas_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("asia", "open", "sweep", "choch", "position", "entry")


def captions(t):
    return {
        "intro": "<b>London open manipulation</b> — the Judas swing (BD time, US/UK summer)",
        "s0": "Bias is bullish. Before London, EUR/USD sits inside the Asian range 1.0852 – 1.0872",
        "s1": "1:00 PM BD: London opens — and the first move goes DOWN, through the Asian low",
        "s2": "① 1:20 PM: the drop reaches 1.0843, then price closes back inside the range",
        "s3": "② 1:35 PM: a close above the last lower high 1.0856 — the CHOCH",
        "s4": "③ 1:45 PM: buy the retest at 1.0857 · stop 1.0841 · target 1.0895 (planned 1 : 2.4)",
        "end": "Don't trade the first move. Trade the failure of the first move — after a close confirms it",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("asia", "s0", 10).candles_to(d.I_OPEN, 5, "s0").hold("s0", 15)
    tl.fade("open", "s1", 8).candles_to(d.I_SWEEP, 6, "s1").hold("s1", 10)
    tl.candles_to(d.I_BACK + 1, 6, "s2").fade("sweep", "s2", 10).hold("s2", 20)
    tl.candles_to(d.I_CHOCH + 1, 6, "s3").fade("choch", "s3", 10).hold("s3", 20)
    tl.candles_to(d.I_FILL + 1, 6, "s4").fade("position", "s4", 10).fade("entry", "s4", 8).hold("s4", 25)
    tl.candles_to(d.N, 3, "end").hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("london-judas-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
