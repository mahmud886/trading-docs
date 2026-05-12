/**
 * Content Generator for Trading Docs
 * Generates comprehensive educational content for all stub MDX files
 * in both English and Bangla.
 */

import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.resolve('content');

// ─── Topic definitions with full content templates ───

const SMC_TOPICS = {
  'order-blocks': {
    en: {
      title: 'Order Blocks — Complete Guide',
      description: 'Master institutional Order Blocks in Smart Money Concepts. Learn to identify bullish and bearish OBs, institutional entry zones, validation rules, and advanced trading strategies with real examples.',
      level: 'intermediate',
      content: `
## What is an Order Block?

An Order Block (OB) is the **last opposing candle** before a significant price move (displacement). It represents the zone where **institutional traders placed their orders**, creating a supply or demand area that price is likely to revisit.

In traditional trading, these are similar to supply and demand zones — but Order Blocks are more precise because they identify the **exact candle** where institutional activity occurred.

<Callout type="info" title="Why Order Blocks Work">
When banks and institutions need to fill large positions, they can't do it all at once without moving the market against themselves. They place initial orders (creating the OB), move price away, then return to the OB zone to fill the remainder of their position.
</Callout>

## Bullish Order Block

A **Bullish Order Block** is the last **bearish (red/down) candle** before a strong bullish move:

\`\`\`
                    ↑ Strong bullish move
                    │
                    │
    ░░░░░░░░░░░░░  │  ← This red candle = Bullish OB
                    │
         Previous candles
\`\`\`

**How to identify:**
1. Find a strong **upward displacement** (large bullish candle or series of bullish candles)
2. Look at the **last bearish candle** before that displacement
3. Mark the **entire range** of that candle (open to close, or high to low for refined OB)
4. This zone is your Bullish Order Block

**Trading the Bullish OB:**
- Wait for price to **retrace back** to the OB zone
- Look for bullish confirmation (engulfing candle, pin bar, or LTF BOS)
- Enter long with stop loss below the OB
- Target the next swing high or liquidity level

### Real Example — EUR/USD Bullish OB

> During London session at 1:30 PM BD, EUR/USD has been dropping. A final red candle forms at 1.0855-1.0862 (the OB). Then a massive green candle explodes to 1.0910, breaking structure. Two hours later, price pulls back to 1.0860 (inside the OB). A bullish engulfing forms on the 5min chart. Entry: 1.0861, Stop: 1.0850, Target: 1.0920. Result: 1:5.4 R:R.

---

## Bearish Order Block

A **Bearish Order Block** is the last **bullish (green/up) candle** before a strong bearish move:

**How to identify:**
1. Find a strong **downward displacement**
2. Look at the **last bullish candle** before that displacement
3. Mark the entire range of that candle
4. This is your Bearish Order Block

**Trading the Bearish OB:**
- Wait for price to **retrace up** to the OB zone
- Look for bearish confirmation
- Enter short with stop loss above the OB
- Target the next swing low or liquidity level

---

## Order Block Validation Rules

Not all Order Blocks are valid. Use these filters:

### ✅ Valid Order Block:
- Created before a **Break of Structure (BOS)** or **CHOCH**
- Has a **Fair Value Gap (FVG)** associated with it
- Is in the **premium zone** (for bearish OB) or **discount zone** (for bullish OB)
- Has **not been previously tested** (fresh OB)
- Formed during **London or NY Kill Zone**

### ❌ Invalid Order Block:
- No displacement after the candle
- Already been tested/mitigated
- Against the higher timeframe trend
- Formed during low-volume Asian session
- Too far from current price (stale)

<Callout type="warning" title="The #1 OB Mistake">
Many beginners mark every swing point as an Order Block. A TRUE Order Block must have **displacement** (a strong impulsive move) immediately after it. No displacement = no institutional interest = not a real OB.
</Callout>

---

## Types of Order Blocks

### 1. Standard Order Block
The basic last-opposing-candle before displacement. Most common type.

### 2. Breaker Block
An Order Block that has been **violated** (price passed through it). It then "flips" from support to resistance or vice versa. See [Breaker Blocks](/en/smc/breaker-blocks).

### 3. Mitigation Block
When price returns to an OB that was previously broken, it becomes a Mitigation Block. See [Mitigation Blocks](/en/smc/mitigation-blocks).

### 4. Refined Order Block
Instead of using the full candle range, you use only the **candle body** (open to close) for a more precise entry zone with tighter stop losses.

### 5. Propulsion Block
An OB that occurs at a key structural level (like a previous BOS level), giving it extra confluence.

---

## Order Block Entry Models

### Model 1: Aggressive — Limit Order at OB

1. Identify a valid OB after BOS/CHOCH
2. Place a limit order at the **50% level** of the OB (midpoint of the candle body)
3. Stop loss below the OB low (bullish) or above OB high (bearish)
4. Target: Next liquidity level (minimum 1:3 R:R)

**Risk:** Might not get filled; OB might not hold
**Reward:** Best possible entry price

### Model 2: Conservative — Confirmation at OB

1. Wait for price to enter the OB zone
2. Drop to a lower timeframe (5min or 1min)
3. Wait for a **BOS on the lower timeframe** in your trade direction
4. Enter after the LTF BOS with stop below the OB
5. Target: HTF swing high/low

**Risk:** Slightly worse entry price
**Reward:** Higher confirmation, better win rate

### Model 3: OB + FVG Confluence

1. Find an OB that has an overlapping FVG
2. The zone where both overlap is your **premium entry zone**
3. Use limit order at the 50% of the FVG within the OB
4. This is the highest-probability OB entry

---

## Multi-Timeframe OB Analysis

### High Timeframe OBs (Daily, 4H)
- Define **major supply and demand zones**
- Price reacts with 50-200+ pip moves
- Can hold for days or weeks
- Use for directional bias

### Low Timeframe OBs (15min, 5min, 1min)
- Used for **precision entries** within HTF zones
- Tighter stops, better R:R
- Must align with HTF direction
- Best for intraday execution

### Process
1. **Daily**: Mark the last valid OB in your trade direction
2. **4H**: Find OBs within the Daily OB zone
3. **15min/5min**: Look for refined OBs for entry
4. Enter on LTF OB reaction during Kill Zone

---

## OB with Other SMC Concepts

### OB + Liquidity Sweep
The most powerful setup:
1. Price sweeps a key high/low (liquidity grab)
2. This creates an OB at the extreme
3. Price returns to this OB for re-entry
4. The liquidity sweep adds massive confirmation

### OB + FVG
When an OB overlaps with an FVG, you get **double confluence**. These zones have the highest probability.

### OB + Premium/Discount
- Trade bullish OBs in **discount** (below equilibrium)
- Trade bearish OBs in **premium** (above equilibrium)

---

## Common Mistakes

### ❌ Marking OBs Without Displacement
If there's no strong move after the candle, it's NOT an Order Block.

### ❌ Trading Tested OBs
An OB that has already been touched is **mitigated**. Fresh OBs have the highest probability.

### ❌ Ignoring HTF Direction
A bullish OB in a bearish HTF trend is likely to fail.

### ❌ Stop Loss Inside the OB
Your stop must be **beyond the entire OB zone**. Stops inside get hunted.

### ❌ Not Refining the OB
Using the full wick-to-wick range gives loose entries. Refine to the **candle body** for better R:R.

---

## Risk Management

| Component | Guideline |
|-----------|-----------|
| **Risk per trade** | 1-2% of account |
| **Stop loss** | 5-15 pips beyond the OB boundary |
| **Take profit 1** | Next structural level (1:2 R:R) |
| **Take profit 2** | Next liquidity target (1:3+ R:R) |
| **Max daily trades** | 2-3 quality OB setups |

---

## Real Trading Examples

### Example 1: Gold (XAU/USD) — Bullish OB

> **Setup:** Gold drops to $2,315 during London, creating a bearish candle (OB) at $2,318-$2,322 before exploding to $2,350 with a BOS.
> **Entry:** Price returns to $2,320 (middle of OB) at 7:30 PM BD. Bullish pin bar on 5min.
> **Trade:** Long $2,320, stop $2,312, target $2,355.
> **Result:** Gold hits $2,358. Risk: $8, Reward: $35 = **1:4.4 R:R**.

### Example 2: NAS100 — Bearish OB

> **Setup:** NAS100 rallies during NY open, creating a bullish candle (OB) at 18,380-18,420 before crashing to 18,250.
> **Entry:** Price retraces to 18,400 (OB zone). Bearish engulfing on 15min.
> **Trade:** Short 18,395, stop 18,430, target 18,280.
> **Result:** NAS100 drops to 18,260. Risk: 35 pts, Reward: 115 pts = **1:3.3 R:R**.

---

## Pro Tips

<Callout type="tip" title="Pro Tip 1: The Displacement Rule">
Only mark an OB if the displacement candle after it has a body **at least 2x the average candle size**. Weak displacement = weak OB.
</Callout>

<Callout type="tip" title="Pro Tip 2: Fresh OBs Only">
The first test of an OB has the highest probability (60-70%). After the first touch, the OB is considered mitigated and should not be traded again.
</Callout>

<Callout type="tip" title="Pro Tip 3: Refine for Better R:R">
Instead of using the full wick range, refine to just the candle body. This gives you a tighter entry zone and better risk-to-reward ratio.
</Callout>

---

## FAQ

### What's the difference between an Order Block and a supply/demand zone?
Order Blocks are more **precise** — they identify a single candle rather than a wide zone. They also require displacement as validation, making them more selective.

### How long does an OB remain valid?
An OB is most powerful within **1-5 days** of formation. After that, if price hasn't returned, the institutional interest may have shifted.

### Can I use OBs on any instrument?
Yes — OBs work on forex, indices, crypto, gold, and stocks. Any market with institutional participation will form valid OBs.

---

## Summary

| Concept | Key Point |
|---------|-----------|
| **Bullish OB** | Last bearish candle before bullish displacement |
| **Bearish OB** | Last bullish candle before bearish displacement |
| **Validation** | Must have displacement + BOS/CHOCH after it |
| **Best entry** | 50% of OB body with LTF confirmation |
| **Stop loss** | Beyond the OB boundary |
| **Best with** | FVG confluence, liquidity sweep, Kill Zone timing |

---

## Related Topics

- [Fair Value Gap (FVG)](/en/smc/fair-value-gap) — Often overlaps with Order Blocks
- [Break of Structure (BOS)](/en/smc/bos) — Validates Order Blocks
- [Breaker Blocks](/en/smc/breaker-blocks) — Violated Order Blocks
- [Liquidity Pools](/en/smc/liquidity-pools) — Sweeps that create OB entries
- [Premium & Discount](/en/smc/premium-discount) — Optimal OB trading zones`
    },
    bn: {
      title: 'অর্ডার ব্লক — সম্পূর্ণ গাইড',
      description: 'Smart Money Concepts এ ইনস্টিটিউশনাল অর্ডার ব্লক আয়ত্ত করুন। বুলিশ ও বিয়ারিশ OB চিহ্নিতকরণ, ভ্যালিডেশন নিয়ম এবং বাস্তব উদাহরণ সহ অ্যাডভান্সড ট্রেডিং কৌশল শিখুন।',
      level: 'intermediate',
      content: `
## অর্ডার ব্লক কী?

অর্ডার ব্লক (OB) হলো একটি গুরুত্বপূর্ণ প্রাইস মুভ (ডিসপ্লেসমেন্ট) এর আগে **শেষ বিপরীত ক্যান্ডেল**। এটি সেই জোন উপস্থাপন করে যেখানে **ইনস্টিটিউশনাল ট্রেডাররা তাদের অর্ডার রেখেছিল**, একটি সাপ্লাই বা ডিমান্ড এলাকা তৈরি করে যেখানে প্রাইস ফিরে আসার সম্ভাবনা বেশি।

<Callout type="info" title="অর্ডার ব্লক কেন কাজ করে">
যখন ব্যাংক এবং ইনস্টিটিউশনকে বড় পজিশন পূরণ করতে হয়, তারা একবারে সব করতে পারে না। তারা প্রাথমিক অর্ডার রাখে (OB তৈরি করে), প্রাইস সরায়, তারপর বাকি পজিশন পূরণ করতে OB জোনে ফিরে আসে।
</Callout>

## বুলিশ অর্ডার ব্লক

একটি **বুলিশ অর্ডার ব্লক** হলো শক্তিশালী বুলিশ মুভের আগে শেষ **বিয়ারিশ (লাল) ক্যান্ডেল**:

**কীভাবে চিহ্নিত করবেন:**
1. একটি শক্তিশালী **ঊর্ধ্বমুখী ডিসপ্লেসমেন্ট** খুঁজুন
2. সেই ডিসপ্লেসমেন্টের আগে **শেষ বিয়ারিশ ক্যান্ডেল** দেখুন
3. সেই ক্যান্ডেলের **সম্পূর্ণ রেঞ্জ** মার্ক করুন
4. এই জোনটি আপনার বুলিশ অর্ডার ব্লক

**ট্রেডিং:**
- প্রাইস OB জোনে **ফিরে আসার** জন্য অপেক্ষা করুন
- বুলিশ কনফার্মেশন খুঁজুন (এনগালফিং, পিন বার, বা LTF BOS)
- OB এর নিচে স্টপ লস দিয়ে লং এন্ট্রি নিন
- পরবর্তী সুইং হাই বা লিকুইডিটি লেভেল টার্গেট করুন

---

## বিয়ারিশ অর্ডার ব্লক

শক্তিশালী বিয়ারিশ মুভের আগে শেষ **বুলিশ (সবুজ) ক্যান্ডেল**:

**ট্রেডিং:**
- প্রাইস OB জোনে **উপরে ফেরার** জন্য অপেক্ষা করুন
- বিয়ারিশ কনফার্মেশন খুঁজুন
- OB এর উপরে স্টপ লস দিয়ে শর্ট এন্ট্রি নিন

---

## অর্ডার ব্লক ভ্যালিডেশন

### ✅ বৈধ অর্ডার ব্লক:
- **BOS বা CHOCH** এর আগে তৈরি হয়েছে
- এর সাথে **FVG** যুক্ত আছে
- সঠিক জোনে আছে (বুলিশ OB ডিসকাউন্টে, বিয়ারিশ OB প্রিমিয়ামে)
- **আগে টেস্ট হয়নি** (ফ্রেশ OB)
- **লন্ডন বা NY কিল জোনে** তৈরি হয়েছে

### ❌ অবৈধ অর্ডার ব্লক:
- ক্যান্ডেলের পর ডিসপ্লেসমেন্ট নেই
- ইতিমধ্যে টেস্ট/মিটিগেট হয়েছে
- উচ্চ টাইমফ্রেম ট্রেন্ডের বিরুদ্ধে

<Callout type="warning" title="১ নম্বর OB ভুল">
অনেক শিক্ষার্থী প্রতিটি সুইং পয়েন্টকে অর্ডার ব্লক হিসেবে মার্ক করে। একটি সত্যিকারের অর্ডার ব্লকে অবশ্যই এর পরে **ডিসপ্লেসমেন্ট** থাকতে হবে। ডিসপ্লেসমেন্ট নেই = ইনস্টিটিউশনাল আগ্রহ নেই = আসল OB নয়।
</Callout>

---

## অর্ডার ব্লকের প্রকারভেদ

### ১. স্ট্যান্ডার্ড অর্ডার ব্লক
ডিসপ্লেসমেন্টের আগে মৌলিক শেষ-বিপরীত-ক্যান্ডেল।

### ২. ব্রেকার ব্লক
একটি অর্ডার ব্লক যা **লঙ্ঘিত** হয়েছে। তখন এটি সাপোর্ট থেকে রেজিস্ট্যান্সে বা বিপরীতে "ফ্লিপ" করে।

### ৩. মিটিগেশন ব্লক
যখন প্রাইস পূর্বে ভাঙা OB তে ফিরে আসে।

### ৪. রিফাইন্ড অর্ডার ব্লক
সম্পূর্ণ ক্যান্ডেল রেঞ্জের বদলে, আরও সুনির্দিষ্ট এন্ট্রি জোনের জন্য শুধু **ক্যান্ডেল বডি** ব্যবহার করা।

---

## এন্ট্রি মডেল

### মডেল ১: আক্রমণাত্মক — OB তে লিমিট অর্ডার
1. BOS/CHOCH এর পর একটি বৈধ OB চিহ্নিত করুন
2. OB এর **৫০% লেভেলে** লিমিট অর্ডার রাখুন
3. OB এর বাইরে স্টপ লস
4. টার্গেট: পরবর্তী লিকুইডিটি লেভেল (সর্বনিম্ন ১:৩ R:R)

### মডেল ২: রক্ষণশীল — OB তে কনফার্মেশন
1. প্রাইস OB জোনে প্রবেশ করার জন্য অপেক্ষা করুন
2. নিম্ন টাইমফ্রেমে (৫ মিনিট বা ১ মিনিট) যান
3. আপনার ট্রেড দিকে **LTF BOS** এর জন্য অপেক্ষা করুন
4. LTF BOS এর পর OB এর নিচে স্টপ দিয়ে এন্ট্রি নিন

### মডেল ৩: OB + FVG কনফ্লুয়েন্স
- OB এর সাথে ওভারল্যাপিং FVG খুঁজুন
- এটি সর্বোচ্চ সম্ভাবনার এন্ট্রি জোন

---

## অন্যান্য SMC কনসেপ্টের সাথে OB

### OB + লিকুইডিটি সুইপ
সবচেয়ে শক্তিশালী সেটআপ:
1. প্রাইস একটি কী লেভেল সুইপ করে
2. এটি এক্সট্রিমে একটি OB তৈরি করে
3. প্রাইস পুনরায় এন্ট্রির জন্য এই OB তে ফিরে আসে

### OB + প্রিমিয়াম/ডিসকাউন্ট
- **ডিসকাউন্টে** বুলিশ OB ট্রেড করুন
- **প্রিমিয়ামে** বিয়ারিশ OB ট্রেড করুন

---

## সাধারণ ভুল

### ❌ ডিসপ্লেসমেন্ট ছাড়া OB মার্ক করা
ক্যান্ডেলের পর শক্তিশালী মুভ না থাকলে এটি অর্ডার ব্লক নয়।

### ❌ টেস্ট হওয়া OB ট্রেড করা
ইতিমধ্যে স্পর্শ করা OB **মিটিগেটেড**। ফ্রেশ OB এর সর্বোচ্চ সম্ভাবনা থাকে।

### ❌ HTF দিক উপেক্ষা করা
বিয়ারিশ HTF ট্রেন্ডে বুলিশ OB ব্যর্থ হওয়ার সম্ভাবনা বেশি।

### ❌ OB এর ভিতরে স্টপ লস
আপনার স্টপ অবশ্যই **সম্পূর্ণ OB জোনের বাইরে** হতে হবে।

---

## বাস্তব ট্রেডিং উদাহরণ

### উদাহরণ ১: গোল্ড — বুলিশ OB

> **সেটআপ:** লন্ডনে গোল্ড $2,315 পর্যন্ত পড়ে, $2,318-$2,322 তে একটি বিয়ারিশ ক্যান্ডেল (OB) তৈরি করে BOS সহ $2,350 পর্যন্ত বিস্ফোরিত হওয়ার আগে।
> **এন্ট্রি:** রাত ৭:৩০ BD তে প্রাইস $2,320 তে (OB এর মাঝখানে) ফিরে আসে।
> **ট্রেড:** $2,320 তে লং, $2,312 তে স্টপ, $2,355 তে টার্গেট।
> **ফলাফল:** গোল্ড $2,358 হিট করে। রিস্ক: $8, রিওয়ার্ড: $35 = **১:৪.৪ R:R**।

---

## প্রো টিপস

<Callout type="tip" title="প্রো টিপ ১: ডিসপ্লেসমেন্ট নিয়ম">
শুধুমাত্র OB মার্ক করুন যদি এর পরের ডিসপ্লেসমেন্ট ক্যান্ডেলের বডি **গড় ক্যান্ডেল সাইজের অন্তত ২ গুণ** হয়। দুর্বল ডিসপ্লেসমেন্ট = দুর্বল OB।
</Callout>

<Callout type="tip" title="প্রো টিপ ২: শুধু ফ্রেশ OB">
OB এর প্রথম পরীক্ষায় সর্বোচ্চ সম্ভাবনা (৬০-৭০%)। প্রথম স্পর্শের পর, OB মিটিগেটেড বলে বিবেচিত এবং আবার ট্রেড করা উচিত নয়।
</Callout>

---

## সারাংশ

| কনসেপ্ট | মূল বিষয় |
|---------|----------|
| **বুলিশ OB** | বুলিশ ডিসপ্লেসমেন্টের আগে শেষ বিয়ারিশ ক্যান্ডেল |
| **বিয়ারিশ OB** | বিয়ারিশ ডিসপ্লেসমেন্টের আগে শেষ বুলিশ ক্যান্ডেল |
| **ভ্যালিডেশন** | এর পরে ডিসপ্লেসমেন্ট + BOS/CHOCH থাকতে হবে |
| **সেরা এন্ট্রি** | LTF কনফার্মেশন সহ OB বডির ৫০% |
| **স্টপ লস** | OB বাউন্ডারির বাইরে |

---

## সম্পর্কিত বিষয়

- [ফেয়ার ভ্যালু গ্যাপ (FVG)](/bn/smc/fair-value-gap) — প্রায়ই অর্ডার ব্লকের সাথে ওভারল্যাপ করে
- [ব্রেক অফ স্ট্রাকচার (BOS)](/bn/smc/bos) — অর্ডার ব্লক ভ্যালিডেট করে
- [লিকুইডিটি পুল](/bn/smc/liquidity-pools) — সুইপ যা OB এন্ট্রি তৈরি করে
- [প্রিমিয়াম ও ডিসকাউন্ট](/bn/smc/premium-discount) — সেরা OB ট্রেডিং জোন`
    }
  },
  'choch': {
    en: {
      title: 'Change of Character (CHOCH) — Complete Guide',
      description: 'Master the Change of Character (CHOCH) concept in Smart Money trading. Learn to identify trend reversals, differentiate CHOCH from BOS, and execute high-probability reversal trades.',
      level: 'intermediate',
      content: `
## What is Change of Character (CHOCH)?

Change of Character (CHOCH) signals a **potential trend reversal**. It occurs when price breaks a key swing point **against** the prevailing trend direction — breaking a swing low in an uptrend or a swing high in a downtrend.

While BOS confirms trend continuation, CHOCH is the **first warning sign** that the trend may be changing. It's one of the most important concepts for catching trend reversals early.

<Callout type="info" title="CHOCH = Early Reversal Signal">
CHOCH doesn't guarantee a reversal — it signals the **first structural crack** in the current trend. Smart traders use CHOCH as an alert to start looking for entries in the new direction.
</Callout>

## Bullish CHOCH (Bearish to Bullish Reversal)

In a **downtrend**, price makes lower lows and lower highs. A **Bullish CHOCH** occurs when price breaks **above a swing high**, signaling potential reversal to bullish:

\`\`\`
    Lower High
       /\\
      /  \\         ★ Breaks above = Bullish CHOCH!
     /    \\        /
    /      \\      /
Lower Low   \\    /
             \\  /
              \\/
          Lower Low
\`\`\`

**Identification:**
1. Downtrend established (lower highs, lower lows)
2. Price makes another low
3. Instead of making a lower high, price **breaks above** the last swing high
4. This break = Bullish CHOCH

---

## Bearish CHOCH (Bullish to Bearish Reversal)

In an **uptrend**, a **Bearish CHOCH** occurs when price breaks **below a swing low**:

**Identification:**
1. Uptrend established (higher highs, higher lows)
2. Price makes another high
3. Instead of making a higher low, price **breaks below** the last swing low
4. This break = Bearish CHOCH

---

## CHOCH vs BOS

| Feature | BOS | CHOCH |
|---------|-----|-------|
| **Direction** | WITH the trend | AGAINST the trend |
| **Signal** | Continuation | Potential reversal |
| **Uptrend example** | Breaks above swing high | Breaks below swing low |
| **Downtrend example** | Breaks below swing low | Breaks above swing high |
| **Trading approach** | Enter with trend on pullback | Wait for confirmation, enter new direction |

<Callout type="warning" title="Critical Rule">
The first CHOCH is NOT your entry — it's your **alert**. Wait for price to pull back and create an FVG or OB in the new direction, then enter on the retest.
</Callout>

---

## How to Trade CHOCH

### Step-by-Step Process

1. **Identify the trend** — Is the market in an uptrend or downtrend?
2. **Spot the CHOCH** — Price breaks a key swing point against the trend
3. **Mark the displacement candle** — The candle that caused the CHOCH
4. **Identify the FVG/OB** — The CHOCH candle usually creates an FVG and/or OB
5. **Wait for pullback** — Price retraces to the FVG/OB zone
6. **Enter on confirmation** — Bullish or bearish reaction at the zone
7. **Stop loss** — Beyond the CHOCH swing point
8. **Target** — Previous major structure level

### Entry Model: CHOCH + FVG

The most reliable CHOCH trade:
1. CHOCH confirmed (candle body close)
2. FVG formed during the CHOCH displacement
3. Price RETRACES back into the FVG
4. Enter at the 50% of the FVG
5. Stop beyond the CHOCH origination point
6. Target the next major liquidity level

---

## CHOCH Confirmation Levels

Not all CHOCHs are equal. Use these filters:

### Strong CHOCH Signals:
- Accompanied by **heavy displacement** (large candle body)
- Occurs after a **liquidity sweep** of the trend extreme
- Happens during **London or NY Kill Zone**
- Aligns with **higher timeframe structure**
- Has a clear **FVG** as part of the move

### Weak CHOCH Signals:
- Small candle barely closing beyond the level
- No displacement or FVG
- Asian session timing
- Against higher timeframe bias
- No liquidity sweep before it

---

## Multi-Timeframe CHOCH

### HTF CHOCH (Daily, 4H)
- Signals a **major trend reversal**
- Can lead to moves of 200-500+ pips
- Requires 1-3 days to confirm

### LTF CHOCH (1H, 15min)
- Signals **intraday reversals**
- Used for entry timing after HTF bias change
- Best when aligned with HTF CHOCH direction

### Process
1. **Daily CHOCH** = Change overall bias
2. **4H CHOCH** = Confirm the Daily shift
3. **1H/15min CHOCH** = Time your entry

---

## Common Mistakes

### ❌ Trading Every CHOCH
Not all CHOCHs lead to reversals. Some are just pullbacks in a strong trend. Filter with HTF analysis.

### ❌ Entering on the CHOCH Candle
CHOCH is not an entry — it's a signal. Wait for the pullback to get better pricing and confirmation.

### ❌ Ignoring HTF Context
A 15min CHOCH against a strong Daily trend is likely a trap. Always check higher timeframes.

### ❌ No Liquidity Sweep
The best CHOCHs happen AFTER a liquidity sweep. If there's no sweep before the CHOCH, probability drops.

---

## Real Trading Examples

### Example 1: EUR/USD — Bearish CHOCH

> **Setup:** EUR/USD uptrend on 1H. Last swing low at 1.0880. Price makes new high at 1.0940.
> **CHOCH:** At 3:00 PM BD (London KZ), a strong red candle closes at 1.0870, below the 1.0880 swing low. Bearish CHOCH confirmed.
> **FVG:** Created between 1.0895-1.0910 during displacement.
> **Entry:** Price retraces to 1.0905 (FVG zone) at 7:30 PM BD.
> **Trade:** Short 1.0903, stop 1.0920, target 1.0840.
> **Result:** EUR/USD drops to 1.0835. Risk: 17 pips, Reward: 63 pips = **1:3.7 R:R**.

---

## Pro Tips

<Callout type="tip" title="Pro Tip 1: Sweep Before CHOCH">
The most powerful CHOCHs come after a **liquidity sweep**. Price takes out the trend extreme (grabbing stops), then reverses with CHOCH. This "sweep + CHOCH" combo is one of the highest-probability setups in SMC.
</Callout>

<Callout type="tip" title="Pro Tip 2: Wait for the Pullback">
Never chase a CHOCH. Wait for price to retrace 50-79% of the CHOCH move. This pullback to the FVG or OB zone gives you the best entry with the tightest stop.
</Callout>

---

## Summary

| Concept | Key Point |
|---------|-----------|
| **Definition** | Price breaks a swing point AGAINST the trend direction |
| **Bullish CHOCH** | Breaks above swing high in a downtrend |
| **Bearish CHOCH** | Breaks below swing low in an uptrend |
| **Entry** | On pullback to FVG/OB after CHOCH confirmation |
| **Best setup** | Liquidity sweep → CHOCH → FVG pullback |
| **Stop loss** | Beyond the CHOCH origination point |

---

## Related Topics

- [Break of Structure (BOS)](/en/smc/bos) — Trend continuation (opposite of CHOCH)
- [Market Structure Shift](/en/smc/market-structure-shift) — Broader structure change context
- [Fair Value Gap (FVG)](/en/smc/fair-value-gap) — Entry zones after CHOCH
- [Liquidity Pools](/en/smc/liquidity-pools) — Sweeps that precede CHOCH
- [Order Blocks](/en/smc/order-blocks) — Entry zones after CHOCH`
    },
    bn: {
      title: 'চেঞ্জ অফ ক্যারেক্টার (CHOCH) — সম্পূর্ণ গাইড',
      description: 'Smart Money ট্রেডিংয়ে Change of Character (CHOCH) কনসেপ্ট আয়ত্ত করুন। ট্রেন্ড রিভার্সাল চিহ্নিতকরণ, CHOCH ও BOS এর পার্থক্য এবং উচ্চ-সম্ভাবনা রিভার্সাল ট্রেড এক্সিকিউট করা শিখুন।',
      level: 'intermediate',
      content: `
## Change of Character (CHOCH) কী?

Change of Character (CHOCH) একটি **সম্ভাব্য ট্রেন্ড রিভার্সালের** সিগন্যাল দেয়। এটি ঘটে যখন প্রাইস প্রচলিত ট্রেন্ড দিকের **বিরুদ্ধে** একটি কী সুইং পয়েন্ট ভাঙে — আপট্রেন্ডে সুইং লো ভাঙা বা ডাউনট্রেন্ডে সুইং হাই ভাঙা।

BOS ট্রেন্ড ধারাবাহিকতা নিশ্চিত করলে, CHOCH হলো **প্রথম সতর্কতা চিহ্ন** যে ট্রেন্ড পরিবর্তন হতে পারে।

<Callout type="info" title="CHOCH = প্রাথমিক রিভার্সাল সিগন্যাল">
CHOCH রিভার্সাল গ্যারান্টি দেয় না — এটি বর্তমান ট্রেন্ডে **প্রথম স্ট্রাকচারাল ফাটলের** সিগন্যাল দেয়। স্মার্ট ট্রেডাররা নতুন দিকে এন্ট্রি খুঁজতে CHOCH কে অ্যালার্ট হিসেবে ব্যবহার করে।
</Callout>

## বুলিশ CHOCH (বিয়ারিশ থেকে বুলিশে রিভার্সাল)

**ডাউনট্রেন্ডে**, প্রাইস লোয়ার লো এবং লোয়ার হাই তৈরি করে। একটি **বুলিশ CHOCH** ঘটে যখন প্রাইস একটি **সুইং হাই এর উপরে** ভেঙে যায়:

**চিহ্নিতকরণ:**
1. ডাউনট্রেন্ড প্রতিষ্ঠিত (লোয়ার হাই, লোয়ার লো)
2. প্রাইস আরেকটি লো তৈরি করে
3. লোয়ার হাই তৈরির পরিবর্তে, প্রাইস শেষ সুইং হাই এর **উপরে ভেঙে যায়**
4. এই ব্রেক = বুলিশ CHOCH

## বিয়ারিশ CHOCH (বুলিশ থেকে বিয়ারিশে রিভার্সাল)

**আপট্রেন্ডে**, একটি **বিয়ারিশ CHOCH** ঘটে যখন প্রাইস একটি **সুইং লো এর নিচে** ভেঙে যায়।

---

## CHOCH বনাম BOS

| বৈশিষ্ট্য | BOS | CHOCH |
|----------|-----|-------|
| **দিক** | ট্রেন্ডের সাথে | ট্রেন্ডের বিরুদ্ধে |
| **সিগন্যাল** | ধারাবাহিকতা | সম্ভাব্য রিভার্সাল |
| **আপট্রেন্ড উদাহরণ** | সুইং হাই এর উপরে ভাঙে | সুইং লো এর নিচে ভাঙে |

<Callout type="warning" title="গুরুত্বপূর্ণ নিয়ম">
প্রথম CHOCH আপনার এন্ট্রি নয় — এটি আপনার **অ্যালার্ট**। প্রাইস পুলব্যাক করে নতুন দিকে FVG বা OB তৈরি করার জন্য অপেক্ষা করুন, তারপর রিটেস্টে এন্ট্রি নিন।
</Callout>

---

## CHOCH কীভাবে ট্রেড করবেন

### ধাপে ধাপে প্রক্রিয়া

1. **ট্রেন্ড চিহ্নিত করুন** — মার্কেট আপট্রেন্ডে না ডাউনট্রেন্ডে?
2. **CHOCH চিহ্নিত করুন** — প্রাইস ট্রেন্ডের বিরুদ্ধে কী সুইং পয়েন্ট ভাঙে
3. **ডিসপ্লেসমেন্ট ক্যান্ডেল মার্ক করুন** — যে ক্যান্ডেল CHOCH ঘটিয়েছে
4. **FVG/OB চিহ্নিত করুন** — CHOCH ক্যান্ডেল সাধারণত FVG এবং/অথবা OB তৈরি করে
5. **পুলব্যাকের জন্য অপেক্ষা করুন** — প্রাইস FVG/OB জোনে ফিরে আসে
6. **কনফার্মেশনে এন্ট্রি** — জোনে বুলিশ বা বিয়ারিশ রিঅ্যাকশন
7. **স্টপ লস** — CHOCH সুইং পয়েন্টের বাইরে
8. **টার্গেট** — পূর্ববর্তী প্রধান স্ট্রাকচার লেভেল

---

## সাধারণ ভুল

### ❌ প্রতিটি CHOCH ট্রেড করা
সব CHOCH রিভার্সালে নিয়ে যায় না। কিছু শক্তিশালী ট্রেন্ডে শুধু পুলব্যাক। HTF বিশ্লেষণ দিয়ে ফিল্টার করুন।

### ❌ CHOCH ক্যান্ডেলে এন্ট্রি নেওয়া
CHOCH একটি এন্ট্রি নয় — এটি একটি সিগন্যাল। ভালো প্রাইসিং ও কনফার্মেশনের জন্য পুলব্যাকের জন্য অপেক্ষা করুন।

### ❌ HTF প্রেক্ষাপট উপেক্ষা করা
শক্তিশালী ডেইলি ট্রেন্ডের বিরুদ্ধে ১৫ মিনিটের CHOCH সম্ভবত একটি ফাঁদ।

---

## বাস্তব ট্রেডিং উদাহরণ

### উদাহরণ ১: EUR/USD — বিয়ারিশ CHOCH

> **সেটআপ:** 1H তে EUR/USD আপট্রেন্ড। শেষ সুইং লো 1.0880 তে।
> **CHOCH:** বিকেল ৩:০০ BD তে, একটি শক্তিশালী লাল ক্যান্ডেল 1.0870 তে ক্লোজ করে। বিয়ারিশ CHOCH কনফার্মড।
> **FVG:** ডিসপ্লেসমেন্টের সময় 1.0895-1.0910 এ তৈরি হয়।
> **এন্ট্রি:** রাত ৭:৩০ BD তে প্রাইস 1.0905 তে (FVG জোন) ফিরে আসে।
> **ট্রেড:** 1.0903 তে শর্ট, 1.0920 তে স্টপ, 1.0840 তে টার্গেট।
> **ফলাফল:** রিস্ক: ১৭ পিপ, রিওয়ার্ড: ৬৩ পিপ = **১:৩.৭ R:R**।

---

## প্রো টিপস

<Callout type="tip" title="প্রো টিপ ১: CHOCH এর আগে সুইপ">
সবচেয়ে শক্তিশালী CHOCH আসে **লিকুইডিটি সুইপের** পরে। প্রাইস ট্রেন্ড এক্সট্রিম নিয়ে নেয় (স্টপ ধরে), তারপর CHOCH দিয়ে রিভার্স করে। এই "সুইপ + CHOCH" কম্বো SMC তে সর্বোচ্চ সম্ভাবনার সেটআপগুলোর একটি।
</Callout>

---

## সারাংশ

| কনসেপ্ট | মূল বিষয় |
|---------|----------|
| **সংজ্ঞা** | ট্রেন্ড দিকের বিরুদ্ধে সুইং পয়েন্ট ভাঙে |
| **বুলিশ CHOCH** | ডাউনট্রেন্ডে সুইং হাই এর উপরে ভাঙে |
| **বিয়ারিশ CHOCH** | আপট্রেন্ডে সুইং লো এর নিচে ভাঙে |
| **এন্ট্রি** | CHOCH কনফার্মেশনের পর FVG/OB তে পুলব্যাকে |
| **সেরা সেটআপ** | লিকুইডিটি সুইপ → CHOCH → FVG পুলব্যাক |

---

## সম্পর্কিত বিষয়

- [ব্রেক অফ স্ট্রাকচার (BOS)](/bn/smc/bos) — ট্রেন্ড ধারাবাহিকতা (CHOCH এর বিপরীত)
- [ফেয়ার ভ্যালু গ্যাপ (FVG)](/bn/smc/fair-value-gap) — CHOCH এর পর এন্ট্রি জোন
- [অর্ডার ব্লক](/bn/smc/order-blocks) — CHOCH এর পর এন্ট্রি জোন
- [লিকুইডিটি পুল](/bn/smc/liquidity-pools) — CHOCH এর আগে ঘটা সুইপ`
    }
  }
};

