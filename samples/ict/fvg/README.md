# ICT Fair Value Gap — Deep Lesson (EN + BN) with Charts and an Animated Example

This is a proposed rewrite of `content/{en,bn}/ict/fvg.mdx`. **The live lessons have not been changed.** It is lesson 5 in the ICT series, after Liquidity, Liquidity Sweep, Turtle Soup and MSS.

| File | Purpose |
|------|---------|
| `fvg.en.mdx` / `fvg.bn.mdx` | The lesson in English and Bangla |
| `charts/` | Plotly sources, built on the shared kit in `samples/smc-charts/chartkit.py` |
| `data/` | Synthetic candles built around the levels in the original lesson's three examples |
| `output/` | Light and dark PNGs, themed HTML previews, and the MP4 explainer |

## Charts

| Output | Shows |
|--------|-------|
| `fvg-reactions-*` | The same bullish gap with three outcomes: respected at the CE, weakened (body past the CE), and invalid (body past the far edge) |
| `eurusd-bullish-fvg-*` | BISI 1.0885–1.0895 formed at 2:30 PM BD → first CE touch → buy 1.0890 / SL 1.0882 / TP 1.0950 (1 : 7.5) |
| `ict-fvg-explainer-*.mp4` | 15-second animation of the EUR/USD sequence |
| `gold-bearish-fvg-*` | Rally to 2,045, MSS below 2,037.5, SIBI 2,038–2,042 → sell the CE 2,040 at 8:00 PM BD / SL 2,043 / TP 2,015 (1 : 8.3) |
| `nas100-inversion-fvg-*` | Bearish FVG 17,820–17,850, closed through by a candle body, then retested from above and held → buy 17,850. No stop or target is drawn, because the lesson gives none |

Each script checks its candles against the lesson's levels before drawing. The checks cover:

- the gap edges (C1/C3);
- C2 displacement at least 2× the average body;
- the CE equal to the entry;
- the first-touch fill and its time;
- the close that confirms respect or inversion;
- the stop beyond the far edge;
- R:R computed rather than typed in.

```bash
cd samples/ict/fvg/charts
python build_all.py    # PNG + HTML
python animate_fvg.py  # MP4 (~1.5 min); needs ffmpeg
```

## What changed compared with the original lesson

**Corrected or clarified**

- **The CE rule was contradictory.** The original said both "violated" and "weakened". The rewrite uses one rule: a move through the CE weakens the gap; a body close beyond the far edge invalidates it.
- **"IFVG" was ambiguous.** The original used it for the *implied* FVG, while the academy uses it for *inversion*. Implied is now written in full, and IFVG means inversion only.
- **Gold units.** "30 pips / 250 pips" is now $3 / $25. The R:R is unchanged at 1 : 8.3.
- **Example 3.** The original gives no stop or target, so none were added. Only the inversion invalidation is stated.

**Removed or softened claims**

- The "older than 20–40 candles" rule, which was inconsistent and unsupported.
- "Highest probability", "very high probability" and "strong institutional interest".
- The quote attributed to ICT.

**New sections**

- An anatomy table with C1, C2 and C3 for both directions.
- BISI and SIBI explained.
- The three-reaction chart.
- Six quality filters, each with its reason.
- Entry and stop options, with a worked R:R comparison: the gold example with a swing stop drops to 1 : 4.2.
- Practice exercises and an FAQ: does price always fill a gap, FVG vs OB, CE vs the whole gap.

**Unchanged:** all levels, times and R:R values from Examples 1 and 2.

**Bangla version:** it follows the existing BN ICT style, with Bangla sentences and English technical terms.

## Embedding notes

- Assets go to `public/images/ict/fvg/` and `public/videos/ict/`.
- Check the academy link (`/en/academy/ict-smc-course/20-ifvg`) in the site build. No other page links to a nested academy path yet.
- The same `<video>` and theme notes as the earlier ICT lessons apply.
