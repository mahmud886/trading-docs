"""
One price path, three ways to manage the same long: hold to the 3R target, move the stop to break-even at 1R, or
take partials (50% at 1R with the stop to break-even, 30% at 2R, 20% at 3R). The R results are simulated on the
candles below; the point is the trade-off, not the numbers.

Candles: data/eurusd_1h_management.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save
from sdkit import load

NAME = "trade-management-three-ways"
PIP = 0.0001
C = load(DATA / "eurusd_1h_management.csv", Candle)
N = len(C)
ENTRY, STOP = 1.0850, 1.0830
R = ENTRY - STOP
LEVELS = {k: round(ENTRY + k * R, 4) for k in (1, 2, 3)}


def simulate(style):
    """Walk the candles after entry; return (R result, exit candle). Stop is checked before targets each candle."""
    stop, open_frac, booked, be_armed = STOP, 1.0, 0.0, False
    plan = {"hold": [(3, 1.0)], "be": [(3, 1.0)], "partials": [(1, 0.5), (2, 0.3), (3, 0.2)]}[style]
    hit = set()
    for i in range(1, N):
        c = C[i]
        if c.l <= stop:
            booked += open_frac * (stop - ENTRY) / R
            return round(booked, 2), i
        if style in ("be", "partials") and not be_armed and c.h >= LEVELS[1]:
            be_armed = True
        for k, frac in plan:
            if k not in hit and c.h >= LEVELS[k]:
                hit.add(k)
                booked += frac * k
                open_frac -= frac
        if be_armed:
            stop = ENTRY
        if open_frac <= 1e-9:
            return round(booked, 2), i
    return round(booked + open_frac * (C[-1].c - ENTRY) / R, 2), N - 1


RESULTS = {s: simulate(s) for s in ("hold", "be", "partials")}


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    peak = max(range(N), key=lambda k: C[k].h if k < 10 else 0)
    assert LEVELS[1] < C[peak].h < LEVELS[2], "first push: past 1R, short of 2R"
    assert min(c.l for c in C[peak:12]) <= ENTRY and min(c.l for c in C) > STOP, "pullback tags entry, not the stop"
    assert max(c.h for c in C) >= LEVELS[3], "then price reaches 3R"
    assert RESULTS["hold"][0] == 3.0 and RESULTS["be"][0] == 0.0 and RESULTS["partials"][0] == 0.5, RESULTS


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 6.5
    with ch.group("levels"):
        ch.hline(0, x_end, ENTRY, color=t.ink, width=1.6, dash="solid")
        ch.label(x_end, ENTRY, "<b>Entry 1.0850</b> (break-even)", size=11, color=t.ink, xanchor="right",
                 yanchor="bottom")
        ch.hline(0, x_end, STOP, color=t.bear, width=1.6, dash="solid")
        ch.label(x_end, STOP, "<b>Stop 1.0830</b> · 1R = 20 pips", size=11, color=t.bear_text, xanchor="right",
                 yanchor="top")
        for k, y in LEVELS.items():
            ch.hline(0, x_end, y, color=t.bull_text, dash="dot")
            ch.label(x_end, y, f"<b>{k}R</b> {y:.4f}", size=11, color=t.bull_text, xanchor="right", yanchor="bottom")
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("pull"):
        ch.callout(11, C[11].l, 8.0, 1.0838, "Pullback tags 1.0849 — the break-even stop is hit", xanchor="center")
    with ch.group("results"):
        names = {"hold": "A · Hold to 3R", "be": "B · Break-even at 1R", "partials": "C · Partials 50 / 30 / 20"}
        rows = "<br>".join(f"{names[s]}: <b>{'+' if r > 0 else ''}{r:g}R</b>" for s, (r, _) in RESULTS.items())
        ch.label(N + 0.3, 1.0840, f"<b>Same path, three results</b><br>{rows}", size=12, color=t.ink, yanchor="middle")
    ch.header("Price Action · Trade Management", "Trade Management — Every Choice Has a Cost",
              "EUR/USD · 1-hour candles · one long, one price path, three ways to manage it",
              key=[("━", t.ink, "Entry"), ("━", t.bear, "Stop"), ("┅", t.bull_text, "1R / 2R / 3R")])
    ch.footnote("Synthetic candles; results are simulated on this one path to show trade-offs, not a track record")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0822, 1.0922], y_dtick=0.0010, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Trade Management", OUT)
    print(NAME, RESULTS, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
