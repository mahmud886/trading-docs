"""Explainer video: the curve flattens, inverts and steepens again. Reuses yc_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import yc_chart as d

animkit.run(
    "yc-explainer", d.build, ("labels", "inversion", "steepen", "real"),
    "<b>The yield curve</b> — slope and real yields",
    [("The 2-year and 10-year yields: the front end rises faster, so the gap between them narrows", 75, ["labels"], 0.6),
     ("Around day 76 the 2-year passes the 10-year: the curve is inverted", 165, ["inversion"], 0.5),
     ("Later the 2-year falls back faster than the 10-year, and the curve steepens from the front end", d.N, ["steepen"], 0.6),
     ("The 10-year real yield is the nominal yield minus breakeven inflation; here it rose by about a point", None, ["real"])],
    "The curve describes how markets price future rates — use it as context for currencies and equities, not as a timer",
    OUT)
