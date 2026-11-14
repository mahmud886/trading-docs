"""
A currency strength meter built from nine synthetic pairs. Each currency's strength on a day is the average cumulative percent
change of the pairs it appears in, counted positive when it is the base currency and negative when it is the quote. Top: the
seven strength lines; bottom: the final ranking, with the strongest-versus-weakest pair marked.

Data: data/fx_pairs.csv (synthetic).
"""

import plotly.graph_objects as go

from _paths import DATA, OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import base_fig, line, load_series, panel_title, shown_n

NAME = "currency-strength"
D = load_series(DATA / "fx_pairs.csv")
PAIRS = {"EURUSD": ("EUR", "USD"), "GBPUSD": ("GBP", "USD"), "AUDUSD": ("AUD", "USD"), "USDJPY": ("USD", "JPY"),
         "USDCAD": ("USD", "CAD"), "USDCHF": ("USD", "CHF"), "EURGBP": ("EUR", "GBP"), "EURJPY": ("EUR", "JPY"),
         "AUDJPY": ("AUD", "JPY")}
CUR = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF"]
N = len(D["EURUSD"])


def strength(c):
    out = []
    for i in range(N):
        vals = []
        for p, (b, q) in PAIRS.items():
            chg = 100 * (D[p][i] / D[p][0] - 1)
            if c == b:
                vals.append(chg)
            elif c == q:
                vals.append(-chg)
        out.append(sum(vals) / len(vals))
    return out


S = {c: strength(c) for c in CUR}
RANK = sorted(CUR, key=lambda c: S[c][-1], reverse=True)
BEST, WORST = RANK[0], RANK[-1]
PAIR_BW = next((p for p, (b, q) in PAIRS.items() if (b, q) in ((BEST, WORST), (WORST, BEST))), None)


def validate():
    assert RANK[0] == "AUD" and RANK[-1] == "JPY", RANK
    assert PAIR_BW is not None, "the strongest and weakest currencies form one of the available pairs"
    assert S[BEST][-1] - S[WORST][-1] > 4.0, "a clear spread between strongest and weakest"


validate()
PAL = ["ink", "accent", "zone", "bear", "bull", "ink2", "ink3"]
COL = {c: PAL[i] for i, c in enumerate(CUR)}
PAIR_CHG = 100 * (D[PAIR_BW][-1] / D[PAIR_BW][0] - 1)


def build(t, reveal: Reveal | None = None):
    fig = base_fig(2, [0.58, 0.42], 0.1)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    xs = list(range(N))
    k = shown_n(ch, N)
    for c in CUR:
        line(ch, t, xs, S[c], c, getattr(t, COL[c]), 1, k=k, width=2.4 if c in (BEST, WORST) else 1.6)
    fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=1, col=1)
    with ch.group("labels"):
        used = []
        for c in sorted(CUR, key=lambda c: S[c][-1]):
            y = S[c][-1]
            while any(abs(y - u) < 0.55 for u in used):
                y += 0.6
            used.append(y)
            ch.label(N - 0.4, y, c, size=12, color=getattr(t, COL[c]) if c not in ("ink2", "ink3") else t.ink2, yanchor="middle", row=1, col=1)
    with ch.group("bars"):
        fig.add_trace(go.Bar(x=RANK, y=[S[c][-1] for c in RANK], opacity=0.85 * ch._alpha, showlegend=False, hoverinfo="skip",
                             marker_color=[t.bull if S[c][-1] >= 0 else t.bear for c in RANK],
                             text=[f"{S[c][-1]:+.1f}%" for c in RANK], textposition="outside",
                             textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=2, col=1)
    with ch.group("pair"):
        ch.label(len(CUR) - 1.4, S[BEST][-1] * 0.9, f"Strongest vs weakest:<br><b>{BEST}/{WORST}</b> moved {PAIR_CHG:+.1f}% in {N - 1} days",
                 size=12, color=t.ink, xanchor="right", yanchor="top", align="right", row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(showticklabels=True, tickvals=list(range(0, N, 10)), range=[-1, N + 5], tickfont=dict(size=11, color=t.ink2),
                     title=dict(text="Trading day", font=dict(size=12, color=t.ink3)), **xa, row=1, col=1)
    fig.update_xaxes(tickfont=dict(size=13, color=t.ink), **xa, row=2, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2), ticksuffix="%")
    lim = max(abs(S[c][-1]) for c in CUR) * 1.5
    fig.update_yaxes(range=[-lim, lim], zeroline=True, zerolinecolor=t.ink3, row=2, col=1)
    panel_title(ch, t, 1, "Currency strength: average % change versus the other currencies in the basket")
    panel_title(ch, t, 2, f"Ranking after {N - 1} days")
    ch.header("Intermarket Analysis · Currency Strength", "Building a Currency Strength Meter",
              "Synthetic daily data · nine pairs, seven currencies · strongest versus weakest",
              key=[("▬", getattr(t, COL[c]), c) for c in CUR[:4]])
    ch.footnote("Synthetic data; a strength meter is relative, depends on which pairs you include, and is not a signal on its own")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Currency Strength", OUT)
    print(NAME, [(c, round(S[c][-1], 2)) for c in RANK], PAIR_BW, round(PAIR_CHG, 2), ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
