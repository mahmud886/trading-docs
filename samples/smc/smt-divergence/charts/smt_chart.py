"""
Bullish SMT divergence — EUR/USD makes a lower low, GBP/USD makes a higher low (15-minute, synthetic).
"""

import csv

from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "smt-divergence"


def load(name):
    with (DATA / f"{name}_15m_smt.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"bar {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


EUR, GBP = load("eurusd"), load("gbpusd")
I1, I2 = 4, 12


def validate():
    for s in (EUR, GBP):
        for c in s:
            assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert min(c.l for c in EUR) == EUR[I2].l < EUR[I1].l == min(c.l for c in EUR[:I2]), "EUR/USD: lower low"
    assert GBP[I2].l > GBP[I1].l == min(c.l for c in GBP), "GBP/USD: higher low"
    assert EUR[-1].c > EUR[8].h and GBP[-1].c > GBP[8].h, "both rally afterwards"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=True, vertical_spacing=0.12)
    ch = Chart(t, reveal, top=170, fig=fig)
    fig.update_layout(hovermode=False)
    n = len(EUR)
    for row, (data, name, fmt) in enumerate(((EUR, "EUR/USD", ".4f"), (GBP, "GBP/USD", ".4f")), 1):
        ch.candles(data, name, price_fmt=fmt, x=list(range(n)), row=row, col=1)
        dom = fig.layout[f"yaxis{'' if row == 1 else row}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=0, y=dom[1], yshift=6, xanchor="left", yanchor="bottom",
                           showarrow=False, font=dict(family=FONT, size=15, color=t.ink), text=f"<b>{name}</b> 15m")
    with ch.group("lows"):
        for row, data, ok in ((1, EUR, False), (2, GBP, True)):
            a, b = data[I1].l, data[I2].l
            col = t.bear_text if not ok else t.bull_text
            fig.add_shape(type="line", x0=I1, x1=I2, y0=a, y1=b, line=dict(color=col, width=2.4),
                          opacity=ch.reveal.alpha("lows"), row=row, col=1)
            ch.label(I2 + 0.4, b, "<b>lower low</b> — sell-side taken" if not ok else "<b>higher low</b> — no new low",
                     size=12, color=col, yanchor="top", row=row, col=1)
    with ch.group("smt"):
        fig.add_vrect(x0=I2 - 0.5, x1=I2 + 0.5, fillcolor=t.accent, opacity=0.12 * ch.reveal.alpha("smt"),
                      line_width=0)
        ch.label(I2 + 0.6, EUR[8].h + 0.0004, "<b style='color:%s'>Bullish SMT</b>: the pairs disagree at the low"
                 % t.accent, size=13, row=1, col=1)
    fig.update_xaxes(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, showticklabels=False, rangeslider_visible=False,
                     range=[-0.8, n - 0.2])
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickformat=".4f",
                     tickfont=dict(size=11, color=t.ink2))
    ch.header("SMC · SMT Divergence", "SMT Divergence — Correlated Pairs That Disagree at a Low",
              "Synthetic 15-minute candles · EUR/USD takes its low, GBP/USD refuses to · both then rally",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles for the SMT Divergence lesson")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "SMT Divergence", OUT)
    print(f"{NAME}: EUR {EUR[I1].l}->{EUR[I2].l} GBP {GBP[I1].l}->{GBP[I2].l} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
