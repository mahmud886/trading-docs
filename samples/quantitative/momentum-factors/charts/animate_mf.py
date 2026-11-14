"""Explainer video: two momentum rules against buy-and-hold on eight assets. Reuses mf_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import mf_chart as d

animkit.run(
    "mf-explainer", d.build, ("labels", "bars"),
    "<b>Momentum factors</b> — two ways to rank what has been rising",
    [("Every 21 days: rank eight assets by their last 126 days; cross-sectional goes long the top 3 and short the bottom 3", 150, [], 0.3),
     ("For almost a year both momentum rules lose ground — drifts need time to build", 330, [], 0.2),
     ("Then trends take hold and both rules climb; cross-sectional reaches +38%, time-series +23%", 500, [], 0.2),
     ("Part of the gain is given back when trends turn; the sample ends at +17% and +14%", d.NX, ["labels"], 0.2),
     ("Against equal-weight buy-and-hold at -10% — with drawdowns of 23% and 10% on the way", None, ["bars"])],
    "Momentum can pay for long periods and still go through long stretches of loss — size for the drawdown",
    OUT)
