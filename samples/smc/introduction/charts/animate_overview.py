"""Explainer video: SMC in one chart. Reuses smc_overview.build()."""

import shutil
import sys

import smc_overview as ov
from _paths import OUT
from chartkit import THEMES, Timeline, render_video
from structure import CHOCH, IDX

GROUPS = ("structure", "bos", "sweep", "choch", "pd", "pdarrays", "position")


def captions(t):
    return {
        "intro": "<b>Smart Money Concepts</b> — the core ideas on one chart",
        "s1": "<b>Structure</b>: higher highs and higher lows = uptrend",
        "s2": "<b>BOS</b>: each break of a high confirms the trend",
        "s3": "<b>Liquidity sweep</b>: 1.0930 takes the stops above the last high",
        "s4": "<b>CHOCH</b>: the first close below the last higher low",
        "s5": "<b>Premium/discount</b> and <b>PD arrays</b>: sell the retrace into the OB/FVG",
        "s6": "Sell 1.0905 · stop 1.0932 · target 1.0850 (planned 1 : 2)",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(IDX["H3"] + 1, 3, "s1").fade("structure", "s1", 10).hold("s1", 20)
    tl.fade("bos", "s2", 10).hold("s2", 30)
    tl.candles_to(IDX["H4"] + 2, 8, "s3").fade("sweep", "s3", 10).hold("s3", 30)
    tl.candles_to(CHOCH + 2, 8, "s4").fade("choch", "s4", 10).hold("s4", 30)
    tl.candles_to(IDX["LH"] + 1, 6, "s5").fade("pd", "s5", 10).fade("pdarrays", "s5", 10).hold("s5", 35)
    tl.fade("position", "s6", 10)
    tl.candles_to(len(ov.CANDLES), 8, "s6").hold("s6", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("smc-overview-explainer", ov.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
