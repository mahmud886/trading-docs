"""
One long, four exits: a fixed 2R target, a structural exit just below resistance, a stop trailed under each new
higher low, and a time exit at the New York close. The R results are simulated on this one path to show how the
exits differ, not which is best.

Candles: data/gbpusd_1h_exits.csv (synthetic), 1-hour candles from 1:00 PM Bangladesh time (US summer).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save
from sdkit import load

NAME = "exit-models-four-exits"
PIP = 0.0001
C = load(DATA / "gbpusd_1h_exits.csv", Candle, unit_label="hour")
N = len(C)
ENTRY, STOP = 1.2700, 1.2680
R = ENTRY - STOP
FIXED = round(ENTRY + 2 * R, 4)
RES = (1.2760, 1.2770)
STRUCT = 1.2758
HLS, NEW_HIGHS = (6, 9), (8, 10)


def bd(i):
    h = (13 + i) % 24
    return f"{h - 12 if h > 12 else (12 if h == 0 else h)}:00 {'PM' if 12 <= 13 + i < 24 else 'AM'}"


def first_hit(level):
    return next(i for i in range(1, N) if C[i].h >= level)


def trail():
    """Stop starts at STOP; after each new swing high it moves 1 pip under the latest higher low."""
    stop, steps = STOP, []
    for i in range(1, N):
        if C[i].l <= stop:
            return i, stop, steps
        if i in NEW_HIGHS:
            hl = max(h for h in HLS if h < i)
            stop = round(C[hl].l - PIP, 4)
            steps.append((i, stop))
    raise AssertionError("trailing stop never hit")


def r(price):
    return round((price - ENTRY) / R, 2)


I_FIXED, I_STRUCT = first_hit(FIXED), first_hit(STRUCT)
I_TRAIL, TRAIL_PX, TRAIL_STEPS = trail()
EXITS = {"A": ("Fixed 2R target", I_FIXED, FIXED), "B": ("Structural — below resistance", I_STRUCT, STRUCT),
         "C": ("Trailing — under higher lows", I_TRAIL, TRAIL_PX), "D": ("Time — New York close", N - 1, C[-1].c)}


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert C[0].c == ENTRY and min(c.l for c in C[1:]) > STOP
    for k in HLS:
        assert C[k].l < C[k - 1].l and C[k].l < C[k + 1].l, f"swing low {k}"
    assert C[HLS[1]].l > C[HLS[0]].l, "higher lows"
    highs = [max(c.h for c in C[:k]) for k in NEW_HIGHS]
    assert all(C[k].h > hi for k, hi in zip(NEW_HIGHS, highs)), "new highs"
    assert max(c.h for c in C) < RES[1] and max(c.h for c in C) >= RES[0], "wick into resistance only"
    assert I_FIXED < I_STRUCT < I_TRAIL < N - 1
    assert bd(N - 1) == "1:00 AM", "last candle closes at 2:00 AM BD = 4 PM New York (summer)"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 5.5
    with ch.group("levels"):
        ch.hline(-0.5, x_end, ENTRY, color=t.ink, width=1.6, dash="solid")
        ch.label(x_end, ENTRY, "<b>Entry 1.2700</b>", size=11, color=t.ink, xanchor="right", yanchor="bottom")
        ch.hline(-0.5, x_end, STOP, color=t.bear, width=1.6, dash="solid")
        ch.label(x_end, STOP, "<b>Stop 1.2680</b> · 1R = 20 pips", size=11, color=t.bear_text, xanchor="right",
                 yanchor="top")
        ch.zone(-0.5, x_end, *RES, color=t.bear, alpha=0.20)
        ch.label(-0.4, RES[1], "<b>Resistance</b> 1.2760 – 1.2770 (yesterday's high)", size=11, color=t.bear_text,
                 yanchor="bottom")
    ch.candles(C, "GBP/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    for k, (name, i, px) in EXITS.items():
        with ch.group(k):
            if k == "C":
                for j, s in TRAIL_STEPS:
                    ch.hline(j + 0.6, I_TRAIL + 0.4, s, color=t.accent, dash="dot")
                ch.label(I_TRAIL - 0.45, TRAIL_PX - 0.0002, f"<b>C</b> {px:.4f}", size=11, color=t.ink, xanchor="right",
                         yanchor="top")
            elif k == "D":
                ch.label(i + 0.5, px, f"<b>D</b> {px:.4f}", size=11, color=t.ink, yanchor="middle")
            else:
                ch.hline(i - 0.4, i + 0.4, px, color=t.bull_text, width=2.4, dash="solid")
                ch.label(i, C[i].h + 0.0002, f"<b>{k}</b> {px:.4f}", size=11, color=t.ink, xanchor="center",
                         yanchor="bottom")
    with ch.group("results"):
        rows = "<br>".join(f"<b>{k}</b> {name}: <b>+{r(px):g}R</b> ({bd(i)} candle)" for k, (name, i, px) in EXITS.items())
        ch.label(N + 0.3, 1.2712, f"<b>Same long, four exits</b><br>{rows}", size=11, color=t.ink, yanchor="middle")
    ch.header("Price Action · Exit Models", "Exit Models — Where You Get Out Decides What You Keep",
              "GBP/USD · 1-hour candles · 1:00 PM – 2:00 AM Bangladesh time (US summer) · one long, four exit rules",
              key=[("━", t.ink, "Entry"), ("■", t.bear, "Resistance"), ("┅", t.accent, "Trailing stop")])
    ch.footnote("Synthetic candles; results are simulated on this one path to compare exits, not a track record")
    ch.caption()
    ticks = list(range(0, N, 2))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.2672, 1.2782], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "Exit Models", OUT)
    print(NAME, {k: (i, px, r(px)) for k, (_, i, px) in EXITS.items()}, TRAIL_STEPS, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
