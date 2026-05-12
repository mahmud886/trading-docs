import { writeFileSync } from 'fs';
import { join } from 'path';

const contentDir = join(process.cwd(), 'content');

function writeMdx(lang, category, slug, frontmatter, content) {
  const fm = `---
title: "${frontmatter.title}"
description: "${frontmatter.description}"
level: ${frontmatter.level}
order: ${frontmatter.order}
lastUpdated: "2026-05-11"
---
`;
  writeFileSync(join(contentDir, lang, category, `${slug}.mdx`), fm + content, 'utf-8');
  console.log(`✅ ${lang}/${category}/${slug}.mdx`);
}

// ====================================================
// SMC - CHOCH (EN) - Full expansion
// ====================================================
writeMdx('en', 'smc', 'choch', {
  title: "Change of Character (CHOCH) — Complete Guide",
  description: "Master the Change of Character (CHOCH) concept in Smart Money trading. Learn to identify trend reversals, differentiate CHOCH from BOS, and execute high-probability reversal trades with real market examples.",
  level: "intermediate",
  order: 4
}, `
## What is Change of Character (CHOCH)?

Change of Character (CHOCH) is the **first structural signal** that a trend may be reversing. It occurs when price breaks a key swing point **against** the prevailing trend — breaking below a swing low in an uptrend, or above a swing high in a downtrend.

Unlike Break of Structure (BOS) which confirms trend continuation, CHOCH represents the **initial crack** in market structure that warns traders to prepare for a potential direction change.

<Callout type="info" title="CHOCH = First Reversal Warning">
CHOCH doesn't guarantee a full reversal — it signals the first structural break against the trend. Smart Money traders use it as an alert to shift their bias and look for entries in the new direction.
</Callout>

---

## Why CHOCH Matters in Trading

Understanding CHOCH is critical because:

1. **Early Entry** — Catching reversals at the beginning means better risk-to-reward
2. **Bias Shift** — It tells you when to stop looking for trend-continuation trades
3. **Institutional Footprint** — Large players reversing positions create CHOCH
4. **Confluence Tool** — Combined with other concepts (OB, FVG, liquidity), it increases probability
5. **Loss Prevention** — Recognizing CHOCH prevents you from fighting the new trend

---

## Bullish CHOCH (Bearish → Bullish Reversal)

In a **downtrend**, price makes consistent Lower Lows (LL) and Lower Highs (LH). A **Bullish CHOCH** occurs when price breaks **above the most recent swing high (LH)**:

\`\`\`
    Downtrend Structure:
    
    LH ─────╮
             │    ★ Price breaks above LH = Bullish CHOCH!
    LH ──╮  │   /
          │  │  /
    LL ───╯  │ /
             ╰╯
    LL ──────╯
    
    After CHOCH: Look for bullish setups
\`\`\`

### Identification Rules:

1. Confirm the existing downtrend (at least 2 LLs and 2 LHs)
2. Identify the most recent Lower High
3. Wait for a candle BODY close above that LH level
4. This break = Bullish CHOCH confirmed

<Callout type="tip" title="Pro Tip">
The strongest Bullish CHOCHs occur after price has swept sell-side liquidity (taken out previous lows) before reversing. This shows institutions finished accumulating.
</Callout>

---

## Bearish CHOCH (Bullish → Bearish Reversal)

In an **uptrend**, price makes Higher Highs (HH) and Higher Lows (HL). A **Bearish CHOCH** occurs when price breaks **below the most recent swing low (HL)**:

\`\`\`
    Uptrend Structure:
    
    HH ──────╮
             │
    HH ──╮  │        ★ Price breaks below HL
          │  │         = Bearish CHOCH!
    HL ───╯  │        \\
             │         \\
    HL ──────╯          ╰── New bearish structure
\`\`\`

### Identification Rules:

1. Confirm the existing uptrend (at least 2 HHs and 2 HLs)
2. Identify the most recent Higher Low
3. Wait for a candle BODY close below that HL level
4. This break = Bearish CHOCH confirmed

---

## CHOCH vs BOS — Key Differences

| Aspect | BOS | CHOCH |
|--------|-----|-------|
| **Direction** | With the trend | Against the trend |
| **Signal** | Continuation | Potential reversal |
| **In Uptrend** | Breaks above HH | Breaks below HL |
| **In Downtrend** | Breaks below LL | Breaks above LH |
| **Confidence** | Trend is strong | Trend may be ending |
| **Action** | Continue current bias | Prepare to shift bias |
| **Entry Style** | Pullback entries | Reversal entries |

<Callout type="warning" title="Critical Distinction">
A single CHOCH does NOT mean the trend has fully reversed. It's the first warning. You need **confirmation** — typically an Order Block hold, FVG respect, or a subsequent BOS in the new direction.
</Callout>

---

## Types of CHOCH

### 1. Strong CHOCH (High Probability)

- Occurs with **displacement** (strong momentum candles)
- Creates a **Fair Value Gap (FVG)** during the break
- Happens after a **liquidity sweep** (stop hunt)
- Volume increase visible
- Breaks through with full candle body

### 2. Weak CHOCH (Low Probability)

- Occurs with small candles / wicks  
- No FVG created, no prior liquidity sweep
- Low momentum / choppy price action
- May be a false break / manipulation

### 3. Internal CHOCH (Minor)

- Occurs within a trading range on lower timeframes
- Useful for precision entries within a larger setup

### 4. Swing CHOCH (Major)

- Occurs on the swing structure (higher timeframe)
- Most significant — indicates a major trend change

---

## How to Trade CHOCH — Step by Step

### Entry Model 1: CHOCH + Order Block

1. Identify existing trend with clear structure
2. Wait for CHOCH (break against trend)
3. Identify the **Order Block** that caused the CHOCH
4. Wait for price to pull back to the OB zone
5. Enter at the OB with tight stop loss
6. Target the next swing point or liquidity pool

\`\`\`
Example: Bullish CHOCH + OB Entry

    Previous LH ────── CHOCH Break ─────→
                           │
    Price pulls back  ←────╯
         │
    ████████  ← Bullish OB (entry zone)
    ████████
         │
    Stop Loss below OB
\`\`\`

### Entry Model 2: CHOCH + FVG

1. Mark the CHOCH level
2. Identify FVG created during the CHOCH move
3. Wait for price to retrace into the FVG
4. Enter at mid-FVG or start of FVG
5. Stop loss below/above the FVG
6. Target next liquidity pool

### Entry Model 3: CHOCH + Liquidity Sweep + OB (A+ Setup)

1. Price sweeps liquidity (takes out highs/lows)
2. CHOCH forms on the same move back
3. Identify the OB/FVG left behind
4. Enter on the pullback — this triple-confluence has exceptional win rates

---

## Multi-Timeframe CHOCH Analysis

| Timeframe | Purpose |
|-----------|---------|
| **Weekly/Daily** | Major trend direction and bias |
| **4H** | Swing structure CHOCH for directional shift |
| **1H** | Entry timeframe confirmation |
| **15M/5M** | Precision entries and tight stops |

### Rules:
- **Higher timeframe CHOCH > Lower timeframe CHOCH**
- Only trade lower TF CHOCH that aligns with higher TF direction
- A 4H CHOCH with a 15M entry model = high probability

<Callout type="tip" title="Multi-TF Strategy">
Wait for a 4H Bullish CHOCH, then drop to 15M to find a bullish Order Block for your entry. This gives you the directional confidence of a higher TF signal with the precision of a lower TF entry.
</Callout>

---

## Real Trading Examples

### Example 1: EUR/USD Bullish CHOCH

**Context:** EUR/USD in a 4H downtrend, approaching daily support zone

1. Price sweeps below a key low (liquidity grab)
2. Strong bullish displacement candle breaks above the last LH
3. **Bullish CHOCH confirmed on 4H**
4. Price creates an FVG during the CHOCH move
5. Retrace into FVG — entry at 1.0850
6. Stop loss: 1.0820 (below the sweep low)
7. Target: 1.0950 (next swing high / buy-side liquidity)
8. **Result: +100 pips, 3.3R trade**

### Example 2: Gold (XAU/USD) Bearish CHOCH

**Context:** Gold rallying to all-time highs in daily uptrend

1. Price reaches $2,450 resistance zone (premium)
2. Strong sell candle breaks below the most recent HL at $2,380
3. **Bearish CHOCH confirmed on 4H**
4. Bearish Order Block identified at $2,420
5. Entry at $2,418 on retest | Stop: $2,455 | Target: $2,350
6. **Result: +68 points, 1.8R trade**

### Example 3: NAS100 Intraday CHOCH (Bangladesh Time)

1. NY Kill Zone (7:30 PM – 10:00 PM BD Time)
2. Price makes HH but fails to hold
3. Breaks below HL on 15M — **Bearish CHOCH**
4. 5M Order Block at the origin of the CHOCH move
5. Entry: 18,450 on retest | Stop: 18,485 | Target: 18,350
6. **Result: +100 points, 2.8R trade**

### Example 4: BTC/USD Weekly CHOCH

1. Bitcoin in macro downtrend at $25,000 level
2. BTC sweeps below $24,800 (key low), then massive weekly bullish candle breaks above $28,000 (last LH)
3. **Weekly Bullish CHOCH** — major trend shift signal
4. Entries on 4H pullbacks to OBs yielded hundreds of % returns

---

## Common Mistakes with CHOCH

<Callout type="warning" title="Avoid These Errors">

**❌ Trading Every CHOCH** — Not every CHOCH leads to a full reversal. Use confluence (liquidity sweep + OB + higher TF alignment).

**❌ Confusing Wick Breaks with CHOCH** — A wick through a level is NOT a valid CHOCH. You need a candle body close.

**❌ Ignoring Higher Timeframe Context** — A 5M CHOCH against the daily trend is low probability. Always use top-down analysis.

**❌ Entering Immediately After CHOCH** — CHOCH is a signal, not an entry trigger. Wait for a pullback to an OB or FVG.

**❌ No Invalidation Level** — Define where the setup fails. Invalidation = price reclaims the CHOCH level with body close.

</Callout>

---

## CHOCH Confirmation Signals

| Confirmation | Description | Strength |
|--------------|-------------|----------|
| **Liquidity Sweep** | Price took out stops before CHOCH | ⭐⭐⭐⭐⭐ |
| **FVG Created** | Gap forms during CHOCH move | ⭐⭐⭐⭐ |
| **Volume Spike** | Increased volume on CHOCH candle | ⭐⭐⭐⭐ |
| **Displacement** | Large momentum candles | ⭐⭐⭐⭐ |
| **HTF Alignment** | CHOCH aligns with higher TF | ⭐⭐⭐⭐⭐ |
| **SMT Divergence** | Correlated pairs diverge | ⭐⭐⭐⭐ |
| **Session Timing** | Occurs in Kill Zone | ⭐⭐⭐ |
| **Premium/Discount** | At extreme price levels | ⭐⭐⭐⭐ |

---

## Risk Management for CHOCH Trades

| Setup Quality | Risk Per Trade | Conditions |
|---------------|---------------|------------|
| A+ (Full Confluence) | 1-2% | HTF aligned + liquidity sweep + OB + FVG |
| B (Moderate) | 0.5-1% | CHOCH + OB or FVG only |
| C (Low Confluence) | 0.25-0.5% | CHOCH alone, no additional confluence |

### Stop Loss Placement:
- **Bullish CHOCH:** Stop below the low that swept liquidity
- **Bearish CHOCH:** Stop above the high that swept liquidity
- Always use ATR to ensure stop isn't too tight for the timeframe

### Take Profit Targets:
1. **TP1:** Opposing liquidity pool (previous highs/lows)
2. **TP2:** Next significant Order Block
3. **TP3:** Premium/Discount extreme of new range

---

## Advanced CHOCH Concepts

### CHOCH + AMD (Accumulation, Manipulation, Distribution)

1. **Accumulation:** Price ranges and builds liquidity
2. **Manipulation:** False breakout sweeps liquidity (Judas Swing)
3. **CHOCH forms** during the reversal from manipulation
4. **Distribution:** Price delivers to the opposing liquidity pool

### Multiple CHOCH Confirmation

For highest probability:
1. **First CHOCH:** Initial warning signal
2. **Pullback:** Price retraces (tests the break level)
3. **Second break (BOS in new direction):** Confirms the reversal
4. **Entry:** On the pullback after the confirming BOS

---

## Trading Psychology

- **Fear of reversal trades:** Accept that trends DO end — CHOCH identifies when
- **FOMO after CHOCH:** Trust your process — wait for the pullback
- **Confirmation bias:** Use objective criteria (body close, specific levels)
- **Overtrading:** Quality over quantity — only trade high-confluence CHOCHs

---

## FAQ

### Is CHOCH the same as MSS (Market Structure Shift)?
Very similar. MSS is the broader concept; CHOCH specifically refers to the first break against the trend. In ICT terminology, MSS is preferred.

### How many candles should the trend have before a valid CHOCH?
At minimum, 2-3 swing points establishing the trend. A CHOCH on a single-push trend is less reliable.

### Can CHOCH fail?
Yes. Price can create a CHOCH then reclaim the level. Failed CHOCHs often become inducement/traps. This is why you need confirmation.

### What timeframe is best for CHOCH?
4H and 1H for swing direction. 15M and 5M for intraday entries. Daily/Weekly for major trend changes.

---

## Summary

| Concept | Key Points |
|---------|-----------|
| **Definition** | First structural break against the prevailing trend |
| **Bullish CHOCH** | Downtrend: price breaks above a Lower High |
| **Bearish CHOCH** | Uptrend: price breaks below a Higher Low |
| **vs BOS** | BOS = continuation, CHOCH = reversal signal |
| **Best Entry** | CHOCH + Liquidity Sweep + OB/FVG pullback |
| **Confirmation** | Displacement, FVG, volume, HTF alignment |
| **Risk** | 1-2% max, stop beyond the swept liquidity |

---

## Related Topics

- [Break of Structure (BOS)](/en/smc/bos) — Understanding trend continuation
- [Market Structure Shift (MSS)](/en/smc/market-structure-shift) — The broader structural change
- [Order Blocks](/en/smc/order-blocks) — Key entry zones after CHOCH
- [Fair Value Gap](/en/smc/fair-value-gap) — Confirmation tool for CHOCH
- [Liquidity Pools](/en/smc/liquidity-pools) — Where CHOCH often originates
`);

