"""Explainer video: a positive-expectancy strategy over many trades. Reuses qi_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import qi_chart as d

animkit.run(
    "qi-explainer", d.build, ("mean", "bars"),
    "<b>Quantitative trading</b> — an edge is a number, and it needs a sample",
    [("30 simulated paths of the same strategy: 45% winners at +1.5R, 55% losers at -1R", 40, [], 0.35),
     ("Early on the paths scatter in both directions — several spend time well below zero", d.N_TRADES, [], 0.2),
     ("The expected path rises 0.125R per trade, but each real path wanders around it", None, ["mean"]),
     ("The probability of being ahead rises with the number of trades: 50% after 10, 82% after 100, 99% after 500", None, ["bars"])],
    "A positive expectancy shows up over many trades — judge the system, not the last few results",
    OUT)
