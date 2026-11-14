"""Explainer video: an excess high and a poor low on one TPO day. Reuses excess_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import excess_chart as d

animkit.run(
    "excess-explainer", d.build, ("excess", "poor", "va"),
    "<b>Excess and poor extremes</b> — a finished auction vs an unfinished one",
    [("Periods A and B: price trades 1.0858 – 1.0866, then B pushes up to 1.0872", 2, [], 10),
     ("Period B is rejected quickly: the rest of the day never returns to 1.0868 – 1.0872", 5, ["excess"], 6),
     ("The day settles around 1.0858; the point of control is 1.0858", 9, ["va"], 6),
     ("Later periods drift to the low and repeat letters at 1.0850 – 1.0852", d.N, ["poor"], 6)],
    "An excess is a clue that price was rejected; a poor extreme is a clue it may be revisited — neither is a promise",
    OUT)
