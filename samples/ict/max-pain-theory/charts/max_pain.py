"""
Max pain — total value of expiring options at each settlement price (synthetic open interest).

Source: content/en/ict/max-pain-theory.mdx (rewritten). Open interest below is made up for illustration.
"""

import plotly.graph_objects as go

from _paths import OUT
from chartkit import Chart, Reveal, save

NAME = "max-pain-curve"
STRIKES = [440 + 2.5 * i for i in range(9)]
CALL_OI = [800, 1500, 2600, 4200, 6000, 7800, 9500, 6200, 3000]
PUT_OI = [3500, 6800, 9200, 7600, 5800, 4000, 2400, 1300, 600]
MULT = 100


def payout(price):
    calls = sum(oi * max(0.0, price - k) for k, oi in zip(STRIKES, CALL_OI)) * MULT
    puts = sum(oi * max(0.0, k - price) for k, oi in zip(STRIKES, PUT_OI)) * MULT
    return calls, puts


TABLE = [(k, *payout(k)) for k in STRIKES]
MAX_PAIN = min(TABLE, key=lambda r: r[1] + r[2])[0]


def validate():
    assert STRIKES[0] < MAX_PAIN < STRIKES[-1], "max pain is an interior strike"
    totals = [c + p for _, c, p in TABLE]
    i = STRIKES.index(MAX_PAIN)
    assert all(totals[j] > totals[i] for j in range(len(totals)) if j != i)


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal, left=60)
    xs = STRIKES
    m = 1e6
    with ch.group("calls") as shown:
        if shown:
            ch.fig.add_trace(go.Bar(x=xs, y=[c / m for _, c, _ in TABLE], name="Calls", marker_color=t.bull,
                                    opacity=0.85 * ch.reveal.alpha("calls"), width=1.0, offset=-1.05))
    with ch.group("puts") as shown:
        if shown:
            ch.fig.add_trace(go.Bar(x=xs, y=[p / m for _, _, p in TABLE], name="Puts", marker_color=t.bear,
                                    opacity=0.85 * ch.reveal.alpha("puts"), width=1.0, offset=0.05))
    with ch.group("total") as shown:
        if shown:
            ch.fig.add_trace(go.Scatter(x=xs, y=[(c + p) / m for _, c, p in TABLE], mode="lines+markers",
                                        line=dict(color=t.ink, width=2.4), marker=dict(size=7),
                                        opacity=ch.reveal.alpha("total"), name="Total"))
    with ch.group("min"):
        lo = next((c + p) / m for k, c, p in TABLE if k == MAX_PAIN)
        ch.callout(MAX_PAIN, lo, MAX_PAIN, lo + 12, f"<b style='color:{t.accent}'>Max pain {MAX_PAIN:g}</b><br>"
                   "option holders get the least here", xanchor="center")
    ch.header("Options · Max Pain", "Max Pain — the Price Where Expiring Options Are Worth Least",
              "Synthetic open interest · bars = what calls and puts would pay out if price settled at each strike",
              key=[("■", t.bull, "Calls"), ("■", t.bear, "Puts"), ("●", t.ink, "Total")])
    ch.footnote("Made-up open interest for illustration, based on the Max Pain lesson")
    ch.caption()
    ch.fig.update_layout(barmode="overlay", showlegend=False, hovermode=False)
    ch.axes(x_range=[437.5, 462.5], y_range=[0, 36], y_dtick=5, y_fmt=".0f", x_title="Settlement price at expiry",
            x_ticks=(STRIKES, [f"{k:g}" for k in STRIKES]))
    ch.fig.update_yaxes(title=dict(text="payout to holders ($ millions)", font=dict(size=12, color=t.ink3)))
    return ch.fig


def main():
    paths = save(NAME, build, "Max Pain", OUT)
    for k, c, p in TABLE:
        print(f"{k:g}: calls {c / 1e6:.2f}M puts {p / 1e6:.2f}M total {(c + p) / 1e6:.2f}M")
    print(f"{NAME}: max pain {MAX_PAIN} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
