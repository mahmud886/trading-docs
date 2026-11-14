"""
Four synthetic footprint candles (contracts at each price, bid × ask): A balanced rotation; B buyers lifting offers with
stacked buy imbalances; C heavy buying at the high that doesn't hold (absorption); D sellers hitting bids with stacked
sell imbalances. An imbalance is a 3:1 ratio between the ask at one price and the bid one price lower (buy) or the bid
at one price and the ask one price higher (sell).

Data: hand-built (synthetic).
"""

from _paths import OUT
from chartkit import Candle, Chart, Reveal, save

NAME = "footprint-four-candles"
TICK = 0.0001
RATIO = 3
# key, label, first price, bid[], ask[], open, close
CANDLES = [
    ("A", "Balanced rotation", 1.0850, [120, 260, 340, 300, 180, 90], [100, 220, 360, 330, 160, 70], 1.0852, 1.0853),
    ("B", "Buyers lift offers", 1.0853, [60, 80, 110, 90, 70, 50, 30], [130, 260, 380, 420, 360, 300, 220], 1.0853, 1.0858),
    ("C", "Heavy buying at the high", 1.0856, [90, 130, 170, 240, 420, 650], [60, 110, 160, 300, 560, 880], 1.0858, 1.0857),
    ("D", "Sellers hit bids", 1.0852, [380, 420, 380, 300, 220, 140, 90], [120, 110, 100, 90, 80, 60, 40], 1.0857, 1.0852),
]


def levels(c):
    key, label, p0, bid, ask, o, cl = c
    return [round(p0 + k * TICK, 4) for k in range(len(bid))]


def imbalances(c):
    _, _, _, bid, ask, _, _ = c
    n = len(bid)
    buy = [k for k in range(1, n) if ask[k] >= RATIO * bid[k - 1]]
    sell = [k for k in range(n - 1) if bid[k] >= RATIO * ask[k + 1]]
    return buy, sell


def stats(c):
    _, _, _, bid, ask, _, _ = c
    return sum(ask) - sum(bid), sum(ask) + sum(bid)


def validate():
    a, b, c, d = CANDLES
    assert imbalances(a) == ([], []), "A is balanced"
    assert len(imbalances(b)[0]) == 6 and not imbalances(b)[1], "B: six stacked buy imbalances"
    assert len(imbalances(d)[1]) == 6 and not imbalances(d)[0], "D: six stacked sell imbalances"
    assert c[4][-1] == max(c[4] + c[3]) and c[6] < c[5], "C: the largest cell is at the high, and the candle closes lower"
    assert stats(b)[0] > 0 > stats(d)[0] and abs(stats(c)[0]) < 0.2 * stats(c)[1] + 300
    for cd in CANDLES:
        lv = levels(cd)
        assert lv[0] <= min(cd[5], cd[6]) and max(cd[5], cd[6]) <= lv[-1]


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    W, STEP = 0.42, 1.38
    for idx, cd in enumerate(CANDLES):
        col = idx * STEP
        key, label, p0, bid, ask, o, cl = cd
        lv = levels(cd)
        buy, sell = imbalances(cd)
        tot = [b + a for b, a in zip(bid, ask)]
        poc_i = tot.index(max(tot))
        with ch.group(key):
            for i, p in enumerate(lv):
                fill = t.bull if i in buy else t.bear if i in sell else t.ink3
                alpha = 0.55 if (i in buy or i in sell) else 0.10
                ch.zone(col - W, col + W, p - TICK / 2, p + TICK / 2, color=fill, alpha=alpha, border=(i == poc_i),
                        dash="solid")
                ch.label(col, p, f"{bid[i]} × {ask[i]}", size=12, color=t.ink, xanchor="center", yanchor="middle")
            ch.label(col, lv[-1] + TICK, f"<b>{key} · {label}</b>", size=12, color=t.ink, xanchor="center",
                     yanchor="bottom")
            delta, total = stats(cd)
            ch.label(col, 1.08485, f"delta <b>{delta:+,}</b> · volume {total:,}", size=11, color=t.bull_text if delta > 0 else t.bear_text,
                     xanchor="center", yanchor="top")
            # candle outline: open/close box and the high-low line on the left edge
            body_lo, body_hi = sorted((o, cl))
            col_c = t.bull if cl >= o else t.bear
            ch.fig.add_shape(type="line", x0=col - W - 0.1, x1=col - W - 0.1, y0=lv[0] - TICK / 2, y1=lv[-1] + TICK / 2,
                             line=dict(color=col_c, width=2), opacity=ch._alpha)
            ch.fig.add_shape(type="rect", x0=col - W - 0.15, x1=col - W - 0.05, y0=body_lo, y1=body_hi, fillcolor=col_c,
                             line=dict(color=col_c, width=1), opacity=ch._alpha)
    with ch.group("C"):
        ch.callout(2 * STEP + W, 1.0861, 2 * STEP + 1.05, 1.08635, "880 contracts bought at the high —<br>yet price closes lower: absorption", xanchor="center")
    ch.header("Order Flow · Footprint Charts", "Footprint Candles — Bid × Ask at Every Price",
              "Four synthetic candles · each cell = contracts sold at the bid × bought at the ask · outlined cell = candle POC",
              key=[("■", t.bull, "Buy imbalance (3:1)"), ("■", t.bear, "Sell imbalance (3:1)"), ("▢", t.ink, "POC cell")])
    ch.footnote("Synthetic data; imbalance = ask ÷ bid one price lower (buy) or bid ÷ ask one price higher (sell) ≥ 3")
    ch.caption()
    ch.axes(x_range=[-0.8, 3 * STEP + 0.6], y_range=[1.08455, 1.08655], y_dtick=0.0001, y_fmt=".4f", x_title="",
            x_ticks=([i * STEP for i in range(4)], ["", "", "", ""]))
    return ch.fig


def main():
    paths = save(NAME, build, "Footprint Candles", OUT)
    print(NAME, {c[0]: (imbalances(c), stats(c)) for c in CANDLES}, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