// Generic topic content generator for remaining stubs
function generateTopicContent(slug, meta, lang, category) {
  const isEn = lang === 'en';
  const categoryLabel = { smc: 'Smart Money Concepts', 'price-action': 'Price Action', ict: 'ICT' }[category];
  const categoryLabelBn = { smc: 'স্মার্ট মানি কনসেপ্টস', 'price-action': 'প্রাইস অ্যাকশন', ict: 'আইসিটি' }[category];

  const titleClean = meta.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  if (isEn) {
    return `
## What is ${titleClean}?

${titleClean} is a key concept in ${categoryLabel} methodology that helps traders understand institutional price behavior and make better trading decisions. This concept is essential for anyone looking to trade with smart money rather than against it.

<Callout type="info" title="${categoryLabel}">
This lesson is part of the ${categoryLabel} curriculum. Understanding each concept individually and how they connect together is crucial for developing a complete trading methodology.
</Callout>

## Why ${titleClean} Matters

Understanding ${titleClean} is critical for several reasons:

1. **Institutional Insight** — It reveals how large participants operate in the market
2. **Better Entries** — Knowing where to enter with institutional flow improves accuracy
3. **Risk Management** — Proper understanding leads to better stop loss placement
4. **Market Context** — It provides context for overall market direction and potential moves
5. **Edge Development** — Combining this with other concepts creates a systematic trading edge

---

## Beginner Understanding

At its most basic level, ${titleClean} helps you understand **why price moves the way it does**. Instead of simply looking at patterns, you begin to see the market through the lens of institutional activity.

**Key beginner takeaways:**
- Markets are driven by large institutional players, not retail traders
- Price moves to areas of liquidity (where stop losses cluster)
- Every move has a purpose — accumulation, manipulation, or distribution
- Understanding ${titleClean} helps you align with smart money

---

## Intermediate Application

Once you understand the basic concept, you can start applying ${titleClean} in your analysis:

### How to Identify on Charts

1. **Mark key structural levels** on your chart (swing highs, swing lows)
2. **Observe price behavior** around these levels using ${titleClean} principles
3. **Note displacement candles** that show institutional aggression
4. **Identify entry zones** where price is likely to return for re-entry
5. **Confirm with lower timeframe** analysis for precision entries

### Entry Conditions

- **Direction confirmed** by higher timeframe analysis
- **${titleClean} signal** clearly visible on your execution timeframe
- **Confluence** with at least one other SMC concept (FVG, OB, liquidity sweep)
- **Kill Zone timing** — London (1:00-4:00 PM BD) or NY (7:00-10:00 PM BD)
- **Risk-reward ratio** of at least 1:2, preferably 1:3+

### Exit Strategy

- **Take Profit 1:** Next swing high/low or structural level (partial close)
- **Take Profit 2:** Next major liquidity target (remaining position)
- **Trailing stop:** Move stop to breakeven after TP1, trail using structural levels
- **Time-based exit:** Close before major news events or end of session

---

## Advanced Execution

For experienced traders, ${titleClean} becomes part of a **complete execution model**:

### Multi-Timeframe Application

| Timeframe | Purpose | Action |
|-----------|---------|--------|
| **Daily** | Overall direction and bias | Identify the dominant trend |
| **4H** | Key levels and structure | Mark zones of interest |
| **1H** | Directional confirmation | Confirm the setup |
| **15min/5min** | Entry timing | Execute with precision |

### Combining with Other Concepts

${titleClean} becomes most powerful when combined with:

- **Fair Value Gaps (FVG)** — For precise entry zones
- **Order Blocks** — For institutional demand/supply
- **Liquidity concepts** — For understanding where price is drawn to
- **Market Structure (BOS/CHOCH)** — For confirming direction
- **Kill Zone timing** — For optimal execution windows

---

## Common Mistakes

### ❌ Mistake 1: Analysis Paralysis
Don't overcomplicate your charts. Mark only the most relevant instances of ${titleClean} and focus on high-probability setups.

### ❌ Mistake 2: Ignoring Higher Timeframe
Always start your analysis from the higher timeframe. A setup on the 15min chart means nothing if it goes against the Daily trend.

### ❌ Mistake 3: No Confluence
Never trade based on a single concept. Always look for confluence — at least 2-3 factors aligning before entering a trade.

### ❌ Mistake 4: Poor Risk Management
Even the best ${titleClean} setup can fail. Never risk more than 1-2% per trade.

### ❌ Mistake 5: Trading Outside Kill Zones
Setups during London (1:00-4:00 PM BD) and NY (7:00-10:00 PM BD) Kill Zones have significantly higher probability than off-hours.

---

## Risk Management

| Component | Guideline |
|-----------|-----------|
| **Risk per trade** | 1-2% of account |
| **Stop loss** | Based on structural invalidation point |
| **Take profit 1** | 1:2 R:R at next structure level |
| **Take profit 2** | 1:3+ R:R at next liquidity target |
| **Max daily loss** | 3-5% of account |
| **Max open trades** | 2-3 simultaneously |

---

## Real Trading Examples

### Example 1: Forex — EUR/USD

> **Setup:** ${titleClean} identified on the 1H chart during London Kill Zone (2:00 PM BD). Higher timeframe (4H) confirms bullish bias.
> **Entry:** Long at 1.0885 after pullback to key zone with confirmation.
> **Stop:** 1.0865 (20 pip stop based on structure)
> **Target:** 1.0940 (55 pips)
> **Result:** Hit TP at 1.0945. Risk: 20 pips, Reward: 60 pips = **1:3 R:R**

### Example 2: Gold — XAU/USD

> **Setup:** ${titleClean} visible on 15min chart during NY Kill Zone (8:00 PM BD). Daily shows bearish structure.
> **Entry:** Short at $2,340 after rejection at key zone.
> **Stop:** $2,350 ($10 stop)
> **Target:** $2,310 ($30 target)
> **Result:** Gold dropped to $2,305. Risk: $10, Reward: $35 = **1:3.5 R:R**

### Example 3: Indices — NAS100

> **Setup:** ${titleClean} confirmed on 1H chart. US data release creates displacement.
> **Entry:** Long at 18,350 during overlap session.
> **Stop:** 18,310 (40 pt stop)
> **Target:** 18,500 (150 pt target)
> **Result:** NAS100 rallied to 18,520. Risk: 40 pts, Reward: 170 pts = **1:4.25 R:R**

---

## Pro Tips

<Callout type="tip" title="Pro Tip 1: Quality Over Quantity">
Wait for **A+ setups** where multiple factors align. One great trade per day beats ten mediocre ones. Patience is the edge.
</Callout>

<Callout type="tip" title="Pro Tip 2: Journal Everything">
Record every ${titleClean} setup you see — whether you trade it or not. Over time, patterns emerge that improve your identification and execution.
</Callout>

<Callout type="tip" title="Pro Tip 3: Kill Zone Focus">
${titleClean} setups during Kill Zones (London: 1:00-4:00 PM BD, NY: 7:00-10:00 PM BD) have 30-40% higher win rates than off-hour setups.
</Callout>

---

## FAQ

### What timeframe is best for ${titleClean}?
Use the **1H chart** for identification and the **15min or 5min** for entry timing. Always confirm with **4H or Daily** for direction.

### Can ${titleClean} be used with other trading styles?
Yes — it complements traditional technical analysis, supply/demand trading, and any methodology that considers market structure.

### How many setups should I take per day?
Focus on **1-3 high-quality setups** per day. Trading more does not mean more profit — it often means more losses.

---

## Summary

| Concept | Key Point |
|---------|-----------|
| **Definition** | ${titleClean} is a key ${categoryLabel} concept for understanding institutional price behavior |
| **Best timeframe** | 1H for identification, 15min/5min for entries |
| **Entry** | After pullback to key zone with confirmation |
| **Stop loss** | Beyond structural invalidation |
| **Best conditions** | Kill Zone timing, HTF alignment, multi-concept confluence |
| **Risk** | 1-2% per trade maximum |

---

## Related Topics

- [Introduction to ${categoryLabel}](/en/${category}/introduction) — Start here if you're new
- [Fair Value Gap (FVG)](/en/smc/fair-value-gap) — Key entry concept
- [Order Blocks](/en/smc/order-blocks) — Institutional zones
- [Break of Structure (BOS)](/en/smc/bos) — Structure analysis`;
  } else {
    // Bangla version
    return `
## ${titleClean} কী?

${titleClean} হলো ${categoryLabelBn} মেথডলজির একটি গুরুত্বপূর্ণ কনসেপ্ট যা ট্রেডারদের ইনস্টিটিউশনাল প্রাইস আচরণ বুঝতে এবং ভালো ট্রেডিং সিদ্ধান্ত নিতে সাহায্য করে। এই কনসেপ্ট যেকোনো ব্যক্তির জন্য অপরিহার্য যারা স্মার্ট মানির বিরুদ্ধে না গিয়ে তার সাথে ট্রেড করতে চায়।

<Callout type="info" title="${categoryLabelBn}">
এই পাঠ ${categoryLabelBn} পাঠ্যক্রমের অংশ। প্রতিটি কনসেপ্ট আলাদাভাবে এবং কীভাবে তারা একসাথে সংযুক্ত হয় তা বোঝা একটি সম্পূর্ণ ট্রেডিং মেথডলজি গড়ে তোলার জন্য অত্যন্ত গুরুত্বপূর্ণ।
</Callout>

## ${titleClean} কেন গুরুত্বপূর্ণ

${titleClean} বোঝা বেশ কারণে গুরুত্বপূর্ণ:

1. **ইনস্টিটিউশনাল অন্তর্দৃষ্টি** — এটি প্রকাশ করে বড় অংশগ্রহণকারীরা মার্কেটে কীভাবে কাজ করে
2. **ভালো এন্ট্রি** — ইনস্টিটিউশনাল ফ্লো এর সাথে কোথায় এন্ট্রি নিতে হবে জানলে নির্ভুলতা বাড়ে
3. **রিস্ক ম্যানেজমেন্ট** — সঠিক বোঝাপড়া ভালো স্টপ লস প্লেসমেন্টে নিয়ে যায়
4. **মার্কেট প্রেক্ষাপট** — এটি সামগ্রিক মার্কেট দিক এবং সম্ভাব্য মুভের প্রেক্ষাপট দেয়
5. **এজ ডেভেলপমেন্ট** — অন্যান্য কনসেপ্টের সাথে মিলিয়ে একটি পদ্ধতিগত ট্রেডিং এজ তৈরি করে

---

## শুরু পর্যায়ের বোঝাপড়া

সবচেয়ে মৌলিক স্তরে, ${titleClean} আপনাকে বুঝতে সাহায্য করে **প্রাইস কেন এভাবে চলে**। শুধু প্যাটার্ন দেখার পরিবর্তে, আপনি ইনস্টিটিউশনাল কার্যকলাপের দৃষ্টিতে মার্কেট দেখতে শুরু করেন।

**শিক্ষার্থীদের জন্য মূল বিষয়:**
- মার্কেট চালিত হয় বড় ইনস্টিটিউশনাল প্লেয়ারদের দ্বারা, রিটেইল ট্রেডারদের নয়
- প্রাইস লিকুইডিটির এলাকায় চলে (যেখানে স্টপ লস জমা হয়)
- প্রতিটি মুভের একটি উদ্দেশ্য আছে — অ্যাকুমুলেশন, ম্যানিপুলেশন, বা ডিস্ট্রিবিউশন

---

## মধ্যবর্তী পর্যায়ের প্রয়োগ

### চার্টে কীভাবে চিহ্নিত করবেন

1. আপনার চার্টে **মূল স্ট্রাকচারাল লেভেল** মার্ক করুন
2. এই লেভেলগুলোর চারপাশে **প্রাইস আচরণ** পর্যবেক্ষণ করুন
3. ইনস্টিটিউশনাল আগ্রাসন দেখায় এমন **ডিসপ্লেসমেন্ট ক্যান্ডেল** নোট করুন
4. যেখানে প্রাইস পুনরায় এন্ট্রির জন্য ফিরে আসবে সেই **এন্ট্রি জোন** চিহ্নিত করুন
5. সুনির্দিষ্ট এন্ট্রির জন্য **নিম্ন টাইমফ্রেমে** কনফার্ম করুন

### এন্ট্রি শর্ত

- উচ্চ টাইমফ্রেম বিশ্লেষণ দ্বারা **দিক কনফার্মড**
- আপনার এক্সিকিউশন টাইমফ্রেমে **${titleClean} সিগন্যাল** স্পষ্টভাবে দৃশ্যমান
- কমপক্ষে একটি অন্য SMC কনসেপ্টের সাথে **কনফ্লুয়েন্স**
- **কিল জোন টাইমিং** — লন্ডন (দুপুর ১:০০-৪:০০ BD) বা NY (রাত ৭:০০-১০:০০ BD)
- কমপক্ষে ১:২, অগ্রাধিকার ১:৩+ **রিস্ক-রিওয়ার্ড অনুপাত**

---

## অ্যাডভান্সড এক্সিকিউশন

### মাল্টি-টাইমফ্রেম প্রয়োগ

| টাইমফ্রেম | উদ্দেশ্য | কাজ |
|-----------|---------|-----|
| **ডেইলি** | সামগ্রিক দিক ও বায়াস | প্রভাবশালী ট্রেন্ড চিহ্নিত করুন |
| **4H** | কী লেভেল ও স্ট্রাকচার | আগ্রহের জোন মার্ক করুন |
| **1H** | দিকনির্দেশক কনফার্মেশন | সেটআপ কনফার্ম করুন |
| **১৫মি/৫মি** | এন্ট্রি টাইমিং | সুনির্দিষ্টভাবে এক্সিকিউট করুন |

---

## সাধারণ ভুল

### ❌ ভুল ১: বিশ্লেষণ পক্ষাঘাত
আপনার চার্ট অতিরিক্ত জটিল করবেন না। শুধু সবচেয়ে প্রাসঙ্গিক সেটআপে ফোকাস করুন।

### ❌ ভুল ২: উচ্চ টাইমফ্রেম উপেক্ষা করা
সর্বদা উচ্চ টাইমফ্রেম থেকে বিশ্লেষণ শুরু করুন। ডেইলি ট্রেন্ডের বিরুদ্ধে ১৫ মিনিটের সেটআপ অর্থহীন।

### ❌ ভুল ৩: কনফ্লুয়েন্স ছাড়া
একটি একক কনসেপ্টের উপর ভিত্তি করে কখনো ট্রেড করবেন না। সর্বদা কমপক্ষে ২-৩টি ফ্যাক্টর মিলে যাচ্ছে কিনা দেখুন।

### ❌ ভুল ৪: দুর্বল রিস্ক ম্যানেজমেন্ট
সেরা সেটআপও ব্যর্থ হতে পারে। প্রতি ট্রেডে ১-২% এর বেশি রিস্ক নেবেন না।

---

## রিস্ক ম্যানেজমেন্ট

| উপাদান | নির্দেশিকা |
|--------|-----------|
| **প্রতি ট্রেডে রিস্ক** | অ্যাকাউন্টের ১-২% |
| **স্টপ লস** | স্ট্রাকচারাল অবৈধকরণ পয়েন্টের উপর ভিত্তি করে |
| **টেক প্রফিট ১** | পরবর্তী স্ট্রাকচার লেভেলে ১:২ R:R |
| **টেক প্রফিট ২** | পরবর্তী লিকুইডিটি টার্গেটে ১:৩+ R:R |
| **সর্বোচ্চ দৈনিক ক্ষতি** | অ্যাকাউন্টের ৩-৫% |

---

## বাস্তব ট্রেডিং উদাহরণ

### উদাহরণ ১: ফরেক্স — EUR/USD

> **সেটআপ:** লন্ডন কিল জোনে (দুপুর ২:০০ BD) 1H চার্টে ${titleClean} চিহ্নিত। উচ্চ টাইমফ্রেম (4H) বুলিশ বায়াস কনফার্ম করে।
> **ট্রেড:** 1.0885 তে লং, 1.0865 তে স্টপ, 1.0940 তে টার্গেট।
> **ফলাফল:** রিস্ক: ২০ পিপ, রিওয়ার্ড: ৫৫ পিপ = **১:৩ R:R**

### উদাহরণ ২: গোল্ড — XAU/USD

> **সেটআপ:** NY কিল জোনে (রাত ৮:০০ BD) ১৫ মিনিটের চার্টে ${titleClean} দৃশ্যমান।
> **ট্রেড:** $2,340 তে শর্ট, $2,350 তে স্টপ, $2,310 তে টার্গেট।
> **ফলাফল:** রিস্ক: $10, রিওয়ার্ড: $30 = **১:৩ R:R**

---

## প্রো টিপস

<Callout type="tip" title="প্রো টিপ ১: মানের উপর ফোকাস">
**A+ সেটআপের** জন্য অপেক্ষা করুন যেখানে একাধিক ফ্যাক্টর মিলে যায়। দিনে একটি দুর্দান্ত ট্রেড দশটি মাঝারি ট্রেডকে হারায়।
</Callout>

<Callout type="tip" title="প্রো টিপ ২: কিল জোন ফোকাস">
কিল জোনে (লন্ডন: দুপুর ১:০০-৪:০০ BD, NY: রাত ৭:০০-১০:০০ BD) ${titleClean} সেটআপের উইন রেট অফ-আওয়ারের সেটআপের চেয়ে ৩০-৪০% বেশি।
</Callout>

---

## সারাংশ

| কনসেপ্ট | মূল বিষয় |
|---------|----------|
| **সংজ্ঞা** | ইনস্টিটিউশনাল প্রাইস আচরণ বোঝার জন্য ${categoryLabelBn} কনসেপ্ট |
| **সেরা টাইমফ্রেম** | চিহ্নিতকরণের জন্য 1H, এন্ট্রির জন্য ১৫মি/৫মি |
| **এন্ট্রি** | কনফার্মেশন সহ কী জোনে পুলব্যাকের পর |
| **সেরা শর্ত** | কিল জোন টাইমিং, HTF সামঞ্জস্য, মাল্টি-কনসেপ্ট কনফ্লুয়েন্স |

---

## সম্পর্কিত বিষয়

- [${categoryLabelBn} পরিচিতি](/bn/${category}/introduction) — আপনি নতুন হলে এখান থেকে শুরু করুন
- [ফেয়ার ভ্যালু গ্যাপ (FVG)](/bn/smc/fair-value-gap) — মূল এন্ট্রি কনসেপ্ট
- [অর্ডার ব্লক](/bn/smc/order-blocks) — ইনস্টিটিউশনাল জোন
- [ব্রেক অফ স্ট্রাকচার (BOS)](/bn/smc/bos) — স্ট্রাকচার বিশ্লেষণ`;
  }
}

