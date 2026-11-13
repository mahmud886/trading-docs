"""Explainer video: a bullish Unicorn. Reuses eurusd_unicorn.build()."""

import shutil
import sys

import eurusd_unicorn as un
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("ob", "sweep", "breaker", "unicorn", "position", "projection")


def idx(hhmm):
    return un.CANDLES.index(by_time(un.CANDLES, hhmm))


def captions(t):
    return {
        "intro": "<b>Unicorn model</b> — a breaker and an FVG at the same price",
        "s1": "The last up-close candle before the drop: a bearish OB, 1.0870 – 1.0880",
        "s2": "Price sweeps the sell-side: 1.0855, under the 1.0862 low",
        "s3": "Displacement breaks above the OB → a bullish breaker, plus an FVG 1.0875 – 1.0885",
        "s4": f"<span style='color:{t.accent}'><b>Unicorn</b></span>: the overlap, 1.0875 – 1.0880",
        "s5": "Price returns → buy 1.0880 · stop 1.0868 · target 1.0960 (1 : 6.7)",
        "s6": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("11:30"), 5, "s1").fade("ob", "s1", 10).hold("s1", 30)
    tl.candles_to(idx("12:15"), 8, "s2").fade("sweep", "s2", 10).hold("s2", 25)
    tl.candles_to(idx("13:00"), 10, "s3").fade("breaker", "s3", 10).hold("s3", 40)
    tl.candles_to(idx("14:00"), 6, "s4").fade("unicorn", "s4", 10).hold("s4", 30)
    tl.candles_to(idx("14:45"), 10, "s5").fade("position", "s5", 10).hold("s5", 25)
    tl.candles_to(len(un.CANDLES), 8, "s5").hold("s5", 15)
    tl.fade("projection", "s6", 10).hold("s6", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("unicorn-explainer", un.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
