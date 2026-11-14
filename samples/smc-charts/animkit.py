"""One-call explainer videos: a list of steps, each with a caption, how far to grow the candles and which groups to fade in."""

import shutil
import sys

from chartkit import THEMES, Timeline, render_video


def run(name, build, groups, intro, steps, end, out_dir, argv=None):
    """steps: [(caption, candles_to | None, [groups to fade in], frames per candle)]"""
    assert shutil.which("ffmpeg"), "ffmpeg is required"
    caps = {"intro": intro, "end": end}
    tl = Timeline(groups)
    tl.hold("intro", 30)
    for i, step in enumerate(steps):
        cap, to, fades, *rest = step
        per = rest[0] if rest else 6
        key = f"s{i}"
        caps[key] = cap
        if to is not None:
            tl.candles_to(to, per, key)
        for g in fades:
            tl.fade(g, key, 10)
        tl.hold(key, 25)
    tl.hold("end", 45)
    wanted = set(argv if argv is not None else sys.argv[1:]) or {"light", "dark"}
    return render_video(name, build, tl, lambda t: caps, out_dir=out_dir, themes=[t for t in THEMES if t.name in wanted])
