"""Generate data/eurusd_1h_liquidity.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.1030, 1.1045, 1.1055, 1.1042, 1.1025, 1.1010, 1.1004, 1.1018, 1.1033, 1.1048, 1.1054, 1.1040, 1.1026,
          1.1012, 1.1005, 1.1015, 1.1003, 1.1008, 1.1022, 1.1030, 1.1038, 1.1045, 1.1050]
rows = from_closes(CLOSES, 1.1020, override={2: dict(h=1.1060), 6: dict(l=1.1000), 10: dict(h=1.1059),
                                              14: dict(l=1.1001), 17: dict(l=1.0985), 18: dict(l=1.1004)})
write_rows(DATA / "eurusd_1h_liquidity.csv", rows, "Synthetic EUR/USD 1H candles for the Price Action Liquidity lesson")
print(len(rows), "candles")
