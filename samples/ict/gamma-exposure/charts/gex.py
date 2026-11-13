"""
Gamma exposure (GEX) — by strike and as a function of spot, with the zero-gamma "flip".

Source: content/en/ict/gamma-exposure.mdx (rewritten). Open interest is made up; gamma from Black-Scholes
(vol 18%, 10 days to expiry, r = 0). Convention: dealers long calls / short puts (the common public GEX convention).
"""

import math

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save

NAME = "gex-profile"
SPOT, VOL, T = 4500.0, 0.18, 10 / 365
STRIKES = [4300 + 25 * i for i in range(17)]
CALL_OI = [500, 700, 900, 1200, 1600, 2200, 3000, 4200, 6500, 5200, 4800, 4600, 6000, 3500, 2500, 1800, 1200]
PUT_OI = [3800, 3500, 4600, 4000, 4300, 5200, 4400, 3300, 3600, 1900, 1300, 900, 600, 400, 250, 150, 100]


def gamma(s, k):
    d1 = (math.log(s / k) + 0.5 * VOL ** 2 * T) / (VOL * math.sqrt(T))
    return math.exp(-0.5 * d1 * d1) / math.sqrt(2 * math.pi) / (s * VOL * math.sqrt(T))


def gex_by_strike(s):
    """$ gamma per 1% move, in $ billions: calls positive, puts negative."""
    out = []
    for k, c, p in zip(STRIKES, CALL_OI, PUT_OI):
        g = gamma(s, k) * 100 * s * s * 0.01 / 1e9
        out.append((k, c * g, -p * g))
    return out


SPOTS = [4300 + 5 * i for i in range(81)]
TOTAL = [sum(c + p for _, c, p in gex_by_strike(s)) for s in SPOTS]
FLIP = next(SPOTS[i] + (SPOTS[i + 1] - SPOTS[i]) * TOTAL[i] / (TOTAL[i] - TOTAL[i + 1])
            for i in range(len(SPOTS) - 1) if TOTAL[i] < 0 <= TOTAL[i + 1])
NOW = gex_by_strike(SPOT)


def validate():
    assert 4300 < FLIP < SPOT, "the flip sits below spot: spot is in positive gamma"
    assert sum(c + p for _, c, p in NOW) > 0 and TOTAL[0] < 0


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, vertical_spacing=0.16, row_heights=[0.5, 0.5])
    ch = Chart(t, reveal, top=170, left=60, fig=fig)
    fig.update_layout(hovermode=False, showlegend=False, barmode="relative")
    with ch.group("strikes") as shown:
        a = ch.reveal.alpha("strikes")
        if shown:
            fig.add_trace(go.Bar(x=STRIKES, y=[c for _, c, _ in NOW], marker_color=t.bull, opacity=a, width=18),
                          row=1, col=1)
            fig.add_trace(go.Bar(x=STRIKES, y=[p for _, _, p in NOW], marker_color=t.bear, opacity=a, width=18),
                          row=1, col=1)
    with ch.group("curve") as shown:
        a = ch.reveal.alpha("curve")
        if shown:
            fig.add_trace(go.Scatter(x=SPOTS, y=TOTAL, mode="lines", line=dict(color=t.ink, width=2.6), opacity=a),
                          row=2, col=1)
            fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=2, col=1)
    with ch.group("flip"):
        ch.label(FLIP - 6, min(TOTAL) * 0.6, f"<b>flip ≈ {FLIP:,.0f}</b><br>below: negative gamma<br>above: positive "
                 "gamma", size=12, color=t.accent, xanchor="right", align="right", row=2, col=1)
    for row in (1, 2):
        fig.add_vline(x=SPOT, line=dict(color=t.ink2, width=1.2, dash="dash"), row=row, col=1)
        fig.add_vline(x=FLIP, line=dict(color=t.accent, width=1.4, dash="dot"), opacity=ch.reveal.alpha("flip"),
                      row=row, col=1)
    ch.label(SPOT + 42, max(c for _, c, _ in NOW) * 0.95, "<b>spot 4,500</b>", size=12, row=1, col=1)
    for row, (title, sub) in enumerate((("GEX by strike, at spot 4,500", "calls add positive gamma, puts negative "
                                         "(dealer long calls / short puts)"),
                                        ("Total GEX if spot were at…", "where the line crosses zero is the "
                                         "gamma flip")), 1):
        dom = fig.layout[f"yaxis{'' if row == 1 else row}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=0, y=dom[1], yshift=6, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=15, color=t.ink),
                           text=f"<b>{title}</b>  <span style='color:{t.ink2};font-size:12px'>{sub}</span>")
    fig.update_xaxes(range=[4280, 4720], showgrid=False, zeroline=False, showline=True, linecolor=t.axis,
                     tickfont=dict(size=11, color=t.ink2), tickformat=",", fixedrange=True)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, zeroline=True, zerolinecolor=t.axis, side="right",
                     tickfont=dict(size=11, color=t.ink2), ticksuffix="B", fixedrange=True)
    ch.header("Options · Gamma Exposure", "Gamma Exposure — Where Dealers Dampen Moves and Where They Chase Them",
              "Made-up open interest on an index · $ gamma per 1% move · dealer positioning is an assumption",
              key=[("■", t.bull, "Call GEX"), ("■", t.bear, "Put GEX")])
    ch.footnote("Made-up open interest; Black-Scholes gamma (18% vol, 10 days) for the Gamma Exposure lesson")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Gamma Exposure", OUT)
    print(f"{NAME}: flip {FLIP:.1f}, total at spot {sum(c + p for _, c, p in NOW):.2f}B → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
