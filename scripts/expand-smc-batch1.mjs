import { writeFileSync } from 'fs';
import { join } from 'path';
const C = join(process.cwd(), 'content');
const w = (l, slug, f, c) => {
  writeFileSync(join(C, l, 'smc', slug + '.mdx'), `---\ntitle: "${f.title}"\ndescription: "${f.description}"\nlevel: ${f.level}\norder: ${f.order}\nlastUpdated: "2026-06-10"\n---\n` + c, 'utf-8');
  console.log(`✅ ${l}/smc/${slug}`);
};

// SMC BATCH 1: accumulation, distribution, reaccumulation, manipulation

w('en', 'accumulation', {title:"SMC Accumulation — Complete Guide",description:"Master the Accumulation phase. Learn how smart money builds positions at discount before markup begins.",level:"intermediate",order:11}, `
## What is Accumulation?

Accumulation is the **first phase** of the institutional cycle where smart money builds large long positions at discount prices. Market appears ranging/bearish, but institutions are absorbing all sell orders.

<Callout type="info" title="Smart Money Playbook">
Institutions can't buy at market — their size would spike price. They accumulate gradually during ranges, using liquidity sweeps to fill at optimal prices.
</Callout>

---

## The Institutional Cycle

\`\`\`
1. ACCUMULATION → Smart money buys at discount
2. MARKUP → Price rises (institutional delivery)
3. DISTRIBUTION → Smart money sells at premium
4. MARKDOWN → Price falls (new cycle begins)
\`\`\`

---

## Characteristics of Accumulation

| Feature | Description |
|---------|-------------|
| **Price behavior** | Sideways range, choppy, no clear direction |
| **Location** | At significant support / after markdown |
| **Duration** | Days to weeks (higher TF = longer) |
| **Volume** | Increasing on pushes down (absorption) |
| **Structure** | Range-bound, false breakdowns common |
| **Retail perception** | "Going lower" — bearish sentiment |
| **Institutional action** | Buying into selling pressure |

---

## How Institutions Accumulate

\`\`\`
1. Price drops to discount zone (below equilibrium)
2. Range forms at key demand area
3. Liquidity sweeps below range lows (stop hunts)
4. Institutions fill long orders on the sweep
5. Price breaks above range (markup begins)

Key sign: Price sweeps lows but DOESN'T continue down
        → Institutions are absorbing sell orders
\`\`\`

---

## Identifying Accumulation

- **Spring/Sweep:** Price breaks below support briefly, reverses strongly
- **Decreasing sell pressure:** Each push down gets weaker
- **Bullish OBs forming:** Strong bullish reactions after each sweep
- **LTF shifting bullish:** CHOCH appearing on M15/H1
- **Volume increasing on bounces:** Buyers entering with conviction

---

## Trading Accumulation

\`\`\`
1. Identify range at discount/support (potential accumulation)
2. Wait for liquidity sweep below range lows
3. Look for bullish CHOCH on LTF (M15/H1) after sweep
4. Enter long at Order Block formed by sweep reaction
5. Stop: Below the sweep low
6. Target: Range top first, then markup targets (next HTF level)

Key: DON'T buy blindly in range. Wait for SWEEP + STRUCTURAL SHIFT.
\`\`\`

---

## Accumulation vs. Random Range

| Factor | Accumulation (Trade) | Random Range (Avoid) |
|--------|---------------------|---------------------|
| Location | At discount / support | Middle of nowhere |
| Sweeps | Multiple failed breakdowns | Clean range bounces |
| Context | Follows markdown phase | No prior trend |
| LTF behavior | Shifting bullish internally | No directional shift |
| Result | Explosive bullish breakout | Could break either way |

---

## Related Topics

- [Distribution](/en/smc/distribution) — Opposite phase (selling at premium)
- [Reaccumulation](/en/smc/reaccumulation) — Mid-trend accumulation
- [Liquidity Pools](/en/smc/liquidity-pools) — Sweeps during accumulation
- [Wyckoff Relation](/en/smc/wyckoff-relation) — Wyckoff accumulation model
- [Premium & Discount](/en/smc/premium-discount) — Buying at discount zones
`);

