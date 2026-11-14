"""Explainer video: the full narrative on one chart. Reuses narrative_chart.build()."""

import shutil
import sys

import narrative_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("range", "eqh", "eql", "sweep", "fvg", "position", "entry")


def captions(t):
    return {
        "intro": "<b>Advanced price action</b> — one chart, the whole narrative",
        "s0": "A dealing range forms: 1.2600 to 1.2720. Its 50% line at 1.2660 splits premium from discount",
        "s1": "① Equal highs at 1.2720 — stops rest above them: the draw on liquidity",
        "s2": "② Price falls into discount and prints equal lows at 1.2625",
        "s3": "③ A wick sweeps the equal lows to 1.2616 and closes back above",
        "s4": "④ Displacement: two strong candles leave an FVG at 1.2643 – 1.2660",
        "s5": "⑤ Buy the retrace into the FVG at 1.2652 · stop 1.2612 · target 1.2725 (planned 1 : 1.8)",
        "end": "Where is the liquidity, which side was taken, where is price in the range?",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(d.I_HIGH + 1, 10, "s0").fade("range", "s0", 10).hold("s0", 25)
    tl.candles_to(d.EQH[1] + 1, 6, "s1").fade("eqh", "s1", 10).hold("s1", 25)
    tl.candles_to(d.EQL[1] + 2, 8, "s2").fade("eql", "s2", 10).hold("s2", 20)
    tl.candles_to(d.I_SWEEP + 1, 3, "s3").fade("sweep", "s3", 10).hold("s3", 25)
    tl.candles_to(d.I_DISP[1] + 1, 4, "s4").fade("fvg", "s4", 10).hold("s4", 25)
    tl.candles_to(d.I_FILL + 1, 4, "s5").fade("position", "s5", 10).fade("entry", "s5", 8).hold("s5", 25)
    tl.candles_to(d.N, 6, "end").hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("advanced-price-action-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
