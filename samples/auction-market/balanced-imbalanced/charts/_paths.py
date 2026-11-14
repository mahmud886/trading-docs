"""Make the shared chart kit and the shared candle helpers importable, and name this lesson's folders."""

import sys
from pathlib import Path

LESSON = Path(__file__).resolve().parents[1]
DATA = LESSON / "data"
OUT = LESSON / "output"
sys.path.insert(0, str(LESSON.parents[1] / "smc-charts"))
sys.path.insert(0, str(LESSON.parents[1] / "smc" / "_shared"))
sys.path.insert(0, str(LESSON.parents[1] / "auction-market" / "_shared"))
