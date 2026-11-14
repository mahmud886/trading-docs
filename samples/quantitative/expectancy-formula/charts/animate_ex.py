"""Explainer video: expectancy lines, break-even win rates, and a 40-trade sample. Reuses ex_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import ex_chart as d

animkit.run(
    "ex-explainer", d.build, ("be", "sample", "ci"),
    "<b>Expectancy</b> — what an average trade earns, in units of risk",
    [("Each line is a reward-to-risk ratio: expectancy rises with the win rate", None, []),
     ("It crosses zero at the break-even win rate: 50% at 1:1, 40% at 1:1.5, 33.3% at 1:2, 25% at 1:3", None, ["be"]),
     ("A 40-trade sample: 42% winners at +2R, losers at about -0.95R", None, ["sample"]),
     ("Average +0.38R — but the approximate 95% interval, -0.07R to +0.82R, still includes zero", None, ["ci"])],
    "Compute expectancy after costs, and report how uncertain it is for your sample size",
    OUT)
