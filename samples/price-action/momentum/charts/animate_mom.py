"""Explainer video: momentum in candle bodies. Reuses mom_chart.build()."""

import shutil
import sys

import mom_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("leg0", "leg1", "leg2", "leg3", "trade")


def captions(t):
    return {
        "intro": "<b>Momentum</b> — how hard price is pushing, read from the bodies",
        "s0": "Impulse 1: large bullish bodies, about 22 pips each",
        "s1": "Impulse 2: still up, but bodies shrink to about 15 pips",
        "s2": "Impulse 3: a new high on bodies of only 7 pips — momentum is fading",
        "s3": "<b>Shift</b>: bearish bodies of about 21 pips — sellers now push harder",
        "s4": "A weak pullback → sell 1.2672 · stop 1.2690 · target 1.2630 · plan 1 : 2.3",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    for k, (_, a, b) in enumerate(d.LEGS):
        tl.candles_to(b, 5, f"s{k}").fade(f"leg{k}", f"s{k}", 10).hold(f"s{k}", 25)
    tl.candles_to(d.I_FILL + 1, 6, "s4").fade("trade", "s4", 10).candles_to(d.N, 5, "s4").hold("s4", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("momentum-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
