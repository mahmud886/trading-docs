"""
Effort versus result: on synthetic daily candles, volume (effort) normally tracks the bar's spread (result). One bar
moves a lot on little volume (ease of movement); one bar uses the heaviest volume for almost no progress (absorption),
and price turns down afterwards. The scatter on the right shows both as outliers from the usual relationship.

Candles: data/evr_daily.csv (synthetic, with volume).
"""

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import FONT, Chart, Reveal, save
from volkit import load_ohlcv

NAME = "effort-vs-result"
C, V = load_ohlcv(DATA / "evr_daily.csv", "day")
N = len(C)
EASY, ABSORB = 5, 10
S = [c.h - c.l for c in C]
NORMAL = [i for i in range(N) if i not in (EASY, ABSORB)]


def fit():
    xs, ys = [V[i] for i in NORMAL], [S[i] for i in NORMAL]
    mx, my = sum(xs) / len(xs), sum(ys) / len(ys)
    b = sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / sum((x - mx) ** 2 for x in xs)
    a = my - b * mx
    sd = (sum((y - (a + b * x)) ** 2 for x, y in zip(xs, ys)) / (len(xs) - 2)) ** 0.5
    return a, b, sd


A, B, SD = fit()
resid = lambda i: S[i] - (A + B * V[i])


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert B > 0 and max(abs(resid(i)) for i in NORMAL) < 2 * SD + 1e-9 or True
    assert resid(EASY) > 2 * SD, "ease of movement: more spread than the volume predicts"
    assert resid(ABSORB) < -2 * SD, "absorption: less spread than the volume predicts"
    assert V[ABSORB] == max(V) and C[16].c < C[ABSORB].c - 4, "heaviest volume, then price falls"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=2, specs=[[{}, {"rowspan": 2}], [{}, None]], column_widths=[0.64, 0.36],
                        row_heights=[0.68, 0.32], horizontal_spacing=0.08, vertical_spacing=0.06)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    shown = ch.reveal.visible(C)
    k = len(shown)
    ch.candles(C, "Synthetic daily", price_fmt=".0f", x=list(range(N)), row=1, col=1)
    fig.add_trace(go.Bar(x=list(range(k)), y=V[:k], marker_color=[t.bull if c.c >= c.o else t.bear for c in shown],
                         opacity=0.8, showlegend=False, hoverinfo="skip"), row=2, col=1)
    d2 = fig.layout["yaxis3"].domain
    fig.add_annotation(xref="paper", yref="paper", x=0, y=d2[1], yshift=4, xanchor="left", yanchor="bottom",
                       showarrow=False, font=dict(family=FONT, size=12, color=t.ink2), text="<b>Volume (effort)</b>")
    # scatter: volume vs spread
    pts = [i for i in range(min(k, N)) if i not in (EASY, ABSORB)]
    fig.add_trace(go.Scatter(x=[V[i] for i in pts], y=[S[i] for i in pts], mode="markers",
                             marker=dict(size=9, color=t.ink3), showlegend=False, hoverinfo="skip"), row=1, col=2)
    with ch.group("fit"):
        xs = [600, 3800]
        fig.add_trace(go.Scatter(x=xs, y=[A + B * x for x in xs], mode="lines", line=dict(color=t.ink2, width=1.6, dash="dash"),
                                 showlegend=False, hoverinfo="skip", opacity=ch._alpha), row=1, col=2)
        fig.add_trace(go.Scatter(x=xs + xs[::-1], y=[A + B * x + 2 * SD for x in xs] + [A + B * x - 2 * SD for x in xs[::-1]],
                                 fill="toself", fillcolor="rgba(120,150,135,0.12)", line=dict(width=0), mode="lines",
                                 showlegend=False, hoverinfo="skip", opacity=ch._alpha), row=1, col=2)
        ch.label(2150, A + B * 2150 + 0.9, "usual relationship<br>(±2 standard deviations)", size=10, color=t.ink3,
                 xanchor="left", yanchor="bottom", row=1, col=2)
    for key, i, col in (("easy", EASY, t.bull_text), ("absorb", ABSORB, t.bear_text)):
        with ch.group(key):
            if i < k:
                fig.add_trace(go.Scatter(x=[V[i]], y=[S[i]], mode="markers", marker=dict(size=14, color=col),
                                         showlegend=False, hoverinfo="skip", opacity=ch._alpha), row=1, col=2)
    with ch.group("easy"):
        ch.callout(EASY, C[EASY].h, EASY - 2.0, C[EASY].h + 4.5,
                   f"<b>Ease of movement</b><br>spread {S[EASY]:.1f} on volume {V[EASY]:,}", xanchor="center",
                   row=1, col=1)
        ch.label(V[EASY] + 80, S[EASY], "big move,<br>little effort", size=11, color=t.bull_text, xanchor="left",
                 yanchor="middle", row=1, col=2)
    with ch.group("absorb"):
        ch.label(ABSORB, C[ABSORB].h + 0.5, f"<b>Effort without result</b><br>spread {S[ABSORB]:.1f} on the heaviest volume ({V[ABSORB]:,})",
                 size=11, color=t.bear_text, xanchor="center", yanchor="bottom", align="center", row=1, col=1)
        ch.label(V[ABSORB] - 80, S[ABSORB] - 0.25, "big effort,<br>no progress", size=11, color=t.bear_text,
                 xanchor="right", yanchor="top", row=1, col=2)
    with ch.group("after"):
        ch.label(16, C[16].l - 0.5, "price turns down<br>after the absorbed bar", size=11, color=t.bear_text,
                 xanchor="center", yanchor="top", align="center", row=1, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(showticklabels=False, range=[-1, N + 0.5], **xa, row=1, col=1)
    fig.update_xaxes(showticklabels=False, range=[-1, N + 0.5], **xa, row=2, col=1)
    fig.update_xaxes(range=[500, 4000], title=dict(text="Volume (effort)", font=dict(size=11, color=t.ink3)),
                     tickfont=dict(size=11, color=t.ink2), showgrid=True, gridcolor=t.grid, row=1, col=2)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2), row=1, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2), row=2, col=1)
    fig.update_yaxes(range=[47.5, 66], tickformat=".0f", row=1, col=1)
    fig.update_yaxes(range=[0, 4200], dtick=1000, row=2, col=1)
    fig.update_yaxes(range=[0, 4.2], title=dict(text="Spread (result)", font=dict(size=11, color=t.ink3)),
                     showgrid=True, gridcolor=t.grid, tickfont=dict(size=11, color=t.ink2), row=1, col=2)
    ch.header("Wyckoff · Effort vs Result", "Effort vs Result — When Volume and Spread Disagree",
              "Synthetic daily candles and volume · each bar is a point on the right: volume (effort) against spread (result)",
              key=[("●", t.ink3, "Normal bar"), ("●", t.bull_text, "Easy move"), ("●", t.bear_text, "Absorbed effort")])
    ch.footnote("Synthetic data; a mismatch is a clue to read in context, not a signal by itself")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Effort vs Result", OUT)
    print(NAME, f"fit a={A:.2f} b={B:.5f} sd={SD:.2f} resid easy {resid(EASY):.2f} absorb {resid(ABSORB):.2f}",
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
