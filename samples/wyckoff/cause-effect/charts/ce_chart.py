"""
Cause and effect: two synthetic ranges, a short narrow one and a long wide one, each followed by markup. The measured
move (range height projected from the range high) is drawn for each; the longer, wider range is followed by the larger
move here. Illustrative only — real follow-through varies widely.

Candles: data/cause_small.csv and data/cause_large.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save
from sdkit import load

NAME = "cause-effect-ranges"
SM = load(DATA / "cause_small.csv", Candle, unit_label="day")
LG = load(DATA / "cause_large.csv", Candle, unit_label="day")
GAP = 4
OFF = {"small": 0, "large": len(SM) + GAP}
N = len(SM) + GAP + len(LG)
RS, RL = 10, 28                                   # bars in each range


def stats(C, n):
    hi, lo = max(c.h for c in C[:n]), min(c.l for c in C[:n])
    top = max(c.h for c in C[n:])
    return dict(hi=hi, lo=lo, height=hi - lo, width=n, obj=hi + (hi - lo), top=top, move=top - hi)


S1, S2 = stats(SM, RS), stats(LG, RL)


def validate():
    for c in SM + LG:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert SM[RS].c > S1["hi"] - 0.4 and LG[RL].c > S2["hi"] - 0.4, "markup starts at the range edge"
    assert S1["top"] >= S1["obj"] and S2["top"] >= S2["obj"], "both reach the 1× measured move"
    assert S1["top"] < S1["hi"] + 1.5 * S1["height"], "the small range does not reach 1.5×"
    assert S2["height"] * S2["width"] > 4 * S1["height"] * S1["width"], "the large cause is much larger"
    assert S2["move"] > 2 * S1["move"], "…and so is the effect (in this illustration)"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    base = ch.reveal
    shown_total = None if base.candles is None else base.candles
    from dataclasses import replace
    for key, C, n, st in (("small", SM, RS, S1), ("large", LG, RL, S2)):
        o = OFF[key]
        xs = [o + i for i in range(len(C))]
        if shown_total is None:
            k = None
        else:
            k = max(0, min(len(C), shown_total - (0 if key == "small" else len(SM) + GAP)))
        ch.reveal = replace(base, candles=k)
        ch.candles(C, f"Synthetic daily ({key})", price_fmt=".0f", x=xs)
        ch.reveal = base
        with ch.group(f"{key}_range"):
            ch.zone(o - 0.5, o + n - 0.5, st["lo"], st["hi"], color=t.zone, alpha=0.12, dash="dot")
            ch.label(o + n / 2 - 0.5, st["lo"] - 0.6, f"<b>Cause</b>: range {st['height']:.1f} high × {st['width']} bars",
                     size=11, color=t.zone_text, xanchor="center", yanchor="top")
        with ch.group(f"{key}_obj"):
            ch.hline(o + n - 0.5, o + len(C), st["obj"], color=t.bull_text, dash="dash", width=1.6)
            ch.label(o + n - 0.9, st["obj"] + 0.3, f"1× measured move {st['obj']:.1f}", size=11, color=t.bull_text,
                     xanchor="right", yanchor="bottom")
            ch.label(o + n - 0.9, st["obj"] + 2.0, f"<b>Effect</b>: +{st['move']:.1f} above the range high", size=11,
                     color=t.ink, xanchor="right", yanchor="bottom")
    with ch.group("titles"):
        ch.label(RS / 2 + 4, 62.0, "<b>Short, narrow range</b>", size=13, color=t.ink, xanchor="center", yanchor="top")
        ch.label(OFF["large"] + 20, 62.0, "<b>Long, wide range</b>", size=13, color=t.ink, xanchor="center", yanchor="top")
    ch.header("Wyckoff · Cause and Effect", "Cause and Effect — a Bigger Range, a Bigger Move (Here)",
              "Synthetic daily candles · the measured move is the range height projected up from the range high",
              key=[("■", t.zone, "Range (the cause)"), ("┅", t.bull_text, "1× measured move")])
    ch.footnote("Illustrative: real follow-through varies widely, and many ranges end in failure rather than a measured move")
    ch.caption()
    ch.axes(x_range=[-1, N + 0.5], y_range=[35, 63], y_dtick=5, y_fmt=".0f", x_title="Bars (two separate examples)",
            x_ticks=([0, RS, OFF["large"], OFF["large"] + RL], ["range 1", "breakout", "range 2", "breakout"]))
    return ch.fig


def main():
    paths = save(NAME, build, "Cause and Effect", OUT)
    print(NAME, {k: round(v, 2) for k, v in S1.items()}, {k: round(v, 2) for k, v in S2.items()},
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
