"""Explainer video: the session sweep chain. Reuses chain_chart.build()."""

import shutil
import sys

import chain_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("asia", "london", "ny", "s1", "s2", "position", "entry")


def captions(t):
    return {
        "intro": "<b>The sweep chain</b> — one session's extreme is the next session's target (BD time)",
        "s0": "Asia, 6:00 AM – 1:00 PM: a 20-pip range, 1.0852 – 1.0872 — stops rest above and below it",
        "s1": "① London opens at 1:00 PM and sweeps the Asian low to 1.0843 — then closes back inside",
        "s2": "London rallies to 1.0899. That high is now the next target",
        "s3": "② New York, 6:30 PM data: price sweeps London's high to 1.0908 and closes back below",
        "s4": "③ CHOCH, then sell the retest at 1.0887 · stop 1.0911 · target 1.0845 (planned 1 : 1.8)",
        "end": "Mark every session's high and low. Sweeps without a close back inside are breakouts",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("asia", "s0", 10).candles_to(d.I_LON, 3, "s0").hold("s0", 20)
    tl.fade("london", "s1", 10).candles_to(d.I_S1 + 2, 6, "s1").fade("s1", "s1", 10).hold("s1", 25)
    tl.candles_to(d.I_NY, 4, "s2").hold("s2", 20)
    tl.fade("ny", "s3", 8).candles_to(d.I_S2 + 1, 6, "s3").fade("s2", "s3", 10).hold("s3", 25)
    tl.candles_to(d.I_FILL + 1, 6, "s4").fade("position", "s4", 10).fade("entry", "s4", 8).hold("s4", 25)
    tl.candles_to(d.N, 3, "end").hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("sweep-chain-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
