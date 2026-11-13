"""
Liquidity pools — buy-side above swing highs, sell-side below swing lows, and which ones price took.

Candles: samples/smc/_shared/eurusd_1h_structure.csv (synthetic).
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from structure import CANDLES, IDX, LEVELS

NAME = "liquidity-pools-map"
N = len(CANDLES)
BSL = ["H1", "H2", "H3"]
SSL = ["HL1", "HL2", "HL3", "L5"]


def taken(name):
    """Index of the first candle after the swing that trades through it, or None."""
    i, p = IDX[name], LEVELS[name]
    above = name in BSL
    for c in CANDLES[i + 3:]:
        if (c.h > p) if above else (c.l < p):
            return c.t
    return None


TAKEN = {k: taken(k) for k in BSL + SSL}


def validate():
    assert TAKEN["H3"] == IDX["H4"], "the 1.0925 buy-side is swept by the 1.0930 high"
    assert TAKEN["HL3"] is not None and TAKEN["L5"] is not None and TAKEN["HL2"] is not None
    assert TAKEN["HL1"] is None, "the 1.0822 sell-side is still resting at the end"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    with ch.group("pools"):
        for k in BSL + SSL:
            i, p = IDX[k], LEVELS[k]
            end = TAKEN[k] if TAKEN[k] is not None else N - 0.5
            col = t.bull_text if k in BSL else t.bear_text
            ch.hline(i, end + 0.4, p, color=col, width=1.4)
            band = (p, p + 0.0006) if k in BSL else (p - 0.0006, p)
            ch.zone(i, end + 0.4, *band, color=col, alpha=0.10, border=False)
        ch.label(IDX["H1"], LEVELS["H1"] + 0.0008, "<b>BSL</b> — buy stops above highs", size=11,
                 color=t.bull_text, yanchor="bottom")
        ch.label(IDX["HL1"], LEVELS["HL1"] - 0.0008, "<b>SSL</b> — sell stops below lows", size=11,
                 color=t.bear_text, yanchor="top")
    with ch.group("bsl_taken"):
        ch.callout(IDX["H4"], LEVELS["H4"], 21.0, 1.0948, "<b>Buy-side taken</b>: 1.0930 runs the stops above "
                   "1.0925<br>and fails — a sweep", xanchor="center")
    with ch.group("ssl_taken"):
        ch.callout(TAKEN["HL3"], CANDLES[TAKEN["HL3"]].l, 35.0, 1.0918, "Sell-side under 1.0900 taken",
                   xanchor="center")
        ch.callout(TAKEN["HL2"], CANDLES[TAKEN["HL2"]].l, 33.5, 1.0830, "<b>Run</b>: the drop takes the stops under "
                   "1.0868<br>and 1.0862 on the way to the next pool", xanchor="center")
    with ch.group("resting"):
        ch.label(N - 0.5, LEVELS["HL1"] - 0.0002, "still resting: 1.0822 →", size=11, color=t.bear_text,
                 xanchor="right", yanchor="top")
    ch.candles(CANDLES, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)),
               text=[c.label for c in CANDLES])
    ch.header("SMC · Liquidity Pools", "Liquidity Pools — Where Stops Sit and Which Ones Price Takes",
              "EUR/USD · 1-hour candles · buy-side above swing highs, sell-side below swing lows",
              key=[("—", t.bull_text, "Buy-side (BSL)"), ("—", t.bear_text, "Sell-side (SSL)")])
    ch.footnote("Synthetic candles (shared SMC structure series) for the Liquidity Pools lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, N + 0.5], y_range=[1.0788, 1.0962], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 6)), [str(i + 1) for i in range(0, N, 6)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Liquidity Pools", OUT)
    print(f"{NAME}: taken {TAKEN} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
