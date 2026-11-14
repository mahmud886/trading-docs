"""
Which window fits which schedule, in Bangladesh time: bars for the best window per trader profile in US/UK summer
(solid) and winter (dotted). London and New York windows move one hour later in winter; Tokyo's doesn't.
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from sessionkit import clock

NAME = "trading-windows-bd"
X0, X1 = 5, 28
# key, profile, summer (a, b), winter (a, b), colour key, note
ROWS = [
    ("morning", "Mornings free", (6, 12), (6, 12), "zone",
     "Tokyo range: JPY/AUD/NZD pairs, small targets, watch spreads"),
    ("afternoon", "Afternoons free", (12, 15), (13, 16), "accent",
     "London kill zone: Asian range tested; first directional move"),
    ("evening", "Evenings free", (18, 22), (19, 23), "bear",
     "London–New York overlap; US data at 6:30 PM (7:30 PM in winter)"),
    ("flex", "Flexible / full-time", (12, 22), (13, 23), "ink2",
     "Prepare at noon, trade one or both windows, stop at London's close"),
    ("night", "Late nights free", (24, 27), (25, 28), "ink3",
     "NY late session: thinner; mainly FOMC nights — not a default window"),
]
COL = lambda t: {"zone": t.zone, "accent": t.accent, "bear": t.bear, "ink2": t.ink2, "ink3": t.ink3}


def validate():
    d = {r[0]: (r[2], r[3]) for r in ROWS}
    assert d["afternoon"] == ((12, 15), (13, 16)) and d["evening"] == ((18, 22), (19, 23))
    assert d["morning"][0] == d["morning"][1], "no DST in Japan"
    assert clock(12) == "12:00 PM" and clock(24) == "12:00 AM" and clock(27) == "3:00 AM"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal, left=170, right=40)
    cursor = None if ch.reveal.candles is None else X0 + ch.reveal.candles
    n = len(ROWS)
    cols = COL(t)
    for k, (key, name, (sa, sb), (wa, wb), ck, note) in enumerate(ROWS):
        y = n - k
        with ch.group(key):
            ch.zone(sa, sb, y - 0.02, y + 0.34, color=cols[ck], alpha=0.8, border=False)
            ch.label(sa + 0.12, y + 0.16, f"<b>{clock(sa)} – {clock(sb)}</b>", size=12, color=t.surface,
                     yanchor="middle")
            if (wa, wb) != (sa, sb):
                ch.zone(wa, wb, y - 0.38, y - 0.1, color=cols[ck], alpha=0.14, dash="dot")
                ch.label(wa + 0.12, y - 0.24, f"winter {clock(wa)} – {clock(wb)}", size=10, color=t.ink2,
                         yanchor="middle")
            right = sa > 17
            ch.label(sa - 0.3 if right else sb + 0.3, y + 0.16 if right else y + 0.16, note, size=11, color=t.ink,
                     xanchor="right" if right else "left", yanchor="middle")
    if cursor is not None and cursor < X1:
        ch.fig.add_vline(x=cursor, line=dict(color=t.ink, width=2))
        ch.label(cursor, 0.2, f"<b>{clock(cursor)} BD</b>", size=13, color=t.ink, xanchor="center", yanchor="top")
    ch.header("Forex Sessions · Best Times for Bangladesh", "Pick the Window That Fits Your Day",
              "Bars = best window by schedule · solid = US/UK summer, dotted = winter (London and New York one hour later)",
              key=[("■", t.accent, "London"), ("■", t.bear, "New York"), ("■", t.zone, "Tokyo")])
    ch.footnote("Windows are where trading conditions are usually richest, not a promise of results; pick one and journal it")
    ch.caption()
    ticks = list(range(X0 + 1, X1 + 1, 2))
    ch.axes(x_range=[X0 - 0.2, X1 + 0.2], y_range=[0.0, n + 0.7], y_dtick=1, y_fmt="d",
            x_title="Bangladesh time (UTC+6)", x_ticks=(ticks, [clock(h) for h in ticks]))
    ch.fig.update_yaxes(side="left", showgrid=False, tickvals=[n - k + 0.16 for k in range(n)],
                        ticktext=[r[1] for r in ROWS], minor=dict(showgrid=False))
    ch.fig.update_xaxes(showgrid=False)
    return ch.fig


def main():
    paths = save(NAME, build, "Trading Windows BD", OUT)
    print(NAME, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
