"""
Three ways to enter at the same HTF order block: risk entry, candle confirmation, LTF CHOCH + FVG.
Same stop and target, so the chart shows what each level of confirmation costs in R:R.

Candles: data/eurusd_5m_confirmation.csv (synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "entry-confirmation-tiers"
PIP = 0.0001


def load():
    with (DATA / "eurusd_5m_confirmation.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"candle {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
N = len(C)
OB = (1.0840, 1.0850)
I_LH, I_LOW, I_ENG, I_CHOCH, I_FILL = 3, 5, 6, 8, 10
LH = C[I_LH].h
FVG = (C[I_CHOCH - 1].h, C[I_CHOCH + 1].l)
STOP, TARGET = 1.0838, 1.0900
ENTRIES = {"A": (4, 1.0850, "Risk entry at the OB"), "B": (I_ENG, C[I_ENG].c, "Engulfing close"),
           "C": (I_FILL, 1.0861, "LTF CHOCH + FVG")}


def rr(entry):
    risk, [(_, reward, r)] = levels(entry, STOP, [TARGET], PIP)
    return risk, reward, r


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert C[I_LH].h > max(C[I_LH - 1].h, C[I_LH + 1].h), "the lower high is a swing high"
    assert min(c.l for c in C) == C[I_LOW].l and OB[0] < C[I_LOW].l < OB[1], "low inside the OB"
    e = C[I_ENG]
    assert e.bullish and not C[I_ENG - 1].bullish and e.c > C[I_ENG - 1].o and e.o <= C[I_ENG - 1].c, "engulfing"
    assert all(c.c <= LH for c in C[I_LH:I_CHOCH]) and C[I_CHOCH].c > LH, "CHOCH above the lower high"
    assert FVG[0] < FVG[1], "bullish FVG"
    for k, (i, entry, _) in ENTRIES.items():
        assert C[i].l <= entry <= C[i].h or (k == "B" and entry == C[i].c), k
    assert FVG[0] <= ENTRIES["C"][1] <= FVG[1] and C[I_FILL].l >= FVG[0] - 0.0002
    assert STOP < OB[0] and max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"
    rs = [rr(e)[2] for _, e, _ in ENTRIES.values()]
    assert rs == sorted(rs, reverse=True), "more confirmation, lower R:R"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 5.5
    with ch.group("ob"):
        ch.zone(-0.5, x_end, *OB, color=t.bull, alpha=0.22)
        ch.label(9.0, (OB[0] + OB[1]) / 2, "<b>HTF bullish OB</b> (1H) 1.0840 – 1.0850 — the POI", size=11,
                 color=t.bull_text, yanchor="middle")
    with ch.group("levels"):
        ch.hline(-0.5, x_end, STOP, color=t.bear_text, width=1.5)
        ch.label(x_end, STOP - 0.0002, "Stop 1.0838 (all three)", size=11, color=t.bear_text, xanchor="right",
                 yanchor="top")
        ch.hline(-0.5, x_end, TARGET, color=t.bull_text, width=1.5)
        ch.label(x_end, TARGET + 0.0002, "Target 1.0900 (all three)", size=11, color=t.bull_text, xanchor="right",
                 yanchor="bottom")
    ch.candles(C, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    for k, (i, entry, name) in ENTRIES.items():
        risk, reward, r = rr(entry)
        with ch.group(k):
            ch.hline(i - 0.4, x_end, entry, color=t.ink2, dash="dot")
            ch.label(N - 0.2, entry + 0.00005, f"<b>{k}</b> {name} · {entry:.4f} · risk {risk:g} · <b>1 : {r:.1f}</b>",
                     size=11, color=t.ink, yanchor="bottom")
            if k == "C":
                ch.hline(I_LH, I_CHOCH + 0.4, LH, color=t.ink3, dash="dash")
                ch.zone(I_CHOCH - 1 - 0.4, I_FILL + 0.5, *FVG, color=t.bull, alpha=0.35, dash="dot")
                ch.callout(I_CHOCH, C[I_CHOCH].c, 4.5, 1.0889, "CHOCH: close above the 1.0866 lower high,<br>"
                           "leaving an FVG 1.0858 – 1.0862", xanchor="center")
            elif k == "B":
                ch.callout(I_ENG, C[I_ENG].h, 3.0, 1.0877, "Bullish engulfing<br>closes 1.0854", xanchor="center")
            else:
                ch.callout(4, 1.0850, 1.0, 1.0832, "Limit order at the OB's top", xanchor="center")
    ch.header("SMC · Entry Confirmation", "Entry Confirmation — What Each Level Costs",
              "EUR/USD · 5-minute candles · three entries at the same POI, same stop and target",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "OB / FVG")])
    ch.footnote("Synthetic candles built around the levels in the Entry Confirmation lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0826, 1.0908], y_dtick=0.0010, y_fmt=".4f",
            x_title="5-minute candles", x_ticks=(list(range(0, N, 2)), [str(i + 1) for i in range(0, N, 2)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Entry Confirmation Tiers", OUT)
    for k, (_, e, name) in ENTRIES.items():
        print(k, name, e, rr(e))
    print(f"{NAME}: FVG {FVG} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
