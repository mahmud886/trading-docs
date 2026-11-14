"""Explainer video: a Tokyo range trade on USD/JPY. Reuses tokyo_chart.build()."""

import shutil
import sys

import tokyo_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("fix", "range", "reject", "position", "exit")


def captions(t):
    return {
        "intro": "<b>Tokyo</b> — range trading USD/JPY in the BD morning",
        "s0": "6:00 AM BD: Tokyo opens (9:00 AM in Tokyo)",
        "s1": "6:55 AM BD is the 9:55 AM Tokyo fix — a spike, then it fades",
        "s2": "7:00 – 9:00 AM: a 28-pip range forms, 157.20 – 157.48",
        "s3": "9:45 AM: the range low is rejected — buy 157.27 · stop 157.17 · target 157.46 (planned 1 : 1.9)",
        "s4": "No target by 1:00 PM BD — the rule is flat before London: exit 157.40, +13 pips",
        "end": "Tokyo: mark the range, trade its edges small, and be out before London",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(3, 6, "s0").hold("s0", 10)
    tl.candles_to(4, 4, "s1").fade("fix", "s1", 10).hold("s1", 20)
    tl.candles_to(d.RANGE[1], 5, "s2").fade("range", "s2", 10).hold("s2", 20)
    tl.candles_to(d.I_REJECT + 1, 5, "s3").fade("reject", "s3", 10).fade("position", "s3", 10).hold("s3", 25)
    tl.candles_to(d.N, 4, "s4").fade("exit", "s4", 10).hold("s4", 25)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("tokyo-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
