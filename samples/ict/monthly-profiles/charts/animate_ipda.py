"""Explainer video: IPDA 20/40/60-day look-back ranges. Reuses ipda_lookback.build()."""

import shutil
import sys

import ipda_lookback as ip
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("r20", "r40", "r60")


def captions(t):
    l20, h20 = ip.LOOKBACKS[20][1:]
    h40 = ip.LOOKBACKS[40][2]
    l60 = ip.LOOKBACKS[60][1]
    return {
        "intro": "<b>IPDA look-back</b> — where are the next targets?",
        "s0": "Sixty-odd trading days of daily candles",
        "s1": f"<b>20 days</b>: the nearest range, {l20:.4f} – {h20:.4f}",
        "s2": f"<b>40 days</b> adds the {h40:.4f} high",
        "s3": f"<b>60 days</b> adds the {l60:.4f} low",
        "s4": "Untouched extremes of these ranges are the targets for the coming weeks",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 25)
    tl.candles_to(len(ip.CANDLES), 2, "s0").hold("s0", 15)
    tl.fade("r20", "s1", 12).hold("s1", 45)
    tl.fade("r40", "s2", 12).hold("s2", 45)
    tl.fade("r60", "s3", 12).hold("s3", 45)
    tl.hold("s4", 75)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("ipda-lookback-explainer", ip.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
