# Sample Chart Prototype — Bullish Order Block (EUR/USD)

A standalone prototype for review. Nothing in the documentation site uses or imports it yet.

| File                                      | Purpose                                                  |
| ----------------------------------------- | -------------------------------------------------------- |
| `order_block_bullish_eurusd.py`           | Editable chart source. Writes both outputs               |
| `data/eurusd_15m_synthetic.csv`           | Synthetic 15m candles (clearly labeled, no real quotes)  |
| `output/bullish-order-block-eurusd.png`   | 3200 × 1800 px image (1600 × 900 layout at 2×)           |
| `output/bullish-order-block-eurusd.html`  | Interactive Plotly preview (hover, zoom, draggable labels) |
| `analysis.md`                             | Written analysis that goes with the chart                |
| `requirements.txt`                        | Python dependencies                                      |

## Reproduce

Requires Python 3.10+ and a Chrome or Chromium install, which Kaleido uses for PNG export.

```bash
cd samples/order-block-chart
python3 -m venv .venv && . .venv/bin/activate
pip install -r requirements.txt
python order_block_bullish_eurusd.py
```

If Kaleido cannot find Chrome, set `BROWSER_PATH` to the browser binary, for example
`BROWSER_PATH=/usr/bin/chromium python order_block_bullish_eurusd.py`.

Before drawing, the script checks the candles against the guide's levels and rules. If something is inconsistent, it stops with an assertion error. The checks cover:

- the OB range;
- the displacement being at least 2× the average body;
- the close above the last lower high;
- the retest landing inside the OB;
- the entry falling inside the retest candle;
- the stop sitting beyond the OB;
- the OB being in discount.

It also computes risk, reward and R:R instead of hard-coding them.

## Editing

- **Levels:** edit the constants at the top of the script (`OB_LOW`, `ENTRY`, `STOP`, `TARGET`, …).
- **Price path:** edit the CSV.
- **Colors and fonts:** edit the design tokens (`BULL`, `BEAR`, `ZONE`, `INK*`, `FONT`).
- **Interactive tweaks:** in the HTML preview, labels can be dragged. Use the camera icon to export a PNG.

The HTML preview loads `plotly.js` from the Plotly CDN, so it needs an internet connection to render.
