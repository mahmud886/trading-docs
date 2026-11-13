"""Explainer video: a bearish AMD day. Reuses gold_amd_bear.build()."""

import shutil
import sys

import gold_amd_bear as amd
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("asia", "manip", "mss", "position", "entry", "dist", "projection")


def idx(hhmm):
    return amd.CANDLES.index(by_time(amd.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>AMD</b> on a bearish day — range, false rally, real drop",
        "s1": step("A", "<b>Accumulation</b>: Asia builds a range, 2,035 – 2,042"),
        "s2": step("M", "<b>Manipulation</b>: London spikes above the Asian high to 2,046"),
        "s3": f"<b>12:45 PM BD</b>: a {amd.STATS['mss_body']:.1f}-point bearish MSS leaves an FVG",
        "s4": "Back into the FVG → sell 2,041 · stop 2,047 · target 2,018 (1 : 3.8)",
        "s5": step("D", "<b>Distribution</b>: the real move down"),
        "s6": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("12:00"), 4, "s1").fade("asia", "s1", 12).hold("s1", 25)
    tl.candles_to(idx("12:30"), 12, "s2").fade("manip", "s2", 10).hold("s2", 30)
    tl.candles_to(idx("13:00"), 12, "s3").fade("mss", "s3", 10).hold("s3", 25)
    tl.candles_to(idx("13:45"), 10, "s4").fade("position", "s4", 10).fade("entry", "s4", 10).hold("s4", 30)
    tl.fade("dist", "s5", 10)
    tl.candles_to(len(amd.CANDLES), 8, "s5").hold("s5", 25)
    tl.fade("projection", "s6", 10).hold("s6", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("amd-explainer", amd.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
