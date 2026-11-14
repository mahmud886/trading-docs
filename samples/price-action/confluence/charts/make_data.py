"""Generate data/eurusd_h4_confluence.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0832, 1.0845, 1.0852, 1.0838, 1.0846, 1.0853, 1.0836, 1.0815, 1.0798, 1.0790,
          1.0806, 1.0832, 1.0866, 1.0895, 1.0920, 1.0944, 1.0954,
          1.0940, 1.0921, 1.0902, 1.0884, 1.0868, 1.0858,
          1.0872, 1.0886, 1.0897, 1.0906, 1.0916]
rows = from_closes(CLOSES, 1.0826, override={2: dict(h=1.0860), 5: dict(h=1.0860), 9: dict(l=1.0780),
                                             16: dict(h=1.0960), 22: dict(l=1.0852)})
write_rows(DATA / "eurusd_h4_confluence.csv", rows, "Synthetic EUR/USD H4 candles for the Price Action Confluence lesson")
print(len(rows), "candles")
