"""Explainer video: re-accumulation. Reuses reacc_chart.build()."""

import shutil
import sys

import reacc_chart as r
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("trend", "range", "sweep", "position", "bos")


def captions(t):
    return {
        "intro": "<b>Re-accumulation</b> — a pause inside an uptrend",
        "s1": "The trend breaks structure up, then stalls",
        "s2": "A range forms: 1.0880 – 1.0910. Stops build under its low",
        "s3": "The low is swept to 1.0872 and closed back inside",
        "s4": "Retest → buy 1.0890 · stop 1.0868 · target 1.0990",
        "s5": "A BOS above the range: the uptrend resumes",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    tl.candles_to(r.I0 + 1, 5, "s1").fade("trend", "s1", 10).hold("s1", 20)
    tl.candles_to(r.I_SWEEP, 5, "s2").fade("range", "s2", 10).hold("s2", 25)
    tl.candles_to(r.I_SWEEP + 1, 10, "s3").fade("sweep", "s3", 10).hold("s3", 30)
    tl.candles_to(r.I_FILL + 1, 10, "s4").fade("position", "s4", 10).hold("s4", 30)
    tl.candles_to(r.N, 6, "s5").fade("bos", "s5", 10).hold("s5", 60)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("reaccumulation-explainer", r.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
