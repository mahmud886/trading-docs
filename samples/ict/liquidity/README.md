# ICT Liquidity — Deep Lesson (EN + BN) with Charts and an Animated Example

This is a proposed rewrite of `content/en/ict/liquidity.mdx` and `content/bn/ict/liquidity.mdx`. **The live lessons have not been changed.**

| File | Purpose |
|------|---------|
| `liquidity.en.mdx` / `liquidity.bn.mdx` | The lesson in English and Bangla. Same frontmatter keys as the originals |
| `charts/` | Plotly sources. They reuse the shared design kit in `samples/smc-charts/chartkit.py` |
| `data/` | Synthetic candles built around the levels in the original lessons |
| `output/` | Light and dark PNGs (3200 × 1800), themed HTML previews, and the MP4 explainer |

## Charts

| Output | Shows |
|--------|-------|
| `liquidity-map-eurusd-*` | Where stops rest: equal highs (BSL), equal lows (SSL), and the Asian range |
| `liquidity-cycle-eurusd-*` | The four stages: Build → Sweep → Shift → Deliver |
| `liquidity-cycle-explainer-*.mp4` | 17-second animation of the same cycle, with step captions |
| `gold-pdh-sweep-*` | The lesson's Gold trade: PDH sweep → 5m MSS → OB retest → sell 2,048 / SL 2,053 / TP 2,020 (1 : 5.6) |
| `sweep-vs-run-*` | The key decision: a wick that closes back inside (sweep) vs a close beyond that holds (run) |

Every script checks its candles against the lesson's levels before drawing, and stops with an assertion error if anything is inconsistent. The checks include:

- equal highs and lows within 2 pips;
- the sweep closing back inside;
- the displacement being at least 2× the average body;
- the MSS close;
- the FVG bounds;
- the first-retest fill;
- R:R computed rather than typed in.

Rebuild everything with:

```bash
cd samples/ict/liquidity/charts
python build_all.py          # PNG + HTML
python animate_liquidity.py  # MP4 (~2 min); needs ffmpeg
```

## What changed compared with the original lesson

**Corrected**

- The original says BSL "provides sell-side counterparty". The rewrite explains the mechanics plainly: triggered buy stops become market buy orders, which large *sellers* fill against. The same explanation is given for SSL.

**Removed**

- Unsupported claims: "very high reliability", "always seeking liquidity", "5–15 pips beyond".
- The quotes attributed to ICT. They could not be verified.

**New sections**

- Key terms.
- Clean vs jagged equal highs.
- External vs internal range liquidity.
- A **draw-on-liquidity** decision table.
- The liquidity cycle as four named stages, mapped to the original five steps.
- **Sweep vs run**, which replaces "sweep vs grab". The original "grab" is kept and described as a slower sweep.
- Inducement.
- A trade checklist.
- A full worked example, with observations, plan, invalidation and alternative outcomes.
- Risk management, practice exercises and an FAQ.

**Unchanged:** every level and R:R from the original examples:

| Example | Levels | R:R |
|---------|--------|-----|
| EUR/USD | 1.0850 / 1.0845 / 1.0950 | — |
| Gold | 2,050 / 2,052 / 2,048 / 2,053 / 2,020 | 1 : 5.6 |

**Bangla version:** it follows the existing BN ICT style, with Bangla sentences and English technical terms.

## Embedding notes (for when this is approved)

- Images are referenced at `/images/ict/liquidity/*-dark.png`, and the video at `/videos/ict/liquidity-cycle-explainer-dark.mp4`. Both need copying into `public/`.
- The `<video>` tag in the MDX is plain HTML. Confirm it renders through `next-mdx-remote` in the site build. I could not run the site build here because `node_modules` is not installed.
- Showing light images and video in light mode needs the small theme CSS described in `samples/smc-charts/README.md`.
