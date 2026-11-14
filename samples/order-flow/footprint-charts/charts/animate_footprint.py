"""Explainer video: four footprint candles. Reuses footprint_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import footprint_chart as d

animkit.run(
    "footprint-explainer", d.build, ("A", "B", "C", "D"),
    "<b>Footprint chart</b> — each price shows the bid volume × the ask volume",
    [("A: a balanced candle — volume is spread across the prices, with no stacked imbalances", None, ["A"]),
     ("B: buyers lift the offers — at six prices in a row, the ask volume is at least 3× the bid volume one price lower", None, ["B"]),
     ("C: the heaviest cell is at the high — 880 bought — yet the candle closes lower. Heavy effort, no result: absorption", None, ["C"]),
     ("D: sellers hit the bids — six stacked sell imbalances, delta −1,330, and the candle closes at its low", None, ["D"])],
    "Imbalances and POCs are clues about how a candle was built, not signals by themselves",
    OUT)
