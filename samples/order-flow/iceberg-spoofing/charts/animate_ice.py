"""Explainer video: a pulled bid wall, then an iceberg that refills. Reuses ice_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import ice_chart as d
import animkit

animkit.run(
    "iceberg-explainer", d.build, ("spoof", "ice"),
    "<b>Iceberg orders and spoofing</b> — what the order book shows vs. what trades",
    [("Price drifts lower; the heatmap shows resting size at each price — bright means large", 8, [], 3),
     ("A large bid wall appears below price and rests for eight minutes", 16, ["spoof"], 3),
     ("As price nears the wall, it is cancelled — and price falls straight through", 22, [], 3),
     ("Now a small bid at 1.0852 keeps refilling while 640 contracts sell into it — the low holds", 32, ["ice"], 4),
     ("Price bounces, but the plan's target is still not reached", d.N, [], 4)],
    "The book shows intent only loosely: confirm with executed volume and price, and use a stop",
    OUT)
