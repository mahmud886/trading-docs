"""Explainer video: a risk-off episode across assets. Reuses rr_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import rr_chart as d

animkit.run(
    "rr-explainer", d.build, ("episode", "bars"),
    "<b>Risk-on / risk-off</b> — one mood, many markets",
    [("Calm: stocks drift up and the volatility index stays low", 68, [], 0.6),
     ("Days 70 to 99: stocks fall about 16% and the volatility index spikes above 30", 100, ["episode"], 0.5),
     ("Afterwards volatility settles and stocks stabilise", d.N, [], 0.5),
     ("In the episode AUD/USD, USD/JPY and USD/CHF all fell with stocks — AUD weakened, the yen and franc strengthened", None, ["bars"])],
    "Risk regimes are a way to group moves, not a forecast — and the safe havens do not always behave",
    OUT)