w('bn', 'accumulation', {title:"SMC Accumulation — সম্পূর্ণ গাইড",description:"Accumulation Phase আয়ত্ত করুন। Markup শুরুর আগে Smart Money কীভাবে Discount-এ Position তৈরি করে শিখুন।",level:"intermediate",order:11}, `
## Accumulation কী?

Accumulation হলো Institutional Cycle-এর **প্রথম Phase** যেখানে Smart Money Discount Price-এ বড় Long Position তৈরি করে। Market Ranging/Bearish দেখায়, কিন্তু Institution সব Sell Order Absorb করছে।

<Callout type="info" title="Smart Money Playbook">
Institution Market-এ কিনতে পারে না — Size Price Spike করবে। Range-এ ধীরে ধীরে Accumulate করে, Liquidity Sweep দিয়ে Optimal Price-এ Fill করে।
</Callout>

---

## Institutional Cycle

\`\`\`
1. ACCUMULATION → Smart Money Discount-এ কেনে
2. MARKUP → Price বাড়ে (Institutional Delivery)
3. DISTRIBUTION → Smart Money Premium-এ বেচে
4. MARKDOWN → Price কমে (নতুন Cycle শুরু)
\`\`\`

---

## Accumulation-এর বৈশিষ্ট্য

| বৈশিষ্ট্য | বর্ণনা |
|-----------|--------|
| **Price আচরণ** | Sideways Range, Choppy, স্পষ্ট Direction নেই |
| **অবস্থান** | তাৎপর্যপূর্ণ Support-এ / Markdown-এর পর |
| **সময়কাল** | দিন থেকে সপ্তাহ |
| **Volume** | নিচে Push-এ বাড়ে (Absorption) |
| **Structure** | Range-bound, False Breakdown সাধারণ |
| **Retail ধারণা** | "নিচে যাচ্ছে" — Bearish Sentiment |
| **Institutional কাজ** | Selling Pressure-এ কিনছে |

---

## Institution কীভাবে Accumulate করে

\`\`\`
1. Price Discount Zone-এ নামে (Equilibrium-এর নিচে)
2. Key Demand Area-তে Range তৈরি
3. Range Low-এর নিচে Liquidity Sweep (Stop Hunt)
4. Institution Sweep-এ Long Order Fill করে
5. Price Range-এর উপরে Break (Markup শুরু)

মূল লক্ষণ: Price Low Sweep করে কিন্তু নিচে CONTINUE করে না
        → Institution Sell Order Absorb করছে
\`\`\`

---

## Accumulation চিহ্নিতকরণ

- **Spring/Sweep:** Price সংক্ষেপে Support-এর নিচে ভাঙে, শক্তিশালীভাবে Reverse
- **কমতে থাকা Sell Pressure:** প্রতিটি নিচের Push দুর্বল
- **Bullish OB তৈরি:** প্রতিটি Sweep-এর পর শক্তিশালী Bullish Reaction
- **LTF Bullish Shift:** M15/H1-এ CHOCH দেখা যাচ্ছে

---

## Accumulation Trade করা

\`\`\`
1. Discount/Support-এ Range চিহ্নিত (সম্ভাব্য Accumulation)
2. Range Low-এর নিচে Liquidity Sweep-এর জন্য অপেক্ষা
3. Sweep-এর পর LTF (M15/H1)-এ Bullish CHOCH খুঁজুন
4. Sweep Reaction-এ তৈরি Order Block-এ Long Enter
5. Stop: Sweep Low-এর নিচে
6. Target: প্রথমে Range Top, তারপর Markup Target

মূল কথা: Range-এ অন্ধভাবে কিনবেন না। SWEEP + STRUCTURAL SHIFT অপেক্ষা।
\`\`\`

---

## সম্পর্কিত বিষয়

- [Distribution](/bn/smc/distribution) — বিপরীত Phase (Premium-এ বিক্রি)
- [Reaccumulation](/bn/smc/reaccumulation) — Mid-trend Accumulation
- [Liquidity Pools](/bn/smc/liquidity-pools) — Accumulation-এ Sweep
- [Wyckoff Relation](/bn/smc/wyckoff-relation) — Wyckoff Accumulation Model
`);

