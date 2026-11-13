"""Explainer video: bullish MSS. Reuses mss_chart.build()."""

import shutil
import sys

import mss_chart as m
from _paths import OUT
from chartkit import THEMES, Timeline, render_video
from structure import IDX
from structure_bull import MSS

GROUPS = ("trend", "sweep", "mss", "fvg", "position", "entry", "bos")
X0 = m.X0


def captions(t):
    return {
        "intro": "<b>Market structure shift</b> — a break with displacement",
        "s1": "Downtrend: lower highs and lower lows",
        "s2": "<b>①</b> A sweep: 1.0800 takes the stops under the last low",
        "s3": f"<b>②</b> Three strong candles ({m.DISP} pips) close above the last lower high",
        "s4": "<b>③</b> The higher low retraces into the FVG → buy 1.0825 · stop 1.0798",
        "s5": "A BOS above 1.0862 confirms the new uptrend",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(IDX["HL3"] - X0 + 2, 4, "s1").fade("trend", "s1", 10).hold("s1", 20)
    tl.candles_to(IDX["H4"] - X0 + 2, 8, "s2").fade("sweep", "s2", 10).hold("s2", 30)
    tl.candles_to(MSS - X0 + 3, 10, "s3").fade("mss", "s3", 10).fade("fvg", "s3", 10).hold("s3", 35)
    tl.candles_to(IDX["LH"] - X0 + 1, 6, "s4").fade("position", "s4", 10).fade("entry", "s4", 10).hold("s4", 35)
    tl.candles_to(len(m.C), 8, "s5").fade("bos", "s5", 10).hold("s5", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("mss-explainer", m.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
