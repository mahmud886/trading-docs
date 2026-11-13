"""Make the shared chart kit and the SMC shared helpers importable, and name this lesson's folders."""

import sys
from pathlib import Path

LESSON = Path(__file__).resolve().parents[1]
DATA = LESSON / "data"
OUT = LESSON / "output"
sys.path.insert(0, str(LESSON.parents[1] / "smc-charts"))
sys.path.insert(0, str(LESSON.parent / "_shared"))
