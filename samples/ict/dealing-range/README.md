# ICT Dealing Range — Deep Lesson (EN + BN) with Charts and an Animated Example

This is a proposed rewrite of `content/{en,bn}/ict/dealing-range.mdx`. **The live lessons have not been changed.** It is lesson 6 in the ICT series, after Liquidity, Liquidity Sweep, Turtle Soup, MSS and FVG. It is also the ICT home of premium and discount; there is no separate ICT premium/discount page.

| File | Purpose |
|------|---------|
| `dealing-range.en.mdx` / `dealing-range.bn.mdx` | The lesson in English and Bangla |
| `charts/` | Plotly sources, built on the shared kit in `samples/smc-charts/chartkit.py` |
| `data/` | Synthetic candles built around the levels in the original lesson's examples |
| `output/` | Light and dark PNGs, themed HTML previews, and the MP4 explainer |

## Charts

| Output | Shows |
|--------|-------|
| `eurusd-dealing-range-map-*` | Daily candles inside the weekly range 1.0750–1.0950: premium and discount shading, the 25/50/75 % levels, sell OTE 62–79 % and buy OTE 21–38 %, and price at 1.0780 (35 %, discount) |
| `eurusd-discount-buy-*` | Sweep of the 1.0770 lows to 1.0765 → MSS → FVG 1.0785–1.0795 → buy 1.0790 / SL 1.0760 / TP1 1.0850 (1 : 2) / TP2 1.0950 (1 : 5.3) |
| `dealing-range-explainer-*.mp4` | 18-second animation of the same trade, built from the range |
| `gold-premium-sell-*` | Sweep of the 2,070 highs to 2,072 → MSS → FVG 2,062–2,068 → sell 2,065 / SL 2,075 / TP1 2,040 (1 : 2.5) / TP2 2,000 (1 : 6.5) |
| `nas100-nested-ranges-*` | The weekly (17,500–18,200) and daily (17,750–18,000) ranges drawn to scale. Price at 17,780 sits at 40 % and 12 %; targets are in corrected order |

Each script checks its candles or levels against the lesson before drawing. The checks cover:

- the range extremes and equilibria;
- price in the correct half;
- the sweep, MSS displacement and FVG;
- the CE entry and first-touch fill;
- targets equal to EQ and the opposite extreme;
- the nested range sitting inside the macro range;
- the target ordering;
- R:R computed rather than typed in.

```bash
cd samples/ict/dealing-range/charts
python build_all.py              # PNG + HTML
python animate_dealing_range.py  # MP4 (~1.5 min); needs ffmpeg
```

## What changed compared with the original lesson

**Corrected**

- **NAS100 target order.** The original says "daily EQ (17,875) then weekly EQ (17,850+)". Rising from 17,780, price reaches 17,850 first, so the order is now T1 17,850, then T2 17,875.
- **Gold units.** "100 / 250 / 650 pips" is now $10 / $25 / $65. The ratios are unchanged.

**Removed or softened claims**

- That JP Morgan, Goldman Sachs and Citadel frame risk this way.
- The mapping of timeframes to particular institutions (central banks, hedge funds, HFT).
- "Banks accumulate / distribute here", "highest probability", "STRONG BUY / SELL" and "cardinal rule".

**New sections**

- A key-terms table.
- What makes a swing significant.
- A table of the levels inside the range, including the mirrored buy OTE (21–38 %).
- A worked percentage calculation.
- Why premium and discount matter, stated without the institutional claims.
- A trade table by zone.
- A nested-range table with an alignment rule.
- The range lifecycle with the body-close redraw rule.
- **When premium and discount mislead** (strong trends).
- Session timing, practice exercises and an FAQ.

**Unchanged:** every level, time and R:R from Examples 1 and 2.

**Bangla version:** it follows the existing BN ICT style, with Bangla sentences and English technical terms.

## Embedding notes

- Assets go to `public/images/ict/dealing-range/` and `public/videos/ict/`.
- The same `<video>` and theme notes as the earlier ICT lessons apply.
