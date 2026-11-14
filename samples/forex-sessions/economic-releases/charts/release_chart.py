"""
Where the big scheduled releases land in Bangladesh time. Each is defined in its local time and converted with the
rules in sessionkit (BD = UTC+6, no DST). ◆ = US/UK summer, ◇ = winter. Japan has no DST; Australia's DST runs the
other way (its clocks are forward in the northern winter).
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from sessionkit import clock

NAME = "release-clock-bd"
X0, X1 = 5, 26
# key, name, summer BD, winter BD, local description
EVENTS = [
    ("jp", "Japan data", 5 + 50 / 60, 5 + 50 / 60, "8:50 AM Tokyo"),
    ("au", "Australia jobs", 7.5, 6.5, "11:30 AM Sydney"),
    ("cn", "China CPI / activity", 7.5, 7.5, "9:30 AM Beijing"),
    ("rba", "RBA decision", 10.5, 9.5, "2:30 PM Sydney"),
    ("uk", "UK CPI / jobs / GDP", 12, 13, "7:00 AM London"),
    ("boe", "BoE decision", 17, 18, "12:00 PM London"),
    ("ecb", "ECB decision", 18.25, 19.25, "2:15 PM Frankfurt"),
    ("us", "US NFP / CPI / GDP", 18.5, 19.5, "8:30 AM New York"),
    ("fomc", "FOMC decision", 24, 25, "2:00 PM New York"),
]


def validate():
    d = {k: (s, w) for k, _, s, w, _ in EVENTS}
    assert d["us"] == (18.5, 19.5) and d["fomc"] == (24, 25) and d["uk"] == (12, 13)
    assert d["rba"] == (10.5, 9.5) and d["au"] == (7.5, 6.5), "Australia's DST runs the other way"
    assert d["jp"][0] == d["jp"][1] and d["cn"][0] == d["cn"][1], "no DST in Japan or China"
    assert clock(18.25) == "6:15 PM" and clock(24) == "12:00 AM" and clock(5 + 50 / 60) == "5:50 AM"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal, left=190, right=40)
    cursor = None if ch.reveal.candles is None else X0 + ch.reveal.candles
    n = len(EVENTS)
    bands = [("Asia", 6, 15, t.zone), ("London", 13, 22, t.accent), ("New York", 18, 27, t.bear)]
    with ch.group("bands"):
        for name, a, b, col in bands:
            ch.zone(max(a, X0), min(b, X1), 0.3, n + 0.9, color=col, alpha=0.05, border=False)
            ch.label((max(a, X0) + min(b, X1)) / 2 + (0 if name != "Asia" else 0), n + 0.75,
                     f"<b>{name}</b>", size=11, color=t.ink3, xanchor="center", yanchor="middle")
    for k, (key, name, s, w, local) in enumerate(EVENTS):
        y = n - k
        with ch.group(key):
            ch.label(s, y, "◆", size=18, color=t.accent, xanchor="center", yanchor="middle")
            if w != s:
                ch.label(w, y, "◇", size=18, color=t.ink2, xanchor="center", yanchor="middle")
                ch.hline(min(s, w), max(s, w), y, color=t.ink3, dash="dot")
            right = s > 17
            txt = f"<b>{clock(s)}</b>" + (f" / {clock(w)}" if w != s else "") + f" · {local}"
            ch.label((min(s, w) - 0.35) if right else (max(s, w) + 0.35), y, txt, size=11, color=t.ink,
                     xanchor="right" if right else "left", yanchor="middle")
    if cursor is not None and cursor < X1:
        ch.fig.add_vline(x=cursor, line=dict(color=t.ink, width=2))
        ch.label(cursor, 0.1, f"<b>{clock(cursor)} BD</b>", size=13, color=t.ink, xanchor="center", yanchor="top")
    ch.header("Forex Sessions · Economic Releases", "The Big Releases in Bangladesh Time",
              "◆ US/UK summer · ◇ winter (US/UK clocks back) · each event converted from its local time",
              key=[("◆", t.accent, "Summer"), ("◇", t.ink2, "Winter")])
    ch.footnote("For two or three weeks around the clock changes, US and UK times differ from these; check the calendar")
    ch.caption()
    ticks = list(range(X0 + 1, X1 + 1, 2))
    ch.axes(x_range=[X0 - 0.2, X1 + 0.2], y_range=[0.0, n + 1.2], y_dtick=1, y_fmt="d",
            x_title="Bangladesh time (UTC+6)", x_ticks=(ticks, [clock(h) for h in ticks]))
    ch.fig.update_yaxes(side="left", showgrid=False, tickvals=[n - k for k in range(n)],
                        ticktext=[e[1] for e in EVENTS], minor=dict(showgrid=False))
    ch.fig.update_xaxes(showgrid=False)
    return ch.fig


def main():
    paths = save(NAME, build, "Release Clock", OUT)
    print(NAME, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
