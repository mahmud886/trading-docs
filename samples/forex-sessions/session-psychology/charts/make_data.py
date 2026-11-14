"""Generate data/eurusd_5m_psych.csv (12:45 – 2:15 PM BD, US/UK summer) from a close path (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0862, 1.0864, 1.0861, 1.0876, 1.0873, 1.0866, 1.0858, 1.0850, 1.0846, 1.0856, 1.0866, 1.0859,
          1.0866, 1.0873, 1.0870, 1.0877, 1.0882, 1.0879, 1.0885]
rows = from_closes(CLOSES, 1.0860, override={3: dict(h=1.0880), 8: dict(l=1.0843), 11: dict(l=1.0854), 18: dict(h=1.0887)})
write_rows(DATA / "eurusd_5m_psych.csv", rows, "Synthetic EUR/USD 5m candles for the Session Psychology lesson")
print(len(rows), "candles")
