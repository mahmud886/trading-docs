"""Generate data/eurusd_30m_chain.csv (6:00 AM – 9:30 PM BD, US/UK summer) from a close path (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0860, 1.0864, 1.0861, 1.0867, 1.0870, 1.0864, 1.0858, 1.0855, 1.0860, 1.0864, 1.0861, 1.0866, 1.0862,
          1.0860,                                                                                  # Asia 6:00 – 12:30
          1.0849, 1.0861,                                                                          # London sweeps the low
          1.0868, 1.0876, 1.0883, 1.0889, 1.0895, 1.0892, 1.0886, 1.0890,                          # London rally to 1.0899
          1.0889, 1.0886,                                                                          # NY pre-market, 6:30 data
          1.0881, 1.0876, 1.0884, 1.0875, 1.0869, 1.0873, 1.0864, 1.0868, 1.0860, 1.0864, 1.0858, 1.0862]
rows = from_closes(CLOSES, 1.0858, override={4: dict(h=1.0872), 7: dict(l=1.0852), 14: dict(l=1.0843),
                                             20: dict(h=1.0899), 22: dict(l=1.0884, h=1.0893),
                                             23: dict(l=1.0885), 25: dict(h=1.0908, l=1.0884),
                                             26: dict(h=1.0886), 27: dict(h=1.0882), 28: dict(h=1.0888, l=1.0872)})
write_rows(DATA / "eurusd_30m_chain.csv", rows, "Synthetic EUR/USD 30m candles for the Session Liquidity Sweeps lesson")
print(len(rows), "candles")
