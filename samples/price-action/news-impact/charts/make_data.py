"""Generate data/eurusd_5m_news.csv (6:00 – 7:55 PM BD, US CPI at 6:30 PM) from a close path (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0880, 1.0882, 1.0879, 1.0881, 1.0883, 1.0880,          # quiet before the release
          1.0866,                                                  # 6:30 PM news candle: spikes both ways
          1.0874, 1.0870, 1.0876, 1.0868, 1.0864,                  # settling
          1.0853, 1.0849, 1.0855,                                  # break of the news-candle low, retest
          1.0848, 1.0842, 1.0845, 1.0838, 1.0834, 1.0838, 1.0832, 1.0835, 1.0830]
rows = from_closes(CLOSES, 1.0878, override={0: dict(h=1.0884), 4: dict(h=1.0886), 6: dict(h=1.0912, l=1.0858),
                                             7: dict(h=1.0884, l=1.0862), 13: dict(h=1.0854), 14: dict(h=1.0860),
                                             23: dict(l=1.0828)})
write_rows(DATA / "eurusd_5m_news.csv", rows, "Synthetic EUR/USD 5m candles for the Price Action News Impact lesson")
print(len(rows), "candles")
