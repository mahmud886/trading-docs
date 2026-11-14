"""Generate data/xauusd_15m_entries.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [2402, 2406, 2404, 2409, 2413, 2411, 2417, 2421, 2414, 2410, 2406, 2410, 2411, 2404, 2398, 2393, 2391]
rows = from_closes([float(c) for c in CLOSES], 2398.0, up=(1.5, 0.5), down=(0.5, 1.5), dp=1,
                   override={7: dict(h=2424.5)})
write_rows(DATA / "xauusd_15m_entries.csv", rows, "Synthetic XAU/USD 15m candles for the Price Action Entry Models lesson",
           dp=1)
print(len(rows), "candles")
