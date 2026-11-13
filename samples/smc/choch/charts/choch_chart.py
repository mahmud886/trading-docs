"""
Bearish CHOCH — the first close below the last higher low, then a bearish BOS confirms the new trend.

Candles: samples/smc/_shared/eurusd_1h_structure.csv (synthetic), hours 15–42.
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from structure import BOS_DN, CANDLES, CHOCH, IDX, LEVELS

NAME = "bearish-choch"
X0 = 14
C = CANDLES[X0:]


def validate():
    assert CANDLES[CHOCH].c < LEVELS["HL3"] and all(c.c >= LEVELS["HL3"] for c in CANDLES[IDX["HL3"]:CHOCH])
    assert LEVELS["LH"] < LEVELS["H4"], "a lower high after the CHOCH"
    assert CANDLES[BOS_DN].c < LEVELS["L5"], "bearish BOS below the new low"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    xs = list(range(X0, len(CANDLES)))
    with ch.group("trend"):
        for name, text in (("H2", "HH"), ("HL2", "HL"), ("H3", "HH"), ("HL3", "HL"), ("H4", "HH")):
            i, p = IDX[name], LEVELS[name]
            up = not name.startswith("HL")
            ch.label(i, p + (0.0004 if up else -0.0004), f"<b>{text}</b>", size=11, xanchor="center",
                     yanchor="bottom" if up else "top", color=t.bull_text)
    with ch.group("choch"):
        ch.hline(IDX["HL3"], CHOCH + 0.4, LEVELS["HL3"], color=t.bear_text, dash="dash")
        ch.callout(CHOCH, CANDLES[CHOCH].c, 24.0, 1.0858, "<b>① CHOCH</b>: the first close below the last<br>higher "
                   "low (1.0900) — the uptrend's first crack", xanchor="center")
    with ch.group("lh"):
        ch.label(IDX["L5"], LEVELS["L5"] - 0.0004, "<b>L</b>", size=11, xanchor="center", yanchor="top",
                 color=t.bear_text)
        ch.callout(IDX["LH"], LEVELS["LH"], 35.0, 1.0935, "<b>② Lower high</b> at 1.0905 —<br>sellers defend",
                   xanchor="center")
    with ch.group("bos"):
        ch.hline(IDX["L5"], BOS_DN + 0.4, LEVELS["L5"], color=t.bear_text, dash="dash")
        ch.callout(BOS_DN, CANDLES[BOS_DN].c, 37.0, 1.0838, "<b>③ Bearish BOS</b>: a close below 1.0868<br>confirms "
                   "the new downtrend", xanchor="center")
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=xs, text=[c.label for c in C])
    ch.header("SMC · Change of Character", "Change of Character — the First Break Against the Trend",
              "EUR/USD · 1-hour candles · CHOCH warns, the lower high and the bearish BOS confirm",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles (shared SMC structure series) for the CHOCH lesson")
    ch.caption()
    ch.axes(x_range=[X0 - 0.8, len(CANDLES) + 0.5], y_range=[1.0828, 1.0948], y_dtick=0.0020, y_fmt=".4f",
            x_title="Hours", x_ticks=(list(range(X0, len(CANDLES), 4)), [str(i + 1) for i in range(X0, len(CANDLES),
                                                                                          4)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Bearish CHOCH", OUT)
    print(f"{NAME}: CHOCH hour {CHOCH + 1}, BOS hour {BOS_DN + 1} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
