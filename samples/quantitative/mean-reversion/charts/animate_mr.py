"""Explainer video: a z-score rule on a mean-reverting series and on a random walk. Reuses mr_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import mr_chart as d

animkit.run(
    "mr-explainer", d.build, ("bands", "trades", "result"),
    "<b>Mean reversion</b> — fade the stretch, if the series snaps back",
    [("A mean-reverting series: it keeps returning to its average", 120, [], 0.3),
     ("The 40-bar mean and the ±2 standard-deviation bands: z-score beyond ±2 means stretched", 120, ["bands"], 1),
     ("Through the whole series, the rule enters at the bands and exits at the mean", d.N, ["trades"], 0.15),
     ("11 trades, 11 winners, +34 points — on a series built to revert", None, []),
     ("The same rule on a random walk: 5 of 7 trades win, but one loss of 27 points leaves it at -20", None, ["result"])],
    "A z-score is only a distance; whether it reverts is a property of the market that you must test",
    OUT)
