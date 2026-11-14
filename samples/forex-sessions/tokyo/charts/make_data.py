"""Generate data/usdjpy_15m_tokyo.csv (6:00 AM – 12:45 PM BD) from a close path (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [157.32, 157.35, 157.33, 157.42,                      # Tokyo open; 9:55 JST fix in the 6:45 candle
          157.38, 157.31, 157.27, 157.24, 157.29, 157.36, 157.44, 157.39,   # range forms
          157.33, 157.28, 157.25, 157.27,                      # back to the range low; rejection
          157.31, 157.35, 157.33, 157.38, 157.36, 157.41, 157.39, 157.37, 157.40, 157.38, 157.36, 157.40]
rows = from_closes(CLOSES, 157.30, up=(0.03, 0.01), down=(0.01, 0.03), dp=2,
                   override={3: dict(h=157.50), 7: dict(l=157.20), 10: dict(h=157.48), 15: dict(l=157.21, h=157.28)})
write_rows(DATA / "usdjpy_15m_tokyo.csv", rows, "Synthetic USD/JPY 15m candles for the Tokyo Session lesson", dp=2)
print(len(rows), "candles")