w('en', 'distribution', {title:"SMC Distribution — Complete Guide",description:"Master the Distribution phase — how smart money exits positions at premium before markdown.",level:"intermediate",order:12}, `
## What is Distribution?

Distribution is the **third phase** where smart money offloads positions at premium prices. The market looks bullish — retail traders are buying — but institutions are secretly selling into their buying pressure.

<Callout type="info" title="Smart Money Exit">
Institutions can't sell everything at once — it would crash the market. They distribute gradually at premium prices while retail traders still buy the "uptrend."
</Callout>

---

## Characteristics

| Feature | Description |
|---------|-------------|
| **Price behavior** | Sideways at highs, choppy |
| **Location** | At resistance / after markup |
| **Structure** | False breakouts above common |
| **Volume** | Increasing on pushes UP (supply entering) |
| **Retail perception** | "Bullish breakout coming!" |
| **Institutional action** | Selling into buying pressure |

---

## How Institutions Distribute

\`\`\`
1. Price arrives at premium zone (after markup)
2. Range forms at key supply area
3. Liquidity sweeps ABOVE range highs (traps buyers)
4. Institutions fill SHORT orders on the sweep
5. Price breaks below range (markdown begins)

Key sign: Price sweeps highs but DOESN'T continue up
        → Institutions selling into retail buying
\`\`\`

---

## Trading Distribution

\`\`\`
Short Entry Strategy:
1. Identify range at premium/resistance (potential distribution)
2. Wait for liquidity sweep above range highs
3. Look for bearish CHOCH on LTF after sweep
4. Enter short at Order Block from sweep reaction
5. Stop: Above the sweep high
6. Target: Range bottom first, then markdown targets
\`\`\`

---

## Distribution vs. Accumulation

| Factor | Distribution | Accumulation |
|--------|-------------|--------------|
| Location | Premium / resistance | Discount / support |
| Institutional action | Selling | Buying |
| Sweep direction | Above highs | Below lows |
| Followed by | Markdown (down) | Markup (up) |
| Retail doing | Buying (trapped) | Selling (trapped) |

---

## Related Topics

- [Accumulation](/en/smc/accumulation) — Opposite phase
- [Premium & Discount](/en/smc/premium-discount) — Selling at premium
- [Manipulation](/en/smc/manipulation) — Distribution sweeps
- [Wyckoff Relation](/en/smc/wyckoff-relation) — Wyckoff distribution model
`);

w('bn', 'distribution', {title:"SMC Distribution — সম্পূর্ণ গাইড",description:"Distribution Phase আয়ত্ত করুন — Markdown-এর আগে Smart Money কীভাবে Premium-এ Position Exit করে।",level:"intermediate",order:12}, `
## Distribution কী?

Distribution হলো **তৃতীয় Phase** যেখানে Smart Money Premium Price-এ Position ছাড়ে। Market Bullish দেখায় — Retail কিনছে — কিন্তু Institution তাদের Buying Pressure-এ গোপনে বিক্রি করছে।

<Callout type="info" title="Smart Money Exit">
Institution সব একবারে বিক্রি করতে পারে না — Market Crash করবে। Retail "Uptrend" কিনতে থাকাকালীন Premium-এ ধীরে ধীরে Distribute করে।
</Callout>

---

## বৈশিষ্ট্য

| বৈশিষ্ট্য | বর্ণনা |
|-----------|--------|
| **Price আচরণ** | High-তে Sideways, Choppy |
| **অবস্থান** | Resistance-এ / Markup-এর পর |
| **Structure** | উপরে False Breakout সাধারণ |
| **Volume** | উপরে Push-এ বাড়ে (Supply ঢুকছে) |
| **Retail ধারণা** | "Bullish Breakout আসছে!" |
| **Institutional কাজ** | Buying Pressure-এ বিক্রি |

---

## Institution কীভাবে Distribute করে

\`\`\`
1. Price Premium Zone-এ আসে (Markup-এর পর)
2. Key Supply Area-তে Range তৈরি
3. Range High-এর উপরে Liquidity Sweep (Buyer Trap)
4. Institution Sweep-এ SHORT Order Fill করে
5. Price Range-এর নিচে Break (Markdown শুরু)

মূল লক্ষণ: Price High Sweep করে কিন্তু উপরে CONTINUE করে না
        → Institution Retail Buying-এ বিক্রি করছে
\`\`\`

---

## Distribution Trade করা

\`\`\`
Short Entry Strategy:
1. Premium/Resistance-এ Range চিহ্নিত (সম্ভাব্য Distribution)
2. Range High-এর উপরে Liquidity Sweep অপেক্ষা
3. Sweep-এর পর LTF-এ Bearish CHOCH
4. Sweep Reaction OB-তে Short Enter
5. Stop: Sweep High-এর উপরে
6. Target: প্রথমে Range Bottom, তারপর Markdown Target
\`\`\`

---

## সম্পর্কিত বিষয়

- [Accumulation](/bn/smc/accumulation) — বিপরীত Phase
- [Premium ও Discount](/bn/smc/premium-discount) — Premium-এ বিক্রি
- [Manipulation](/bn/smc/manipulation) — Distribution Sweep
- [Wyckoff Relation](/bn/smc/wyckoff-relation) — Wyckoff Distribution
`);

