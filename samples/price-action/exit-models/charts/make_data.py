"""Generate data/gbpusd_1h_exits.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.2700, 1.2712, 1.2725, 1.2736, 1.2741, 1.2730, 1.2724, 1.2738, 1.2752, 1.2744, 1.2756, 1.2735, 1.2726]
rows = from_closes(CLOSES, 1.2692, override={4: dict(h=1.2744), 6: dict(l=1.2722), 8: dict(h=1.2759),
                                             9: dict(l=1.2736), 10: dict(h=1.2763), 11: dict(l=1.2733, h=1.2757)})
write_rows(DATA / "gbpusd_1h_exits.csv", rows, "Synthetic GBP/USD 1H candles for the Price Action Exit Models lesson")
print(len(rows), "candles")
