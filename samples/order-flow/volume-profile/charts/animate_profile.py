"""Explainer video: building a volume profile from a session. Reuses profile_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import profile_chart as d

animkit.run(
    "volume-profile-explainer", d.build, ("profile", "va", "nodes"),
    "<b>Volume profile</b> — volume by price, not by time",
    [("The session starts in a balance area near 1.0855: price spends time, and volume, around the same levels", 20, [], 3),
     ("A fast move: price leaves in six bars with little volume at each price", 26, [], 6),
     ("A second balance area near 1.0874 — a new area where buyers and sellers agree", d.N, [], 3),
     ("The profile: each candle's volume spread over its prices, turned sideways", None, ["profile"]),
     ("The point of control is the price with the most volume, 1.0874; the value area holds 70% of the volume", None, ["va"]),
     ("Two high-volume nodes and a low-volume node between them — price moved through that gap quickly", None, ["nodes"])],
    "Profile levels are references: test them with the tape and your plan, not as walls",
    OUT)
