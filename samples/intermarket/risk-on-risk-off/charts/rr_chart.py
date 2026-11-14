"""
A synthetic risk-off episode (days 70-99) across stocks, volatility and currencies. Top: the stock index, shaded for the
episode. Middle: a VIX-like volatility index. Bottom: average daily return per asset on risk-on days versus risk-off days:
stocks, AUD/USD, USD/JPY and USD/CHF all fall in the episode (USD/JPY and USD/CHF falling means the yen and franc strengthen).

Data: data/risk_assets.csv (synthetic).
"""

import plotly.graph_objects as go

from _paths import DATA, OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import base_fig, line, load_series, panel_title, rebased, returns, shown_n

NAME = "risk-on-risk-off"
D = load_series(DATA / "risk_assets.csv")
N, A, B = len(D["spx"]), 70, 100
ASSETS = [("spx", "Stocks (SPX)"), ("audusd", "AUD/USD"), ("usdjpy", "USD/JPY"), ("usdchf", "USD/CHF")]
RET = {k: returns(D[k]) for k, _ in ASSETS}                  # RET[k][i] is the return into day i+1


def avg(k, lo, hi):
    xs = [RET[k][i - 1] for i in range(lo, hi)]
    return 100 * sum(xs) / len(xs)


ON = {k: avg(k, 1, A) * 0.5 + avg(k, B, N) * 0.5 for k, _ in ASSETS}        # risk-on days: before and after the episode
OFF = {k: avg(k, A, B) for k, _ in ASSETS}


def validate():
    assert OFF["spx"] < -0.40 and ON["spx"] > 0.0, "stocks fall in the episode and rise outside it"
    assert all(OFF[k] < 0 for k in ("audusd", "usdjpy", "usdchf")), "AUD, and the dollar against yen and franc, fall"
    assert max(D["vix"][A:B + 5]) > 25 and max(D["vix"][:A - 5]) < 18, "volatility spikes only in the episode"
    assert rebased(D["spx"])[B - 1] < 0.88 * rebased(D["spx"])[A - 1], "a drawdown of more than 12% in the episode"


validate()


def build(t, reveal: Reveal | None = None):
    fig = base_fig(3, [0.34, 0.24, 0.42], 0.09)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False, barmode="group", bargap=0.3)
    xs = list(range(N))
    k = shown_n(ch, N)
    line(ch, t, xs, rebased(D["spx"]), "SPX", t.accent, 1, k=k)
    line(ch, t, xs, D["vix"], "VIX-like", t.zone, 2, k=k)
    lo, hi = min(rebased(D["spx"])) - 3, max(rebased(D["spx"])) + 3
    with ch.group("episode"):
        ch.zone(A - 0.5, B - 0.5, lo, hi, color=t.bear, alpha=0.09, border=False, row=1, col=1)
        ch.zone(A - 0.5, B - 0.5, 8, 40, color=t.bear, alpha=0.09, border=False, row=2, col=1)
        ch.label((A + B) / 2, hi - 0.5, "<b>Risk-off episode</b>", size=12, color=t.bear_text, xanchor="center", yanchor="top", row=1, col=1)
    with ch.group("bars"):
        names = [n for _, n in ASSETS]
        fig.add_trace(go.Bar(x=names, y=[ON[a] for a, _ in ASSETS], marker_color=t.accent, opacity=0.85 * ch._alpha, showlegend=False,
                             hoverinfo="skip", text=[f"{ON[a]:+.2f}%" for a, _ in ASSETS], textposition="outside",
                             textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=3, col=1)
        fig.add_trace(go.Bar(x=names, y=[OFF[a] for a, _ in ASSETS], marker_color=t.bear, opacity=0.85 * ch._alpha, showlegend=False,
                             hoverinfo="skip", text=[f"{OFF[a]:+.2f}%" for a, _ in ASSETS], textposition="outside",
                             textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=3, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(showticklabels=False, range=[-1, N + 4], **xa, row=1, col=1)
    fig.update_xaxes(showticklabels=True, tickvals=list(range(0, N, 20)), range=[-1, N + 4], tickfont=dict(size=11, color=t.ink2), **xa, row=2, col=1)
    fig.update_xaxes(tickfont=dict(size=13, color=t.ink), **xa, row=3, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(range=[lo, hi], row=1, col=1)
    fig.update_yaxes(range=[8, 40], row=2, col=1)
    fig.update_yaxes(range=[-1.1, 0.5], ticksuffix="%", tickvals=[-1, -0.5, 0, 0.5], zeroline=True, zerolinecolor=t.ink3, row=3, col=1)
    panel_title(ch, t, 1, "Stock index, rebased to 100")
    panel_title(ch, t, 2, "Volatility index (VIX-like)")
    panel_title(ch, t, 3, "Average daily return: green = risk-on days, red = the risk-off episode")
    ch.header("Intermarket Analysis · Risk-On / Risk-Off", "How Assets Behave in a Risk-Off Episode",
              "Synthetic daily data · stocks fall and volatility spikes while AUD/USD, USD/JPY and USD/CHF fall",
              key=[("▮", t.accent, "Risk-on days"), ("▮", t.bear, "Risk-off episode")])
    ch.footnote("Synthetic data; real risk-off episodes differ — yen and franc do not always strengthen, and dollar behaviour varies")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Risk On Risk Off", OUT)
    print(NAME, "ON", {k: round(v, 2) for k, v in ON.items()}, "OFF", {k: round(v, 2) for k, v in OFF.items()},
          f"spx dd {rebased(D['spx'])[A - 1]:.1f}->{rebased(D['spx'])[B - 1]:.1f} vixmax {max(D['vix']):.1f}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
