"""Generate data/eurusd_15m_confirmation.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0890, 1.0882, 1.0875, 1.0879, 1.0866, 1.0862, 1.0866, 1.0857, 1.0852, 1.0854, 1.0859, 1.0864, 1.0872,
          1.0866, 1.0863, 1.0868, 1.0875, 1.0881]
rows = from_closes(CLOSES, 1.0896, override={3: dict(h=1.0882), 6: dict(h=1.0869), 8: dict(l=1.0846),
                                             9: dict(l=1.0841, h=1.0856), 14: dict(l=1.0860)})
write_rows(DATA / "eurusd_15m_confirmation.csv", rows,
           "Synthetic EUR/USD 15m candles for the Price Action Confirmation lesson")
print(len(rows), "candles")