// ====================================================
// SMC - CHOCH (BN)
// ====================================================
writeMdx('bn', 'smc', 'choch', {
  title: "চেঞ্জ অফ ক্যারেক্টার (CHOCH) — সম্পূর্ণ গাইড",
  description: "Smart Money ট্রেডিংয়ে Change of Character (CHOCH) আয়ত্ত করুন। ট্রেন্ড রিভার্সাল চিহ্নিতকরণ, CHOCH ও BOS এর পার্থক্য, এবং হাই-প্রোবাবিলিটি রিভার্সাল ট্রেড শিখুন।",
  level: "intermediate",
  order: 4
}, `
## Change of Character (CHOCH) কী?

Change of Character (CHOCH) হলো **প্রথম স্ট্রাকচারাল সিগন্যাল** যা ইঙ্গিত দেয় যে একটি ট্রেন্ড রিভার্স হতে পারে। এটি ঘটে যখন প্রাইস একটি গুরুত্বপূর্ণ সুইং পয়েন্ট **বিদ্যমান ট্রেন্ডের বিরুদ্ধে** ভেঙে দেয়।

BOS যেখানে ট্রেন্ড কন্টিনিউয়েশন কনফার্ম করে, CHOCH সেখানে মার্কেট স্ট্রাকচারে **প্রথম ফাটল** দেখায়।

<Callout type="info" title="CHOCH = প্রথম রিভার্সাল সতর্কতা">
CHOCH সম্পূর্ণ রিভার্সালের গ্যারান্টি দেয় না — এটি ট্রেন্ডের বিরুদ্ধে প্রথম স্ট্রাকচারাল ব্রেক সিগন্যাল করে। Smart Money ট্রেডাররা এটি তাদের বায়াস পরিবর্তনের সতর্কতা হিসেবে ব্যবহার করে।
</Callout>

---

## CHOCH কেন গুরুত্বপূর্ণ

1. **আর্লি এন্ট্রি** — শুরুতেই রিভার্সাল ধরা মানে ভালো রিস্ক-টু-রিওয়ার্ড
2. **বায়াস শিফট** — কখন ট্রেন্ড-কন্টিনিউয়েশন ট্রেড বন্ধ করতে হবে তা জানায়
3. **ইনস্টিটিউশনাল ফুটপ্রিন্ট** — বড় প্লেয়ারদের পজিশন রিভার্স CHOCH তৈরি করে
4. **কনফ্লুয়েন্স টুল** — OB, FVG, liquidity এর সাথে মিলিয়ে প্রোবাবিলিটি বাড়ায়
5. **লস প্রিভেনশন** — নতুন ট্রেন্ডের বিরুদ্ধে লড়াই এড়ানো যায়

---

## বুলিশ CHOCH (বিয়ারিশ → বুলিশ রিভার্সাল)

**ডাউনট্রেন্ডে**, প্রাইস ধারাবাহিকভাবে Lower Low (LL) এবং Lower High (LH) তৈরি করে। **বুলিশ CHOCH** ঘটে যখন প্রাইস **সবচেয়ে সাম্প্রতিক LH এর উপরে** ব্রেক করে:

\`\`\`
    ডাউনট্রেন্ড স্ট্রাকচার:
    
    LH ─────╮
             │   ★ LH এর উপরে ব্রেক = বুলিশ CHOCH!
    LH ──╮  │  /
          │  │ /
    LL ───╯  ╰╯
    LL ──────╯
\`\`\`

### চিহ্নিতকরণ নিয়ম:
1. বিদ্যমান ডাউনট্রেন্ড কনফার্ম করুন (কমপক্ষে ২টি LL ও ২টি LH)
2. সবচেয়ে সাম্প্রতিক Lower High চিহ্নিত করুন
3. ক্যান্ডেল **বডি ক্লোজ** সেই লেভেলের উপরে হওয়ার অপেক্ষা করুন
4. এই ব্রেক = বুলিশ CHOCH কনফার্মড

---

## বিয়ারিশ CHOCH (বুলিশ → বিয়ারিশ রিভার্সাল)

**আপট্রেন্ডে**, প্রাইস HH এবং HL তৈরি করে। **বিয়ারিশ CHOCH** ঘটে যখন প্রাইস **সবচেয়ে সাম্প্রতিক HL এর নিচে** ব্রেক করে।

### চিহ্নিতকরণ নিয়ম:
1. বিদ্যমান আপট্রেন্ড কনফার্ম করুন (কমপক্ষে ২টি HH ও ২টি HL)
2. সবচেয়ে সাম্প্রতিক Higher Low চিহ্নিত করুন
3. ক্যান্ডেল **বডি ক্লোজ** সেই লেভেলের নিচে হওয়ার অপেক্ষা করুন

---

## CHOCH বনাম BOS — মূল পার্থক্য

| বিষয় | BOS | CHOCH |
|--------|-----|-------|
| **দিক** | ট্রেন্ডের সাথে | ট্রেন্ডের বিরুদ্ধে |
| **সিগন্যাল** | কন্টিনিউয়েশন | সম্ভাব্য রিভার্সাল |
| **আপট্রেন্ডে** | HH এর উপরে ব্রেক | HL এর নিচে ব্রেক |
| **ডাউনট্রেন্ডে** | LL এর নিচে ব্রেক | LH এর উপরে ব্রেক |
| **অ্যাকশন** | বিদ্যমান বায়াস চালিয়ে যান | বায়াস পরিবর্তনের প্রস্তুতি |

<Callout type="warning" title="গুরুত্বপূর্ণ">
একটি মাত্র CHOCH মানে ট্রেন্ড সম্পূর্ণ রিভার্স হয়ে গেছে তা নয়। **কনফার্মেশন** দরকার — Order Block হোল্ড, FVG রেসপেক্ট, বা নতুন দিকে BOS।
</Callout>

---

## CHOCH এর প্রকারভেদ

### ১. স্ট্রং CHOCH (হাই প্রোবাবিলিটি)
- **ডিসপ্লেসমেন্ট** সহ ঘটে
- ব্রেকের সময় **FVG** তৈরি করে
- **লিকুইডিটি সুইপ** এর পরে ঘটে

### ২. উইক CHOCH (লো প্রোবাবিলিটি)
- ছোট ক্যান্ডেল / উইক দিয়ে ঘটে
- কোনো FVG তৈরি হয় না
- ফলস ব্রেক হতে পারে

### ৩. ইন্টার্নাল CHOCH (মাইনর)
- রেঞ্জের মধ্যে লোয়ার টাইমফ্রেমে

### ৪. সুইং CHOCH (মেজর)
- হায়ার টাইমফ্রেমে — সবচেয়ে গুরুত্বপূর্ণ

---

## CHOCH ট্রেডিং পদ্ধতি

### এন্ট্রি মডেল ১: CHOCH + Order Block

1. স্পষ্ট স্ট্রাকচার সহ ট্রেন্ড চিহ্নিত করুন
2. CHOCH এর অপেক্ষা করুন
3. CHOCH সৃষ্টিকারী **Order Block** চিহ্নিত করুন
4. প্রাইস OB জোনে পুলব্যাক করার অপেক্ষা করুন
5. OB তে টাইট স্টপ লস সহ এন্ট্রি
6. পরবর্তী লিকুইডিটি পুল টার্গেট

### এন্ট্রি মডেল ২: CHOCH + FVG

1. CHOCH মুভের সময় তৈরি FVG চিহ্নিত করুন
2. FVG তে রিট্রেস করার অপেক্ষা করুন
3. মিড-FVG তে এন্ট্রি

### এন্ট্রি মডেল ৩: CHOCH + Liquidity Sweep + OB (A+ সেটআপ)

1. প্রাইস লিকুইডিটি সুইপ করে
2. একই মুভে CHOCH ফর্ম করে
3. পেছনে রেখে যাওয়া OB/FVG চিহ্নিত করুন
4. পুলব্যাকে এন্ট্রি — ট্রিপল-কনফ্লুয়েন্স

---

## বাস্তব ট্রেডিং উদাহরণ

### উদাহরণ ১: EUR/USD বুলিশ CHOCH

1. EUR/USD 4H ডাউনট্রেন্ডে, ডেইলি সাপোর্ট জোনের কাছে
2. কী লো এর নিচে সুইপ (liquidity grab)
3. শক্তিশালী বুলিশ ক্যান্ডেল শেষ LH এর উপরে ব্রেক
4. **4H বুলিশ CHOCH কনফার্মড**
5. FVG তে রিট্রেস — 1.0850 তে এন্ট্রি
6. স্টপ: 1.0820 | টার্গেট: 1.0950
7. **ফলাফল: +100 পিপস, 3.3R**

### উদাহরণ ২: গোল্ড বিয়ারিশ CHOCH

1. গোল্ড $2,450 রেজিস্ট্যান্স জোনে (প্রিমিয়াম)
2. শক্তিশালী সেল ক্যান্ডেল $2,380 HL এর নিচে ব্রেক
3. **4H বিয়ারিশ CHOCH কনফার্মড**
4. $2,420 তে বিয়ারিশ OB | এন্ট্রি: $2,418
5. স্টপ: $2,455 | টার্গেট: $2,350
6. **ফলাফল: +68 পয়েন্ট, 1.8R**

### উদাহরণ ৩: NAS100 ইন্ট্রাডে (বাংলাদেশ সময়)

1. NY Kill Zone (রাত ৭:৩০ - ১০:০০ BD সময়)
2. 15M এ HL এর নিচে ব্রেক — **বিয়ারিশ CHOCH**
3. 5M OB তে এন্ট্রি: 18,450
4. স্টপ: 18,485 | টার্গেট: 18,350
5. **ফলাফল: +100 পয়েন্ট, 2.8R**

---

## সাধারণ ভুল

<Callout type="warning" title="এই ভুলগুলো এড়িয়ে চলুন">

**❌ প্রতিটি CHOCH ট্রেড করা** — সব CHOCH রিভার্সাল নয়। কনফ্লুয়েন্স ব্যবহার করুন।

**❌ উইক ব্রেককে CHOCH মনে করা** — ভ্যালিড CHOCH এ ক্যান্ডেল **বডি ক্লোজ** দরকার।

**❌ হায়ার TF কন্টেক্সট উপেক্ষা** — ডেইলি ট্রেন্ডের বিরুদ্ধে 5M CHOCH লো প্রোবাবিলিটি।

**❌ সাথে সাথেই এন্ট্রি** — পুলব্যাকের অপেক্ষা করুন।

</Callout>

---

## কনফার্মেশন সিগন্যাল

| কনফার্মেশন | শক্তি |
|------------|-------|
| **Liquidity Sweep** | ⭐⭐⭐⭐⭐ |
| **FVG তৈরি** | ⭐⭐⭐⭐ |
| **ডিসপ্লেসমেন্ট** | ⭐⭐⭐⭐ |
| **HTF অ্যালাইনমেন্ট** | ⭐⭐⭐⭐⭐ |
| **সেশন টাইমিং** | ⭐⭐⭐ |

---

## রিস্ক ম্যানেজমেন্ট

| সেটআপ | রিস্ক |
|-------|------|
| A+ (ফুল কনফ্লুয়েন্স) | ১-২% |
| B (মডারেট) | ০.৫-১% |
| C (লো কনফ্লুয়েন্স) | ০.২৫-০.৫% |

---

## FAQ

### CHOCH কি MSS এর সমান?
খুব কাছাকাছি। MSS বৃহত্তর কনসেপ্ট, CHOCH ট্রেন্ডের বিরুদ্ধে প্রথম ব্রেক। ICT তে MSS বেশি ব্যবহৃত।

### CHOCH কি ব্যর্থ হতে পারে?
হ্যাঁ। প্রাইস CHOCH তৈরি করে লেভেল রিক্লেইম করতে পারে। ব্যর্থ CHOCH প্রায়ই inducement হয়ে যায়।

### কোন টাইমফ্রেম সেরা?
4H ও 1H সুইং ডাইরেকশনের জন্য। 15M ও 5M ইন্ট্রাডে এন্ট্রির জন্য।

---

## সারসংক্ষেপ

| কনসেপ্ট | মূল পয়েন্ট |
|---------|-----------|
| **সংজ্ঞা** | ট্রেন্ডের বিরুদ্ধে প্রথম স্ট্রাকচারাল ব্রেক |
| **বুলিশ CHOCH** | ডাউনট্রেন্ডে LH এর উপরে ব্রেক |
| **বিয়ারিশ CHOCH** | আপট্রেন্ডে HL এর নিচে ব্রেক |
| **সেরা এন্ট্রি** | CHOCH + Liquidity Sweep + OB/FVG |
| **রিস্ক** | সর্বোচ্চ ১-২% |

---

## সম্পর্কিত টপিক

- [Break of Structure (BOS)](/bn/smc/bos) — ট্রেন্ড কন্টিনিউয়েশন
- [Market Structure Shift](/bn/smc/market-structure-shift) — স্ট্রাকচারাল পরিবর্তন
- [অর্ডার ব্লক](/bn/smc/order-blocks) — CHOCH এর পরে এন্ট্রি জোন
- [Fair Value Gap](/bn/smc/fair-value-gap) — কনফার্মেশন টুল
- [লিকুইডিটি পুল](/bn/smc/liquidity-pools) — যেখানে CHOCH শুরু হয়
`);

