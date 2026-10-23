# SMC Chart Set (v2) — OB, FVG, IFVG, Imbalance + explainer video

These are standalone samples for review. The documentation site does not use them yet.

## What's here

| Chart | Script | Data (synthetic) | Outputs in `output/` |
|-------|--------|------------------|----------------------|
| Bullish Order Block (EUR/USD 15m) | `bullish_order_block_eurusd.py` | `data/eurusd_15m_bullish_ob.csv` | `bullish-order-block-eurusd-{light,dark}.png`, `.html` |
| Bearish Order Block (NAS100 15m) | `bearish_order_block_nas100.py` | `data/nas100_15m_bearish_ob.csv` | `bearish-order-block-nas100-{light,dark}.png`, `.html` |
| Bullish FVG (EUR/USD 15m) | `fair_value_gap_eurusd.py` | `data/eurusd_15m_fvg.csv` | `bullish-fvg-eurusd-{light,dark}.png`, `.html` |
| Bearish IFVG (GBP/USD 1H) | `inverse_fvg_gbpusd.py` | `data/gbpusd_1h_ifvg.csv` | `bearish-ifvg-gbpusd-{light,dark}.png`, `.html` |
| Three types of imbalance | `imbalance_types.py` | inline shapes (arbitrary units) | `imbalance-types-{light,dark}.png`, `.html` |
| **Explainer video** (FVG, 15 s) | `animate_fvg.py` | reuses the FVG chart | `fvg-explainer-{light,dark}.mp4` |

Output formats:

- **PNGs** are 3200 × 1800 px (a 1600 × 900 layout at 2×).
- **HTML previews** are interactive. Each one follows the viewer's system light/dark setting and has a toggle button.
- **Videos** are 1920 × 1080, 30 fps, H.264, about 320 KB each.

Other files:

- `chartkit.py` — the shared design system: themes, drawing helpers, export.
- `analysis.md` — the written analysis for the charts.
- `build_all.py` — rebuilds every chart.

## Design

- **Themes match the site** (`app/globals.css`):
  - Light: background `#F6FAF8`, accent green `#00A85C`.
  - Dark: near-black `#050A08`, neon accent `#00FF9D`.
- **Candles are filled green and red.** The exact shades were tuned with a colour-vision-deficiency validator so the two stay distinguishable:

  | Theme | Green | Red | Separation |
  |-------|-------|-----|------------|
  | Light | `#22B35E` | `#C8283A` | ΔE 11.8 |
  | Dark | `#1FC774` | `#E5404F` | ΔE 10.1 |

  The dark-mode green is slightly brighter than the validator's dark lightness band. That is deliberate: it keeps the red/green separation and suits the site's neon look.
- **Zones are blue** (`#0E8FD0` light / `#38BDF8` dark). Inverted FVGs use the red tint.
- **Price tags:** TP, Entry and SL values sit as coloured pills on the price axis, TradingView-style. Axis labels that would collide with a tag are hidden; the gridlines stay.
- **Frame:** each chart has a topic label, title, subtitle and key at the top, and a disclaimer plus the TradingDocs mark at the bottom.

## Reproduce

Requires Python 3.10+, Chrome or Chromium (Kaleido uses it for PNG export), and `ffmpeg` with libx264 for the video.

```bash
cd samples/smc-charts
python3 -m venv .venv && . .venv/bin/activate
pip install -r requirements.txt
python build_all.py          # all charts, both themes (~15 s)
python animate_fvg.py        # both videos (~1.5 min); or: python animate_fvg.py dark
```

If Kaleido cannot find Chrome, set `BROWSER_PATH` to the browser binary.

Each script checks its candles against the source lesson's levels and rules before drawing, and stops with an assertion error if anything is inconsistent. Risk, reward and R:R are calculated by the script, not typed in. The video is built from the same `build()` function as the static FVG chart, so the two can't drift apart.

## Using the images on the site (later phase)

The site switches themes with a `.dark` class (next-themes). To show the matching image, render both and hide one with CSS, for example:

```css
.chart-dark { display: none; }
.dark .chart-light { display: none; }
.dark .chart-dark { display: block; }
```

This is not wired into the site. Doing so would change site files, so it is left for after approval.
