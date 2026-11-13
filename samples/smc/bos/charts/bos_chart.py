"""
Break of structure — closes above swing highs confirm the uptrend; a wick above without a close does not.

Candles: samples/smc/_shared/eurusd_1h_structure.csv (synthetic), first 30 hours.
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from structure import BOS1, BOS2, CANDLES, IDX, LEVELS

NAME = "bullish-bos"
N = 30
C = CANDLES[:N]


def validate():
    assert C[BOS1].c > LEVELS["H1"] and all(c.c <= LEVELS["H1"] for c in C[IDX["H1"] + 1:BOS1])
    assert C[BOS2].c > LEVELS["H2"] and all(c.c <= LEVELS["H2"] for c in C[IDX["H2"] + 1:BOS2])
    h4 = C[IDX["H4"]]
    assert h4.h > LEVELS["H3"] and h4.c < LEVELS["H3"], "wick above, close below: not a BOS"
    assert LEVELS["HL1"] < LEVELS["HL2"] < LEVELS["HL3"], "higher lows"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    with ch.group("swings"):
        for name, text in (("L1", "L"), ("H1", "H"), ("HL1", "HL"), ("H2", "HH"), ("HL2", "HL"), ("H3", "HH"),
                           ("HL3", "HL")):
            i, p = IDX[name], LEVELS[name]
            up = name.startswith("H") and not name.startswith("HL")
            ch.label(i, p + (0.0004 if up else -0.0004), f"<b>{text}</b>", size=11, xanchor="center",
                     yanchor="bottom" if up else "top", color=t.bull_text if text in ("HH", "HL") else t.ink2)
    with ch.group("bos1"):
        ch.hline(IDX["H1"], BOS1 + 0.4, LEVELS["H1"], color=t.bull_text, dash="dash")
        ch.callout(BOS1, C[BOS1].c, BOS1 - 4.5, 1.0872, "<b>BOS ①</b>: hour 13 <b>closes</b> above the<br>1.0850 "
                   "high — the uptrend continues", xanchor="center")
    with ch.group("bos2"):
        ch.hline(IDX["H2"], BOS2 + 0.4, LEVELS["H2"], color=t.bull_text, dash="dash")
        ch.callout(BOS2, C[BOS2].c, BOS2 - 4.5, 1.0912, "<b>BOS ②</b>: a close above 1.0890", xanchor="center")
    with ch.group("wick"):
        ch.hline(IDX["H3"], IDX["H4"] + 0.4, LEVELS["H3"], color=t.bear_text, dash="dot")
        ch.callout(IDX["H4"], LEVELS["H4"], 23.5, 1.0950, "<b>Not a BOS</b>: the wick reaches 1.0930 but the<br>"
                   "candle closes back below 1.0925 — a liquidity grab", xanchor="center")
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    ch.header("SMC · Break of Structure", "Break of Structure — a Close Beyond the Last Swing Confirms the Trend",
              "EUR/USD · 1-hour candles · higher highs and higher lows, two BOS and one wick that doesn't count",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles (shared SMC structure series) for the BOS lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, N + 0.5], y_range=[1.0788, 1.0962], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 6)), [str(i + 1) for i in range(0, N, 6)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Bullish BOS", OUT)
    print(f"{NAME}: BOS at hours {BOS1 + 1}, {BOS2 + 1} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
