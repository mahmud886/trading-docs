"""Generate data/xauusd_15m_newyork.csv (6:00 – 10:45 PM BD, US summer) from a close path (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [2401.0, 2403.0,                                   # before the data
          2414.0, 2419.0,                                   # 6:30 PM data candle, follow-through
          2416.0, 2411.0, 2409.0,                           # pullback into the FVG (7:30 PM stock open)
          2415.0, 2420.0, 2424.0, 2422.0, 2427.0, 2425.0, 2429.0, 2432.0, 2430.0, 2428.0, 2431.0, 2429.0, 2432.0]
rows = from_closes(CLOSES, 2399.5, up=(1.5, 0.5), down=(0.5, 1.5), dp=1,
                   override={1: dict(h=2404.5), 2: dict(h=2416.0, l=2401.5), 3: dict(h=2421.0, l=2412.0),
                             6: dict(l=2407.0), 14: dict(h=2434.0)})
write_rows(DATA / "xauusd_15m_newyork.csv", rows, "Synthetic XAU/USD 15m candles for the New York Session lesson",
           dp=1)
print(len(rows), "candles")
