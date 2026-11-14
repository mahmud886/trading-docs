"""Explainer video: a resting ask wall is traded into and consumed. Reuses dom_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import dom_chart as d

animkit.run(
    "dom-explainer", d.build, ("s1", "s2", "s3"),
    "<b>The order book</b> — resting limit orders at each price",
    [("10:00:00 — bids (green) rest below the market, asks (red) above. A 450-contract wall sits at 1.0955", None, ["s1"]),
     ("10:00:20 — buyers lift the offers and trade into the wall: 320 contracts executed, 130 left, and price stalls", None, ["s2"]),
     ("10:00:35 — the wall is consumed, the next asks are thin, and price moves through", None, ["s3"])],
    "A wall is a hypothesis. Watch what happens when it is traded into — and whether it's still there",
    OUT)
