"""
The ICT kill zones on a 24-hour Bangladesh-time axis, for US summer time (EDT) and US winter time (EST).

Source: content/en/ict/ict-kill-zones.mdx -> "The Four Kill Zones" and "ICT Macro Times". The original lists New York
times as "EST" next to BD times that are 10 hours later — that is the US summer (EDT, UTC-4) offset. In US winter (EST,
UTC-5) every window is one hour later in BD. Bangladesh does not change its clocks.
"""

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save

NAME = "kill-zone-clock"
NY = [  # (name, start, end) in New York local time, hours
    ("Asian range", -4.0, 2.0, "range"),  # 8 PM – 2 AM NY ≈ 6 AM – 12 PM BD (summer)
    ("London KZ", 2.0, 5.0, "kz"),
    ("NY AM KZ", 7.0, 10.0, "kz"),
    ("NY lunch", 12.0, 13.5, "avoid"),
    ("NY PM KZ", 13.5, 16.0, "kz"),
]
OFFSET = {"summer": 10.0, "winter": 11.0}  # BD = NY + offset


def bd(h, season):
    return (h + OFFSET[season]) % 24


def fmt(h):
    h = h % 24
    hh, mm = int(h), int(round((h - int(h)) * 60))
    suffix = "AM" if hh < 12 else "PM"
    return f"{(hh % 12) or 12}:{mm:02d} {suffix}"


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal, right=40)
    colors = {"kz": t.accent, "range": t.ink3, "avoid": t.bear}
    rows = (("summer", 2.2, "US summer time (EDT) · mid-March to early November"),
            ("winter", 0.8, "US winter time (EST) · early November to mid-March"))
    for season, y, title in rows:
        ch.label(0.15, y + 0.62, f"<b>{title}</b> · BD = New York + {OFFSET[season]:g} h", size=14, color=t.ink)
        ch.zone(0, 24, y - 0.4, y + 0.4, color=t.ink3, alpha=0.05, border=False)
        for name, a, b, kind in NY:
            s, e = bd(a, season), bd(b, season)
            segs = [(s, e)] if s < e else [(s, 24), (0, e)]
            for x0, x1 in segs:
                ch.zone(x0, x1, y - 0.36, y + 0.36, color=colors[kind], alpha=0.30 if kind == "kz" else 0.18,
                        border=False)
            mid = min(max((s + e) / 2 if s < e else (s + 24 + e) / 2 % 24, 1.3), 22.7)
            ch.label(mid, y + 0.1, f"<b>{name}</b>", size=12.5, color=t.ink, xanchor="center")
            ch.label(mid, y - 0.17, f"{fmt(s)} – {fmt(e)}", size=11, color=t.ink2, xanchor="center")
    ch.fig.update_xaxes(range=[0, 24], tickvals=list(range(0, 25, 2)),
                        ticktext=[fmt(h) if h < 24 else "12:00 AM" for h in range(0, 25, 2)],
                        showgrid=True, gridcolor=t.grid, tickfont=dict(family=FONT, size=11, color=t.ink2),
                        title=dict(text="Bangladesh time (BD, UTC+6) — 24 hours", font=dict(size=12, color=t.ink3)))
    ch.fig.update_yaxes(range=[0.1, 3.2], visible=False)
    ch.fig.update_layout(hovermode=False, margin=dict(l=40, r=40, t=150, b=110))
    ch.header("ICT · Kill Zones", "The Kill Zones in Bangladesh Time — Summer and Winter",
              "The windows are fixed in New York time · Bangladesh doesn't change its clocks, so BD times shift "
              "by one hour twice a year",
              key=[("■", t.accent, "Kill zone"), ("■", t.ink3, "Asian range"), ("■", t.bear, "Avoid")])
    ch.footnote("Kill-zone windows from the ICT Kill Zones lesson; DST dates follow the US calendar")
    return ch.fig


def main():
    assert bd(2, "summer") == 12 and bd(2, "winter") == 13, "London KZ starts 12 PM BD (summer), 1 PM BD (winter)"
    paths = save(NAME, build, "Kill Zones in BD Time", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
