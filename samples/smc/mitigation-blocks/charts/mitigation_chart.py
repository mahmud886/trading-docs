"""
Bearish mitigation block — a bullish OB fails after the rally from it could not make a new high (no sweep).

Candles: data/eurusd_1h_mitigation.csv (synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "bearish-mitigation-block"
PIP = 0.0001


def load():
    with (DATA / "eurusd_1h_mitigation.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"hour {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
HIGH, I_HIGH, I_OB, I_LH, I_BREAK, I_RETEST = 1.0880, 4, 7, 9, 11, 16
OB = (C[I_OB].l, C[I_OB].o)
ENTRY, STOP, TARGET = 1.0861, 1.0870, 1.0820


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert C[I_HIGH].h == HIGH == max(c.h for c in C)
    assert not C[I_OB].bullish and C[I_OB + 1].bullish, "bullish OB = last down-close candle before the rally"
    assert C[I_LH].h < HIGH, "the rally from the OB fails to make a new high: no sweep"
    assert C[I_BREAK].c < OB[0] and all(c.c >= OB[0] for c in C[I_OB:I_BREAK]), "first close below the OB"
    assert OB[0] <= ENTRY <= OB[1] and C[I_RETEST].h >= ENTRY and all(c.h < OB[0] for c in C[I_BREAK + 1:I_RETEST])
    assert STOP > C[I_OB].h and min(c.l for c in C) <= TARGET


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(C)
    with ch.group("ob"):
        ch.zone(I_OB - 0.4, I_BREAK - 0.4, *OB, color=t.bull, alpha=0.25)
        ch.callout(I_OB, OB[0], 3.5, 1.0845, "<b>① Bullish OB</b> 1.0860 – 1.0865:<br>last down-close candle before "
                   "the rally", xanchor="center")
    with ch.group("fail"):
        ch.hline(I_HIGH, I_LH + 0.4, HIGH, color=t.ink3, width=1.2)
        ch.callout(I_LH, C[I_LH].h, 10.5, 1.0888, "<b>②</b> The rally stops at 1.0874 —<br>it can't reach the 1.0880 "
                   "high", xanchor="center")
    with ch.group("break"):
        ch.callout(I_BREAK, C[I_BREAK].c, 9.0, 1.0838, "<b>③</b> A close below the OB", xanchor="center")
    with ch.group("mb"):
        ch.zone(I_BREAK - 0.4, I_RETEST + 0.5, *OB, color=t.bear, alpha=0.30)
        ch.label(I_BREAK + 0.6, OB[1] + 0.0002, "<b>bearish mitigation block</b>", size=11, color=t.bear_text,
                 yanchor="bottom")
    with ch.group("position"):
        ch.position(I_RETEST - 0.4, n + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(n)), text=[c.label for c in C])
    with ch.group("retest"):
        ch.callout(I_RETEST, C[I_RETEST].h, 13.0, 1.0878, "<b>④</b> Retest from below → sell 1.0861",
                   xanchor="center")
    ch.header("SMC · Mitigation Blocks", "The Mitigation Block — an Order Block That Fails Without a Sweep",
              "EUR/USD · 1-hour candles · bullish OB → failed rally (no new high) → close below → retest",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bear,
                                                                                    "Mitigation block")])
    ch.footnote("Synthetic candles for the Mitigation Blocks lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, n + 2], y_range=[1.0812, 1.0896], y_dtick=0.0010, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, n, 4)), [str(i + 1) for i in range(0, n, 4)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Mitigation Block", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: OB {OB} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
