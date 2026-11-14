"""Generate data/audusd_15m_weekly_open.csv: Friday's last hour and Monday from 3:00 AM BD (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

FRIDAY = [0.6645, 0.6648, 0.6651, 0.6649, 0.6652, 0.6650]
MONDAY = [0.6676, 0.6669, 0.6664, 0.6667, 0.6661, 0.6658, 0.6662, 0.6657, 0.6660, 0.6663, 0.6659, 0.6661,
          0.6658, 0.6662, 0.6660, 0.6664]
fri = from_closes(FRIDAY, 0.6643)
mon = from_closes(MONDAY, 0.6672, override={0: dict(h=0.6680, l=0.6670), 7: dict(l=0.6655)})
rows = fri + mon
write_rows(DATA / "audusd_15m_weekly_open.csv", rows,
           "Synthetic AUD/USD 15m candles (Friday close, Monday open) for the Sydney Session lesson")
print(len(rows), "candles")
