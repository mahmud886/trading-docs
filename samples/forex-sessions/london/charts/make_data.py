"""Generate data/gbpusd_15m_london.csv (12:00 PM – 5:45 PM BD, US/UK summer) from a close path (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.2733, 1.2736, 1.2732, 1.2734,                      # before London
          1.2741, 1.2729, 1.2738,                              # opening range 1:00 – 1:30 PM
          1.2754, 1.2760, 1.2752, 1.2750,                      # breakout, retest
          1.2758, 1.2764, 1.2770, 1.2763, 1.2759, 1.2766, 1.2771, 1.2765, 1.2768, 1.2762, 1.2767, 1.2771, 1.2769]
rows = from_closes(CLOSES, 1.2731, override={4: dict(h=1.2745, l=1.2730), 5: dict(l=1.2725), 6: dict(h=1.2742),
                                             9: dict(l=1.2749), 10: dict(l=1.2746), 17: dict(h=1.2775)})
write_rows(DATA / "gbpusd_15m_london.csv", rows, "Synthetic GBP/USD 15m candles for the London Session lesson")
print(len(rows), "candles")
