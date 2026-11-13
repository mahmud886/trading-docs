"""Explainer video: dealer gamma hedging. Reuses dealer_hedging.build()."""

import shutil
import sys

import dealer_hedging as dh
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("short", "long")


def captions(t):
    return {
        "intro": "<b>Dealer hedging</b> — why options flow can move price",
        "s1": "Clients <b>buy</b> options → dealers are short gamma → they buy as price rises",
        "s2": "Their hedging <b>adds</b> to the move",
        "s3": "Clients <b>sell</b> options → dealers are long gamma → they sell rallies, buy dips",
        "s4": "Their hedging <b>fades</b> moves, so price can pin near big strikes",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("short", "s1", 15).hold("s1", 60).hold("s2", 45)
    tl.fade("long", "s3", 15).hold("s3", 60).hold("s4", 75)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("dealer-hedging-explainer", dh.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
