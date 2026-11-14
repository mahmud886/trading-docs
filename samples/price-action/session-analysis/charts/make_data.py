"""Generate data/eurusd_30m_sessions.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0862, 1.0866, 1.0864, 1.0868, 1.0866, 1.0861, 1.0858, 1.0856, 1.0857, 1.0861, 1.0864, 1.0862,
          1.0862, 1.0865,
          1.0868, 1.0860, 1.0855, 1.0846, 1.0840, 1.0849, 1.0838, 1.0832, 1.0835, 1.0828,
          1.0830, 1.0822, 1.0818, 1.0824, 1.0820, 1.0816]
rows = from_closes(CLOSES, 1.0860, override={4: dict(h=1.0872), 8: dict(l=1.0852), 14: dict(h=1.0880, l=1.0864),
                                             19: dict(h=1.0853), 29: dict(l=1.0814)})
write_rows(DATA / "eurusd_30m_sessions.csv", rows,
           "Synthetic EUR/USD 30m candles for the Price Action Session Analysis lesson")
print(len(rows), "candles")
