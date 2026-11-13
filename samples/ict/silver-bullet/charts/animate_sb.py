"""Explainer video: NY AM Silver Bullet. Reuses eurusd_ny_am_sb.build()."""

import shutil
import sys

import eurusd_ny_am_sb as sb
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("window", "disp", "swing", "position", "entry", "projection")


def idx(hhmm):
    return sb.CANDLES.index(by_time(sb.CANDLES, hhmm))


def captions(t):
    return {
        "intro": "<b>Silver Bullet</b> — one window, one FVG",
        "s0": "Bias is bullish. Wait for the window",
        "s1": "<b>8:00 PM BD</b>: the NY AM Silver Bullet window opens",
        "s2": f"<b>8:15 PM BD</b>: a {sb.STATS['body']:.0f}-pip displacement leaves an FVG 1.0882 – 1.0890",
        "s3": "Limit buy at the CE 1.0886 · stop 1.0875 below the swing low · target 1.0930 (1 : 4)",
        "s4": "<b>8:40 PM BD</b>: the limit fills",
        "s5": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("20:00"), 4, "s0").hold("s0", 15)
    tl.fade("window", "s1", 12).hold("s1", 25)
    tl.candles_to(idx("20:25"), 10, "s2").fade("disp", "s2", 10).hold("s2", 35)
    tl.fade("swing", "s3", 10).fade("position", "s3", 10).hold("s3", 45)
    tl.candles_to(idx("20:45"), 10, "s4").fade("entry", "s4", 10).hold("s4", 25)
    tl.candles_to(len(sb.CANDLES), 8, "s4").hold("s4", 20)
    tl.fade("projection", "s5", 10).hold("s5", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("silver-bullet-explainer", sb.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
