"""Explainer video: stacking confirmation at an H4 demand zone. Reuses confirm_chart.build()."""

import shutil
import sys

import confirm_chart as d
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("zone", "touch", "hammer", "choch", "position", "entry")


def captions(t):
    return {
        "intro": "<b>Confirmation</b> — evidence added one close at a time",
        "s0": "Daily trend up · EUR/USD falls into an H4 demand zone at 1.0840 – 1.0850",
        "s1": "① Price reaches the zone. That's a location, not a signal",
        "s2": "② A hammer wicks to 1.0841 and closes back above the zone — candle confirmation",
        "s3": "③ A close above the last lower high 1.0869 — structure confirms (CHOCH)",
        "s4": "④ Buy the retest at 1.0862 · stop 1.0836 under the hammer · target 1.0915 (planned 1 : 2.0)",
        "end": "Each confirmation costs price. Decide in advance how many you need",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.fade("zone", "s0", 10).candles_to(8, 8, "s0").hold("s0", 15)
    tl.candles_to(d.I_TOUCH + 1, 3, "s1").fade("touch", "s1", 10).hold("s1", 25)
    tl.candles_to(d.I_HAMMER + 1, 3, "s2").fade("hammer", "s2", 10).hold("s2", 25)
    tl.candles_to(d.I_CHOCH + 1, 6, "s3").fade("choch", "s3", 10).hold("s3", 25)
    tl.candles_to(d.I_FILL + 1, 4, "s4").fade("position", "s4", 10).fade("entry", "s4", 8).hold("s4", 25)
    tl.candles_to(d.N, 5, "end").hold("end", 45)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("confirmation-explainer", d.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
