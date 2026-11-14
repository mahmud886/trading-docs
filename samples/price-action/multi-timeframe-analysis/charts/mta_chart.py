"""
Top-down analysis on three panels: the daily trend (bias), the 4H pullback into a demand zone (setup), and the
15m CHOCH and order block (entry).

Candles: data/eurusd_daily.csv, eurusd_4h.csv, eurusd_15m.csv (synthetic).
"""

from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import FONT, Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "multi-timeframe-top-down"
PIP = 0.0001
D = load(DATA / "eurusd_daily.csv", Candle, unit_label="day")
H4 = load(DATA / "eurusd_4h.csv", Candle, unit_label="4H candle")
M15 = load(DATA / "eurusd_15m.csv", Candle, unit_label="15m candle")
ZONE = (1.0875, 1.0885)
I_D_HL, I_D_HH = 6, 12
I_LH, I_OB, I_CHOCH, I_FILL = 3, 9, 10, 14
LH = M15[I_LH].h
ENTRY, STOP, TARGET = 1.0883, 1.0868, 1.0945


def validate():
    for c in D + H4 + M15:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert D[I_D_HH].h == max(c.h for c in D) and D[I_D_HL].l > D[0].l, "daily uptrend: HL then HH"
    assert ZONE[0] <= D[-1].l <= ZONE[1] + 0.0005, "daily pullback reaches the zone"
    assert ZONE[0] <= H4[-1].l <= ZONE[1], "4H pullback ends inside the zone"
    assert ZONE[0] - 0.0005 <= min(c.l for c in M15) <= ZONE[1], "15m low inside / at the zone"
    ob = M15[I_OB]
    assert not ob.bullish and M15[I_CHOCH].bullish, "OB: last bearish candle before the move"
    assert all(c.c <= LH for c in M15[I_LH:I_CHOCH]) and M15[I_CHOCH].c > LH, "15m CHOCH above the lower high"
    assert ob.l <= ENTRY <= ob.h and M15[I_FILL].l <= ENTRY, "retrace fills at the OB"
    assert STOP < min(c.l for c in M15) and max(c.h for c in M15) < TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=3, horizontal_spacing=0.06, column_widths=[0.3, 0.3, 0.4])
    ch = Chart(t, reveal, top=210, right=70, fig=fig)
    fig.update_layout(hovermode=False)
    panels = [(D, "① Daily — bias", "uptrend: higher highs and lows"),
              (H4, "② 4H — setup", "pullback into demand"),
              (M15, "③ 15m — entry", "CHOCH, then the order block")]
    for col, (data, title, sub) in enumerate(panels, 1):
        grp = f"p{col}"
        if col == 1 or ch.reveal.alpha(grp) > 0.3:
            ch.candles(data, title, price_fmt=".4f", x=list(range(len(data))), row=1, col=col)
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1.0, yshift=26, xanchor="left", yanchor="bottom",
                           showarrow=False, font=dict(family=FONT, size=15, color=t.ink), text=f"<b>{title}</b>",
                           opacity=1.0 if col == 1 else ch.reveal.alpha(grp))
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1.0, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, font=dict(family=FONT, size=12, color=t.ink3), text=sub,
                           opacity=1.0 if col == 1 else ch.reveal.alpha(grp))
    with ch.group("p1"):
        ch.zone(-0.5, len(D) - 0.5, *ZONE, color=t.bull, alpha=0.25, row=1, col=1)
        ch.label(I_D_HH, D[I_D_HH].h + 0.0010, "<b>HH</b>", size=11, color=t.bull_text, xanchor="center",
                 yanchor="bottom", row=1, col=1)
        ch.label(I_D_HL, D[I_D_HL].l - 0.0010, "<b>HL</b>", size=11, color=t.bull_text, xanchor="center",
                 yanchor="top", row=1, col=1)
    with ch.group("p2"):
        ch.zone(-0.5, len(H4) - 0.5, *ZONE, color=t.bull, alpha=0.25, row=1, col=2)
        ch.label(0, ZONE[0] - 0.0004, "demand 1.0875 – 1.0885", size=11, color=t.bull_text, yanchor="top",
                 row=1, col=2)
    with ch.group("p3"):
        n = len(M15)
        ch.zone(-0.5, n - 0.5, *ZONE, color=t.bull, alpha=0.18, row=1, col=3)
        ch.hline(I_LH, I_CHOCH + 0.4, LH, color=t.ink2, dash="dash", row=1, col=3)
        ch.label(I_LH - 0.3, LH + 0.0002, "CHOCH above 1.0889", size=11, color=t.ink2, yanchor="bottom", row=1, col=3)
        ob = M15[I_OB]
        ch.zone(I_OB - 0.4, n - 0.5, ob.l, ob.h, color=t.bull, alpha=0.35, row=1, col=3)
        ch.label(I_OB - 0.5, ob.l - 0.0001, "OB", size=11, color=t.bull_text, xanchor="right", yanchor="top",
                 row=1, col=3)
    with ch.group("trade"):
        risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
        n = len(M15)
        for y, colr, txt in ((TARGET, t.bull_text, f"TP 1.0945 · +{reward:g} · 1 : {rr:.1f}"),
                             (ENTRY, t.ink, "Entry 1.0883"), (STOP, t.bear_text, f"SL 1.0868 · −{risk:g}")):
            ch.hline(I_FILL - 0.4, n - 0.5, y, color=colr, width=1.6, dash="solid", row=1, col=3)
            ch.label(n - 0.5, y, f"<b>{txt}</b>", size=11, color=colr, xanchor="right", yanchor="bottom",
                     row=1, col=3)
    fig.update_xaxes(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, showticklabels=False,
                     rangeslider_visible=False)
    for col, (data, lo, hi) in enumerate(((D, 1.0680, 1.0985), (H4, 1.0860, 1.0965), (M15, 1.0860, 1.0955)), 1):
        fig.update_xaxes(range=[-0.8, len(data) - 0.2], row=1, col=col)
        fig.update_yaxes(range=[lo, hi], row=1, col=col)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickformat=".4f", tickfont=dict(size=10, color=t.ink3))
    ch.header("Price Action · Multi-Timeframe Analysis", "Multi-Timeframe Analysis — Bias, Setup, Entry",
              "EUR/USD · the same move on three timeframes: daily direction, 4H zone, 15m trigger",
              key=[("■", t.bull, "Demand zone / OB")], offset=40)
    ch.footnote("Synthetic candles built around the levels in the Multi-Timeframe Analysis lesson")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Multi-Timeframe Top-Down", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