// ====================================================
// SMC - Market Structure Shift (EN)
// ====================================================
writeMdx('en', 'smc', 'market-structure-shift', {
  title: "Market Structure Shift (MSS) — Complete Guide",
  description: "Master Market Structure Shift in Smart Money trading. Learn to identify the exact moment trends change, combine MSS with liquidity concepts, and execute precision reversal trades.",
  level: "intermediate",
  order: 3
}, `
## What is Market Structure Shift (MSS)?

A Market Structure Shift (MSS) occurs when price **breaks the most recent structural point against the prevailing trend**, signaling a potential reversal. MSS is essentially the same concept as CHOCH but is the preferred ICT terminology.

MSS is the broader concept that encompasses any structural change, while CHOCH specifically refers to the character of price movement changing. In practice, most traders use them interchangeably.

<Callout type="info" title="MSS in ICT Methodology">
ICT (Inner Circle Trader) uses MSS to describe the moment when the algorithm shifts from one directional delivery to another. It represents the "shift" in the market-making algorithm's intent.
</Callout>

---

## MSS vs CHOCH vs BOS

| Concept | What It Does | Direction |
|---------|-------------|-----------|
| **BOS** | Confirms trend continuation | With trend |
| **CHOCH** | First break against trend | Against trend |
| **MSS** | Confirmed structural shift | Against trend (with displacement) |

The key difference: **MSS requires displacement** (strong momentum). A weak break is a CHOCH. A strong, impulsive break with displacement is an MSS.

---

## How to Identify MSS

### Bullish MSS (Downtrend → Uptrend):

1. Price is in a clear downtrend (LL, LH pattern)
2. Price sweeps a key low (takes liquidity)
3. **Strong impulsive move** breaks above the most recent Lower High
4. The move creates displacement (large candles, FVGs)
5. **MSS confirmed** — bias shifts to bullish

\`\`\`
    Downtrend:     LH────╮
                          │     ████ ← Displacement candles
    LH────╮              │    ████   (MSS occurs here)
           │              │   ████
    LL─────╯              │  /
                          ╰─╯
    LL (swept) ───────────╯  ← Liquidity taken first
\`\`\`

### Bearish MSS (Uptrend → Downtrend):

1. Price is in a clear uptrend (HH, HL pattern)
2. Price sweeps a key high (takes liquidity)
3. **Strong impulsive move** breaks below the most recent Higher Low
4. Displacement present
5. **MSS confirmed** — bias shifts to bearish

---

## The MSS + Liquidity Sweep Model

The highest-probability MSS setups follow this sequence:

1. **Liquidity Sweep** — Price takes out a key high/low
2. **Displacement** — Aggressive move in the opposite direction
3. **MSS** — Structural break confirming the shift
4. **FVG/OB Formation** — Entry zones are created during the displacement
5. **Retracement** — Price pulls back to the FVG/OB for entry

<Callout type="tip" title="The Perfect MSS Setup">
When you see a liquidity sweep followed by displacement and MSS, you have the highest-probability reversal setup in SMC/ICT trading. The FVG or OB left behind during the MSS move is your entry zone.
</Callout>

---

## Trading MSS — Entry Models

### Model 1: MSS + FVG Entry

1. Mark the MSS structural break level
2. Identify the FVG created during the displacement
3. Set limit order at the FVG (50% of FVG for optimal entry)
4. Stop loss: Beyond the liquidity sweep low/high
5. Target: Next liquidity pool on the opposite side

### Model 2: MSS + Order Block Entry

1. Find the last opposing candle before the MSS displacement
2. This is the Order Block
3. Wait for price to retrace to the OB
4. Enter with confirmation (lower TF CHOCH into the OB)
5. Stop: Below/above the OB

### Model 3: MSS + Breaker Block

1. The old support/resistance that MSS broke through becomes a Breaker
2. Price retraces to test the Breaker Block
3. Enter at the Breaker with proper stop placement

---

## Real Trading Examples

### Example 1: EUR/USD Bullish MSS

**Context:** Daily downtrend approaching weekly demand zone

1. Price sweeps below daily swing low at 1.0650 (takes SSL)
2. 4H shows massive bullish displacement — 3 consecutive bullish candles
3. Price breaks above last LH at 1.0720 with body close
4. **Bullish MSS confirmed on 4H**
5. FVG created between 1.0690-1.0710
6. Entry: 1.0700 (mid-FVG) | Stop: 1.0640 | Target: 1.0850
7. **Result: +150 pips, 2.5R trade**

### Example 2: Gold Bearish MSS

1. Gold in uptrend, sweeps above $2,480 (takes BSL)
2. Massive bearish displacement on 1H
3. Breaks below HL at $2,440 — **Bearish MSS**
4. Bearish OB at $2,460-$2,470
5. Entry: $2,465 | Stop: $2,485 | Target: $2,380
6. **Result: +85 points, 4.25R trade**

---

## MSS on Different Timeframes

| Timeframe | Significance | Use Case |
|-----------|-------------|----------|
| Weekly | Macro trend reversal | Position trading |
| Daily | Swing trend reversal | Swing trading |
| 4H | Intra-week directional shift | Day/swing trading |
| 1H | Session directional bias | Intraday |
| 15M/5M | Entry precision | Scalping entries |

### Multi-TF MSS Confluence:
The most powerful setup occurs when MSS aligns across multiple timeframes:
- Daily MSS + 4H MSS = Very high conviction
- 4H MSS + 1H entry-level MSS = Excellent entry timing

---

## Common Mistakes

<Callout type="warning" title="Avoid These MSS Errors">

**❌ Calling every break MSS** — True MSS requires displacement. Weak or slow breaks are just CHOCH.

**❌ No liquidity sweep before MSS** — The best MSSs come after a sweep. Without the sweep, the reversal may be temporary.

**❌ Trading MSS against HTF trend** — A 15M MSS against the daily trend is likely just a pullback. Always align with HTF.

**❌ Entering at the MSS candle** — Wait for retracement to FVG/OB. Entering at the MSS candle gives poor R:R.

</Callout>

---

## MSS vs Fake Breakout

How to distinguish a real MSS from a fake breakout:

| Real MSS | Fake Breakout |
|----------|--------------|
| Displacement (large candles) | Slow, grinding move |
| FVG created | No FVG |
| Prior liquidity sweep | No sweep |
| Volume increase | Low volume |
| Followed by continuation | Immediately reversed |
| HTF aligned | Against HTF |

---

## FAQ

### When does MSS become invalid?
MSS is invalidated when price retraces and closes beyond the liquidity sweep point (the high/low that was taken before the MSS).

### Can I use MSS on its own?
MSS alone is a signal, not a full trading system. Combine it with FVG/OB entries, proper risk management, and multi-TF analysis.

### How is MSS different from a regular breakout?
MSS occurs AGAINST the trend (reversal), while a breakout occurs WITH the trend (continuation = BOS). MSS also requires displacement.

---

## Summary

| Concept | Key Points |
|---------|-----------|
| **Definition** | Structural break with displacement against the trend |
| **vs CHOCH** | MSS = strong/impulsive CHOCH with displacement |
| **Best Setup** | Liquidity sweep → Displacement → MSS → FVG/OB entry |
| **Confirmation** | Displacement candles, FVG creation, volume |
| **Entry** | Wait for retracement to FVG or OB after MSS |
| **Invalidation** | Price closes beyond the swept liquidity point |

---

## Related Topics

- [Change of Character (CHOCH)](/en/smc/choch) — The initial reversal signal
- [Break of Structure (BOS)](/en/smc/bos) — Trend continuation
- [Fair Value Gap](/en/smc/fair-value-gap) — Entry zones after MSS
- [Order Blocks](/en/smc/order-blocks) — Alternative entry zones
- [Breaker Blocks](/en/smc/breaker-blocks) — Failed OBs become Breakers
`);

