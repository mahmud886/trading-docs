# ICT PD Arrays — Deep Lesson (EN + BN) with Charts and an Animated Example

This is the source for `content/{en,bn}/ict/pd-arrays.mdx` (published) and its assets. It is lesson 8 in the ICT series.

| Output | Shows |
|--------|-------|
| `pd-array-matrix-*` | ICT's matrix: seven arrays per side, ordered from the range extreme to equilibrium |
| `breaker-vs-mitigation-*` | The same break of the prior low; a breaker took the prior high first, a mitigation block did not |
| `eurusd-pd-confluence-*` | OB 50 % (1.0852) + FVG 1.0848–1.0856 + OTE 1.0855–1.0845 stacked → buy 1.0852 / SL 1.0840 / TP 1.0920 (1 : 5.7; a stop below the leg gives 1 : 3.1) |
| `pd-arrays-explainer-*.mp4` | 18-second animation of the stacked-arrays trade |

Rebuild with `python charts/build_all.py` and `python charts/animate_pd_arrays.py`.

## What changed compared with the original lesson

**Corrected**

- The mitigation block definition. The original described a "partially filled OB"; the rewrite uses ICT's: an OB that failed without taking liquidity.
- The "most to least significant" list and "OBs are stronger than FVGs". The matrix is now presented as an ordering by position, not a strength ranking.
- The original example's stop (1.0840) sits inside its own OTE leg. The trade-off is now explained: a stop below the leg gives 1 : 3.1.

**Removed or softened claims:** "fighting institutions", "probability increases dramatically", and "< 20 candles".

**New sections:** the full matrix including rejection blocks and old highs/lows, a breaker vs mitigation comparison, five array-selection rules, practice exercises and an FAQ.
