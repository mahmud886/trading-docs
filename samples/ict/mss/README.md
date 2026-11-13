# ICT Market Structure Shift — Deep Lesson (EN + BN) with Charts and an Animated Example

This is a proposed rewrite of `content/{en,bn}/ict/mss.mdx`. **The live lessons have not been changed.** It is lesson 4 in the ICT series, after Liquidity, Liquidity Sweep and Turtle Soup.

| File | Purpose |
|------|---------|
| `mss.en.mdx` / `mss.bn.mdx` | The lesson in English and Bangla |
| `charts/` | Plotly sources, built on the shared kit in `samples/smc-charts/chartkit.py` |
| `data/` | Synthetic candles built around the levels in the original lesson's two examples |
| `output/` | Light and dark PNGs, themed HTML previews, and the MP4 explainer |

## Charts

| Output | Shows |
|--------|-------|
| `bos-weak-break-mss-*` | The same uptrend with three outcomes: a BOS (continuation), a weak break with no displacement (the trend resumes), and an MSS (sweep → displacement → FVG) |
| `eurusd-bullish-mss-*` | 15m downtrend, LL 1.0850 swept to 1.0845, displacement through the 1.0875 LH, FVG 1.0868–1.0878 → buy 1.0873 / SL 1.0842 / TP 1.0930 (**1 : 1.8**) |
| `mss-explainer-*.mp4` | 17-second animation of the EUR/USD sequence |
| `nas100-bearish-mss-*` | 5m uptrend, HH 17,940 swept to 17,950, displacement through the 17,880 HL, FVG 17,870–17,890 → sell 17,880 / SL 17,955 / TP 17,750 (1 : 1.7) |

Each script checks its candles against the lesson's levels before drawing. The checks cover:

- the swing structure;
- the swing that matters;
- the sweep beyond the last extreme with a close back inside;
- a displacement at least 2× the average body that closes through the swing;
- FVG bounds and the CE entry;
- the first-touch fill;
- the stop beyond the sweep;
- R:R computed rather than typed in.

```bash
cd samples/ict/mss/charts
python build_all.py     # PNG + HTML
python animate_mss.py   # MP4 (~1.5 min); needs ffmpeg
```

## What changed compared with the original lesson

**Corrected**

- **EUR/USD R:R.** The original states 1 : 5.5. With its own levels (buy 1.0873, stop 1.0842, target 1.0930) the R:R is 57 ÷ 31 = **1 : 1.8**. The lesson now explains why MSS entries often carry a wide stop. The levels themselves are unchanged.

**New sections**

- How to read swing structure.
- **The swing that matters:** the LH or HL that started the leg to the swept extreme, as distinct from internal swings.
- An explicit displacement test, using the same 2× rule as the Order Blocks guide.
- The three ingredients of a valid MSS.
- The concept chart showing why a weak CHOCH is not an MSS.
- A note reconciling the terms CHOCH and MSS.
- A timeframe table with an HTF-bias column.
- Invalidation before and after entry.
- Practice exercises, including counting how many MSS setups pass a 1 : 2 minimum.
- An FAQ.

**Softened claims**

- "Permission to trade", "institutional confirmation" and "low probability" are replaced with what the evidence actually shows.

**Bangla version:** it follows the existing BN ICT style, with Bangla sentences and English technical terms.

## Embedding notes

- Assets go to `public/images/ict/mss/` and `public/videos/ict/`.
- The same `<video>` and theme notes as the earlier ICT lessons apply.
