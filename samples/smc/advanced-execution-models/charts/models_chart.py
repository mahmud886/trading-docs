"""
Three execution models on one short at a 1H bearish OB:
risk entry (limit at the OB), confirmation entry (market at the CHOCH close), refined entry (the FVG the CHOCH left,
stop above the swing that made it).

Candles: data/eurusd_5m_execution.csv (synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "execution-models"
PIP = 0.0001


def load():
    with (DATA / "eurusd_5m_execution.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"candle {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
N = len(C)
OB = (1.0950, 1.0960)
I_HL, I_TOP, I_LH, I_CHOCH, I_FILL = 3, 5, 7, 8, 10
HL = C[I_HL].l
FVG = (C[I_CHOCH + 1].h, C[I_CHOCH - 1].l)
TARGET = 1.0880
MODELS = {  # key: (fill candle, entry, stop, name)
    "1": (4, 1.0950, 1.0963, "Risk entry"),
    "2": (I_CHOCH, C[I_CHOCH].c, 1.0963, "Confirmation"),
    "3": (I_FILL, 1.0938, 1.0954, "Refined"),
}


def rr(entry, stop):
    risk, [(_, reward, r)] = levels(entry, stop, [TARGET], PIP)
    return risk, reward, r


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert C[I_HL].l < min(C[I_HL - 1].l, C[I_HL + 1].l), "HL is a swing low"
    assert C[I_TOP].h == max(c.h for c in C) and OB[0] < C[I_TOP].h < OB[1], "the top is inside the OB"
    assert C[I_LH].h > max(C[I_LH - 1].h, C[I_LH + 1].h) and C[I_LH].h < C[I_TOP].h, "lower high"
    assert all(c.c >= HL for c in C[I_HL:I_CHOCH]) and C[I_CHOCH].c < HL, "CHOCH below the higher low"
    assert FVG[0] < FVG[1], "bearish FVG"
    for k, (i, e, s, _) in MODELS.items():
        assert C[i].l <= e <= C[i].h, k
        assert all(c.h < s for c in C[i:]), f"{k}: stop never hit"
    assert FVG[0] <= MODELS["3"][1] <= FVG[1] and MODELS["3"][2] > C[I_LH].h
    assert min(c.l for c in C) > TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 6.5
    with ch.group("ob"):
        ch.zone(-0.5, x_end, *OB, color=t.bear, alpha=0.20)
        ch.label(-0.4, OB[1] + 0.0002, "<b>HTF bearish OB</b> (1H) 1.0950 – 1.0960", size=11, color=t.bear_text,
                 yanchor="bottom")
        ch.hline(-0.5, x_end, TARGET, color=t.bull_text, width=1.5)
        ch.label(x_end, TARGET - 0.0002, "Target 1.0880 (all three)", size=11, color=t.bull_text, xanchor="right",
                 yanchor="top")
    ch.candles(C, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    for k, (i, e, s, name) in MODELS.items():
        risk, reward, r = rr(e, s)
        with ch.group(f"m{k}"):
            ch.hline(i - 0.4, x_end, e, color=t.ink2, dash="dot")
            ch.label(N - 0.2, e + 0.00004, f"<b>{k}</b> {name} {e:.4f} · stop {s:.4f} · risk {risk:g} · <b>1 : {r:.1f}</b>",
                     size=11, color=t.ink, yanchor="bottom")
            if k == "2":
                ch.hline(I_HL, I_CHOCH + 0.4, HL, color=t.ink3, dash="dash")
                ch.callout(I_CHOCH, C[I_CHOCH].l, 5.0, 1.0910, "CHOCH: close below the 1.0932 higher low", xanchor="center")
            if k == "3":
                ch.zone(I_CHOCH - 1 - 0.4, I_FILL + 0.5, *FVG, color=t.bear, alpha=0.35, dash="dot")
                ch.hline(I_LH - 0.4, x_end, s, color=t.bear_text, dash="dash")
                ch.label(x_end, s + 0.00003, "stop ③ 1.0954", size=10, color=t.bear_text, xanchor="right",
                         yanchor="bottom")
                ch.callout(I_LH, C[I_LH].h, 8.5, 1.0972, "Refined stop: above the 1.0951 lower high<br>"
                           "that made the CHOCH", xanchor="center")
    with ch.group("m1"):
        ch.hline(3.6, x_end, 1.0963, color=t.bear_text, dash="dash")
        ch.label(x_end, 1.0963 + 0.00003, "stop ① ② 1.0963", size=10, color=t.bear_text, xanchor="right",
                 yanchor="bottom")
    ch.header("SMC · Advanced Execution Models", "Execution Models — Same POI, Three Entries",
              "EUR/USD · 5-minute candles · a short at a 1H order block, three ways in",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bear, "OB / FVG")])
    ch.footnote("Synthetic candles built around the levels in the Advanced Execution Models lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0872, 1.0980], y_dtick=0.0010, y_fmt=".4f",
            x_title="5-minute candles", x_ticks=(list(range(0, N, 2)), [str(i + 1) for i in range(0, N, 2)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Execution Models", OUT)
    for k, (_, e, s, name) in MODELS.items():
        print(k, name, e, s, rr(e, s))
    print(f"{NAME}: FVG {FVG} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
