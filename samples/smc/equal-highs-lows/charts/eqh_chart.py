"""
Equal highs and lows — the highs are swept and rejected, then the equal lows below are run.

Candles: data/eurusd_1h_eqh.csv (synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "equal-highs-lows"
PIP = 0.0001


def load():
    with (DATA / "eurusd_1h_eqh.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"hour {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
EQH, EQL, I_SWEEP, I_FILL, I_RUN = (2, 8), (5, 11), 14, 15, 21
ENTRY, STOP, TARGET = 1.0942, 1.0960, 1.0905
TOL = 2 * PIP


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    hs, ls = [C[i].h for i in EQH], [C[i].l for i in EQL]
    assert max(hs) - min(hs) <= TOL and max(ls) - min(ls) <= TOL, "equal within 2 pips"
    assert all(c.h <= max(hs) for c in C[:I_SWEEP]) and all(c.l >= min(ls) for c in C[:I_SWEEP + 5])
    s = C[I_SWEEP]
    assert s.h > max(hs) and s.c < min(hs), "sweep: through the equal highs, close back below"
    assert C[I_FILL].h >= ENTRY
    assert C[I_RUN].c < min(ls), "run: the equal lows are closed through"
    assert STOP > s.h and TARGET < min(ls)


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(C)
    hs, ls = [C[i].h for i in EQH], [C[i].l for i in EQL]
    with ch.group("eqh"):
        ch.zone(EQH[0] - 0.4, I_SWEEP + 0.4, min(hs), max(hs) + 0.0001, color=t.bull, alpha=0.25, border=False)
        ch.hline(EQH[0] - 0.4, I_SWEEP + 0.4, max(hs), color=t.bull_text, width=1.4)
        for i in EQH:
            ch.label(i, C[i].h + 0.0002, "▼", size=11, color=t.bull_text, xanchor="center", yanchor="bottom")
        ch.label(EQH[0] - 0.4, max(hs) + 0.0005, "<b>Equal highs</b> 1.0950 / 1.0949 — buy-side stacked above",
                 size=11, color=t.bull_text, yanchor="bottom")
    with ch.group("eql"):
        ch.zone(EQL[0] - 0.4, I_RUN + 0.4, min(ls) - 0.0001, max(ls), color=t.bear, alpha=0.25, border=False)
        ch.hline(EQL[0] - 0.4, I_RUN + 0.4, min(ls), color=t.bear_text, width=1.4)
        for i in EQL:
            ch.label(i, C[i].l - 0.0002, "▲", size=11, color=t.bear_text, xanchor="center", yanchor="top")
        ch.label(EQL[0] - 0.4, min(ls) - 0.0005, "<b>Equal lows</b> 1.0910 / 1.0911 — sell-side stacked below",
                 size=11, color=t.bear_text, yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, n + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(n)), text=[c.label for c in C])
    with ch.group("sweep"):
        ch.callout(I_SWEEP, C[I_SWEEP].h, 10.0, 1.0966, "<b>① Sweep</b>: 1.0957 takes the stops above the<br>"
                   "equal highs, then closes back below", xanchor="center")
    with ch.group("run"):
        ch.callout(I_RUN, C[I_RUN].c, 17.0, 1.0890, "<b>② Run</b>: the drop closes through the equal lows",
                   xanchor="center")
    ch.header("SMC · Equal Highs & Lows", "Equal Highs and Lows — Stacked Stops, One Swept, One Run",
              "EUR/USD · 1-hour candles · equal = within about 2 pips here",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles for the Equal Highs & Lows lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, n + 2], y_range=[1.0884, 1.0972], y_dtick=0.0010, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, n, 4)), [str(i + 1) for i in range(0, n, 4)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Equal Highs and Lows", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
