"""
The trading day in Bangladesh time: Sydney, Tokyo, London and New York sessions for US/UK summer (solid) and winter
(outline, one hour later for London and New York), the two overlaps, and the summer kill zones used on this site.
Session hours are local 7 AM – 4 PM Sydney, 9 AM – 6 PM Tokyo and 8 AM – 5 PM London / New York.
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from sessionkit import bd_hours, clock, overlap

NAME = "sessions-bd-map"
X0, X1 = 2, 28                      # 2:00 AM BD to 4:00 AM next day
ROWS = {"Sydney": 4, "Tokyo": 3, "London": 2, "New York": 1}
KILL = [("Asian range", 6, 12), ("London KZ", 12, 15), ("NY KZ", 17, 20)]


def colors(t):
    return {"Sydney": t.ink3, "Tokyo": t.zone, "London": t.accent, "New York": t.bear}


def validate():
    assert bd_hours("London") == (13, 22) and bd_hours("New York") == (18, 27)
    assert bd_hours("London", "winter") == (14, 23) and bd_hours("New York", "winter") == (19, 28)
    assert bd_hours("Tokyo") == bd_hours("Tokyo", "winter") == (6, 15)
    assert overlap("London", "New York") == (18, 22) and overlap("Tokyo", "London") == (13, 15)


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal, left=120, right=40)
    col = colors(t)
    cursor = None if ch.reveal.candles is None else X0 + ch.reveal.candles
    with ch.group("overlaps"):
        for a, b in (("Tokyo", "London"), ("London", "New York")):
            lo, hi = overlap(a, b)
            ch.zone(lo, hi, 0.55, 4.45, color=t.zone if a == "Tokyo" else t.accent, alpha=0.10, border=False)
            ch.label((lo + hi) / 2, 4.62, f"<b>{a}–{b} overlap</b><br>{clock(lo)} – {clock(hi)}",
                     size=11, color=t.ink2, xanchor="center", yanchor="bottom", align="center")
    for name, y in ROWS.items():
        with ch.group(name):
            o, c = bd_hours(name)
            if cursor is not None:
                c = min(c, max(o, cursor))
            if c > o:
                ch.zone(o, c, y - 0.05, y + 0.30, color=col[name], alpha=0.85, border=False)
                ch.label(o + 0.15, y + 0.125, f"<b>{name}</b> {clock(o)} – {clock(bd_hours(name)[1])}", size=12,
                         color=t.surface, yanchor="middle")
            wo, wc = bd_hours(name, "winter")
            if (wo, wc) != bd_hours(name):
                ch.zone(wo, wc, y - 0.38, y - 0.13, color=col[name], alpha=0.12, dash="dot")
                ch.label(wo + 0.15, y - 0.255, f"winter {clock(wo)} – {clock(wc)}", size=11, color=t.ink2,
                         yanchor="middle")
            else:
                ch.label(o + 0.15, y - 0.255, "same all year (no DST in Japan)", size=11, color=t.ink3,
                         yanchor="middle")
    with ch.group("kill"):
        for name, lo, hi in KILL:
            ch.zone(lo, hi, 0.0, 0.32, color=t.ink2, alpha=0.18, dash="dot")
            ch.label((lo + hi) / 2, 0.16, f"<b>{name}</b> {clock(lo)}–{clock(hi)}", size=11, color=t.ink,
                     xanchor="center", yanchor="middle")
    if cursor is not None and cursor < X1:
        ch.fig.add_vline(x=cursor, line=dict(color=t.ink, width=2))
        ch.label(cursor, -0.35, f"<b>{clock(cursor)} BD</b>", size=13, color=t.ink, xanchor="center", yanchor="top")
    ch.header("Forex Sessions · Overview", "The Forex Day in Bangladesh Time",
              "Sessions by local business hours · solid = US/UK summer, dotted = winter · kill zones shown for summer",
              key=[("■", col["Tokyo"], "Tokyo"), ("■", col["London"], "London"), ("■", col["New York"], "New York")])
    ch.footnote("Session hours are conventions (local business hours); liquidity changes gradually, not on the hour")
    ch.caption()
    ticks = list(range(X0, X1 + 1, 2))
    ch.axes(x_range=[X0 - 0.2, X1 + 0.2], y_range=[-0.6, 5.9], y_dtick=1, y_fmt="d", x_title="Bangladesh time (UTC+6)",
            x_ticks=(ticks, [clock(h) for h in ticks]))
    ch.fig.update_yaxes(side="left", tickvals=[0.16, 1, 2, 3, 4], ticktext=["Kill zones", "New York", "London", "Tokyo", "Sydney"], minor=dict(showgrid=False), showgrid=False)
    ch.fig.update_xaxes(showgrid=False)
    return ch.fig


def main():
    paths = save(NAME, build, "Forex Sessions in BD Time", OUT)
    print(NAME, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
