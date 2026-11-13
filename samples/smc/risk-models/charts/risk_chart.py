"""
Structural stop vs a tight stop on the same OB long, both sized to risk $100 on a $10,000 account.
The tight stop is taken by a wick; the structural stop (beyond the OB's full range) holds.

Candles: data/eurusd_15m_risk.csv (synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "structural-stop-sizing"
PIP = 0.0001
ACCOUNT, RISK_PCT, PIP_VALUE = 10_000, 0.01, 10.0  # $10 per pip per standard lot on EUR/USD


def load():
    with (DATA / "eurusd_15m_risk.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"candle {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
N = len(C)
I_OB, I_FILL, I_WICK = 2, 7, 8
OB_WICK = (C[I_OB].l, C[I_OB].h)
ENTRY, STOP, TIGHT, TARGET = 1.0870, 1.0845, 1.0862, 1.0920


def lots(stop):
    pips = round((ENTRY - stop) / PIP)
    return pips, ACCOUNT * RISK_PCT / (pips * PIP_VALUE)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    ob = C[I_OB]
    assert not ob.bullish and C[I_OB + 1].bullish and C[I_OB + 1].c > max(c.h for c in C[:I_OB + 1]), "OB + displacement"
    assert all(c.l > ob.o for c in C[I_OB + 2:I_FILL]) and C[I_FILL].l <= ENTRY <= C[I_FILL].h, "first return fills"
    assert ENTRY == ob.o, "entry at the OB's body top"
    assert C[I_WICK].l < TIGHT and min(c.l for c in C[I_OB + 1:]) > OB_WICK[0] > STOP, "wick takes the tight stop only"
    assert max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"
    assert lots(STOP) == (25, 0.4) and lots(TIGHT)[0] == 8


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    with ch.group("ob"):
        ch.zone(I_OB - 0.4, x_end, *OB_WICK, color=t.bull, alpha=0.20)
        ch.label(-0.6, 1.0857, "<b>Bullish OB</b><br>full range<br>1.0852 – 1.0872", size=11,
                 color=t.bull_text, yanchor="middle")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    with ch.group("tight"):
        ch.hline(I_FILL - 0.4, x_end, TIGHT, color=t.bear_text, dash="dash", width=1.5)
        p, l = lots(TIGHT)
        ch.label(I_FILL - 0.5, TIGHT, f"Tight stop {TIGHT:.4f} · {p} pips → {l:.2f} lots", size=11,
                 color=t.bear_text, xanchor="right")
    with ch.group("sizing"):
        p, l = lots(STOP)
        ch.label(I_FILL - 0.5, STOP, f"<b>Structural stop {STOP:.4f}</b> · {p} pips → <b>{l:.2f} lots</b>",
                 size=11, color=t.bear_text, xanchor="right")
    ch.candles(C, "EUR/USD 15m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("wick"):
        ch.callout(I_WICK, C[I_WICK].l, 11.5, 1.0835, "A wick to 1.0855 takes the tight stop (−100 USD).<br>"
                   "The structural stop, beyond the OB's low, holds.", xanchor="center")
    ch.header("SMC · Risk Models", "Risk Models — Stop at Invalidation, Then Size",
              "EUR/USD · 15-minute candles · both stops risk 1% of a 10,000 USD account (100 USD)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Order block")])
    ch.footnote("Synthetic candles built around the levels in the Risk Models lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0825, 1.0930], y_dtick=0.0010, y_fmt=".4f",
            x_title="15-minute candles", x_ticks=(list(range(0, N, 2)), [str(i + 1) for i in range(0, N, 2)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Structural Stop and Sizing", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: structural {lots(STOP)} tight {lots(TIGHT)} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