w('en', 'reaccumulation', {title:"SMC Re-accumulation — Complete Guide",description:"Master Re-accumulation — mid-trend consolidation where smart money adds to winning positions before next expansion.",level:"advanced",order:24}, `
## What is Re-accumulation?

Re-accumulation is a **consolidation phase within an uptrend** where smart money adds to existing long positions before pushing price higher. It looks like accumulation but occurs MID-TREND, not at the bottom.

<Callout type="info" title="Adding to Winners">
Re-accumulation is how institutions scale into winning positions. They pause the markup, build more longs at a higher level, then push to the next target. This creates the "staircase" pattern in strong trends.
</Callout>

---

## Re-accumulation vs. Others

| Feature | Accumulation | Re-accumulation | Distribution |
|---------|-------------|-----------------|--------------|
| Location | Bottom (after markdown) | Middle of uptrend | Top (after markup) |
| Purpose | Build initial position | Add to winners | Exit position |
| What follows | Markup (up) | Continuation (up) | Markdown (down) |
| Range breaks | Upward | Upward | Downward |
| Sweeps | Below lows | Below lows | Above highs |

---

## Identifying Re-accumulation

\`\`\`
Strong bullish trend → Range forms → Sweep below range → Continues UP

Signs:
1. Clear uptrend with BOS before the range
2. Price consolidates (mini-range forms)
3. Liquidity builds below the range lows
4. Sweep occurs (takes the lows briefly)
5. Price rebounds strongly, uptrend continues
6. New BOS above range confirms completion
\`\`\`

---

## Trading Re-accumulation

\`\`\`
1. Identify consolidation within an uptrend
2. Wait for sweep below the range lows
3. LTF bullish CHOCH after the sweep
4. Enter long at OB/FVG created by the reaction
5. Stop: Below the sweep
6. Target: Next BSL above or HTF level

HIGH PROBABILITY because:
- HTF trend is bullish (with you)
- Liquidity has been taken (fuel collected)
- LTF has shifted bullish
- Fresh momentum is entering
\`\`\`

---

## Related Topics

- [Accumulation](/en/smc/accumulation) — Initial position building
- [BOS](/en/smc/bos) — Confirming trend continuation
- [Liquidity Pools](/en/smc/liquidity-pools) — Sweeps in re-accumulation
- [Premium & Discount](/en/smc/premium-discount) — Buying at range discount
`);

w('bn', 'reaccumulation', {title:"SMC Re-accumulation — সম্পূর্ণ গাইড",description:"Re-accumulation আয়ত্ত করুন — পরবর্তী Expansion-এর আগে Smart Money Winner-এ যোগ করার Mid-trend Consolidation।",level:"advanced",order:24}, `
## Re-accumulation কী?

Re-accumulation হলো **Uptrend-এর মধ্যে Consolidation Phase** যেখানে Smart Money Price আরো উপরে ঠেলার আগে বিদ্যমান Long Position-এ যোগ করে। Accumulation-এর মতো কিন্তু Bottom-এ নয়, MID-TREND-এ ঘটে।

<Callout type="info" title="Winner-এ যোগ">
Re-accumulation হলো Institution Winning Position-এ Scale In করার পদ্ধতি। Markup থামান, Higher Level-এ আরো Long তৈরি, পরবর্তী Target-এ Push। শক্তিশালী Trend-এ "Staircase" Pattern তৈরি করে।
</Callout>

---

## তুলনা

| বৈশিষ্ট্য | Accumulation | Re-accumulation | Distribution |
|-----------|-------------|-----------------|--------------|
| অবস্থান | Bottom (Markdown-এর পর) | Uptrend-এর মাঝে | Top (Markup-এর পর) |
| উদ্দেশ্য | প্রাথমিক Position তৈরি | Winner-এ যোগ | Position Exit |
| পরে যা আসে | Markup (উপরে) | Continuation (উপরে) | Markdown (নিচে) |
| Sweep | Low-এর নিচে | Low-এর নিচে | High-এর উপরে |

---

## চিহ্নিতকরণ

\`\`\`
শক্তিশালী Bullish Trend → Range তৈরি → Range-এর নিচে Sweep → UP Continue

লক্ষণ:
1. Range-এর আগে BOS-সহ স্পষ্ট Uptrend
2. Price Consolidate করে (Mini-range তৈরি)
3. Range Low-এর নিচে Liquidity জমা
4. Sweep ঘটে (সংক্ষেপে Low নেয়)
5. Price শক্তিশালীভাবে Rebound, Uptrend Continue
6. Range-এর উপরে নতুন BOS সম্পন্ন Confirm করে
\`\`\`

---

## Trading

\`\`\`
1. Uptrend-এর মধ্যে Consolidation চিহ্নিত
2. Range Low-এর নিচে Sweep অপেক্ষা
3. Sweep-এর পর LTF Bullish CHOCH
4. Reaction OB/FVG-তে Long Enter
5. Stop: Sweep-এর নিচে
6. Target: উপরের পরবর্তী BSL বা HTF Level

HIGH PROBABILITY কারণ:
- HTF Trend Bullish (আপনার সাথে)
- Liquidity নেওয়া (জ্বালানি সংগৃহীত)
- LTF Bullish Shift হয়েছে
- Fresh Momentum ঢুকছে
\`\`\`

---

## সম্পর্কিত বিষয়

- [Accumulation](/bn/smc/accumulation) — প্রাথমিক Position তৈরি
- [BOS](/bn/smc/bos) — Trend Continuation Confirm
- [Liquidity Pools](/bn/smc/liquidity-pools) — Re-accumulation-এ Sweep
`);

