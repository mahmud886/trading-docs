# ICT Optimal Trade Entry (OTE) — Deep Lesson (EN + BN) with Charts and an Animated Example

This is a proposed rewrite of `content/{en,bn}/ict/ote.mdx`. **The live lessons have not been changed.** It is lesson 7 in the ICT series, after Liquidity, Liquidity Sweep, Turtle Soup, MSS, FVG and Dealing Range.

| File | Purpose |
|------|---------|
| `ote.en.mdx` / `ote.bn.mdx` | The lesson in English and Bangla |
| `charts/` | Plotly sources, built on the shared kit in `samples/smc-charts/chartkit.py`. `fib.py` draws the Fibonacci ladder |
| `data/` | Synthetic candles built around the levels in the original lesson's two examples |
| `output/` | Light and dark PNGs, themed HTML previews, and the MP4 explainer |

## Charts

| Output | Shows |
|--------|-------|
| `ote-depth-*` | The same bullish leg with three pullbacks: too shallow (no entry), OTE 62–79 % (entry), and too deep (closes beyond 100 %, invalid) |
| `eurusd-bullish-ote-*` | Leg 1.0820 → 1.0880. OTE 1.0843–1.0833, 70.5 % at 1.0838. Retrace to 1.0836 into a bullish OB at 6:15 PM BD → buy 1.0836 / SL 1.0818 / TP 1.0920 (1 : 4.7) |
| `ote-explainer-*.mp4` | 16-second animation of the EUR/USD sequence |
| `gold-bearish-ote-*` | Leg 2,048 → 2,020. OTE 2,037–2,042, with the FVG 2,038–2,042 and its CE (2,040) on the 70.5 % level → sell 2,040 / SL 2,049 / TP 2,005 (1 : 3.9) |

Each script checks its data against the lesson before drawing. The checks cover:

- the leg extremes;
- every quoted Fibonacci level, recomputed from the leg and matched to the lesson;
- displacement and MSS;
- the OB or FVG inside the zone;
- the first-entry fill;
- the stop beyond 100 %;
- R:R computed rather than typed in.

```bash
cd samples/ict/ote/charts
python build_all.py    # PNG + HTML
python animate_ote.py  # MP4 (~1.5 min); needs ffmpeg
```

## What changed compared with the original lesson

**Corrected**

- **Contradictory invalidation.** The original says both "blows through 79 % → invalid" and "100 % → invalid". The rewrite separates them: beyond 79 % the zone has been missed; a close beyond 100 % makes the setup invalid.

**Removed or softened claims**

- "Where institutions add to their positions".
- "Risk is lowest and reward is highest".
- "Highest probability".

**New sections**

- How OTE relates to the dealing range: deep discount or premium of a single leg.
- A key-levels table, including a note on 62 vs 61.8 %.
- How to choose the right leg.
- The drawing direction and a single formula, with a worked calculation.
- The too-shallow / OTE / too-deep concept chart.
- Why OTE needs a PD array inside it.
- Stop and target options, including the optional −27 / −62 % extensions.
- Practice exercises and an FAQ.

**Unchanged:** all levels and R:R values from both examples. The gold example has no session in the original, so its chart times are placeholders and are labelled as such.

**Bangla version:** it follows the existing BN ICT style, with Bangla sentences and English technical terms.

## Embedding notes

- Assets go to `public/images/ict/ote/` and `public/videos/ict/`.
- The same `<video>` and theme notes as the earlier ICT lessons apply.
