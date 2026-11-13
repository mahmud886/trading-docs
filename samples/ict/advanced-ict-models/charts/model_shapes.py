"""
Four ICT entry models side by side — schematic price paths in arbitrary units.

Source: content/en/ict/advanced-ict-models.mdx -> "Model Comparison". Each panel shows where the entry sits.
"""

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save

NAME = "advanced-ict-models"
PANELS = [
    ("silver", "Silver Bullet", "First FVG inside a fixed hour",
     [(0, 50), (2, 48), (4, 49), (5, 47), (6, 56), (7, 57), (8, 53), (10, 64)], (5, 8, 50, 54), (8, 53),
     None),
    ("unicorn", "Unicorn", "Breaker ∩ FVG after a sweep",
     [(0, 58), (2, 46), (3, 52), (4, 53), (5, 44), (6, 57), (7, 62), (8, 53), (10, 66)], (3, 8, 51, 54), (8, 53),
     None),
    ("venom", "Venom", "First touch of the FVG after a sweep",
     [(0, 54), (2, 50), (3, 52), (4, 50), (5, 44), (6, 58), (7, 54), (9, 66)], (5, 7, 52, 56), (7, 54), None),
    ("mmbm", "Market Maker Buy Model", "Pullback after the first leg of a reversal",
     [(0, 64), (1.5, 58), (3, 52), (4, 48), (4.8, 45), (6, 55), (7, 51), (8.5, 60), (10, 67)], (5.6, 7.2, 50, 53),
     (7, 51), None),
]


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=2, horizontal_spacing=0.07, vertical_spacing=0.16)
    ch = Chart(t, reveal, top=200, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for k, (group, title, sub, path, zone, entry, window) in enumerate(PANELS):
        row, col = k // 2 + 1, k % 2 + 1
        with ch.group(group) as shown:
            alpha = ch.reveal.alpha(group)
            if shown:
                if window:
                    fig.add_vrect(x0=window[0], x1=window[1], fillcolor=t.accent, opacity=0.08 * alpha, line_width=0,
                                  layer="below", row=row, col=col)
                fig.add_shape(type="rect", x0=zone[0], x1=zone[1], y0=zone[2], y1=zone[3], fillcolor=t.bull,
                              opacity=0.25 * alpha, line_width=0, row=row, col=col)
                fig.add_trace(go.Scatter(x=[p[0] for p in path], y=[p[1] for p in path], mode="lines",
                                         line=dict(color=t.ink, width=2.4), opacity=alpha, hoverinfo="skip"),
                              row=row, col=col)
                fig.add_trace(go.Scatter(x=[entry[0]], y=[entry[1]], mode="markers",
                                         marker=dict(size=13, color=t.accent, line=dict(color=t.surface, width=2)),
                                         opacity=alpha, hoverinfo="skip"), row=row, col=col)
            ch.label(entry[0] + 0.25, entry[1] - 2.5, "<b>entry</b>", size=12, color=t.accent, row=row, col=col)
        axis = "" if k == 0 else str(k + 1)
        dom_x, dom_y = fig.layout[f"xaxis{axis}"].domain, fig.layout[f"yaxis{axis}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom_x[0], y=dom_y[1], yshift=6, xanchor="left",
                           yanchor="bottom", showarrow=False, align="left", font=dict(family=FONT, size=16,
                                                                                     color=t.ink),
                           text=f"<b>{title}</b>  <span style='color:{t.ink2};font-size:13px'>{sub}</span>")
    fig.update_xaxes(range=[-0.5, 10.5], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, fixedrange=True)
    fig.update_yaxes(range=[40, 70], showticklabels=False, showgrid=False, zeroline=False, fixedrange=True)
    ch.header("ICT · Advanced Models", "Four Entry Models — Where Each One Gets You In",
              "Schematic bullish paths · green box = the entry zone · the Silver Bullet FVG must form inside its one-hour window",
              key=[("●", t.accent, "Entry"), ("■", t.bull, "Entry zone")], offset=50)
    ch.footnote("Schematic paths in arbitrary units based on the ICT Advanced Models lesson")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Advanced ICT Models", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