w('en', 'manipulation', {title:"SMC Manipulation — Complete Guide",description:"Master how institutions manipulate price. Learn stop hunts, false breakouts, news manipulation, and how to profit from engineered moves.",level:"intermediate",order:13}, `
## What is Manipulation in SMC?

Manipulation is the **deliberate engineering of price moves** by institutions to trigger retail stop losses, create liquidity, and fill large orders at optimal prices. It's not illegal — it's the natural result of institutions needing liquidity to execute.

<Callout type="warning" title="Manipulation = Opportunity">
Once you understand WHERE and WHEN institutions manipulate, you stop being the victim and start profiting. Every stop hunt is an entry signal for the informed trader.
</Callout>

---

## Types of Manipulation

### 1. Liquidity Sweep (Stop Hunt)
\`\`\`
1. Price creates obvious high/low (retail places stops)
2. Price sweeps beyond the level (triggers stops)
3. Institutions fill orders using triggered stop orders
4. Price immediately reverses to true direction
\`\`\`

### 2. False Breakout (Inducement)
\`\`\`
1. Clear S/R level forms (retail waits for breakout)
2. Price breaks out (retail enters breakout trade)
3. Breakout fails — price reverses back inside
4. Breakout traders get stopped out (provide liquidity)
5. True move goes opposite direction
\`\`\`

### 3. News Manipulation
\`\`\`
1. High-impact news releases
2. Price spikes BOTH directions rapidly
3. Stops hit on both sides = maximum liquidity collected
4. Real direction emerges 15-30 minutes after
5. Institutions filled during the chaos
\`\`\`

---

## Where Manipulation Happens

| Location | Type | What Happens |
|----------|------|-------------|
| Equal highs | BSL sweep | Breaks above, reverses down |
| Equal lows | SSL sweep | Breaks below, reverses up |
| Session H/L | Session sweep | New session targets previous |
| News events | Both sides | Double-side sweep |
| Obvious S/R | False break | Triggers and traps breakout traders |

---

## Trading Manipulation

### Rules:
1. **Never place stops at obvious levels** — always add buffer
2. **Wait for the sweep** — don't trade the initial break
3. **Trade the reversal AFTER** manipulation completes
4. **Look for CHOCH** on LTF after the sweep
5. **Manipulation = entry signal** — the sweep IS your setup

### Complete Setup:
\`\`\`
1. Identify obvious liquidity level (equal H/L, clear S/R)
2. Wait for price to sweep the level
3. Watch for immediate reversal (strong rejection candle)
4. LTF CHOCH confirms smart money direction
5. Enter opposite to the manipulation direction
6. Stop: Beyond the sweep wick
7. Target: Opposite liquidity pool
\`\`\`

---

## Related Topics

- [Inducement](/en/smc/inducement) — Setting up the trap
- [Liquidity Pools](/en/smc/liquidity-pools) — Where manipulation targets
- [Equal Highs & Lows](/en/smc/equal-highs-lows) — Key manipulation targets
- [Kill Zones](/en/smc/kill-zones) — When manipulation happens most
`);

