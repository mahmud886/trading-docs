"""Explainer video: the core ICT concepts on one session. Reuses ict_overview.build()."""

import shutil
import sys

import ict_overview as ov
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("liq", "time", "sweep", "mss", "arrays", "pd", "target")


def idx(hhmm):
    return ov.CANDLES.index(by_time(ov.CANDLES, hhmm))


def captions(t):
    return {
        "intro": "<b>ICT in one chart</b> — the core ideas on one session",
        "s1": "<b>① Liquidity</b>: stops rest above highs and below lows",
        "s2": "<b>② Time</b>: the move starts in a kill zone",
        "s3": "<b>③ Sweep</b>: the false move takes one side's stops",
        "s4": "<b>④ MSS</b>: a displacement confirms the reversal",
        "s5": "<b>⑤–⑥ PD arrays</b>: enter at the order block or FVG, in discount",
        "s6": "<b>⑦ Target</b>: the liquidity on the other side",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("13:00"), 3, "s1").fade("liq", "s1", 10).hold("s1", 30)
    tl.fade("time", "s2", 10).hold("s2", 25)
    tl.candles_to(idx("14:30"), 10, "s3").fade("sweep", "s3", 10).hold("s3", 25)
    tl.candles_to(idx("15:00"), 10, "s4").fade("mss", "s4", 10).hold("s4", 25)
    tl.candles_to(idx("16:00"), 8, "s5").fade("arrays", "s5", 10).fade("pd", "s5", 10).hold("s5", 35)
    tl.candles_to(len(ov.CANDLES), 8, "s6").fade("target", "s6", 10).hold("s6", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("ict-overview-explainer", ov.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
