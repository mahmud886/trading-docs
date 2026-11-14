"""Explainer video: a single-print zone forms on day 1 and is tested on day 2. Reuses sp_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import sp_chart as d

animkit.run(
    "sp-explainer", d.build, ("titles", "zone", "zone2"),
    "<b>Single prints</b> — where only one period traded",
    [("Periods A to E build a balance area at 1.0850 – 1.0858", 5, ["titles"], 8),
     ("Period F moves 1.0858 to 1.0868 in one half hour — it prints a single letter at each price on the way", 6, [], 14),
     ("Those rows 1.0860 – 1.0866 have only one letter: single prints", 6, ["zone"], 1),
     ("Periods G to M build a second balance area, 1.0868 – 1.0874", d.N, [], 6),
     ("Day 2: price falls back into the zone and tests it, with a low of 1.0861", d.N + 6, ["zone2"], 8),
     ("The zone is not filled to 1.0859; price turns and rises back to 1.0874", d.N + d.N2, [], 8)],
    "A single-print zone is a reference: price can fill it, hold it, or ignore it",
    OUT)
