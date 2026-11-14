"""
A liquidity map: equal highs (buy-side liquidity) and equal lows (sell-side liquidity) around a range;
the sell stops under 1.1000 are swept, price closes back inside, and the long targets the buy stops above.

Candles: data/eurusd_1h_liquidity.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "liquidity-sweep-to-bsl"
PIP = 0.0001
C = load(DATA / "eurusd_1h_liquidity.csv", Candle)
N = len(C)
EQH, EQL = (2, 10), (6, 14)
I_SWEEP, I_FILL = 17, 18
BSL = max(C[i].h for i in EQH)
SSL = min(C[i].l for i in EQL)
ENTRY, STOP, TARGET = 1.1005, 1.0980, 1.1060


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert abs(C[EQH[0]].h - C[EQH[1]].h) <= 0.0002 and abs(C[EQL[0]].l - C[EQL[1]].l) <= 0.0002, "equal highs/lows"
    assert all(c.h <= BSL for c in C) and all(c.l >= SSL for c in C[:I_SWEEP]), "pools untouched before the sweep"
    s = C[I_SWEEP]
    assert s.l < SSL and s.c > SSL and s.bullish, "sweep: trades under the equal lows, closes back above"
    assert C[I_FILL].l <= ENTRY <= C[I_FILL].h and STOP < s.l
    assert max(c.h for c in C[I_SWEEP:]) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("pools"):
        ch.hline(EQH[0], x_end, BSL, color=t.bear_text, dash="dash")
        ch.zone(EQH[0], x_end, BSL + 0.0002, BSL + 0.0010, color=t.bear, alpha=0.14)
        ch.label(EQH[0], BSL + 0.0011, "<b>Buy-side liquidity</b> · buy stops above equal highs 1.1060",
                 size=11, color=t.bear_text, yanchor="bottom")
        ch.hline(EQL[0], x_end, SSL, color=t.bull_text, dash="dash")
        ch.zone(EQL[0], x_end, SSL - 0.0010, SSL - 0.0002, color=t.bull, alpha=0.14)
        ch.label(EQL[0], SSL - 0.0011, "<b>Sell-side liquidity</b> · sell stops below equal lows 1.1000",
                 size=11, color=t.bull_text, yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("sweep"):
        ch.callout(I_SWEEP, C[I_SWEEP].l, 11.5, 1.0975, "<b>Sweep</b>: a wick to 1.0985 runs the sell stops,<br>"
                   "the candle closes back above 1.1000", xanchor="center")
    ch.header("Price Action · Liquidity", "Liquidity — Where the Stops Are",
              "EUR/USD · 1-hour candles · stops rest beyond equal highs and lows; one side is taken, then the other",
              key=[("■", t.bear, "Buy stops (BSL)"), ("■", t.bull, "Sell stops (SSL)")])
    ch.footnote("Synthetic candles built around the levels in the Liquidity lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0960, 1.1085], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Liquidity Sweep", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: BSL {BSL} SSL {SSL} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
