"""
A one-day session playbook in Bangladesh time (US/UK summer): what to do in each block — prepare, watch, London
entries, the 6:00 PM continuation-or-reversal decision, New York entries, and the stop time. Add one hour to London
and New York blocks in winter.
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from sessionkit import clock

NAME = "session-playbook-bd"
X0, X1 = 5, 24
# key, label, start, end (BD hours), colour key
BLOCKS = [
    ("prep", "Prepare", 6, 12.5, "zone", "6:00 AM – 12:30 PM · mark the Asian range, write the daily bias"),
    ("watch", "Watch", 13, 13.5, "ink3", "1:00 – 1:30 PM · watch London's first move; no trade"),
    ("lon", "London entries", 13.5, 17, "accent", "1:30 – 5:00 PM · sweep reversal or opening-range break — wait for a close and a CHOCH"),
    ("dec", "Decision", 18, 18.5, "ink2", "6:00 – 6:30 PM · London stretched and swept? → reversal setup · otherwise continuation"),
    ("ny", "New York entries", 18.5, 22, "bear", "6:30 – 10:00 PM · after the data: pullback with London, or sweep + CHOCH reversal"),
    ("stop", "Stop", 22, 23, "ink3", "10:00 PM · London closes: manage, trail or close; no new trades"),
]


def validate():
    assert BLOCKS[2][2] == 13.5 and BLOCKS[4][2] == 18.5 and BLOCKS[5][2] == 22
    assert clock(18.5) == "6:30 PM" and clock(13.5) == "1:30 PM" and clock(22) == "10:00 PM"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal, left=150, right=40)
    cursor = None if ch.reveal.candles is None else X0 + ch.reveal.candles
    n = len(BLOCKS)
    cols = {"zone": t.zone, "ink3": t.ink3, "accent": t.accent, "ink2": t.ink2, "bear": t.bear}
    for k, (key, name, a, b, ck, text) in enumerate(BLOCKS):
        y = n - k
        with ch.group(key):
            ch.zone(a, b, y - 0.05, y + 0.32, color=cols[ck], alpha=0.8, border=False)
            wide = b - a > 1
            ch.label(a + 0.1 if wide else b + 0.15, y + 0.135, f"<b>{name}</b>", size=12,
                     color=t.surface if wide else t.ink, yanchor="middle")
            late = a >= 18
            ch.label(X1 - 0.1 if late else a, y - 0.2, text, size=11, color=t.ink2,
                     xanchor="right" if late else "left", yanchor="middle")
    if cursor is not None and cursor < X1:
        ch.fig.add_vline(x=cursor, line=dict(color=t.ink, width=2))
        ch.label(cursor, 0.2, f"<b>{clock(cursor)} BD</b>", size=13, color=t.ink, xanchor="center", yanchor="top")
    ch.header("Forex Sessions · Strategies", "A Session Playbook for the Bangladesh Day",
              "Times in BD (US/UK summer; add 1 hour to London and New York in winter) · one job per block",
              key=[("■", t.zone, "Asia"), ("■", t.accent, "London"), ("■", t.bear, "New York")])
    ch.footnote("A schedule of jobs, not a prediction — most days offer only one or two good setups")
    ch.caption()
    ticks = list(range(X0 + 1, X1 + 1, 2))
    ch.axes(x_range=[X0 - 0.2, X1 + 0.2], y_range=[0.15, n + 0.6], y_dtick=1, y_fmt="d",
            x_title="Bangladesh time (UTC+6)", x_ticks=(ticks, [clock(h) for h in ticks]))
    ch.fig.update_yaxes(side="left", showgrid=False, tickvals=[], minor=dict(showgrid=False))
    ch.fig.update_xaxes(showgrid=False)
    return ch.fig


def main():
    paths = save(NAME, build, "Session Playbook", OUT)
    print(NAME, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
