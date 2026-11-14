"""Generate data/eurusd_5m_judas.csv (12:30 – 3:00 PM BD, US/UK summer) from a close path (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0860, 1.0862, 1.0859, 1.0861, 1.0860, 1.0862,      # 12:30 – 12:55, inside the Asian range
          1.0855, 1.0850, 1.0853, 1.0847, 1.0849,              # 1:00 PM London: the drop through the Asian low
          1.0855, 1.0853, 1.0858,                              # back inside, CHOCH
          1.0862, 1.0859,                                      # retest
          1.0862, 1.0866, 1.0864, 1.0870, 1.0875, 1.0873, 1.0879, 1.0884, 1.0881, 1.0886, 1.0889, 1.0887,
          1.0890, 1.0888, 1.0891]
rows = from_closes(CLOSES, 1.0858, up=(0.0002, 0.0001), down=(0.0001, 0.0002),
                   override={7: dict(h=1.0855), 8: dict(h=1.0856), 10: dict(l=1.0843), 13: dict(h=1.0860), 14: dict(l=1.0858),
                             15: dict(l=1.0857)})
write_rows(DATA / "eurusd_5m_judas.csv", rows, "Synthetic EUR/USD 5m candles for the London Open Manipulation lesson")
print(len(rows), "candles")
