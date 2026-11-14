"""Explainer video: resampling a backtest 4,000 times. Reuses mc_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import mc_chart as d

animkit.run(
    "mc-explainer", d.build, ("median", "hist", "pcts"),
    "<b>Monte Carlo</b> — the same trades in 4,000 different orders",
    [("A 100-trade backtest: 45 winners at +1.5R, 55 losers at -1R — expectancy +0.125R", 100, [], 0.3),
     ("Resample the trades with replacement: each path is a plausible sequence from the same edge", 100, ["median"], 1),
     ("After 100 trades the paths fan out from about -8R to +32R, with a median of +12R", None, ["hist"]),
     ("12% of paths end below zero, and the 95th-percentile drawdown is 18R — more than twice the 7.5R seen in the backtest", None, ["pcts"])],
    "A single backtest shows one path — Monte Carlo shows how much worse the same edge can look",
    OUT)
