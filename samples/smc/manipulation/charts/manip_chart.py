"""
Bearish manipulation — a sweep of equal highs above a range, a close back inside, CHOCH down, entry at the FVG/OB.

Candles: data/eurusd_1h_manipulation.csv (synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "bearish-manipulation"
PIP = 0.0001


def load():
    with (DATA / "eurusd_1h_manipulation.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"hour {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
N = len(C)
I_EQH, I_EQL, I_HL, I_OB, I_SWEEP, I_CHOCH, I_FILL = (3, 8), (5, 10), 13, 14, 15, 17, 19
EQH, EQL, HL = 1.0950, 1.0862, C[I_HL].l
OB = (C[I_OB].o, C[I_OB].c)
FVG = (C[I_SWEEP + 2].h, C[I_SWEEP].l)
ENTRY, STOP, TARGET = 1.0938, 1.0971, 1.0858


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(C[i].h == EQH for i in I_EQH) and all(c.h < EQH for k, c in enumerate(C[:I_SWEEP]) if k not in I_EQH)
    assert min(C[i].l for i in I_EQL) == EQL and all(c.l >= EQL for c in C[:22])
    s = C[I_SWEEP]
    assert s.h > EQH and s.c < EQH, "sweep: trades above the equal highs, closes back inside"
    assert C[I_OB].bullish and not s.bullish
    assert FVG[0] < FVG[1], "bearish FVG between the sweep candle and two candles later"
    assert all(c.c >= HL for c in C[I_HL:I_CHOCH]) and C[I_CHOCH].c < HL, "CHOCH below the higher low"
    assert C[I_FILL].h >= ENTRY and FVG[0] <= ENTRY and OB[0] <= ENTRY <= OB[1]
    assert all(c.h < STOP for c in C) and STOP > s.h
    assert min(c.l for c in C) > TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    with ch.group("liq"):
        ch.hline(I_EQH[0], I_SWEEP + 0.5, EQH, color=t.bear_text, dash="dash")
        ch.label(I_EQH[0] - 0.5, EQH + 0.0003, "<b>BSL</b> — equal highs 1.0950", size=11, color=t.bear_text,
                 yanchor="bottom")
        ch.hline(I_EQL[0], N + 1.5, EQL, color=t.bull_text, dash="dash")
        ch.label(I_EQL[0] + 1.5, EQL - 0.0003, "<b>SSL</b> — equal lows 1.0862", size=11, color=t.bull_text,
                 yanchor="top")
    with ch.group("sweep"):
        ch.callout(I_SWEEP, C[I_SWEEP].h, 6.0, 1.0978, "<b>① The false move</b>: a wick to 1.0968 runs the buy<br>"
                   "stops, then the candle closes back below 1.0950", xanchor="center")
    with ch.group("choch"):
        ch.hline(I_HL, I_CHOCH + 0.4, HL, color=t.ink3, dash="dot")
        ch.callout(I_CHOCH, C[I_CHOCH].c, 12.0, 1.0852, "<b>②</b> CHOCH: close below the 1.0918 higher low",
                   xanchor="center")
    with ch.group("zone"):
        ch.zone(I_OB - 0.4, I_FILL + 0.5, *OB, color=t.bear, alpha=0.18)
        ch.zone(I_SWEEP - 0.4, I_FILL + 0.5, *FVG, color=t.bear, alpha=0.30, dash="dot")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, N + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].h, 22.0, 1.0978, "<b>③</b> Retrace into the FVG / OB → sell 1.0938",
                   xanchor="center")
    ch.header("SMC · Manipulation", "Manipulation — the False Move Above the Range",
              "EUR/USD · 1-hour candles · equal highs are swept, price closes back inside, and the move turns",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bear, "OB / FVG")])
    ch.footnote("Synthetic candles built around the levels in the Manipulation lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, N + 2], y_range=[1.0845, 1.0990], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Bearish Manipulation", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: OB {OB} FVG {FVG} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
