"""
Nested dealing ranges — NAS100: the weekly and daily ranges, their equilibria, and where price sits in each.

Source: content/en/ict/dealing-range.mdx -> "Example 3: NAS100 — Nested Dealing Range Alignment" (weekly 17,500–18,200,
EQ 17,850; daily 17,750–18,000, EQ 17,875; price 17,780). The original lists the targets as "daily EQ (17,875) then
weekly EQ (17,850+)"; from 17,780 price reaches 17,850 first, so the chart shows them in that order.
"""

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save

NAME = "nas100-nested-ranges"
WEEKLY, DAILY = (17500.0, 18200.0), (17750.0, 18000.0)
PRICE = 17780.0


def eq(r):
    return (r[0] + r[1]) / 2


def position_in(r):
    return (PRICE - r[0]) / (r[1] - r[0])


def validate():
    assert (eq(WEEKLY), eq(DAILY)) == (17850.0, 17875.0)
    assert WEEKLY[0] <= DAILY[0] and DAILY[1] <= WEEKLY[1], "the daily range sits inside the weekly range"
    assert position_in(WEEKLY) < 0.5 and position_in(DAILY) < 0.5, "price is in discount of both"
    assert PRICE < eq(WEEKLY) < eq(DAILY), "from 17,780 the weekly EQ is reached first"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal, right=104)
    boxes = (("Weekly range", WEEKLY, 0.6, 4.4), ("Daily range", DAILY, 5.6, 9.4))
    for title, r, a, b in boxes:
        ch.zone(a, b, eq(r), r[1], color=t.bear, alpha=0.10, border=False)
        ch.zone(a, b, r[0], eq(r), color=t.bull, alpha=0.10, border=False)
        ch.zone(a, b, r[0], r[1], color=t.ink3, alpha=0.0)
        ch.hline(a, b, eq(r), color=t.ink, width=1.6, dash="dash")
        ch.label((a + b) / 2, r[1] + 8, f"<b>{title}</b> {r[0]:,.0f} – {r[1]:,.0f}", size=15, color=t.ink,
                 xanchor="center", yanchor="bottom")
        ch.label(b - 0.1, eq(r) + 4, f"EQ {eq(r):,.0f}", size=12, color=t.ink, xanchor="right", yanchor="bottom",
                 bold=True)
        ch.label(a + 0.1, eq(r) + 5, "premium", size=12, color=t.bear_text, yanchor="bottom")
        ch.label(a + 0.1, eq(r) - 5, "discount", size=12, color=t.bull_text, yanchor="top")
        ch.label((a + b) / 2, PRICE - 8, f"price at <b>{position_in(r) * 100:.0f} %</b> of the range → "
                 f"<b style='color:{t.bull_text}'>discount ✓</b>", size=13, xanchor="center", yanchor="top")
    ch.hline(0.3, 9.7, PRICE, color=t.accent, width=2.0, dash="solid")
    ch.price_tag(PRICE, "17,780", t.accent, ink=t.tag_ink)
    ch.hline(4.4, 5.6, DAILY[1], color=t.axis, width=1.0, dash="dot")
    ch.hline(4.4, 5.6, DAILY[0], color=t.axis, width=1.0, dash="dot")

    for x, y, txt in ((3.2, eq(WEEKLY), "<b>T1</b> · weekly EQ 17,850<br>(reached first)"),
                      (8.2, eq(DAILY), "<b>T2</b> · daily EQ 17,875")):
        ch.fig.add_annotation(x=x, y=y - 3, ax=x, ay=PRICE + 3, xref="x", yref="y", axref="x", ayref="y",
                              showarrow=True, arrowhead=2, arrowwidth=1.6, arrowcolor=t.accent, text="")
        ch.label(x + 0.12, (y + PRICE) / 2, txt, size=12.5, color=t.ink2)

    ch.fig.add_annotation(xref="paper", yref="paper", x=0.5, y=0, yshift=-30, showarrow=False, xanchor="center",
                          yanchor="top", font=dict(family=FONT, size=13, color=t.ink2),
                          text="Both ranges agree: price is in discount on the weekly <b>and</b> the daily. "
                               "Wait for a 15m MSS + FVG near 17,780 – 17,800 before buying.")
    ch.header("ICT · Dealing Range", "Nested Dealing Ranges — Do the Timeframes Agree?",
              "NAS100 · weekly range with the daily range inside it · price 17,780",
              key=[("■", t.bear, "Premium"), ("■", t.bull, "Discount"), ("━", t.accent, "Price")])
    ch.footnote("Levels from the ICT Dealing Range lesson; ranges drawn to scale")
    ch.fig.update_xaxes(range=[0, 10], visible=False)
    style = ch._axis_style()
    ch.fig.update_yaxes(side="right", range=[17460, 18270], dtick=100, tickformat=",.0f", **style)
    return ch.fig


def main():
    paths = save(NAME, build, "NAS100 Nested Dealing Ranges", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
