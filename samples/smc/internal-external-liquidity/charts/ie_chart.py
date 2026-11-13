"""
Internal vs external liquidity — price takes an external high, then trades back through internal gaps toward the next
external low.

Candles: samples/smc/_shared/eurusd_1h_structure.csv (synthetic).
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from smckit import fvgs
from structure import CANDLES, IDX, LEVELS

NAME = "internal-external-liquidity"
N = len(CANDLES)
GAPS = {i: (lo, hi) for i, lo, hi, k in fvgs(CANDLES) if k == "bull" and i in (12, 20)}
EXT_HIGH, EXT_LOW = LEVELS["H3"], LEVELS["HL1"]


def reached(zone, start):
    return next(c.t for c in CANDLES[start:] if c.l <= zone[1])


R20 = reached(GAPS[20], IDX["H4"])
R12 = reached(GAPS[12], IDX["H4"])


def validate():
    assert set(GAPS) == {12, 20}, "two bullish FVGs left by the two BOS candles"
    assert CANDLES[IDX["H4"]].h > EXT_HIGH, "external buy-side taken"
    assert IDX["H4"] < R20 < R12, "then the internal gaps are revisited, nearest first"
    assert min(c.l for c in CANDLES[IDX["H4"]:]) > EXT_LOW, "the next external low is still resting"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    with ch.group("external"):
        ch.hline(IDX["H3"], N + 0.5, EXT_HIGH, color=t.bull_text, width=1.4)
        ch.label(N + 0.5, EXT_HIGH + 0.0002, "<b>external</b> buy-side · 1.0925", size=11, color=t.bull_text,
                 xanchor="right", yanchor="bottom")
        ch.hline(IDX["HL1"], N + 0.5, EXT_LOW, color=t.bear_text, width=1.4)
        ch.label(N + 0.5, EXT_LOW - 0.0002, "<b>external</b> sell-side · 1.0822", size=11, color=t.bear_text,
                 xanchor="right", yanchor="top")
    with ch.group("internal"):
        for i, z in GAPS.items():
            ch.zone(i - 1.4, N + 0.5, *z, color=t.accent, alpha=0.16, dash="dash")
            ch.label(i - 1.6, sum(z) / 2, f"<b>internal</b> FVG {z[0]:.4f} – {z[1]:.4f}", size=10,
                     color=t.accent, xanchor="right")
    ch.candles(CANDLES, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)),
               text=[c.label for c in CANDLES])
    with ch.group("s1"):
        ch.callout(IDX["H4"], LEVELS["H4"], 21.0, 1.0950, "<b>①</b> External buy-side taken (1.0930)",
                   xanchor="center")
    with ch.group("s2"):
        ch.callout(R20, CANDLES[R20].l, 34.0, 1.0918, "<b>②</b> Back into the nearest internal FVG", xanchor="left")
    with ch.group("s3"):
        ch.callout(R12, CANDLES[R12].l, 33.0, 1.0832, "<b>③</b> Then the deeper internal FVG", xanchor="center")
    with ch.group("s4"):
        ch.label(N - 0.5, EXT_LOW + 0.0012, "<b>④</b> next external target →", size=11, color=t.bear_text,
                 xanchor="right")
    ch.header("SMC · Internal & External Liquidity", "External Liquidity Is the Target, Internal Is the Path",
              "EUR/USD · 1-hour candles · after the external high is taken, price trades back through internal gaps",
              key=[("—", t.bull_text, "External BSL"), ("—", t.bear_text, "External SSL"), ("■", t.accent,
                                                                                         "Internal FVG")])
    ch.footnote("Synthetic candles (shared SMC structure series) for the Internal & External Liquidity lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, N + 1], y_range=[1.0788, 1.0962], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 6)), [str(i + 1) for i in range(0, N, 6)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Internal and External Liquidity", OUT)
    print(f"{NAME}: gaps {GAPS} reached {R20}, {R12} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
