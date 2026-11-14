"""
One EUR/USD day by session (Bangladesh time, US summer): Asia builds a 20-pip range, London's first push sweeps the
Asian high and fails, the second move breaks the Asian low, and the short is taken on the retest; New York continues.

Candles: data/eurusd_30m_sessions.csv (synthetic), 30-minute candles from 6:00 AM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "session-asian-range"
PIP = 0.0001
C = load(DATA / "eurusd_30m_sessions.csv", Candle, unit_label="30m candle")
N = len(C)
I_ASIA_END, I_LONDON, I_NY = 12, 14, 24      # 12:00 PM, 1:00 PM, 6:00 PM BD
ASIA_H = max(c.h for c in C[:I_ASIA_END])
ASIA_L = min(c.l for c in C[:I_ASIA_END])
WIDTH = round(ASIA_H - ASIA_L, 4)
I_SWEEP, I_BREAK, I_FILL = 14, 17, 19
ENTRY, STOP = 1.0850, 1.0861
TARGET = round(ASIA_L - 2 * WIDTH, 4)


def bd(i):
    m = 6 * 60 + 30 * i
    h, mm = divmod(m, 60)
    return f"{h - 12 if h > 12 else h}:{mm:02d} {'PM' if h >= 12 else 'AM'}"


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert bd(I_ASIA_END) == "12:00 PM" and bd(I_LONDON) == "1:00 PM" and bd(I_NY) == "6:00 PM"
    assert round(WIDTH / PIP) == 20
    assert all(ASIA_L <= c.l and c.h <= ASIA_H for c in C[I_ASIA_END:I_LONDON]), "quiet before London"
    s = C[I_SWEEP]
    assert s.h > ASIA_H and ASIA_L < s.c < ASIA_H, "first London push sweeps the Asian high, closes back inside"
    assert all(c.c >= ASIA_L for c in C[:I_BREAK]) and C[I_BREAK].c < ASIA_L, "second move closes below the Asian low"
    assert all(c.h < ENTRY for c in C[I_BREAK + 1:I_FILL]) and C[I_FILL].h >= ENTRY and C[I_FILL].h < STOP, "retest fill"
    assert min(c.l for c in C) > TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    top, bot = 1.0895, 1.0800
    with ch.group("sessions"):
        ch.zone(-0.5, I_ASIA_END - 0.5, bot, top, color=t.zone, alpha=0.07)
        ch.label((I_ASIA_END - 1) / 2, top - 0.0001, "<b>Asia</b> · 6:00 AM – 12:00 PM BD", size=11, color=t.ink2,
                 xanchor="center", yanchor="top")
        ch.zone(I_LONDON - 0.5, I_NY - 0.5, bot, top, color=t.accent, alpha=0.07)
        ch.label((I_LONDON + I_NY - 1) / 2, top - 0.0001, "<b>London</b> · from 1:00 PM BD", size=11,
                 color=t.ink2, xanchor="center", yanchor="top")
        ch.zone(I_NY - 0.5, x_end, bot, top, color=t.bear, alpha=0.06)
        ch.label((I_NY + x_end) / 2, top - 0.0001, "<b>New York</b> · from 6:00 PM", size=11, color=t.ink2,
                 xanchor="center", yanchor="top")
    with ch.group("range"):
        for y, name in ((ASIA_H, "Asian high"), (ASIA_L, "Asian low")):
            ch.hline(-0.5, x_end, y, color=t.ink2, dash="dash", width=1.4)
            ch.label(-0.4, y + (0.0001 if y == ASIA_H else -0.0001), f"<b>{name}</b> {y:.4f}", size=11,
                     color=t.ink2, yanchor="bottom" if y == ASIA_H else "top")
        ch.label(5.5, ASIA_L - 0.0010, f"Asian range = {WIDTH / PIP:.0f} pips", size=11, color=t.ink3,
                 xanchor="center", yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    ch.candles(C, "EUR/USD 30m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("sweep"):
        ch.callout(I_SWEEP, C[I_SWEEP].h, 10.5, 1.0886, "① London's first push sweeps the Asian high<br>"
                   "and closes back inside — a fakeout", xanchor="center")
    with ch.group("break"):
        ch.callout(I_BREAK, C[I_BREAK].l, 13.0, 1.0828, "② Second move closes<br>below the Asian low", xanchor="center")
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].h, 20.5, 1.0870, "③ Retest → sell 1.0850", xanchor="center")
    ch.header("Price Action · Session Analysis", "Session Analysis — Asia Sets the Range, London Picks the Side",
              "EUR/USD · 30-minute candles · 6:00 AM – 8:30 PM Bangladesh time (US summer) · target = 2× the Asian range",
              key=[("■", t.zone, "Asia"), ("■", t.accent, "London"), ("■", t.bear, "New York")])
    ch.footnote("Synthetic candles built around the levels in the Session Analysis lesson")
    ch.caption()
    ticks = list(range(0, N, 4))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[bot, top], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "Session Analysis", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: asia {ASIA_L}-{ASIA_H} target {TARGET} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
