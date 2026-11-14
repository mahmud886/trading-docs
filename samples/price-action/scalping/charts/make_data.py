"""Generate data/eurusd_1m_scalp.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0861, 1.0859, 1.0860, 1.0858, 1.0857, 1.0858, 1.0856, 1.0855, 1.0856, 1.0854, 1.0852, 1.0851, 1.0853,
          1.0855, 1.0854, 1.0856, 1.0858, 1.0857, 1.0860, 1.0861, 1.0859, 1.0862]
rows = from_closes(CLOSES, 1.0863, up=(0.0002, 0.0001), down=(0.0001, 0.0002), override={10: dict(l=1.0851), 11: dict(l=1.0851), 12: dict(l=1.0848),
                                                                                         13: dict(l=1.0852)})
write_rows(DATA / "eurusd_1m_scalp.csv", rows, "Synthetic EUR/USD 1-minute candles for the Price Action Scalping lesson")
print(len(rows), "candles")
