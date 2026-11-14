"""Explainer video: VWAP builds through the session and a pullback is bought. Reuses vwap_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import vwap_chart as d

animkit.run(
    "vwap-explainer", d.build, ("vwap", "labels", "entry", "position"),
    "<b>VWAP</b> — the average price, weighted by volume",
    [("The session opens with a drive on heavy volume — price stretches above VWAP, which is still being built", 12, ["vwap", "labels"], 5),
     ("A quiet pullback on light volume brings price back toward VWAP", d.I_ENTRY, [], 4),
     (f"A candle touches VWAP and closes back above it → buy {d.ENTRY:.4f}, stop below the band", d.I_ENTRY + 1, ["entry", "position"], 5),
     ("Price continues above VWAP. The target is a plan, not a prediction", d.N, [], 4)],
    "VWAP is a reference: it works best with a trend or a reason, and it resets every session",
    OUT)
