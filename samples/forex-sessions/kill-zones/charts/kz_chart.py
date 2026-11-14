"""
ICT kill zones and windows in Bangladesh time. Each window is defined in New York time; BD = New York + 10 hours in
US summer (EDT, UTC-4) and + 11 hours in US winter (EST, UTC-5). Summer bars are solid, winter bars dotted.
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from sessionkit import clock

NAME = "kill-zones-bd"
X0, X1 = 5, 27                         # 5:00 AM BD to 3:00 AM next day
# name, New York start, New York end (hours, may be negative = previous evening)
WINDOWS = [
    ("Asian range", -4, 2),
    ("London kill zone", 2, 5),
    ("London silver bullet", 3, 4),
    ("NY kill zone", 7, 10),
    ("NY AM silver bullet", 10, 11),
    ("London close", 10, 12),
    ("NY PM silver bullet", 14, 15),
]
OFFSET = {"summer": 10, "winter": 11}


def bd(ny, season):
    return ny + OFFSET[season]


def validate():
    s = {n: (bd(a, "summer"), bd(b, "summer")) for n, a, b in WINDOWS}
    assert s["Asian range"] == (6, 12) and s["London kill zone"] == (12, 15) and s["NY kill zone"] == (17, 20)
    assert s["NY AM silver bullet"] == (20, 21) and s["NY PM silver bullet"] == (24, 25)
    assert all(X0 <= bd(a, "winter") and bd(b, "winter") <= X1 for _, a, b in WINDOWS)


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal, left=190, right=40)
    cursor = None if ch.reveal.candles is None else X0 + ch.reveal.candles
    n = len(WINDOWS)
    for k, (name, a, b) in enumerate(WINDOWS):
        y = n - k
        main = name in ("London kill zone", "NY kill zone")
        col = t.accent if "London" in name else t.bear if "NY" in name else t.zone
        with ch.group(name):
            so, sc = bd(a, "summer"), bd(b, "summer")
            ch.zone(so, sc, y - 0.02, y + 0.32, color=col, alpha=0.85 if main else 0.55, border=False)
            ch.label(sc + 0.15, y + 0.15, f"<b>{clock(so)} – {clock(sc)}</b>", size=12, color=t.ink, yanchor="middle")
            wo, wc = bd(a, "winter"), bd(b, "winter")
            ch.zone(wo, wc, y - 0.36, y - 0.08, color=col, alpha=0.12, dash="dot")
            left = wc > 25
            ch.label(wo - 0.15 if left else wc + 0.15, y - 0.22, f"winter {clock(wo)} – {clock(wc)}", size=11,
                     color=t.ink2, xanchor="right" if left else "left", yanchor="middle")
    with ch.group("data"):
        ch.fig.add_vline(x=18.5, line=dict(color=t.ink3, width=1, dash="dash"))
        ch.label(18.6, n + 0.75, "US data 6:30 PM (summer)", size=11, color=t.ink3, yanchor="middle")
    if cursor is not None and cursor < X1:
        ch.fig.add_vline(x=cursor, line=dict(color=t.ink, width=2))
        ch.label(cursor, 0.25, f"<b>{clock(cursor)} BD</b>", size=13, color=t.ink, xanchor="center", yanchor="top")
    ch.header("Forex Sessions · Kill Zones", "Kill Zones in Bangladesh Time",
              "ICT windows defined in New York time · solid = US summer (NY + 10 h), dotted = US winter (NY + 11 h)",
              key=[("■", t.zone, "Asia"), ("■", t.accent, "London"), ("■", t.bear, "New York")])
    ch.footnote("Windows are conventions from ICT teaching; they mark when to pay attention, not when price must move")
    ch.caption()
    ticks = list(range(X0 + 1, X1 + 1, 2))
    ch.axes(x_range=[X0 - 0.2, X1 + 0.2], y_range=[0.1, n + 1.0], y_dtick=1, y_fmt="d",
            x_title="Bangladesh time (UTC+6)", x_ticks=(ticks, [clock(h) for h in ticks]))
    ch.fig.update_yaxes(side="left", tickvals=[n - k for k in range(n)], ticktext=[w[0] for w in WINDOWS],
                        minor=dict(showgrid=False), showgrid=False)
    ch.fig.update_xaxes(showgrid=False)
    return ch.fig


def main():
    paths = save(NAME, build, "Kill Zones in BD Time", OUT)
    print(NAME, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
