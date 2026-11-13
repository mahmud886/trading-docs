"""
Market Maker Buy Model — EUR/USD daily candles.

Source: content/en/ict/market-maker-models.mdx -> "Example 1: MMBM on EUR/USD (Daily)" (consolidation 1.0800–1.0830,
sweep to 1.0785 and bullish MSS, displacement to 1.0880 leaving an FVG 1.0840–1.0855, pullback to 1.0848, expansion
toward 1.0970). Stop 1.0780 below the sweep. Candles are synthetic.
"""

from _paths import OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "eurusd-mmbm"
PIP = 0.0001
OHLC = [
    (1.0815, 1.0828, 1.0803, 1.0820), (1.0820, 1.0830, 1.0808, 1.0812), (1.0812, 1.0822, 1.0800, 1.0818),
    (1.0818, 1.0829, 1.0806, 1.0810), (1.0810, 1.0819, 1.0801, 1.0805), (1.0805, 1.0812, 1.0785, 1.0809),
    (1.0809, 1.0840, 1.0806, 1.0836), (1.0836, 1.0866, 1.0834, 1.0862), (1.0862, 1.0880, 1.0855, 1.0874),
    (1.0874, 1.0877, 1.0858, 1.0861), (1.0861, 1.0864, 1.0848, 1.0852), (1.0852, 1.0870, 1.0850, 1.0867),
    (1.0867, 1.0889, 1.0864, 1.0885), (1.0885, 1.0906, 1.0881, 1.0902), (1.0902, 1.0915, 1.0893, 1.0898),
    (1.0898, 1.0929, 1.0896, 1.0926), (1.0926, 1.0948, 1.0922, 1.0944), (1.0944, 1.0962, 1.0940, 1.0958),
]
CANDLES = [Candle(i, f"day {i + 1}", *v) for i, v in enumerate(OHLC)]
RANGE, SWEEP, LEG_HIGH, FVG = (1.0800, 1.0830), 1.0785, 1.0880, (1.0840, 1.0855)
ENTRY, STOP, TARGET = 1.0848, 1.0780, 1.0970
I_SWEEP, I_MSS, I_DISP, I_FILL = 5, 6, 7, 10
OTE = (LEG_HIGH - 0.79 * (LEG_HIGH - SWEEP), LEG_HIGH - 0.62 * (LEG_HIGH - SWEEP))


def validate():
    c = CANDLES
    assert (min(x.l for x in c[:5]), max(x.h for x in c[:5])) == RANGE
    assert c[I_SWEEP].l == SWEEP == min(x.l for x in c) and c[I_SWEEP].c > RANGE[0], "sweep and close back inside"
    assert c[I_MSS].c > RANGE[1], "MSS: close above the range"
    assert (c[I_DISP - 1].h, c[I_DISP + 1].l) == FVG and max(x.h for x in c[:12]) == LEG_HIGH
    assert c[I_FILL].l == ENTRY and all(x.l > ENTRY for x in c[I_DISP + 1:I_FILL])
    assert FVG[0] < ENTRY < FVG[1] and ENTRY > OTE[1], "the entry is in the FVG, above the OTE zone"
    assert max(x.h for x in c) < TARGET and STOP < SWEEP


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(CANDLES)
    with ch.group("s1"):
        ch.zone(-0.4, 4.4, *RANGE, color=t.ink3, alpha=0.12, dash="dot")
        ch.step(2.0, RANGE[1] + 8 * PIP, 1, "Original consolidation<br>1.0800 – 1.0830")
    with ch.group("s2"):
        ch.callout(I_SWEEP, SWEEP, 2.5, 1.0772, "<b>②</b> Smart-money reversal: sweep to 1.0785,<br>then MSS above "
                   "1.0830", xanchor="center")
    with ch.group("s3"):
        ch.zone(I_DISP - 1 - 0.4, I_FILL - 0.4, *FVG, color=t.bull, alpha=0.18, dash="dash")
        ch.callout(I_DISP, 1.0866, 4.0, 1.0905, "<b>③</b> First leg up to 1.0880<br>leaves an FVG 1.0840 – 1.0855",
                   xanchor="center")
    with ch.group("ote"):
        ch.zone(I_DISP - 0.4, n - 0.6, *OTE, color=t.accent, alpha=0.08, dash="dot")
        ch.label(n - 0.6, OTE[0], f"OTE 62–79% · {OTE[0]:.4f} – {OTE[1]:.4f} (not reached)", size=11,
                 color=t.ink3, xanchor="right", yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, n + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD daily (synthetic)", price_fmt=".4f", x=list(range(n)),
               text=[c.label for c in CANDLES])
    with ch.group("s4"):
        ch.callout(I_FILL, ENTRY, 12.5, 1.0822, "<b>④</b> Re-accumulation: pullback to<br>the FVG CE 1.0848 → buy",
                   xanchor="center")
    with ch.group("s5"):
        ch.callout(15, 1.0929, 12.0, 1.0950, "<b>⑤</b> Second leg: expansion toward<br>buy-side at 1.0970",
                   xanchor="center")
    ch.header("ICT · Market Maker Models", "Market Maker Buy Model — Consolidation, Reversal, Two Legs Up",
              "EUR/USD · daily candles · the stop sits below the reversal low, so the planned R:R is modest",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Bullish FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Market Maker Models lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, n + 1.8], y_range=[1.0760, 1.0985], y_dtick=0.0025, y_fmt=".4f", x_title="Days",
            x_ticks=(list(range(0, n, 3)), [str(i + 1) for i in range(0, n, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Market Maker Buy Model", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: OTE {OTE[0]:.4f}-{OTE[1]:.4f} · risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
