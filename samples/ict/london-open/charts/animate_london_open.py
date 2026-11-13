"""Explainer video: a bearish London open (gold). Reuses gold_london_bear.build(). Output: london-open-explainer-*.mp4"""

import shutil
import sys

import gold_london_bear as lo
from _paths import OUT
from chartkit import THEMES, Timeline, by_time, render_video

GROUPS = ("asia", "sweep", "mss", "fvg", "entry", "position", "projection")


def idx(hhmm):
    return lo.CANDLES.index(by_time(lo.CANDLES, hhmm))


def captions(t):
    def step(n, text):
        return f"<span style='color:{t.accent}'><b>{n}</b></span>  {text}"

    return {
        "intro": "<b>London Open</b> — bias first, then wait for the false move",
        "s0": "Before 12 PM BD: mark the <b>Asian range</b> 2,032 – 2,040 · today's bias is <b>bearish</b>",
        "s1": step("①", "<b>Judas swing</b>: London spikes above the Asian high to 2,044 — buy stops taken"),
        "s2": step("②", "<b>1:00 PM BD</b>: a 6.5-pt displacement closes below 2,036.5 → 5m MSS"),
        "s3": "The move leaves a <b>bearish FVG</b> 2,037.5 – 2,040.5 · CE 2,039",
        "s4": step("③", "<b>Retrace to the CE</b> → sell 2,039 · stop 2,045 · target 2,010 (1 : 4.8)"),
        "s5": f"<span style='color:{t.ink3}'>Hypothetical path</span> — a scenario, not a result",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(idx("12:00"), 4, "s0").fade("asia", "s0", 12).hold("s0", 25)
    tl.candles_to(idx("12:50"), 7, "s1").fade("sweep", "s1", 10).hold("s1", 25)
    tl.candles_to(idx("13:05"), 14, "s2").fade("mss", "s2", 10).hold("s2", 25)
    tl.candles_to(idx("13:10"), 10, "s3").fade("fvg", "s3", 10).hold("s3", 25)
    tl.candles_to(idx("13:20"), 10, "s4").fade("entry", "s4", 8).fade("position", "s4", 10)
    tl.candles_to(len(lo.CANDLES), 8, "s4").hold("s4", 30)
    tl.fade("projection", "s5", 10).hold("s5", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("london-open-explainer", lo.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted], y_top=2052)


if __name__ == "__main__":
    main()
