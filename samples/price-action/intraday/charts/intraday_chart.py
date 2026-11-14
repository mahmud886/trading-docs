"""
An intraday FVG trade across sessions (BD time, US summer): London's impulse leaves a fair value gap, New York
retraces into it, and the long targets just above the London high.

Candles: data/eurusd_15m_intraday.csv (synthetic), 15-minute candles from 12:00 PM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "intraday-fvg-sessions"
PIP = 0.0001
C = load(DATA / "eurusd_15m_intraday.csv", Candle, unit_label="15m candle")
N = len(C)
IMPULSE = (4, 7)
FVG = (C[IMPULSE[0]].h, C[IMPULSE[0] + 2].l)
I_NY, I_FILL = 20, 22
LON_HIGH = max(c.h for c in C[:I_NY])
ENTRY, STOP, TARGET = 1.0874, 1.0858, 1.0912


def bd(i):
    m = 12 * 60 + 15 * i
    h, mm = divmod(m, 60)
    return f"{h - 12 if h > 12 else h}:{mm:02d} PM"


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(C[k].bullish for k in range(*IMPULSE)) and FVG[0] < FVG[1], "London impulse leaves an FVG"
    assert all(c.l > FVG[1] for c in C[IMPULSE[0] + 3:I_NY]), "the gap stays open through London"
    p = C[I_FILL]
    assert FVG[0] <= p.l <= ENTRY <= min(p.h, FVG[1]), "NY retrace fills the entry inside the gap"
    assert STOP < FVG[0] and LON_HIGH < TARGET and max(c.h for c in C) < TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    with ch.group("sessions"):
        ch.zone(-0.5, I_NY - 0.5, 1.0835, 1.0925, color=t.zone, alpha=0.06)
        ch.label((I_NY - 1) / 2, 1.0923, "<b>London</b> · 12:00 – 5:00 PM BD", size=11, color=t.ink2,
                 xanchor="center", yanchor="top")
        ch.zone(I_NY - 0.5, x_end, 1.0835, 1.0925, color=t.accent, alpha=0.06)
        ch.label((I_NY + x_end) / 2, 1.0923, "<b>New York</b> · from 5:00 PM BD", size=11, color=t.ink2,
                 xanchor="center", yanchor="top")
    with ch.group("fvg"):
        ch.zone(IMPULSE[0] - 0.4, x_end, *FVG, color=t.bull, alpha=0.26, dash="dot")
        ch.label(IMPULSE[0] + 3.5, FVG[0] - 0.0002, f"London FVG {FVG[0]:.4f} – {FVG[1]:.4f}", size=10,
                 color=t.bull_text, yanchor="top")
        ch.hline(11, x_end, LON_HIGH, color=t.bear_text, dash="dash")
        ch.label(11, LON_HIGH + 0.0002, f"London high {LON_HIGH:.4f}", size=10, color=t.bear_text, yanchor="bottom")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 15m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("position"):
        ch.callout(I_FILL, C[I_FILL].l, 17.0, 1.0846, "NY retraces into the FVG → buy 1.0874", xanchor="center")
    ch.header("Price Action · Intraday", "Intraday — London Leaves a Gap, New York Fills It",
              "EUR/USD · 15-minute candles · 12:00 – 6:45 PM Bangladesh time (US summer) · bullish daily bias",
              key=[("■", t.zone, "London"), ("■", t.accent, "New York"), ("■", t.bull, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the Intraday lesson")
    ch.caption()
    ticks = list(range(0, N, 4))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0835, 1.0925], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "Intraday FVG", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: FVG {FVG} LH {LON_HIGH} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
