"""Explainer video: the Kelly growth curve, then four stake sizes over the same bets. Reuses kelly_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import kelly_chart as d

animkit.run(
    "kelly-explainer", d.build, ("sim",),
    "<b>Kelly criterion</b> — the stake that maximises long-run growth",
    [("Expected growth per bet rises with the stake, peaks at the Kelly fraction (10% here), then falls", None, []),
     ("Half Kelly keeps about 75% of the growth; double Kelly has no growth at all", None, []),
     ("The same 400 bets at four stake sizes: bigger stakes mean deeper drawdowns — 34%, 57%, 83% and 99%", None, ["sim"])],
    "Real win rates are estimates — most traders bet a fraction of Kelly to survive the errors",
    OUT)