// ====================================================
// SMC - Market Structure Shift (BN)
// ====================================================
writeMdx('bn', 'smc', 'market-structure-shift', {
  title: "মার্কেট স্ট্রাকচার শিফট (MSS) — সম্পূর্ণ গাইড",
  description: "Smart Money ট্রেডিংয়ে Market Structure Shift আয়ত্ত করুন। ট্রেন্ড পরিবর্তনের সঠিক মুহূর্ত চিহ্নিত করুন এবং প্রিসিশন রিভার্সাল ট্রেড শিখুন।",
  level: "intermediate",
  order: 3
}, `
## Market Structure Shift (MSS) কী?

Market Structure Shift (MSS) ঘটে যখন প্রাইস **বিদ্যমান ট্রেন্ডের বিরুদ্ধে সবচেয়ে সাম্প্রতিক স্ট্রাকচারাল পয়েন্ট ভেঙে দেয়**, সম্ভাব্য রিভার্সাল সিগন্যাল করে। MSS মূলত CHOCH এর মতোই তবে ICT এর পরিভাষা।

<Callout type="info" title="ICT মেথডলজিতে MSS">
ICT মার্কেট-মেকিং অ্যালগরিদম এক দিক থেকে অন্য দিকে শিফট করার মুহূর্ত বর্ণনা করতে MSS ব্যবহার করে।
</Callout>

---

## MSS বনাম CHOCH বনাম BOS

| কনসেপ্ট | কাজ | দিক |
|---------|-----|------|
| **BOS** | ট্রেন্ড কন্টিনিউয়েশন কনফার্ম | ট্রেন্ডের সাথে |
| **CHOCH** | ট্রেন্ডের বিরুদ্ধে প্রথম ব্রেক | বিরুদ্ধে |
| **MSS** | ডিসপ্লেসমেন্ট সহ কনফার্মড শিফট | বিরুদ্ধে (শক্তিশালী) |

মূল পার্থক্য: **MSS এ ডিসপ্লেসমেন্ট দরকার** (শক্তিশালী মোমেন্টাম)। দুর্বল ব্রেক = CHOCH। শক্তিশালী, ইম্পালসিভ ব্রেক = MSS।

---

## MSS চিহ্নিতকরণ

### বুলিশ MSS:

1. স্পষ্ট ডাউনট্রেন্ড (LL, LH প্যাটার্ন)
2. প্রাইস কী লো সুইপ করে (লিকুইডিটি নেয়)
3. **শক্তিশালী ইম্পালসিভ মুভ** শেষ LH এর উপরে ব্রেক করে
4. মুভ ডিসপ্লেসমেন্ট তৈরি করে (বড় ক্যান্ডেল, FVG)
5. **MSS কনফার্মড** — বায়াস বুলিশে শিফট

### বিয়ারিশ MSS:

1. স্পষ্ট আপট্রেন্ড (HH, HL প্যাটার্ন)
2. প্রাইস কী হাই সুইপ করে
3. **শক্তিশালী ইম্পালসিভ মুভ** শেষ HL এর নিচে ব্রেক করে
4. **MSS কনফার্মড** — বায়াস বিয়ারিশে শিফট

---

## MSS + Liquidity Sweep মডেল

সর্বোচ্চ প্রোবাবিলিটি MSS সেটআপ এই ক্রমানুসারে:

1. **Liquidity Sweep** — কী হাই/লো নিয়ে নেওয়া
2. **Displacement** — বিপরীত দিকে আগ্রাসী মুভ
3. **MSS** — স্ট্রাকচারাল ব্রেক কনফার্ম
4. **FVG/OB তৈরি** — ডিসপ্লেসমেন্টের সময় এন্ট্রি জোন
5. **রিট্রেসমেন্ট** — প্রাইস FVG/OB তে পুলব্যাক করে

<Callout type="tip" title="পারফেক্ট MSS সেটআপ">
Liquidity sweep + displacement + MSS = SMC/ICT ট্রেডিংয়ের সর্বোচ্চ প্রোবাবিলিটি রিভার্সাল সেটআপ। MSS মুভের সময় তৈরি FVG বা OB আপনার এন্ট্রি জোন।
</Callout>

---

## MSS ট্রেডিং — এন্ট্রি মডেল

### মডেল ১: MSS + FVG এন্ট্রি
1. MSS স্ট্রাকচারাল ব্রেক লেভেল মার্ক করুন
2. ডিসপ্লেসমেন্টের সময় তৈরি FVG চিহ্নিত করুন
3. FVG তে লিমিট অর্ডার সেট করুন
4. স্টপ: লিকুইডিটি সুইপের বাইরে
5. টার্গেট: বিপরীত দিকে পরবর্তী লিকুইডিটি পুল

### মডেল ২: MSS + Order Block এন্ট্রি
1. MSS ডিসপ্লেসমেন্টের আগে শেষ বিপরীত ক্যান্ডেল = OB
2. প্রাইস OB তে রিট্রেস করার অপেক্ষা করুন
3. কনফার্মেশন সহ এন্ট্রি নিন

---

## বাস্তব উদাহরণ

### উদাহরণ ১: EUR/USD বুলিশ MSS
1. ডেইলি ডাউনট্রেন্ড, উইকলি ডিমান্ড জোনের কাছে
2. 1.0650 এ ডেইলি সুইং লো সুইপ (SSL নেওয়া)
3. 4H এ বিশাল বুলিশ ডিসপ্লেসমেন্ট
4. 1.0720 এ LH এর উপরে বডি ক্লোজ — **বুলিশ MSS**
5. FVG: 1.0690-1.0710 | এন্ট্রি: 1.0700
6. স্টপ: 1.0640 | টার্গেট: 1.0850
7. **ফলাফল: +150 পিপস, 2.5R**

### উদাহরণ ২: গোল্ড বিয়ারিশ MSS
1. $2,480 এর উপরে সুইপ (BSL নেওয়া)
2. 1H এ বিশাল বিয়ারিশ ডিসপ্লেসমেন্ট
3. $2,440 এ HL এর নিচে ব্রেক — **বিয়ারিশ MSS**
4. বিয়ারিশ OB: $2,460-$2,470
5. এন্ট্রি: $2,465 | স্টপ: $2,485 | টার্গেট: $2,380
6. **ফলাফল: +85 পয়েন্ট, 4.25R**

---

## সাধারণ ভুল

<Callout type="warning" title="এড়িয়ে চলুন">

**❌ প্রতিটি ব্রেককে MSS বলা** — প্রকৃত MSS এ ডিসপ্লেসমেন্ট দরকার।

**❌ লিকুইডিটি সুইপ ছাড়া MSS** — সুইপ ছাড়া রিভার্সাল সাময়িক হতে পারে।

**❌ HTF ট্রেন্ডের বিরুদ্ধে MSS ট্রেড** — ডেইলি ট্রেন্ডের বিরুদ্ধে 15M MSS শুধু পুলব্যাক হতে পারে।

**❌ MSS ক্যান্ডেলেই এন্ট্রি** — FVG/OB তে রিট্রেসমেন্টের অপেক্ষা করুন।

</Callout>

---

## সারসংক্ষেপ

| কনসেপ্ট | মূল পয়েন্ট |
|---------|-----------|
| **সংজ্ঞা** | ডিসপ্লেসমেন্ট সহ ট্রেন্ডের বিরুদ্ধে স্ট্রাকচারাল ব্রেক |
| **CHOCH এর সাথে পার্থক্য** | MSS = শক্তিশালী/ইম্পালসিভ CHOCH |
| **সেরা সেটআপ** | Liquidity Sweep → Displacement → MSS → FVG/OB |
| **এন্ট্রি** | MSS এর পরে FVG বা OB তে রিট্রেসমেন্ট |
| **ইনভ্যালিডেশন** | প্রাইস সুইপ পয়েন্টের বাইরে ক্লোজ করলে |

---

## সম্পর্কিত টপিক

- [CHOCH](/bn/smc/choch) — প্রাথমিক রিভার্সাল সিগন্যাল
- [BOS](/bn/smc/bos) — ট্রেন্ড কন্টিনিউয়েশন
- [Fair Value Gap](/bn/smc/fair-value-gap) — MSS পরবর্তী এন্ট্রি জোন
- [অর্ডার ব্লক](/bn/smc/order-blocks) — বিকল্প এন্ট্রি জোন
`);

console.log('\n✅ Batch 1 complete: CHOCH (EN/BN), MSS (EN/BN)');

