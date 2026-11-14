"""Explainer video: candlestick basics. Reuses gallery_chart.build()."""

import shutil
import sys

import gallery_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("anatomy", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c8")


def captions(t):
    return {
        "intro": "<b>Candlestick basics</b> — every candle shows open, high, low and close",
        "s0": "A <b>bullish</b> candle: close above open. Body = open to close; wicks = high and low",
        "s1": "A <b>bearish</b> candle: close below open",
        "s2": "<b>Doji</b>: open ≈ close — neither side won",
        "s3": "<b>Marubozu</b>: almost no wicks — one side in control all period",
        "s4": "<b>Spinning top</b>: small body, wicks both sides — indecision",
        "s5": "<b>Hammer</b>: lower wick ≥ 2× body — lower prices were rejected",
        "s6": "<b>Shooting star</b>: upper wick ≥ 2× body — higher prices were rejected",
        "s8": "<b>Bullish engulfing</b>: a bullish body covers the previous bearish body",
        "end": "Context decides what a candle means — the next lessons show where to look",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(1, 6, "s0").fade("anatomy", "s0", 10).fade("c0", "s0", 8).hold("s0", 40)
    for i in range(1, 7):
        tl.candles_to(i + 1, 6, f"s{i}").fade(f"c{i}", f"s{i}", 8).hold(f"s{i}", 28)
    tl.candles_to(9, 8, "s8").fade("c8", "s8", 8).hold("s8", 35)
    tl.hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("candlestick-basics-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
