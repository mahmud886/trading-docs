"""Explainer video: a London Judas swing on a bullish day. Reuses eurusd_london_judas.build()."""

import shutil
import sys

import eurusd_london_judas as js
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("asia", "judas", "mss", "position", "entry", "projection")


def idx(hhmm):
    return js.CANDLES.index(by_time(js.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>Judas Swing</b> — the session's first move goes the wrong way",
        "s0": "Bias today: <b>bullish</b>. The Asian range is 1.0880 – 1.0900",
        "s1": step("①", "<b>2:00 PM BD</b>: London drops through the Asian low — it looks bearish"),
        "s2": "It's the Judas swing: breakdown sellers join, longs' stops are taken down to 1.0868",
        "s3": step("②", "<b>2:45 PM BD</b>: an 18-pip displacement closes above 1.0889 — the true move starts"),
        "s4": step("③", "Back into the bullish OB → buy 1.0875 · stop 1.0862 · target 1.0930 (1 : 4.2)"),
        "s5": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("13:15"), 3, "s0").fade("asia", "s0", 12).hold("s0", 25)
    tl.candles_to(idx("14:15"), 10, "s1").hold("s1", 15)
    tl.candles_to(idx("14:30"), 12, "s2").fade("judas", "s2", 10).hold("s2", 30)
    tl.candles_to(idx("15:00"), 12, "s3").fade("mss", "s3", 10).hold("s3", 25)
    tl.candles_to(idx("16:00"), 7, "s4").fade("position", "s4", 10).fade("entry", "s4", 10)
    tl.candles_to(len(js.CANDLES), 7, "s4").hold("s4", 30)
    tl.fade("projection", "s5", 10).hold("s5", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("judas-swing-explainer", js.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=1.0948)


if __name__ == "__main__":
    main()
