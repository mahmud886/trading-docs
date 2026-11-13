# ICT Turtle Soup — Deep Lesson (EN + BN) with Charts and an Animated Example

This is a proposed rewrite of `content/{en,bn}/ict/turtle-soup.mdx`. **The live lessons have not been changed.** It is lesson 3 in the ICT series, after Liquidity and Liquidity Sweep.

| File | Purpose |
|------|---------|
| `turtle-soup.en.mdx` / `turtle-soup.bn.mdx` | The lesson in English and Bangla |
| `charts/` | Plotly sources, built on the shared kit in `samples/smc-charts/chartkit.py` |
| `data/` | Synthetic candles built around the levels in the original lesson's two examples |
| `output/` | Light and dark PNGs, themed HTML previews, and the MP4 explainer |

## Charts

| Output | Shows |
|--------|-------|
| `eurusd-bearish-turtle-soup-*` | PWH 1.0950: breakout to 1.0958 at 6:30 PM BD, which closes above. The next candle closes back below at 1.0945 → sell 1.0945 / SL 1.0960 / TP 1.0880 (1 : 4.3) |
| `turtle-soup-explainer-*.mp4` | 14-second animation of the same failed breakout |
| `gold-bullish-turtle-soup-*` | Equal lows 2,020: breakdown to 2,015 at 1:00 PM BD → reclaim + 5m MSS above 2,023.8 → buy 2,022 / SL 2,013 / TP 2,055 (1 : 3.7) |

Each script checks its candles against the lesson's levels before drawing. The checks cover:

- level untouched before the breakout;
- breakout extreme and close;
- failure within one candle;
- reversal body at least 2× the average;
- reclaim and MSS (gold);
- stop beyond the extreme;
- R:R computed rather than typed in.

```bash
cd samples/ict/turtle-soup/charts
python build_all.py            # PNG + HTML
python animate_turtle_soup.py  # MP4 (~1.5 min); needs ffmpeg
```

## What changed compared with the original lesson

**Corrected**

- **Origin of the name.** The original says ICT named the strategy. The pattern and its name come from Linda Bradford Raschke and Laurence Connors, *Street Smarts* (1995); ICT adapted it. The original 20-day-extreme rule is described briefly.

**New sections**

- A table of who is trapped and how their exits fuel the reversal.
- **Turtle Soup vs the sweep + MSS model.** The difference is entry timing. This makes clear how the lesson relates to Liquidity Sweep.
- Two named entry variants:
  - **A**, close back inside — Example 1.
  - **B**, reclaim + MSS — Example 2.
- When *not* to trade it, risk management, practice exercises, and an FAQ that includes the Judas Swing.

**Unchanged**

- All levels, times and R:R values from both examples.
- The six identification rules, rephrased with the reason for each.

**Softened claims**

- "Highest probability" and "low probability" are replaced with reasons, not probabilities.

**Bangla version:** it follows the existing BN ICT style, with Bangla sentences and English technical terms.

## Embedding notes

- Assets go to `public/images/ict/turtle-soup/` and `public/videos/ict/`.
- The same `<video>` and theme notes as the earlier ICT lessons apply.
