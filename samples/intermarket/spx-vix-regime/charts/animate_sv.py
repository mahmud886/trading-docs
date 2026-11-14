"""Explainer video: volatility regimes. Reuses sv_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import sv_chart as d

animkit.run(
    "sv-explainer", d.build, ("levels", "bars", "corr"),
    "<b>SPX and VIX</b> — a volatility index sizes the typical move",
    [("A calm stretch: stocks drift up and the volatility index sits near 12", 80, [], 0.35),
     ("The index jumps above 20 as stocks fall and daily swings widen", 130, ["levels"], 0.35),
     ("Volatility settles into the mid-teens, then back down as stocks stabilise", d.N, ["corr"], 0.35),
     ("Bucketing days by the previous day's level: the higher the index, the larger the typical daily move", None, ["bars"])],
    "The volatility index describes size, not direction — use it to set stops and position size",
    OUT)