w('bn', 'manipulation', {title:"SMC Manipulation — সম্পূর্ণ গাইড",description:"Institution কীভাবে Price Manipulate করে আয়ত্ত করুন। Stop Hunt, False Breakout, News Manipulation এবং Engineered Move থেকে Profit শিখুন।",level:"intermediate",order:13}, `
## SMC-তে Manipulation কী?

Manipulation হলো Retail Stop Loss Trigger, Liquidity তৈরি ও Optimal Price-এ বড় Order Fill করতে Institution-এর **ইচ্ছাকৃত Price Move Engineering**। এটি অবৈধ নয় — Institution-এর Execution-এ Liquidity প্রয়োজনের স্বাভাবিক ফলাফল।

<Callout type="warning" title="Manipulation = সুযোগ">
Institution কোথায় ও কখন Manipulate করে বুঝলে, শিকার থেকে Profiteer হবেন। প্রতিটি Stop Hunt সচেতন Trader-এর Entry Signal।
</Callout>

---

## Manipulation-এর ধরন

### ১. Liquidity Sweep (Stop Hunt)
\`\`\`
1. Price সুস্পষ্ট High/Low তৈরি (Retail Stop রাখে)
2. Price Level-এর বাইরে Sweep (Stop Trigger)
3. Institution Triggered Stop Order দিয়ে Fill
4. প্রকৃত Direction-এ তাৎক্ষণিক Reversal
\`\`\`

### ২. False Breakout (Inducement)
\`\`\`
1. স্পষ্ট S/R Level তৈরি (Retail Breakout-এর জন্য অপেক্ষা)
2. Price Break Out (Retail Enter)
3. Breakout Fail — Price ভিতরে ফিরে Reverse
4. Breakout Trader Stop Out হয় (Liquidity দেয়)
5. প্রকৃত Move বিপরীত Direction-এ
\`\`\`

### ৩. News Manipulation
\`\`\`
1. High-impact News Release
2. Price উভয় Direction-এ দ্রুত Spike
3. উভয় দিকে Stop Hit = সর্বোচ্চ Liquidity সংগৃহীত
4. ১৫-৩০ মিনিট পর প্রকৃত Direction প্রকাশ
5. Chaos-এ Institution Fill হয়েছে
\`\`\`

---

## কোথায় Manipulation ঘটে

| অবস্থান | ধরন | কী ঘটে |
|---------|------|--------|
| Equal High | BSL Sweep | উপরে ভাঙে, নিচে Reverse |
| Equal Low | SSL Sweep | নিচে ভাঙে, উপরে Reverse |
| Session H/L | Session Sweep | নতুন Session পূর্ববর্তী Target করে |
| News Event | উভয় দিক | Double-side Sweep |
| সুস্পষ্ট S/R | False Break | Breakout Trader Trap ও Trigger |

---

## Manipulation Trade করা

### নিয়ম:
1. **সুস্পষ্ট Level-এ Stop রাখবেন না** — সবসময় Buffer দিন
2. **Sweep-এর জন্য অপেক্ষা** — Initial Break Trade নয়
3. **Manipulation সম্পন্ন হওয়ার পর Reversal Trade**
4. **Sweep-এর পর LTF-এ CHOCH খুঁজুন**
5. **Manipulation = Entry Signal** — Sweep-ই আপনার Setup

### সম্পূর্ণ Setup:
\`\`\`
1. সুস্পষ্ট Liquidity Level চিহ্নিত (Equal H/L, স্পষ্ট S/R)
2. Price Level Sweep করার অপেক্ষা
3. তাৎক্ষণিক Reversal দেখুন (শক্তিশালী Rejection Candle)
4. LTF CHOCH Smart Money Direction Confirm করে
5. Manipulation Direction-এর বিপরীতে Enter
6. Stop: Sweep Wick-এর বাইরে
7. Target: বিপরীত Liquidity Pool
\`\`\`

---

## সম্পর্কিত বিষয়

- [Inducement](/bn/smc/inducement) — Trap Setup করা
- [Liquidity Pools](/bn/smc/liquidity-pools) — Manipulation কোথায় Target করে
- [Equal Highs ও Lows](/bn/smc/equal-highs-lows) — মূল Manipulation Target
- [Kill Zones](/bn/smc/kill-zones) — সবচেয়ে বেশি কখন ঘটে
`);

console.log('\n✅ SMC Batch 1 Complete: 4 topics × 2 languages = 8 files');
console.log('Topics: accumulation, distribution, reaccumulation, manipulation');