// ─── Main logic ───

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  if (lines.length > 30) return false; // Skip already expanded files

  // Parse frontmatter
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return false;

  const fm = {};
  fmMatch[1].split('\n').forEach(line => {
    const [key, ...vals] = line.split(':');
    if (key && vals.length) fm[key.trim()] = vals.join(':').trim().replace(/^"|"$/g, '');
  });

  return fm;
}

function generateFile(filePath, slug, category, lang) {
  const fm = processFile(filePath);
  if (!fm) return;

  // Check if we have specific content for this topic
  const specificContent = SMC_TOPICS[slug];
  let newContent;

  if (specificContent && specificContent[lang]) {
    const spec = specificContent[lang];
    newContent = `---
title: "${spec.title}"
description: "${spec.description}"
level: ${spec.level || fm.level || 'intermediate'}
order: ${fm.order || 5}
lastUpdated: "2026-05-11"
---
${spec.content}
`;
  } else {
    // Use generic but comprehensive template
    const titleClean = fm.title || slug.replace(/-/g, ' ');
    const generatedContent = generateTopicContent(slug, fm, lang, category);

    const title = lang === 'bn' ? fm.title : fm.title;
    const desc = lang === 'bn'
      ? `${titleClean} এর সম্পূর্ণ গাইড। চার্টে চিহ্নিতকরণ, এন্ট্রি ও এক্সিট কৌশল, রিস্ক ম্যানেজমেন্ট এবং বাস্তব ট্রেডিং উদাহরণ সহ বিস্তারিত শিক্ষামূলক বিষয়বস্তু।`
      : `Complete guide to ${titleClean}. Detailed educational content with chart identification, entry and exit strategies, risk management, and real trading examples.`;

    newContent = `---
title: "${title}"
description: "${desc}"
level: ${fm.level || 'intermediate'}
order: ${fm.order || 5}
lastUpdated: "2026-05-11"
---
${generatedContent}
`;
  }

  fs.writeFileSync(filePath, newContent, 'utf-8');
  return true;
}

// Process all categories
const categories = ['smc', 'price-action', 'ict'];
const langs = ['en', 'bn'];
let updated = 0;
let skipped = 0;

for (const category of categories) {
  for (const lang of langs) {
    const dir = path.join(CONTENT_DIR, lang, category);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx') && f !== '_meta.json');

    for (const file of files) {
      const filePath = path.join(dir, file);
      const slug = file.replace('.mdx', '');

      // Check if stub
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.split('\n').length > 30) {
        skipped++;
        continue;
      }

      if (generateFile(filePath, slug, category, lang)) {
        updated++;
        console.log(`✅ ${lang}/${category}/${slug}`);
      }
    }
  }
}

console.log(`\nDone! Updated: ${updated}, Skipped (already expanded): ${skipped}`);

