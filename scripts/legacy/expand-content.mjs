/**
 * Script to expand all trading content with comprehensive educational material.
 * Run: node scripts/expand-content.mjs
 */
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";

const contentDir = join(process.cwd(), "content");

// ============================================================
// SMC TOPICS - ENGLISH
// ============================================================

const smcTopics = {
  "liquidity-pools": {
    en: {
      title: "Liquidity Pools — Complete Guide",
      description:
        "Master liquidity pools in Smart Money trading. Learn how institutions hunt stops, identify buy-side and sell-side liquidity, and use liquidity sweeps for high-probability trade setups.",
      level: "intermediate",
      order: 6,
      content: `
## What is Liquidity?

In Smart Money Concepts, **liquidity** refers to clusters of stop-loss orders and pending orders sitting at predictable price levels. These clusters exist because retail traders place stops and entries at obvious levels — above swing highs, below swing lows, at round numbers, and at clearly visible support/resistance levels.

**Institutional traders need liquidity to fill their large orders.** They can't simply market-buy millions of dollars without significant slippage. Instead, they engineer price to move toward these stop clusters, triggering them to create the counter-party orders they need.

<Callout type="info" title="The Liquidity Concept">
Think of liquidity as "fuel" for price movement. Price moves FROM liquidity that's been taken TO the next pool of liquidity. Understanding this flow is the foundation of Smart Money trading.
</Callout>

---

## Why Liquidity Matters

1. **Price Magnetism** — Price is attracted to liquidity pools like a magnet
2. **Stop Hunts Explained** — Understanding WHY your stops get hit
3. **Institutional Logic** — Banks need your stops to fill their positions
4. **Trade Direction** — Liquidity shows you WHERE price will go next
5. **Entry Precision** — Sweeps create the best entry opportunities
6. **Risk Protection** — Knowing where liquidity sits helps you place better stops

---

## Types of Liquidity

### Buy-Side Liquidity (BSL)

Buy-Side Liquidity sits **above swing highs** and consists of:
- Stop losses from short sellers
- Buy-stop orders from breakout traders
- Pending buy orders above resistance

\`\`\`
    Buy-Side Liquidity Pool
    ========================
    $$$  $$$  $$$  $$$  $$$   ← Stop losses from shorts
    ─────────────────────────  ← Swing High / Equal Highs
    
         Price below
         looking up
         at BSL "target"
\`\`\`

**When price sweeps BSL:**
- Short sellers get stopped out (they're forced to BUY to close)
- Breakout traders enter LONG
- This creates massive buy orders → institutions SELL into this buying pressure
- Price often reverses after sweeping BSL

### Sell-Side Liquidity (SSL)

Sell-Side Liquidity sits **below swing lows** and consists of:
- Stop losses from long buyers
- Sell-stop orders from breakdown traders
- Pending sell orders below support

\`\`\`
         Price above
         looking down
         at SSL "target"
    
    ─────────────────────────  ← Swing Low / Equal Lows
    $$$  $$$  $$$  $$$  $$$   ← Stop losses from longs
    ========================
    Sell-Side Liquidity Pool
\`\`\`

**When price sweeps SSL:**
- Long buyers get stopped out (they're forced to SELL to close)
- Breakdown traders enter SHORT
- This creates massive sell orders → institutions BUY into this selling pressure
- Price often reverses after sweeping SSL

---

## Internal vs External Liquidity

### External Liquidity

External liquidity refers to **swing highs and swing lows** — the major structural points:
- Major swing highs = BSL targets
- Major swing lows = SSL targets
- These are the "big targets" institutions aim for
- Located outside the current trading range

### Internal Liquidity

Internal liquidity refers to orders **within the current range**:
- Fair Value Gaps (price wants to fill them)
- Order Blocks (revisit for mitigation)
- Imbalances in price delivery
- Located inside the current structure

<Callout type="tip" title="The Flow Rule">
**Price moves from internal liquidity to external liquidity, and from external liquidity to internal liquidity.** This alternating flow is one of the most powerful concepts in SMC.
</Callout>

### The Flow Pattern:

\`\`\`
External (sweep high) → Internal (fill FVG/OB) → External (sweep low) → Internal...

    BSL ←── Price sweeps ──╮
                           │
    FVG ←── Fills gap ─────╯
    OB  ←── Mitigates ─────╮
                           │
    SSL ←── Price sweeps ──╯
\`\`\`

---

## How to Identify Liquidity Pools

### 1. Equal Highs (EQH) — Strong BSL

When price creates two or more highs at the same level, there's significant liquidity above:

\`\`\`
    $$$$$$$$$$$$$$$$$$$  ← Heavy BSL above
    ═══════════════════  ← Equal Highs
    /\\      /\\      /\\
   /  \\    /  \\    /  \\
  /    \\  /    \\  /    \\
\`\`\`

Equal highs are **extremely attractive targets** for institutions because the liquidity is concentrated.

### 2. Equal Lows (EQL) — Strong SSL

\`\`\`
  \\    /  \\    /  \\    /
   \\  /    \\  /    \\  /
    \\/      \\/      \\/
    ═══════════════════  ← Equal Lows
    $$$$$$$$$$$$$$$$$$$  ← Heavy SSL below
\`\`\`

### 3. Trendline Liquidity

Traders who draw trendlines place their stops just beyond them. When the trendline breaks, massive liquidity is released.

### 4. Session Highs/Lows

- Asian session high/low
- London session high/low
- Previous day high/low (PDH/PDL)
- Previous week high/low (PWH/PWL)

### 5. Psychological Round Numbers

Levels like 1.1000, 1.0500, $2,000, etc. attract large order clusters.

---

## Liquidity Sweep — The Key Signal

A **liquidity sweep** occurs when price briefly moves beyond a swing point, triggers the orders there, then reverses. This is the most important signal in SMC trading.

### Anatomy of a Sweep:

\`\`\`
    Before Sweep:           During Sweep:           After Sweep:
    
    ─── Swing High ──      ╮ Wick above           ─── Level broken
                           │ (sweep)                   then...
                           ╰─── Immediate              
                                reversal           STRONG reversal
                                                   move begins
\`\`\`

### What Happens During a Sweep:

1. Price approaches the liquidity pool
2. Momentum pushes through (often as a wick)
3. Stop losses trigger → creates counter-party orders
4. Institutions fill their positions against these triggered orders
5. Price reverses aggressively
6. The swept level becomes a Point of Interest (POI)

---

## Trading Liquidity Sweeps — Complete Strategy

### Setup 1: Sweep and Reverse

**The most common liquidity-based trade:**

1. **Identify** a clear liquidity pool (EQH, EQL, swing H/L)
2. **Wait** for price to sweep (move beyond then reject)
3. **Confirm** with CHOCH or MSS on lower timeframe
4. **Enter** at the Order Block or FVG created during reversal
5. **Stop** beyond the sweep wick
6. **Target** the opposing liquidity pool

### Setup 2: Sweep into Order Block

1. Mark a key Order Block near a liquidity pool
2. Wait for price to sweep through the liquidity AND into the OB
3. This creates "OB + Sweep" confluence — an A+ setup
4. Enter at the OB with confirmation
5. Target opposing liquidity

### Setup 3: Liquidity to Liquidity

1. Identify BOTH BSL and SSL
2. After one side is swept, target the other side
3. Price swept lows → target the highs
4. Price swept highs → target the lows
5. Use OB/FVG entries between the pools

---

## Real Trading Examples

### Example 1: EUR/USD Sell-Side Sweep

**Setup:** EUR/USD Daily chart shows equal lows at 1.0700 with heavy SSL

1. Price ranges between 1.0700-1.0900, creating equal lows
2. Price drops below 1.0700 to 1.0680 (sweeps SSL)
3. Long wick, body closes back above 1.0700
4. 4H shows bullish CHOCH after the sweep
5. Entry: 1.0720 (at the FVG left on 1H)
6. Stop: 1.0670 (below the sweep wick)
7. Target: 1.0900 (BSL above the range)
8. **Result: +180 pips, 3.6R trade**

### Example 2: Gold Buy-Side Sweep

**Setup:** Gold at $2,420 with clear BSL above $2,450

1. Gold rallying, multiple highs near $2,450
2. NY session pushes above to $2,458 (sweeps BSL)
3. Immediate rejection with upper wick
4. 15M bearish CHOCH confirms
5. Entry: $2,445 (retest of the sweep zone)
6. Stop: $2,462 (above sweep wick)
7. Target: $2,390 (SSL below range)
8. **Result: +55 points, 3.2R trade**

### Example 3: BTC Liquidity-to-Liquidity

**Setup:** BTC ranging between $60,000-$65,000

1. SSL below at $59,800 (multiple equal lows)
2. BSL above at $65,200 (swing high)
3. Sunday: Price drops to $59,500 (sweeps SSL)
4. Monday London: Bullish CHOCH on 4H
5. Entry: $60,500 (OB after CHOCH)
6. Stop: $59,200 (below sweep)
7. Target: $65,200 (BSL above)
8. **Result: +$4,700, 3.6R trade**

### Example 4: NAS100 Session Liquidity (Bangladesh Time)

**Setup:** Asian range liquidity swept during London session

1. Asian session range (BST): 12:00 AM - 9:00 AM (BD Time)
2. Range: 18,200 - 18,350
3. London opens (2:00 PM BD), sweeps Asian LOW at 18,180
4. Bullish displacement creates FVG (18,200-18,250)
5. Entry: 18,225 (mid-FVG)
6. Stop: 18,170 (below London sweep)
7. Target: 18,350-18,450 (Asian HIGH / PDH)
8. **Result: +125-225 points, 2.3-4.1R**

---

## Liquidity in Different Market Contexts

### Trending Market
- Liquidity builds on one side (against the trend)
- Pullbacks sweep minor liquidity before continuing
- Major liquidity pools mark potential reversal zones

### Ranging Market
- Both sides build equal liquidity
- Sweeps of one side often target the other
- Double sweeps (both sides taken) signal breakout imminent

### Reversal Zones
- Major trend reversals start with a liquidity sweep
- The sweep is the "final trap" before the reversal move
- Highest R:R trades come from reversal sweeps

---

## Common Mistakes

<Callout type="warning" title="Avoid These Liquidity Errors">

### ❌ Entering Before the Sweep Completes
Don't anticipate the sweep — wait for it to happen and CONFIRM with structure shift. Many apparent sweeps continue as breakouts.

### ❌ Ignoring the Context
A sweep into premium (for BSL) is bearish. A sweep into discount (for SSL) is bullish. The premium/discount context amplifies probability.

### ❌ Not Waiting for Structure Shift
A sweep without CHOCH/MSS confirmation is just a wick. You need the structural break to confirm the reversal.

### ❌ Placing Stops at Obvious Levels
If you can see the liquidity, institutions can too. Place stops beyond the next OB or structural point — not at the obvious level.

### ❌ Trading Against HTF Liquidity Draw
If the Daily has a clear draw on liquidity to the upside, don't short lower timeframe sweeps of BSL. Always align with the HTF draw.

</Callout>

---

## Advanced Liquidity Concepts

### Engineered Liquidity

Institutions CREATE liquidity by:
1. Holding price at a level (inducing entries)
2. Creating false patterns (head & shoulders, triangles)
3. Using news events to trigger cluster entries
4. Building equal highs/lows over time

### Liquidity Draw

**Liquidity draw** means price has an objective — it's being magnetically pulled toward a specific pool:
- Which side has MORE untouched liquidity?
- What does the higher timeframe structure suggest?
- Where is the nearest unmitigated OB/FVG?

### Multi-Timeframe Liquidity

| Timeframe | Liquidity Type | Significance |
|-----------|---------------|--------------|
| Monthly/Weekly | Major swing H/L | Highest — major reversals |
| Daily | Daily/Weekly ranges | High — swing trades |
| 4H | Swing structure | Medium — position entries |
| 1H/15M | Session ranges | Lower — intraday targets |

---

## Risk Management with Liquidity

### Stop Loss Rules:
1. **Never** place stops at obvious swing highs/lows
2. Place stops beyond the ORDER BLOCK past the liquidity
3. Use the sweep wick as your minimum stop distance
4. Add 5-10 pips buffer beyond the extreme

### Position Sizing:

| Setup | Risk |
|-------|------|
| Sweep + CHOCH + OB (A+) | 1.5-2% |
| Sweep + FVG only | 0.75-1% |
| Approaching liquidity (anticipation) | 0.25-0.5% |

---

## FAQ

### How do I know if a sweep will reverse or break through?
Look for: 1) Higher timeframe alignment, 2) Displacement after sweep, 3) CHOCH/MSS formation, 4) Premium/discount location. Sweeps with all 4 factors have highest reversal probability.

### How many times can the same liquidity pool be swept?
Once swept, the liquidity is "used up." New orders can accumulate at the same level over time, but the original pool is gone.

### What's the difference between a sweep and a breakout?
A sweep is a brief pierce that reverses (wick through level). A breakout sustains beyond the level with candle body closes and continuation.

### Should I always wait for a sweep before entering?
Not always. Trend-continuation trades (BOS + OB) don't require sweeps. For reversal trades, always wait for the sweep confirmation.

---

## Summary

| Concept | Key Points |
|---------|-----------|
| **BSL** | Liquidity above highs — stops of shorts, buy-stops |
| **SSL** | Liquidity below lows — stops of longs, sell-stops |
| **Internal** | FVGs, OBs within current range |
| **External** | Swing highs/lows outside range |
| **Flow** | Internal → External → Internal (alternating) |
| **Sweep** | Price takes liquidity then reverses |
| **Draw** | Direction price is being pulled toward |
| **Best Trade** | Sweep + CHOCH + OB/FVG entry |

---

## Related Topics

- [Internal & External Liquidity](/en/smc/internal-external-liquidity) — Detailed flow analysis
- [Fair Value Gap](/en/smc/fair-value-gap) — Internal liquidity targets
- [Order Blocks](/en/smc/order-blocks) — Entry zones after sweeps
- [Equal Highs & Lows](/en/smc/equal-highs-lows) — Key liquidity formations
- [Inducement](/en/smc/inducement) — Engineered liquidity traps
- [Kill Zones](/en/smc/kill-zones) — When sweeps are most likely
`,
    },
    bn: {
      title: "লিকুইডিটি পুল — সম্পূর্ণ গাইড",
      description:
        "Smart Money ট্রেডিংয়ে লিকুইডিটি পুল আয়ত্ত করুন। ইনস্টিটিউশন কীভাবে স্টপ হান্ট করে, buy-side ও sell-side liquidity চিহ্নিত করা, এবং হাই-প্রোবাবিলিটি ট্রেড সেটআপ শিখুন।",
      level: "intermediate",
      order: 6,
      content: `
## লিকুইডিটি কী?

Smart Money Concepts এ, **লিকুইডিটি** বলতে বোঝায় স্টপ-লস অর্ডার এবং পেন্ডিং অর্ডারের ক্লাস্টার যা অনুমানযোগ্য প্রাইস লেভেলে অবস্থান করে। এই ক্লাস্টারগুলো বিদ্যমান কারণ রিটেইল ট্রেডাররা স্টপ ও এন্ট্রি সুস্পষ্ট জায়গায় রাখে — সুইং হাই এর উপরে, সুইং লো এর নিচে, রাউন্ড নম্বরে, এবং স্পষ্ট সাপোর্ট/রেজিস্ট্যান্স লেভেলে।

**ইনস্টিটিউশনাল ট্রেডারদের তাদের বড় অর্ডার পূরণ করতে লিকুইডিটি প্রয়োজন।** তারা মিলিয়ন ডলার মার্কেট-বাই করতে পারে না উল্লেখযোগ্য স্লিপেজ ছাড়া। তার বদলে, তারা প্রাইসকে এই স্টপ ক্লাস্টারের দিকে নিয়ে যায় এবং ট্রিগার করে।

<Callout type="info" title="লিকুইডিটি কনসেপ্ট">
লিকুইডিটিকে প্রাইস মুভমেন্টের "জ্বালানি" হিসেবে ভাবুন। প্রাইস এক লিকুইডিটি পুল থেকে অন্য লিকুইডিটি পুলের দিকে চলে। এই ফ্লো বোঝা Smart Money ট্রেডিংয়ের ভিত্তি।
</Callout>

---

## লিকুইডিটি কেন গুরুত্বপূর্ণ

1. **প্রাইস ম্যাগনেটিজম** — প্রাইস লিকুইডিটি পুলের দিকে চুম্বকের মতো আকৃষ্ট হয়
2. **স্টপ হান্ট ব্যাখ্যা** — কেন আপনার স্টপ হিট হয় তা বোঝা
3. **ইনস্টিটিউশনাল লজিক** — ব্যাংকগুলোর আপনার স্টপ দরকার তাদের পজিশন পূরণ করতে
4. **ট্রেড ডাইরেকশন** — লিকুইডিটি দেখায় প্রাইস পরবর্তীতে কোথায় যাবে
5. **এন্ট্রি প্রিসিশন** — সুইপ সেরা এন্ট্রি সুযোগ তৈরি করে

---

## লিকুইডিটির প্রকারভেদ

### Buy-Side Liquidity (BSL)

Buy-Side Liquidity **সুইং হাই এর উপরে** অবস্থান করে:
- শর্ট সেলারদের স্টপ লস
- ব্রেকআউট ট্রেডারদের বাই-স্টপ অর্ডার
- রেজিস্ট্যান্সের উপরে পেন্ডিং বাই অর্ডার

\`\`\`
    Buy-Side Liquidity Pool
    ========================
    $$$  $$$  $$$  $$$  $$$   ← শর্টদের স্টপ লস
    ─────────────────────────  ← সুইং হাই / Equal Highs
    
         নিচে প্রাইস
         BSL "টার্গেট" এর
         দিকে তাকাচ্ছে
\`\`\`

**যখন প্রাইস BSL সুইপ করে:**
- শর্ট সেলাররা স্টপ আউট হয় (তারা বাই করতে বাধ্য হয়)
- ব্রেকআউট ট্রেডাররা লং এ প্রবেশ করে
- এটি বিশাল বাই অর্ডার তৈরি করে → ইনস্টিটিউশন এই বায়িং প্রেশারে SELL করে
- BSL সুইপের পরে প্রাইস প্রায়ই রিভার্স করে

### Sell-Side Liquidity (SSL)

Sell-Side Liquidity **সুইং লো এর নিচে** অবস্থান করে:
- লং বায়ারদের স্টপ লস
- ব্রেকডাউন ট্রেডারদের সেল-স্টপ অর্ডার
- সাপোর্টের নিচে পেন্ডিং সেল অর্ডার

**যখন প্রাইস SSL সুইপ করে:**
- লং বায়াররা স্টপ আউট হয় (তারা সেল করতে বাধ্য হয়)
- ব্রেকডাউন ট্রেডাররা শর্ট এ প্রবেশ করে
- ইনস্টিটিউশন এই সেলিং প্রেশারে BUY করে
- SSL সুইপের পরে প্রাইস প্রায়ই রিভার্স করে

---

## Internal বনাম External Liquidity

### External Liquidity

External liquidity বলতে **সুইং হাই এবং সুইং লো** বোঝায়:
- মেজর সুইং হাই = BSL টার্গেট
- মেজর সুইং লো = SSL টার্গেট
- বর্তমান ট্রেডিং রেঞ্জের বাইরে অবস্থিত

### Internal Liquidity

Internal liquidity বলতে রেঞ্জের **ভিতরের** অর্ডার বোঝায়:
- Fair Value Gaps (প্রাইস এগুলো পূরণ করতে চায়)
- Order Blocks (মিটিগেশনের জন্য রিভিজিট)
- প্রাইস ডেলিভারিতে ইমব্যালেন্স

<Callout type="tip" title="ফ্লো রুল">
**প্রাইস internal liquidity থেকে external liquidity তে, এবং external liquidity থেকে internal liquidity তে চলে।** এই পরিবর্তনশীল ফ্লো SMC এর সবচেয়ে শক্তিশালী কনসেপ্টগুলোর একটি।
</Callout>

---

## লিকুইডিটি পুল চিহ্নিতকরণ

### ১. Equal Highs (EQH) — শক্তিশালী BSL

যখন প্রাইস একই লেভেলে দুই বা তার বেশি হাই তৈরি করে, উপরে গুরুত্বপূর্ণ লিকুইডিটি থাকে। Equal highs ইনস্টিটিউশনের জন্য **অত্যন্ত আকর্ষণীয় টার্গেট** কারণ লিকুইডিটি কেন্দ্রীভূত।

### ২. Equal Lows (EQL) — শক্তিশালী SSL

একই লেভেলে একাধিক লো = নিচে ঘনীভূত liquidity।

### ৩. ট্রেন্ডলাইন লিকুইডিটি

ট্রেন্ডলাইন অনুসারীরা তাদের স্টপ ট্রেন্ডলাইনের ঠিক বাইরে রাখে। ব্রেক হলে বিশাল লিকুইডিটি রিলিজ হয়।

### ৪. সেশন হাই/লো

- এশিয়ান সেশন হাই/লো
- লন্ডন সেশন হাই/লো
- প্রিভিয়াস ডে হাই/লো (PDH/PDL)
- প্রিভিয়াস উইক হাই/লো (PWH/PWL)

### ৫. সাইকোলজিক্যাল রাউন্ড নম্বর

1.1000, 1.0500, $2,000 ইত্যাদি লেভেলে বড় অর্ডার ক্লাস্টার জমা হয়।

---

## লিকুইডিটি সুইপ — মূল সিগন্যাল

একটি **লিকুইডিটি সুইপ** ঘটে যখন প্রাইস সংক্ষেপে একটি সুইং পয়েন্টের বাইরে যায়, সেখানকার অর্ডার ট্রিগার করে, তারপর রিভার্স করে।

### সুইপের সময় কী ঘটে:

1. প্রাইস লিকুইডিটি পুলের কাছে আসে
2. মোমেন্টাম পুশ করে (প্রায়ই উইক হিসেবে)
3. স্টপ লস ট্রিগার হয় → কাউন্টার-পার্টি অর্ডার তৈরি হয়
4. ইনস্টিটিউশন এই ট্রিগার হওয়া অর্ডারের বিপরীতে পজিশন পূরণ করে
5. প্রাইস আগ্রাসীভাবে রিভার্স করে

---

## লিকুইডিটি সুইপ ট্রেডিং কৌশল

### সেটআপ ১: সুইপ এন্ড রিভার্স

1. **চিহ্নিত করুন** একটি স্পষ্ট liquidity pool (EQH, EQL, সুইং H/L)
2. **অপেক্ষা করুন** প্রাইস সুইপ করার (বাইরে গিয়ে রিজেক্ট)
3. **কনফার্ম** করুন CHOCH বা MSS দিয়ে লোয়ার টাইমফ্রেমে
4. **এন্ট্রি** নিন Order Block বা FVG তে
5. **স্টপ** সুইপ উইকের বাইরে
6. **টার্গেট** বিপরীত লিকুইডিটি পুল

### সেটআপ ২: সুইপ ইনটু অর্ডার ব্লক

1. একটি কী Order Block ও তার কাছের লিকুইডিটি মার্ক করুন
2. প্রাইস লিকুইডিটি সুইপ করে OB তে যাওয়ার অপেক্ষা করুন
3. "OB + Sweep" কনফ্লুয়েন্স = A+ সেটআপ

### সেটআপ ৩: লিকুইডিটি টু লিকুইডিটি

1. BSL ও SSL দুটোই চিহ্নিত করুন
2. এক দিক সুইপ হলে, অন্য দিক টার্গেট করুন
3. লো সুইপ হলে → হাই টার্গেট করুন
4. হাই সুইপ হলে → লো টার্গেট করুন

---

## বাস্তব ট্রেডিং উদাহরণ

### উদাহরণ ১: EUR/USD সেল-সাইড সুইপ

**সেটআপ:** EUR/USD ডেইলি চার্টে 1.0700 তে equal lows

1. 1.0700-1.0900 এর মধ্যে রেঞ্জ, equal lows তৈরি
2. প্রাইস 1.0700 এর নিচে 1.0680 তে নামে (SSL সুইপ)
3. লং উইক, বডি 1.0700 এর উপরে ক্লোজ
4. 4H এ বুলিশ CHOCH
5. এন্ট্রি: 1.0720 (1H FVG তে)
6. স্টপ: 1.0670 (সুইপ উইকের নিচে)
7. টার্গেট: 1.0900 (রেঞ্জের উপরে BSL)
8. **ফলাফল: +180 পিপস, 3.6R ট্রেড**

### উদাহরণ ২: গোল্ড বাই-সাইড সুইপ

**সেটআপ:** $2,450 হাই এর উপরে BSL

1. গোল্ড র‍্যালি করছে, $2,450 এর কাছে একাধিক হাই
2. NY সেশনে $2,458 পর্যন্ত পুশ (BSL সুইপ)
3. তাৎক্ষণিক রিজেকশন ক্যান্ডেল
4. 15M বিয়ারিশ CHOCH কনফার্ম
5. এন্ট্রি: $2,445 | স্টপ: $2,462 | টার্গেট: $2,390
6. **ফলাফল: +55 পয়েন্ট, 3.2R ট্রেড**

### উদাহরণ ৩: NAS100 সেশন লিকুইডিটি (বাংলাদেশ সময়)

1. এশিয়ান সেশন রেঞ্জ (রাত ১২:০০ - সকাল ৯:০০ BD): 18,200-18,350
2. লন্ডন ওপেন (দুপুর ২:০০ BD) এশিয়ান লো সুইপ করে 18,180
3. বুলিশ ডিসপ্লেসমেন্ট FVG তৈরি করে (18,200-18,250)
4. এন্ট্রি: 18,225 | স্টপ: 18,170 | টার্গেট: 18,350+
5. **ফলাফল: +125-225 পয়েন্ট**

---

## সাধারণ ভুল

<Callout type="warning" title="এই ভুলগুলো এড়িয়ে চলুন">

### ❌ সুইপ সম্পন্ন হওয়ার আগে এন্ট্রি
সুইপ অনুমান করবেন না — ঘটার ও স্ট্রাকচার শিফট কনফার্ম হওয়ার অপেক্ষা করুন।

### ❌ কন্টেক্সট উপেক্ষা করা
প্রিমিয়ামে BSL সুইপ = বিয়ারিশ। ডিসকাউন্টে SSL সুইপ = বুলিশ।

### ❌ স্ট্রাকচার শিফটের অপেক্ষা না করা
CHOCH/MSS কনফার্মেশন ছাড়া সুইপ শুধু একটি উইক। রিভার্সাল কনফার্মের জন্য স্ট্রাকচারাল ব্রেক দরকার।

### ❌ সুস্পষ্ট লেভেলে স্টপ রাখা
আপনি যদি লিকুইডিটি দেখতে পান, ইনস্টিটিউশনও দেখতে পায়। পরবর্তী OB এর বাইরে স্টপ রাখুন।

</Callout>

---

## অ্যাডভান্সড কনসেপ্ট

### লিকুইডিটি ড্র

**লিকুইডিটি ড্র** মানে প্রাইসের একটি উদ্দেশ্য আছে — নির্দিষ্ট পুলের দিকে চুম্বকের মতো টানা হচ্ছে:
- কোন দিকে বেশি অস্পৃশ্ট লিকুইডিটি আছে?
- হায়ার টাইমফ্রেম স্ট্রাকচার কী বলছে?
- সবচেয়ে কাছের আনমিটিগেটেড OB/FVG কোথায়?

### মাল্টি-টাইমফ্রেম লিকুইডিটি

| টাইমফ্রেম | লিকুইডিটি টাইপ | গুরুত্ব |
|-----------|---------------|---------|
| মান্থলি/উইকলি | মেজর সুইং H/L | সর্বোচ্চ |
| ডেইলি | ডেইলি/উইকলি রেঞ্জ | উচ্চ |
| 4H | সুইং স্ট্রাকচার | মাঝারি |
| 1H/15M | সেশন রেঞ্জ | ইন্ট্রাডে |

---

## রিস্ক ম্যানেজমেন্ট

### স্টপ লস নিয়ম:
1. সুস্পষ্ট সুইং হাই/লোতে **কখনো** স্টপ রাখবেন না
2. লিকুইডিটির পরের ORDER BLOCK এর বাইরে স্টপ রাখুন
3. সুইপ উইককে ন্যূনতম স্টপ দূরত্ব হিসেবে ব্যবহার করুন
4. চরম বিন্দুর বাইরে ৫-১০ পিপ বাফার যোগ করুন

---

## সারসংক্ষেপ

| কনসেপ্ট | মূল পয়েন্ট |
|---------|-----------|
| **BSL** | হাই এর উপরে লিকুইডিটি — শর্টদের স্টপ |
| **SSL** | লো এর নিচে লিকুইডিটি — লংদের স্টপ |
| **Internal** | রেঞ্জের মধ্যে FVG, OB |
| **External** | রেঞ্জের বাইরে সুইং হাই/লো |
| **ফ্লো** | Internal → External → Internal |
| **সুইপ** | প্রাইস লিকুইডিটি নিয়ে রিভার্স করে |
| **ড্র** | প্রাইস যে দিকে টানা হচ্ছে |
| **সেরা ট্রেড** | Sweep + CHOCH + OB/FVG এন্ট্রি |

---

## সম্পর্কিত টপিক

- [Internal ও External Liquidity](/bn/smc/internal-external-liquidity) — বিস্তারিত ফ্লো অ্যানালাইসিস
- [Fair Value Gap](/bn/smc/fair-value-gap) — Internal liquidity টার্গেট
- [অর্ডার ব্লক](/bn/smc/order-blocks) — সুইপের পরে এন্ট্রি জোন
- [Equal Highs ও Lows](/bn/smc/equal-highs-lows) — মূল লিকুইডিটি ফর্মেশন
- [Inducement](/bn/smc/inducement) — ইঞ্জিনিয়ার্ড লিকুইডিটি ট্র্যাপ
`,
    },
  },

  "premium-discount": {
    en: {
      title: "Premium & Discount Zones — Complete Guide",
      description:
        "Master the Premium and Discount concept in Smart Money trading. Learn to identify institutional pricing zones, calculate equilibrium, and enter trades at optimal price levels.",
      level: "intermediate",
      order: 7,
      content: `
## What is Premium & Discount?

The Premium & Discount concept divides any price range into zones based on the **50% equilibrium level (EQ)**. The idea is simple but powerful:

- **Premium Zone** (above 50%) = Price is expensive → Look to SELL
- **Discount Zone** (below 50%) = Price is cheap → Look to BUY
- **Equilibrium** (50% level) = Fair value — no edge

<Callout type="info" title="Institutional Pricing Logic">
Banks and institutions always seek the best possible price. They buy in discount zones and sell in premium zones. By identifying these zones, you trade alongside institutional order flow.
</Callout>

\`\`\`
    100% ─── Swing High ───────────── PREMIUM ZONE
     90% ─── Deep Premium              (Sell here)
     80% ─── 
     70% ─── Shallow Premium
     ─────────────────────────────────────────────
     50% ─── EQUILIBRIUM (Fair Value)
     ─────────────────────────────────────────────
     30% ─── Shallow Discount
     20% ─── 
     10% ─── Deep Discount            DISCOUNT ZONE
      0% ─── Swing Low ──────────────  (Buy here)
\`\`\`

---

## Why Premium & Discount Matters

1. **Optimal Entries** — Enter at the best possible price within a move
2. **Higher R:R** — Buying in discount gives more room to the upside
3. **Institutional Alignment** — Trade where big players are active
4. **Filter Bad Trades** — Avoid buying in premium or selling in discount
5. **Confluence** — Adds context to OBs, FVGs, and other POIs

---

## How to Calculate Premium & Discount

### Step-by-Step:

1. Identify the **relevant range** (swing high to swing low)
2. Calculate the 50% level: (High + Low) ÷ 2 = Equilibrium
3. Everything above EQ = Premium
4. Everything below EQ = Discount

### Example Calculation:

- Swing High: 1.1000
- Swing Low: 1.0800
- Range: 200 pips
- **Equilibrium: 1.0900** (50%)
- Premium: 1.0900 - 1.1000
- Discount: 1.0800 - 1.0900

### Fibonacci Overlay:

Many traders use Fibonacci retracement to visualize:
- 0% = Swing Low (start of discount)
- 50% = Equilibrium
- 100% = Swing High (start of premium)
- **OTE (Optimal Trade Entry):** 61.8% - 78.6% fib level

---

## Using Premium & Discount in Trading

### Bullish Bias (Looking to Buy):

When your bias is bullish, ONLY look for entries in the **discount zone**:
- Wait for price to retrace into discount
- Find an Order Block or FVG in discount
- Enter long with stop below the range low
- Target: Premium zone or BSL above

### Bearish Bias (Looking to Sell):

When your bias is bearish, ONLY look for entries in the **premium zone**:
- Wait for price to rally into premium
- Find an Order Block or FVG in premium
- Enter short with stop above the range high
- Target: Discount zone or SSL below

<Callout type="warning" title="Critical Rule">
**Never buy in premium. Never sell in discount.** This single rule eliminates most bad trades. If an Order Block is in premium and you're bullish, skip it — wait for a discount OB.
</Callout>

---

## Premium & Discount with Order Blocks

Not all Order Blocks are equal. Their location in premium/discount determines quality:

| OB Location | Bias | Quality |
|-------------|------|---------|
| Bullish OB in Discount | Bullish | ⭐⭐⭐⭐⭐ (Best) |
| Bullish OB in Premium | Bullish | ⭐⭐ (Risky) |
| Bearish OB in Premium | Bearish | ⭐⭐⭐⭐⭐ (Best) |
| Bearish OB in Discount | Bearish | ⭐⭐ (Risky) |

### The Rule:
- Bullish setups → ONLY take OBs in discount
- Bearish setups → ONLY take OBs in premium

---

## Premium & Discount with FVG

Same logic applies to Fair Value Gaps:
- A bullish FVG in discount = High probability fill and continuation up
- A bullish FVG in premium = May fill but less likely to hold
- A bearish FVG in premium = High probability fill and continuation down
- A bearish FVG in discount = May fill but less likely to hold

---

## Multi-Timeframe Premium & Discount

### The Nested Approach:

Each timeframe has its own premium/discount zones:

1. **Weekly Range** → Determine if price is in weekly P or D
2. **Daily Range** → Within that, find daily P or D
3. **4H Range** → Refine further
4. **Entry TF** → Find exact entry

**The best trades:** Higher TF discount + Lower TF discount + OB = Maximum confluence

### Example:
- Weekly: Price in DISCOUNT (bullish weekly bias)
- Daily: Price pulling back into daily DISCOUNT
- 4H: Bullish OB sitting in the 4H discount
- 15M: Entry confirmation at the OB
- **= A+ long setup with multi-TF discount alignment**

---

## Real Trading Examples

### Example 1: EUR/USD Discount Buy

**Context:** EUR/USD 4H range from 1.0800 (low) to 1.1000 (high)

1. EQ = 1.0900 | Discount = Below 1.0900
2. Price drops to 1.0840 (deep discount - 20% level)
3. Bullish OB identified at 1.0835-1.0850
4. Entry: 1.0845 (OB in discount)
5. Stop: 1.0795 (below swing low)
6. Target: 1.0980 (premium zone)
7. **Result: +135 pips, 2.7R trade**

### Example 2: Gold Premium Sell

**Context:** Gold 4H range from $2,350 (low) to $2,450 (high)

1. EQ = $2,400 | Premium = Above $2,400
2. Price rallies to $2,435 (deep premium - 85% level)
3. Bearish OB from the previous high at $2,430-$2,440
4. Entry: $2,435 (OB in premium)
5. Stop: $2,455 (above swing high)
6. Target: $2,370 (discount zone)
7. **Result: +65 points, 3.25R trade**

### Example 3: NAS100 Multi-TF P&D

**Context:** Daily discount + 4H discount alignment

1. Daily range: 17,800-18,600 | Daily EQ: 18,200
2. Price at 18,050 = Daily DISCOUNT ✓
3. 4H range: 17,950-18,150 | 4H EQ: 18,050
4. Price at 17,980 = 4H DISCOUNT ✓ (double discount)
5. 4H Bullish OB at 17,960-17,980
6. Entry: 17,975 | Stop: 17,940 | Target: 18,400
7. **Result: +425 points, 12.1R trade**

---

## OTE (Optimal Trade Entry)

OTE is the **sweet spot** within the premium/discount framework — specifically the **61.8% to 78.6% retracement** level of a move:

\`\`\`
    100% ─── Swing High
     78.6% ─── ╮
               │  OTE ZONE (Optimal Trade Entry)
     61.8% ─── ╯
     50%  ─── Equilibrium
      0%  ─── Swing Low
\`\`\`

### Why OTE Works:
- Deep enough to be in premium/discount
- Not so deep that it risks breaking structure
- Institutional positions cluster here
- Best risk-to-reward ratio zone

---

## Common Mistakes

<Callout type="warning" title="Avoid These P&D Errors">

### ❌ Buying in Premium
The #1 mistake — seeing a bullish signal in premium and taking it. You're buying expensive and have limited upside.

### ❌ Using the Wrong Range
The range you select determines everything. Using too small a range (5M) for a 4H trade gives wrong P&D levels.

### ❌ Ignoring Multi-TF Context
Price can be in 15M discount but 4H premium. The higher TF always wins — if 4H says premium, don't buy.

### ❌ Trading at Equilibrium
The 50% level has no edge. Price can go either way from EQ. Only trade at clear premium (70%+) or discount (30%-).

### ❌ Not Updating Ranges
As new highs/lows form, your range changes. Always use the MOST RECENT relevant range.

</Callout>

---

## FAQ

### Which range should I use?
Use the range relevant to your trade timeframe. For 4H trades, use the 4H swing range. For daily trades, use the daily range. The range that created the current structure is your reference.

### Can I sell in discount or buy in premium?
Technically yes, but only with very strong confluence (HTF alignment, liquidity sweep, displacement). As a rule, avoid it — the probabilities are against you.

### How does P&D work with trend?
In an uptrend, each pullback into discount is a buying opportunity. In a downtrend, each rally into premium is a selling opportunity. P&D helps you time entries with the trend.

### What if an Order Block spans both zones?
Use only the portion in the correct zone. If a bullish OB starts in discount and extends into premium, only the discount portion is valid for entries.

---

## Summary

| Concept | Key Points |
|---------|-----------|
| **Premium** | Above 50% EQ — expensive — look to sell |
| **Discount** | Below 50% EQ — cheap — look to buy |
| **EQ** | 50% level — fair value — no edge |
| **OTE** | 61.8%-78.6% — optimal entry zone |
| **Rule** | Never buy premium, never sell discount |
| **Best Setup** | Multi-TF P&D alignment + OB/FVG |
| **Range** | Use the most recent relevant swing range |

---

## Related Topics

- [Order Blocks](/en/smc/order-blocks) — Entry zones within P&D
- [Fair Value Gap](/en/smc/fair-value-gap) — Gaps within P&D context
- [OTE (Optimal Trade Entry)](/en/ict/ote) — Fibonacci precision
- [Liquidity Pools](/en/smc/liquidity-pools) — Targets from P&D zones
- [Kill Zones](/en/smc/kill-zones) — When P&D setups activate
`,
    },
    bn: {
      title: "Premium ও Discount জোন — সম্পূর্ণ গাইড",
      description:
        "Smart Money ট্রেডিংয়ে Premium ও Discount কনসেপ্ট আয়ত্ত করুন। ইনস্টিটিউশনাল প্রাইসিং জোন চিহ্নিত করা, ইকুইলিব্রিয়াম ক্যালকুলেট করা, এবং অপটিমাল লেভেলে ট্রেড শিখুন।",
      level: "intermediate",
      order: 7,
      content: `
## Premium ও Discount কী?

Premium & Discount কনসেপ্ট যেকোনো প্রাইস রেঞ্জকে **50% ইকুইলিব্রিয়াম লেভেল (EQ)** এর ভিত্তিতে জোনে ভাগ করে:

- **Premium Zone** (50% এর উপরে) = প্রাইস ব্যয়বহুল → SELL খুঁজুন
- **Discount Zone** (50% এর নিচে) = প্রাইস সস্তা → BUY খুঁজুন
- **Equilibrium** (50% লেভেল) = ন্যায্য মূল্য — কোনো এজ নেই

<Callout type="info" title="ইনস্টিটিউশনাল প্রাইসিং লজিক">
ব্যাংক ও ইনস্টিটিউশন সর্বদা সেরা সম্ভাব্য মূল্য খোঁজে। তারা discount zone এ কেনে এবং premium zone এ বিক্রি করে। এই জোন চিহ্নিত করে আপনি ইনস্টিটিউশনাল অর্ডার ফ্লোর সাথে ট্রেড করতে পারেন।
</Callout>

\`\`\`
    100% ─── সুইং হাই ────────────── PREMIUM ZONE
     90% ─── ডিপ প্রিমিয়াম            (এখানে সেল)
     70% ─── শ্যালো প্রিমিয়াম
     ─────────────────────────────────────────────
     50% ─── EQUILIBRIUM (ন্যায্য মূল্য)
     ─────────────────────────────────────────────
     30% ─── শ্যালো ডিসকাউন্ট
     10% ─── ডিপ ডিসকাউন্ট           DISCOUNT ZONE
      0% ─── সুইং লো ────────────────  (এখানে বাই)
\`\`\`

---

## Premium & Discount কেন গুরুত্বপূর্ণ

1. **অপটিমাল এন্ট্রি** — একটি মুভের মধ্যে সেরা সম্ভাব্য দামে প্রবেশ করুন
2. **উচ্চ R:R** — ডিসকাউন্টে কেনা মানে উপরে যাওয়ার বেশি জায়গা
3. **ইনস্টিটিউশনাল অ্যালাইনমেন্ট** — যেখানে বড় প্লেয়াররা সক্রিয় সেখানে ট্রেড
4. **খারাপ ট্রেড ফিল্টার** — প্রিমিয়ামে কেনা বা ডিসকাউন্টে বেচা এড়ান
5. **কনফ্লুয়েন্স** — OB, FVG এবং অন্যান্য POI তে কন্টেক্সট যোগ করে

---

## Premium & Discount ক্যালকুলেশন

### ধাপে ধাপে:

1. **প্রাসঙ্গিক রেঞ্জ** চিহ্নিত করুন (সুইং হাই থেকে সুইং লো)
2. 50% লেভেল ক্যালকুলেট করুন: (High + Low) ÷ 2 = Equilibrium
3. EQ এর উপরে সবকিছু = Premium
4. EQ এর নিচে সবকিছু = Discount

### উদাহরণ:

- সুইং হাই: 1.1000
- সুইং লো: 1.0800
- রেঞ্জ: 200 পিপস
- **ইকুইলিব্রিয়াম: 1.0900** (50%)
- Premium: 1.0900 - 1.1000
- Discount: 1.0800 - 1.0900

---

## ট্রেডিংয়ে ব্যবহার

### বুলিশ বায়াস (কেনার সুযোগ খুঁজছেন):

যখন আপনার বায়াস বুলিশ, **শুধুমাত্র discount zone** এ এন্ট্রি খুঁজুন:
- প্রাইস ডিসকাউন্টে রিট্রেস করার অপেক্ষা করুন
- ডিসকাউন্টে Order Block বা FVG খুঁজুন
- রেঞ্জ লো এর নিচে স্টপ দিয়ে লং এন্ট্রি
- টার্গেট: Premium zone বা উপরে BSL

### বিয়ারিশ বায়াস (বেচার সুযোগ খুঁজছেন):

যখন আপনার বায়াস বিয়ারিশ, **শুধুমাত্র premium zone** এ এন্ট্রি খুঁজুন:
- প্রাইস প্রিমিয়ামে র‍্যালি করার অপেক্ষা করুন
- প্রিমিয়ামে Order Block বা FVG খুঁজুন
- রেঞ্জ হাই এর উপরে স্টপ দিয়ে শর্ট এন্ট্রি
- টার্গেট: Discount zone বা নিচে SSL

<Callout type="warning" title="গুরুত্বপূর্ণ নিয়ম">
**কখনো premium এ কিনবেন না। কখনো discount এ বিক্রি করবেন না।** এই একটি নিয়ম বেশিরভাগ খারাপ ট্রেড দূর করে।
</Callout>

---

## Premium & Discount + Order Block

সব Order Block সমান নয়। Premium/Discount এ তাদের অবস্থান গুণমান নির্ধারণ করে:

| OB অবস্থান | বায়াস | গুণমান |
|-------------|------|---------|
| ডিসকাউন্টে Bullish OB | বুলিশ | ⭐⭐⭐⭐⭐ (সেরা) |
| প্রিমিয়ামে Bullish OB | বুলিশ | ⭐⭐ (ঝুঁকিপূর্ণ) |
| প্রিমিয়ামে Bearish OB | বিয়ারিশ | ⭐⭐⭐⭐⭐ (সেরা) |
| ডিসকাউন্টে Bearish OB | বিয়ারিশ | ⭐⭐ (ঝুঁকিপূর্ণ) |

---

## OTE (Optimal Trade Entry)

OTE হলো premium/discount ফ্রেমওয়ার্কের মধ্যে **সুইট স্পট** — বিশেষভাবে **61.8% থেকে 78.6% রিট্রেসমেন্ট** লেভেল:

\`\`\`
    100% ─── সুইং হাই
     78.6% ─── ╮
               │  OTE ZONE (অপটিমাল ট্রেড এন্ট্রি)
     61.8% ─── ╯
     50%  ─── ইকুইলিব্রিয়াম
      0%  ─── সুইং লো
\`\`\`

### OTE কেন কাজ করে:
- যথেষ্ট গভীর premium/discount এ থাকে
- এত গভীর নয় যে স্ট্রাকচার ভাঙার ঝুঁকি হয়
- ইনস্টিটিউশনাল পজিশন এখানে ক্লাস্টার করে
- সেরা risk-to-reward রেশিও জোন

---

## বাস্তব ট্রেডিং উদাহরণ

### উদাহরণ ১: EUR/USD ডিসকাউন্ট বাই

1. 4H রেঞ্জ: 1.0800 (লো) থেকে 1.1000 (হাই)
2. EQ = 1.0900 | ডিসকাউন্ট = 1.0900 এর নিচে
3. প্রাইস 1.0840 তে নামে (ডিপ ডিসকাউন্ট)
4. 1.0835-1.0850 তে বুলিশ OB
5. এন্ট্রি: 1.0845 | স্টপ: 1.0795 | টার্গেট: 1.0980
6. **ফলাফল: +135 পিপস, 2.7R ট্রেড**

### উদাহরণ ২: গোল্ড প্রিমিয়াম সেল

1. 4H রেঞ্জ: $2,350 (লো) থেকে $2,450 (হাই)
2. EQ = $2,400 | প্রিমিয়াম = $2,400 এর উপরে
3. প্রাইস $2,435 তে র‍্যালি (ডিপ প্রিমিয়াম)
4. $2,430-$2,440 তে বিয়ারিশ OB
5. এন্ট্রি: $2,435 | স্টপ: $2,455 | টার্গেট: $2,370
6. **ফলাফল: +65 পয়েন্ট, 3.25R ট্রেড**

---

## সাধারণ ভুল

<Callout type="warning" title="এই ভুলগুলো এড়িয়ে চলুন">

### ❌ Premium এ কেনা
সবচেয়ে বড় ভুল। আপনি ব্যয়বহুল দামে কিনছেন এবং উপরে যাওয়ার জায়গা সীমিত।

### ❌ ভুল রেঞ্জ ব্যবহার
আপনি যে রেঞ্জ নির্বাচন করেন তা সবকিছু নির্ধারণ করে। 4H ট্রেডের জন্য 5M রেঞ্জ ব্যবহার করলে ভুল P&D লেভেল পাবেন।

### ❌ মাল্টি-TF কন্টেক্সট উপেক্ষা
প্রাইস 15M ডিসকাউন্টে কিন্তু 4H প্রিমিয়ামে হতে পারে। হায়ার TF সর্বদা জেতে।

### ❌ ইকুইলিব্রিয়ামে ট্রেড করা
50% লেভেলে কোনো এজ নেই। শুধু স্পষ্ট premium (70%+) বা discount (30%-) এ ট্রেড করুন।

</Callout>

---

## সারসংক্ষেপ

| কনসেপ্ট | মূল পয়েন্ট |
|---------|-----------|
| **Premium** | 50% EQ এর উপরে — ব্যয়বহুল — সেল খুঁজুন |
| **Discount** | 50% EQ এর নিচে — সস্তা — বাই খুঁজুন |
| **EQ** | 50% লেভেল — ন্যায্য মূল্য — কোনো এজ নেই |
| **OTE** | 61.8%-78.6% — অপটিমাল এন্ট্রি জোন |
| **নিয়ম** | Premium এ কিনবেন না, discount এ বিক্রি করবেন না |
| **সেরা সেটআপ** | মাল্টি-TF P&D alignment + OB/FVG |

---

## সম্পর্কিত টপিক

- [অর্ডার ব্লক](/bn/smc/order-blocks) — P&D এর মধ্যে এন্ট্রি জোন
- [Fair Value Gap](/bn/smc/fair-value-gap) — P&D কন্টেক্সটে গ্যাপ
- [OTE](/bn/ict/ote) — ফিবোনাচি প্রিসিশন
- [লিকুইডিটি পুল](/bn/smc/liquidity-pools) — P&D জোন থেকে টার্গেট
`,
    },
  },
};

// Helper to write MDX file
function writeMdx(filePath, { title, description, level, order, content }) {
  const fullContent = `---
title: "${title}"
description: "${description}"
level: ${level}
order: ${order}
lastUpdated: "2026-05-11"
---
${content}
`;
  writeFileSync(filePath, fullContent, "utf-8");
  console.log(`✅ Written: ${filePath}`);
}

// Write SMC topics
for (const [slug, langs] of Object.entries(smcTopics)) {
  writeMdx(join(contentDir, "en", "smc", `${slug}.mdx`), langs.en);
  writeMdx(join(contentDir, "bn", "smc", `${slug}.mdx`), langs.bn);
}

console.log("\n✅ SMC Core Topics expanded!");
console.log("Files updated: liquidity-pools (EN/BN), premium-discount (EN/BN)");
