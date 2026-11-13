"""
Liquidity → imbalance → liquidity — EUR/USD, 1-hour candles.

Source: content/en/ict/algorithmic-delivery-concepts.mdx -> "Pattern 1: Liquidity → FVG → Liquidity".
Candles are synthetic.
"""

from _paths import OUT
from chartkit import Candle, Chart, Reveal, save

NAME = "liquidity-imbalance-liquidity"
PIP = 0.0001
OHLC = [
    (1.0880, 1.0898, 1.0876, 1.0895), (1.0895, 1.0910, 1.0890, 1.0902), (1.0902, 1.0905, 1.0884, 1.0887),
    (1.0887, 1.0910, 1.0885, 1.0899), (1.0899, 1.0901, 1.0872, 1.0875), (1.0875, 1.0878, 1.0855, 1.0858),
    (1.0858, 1.0862, 1.0840, 1.0845), (1.0845, 1.0856, 1.0842, 1.0853), (1.0853, 1.0855, 1.0840, 1.0843),
    (1.0843, 1.0846, 1.0832, 1.0838), (1.0838, 1.0852, 1.0836, 1.0850), (1.0850, 1.0868, 1.0849, 1.0866),
    (1.0866, 1.0880, 1.0860, 1.0877), (1.0877, 1.0885, 1.0870, 1.0872), (1.0872, 1.0874, 1.0862, 1.0864),
    (1.0864, 1.0866, 1.0856, 1.0859), (1.0859, 1.0876, 1.0858, 1.0874), (1.0874, 1.0892, 1.0872, 1.0890),
    (1.0890, 1.0906, 1.0887, 1.0903), (1.0903, 1.0914, 1.0900, 1.0911),
]
CANDLES = [Candle(i, f"hour {i + 1}", *v) for i, v in enumerate(OHLC)]
EQH, EQL, SWEEP, FVG, I_DISP, I_FILL, I_RUN = 1.0910, 1.0840, 1.0832, (1.0852, 1.0860), 11, 15, 19


def validate():
    c = CANDLES
    assert [x.h for x in c[:4]].count(EQH) == 2 and all(x.h <= EQH for x in c[:I_RUN]), "equal highs, untouched"
    assert [x.l for x in c[5:9]].count(EQL) == 2 and c[9].l == SWEEP == min(x.l for x in c), "equal lows swept"
    assert (c[I_DISP - 1].h, c[I_DISP + 1].l) == FVG
    ce = sum(FVG) / 2
    assert c[I_FILL].l <= ce and all(x.l > FVG[1] for x in c[I_DISP + 2:I_FILL]), "return to the FVG"
    assert c[I_RUN].h > EQH, "then buy-side is taken"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(CANDLES)
    with ch.group("pools"):
        ch.hline(0.6, n - 0.5, EQH, color=t.bull_text, width=1.4)
        ch.label(0.6, EQH + 1 * PIP, "<b>Pool B</b> · equal highs 1.0910 (buy-side)", size=12, color=t.bull_text,
                 yanchor="bottom")
        ch.hline(5.6, 9.4, EQL, color=t.bear_text, width=1.4)
        ch.label(5.6, EQL - 1 * PIP, "<b>Pool A</b> · equal lows 1.0840 (sell-side)", size=12,
                 color=t.bear_text, yanchor="top", xanchor="right")
    ch.candles(CANDLES, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(n)),
               text=[c.label for c in CANDLES])
    with ch.group("a"):
        ch.callout(9, SWEEP, 11.5, 1.0826, "<b>①</b> Liquidity: pool A is swept to 1.0832", xanchor="left")
    with ch.group("imb"):
        ch.zone(I_DISP - 1 - 0.4, I_FILL + 0.4, *FVG, color=t.bull, alpha=0.18, dash="dash")
        ch.callout(I_DISP, 1.0866, 7.5, 1.0885, "<b>②</b> Displacement leaves an imbalance<br>(FVG 1.0852 – 1.0860)",
                   xanchor="center")
    with ch.group("fill"):
        ch.callout(I_FILL, 1.0856, 16.5, 1.0843, "<b>③</b> Price returns to rebalance the FVG", xanchor="left")
    with ch.group("b"):
        ch.callout(I_RUN, 1.0914, 15.5, 1.0922, "<b>④</b> Liquidity: pool B is taken", xanchor="right")
    ch.header("ICT · Algorithmic Delivery", "Liquidity → Imbalance → Liquidity",
              "EUR/USD · 1-hour candles · ICT's description of how price moves between pools of liquidity",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "FVG")])
    ch.footnote("Synthetic candles built to illustrate the ICT Algorithmic Delivery lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, n + 0.5], y_range=[1.0818, 1.0930], y_dtick=0.0010, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, n, 4)), [str(i + 1) for i in range(0, n, 4)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Liquidity to Liquidity", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
