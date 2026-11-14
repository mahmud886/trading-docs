"""
A daily-bias checklist on GBP/USD daily candles: structure (higher highs / higher lows), yesterday's candle, where price
sits in the dealing range (discount below 50%), and the draw on liquidity above. The bias is written before the day
opens and has an invalidation level; the days after "today" are shown only to illustrate, not as proof.

Candles: data/gbpusd_d1_bias.csv (synthetic), daily candles.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save
from sdkit import load

NAME = "daily-bias-checklist"
C = load(DATA / "gbpusd_d1_bias.csv", Candle, unit_label="day")
N = len(C)
I_YEST, I_TODAY = 16, 17
LOWS, HIGHS = (2, 6, 9, 15), (8, 11)
R_LOW, R_HIGH = C[9].l, C[11].h
EQ = round((R_LOW + R_HIGH) / 2, 4)
INVALID = C[15].l


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    for a, b in zip(LOWS, LOWS[1:]):
        assert C[b].l > C[a].l, "higher lows"
    for k in LOWS:
        assert C[k].l <= min(C[k - 1].l, C[k + 1].l), f"swing low {k}"
    assert C[11].h > C[8].h > C[5].h, "higher highs"
    assert C[I_YEST].bullish, "yesterday closed up"
    assert C[I_YEST].c < EQ and C[15].l < EQ, "price is in the discount half of the dealing range"
    assert max(c.h for c in C[I_TODAY:]) < R_HIGH, "the draw on liquidity is not reached in the data"
    assert min(c.l for c in C[I_TODAY:]) > INVALID, "the bias is not invalidated in the data"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 4.5
    with ch.group("structure"):
        for k in LOWS[1:]:
            ch.label(k, C[k].l - 0.0007, "HL", size=11, color=t.bull_text, xanchor="center", yanchor="top")
        for k in HIGHS:
            ch.label(k, C[k].h + 0.0007, "HH", size=11, color=t.bull_text, xanchor="center", yanchor="bottom")
        ch.label(2, C[2].l - 0.0007, "LL", size=11, color=t.ink3, xanchor="center", yanchor="top")
    with ch.group("range"):
        ch.zone(9, x_end, EQ, R_HIGH, color=t.bear, alpha=0.06, border=False)
        ch.zone(9, x_end, R_LOW, EQ, color=t.bull, alpha=0.08, border=False)
        ch.hline(9, x_end, EQ, color=t.ink2, dash="dash")
        ch.label(x_end, EQ + 0.0002, f"<b>50%</b> {EQ:.4f}", size=11, color=t.ink2, xanchor="right", yanchor="bottom")
        ch.label(12.4, EQ - 0.0003, "<b>Discount</b> (below 50%)", size=11, color=t.bull_text, yanchor="top")
    with ch.group("draw"):
        ch.hline(11, x_end, R_HIGH, color=t.bear_text, dash="dot", width=1.6)
        ch.label(x_end, R_HIGH + 0.0002, f"<b>Draw on liquidity</b> {R_HIGH:.4f}", size=11, color=t.bear_text,
                 xanchor="right", yanchor="bottom")
    with ch.group("invalid"):
        ch.hline(15, x_end, INVALID, color=t.bear, dash="solid", width=1.4)
        ch.label(x_end, INVALID - 0.0002, f"<b>Bias off</b> if a daily candle closes below {INVALID:.4f}", size=11,
                 color=t.bear_text, xanchor="right", yanchor="top")
    ch.candles(C, "GBP/USD daily (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("today"):
        ch.fig.add_vline(x=I_TODAY - 0.5, line=dict(color=t.ink, width=1.4, dash="dash"))
        ch.label(I_TODAY - 0.4, 1.2425, "<b>Today</b> — bias written<br>before London opens", size=11, color=t.ink,
                 yanchor="middle")
    with ch.group("card"):
        ch.label(-0.3, 1.2735, "<b>Bias: LONG</b> (pullbacks only)<br>"
                 "✓ Daily structure: higher highs, higher lows<br>"
                 "✓ Yesterday's daily candle closed up<br>"
                 "✓ Price is in discount (below 50%)<br>"
                 "✓ Draw on liquidity above: 1.2712", size=12, color=t.ink, yanchor="top")
    ch.header("Forex Sessions · Daily Bias", "Daily Session Bias — a Checklist Written Before the Session",
              "GBP/USD · daily candles · bias, invalidation level and target, decided before London opens",
              key=[("■", t.bull, "Discount"), ("■", t.bear, "Premium"), ("━", t.bear, "Invalidation")])
    ch.footnote("Synthetic candles; the days after 'today' only illustrate a possible path, not what bias predicts")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.2395, 1.2745], y_dtick=0.0050, y_fmt=".4f", x_title="Days",
            x_ticks=(list(range(0, N, 2)), [str(i + 1) for i in range(0, N, 2)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Daily Bias Checklist", OUT)
    print(NAME, "EQ", EQ, "range", R_LOW, R_HIGH, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
