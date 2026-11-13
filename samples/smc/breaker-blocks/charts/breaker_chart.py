"""
Bearish breaker — a bullish OB fails after a buy-side sweep, then is retested from below as resistance.

Candles: samples/smc/_shared/eurusd_1h_structure.csv (synthetic), hours 19–42.
"""

from _paths import OUT
from chartkit import Chart, Reveal, levels, save
from structure import CANDLES, CHOCH, IDX, LEVELS

NAME = "bearish-breaker"
PIP = 0.0001
X0 = 18
C = CANDLES[X0:]
I_OB = 25
OB = (CANDLES[I_OB].l, CANDLES[I_OB].o)
ENTRY, STOP, TARGET = 1.0903, 1.0914, LEVELS["LL"]


def validate():
    ob = CANDLES[I_OB]
    assert not ob.bullish and CANDLES[I_OB + 1].bullish, "bullish OB = last down-close candle before the rally"
    assert CANDLES[IDX["H4"]].h > LEVELS["H3"], "the rally from the OB swept buy-side liquidity"
    assert CANDLES[CHOCH].c < OB[0], "a close below the whole OB: it failed"
    assert OB[0] <= ENTRY <= OB[1] and CANDLES[IDX["LH"]].h >= ENTRY, "price returns into the breaker"
    assert STOP > ob.h and min(c.l for c in CANDLES) <= TARGET


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    xs = list(range(X0, len(CANDLES)))
    with ch.group("ob"):
        ch.zone(I_OB - 0.4, CHOCH - 0.4, *OB, color=t.bull, alpha=0.25)
        ch.callout(I_OB, OB[0], 21.5, 1.0885, "<b>① Bullish OB</b>: the last down-close<br>candle before the rally",
                   xanchor="center")
    with ch.group("sweep"):
        ch.hline(IDX["H3"], IDX["H4"] + 0.4, LEVELS["H3"], color=t.ink3, width=1.2)
        ch.callout(IDX["H4"], LEVELS["H4"], 23.0, 1.0945, "<b>②</b> The rally sweeps 1.0925 — then fails",
                   xanchor="center")
    with ch.group("break"):
        ch.callout(CHOCH, CANDLES[CHOCH].c, 33.0, 1.0846, "<b>③</b> A close below the whole OB:<br>it has failed",
                   xanchor="center")
    with ch.group("breaker"):
        ch.zone(CHOCH - 0.4, IDX["LH"] + 0.5, *OB, color=t.bear, alpha=0.30)
        ch.label(CHOCH + 0.6, OB[1] + 0.0002, "<b>bearish breaker</b> 1.0900 – 1.0906", size=11,
                 color=t.bear_text, yanchor="bottom")
    with ch.group("position"):
        ch.position(IDX["LH"] - 0.4, len(CANDLES) + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP,
                    unit_name="pips", fmt=".4f", long=False)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=xs, text=[c.label for c in C])
    with ch.group("retest"):
        ch.callout(IDX["LH"], LEVELS["LH"], 39.0, 1.0935, "<b>④</b> Retest from below → sell 1.0903", xanchor="center")
    ch.header("SMC · Breaker Blocks", "The Bearish Breaker — a Failed Order Block Flips to Resistance",
              "EUR/USD · 1-hour candles · bullish OB → buy-side sweep → close below the OB → retest",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bear, "Breaker")])
    ch.footnote("Synthetic candles (shared SMC structure series) for the Breaker Blocks lesson")
    ch.caption()
    ch.axes(x_range=[X0 - 0.8, len(CANDLES) + 2], y_range=[1.0832, 1.0952], y_dtick=0.0020, y_fmt=".4f",
            x_title="Hours", x_ticks=(list(range(X0, len(CANDLES), 4)),
                                      [str(i + 1) for i in range(X0, len(CANDLES), 4)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Bearish Breaker", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: OB {OB} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
