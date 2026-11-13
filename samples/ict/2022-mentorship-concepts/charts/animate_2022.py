"""Explainer video: the 2022 model. Reuses eurusd_2022_model.build()."""

import shutil
import sys

import eurusd_2022_model as m
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("kz", "sweep", "mss", "pd", "position", "entry", "projection")


def idx(hhmm):
    return m.CANDLES.index(by_time(m.CANDLES, hhmm))


def captions(t):
    return {
        "intro": "<b>The 2022 model</b> — sweep, shift, FVG",
        "s1": "<b>①–②</b> Bias bullish; London kill zone opens at 12 PM BD",
        "s2": "<b>③</b> 12:20 PM BD: the Judas swing takes the Asian low",
        "s3": f"<b>④</b> 12:35 PM BD: a {m.STATS['body']:.0f}-pip MSS leaves an FVG",
        "s4": "<b>⑤</b> The FVG CE 1.0855 sits at the top of the OTE zone",
        "s5": "<b>⑥–⑧</b> Buy 1.0855 · stop 1.0840 · target 1.0930 (1 : 5)",
        "s6": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("12:00"), 4, "s1").fade("kz", "s1", 10).hold("s1", 25)
    tl.candles_to(idx("12:25"), 8, "s2").fade("sweep", "s2", 10).hold("s2", 25)
    tl.candles_to(idx("12:45"), 10, "s3").fade("mss", "s3", 10).hold("s3", 30)
    tl.candles_to(idx("12:55"), 8, "s4").fade("pd", "s4", 10).hold("s4", 30)
    tl.candles_to(idx("13:00"), 8, "s5").fade("position", "s5", 10).fade("entry", "s5", 10).hold("s5", 30)
    tl.candles_to(len(m.CANDLES), 8, "s5").hold("s5", 15)
    tl.fade("projection", "s6", 10).hold("s6", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("model-2022-explainer", m.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
