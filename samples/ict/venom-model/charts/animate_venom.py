"""Explainer video: a bullish Venom entry. Reuses gold_venom.build()."""

import shutil
import sys

import gold_venom as vn
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("eql", "sweep", "fvg", "position", "entry", "projection")


def idx(hhmm):
    return vn.CANDLES.index(by_time(vn.CANDLES, hhmm))


def captions(t):
    return {
        "intro": "<b>Venom</b> — strike on the first touch after the sweep",
        "s1": "Equal lows at 2,020: sell-side liquidity",
        "s2": "<b>1:15 PM BD</b>: London sweeps them to 2,016",
        "s3": f"<b>1:20 PM BD</b>: a {vn.STATS['disp']:.1f}-point displacement leaves an FVG 2,022 – 2,028",
        "s4": "Limit at the CE 2,025 · stop 2,015 · target 2,060 (1 : 3.5)",
        "s5": "<b>1:40 PM BD</b>: the first touch fills the order",
        "s6": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("13:15"), 5, "s1").fade("eql", "s1", 10).hold("s1", 25)
    tl.candles_to(idx("13:20"), 12, "s2").fade("sweep", "s2", 10).hold("s2", 25)
    tl.candles_to(idx("13:30"), 12, "s3").fade("fvg", "s3", 10).hold("s3", 35)
    tl.fade("position", "s4", 10).hold("s4", 35)
    tl.candles_to(idx("13:45"), 10, "s5").fade("entry", "s5", 10).hold("s5", 25)
    tl.candles_to(len(vn.CANDLES), 8, "s5").hold("s5", 15)
    tl.fade("projection", "s6", 10).hold("s6", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("venom-explainer", vn.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
