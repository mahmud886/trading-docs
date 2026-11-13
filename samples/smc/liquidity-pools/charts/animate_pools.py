"""Explainer video: liquidity pools. Reuses pools_chart.build()."""

import shutil
import sys

import pools_chart as p
from _paths import OUT
from chartkit import THEMES, Timeline, render_video
from structure import IDX

GROUPS = ("pools", "bsl_taken", "ssl_taken", "resting")


def captions(t):
    return {
        "intro": "<b>Liquidity pools</b> — where stop orders cluster",
        "s1": "Buy stops rest above swing highs, sell stops below swing lows",
        "s2": "1.0930 runs the buy-side above 1.0925 and fails — a sweep",
        "s3": "The drop then runs the sell-side pools on its way down",
        "s4": "The next untouched pool — 1.0822 — is the next target",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(IDX["H4"] - 2, 3, "s1").fade("pools", "s1", 12).hold("s1", 30)
    tl.candles_to(IDX["H4"] + 2, 10, "s2").fade("bsl_taken", "s2", 10).hold("s2", 35)
    tl.candles_to(p.N, 6, "s3").fade("ssl_taken", "s3", 10).hold("s3", 35)
    tl.fade("resting", "s4", 10).hold("s4", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("liquidity-pools-explainer", p.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
