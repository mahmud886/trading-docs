"""
The ICT time map in Bangladesh time (US summer): kill zones, Silver Bullet hours and macros.

Source: content/en/ict/time-and-price-theory.mdx -> "Key Time Concepts", corrected to the commonly cited ICT macro list.
New York times + 10 h = BD in US summer (add 1 h in US winter).
"""

from _paths import OUT
from chartkit import Chart, Reveal, at, save

NAME = "ict-time-map"


def t(hhmm):
    h = int(hhmm[:2])
    return at(hhmm, 1) if h < 6 else at(hhmm)


ROWS = {"kz": 3.0, "sb": 2.0, "macro": 1.0}
KILL_ZONES = [("12:00", "15:00", "London KZ"), ("17:00", "20:00", "NY AM KZ"), ("23:30", "02:00", "NY PM KZ")]
SILVER = [("13:00", "14:00", "London SB"), ("20:00", "21:00", "NY AM SB"), ("00:00", "01:00", "NY PM SB")]
MACROS = [("12:33", "13:00"), ("14:03", "14:30"), ("18:50", "19:10"), ("19:50", "20:10"), ("20:50", "21:10"),
          ("21:50", "22:10"), ("23:10", "23:40"), ("01:15", "01:45")]


def validate():
    for a, b, *_ in KILL_ZONES + SILVER + MACROS:
        assert t(a) < t(b)
    for a, b in MACROS:
        assert (t(b) - t(a)).seconds <= 40 * 60, "macros are short windows"


validate()


def build(th, reveal: Reveal | None = None):
    ch = Chart(th, reveal, left=170)
    h = 0.32
    with ch.group("kz"):
        for a, b, name in KILL_ZONES:
            ch.zone(t(a), t(b), ROWS["kz"] - h, ROWS["kz"] + h, color=th.accent, alpha=0.22)
            ch.label(t(a), ROWS["kz"], f"<b>{name}</b><br>{a.lstrip('0')} – {b.lstrip('0')}", size=11, xshift=6)
    with ch.group("sb"):
        for a, b, name in SILVER:
            ch.zone(t(a), t(b), ROWS["sb"] - h, ROWS["sb"] + h, color=th.bull, alpha=0.28)
            ch.label(t(a), ROWS["sb"] + h + 0.08, f"<b>{name}</b>", size=11, yanchor="bottom")
    with ch.group("macro"):
        for a, b in MACROS:
            ch.zone(t(a), t(b), ROWS["macro"] - h, ROWS["macro"] + h, color=th.bear, alpha=0.35)
        ch.label(t("18:50"), ROWS["macro"] - h - 0.1, "NY AM macros: 6:50 · 7:50 · 8:50 · 9:50 PM BD (20 min each)",
                 size=11, yanchor="top")
        ch.label(t("12:33"), ROWS["macro"] - h - 0.1, "London macros", size=11, yanchor="top")
    with ch.group("example"):
        ch.fig.add_vrect(x0=t("19:50"), x1=t("20:10"), fillcolor=th.accent, opacity=0.10 * ch.reveal.alpha("example"),
                         line_width=0, layer="below")
        ch.callout(t("19:55"), ROWS["macro"] + h, t("16:30"), 0.15,
                   "<b>Example</b>: 7:55 PM BD — a displacement inside<br>the 7:50 – 8:10 macro, inside the NY AM "
                   "kill zone", xanchor="center")
    for name, y in (("Kill zones", 3.0), ("Silver Bullet", 2.0), ("Macros", 1.0)):
        ch.fig.add_annotation(xref="paper", x=0, xanchor="right", xshift=-12, y=y, text=f"<b>{name}</b>",
                              showarrow=False, font=dict(size=13, color=th.ink))
    ch.header("ICT · Time and Price", "The ICT Time Map — When to Look, in Bangladesh Time",
              "New York times + 10 hours (US summer) · add 1 hour from early November to mid-March",
              key=[("■", th.accent, "Kill zone"), ("■", th.bull, "Silver Bullet"), ("■", th.bear, "Macro")])
    ch.footnote("Windows from the ICT Time and Price Theory lesson, as commonly cited; not trading signals")
    ch.caption()
    hours = ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00", "02:00"]
    labels = ["12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 AM", "2 AM"]
    ch.axes(x_range=[t("11:30"), t("02:40")], y_range=[-0.4, 3.6], y_dtick=10, y_fmt=".0f",
            x_title="Bangladesh time (US summer)", x_ticks=([t(x) for x in hours], labels))
    ch.fig.update_xaxes(type="date")
    ch.fig.update_yaxes(showticklabels=False, showgrid=False)
    return ch.fig


def main():
    paths = save(NAME, build, "ICT Time Map", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
