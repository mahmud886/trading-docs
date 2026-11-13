"""Explainer video: four ICT entry models. Reuses model_shapes.build()."""

import shutil
import sys

import model_shapes as ms
from _paths import OUT
from chartkit import THEMES, Timeline, render_video

GROUPS = ("silver", "unicorn", "venom", "mmbm")


def captions(t):
    return {
        "intro": "<b>Four ICT entry models</b> — same idea, different trigger",
        "s1": "<b>Silver Bullet</b>: the first FVG inside a fixed one-hour window",
        "s2": "<b>Unicorn</b>: where a breaker and an FVG overlap",
        "s3": "<b>Venom</b>: the first touch of the FVG right after a sweep",
        "s4": "<b>MMBM</b>: the pullback after the first leg of a reversal",
        "s5": "Pick <b>one</b>, test it, then trade it",
    }


def timeline():
    tl = Timeline(GROUPS)
    tl.hold("intro", 30)
    for g, cap in zip(GROUPS, ("s1", "s2", "s3", "s4")):
        tl.fade(g, cap, 15).hold(cap, 55)
    tl.hold("s5", 70)
    return tl


def main():
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    wanted = set(sys.argv[1:]) or {"light", "dark"}
    render_video("advanced-models-explainer", ms.build, timeline(), captions, out_dir=OUT,
                 themes=[t for t in THEMES if t.name in wanted])


if __name__ == "__main__":
    main()
