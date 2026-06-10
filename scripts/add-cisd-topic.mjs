import { writeFileSync } from 'fs';
import { join } from 'path';

const C = join(process.cwd(), 'content');

const writeEN = (slug, meta, content) => {
  const path = join(C, 'en', 'academy', 'ict-smc-course', `${slug}.mdx`);
  const frontmatter = `---
title: "${meta.title}"
description: "${meta.description}"
order: ${meta.order}
level: ${meta.level}
lastUpdated: "2026-06-09"
---
`;
  writeFileSync(path, frontmatter + content, 'utf-8');
  console.log(`✅ EN: ${slug}`);
};

const writeBN = (slug, meta, content) => {
  const path = join(C, 'bn', 'academy', 'ict-smc-course', `${slug}.mdx`);
  const frontmatter = `---
title: "${meta.title}"
description: "${meta.description}"
order: ${meta.order}
level: ${meta.level}
lastUpdated: "2026-06-09"
---
`;
  writeFileSync(path, frontmatter + content, 'utf-8');
  console.log(`✅ BN: ${slug}`);
};

// CISD Framework
writeEN('38-cisd-framework', {
  title: 'CISD Framework',
  description: 'Master the CISD model — Consolidation, Inducement, Stop-loss hunt, Distribution. Learn the four-phase institutional trading cycle.',
  order: 38,
  level: 'advanced'
}, `# CISD Framework

### Definition

CISD is a **four-phase institutional trading framework** that describes how Smart Money operates: **Consolidation** (range building), **Inducement** (attracting retail traders), **Stop-loss hunt** (sweeping stops for liquidity), and **Distribution** (the true institutional move). This model provides a more granular breakdown of the institutional cycle compared to the Power of Three (AMD) model.

**The Four Phases:**
1. **Consolidation** — Price creates a tight range, building liquidity pools
2. **Inducement** — A false move attracts retail traders into wrong positions
3. **Stop-loss hunt** — Price sweeps stops above/below range for liquidity
4. **Distribution** — The real institutional move delivers price to target

**Relation to Power of Three:** CISD is essentially AMD with more detailed middle phases (Inducement + Stop-loss hunt = Manipulation).

### Why It Matters

- CISD provides MORE PRECISE entry timing than basic AMD
- It separates inducement from stop-loss hunting — two distinct phases
- Understanding each phase prevents premature entries
- CISD reveals the EXACT moment to enter (after stop-loss hunt, before distribution)
- This framework applies to every timeframe and every session

### How It Works

**Phase 1: Consolidation (C)**

**Characteristics:**
- Price trades in a tight range
- Equal highs and equal lows form
- Low volatility, small candle bodies
- Duration: Hours (intraday) to days (swing)
- Liquidity accumulates above and below range

**What Smart Money Does:**
- Builds positions quietly using limit orders
- Allows liquidity pools to develop
- Creates the "trap" that will spring later

**Phase 2: Inducement (I)**

**Characteristics:**
- Price makes a SMALL move outside the consolidation range
- This move appears to be a "breakout" to retail traders
- Retail enters positions in the direction of the fake break
- The move is weak (small candles, hesitation)
- Often occurs just before a session open

**What Smart Money Does:**
- Positions retail traders on the WRONG side
- Creates victims whose stops will become their liquidity
- Sets up the trap perfectly

**Phase 3: Stop-loss Hunt (S)**

**Characteristics:**
- Price aggressively moves BEYOND the inducement point
- Sweeps the obvious stops above/below the range
- Sharp move with volume spike
- Retail traders get stopped out
- Creates visible wicks on charts

**What Smart Money Does:**
- Triggered retail stops = Filled institutional orders
- Acquires the liquidity needed for the real move
- This is their ENTRY for the true directional move

**Phase 4: Distribution (D)**

**Characteristics:**
- Price reverses direction completely
- Strong momentum candles
- FVG creation, BOS/CHOCH confirmation
- Maximum displacement
- Targets opposing liquidity pool

**What Smart Money Does:**
- Delivers price to their profit targets
- This is where they EXIT their accumulated positions
- Retail is now on the wrong side, providing exit liquidity

### Institutional Logic

**Why the CISD pattern exists:**

1. **Consolidation is necessary** because institutions can't enter large positions instantly without moving price
2. **Inducement creates victims** — retail traders who will provide liquidity via their stops
3. **Stop-loss hunt provides liquidity** — the fuel needed for the real move
4. **Distribution generates profits** — institutions exit at favorable prices

**The Mathematical Reality:**
- For every institutional LONG position, someone must SELL
- For every institutional SHORT position, someone must BUY
- CISD ensures retail provides this liquidity at exactly the right time

### Trading Application

**Identifying CISD in Real-Time:**

**Step 1: Spot Consolidation**
- Look for 3+ hours of range-bound price action
- Mark equal highs (BSL) and equal lows (SSL)
- Identify the liquidity pools

**Step 2: Recognize Inducement**
- Watch for small breakout of consolidation
- If breakout is weak (small candles, wicks) = Inducement
- DON'T trade this move — it's the trap

**Step 3: Wait for Stop-loss Hunt**
- Price aggressively breaks beyond inducement point
- Large wick forms sweeping stops
- This is the manipulation/stop hunt phase
- STILL don't enter — wait for reversal

**Step 4: Enter During Distribution**
- After stop hunt, watch for reversal signals:
  - FVG creation
  - BOS/CHOCH opposite direction
  - Strong rejection candle
- Enter on retracement to FVG/OB/OTE
- This is phase 4 — the real move

**Perfect CISD Trade Setup:**

\`\`\`
Entry Checklist:
✅ Phase 1: Consolidation identified (3+ hours)
✅ Phase 2: Inducement occurred (weak fake breakout)
✅ Phase 3: Stop hunt confirmed (aggressive sweep with wick)
✅ Phase 4: Distribution beginning (reversal + BOS)
✅ FVG or OB present for entry
✅ HTF bias aligned
✅ Entry during Kill Zone
\`\`\`

### CISD vs Other Models

| Model | Phases | Best Use |
|-------|--------|----------|
| **AMD** | 3 phases | General framework |
| **CISD** | 4 phases | Precision timing |
| **PO3** | 3 phases | Session-based trading |
| **Market Maker** | 3 phases | Broad understanding |

**When to Use CISD:**
- When you need EXACT entry timing
- During ranging markets before major moves
- For intraday scalping with precision
- When consolidation is clearly defined

### Common Mistakes

- ❌ Trading the Inducement move (Phase 2) — This is the trap!
- ❌ Entering during the Stop-loss hunt (Phase 3) — Too early, will get stopped
- ❌ Not waiting for Distribution confirmation — Reversal must be clear
- ❌ Missing the Consolidation phase — Without C, there's no CISD
- ❌ Expecting CISD on every setup — Sometimes market moves without full CISD

### Advanced Notes

**CISD Variations:**
- **Double CISD:** Price consolidates, induces, hunts BOTH sides before distribution
- **Failed CISD:** If distribution never occurs after stop hunt = Setup invalid
- **Nested CISD:** LTF CISD within HTF CISD (common in strong trends)
- **Compressed CISD:** All 4 phases occur in 30-60 minutes (scalping timeframe)

**Time-Based CISD:**
- **Daily CISD:** Asian = C, London open = I+S, London session = D
- **Weekly CISD:** Mon-Tue = C, Wed = I+S, Thu-Fri = D
- **Intraday CISD:** Pre-session = C, Open = I+S, First hour = D

**Volume Confirmation:**
- Consolidation = Low volume
- Inducement = Moderate volume (fake interest)
- Stop-loss hunt = HIGH volume spike (stops triggered)
- Distribution = High sustained volume (real move)

### Example

**EUR/USD — Complete CISD Trade:**

**Phase 1: Consolidation (Asian Session)**
- **Time:** 12:00 AM - 7:00 AM London
- **Range:** 1.0850 - 1.0870 (20 pips)
- **Equal Highs:** 1.0870 (BSL)
- **Equal Lows:** 1.0850 (SSL)
- **Duration:** 7 hours
- **HTF Context:** 4H bullish bias

**Phase 2: Inducement (7:00-7:30 AM)**
- **Move:** Price drops to 1.0848 (slightly below SSL)
- **Candle:** Small bearish candle with upper wick
- **Retail Action:** Early bears enter SHORT here
- **Duration:** 30 minutes
- **Recognition:** Weak move, no follow-through = Inducement

**Phase 3: Stop-loss Hunt (8:00 AM London Open)**
- **Move:** Price spikes DOWN to 1.0835 (13 pips below inducement)
- **Candle:** Large bearish candle with huge lower wick
- **Action:** SSL swept, retail bears' stops hit, aggressive longs stopped
- **Peak:** 1.0835 is the low
- **Reversal:** Immediate bullish engulfing forms at 8:12 AM

**Phase 4: Distribution (8:15 AM - 11:00 AM)**
- **Reversal Confirmation:**
  - BOS bullish (breaks above 1.0870)
  - FVG created at 1.0843-1.0848
  - Strong displacement candles upward
- **Retracement:** Price returns to 1.0852 (FVG + OTE zone)
- **ENTRY:** BUY at 1.0852
- **Stop Loss:** 1.0838 (below stop-hunt low)
- **Target 1:** 1.0900 (first BSL)
- **Target 2:** 1.0930 (major BSL)

**Trade Execution:**
- Entry: 1.0852
- Stop: 1.0838 (14 pips)
- Target 1: 1.0900 (48 pips) → 1:3.4 RR
- Target 2: 1.0930 (78 pips) → 1:5.6 RR

**Result:**
- Price hit Target 1 at 9:45 AM (50% position closed)
- Price hit Target 2 at 10:50 AM (remaining 50% closed)
- Total profit: 63 pips on 14 pip risk = 1:4.5 RR actual

**CISD Success Factors:**
✅ All four phases clearly visible
✅ Stop-loss hunt created perfect entry setup
✅ Distribution phase strong and sustained
✅ HTF alignment provided confidence
✅ Entry at optimal retracement (FVG + OTE)

---

## Key Takeaways

1. **CISD provides precision** — More detailed than AMD/PO3
2. **Each phase has a purpose** — Don't skip or rush through them
3. **Stop-loss hunt is the key** — This phase creates the trade setup
4. **Patience is essential** — Wait for all 4 phases to develop
5. **Distribution is where you profit** — This is the only phase to trade

**CISD = The institutional blueprint for every major move.**
`);

