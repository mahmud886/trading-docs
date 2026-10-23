# Sample Lesson Rewrite — Order Blocks (EN + BN)

These files are proposed rewrites for review. The live lessons in `content/en/smc/order-blocks.mdx` and `content/bn/smc/order-blocks.mdx` have **not** been changed.

| File | Purpose |
|------|---------|
| `order-blocks.en.mdx` | English rewrite. Same frontmatter keys as the original |
| `order-blocks.bn.mdx` | Bangla rewrite. Same structure as the English, using the original BN terminology |
| `images/` | Chart PNGs the lessons reference, in light and dark |

## What changed compared with the original

**New sections**

- Key-terms table.
- 7-point **validation checklist**.
- **Invalidation** section.
- Trade-off notes for each entry model.
- Practice exercises.
- An FAQ entry on full candle vs body.

**Charts:** the two ASCII sketches are replaced by the EUR/USD bullish OB and NAS100 bearish OB charts. The lessons reference them at `/images/smc/order-blocks/…-dark.png`, which is where they would go on approval.

**Examples**

- Each example is split into **observations**, a **trade-plan table**, and an **invalidation** level.
- "Result: price hit …" lines are removed. The R:R figures are labelled as *planned* risk-to-reward, not results.
- All R:R values were rechecked and are unchanged:

  | Example | Risk | Reward | R:R |
  |---------|------|--------|-----|
  | EUR/USD | 11 pips | 59 pips | 1:5.4 |
  | NAS100 | 35 points | 115 points | 1:3.3 |
  | Gold | $8 | $35 | 1:4.4 |

- The NAS100 entry (18,395) is now described as a sell limit filled on the retest after the engulfing, because the engulfing candle itself closes lower.

**Claims removed or softened**

- "First test has the highest probability (60–70%)" is removed; no data supports it.
- "Model 2 has a better win rate" now reads "fewer failed trades … but lower R:R".

**The BN version**

- It now matches the EN content, including the NAS100 example and the multi-timeframe and FAQ sections, which were missing from the BN lesson.

**Unchanged rules:** the definitions, the 2× displacement rule, 1–2% risk, the 5–15 pip stop buffer, the TP1/TP2 guidance, and 2–3 trades per day.

## Please confirm

1. **Mitigation Block definition.** The original says it is formed "when price returns to an OB that was previously broken". That overlaps with the Breaker Block. The rewrite uses the common ICT definition instead: a failed swing that did not make a new extreme. Keep my wording, or restore the original?
2. **Image theme.** The lessons use the **dark** images, because the site defaults to dark. Showing light images in light mode needs a small CSS rule or component in the site (see `samples/smc-charts/README.md`). I left that out on purpose.
3. **MDX build check.** I could not run it: `node_modules` is not installed in this environment. The files only use `Callout`, Markdown tables and images, which the existing lessons already use.
