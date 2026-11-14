"""Explainer video: from a candle to the volume inside it. Reuses inside_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import inside_chart as d

animkit.run(
    "inside-one-candle-explainer", d.build, ("candle", "ladder", "poc", "delta"),
    "<b>Order flow</b> — look inside the candle",
    [("A 5-minute candle opens at 1.0852 and closes at 1.0857. The colour says only where price went", None, ["candle"]),
     ("Inside it, each price level traded two kinds of volume: sellers hitting the bid (red) and buyers lifting the ask (green)", None, ["ladder"]),
     ("The point of control: the price with the most volume, 1.0854 with 800 contracts", None, ["poc"]),
     ("Delta: 2,500 bought minus 1,650 sold = +850. Net aggressive buying matched the rising candle", None, ["delta"])],
    "Order flow shows how the volume got there — it confirms context, it doesn't replace it",
    OUT)
