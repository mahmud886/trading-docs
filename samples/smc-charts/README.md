# SMC Chart Set — OB, FVG, IFVG, Imbalance

These are standalone chart samples for review. They follow the style of the approved prototype in `../order-block-chart/`. The documentation site does not use them yet.

| Chart | Source script | Data (synthetic) | Outputs |
|-------|---------------|------------------|---------|
| Bearish Order Block (NAS100 15m) | `bearish_order_block_nas100.py` | `data/nas100_15m_bearish_ob.csv` | `output/bearish-order-block-nas100.{png,html}` |
| Bullish FVG (EUR/USD 15m) | `fair_value_gap_eurusd.py` | `data/eurusd_15m_fvg.csv` | `output/bullish-fvg-eurusd.{png,html}` |
| Bearish IFVG (GBP/USD 1H) | `inverse_fvg_gbpusd.py` | `data/gbpusd_1h_ifvg.csv` | `output/bearish-ifvg-gbpusd.{png,html}` |
| Three types of imbalance | `imbalance_types.py` | inline shapes (arbitrary units) | `output/imbalance-types.{png,html}` |

Other files:

- `chartkit.py` — the shared design tokens and drawing helpers.
- `analysis.md` — the written analysis for every chart.
- `build_all.py` — rebuilds all four charts at once.

Each PNG is 3200 × 1800 px (a 1600 × 900 layout at 2×). Each HTML file is an interactive Plotly preview: you can hover over candles, zoom, drag labels, and use the camera icon to export a PNG. The HTML files load `plotly.js` from the Plotly CDN.

## Reproduce

Requires Python 3.10+ and Chrome or Chromium, which Kaleido uses to export the PNGs.

```bash
cd samples/smc-charts
python3 -m venv .venv && . .venv/bin/activate
pip install -r requirements.txt
python build_all.py          # or run any single chart script
```

If Kaleido cannot find Chrome, set `BROWSER_PATH` to the browser binary.

Before drawing, each script checks its candles against the rules and levels in the source lesson. It stops with an assertion error if something is inconsistent. Examples of what it checks:

- the zone's range;
- the displacement candle's size;
- that the structure break is a close, not just a wick;
- that the retest is the first touch;
- that the engulfing pattern is valid;
- that the stop sits beyond the zone.

Risk, reward and R:R are calculated by the script, not typed in.

## Editing

| To change | Edit |
|-----------|------|
| Levels | The constants at the top of each script |
| Price path | The CSV in `data/` |
| Colors, fonts, size | `chartkit.py` (shared by all charts) |
