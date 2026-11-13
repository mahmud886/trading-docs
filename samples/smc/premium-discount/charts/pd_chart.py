"""
Premium and discount — the same bullish setup in premium fails, in discount holds.

Candles: data/eurusd_4h_pd.csv (synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "premium-discount-obs"
PIP = 0.0001


def load():
    with (DATA / "eurusd_4h_pd.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"4H bar {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
LOW, HIGH, I_HIGH = 1.0800, 1.1000, 10
EQ = (LOW + HIGH) / 2
OTE = (HIGH - 0.79 * (HIGH - LOW), HIGH - 0.62 * (HIGH - LOW))
I_PREM, I_DISC, I_FAIL, I_FILL = 7, 3, 14, 18
OB_PREM = (C[I_PREM].l, C[I_PREM].o)
OB_DISC = (C[I_DISC].l, C[I_DISC].o)
ENTRY, STOP, TARGET = 1.0874, 1.0858, 1.1010


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert min(c.l for c in C) == LOW and max(c.h for c in C[:I_HIGH + 1]) == HIGH
    for i in (I_PREM, I_DISC):
        assert not C[i].bullish and C[i + 1].bullish, "bullish OB = last down-close before the push"
    assert OB_PREM[0] > EQ and OB_DISC[1] < EQ, "one OB in premium, one in discount"
    assert C[I_FAIL].c < OB_PREM[0], "the premium OB fails"
    assert OB_DISC[0] <= ENTRY <= OB_DISC[1] and C[I_FILL].l >= OB_DISC[0] and C[I_FILL].l <= ENTRY
    assert OTE[0] <= OB_DISC[1] <= OTE[1] + 0.0001, "the discount OB sits at the top of OTE"
    assert STOP < OB_DISC[0] and max(c.h for c in C) > HIGH


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(C)
    with ch.group("range"):
        ch.zone(I_HIGH - 0.4, n + 1.5, EQ, HIGH, color=t.bear, alpha=0.06, border=False)
        ch.zone(I_HIGH - 0.4, n + 1.5, LOW, EQ, color=t.bull, alpha=0.06, border=False)
        ch.hline(0, n + 1.5, EQ, color=t.ink3, dash="dash")
        ch.hline(I_HIGH, n + 1.5, HIGH, color=t.ink3, width=1)
        ch.label(I_HIGH + 0.4, HIGH - 0.0008, "<b>PREMIUM</b> — sell zone", size=12, color=t.bear_text, xanchor="left",
                 yanchor="top")
        ch.label(n + 1.5, EQ + 0.0003, "equilibrium 50% · 1.0900", size=11, color=t.ink3, xanchor="right",
                 yanchor="bottom")
        ch.label(n + 1.5, LOW + 0.0008, "<b>DISCOUNT</b> — buy zone", size=12, color=t.bull_text, xanchor="right",
                 yanchor="bottom")
        ch.zone(I_HIGH - 0.4, n + 1.5, *OTE, color=t.accent, alpha=0.06, dash="dot")
        ch.label(I_HIGH - 0.3, OTE[0] + 0.0002, "OTE 62–79%", size=10, color=t.ink3, yanchor="bottom")
    with ch.group("prem"):
        ch.zone(I_PREM - 0.4, I_FAIL + 0.4, *OB_PREM, color=t.bull, alpha=0.22)
        ch.callout(I_FAIL, C[I_FAIL].c, 17.0, 1.0975, "<b>Bullish OB in premium</b>: price closes<br>straight "
                   "through it — skip these", xanchor="center")
    with ch.group("disc"):
        ch.zone(I_DISC - 0.4, I_FILL + 0.4, *OB_DISC, color=t.bull, alpha=0.32)
        ch.label(I_DISC - 0.4, OB_DISC[0] - 0.0003, "bullish OB in discount 1.0866 – 1.0876", size=11,
                 color=t.bull_text, yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, n + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 4H (synthetic)", price_fmt=".4f", x=list(range(n)), text=[c.label for c in C])
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].l, 13.0, 1.0838, "<b>Bullish OB in discount</b>, at the top of OTE:<br>it holds "
                   "→ buy 1.0874", xanchor="center")
    ch.header("SMC · Premium & Discount", "Premium and Discount — Same Setup, Different Location",
              "EUR/USD · 4-hour candles · range 1.0800 – 1.1000 · buy in discount, not in premium",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Bullish OB")])
    ch.footnote("Synthetic candles for the Premium & Discount lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, n + 2], y_range=[1.0788, 1.1030], y_dtick=0.0020, y_fmt=".4f", x_title="4H bars",
            x_ticks=(list(range(0, n, 4)), [str(i + 1) for i in range(0, n, 4)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Premium and Discount", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: OTE {OTE} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
