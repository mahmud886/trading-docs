"""
Three entry models on one short at resistance (gold, 15m), with the same stop and target: risk entry (limit in the
zone), confirmation entry (close of a bearish engulfing), break-retest entry (after a CHOCH, on the retest).
For each: R:R and the win rate needed just to break even.

Candles: data/xauusd_15m_entries.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "entry-models-breakeven"
C = load(DATA / "xauusd_15m_entries.csv", Candle, unit_label="15m candle")
N = len(C)
ZONE = (2420.0, 2425.0)
I_HL, I_ENG, I_CHOCH = 5, 8, 10
HL = C[I_HL].l
STOP, TARGET = 2428.0, 2388.0
MODELS = {"A": (7, 2420.0, "Risk entry — limit in the zone"),
          "B": (I_ENG, C[I_ENG].c, "Confirmation — engulfing close"),
          "C": (12, 2412.0, "Break-retest — after the CHOCH")}


def rr(e):
    risk, [(_, reward, r)] = levels(e, STOP, [TARGET], 1.0)
    return risk, reward, r


def breakeven(r):
    return 1 / (1 + r)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert ZONE[0] <= max(c.h for c in C) <= ZONE[1] and max(c.h for c in C) < STOP, "top inside the zone"
    e, p = C[I_ENG], C[I_ENG - 1]
    assert not e.bullish and p.bullish and e.o >= p.c and e.c <= p.o, "bearish engulfing"
    assert all(c.c >= HL for c in C[I_HL:I_CHOCH]) and C[I_CHOCH].c < HL, "CHOCH below the higher low"
    for k, (i, entry, _) in MODELS.items():
        assert C[i].l <= entry <= C[i].h, k
        assert all(not (c.l <= entry <= c.h) for c in C[I_CHOCH + 1:i]) if k == "C" else True
    assert min(c.l for c in C) > TARGET, "target not reached — the plan, not a result"
    rs = [rr(e)[2] for _, e, _ in MODELS.values()]
    assert rs == sorted(rs, reverse=True)


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 8.5
    with ch.group("zone"):
        ch.zone(-0.5, x_end, *ZONE, color=t.bear, alpha=0.22)
        ch.label(-0.4, ZONE[1] + 0.6, "<b>Resistance</b> 2,420 – 2,425", size=11, color=t.bear_text, yanchor="bottom")
        ch.hline(-0.5, x_end, STOP, color=t.bear, width=1.6, dash="solid")
        ch.label(x_end, STOP + 0.4, "Stop 2,428 (all three)", size=11, color=t.bear_text, xanchor="right",
                 yanchor="bottom")
        ch.hline(-0.5, x_end, TARGET, color=t.bull, width=1.6, dash="solid")
        ch.label(x_end, TARGET - 0.4, "Target 2,388 (all three)", size=11, color=t.bull_text, xanchor="right",
                 yanchor="top")
    ch.candles(C, "XAU/USD 15m (synthetic)", price_fmt=".1f", x=list(range(N)), text=[c.label for c in C])
    ys = {"A": 2420.0, "B": 2414.0, "C": 2408.0}
    for k, (i, e, name) in MODELS.items():
        risk, reward, r = rr(e)
        with ch.group(k):
            ch.hline(i - 0.4, x_end, e, color=t.ink2, dash="dot")
            ch.label(N + 0.2, ys[k] + (0.5 if k != "C" else -0.5),
                     f"<b>{k}</b> {name}<br>sell {e:,.0f} · risk ${risk:g} · 1 : {r:.1f} · "
                     f"<b>break-even win rate {breakeven(r) * 100:.0f}%</b>", size=11, color=t.ink,
                     yanchor="bottom" if k != "C" else "top")
            if k == "C":
                ch.hline(I_HL, I_CHOCH + 0.4, HL, color=t.ink3, dash="dash")
                ch.label(7.0, HL - 0.5, "higher low 2,409.5", size=10, color=t.ink3, xanchor="center",
                         yanchor="top")
    ch.header("Price Action · Entry Models", "Entry Models — Price, Proof, and the Win Rate You Need",
              "XAU/USD · 15-minute candles · one short at resistance, three entries, same stop and target",
              key=[("■", t.bear, "Resistance"), ("┅", t.ink2, "Entry levels")])
    ch.footnote("Synthetic candles built around the levels in the Entry Models lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[2383.0, 2432.0], y_dtick=5.0, y_fmt=",.0f",
            x_title="15-minute candles", x_ticks=(list(range(0, N, 2)), [str(i + 1) for i in range(0, N, 2)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Entry Models", OUT)
    for k, (_, e, name) in MODELS.items():
        risk, reward, r = rr(e)
        print(k, e, risk, reward, round(r, 2), round(breakeven(r) * 100))
    print(', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