writeBN('38-cisd-framework', {
  title: 'CISD Framework',
  description: 'CISD Model Master করুন — Consolidation, Inducement, Stop-loss hunt, Distribution। চার-Phase Institutional Trading Cycle শিখুন।',
  order: 38,
  level: 'advanced'
}, `# CISD Framework

### Definition

CISD হলো **চার-Phase Institutional Trading Framework** যা বর্ণনা করে Smart Money কীভাবে কাজ করে: **Consolidation** (Range তৈরি), **Inducement** (Retail Trader আকর্ষণ), **Stop-loss hunt** (Liquidity জন্য Stop Sweep), এবং **Distribution** (সত্যিকারের Institutional Move)। এই Model Power of Three (AMD) Model এর তুলনায় Institutional Cycle এর আরও বিস্তারিত Breakdown দেয়।

**চারটি Phase:**
1. **Consolidation** — Price সংকীর্ণ Range তৈরি করে, Liquidity Pool তৈরি হয়
2. **Inducement** — False Move Retail Trader দের ভুল Position এ আকর্ষণ করে
3. **Stop-loss hunt** — Liquidity জন্য Range এর উপরে/নিচে Stop Sweep করে
4. **Distribution** — সত্যিকারের Institutional Move Price Target এ Deliver করে

**Power of Three এর সাথে সম্পর্ক:** CISD মূলত আরও বিস্তারিত মাঝের Phase সহ AMD (Inducement + Stop-loss hunt = Manipulation)।

### Why It Matters

- CISD মৌলিক AMD এর চেয়ে আরও সুনির্দিষ্ট Entry Timing দেয়
- এটি Inducement থেকে Stop-loss Hunting আলাদা করে — দুটি স্বতন্ত্র Phase
- প্রতিটি Phase বুঝলে Premature Entry প্রতিরোধ করে
- CISD প্রকাশ করে সঠিক Moment কখন Enter করতে হয় (Stop-loss hunt পরে, Distribution আগে)
- এই Framework প্রতিটি Timeframe ও প্রতিটি Session এ প্রযোজ্য

### How It Works

**Phase 1: Consolidation (C)**

**বৈশিষ্ট্য:**
- Price সংকীর্ণ Range এ Trade করে
- Equal High ও Equal Low গঠিত
- কম Volatility, ছোট Candle Body
- সময়কাল: ঘন্টা (Intraday) থেকে দিন (Swing)
- Range এর উপরে ও নিচে Liquidity জমা হয়

**Smart Money কী করে:**
- Limit Order ব্যবহার করে নিঃশব্দে Position তৈরি করে
- Liquidity Pool বিকশিত হতে দেয়
- "Trap" তৈরি করে যা পরে Spring হবে

**Phase 2: Inducement (I)**

**বৈশিষ্ট্য:**
- Price Consolidation Range এর বাইরে ছোট Move করে
- এই Move Retail Trader দের কাছে "Breakout" মনে হয়
- Retail Fake Break এর Direction এ Position Enter করে
- Move দুর্বল (ছোট Candle, Hesitation)
- প্রায়ই Session Open এর ঠিক আগে ঘটে

**Smart Money কী করে:**
- Retail Trader দের ভুল দিকে Position করে
- Victim তৈরি করে যাদের Stop তাদের Liquidity হবে
- Trap নিখুঁতভাবে সেট আপ করে

**Phase 3: Stop-loss Hunt (S)**

**বৈশিষ্ট্য:**
- Price আক্রমণাত্মকভাবে Inducement Point এর বাইরে Move করে
- Range এর উপরে/নিচে সুস্পষ্ট Stop Sweep করে
- Volume Spike সহ তীক্ষ্ণ Move
- Retail Trader Stop Out হয়
- Chart এ দৃশ্যমান Wick তৈরি করে

**Smart Money কী করে:**
- Triggered Retail Stop = Filled Institutional Order
- Real Move এর জন্য প্রয়োজনীয় Liquidity অর্জন করে
- এটি তাদের সত্যিকারের Directional Move এর জন্য ENTRY

**Phase 4: Distribution (D)**

**বৈশিষ্ট্য:**
- Price সম্পূর্ণভাবে Direction Reverse করে
- শক্তিশালী Momentum Candle
- FVG তৈরি, BOS/CHOCH Confirmation
- সর্বোচ্চ Displacement
- বিপরীত Liquidity Pool Target করে

**Smart Money কী করে:**
- তাদের Profit Target এ Price Deliver করে
- এখানে তারা তাদের Accumulated Position থেকে EXIT করে
- Retail এখন ভুল দিকে, Exit Liquidity দেয়

### Institutional Logic

**CISD Pattern কেন বিদ্যমান:**

1. **Consolidation প্রয়োজনীয়** কারণ Institution Price Move না করে তাৎক্ষণিকভাবে বড় Position Enter করতে পারে না
2. **Inducement Victim তৈরি করে** — Retail Trader যারা তাদের Stop এর মাধ্যমে Liquidity দেবে
3. **Stop-loss hunt Liquidity দেয়** — Real Move এর জন্য প্রয়োজনীয় Fuel
4. **Distribution Profit তৈরি করে** — Institution অনুকূল দামে Exit করে

### Trading Application

**Real-Time এ CISD চিহ্নিত করা:**

**Step 1: Consolidation চিহ্নিত করুন**
- 3+ ঘন্টা Range-Bound Price Action দেখুন
- Equal High (BSL) ও Equal Low (SSL) Mark করুন
- Liquidity Pool চিহ্নিত করুন

**Step 2: Inducement চিনুন**
- Consolidation এর ছোট Breakout দেখুন
- যদি Breakout দুর্বল (ছোট Candle, Wick) = Inducement
- এই Move Trade করবেন না — এটি Trap

**Step 3: Stop-loss Hunt এর জন্য অপেক্ষা করুন**
- Price আক্রমণাত্মকভাবে Inducement Point এর বাইরে Break করে
- Stop Sweep করে বড় Wick গঠিত
- এটি Manipulation/Stop Hunt Phase
- এখনও Enter করবেন না — Reversal এর জন্য অপেক্ষা করুন

**Step 4: Distribution এর সময় Enter করুন**
- Stop Hunt পরে, Reversal Signal দেখুন:
  - FVG তৈরি
  - বিপরীত Direction এ BOS/CHOCH
  - শক্তিশালী Rejection Candle
- FVG/OB/OTE এ Retracement এ Enter করুন
- এটি Phase 4 — Real Move

**নিখুঁত CISD Trade Setup:**

\`\`\`
Entry Checklist:
✅ Phase 1: Consolidation চিহ্নিত (3+ ঘন্টা)
✅ Phase 2: Inducement ঘটেছে (দুর্বল Fake Breakout)
✅ Phase 3: Stop Hunt Confirm (Wick সহ Aggressive Sweep)
✅ Phase 4: Distribution শুরু (Reversal + BOS)
✅ Entry জন্য FVG বা OB উপস্থিত
✅ HTF Bias Aligned
✅ Kill Zone এ Entry
\`\`\`

### Common Mistakes

- ❌ Inducement Move Trade করা (Phase 2) — এটি Trap!
- ❌ Stop-loss Hunt এর সময় Enter করা (Phase 3) — খুব তাড়াতাড়ি, Stop হবে
- ❌ Distribution Confirmation এর জন্য অপেক্ষা না করা — Reversal স্পষ্ট হতে হবে
- ❌ Consolidation Phase মিস করা — C ছাড়া CISD নেই
- ❌ প্রতিটি Setup এ CISD আশা করা — কখনো কখনো পূর্ণ CISD ছাড়া Market Move করে

### Advanced Notes

**CISD Variation:**
- **Double CISD:** Distribution আগে Price Consolidate করে, Induce করে, উভয় দিকে Hunt করে
- **Failed CISD:** Stop Hunt পরে যদি Distribution না ঘটে = Setup Invalid
- **Nested CISD:** HTF CISD এর মধ্যে LTF CISD (শক্তিশালী Trend এ সাধারণ)
- **Compressed CISD:** 4টি Phase সব 30-60 মিনিটে ঘটে (Scalping Timeframe)

**Time-Based CISD:**
- **Daily CISD:** Asian = C, London Open = I+S, London Session = D
- **Weekly CISD:** Mon-Tue = C, Wed = I+S, Thu-Fri = D
- **Intraday CISD:** Pre-Session = C, Open = I+S, প্রথম ঘন্টা = D

### Example

**EUR/USD — সম্পূর্ণ CISD Trade:**

**Phase 1: Consolidation (Asian Session)**
- **সময়:** 12:00 AM - 7:00 AM London
- **Range:** 1.0850 - 1.0870 (20 Pip)
- **Equal High:** 1.0870 (BSL)
- **Equal Low:** 1.0850 (SSL)
- **সময়কাল:** 7 ঘন্টা
- **HTF Context:** 4H Bullish Bias

**Phase 2: Inducement (7:00-7:30 AM)**
- **Move:** Price 1.0848 এ Drop করে (SSL এর সামান্য নিচে)
- **Candle:** উপরের Wick সহ ছোট Bearish Candle
- **Retail Action:** Early Bear এখানে SHORT Enter করে
- **সময়কাল:** 30 মিনিট

**Phase 3: Stop-loss Hunt (8:00 AM London Open)**
- **Move:** Price 1.0835 এ নিচে Spike করে (Inducement এর 13 Pip নিচে)
- **Candle:** বিশাল নিচের Wick সহ বড় Bearish Candle
- **Action:** SSL Sweep, Retail Bear এর Stop Hit, Aggressive Long Stop
- **Peak:** 1.0835 হলো Low
- **Reversal:** 8:12 AM এ তাৎক্ষণিক Bullish Engulfing গঠিত

**Phase 4: Distribution (8:15 AM - 11:00 AM)**
- **Reversal Confirmation:**
  - BOS Bullish (1.0870 এর উপরে Break করে)
  - 1.0843-1.0848 এ FVG তৈরি
  - উপরের দিকে শক্তিশালী Displacement Candle
- **Retracement:** Price 1.0852 এ ফেরে (FVG + OTE Zone)
- **ENTRY:** 1.0852 এ BUY
- **Stop Loss:** 1.0838 (Stop-hunt Low এর নিচে)
- **Target 1:** 1.0900 (প্রথম BSL)
- **Target 2:** 1.0930 (Major BSL)

**ফলাফল:**
- Entry: 1.0852
- Stop: 1.0838 (14 Pip)
- Target 1: 48 Pip → 1:3.4 RR
- Target 2: 78 Pip → 1:5.6 RR
- প্রকৃত: 63 Pip Profit, 14 Pip Risk = 1:4.5 RR

**CISD = প্রতিটি Major Move এর জন্য Institutional Blueprint।**
`);

console.log('\n✅ CISD Framework (Topic 38) created successfully!\n');
console.log('📚 Course now has 38 complete topics with CISD added!\n');

