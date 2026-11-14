"""Explainer video: a TPO chart building letter by letter. Reuses tpo_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import tpo_chart as d

animkit.run(
    "tpo-explainer", d.build, ("poc", "va", "shape"),
    "<b>Market Profile</b> — time at price, one letter per half hour",
    [("Period A trades 1.0858–1.0866 and prints an A at every price it touched; B extends the range up to 1.0870", 2, [], 12),
     ("Each new period adds its letter at the prices it covers, so letters pile up where price spends time", 8, [], 6),
     ("By period M the day is complete: the profile is a distribution of time over price", d.N, [], 5),
     ("The point of control is the row with the most letters: 1.0860, hit by 11 of the 13 periods", None, ["poc"]),
     ("The value area holds about 70% of all letters, built outward from the POC: 1.0856 to 1.0862", None, ["va"]),
     ("Thin rows at the extremes — one letter each — mark prices where price spent little time", None, ["shape"])],
    "A profile describes where time was spent; treat its levels as references, not walls",
    OUT)
