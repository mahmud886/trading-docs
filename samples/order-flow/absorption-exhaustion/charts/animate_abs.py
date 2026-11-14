"""Explainer video: absorption at support, then exhaustion at the high. Reuses abs_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import abs_chart as d
import animkit

animkit.run(
    "absorption-explainer", d.build, ("support", "abs", "rally", "exh"),
    "<b>Absorption and exhaustion</b> — when effort and result disagree",
    [("A decline into support at 1.0850, with volume and delta rising as sellers press", 12, ["support"], 3),
     ("Absorption: three bars of heavy volume and strongly negative delta — yet the low holds and price closes higher", 15, ["abs"], 5),
     ("Price rallies, but each bar has a little less delta and volume than the one before", 30, ["rally"], 3),
     ("Exhaustion: a new high on very low volume and almost no delta — the move has run out of fuel", 31, ["exh"], 5),
     ("Price reverses and falls on strongly negative delta", d.N, [], 4)],
    "Both are clues: wait for price to confirm, and keep a stop beyond the extreme",
    OUT)
