# ICT Liquidity Sweep — Deep Lesson (EN + BN) with Charts and an Animated Example

This is a proposed rewrite of `content/{en,bn}/ict/liquidity-sweep.mdx`. **The live lessons have not been changed.** It is the second lesson in the ICT series, after `samples/ict/liquidity/`.

| File | Purpose |
|------|---------|
| `liquidity-sweep.en.mdx` / `liquidity-sweep.bn.mdx` | The lesson in English and Bangla |
| `charts/` | Plotly sources. They use the shared kit in `samples/smc-charts/chartkit.py` |
| `data/` | Synthetic candles built around the levels in the original lesson's two examples |
| `output/` | Light and dark PNGs, themed HTML previews, and the MP4 explainer |

## Charts

| Output | Shows |
|--------|-------|
| `eurusd-pdh-sweep-*` | Anatomy of a sweep: PDH 1.0920 raid to 1.0928 → close back inside + 5m MSS → FVG 1.0915–1.0920 CE retest at 5:45 PM BD → sell 1.0918 / SL 1.0930 / TP 1.0870 (1 : 4.0) |
| `sweep-anatomy-explainer-*.mp4` | 15-second animation of the same sequence |
| `gold-eql-sweep-*` | Three equal lows at 2,025 swept to 2,022 in the London kill zone → 15m MSS above 2,031 → OB retest at 1:30 PM BD → buy 2,027 / SL 2,020 / TP 2,060 (1 : 4.7) |

The lesson also reuses `sweep-vs-run` from the Liquidity lesson.

Each script checks its candles against the lesson's levels before drawing. The checks cover:

- level untouched before the raid;
- the raid or sweep extreme;
- the higher or lower high;
- a displacement at least 2× the average body that closes through structure;
- FVG and OB bounds;
- the entry at the CE or OB edge;
- the first-retest fill time;
- the stop beyond the extreme;
- R:R computed rather than typed in.

```bash
cd samples/ict/liquidity-sweep/charts
python build_all.py      # PNG + HTML
python animate_sweep.py  # MP4 (~1.5 min); needs ffmpeg
```

## What changed compared with the original lesson

**New sections**

- The four-part anatomy: raid → close back inside → shift → enter.
- An explicit **confirmation-timeframe rule**. The EUR/USD chart shows why: two 5m closes above PDH form one wick on 15m.
- Sweep types, with what to mark and when.
- An 8-point checklist and invalidation rules.
- **Three entry models**, with trade-offs.
- Stop-buffer and target logic.
- Kill-zone timing in BD, taken from the site's Kill Zones lesson.
- A six-step process, practice exercises and an FAQ, including a link to Turtle Soup, which is the next lesson.

**Example data**

- All levels, times and R:R values from the original two examples are unchanged.
- "5M bearish MSS at 1.0918" is read as a close through the 1.0918 higher low.

**Removed claims**

- "Very high probability of reversal".
- "Usually trades 5–15 pips beyond".
- "Far more reliable", in reference to kill zones.
- The quote attributed to ICT.

**Bangla version:** it follows the existing BN ICT style, with Bangla sentences and English technical terms.

## Embedding notes

- Assets go to `public/images/ict/liquidity-sweep/` and `public/videos/ict/`.
- `sweep-vs-run-dark.png` lives under `public/images/ict/liquidity/`.
- The same `<video>` and theme notes as the Liquidity lesson apply.
