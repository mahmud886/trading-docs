"""Generate data/eurusd_1h_expansion.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.1012, 1.1024, 1.1018, 1.1030, 1.1024, 1.1036, 1.1031, 1.1040, 1.1036, 1.1044, 1.1040, 1.1045,  # range
          1.1070, 1.1090, 1.1096,                                                                          # expansion
          1.1080, 1.1068, 1.1062,                                                                          # pullback
          1.1075, 1.1086, 1.1094]
rows = from_closes(CLOSES, 1.1025, override={0: dict(l=1.1000), 9: dict(h=1.1049),
                                              17: dict(l=1.1058)})
write_rows(DATA / "eurusd_1h_expansion.csv", rows, "Synthetic EUR/USD 1H candles for the Price Action Expansion lesson")
print(len(rows), "candles")
