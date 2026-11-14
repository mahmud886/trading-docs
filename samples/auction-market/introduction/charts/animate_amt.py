"""Explainer video: balance, imbalance, new balance. Reuses amt_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import amt_chart as d
import animkit

animkit.run(
    "auction-explainer", d.build, ("b1", "drive", "b2", "profile"),
    "<b>Auction Market Theory</b> — price searches until both sides trade",
    [("Balance: price rotates in a narrow range and volume builds at the same prices", 20, ["b1"], 3),
     ("Imbalance: one side dominates and price drives up, finding no opposing interest on the way", 27, ["drive"], 6),
     ("New balance: price finds a level where buyers and sellers trade again", d.N, ["b2"], 3),
     ("The profile turned sideways: two busy areas, and a thin zone where price moved quickly", None, ["profile"])],
    "Balance, imbalance, new balance: a way to describe what price is doing — not a prediction",
    OUT)
