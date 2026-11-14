import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const C = join(process.cwd(), "content");

// Ensure directories exist
try {
  mkdirSync(join(C, "bn", "academy", "ict-smc-course"), { recursive: true });
} catch (e) {}

const writeEN = (slug, meta, content) => {
  const path = join(C, "en", "academy", "ict-smc-course", `${slug}.mdx`);
  const frontmatter = `---
title: "${meta.title}"
description: "${meta.description}"
order: ${meta.order}
level: ${meta.level}
lastUpdated: "2026-06-09"
---
`;
  writeFileSync(path, frontmatter + content, "utf-8");
  console.log(`✅ EN: ${slug}`);
};

const writeBN = (slug, meta, content) => {
  const path = join(C, "bn", "academy", "ict-smc-course", `${slug}.mdx`);
  const frontmatter = `---
title: "${meta.title}"
description: "${meta.description}"
order: ${meta.order}
level: ${meta.level}
lastUpdated: "2026-06-09"
---
`;
  writeFileSync(path, frontmatter + content, "utf-8");
  console.log(`✅ BN: ${slug}`);
};

// ============ TOPIC 26: Power of Three ============
writeEN(
  "26-power-of-three",
  {
    title: "Power of Three",
    description:
      "Master the Power of Three (PO3) — the Accumulation, Manipulation, Distribution cycle. Learn how every price move follows this three-phase institutional model.",
    order: 26,
    level: "advanced",
  },
  `# Power of Three

### Definition

Power of Three (PO3), also known as the **Accumulation, Manipulation, Distribution (AMD)** model, is THE foundational ICT concept that describes **the three-phase cycle all institutional price movements follow**. Every significant market move — from a single candle to a weekly swing — progresses through these three distinct phases that Smart Money uses to accumulate positions, manipulate retail traders, and distribute to their targets.

**The Three Phases:**
1. **Accumulation** — Smart Money quietly builds positions in consolidation
2. **Manipulation** — False move traps retail traders (Judas Swing / liquidity sweep)
3. **Distribution** — The true institutional move delivers price to the target

**Universal Application:** PO3 applies to ALL timeframes — a daily candle, a trading session, or a multi-week trend all follow this pattern.

### Why It Matters

- PO3 is the MASTER KEY to understanding ALL price action
- It explains why breakouts fail (manipulation phase)
- It shows you when to be patient (accumulation) and when to act (distribution)
- Understanding PO3 prevents you from being trapped during manipulation
- Every ICT concept (FVG, OB, Liquidity, etc.) fits within the PO3 framework

### How It Works

**Phase 1: Accumulation**

**Characteristics:**
- Price consolidates in a tight range
- Low volatility, choppy/sideways movement
- Equal highs and equal lows form (liquidity pools)
- Smart Money is building positions quietly
- Often occurs during Asian session (daily PO3)

**What to do:**
- Mark the range high and low
- Identify liquidity pools (BSL above, SSL below)
- DON'T trade the range — be patient
- Prepare for the manipulation phase

**Phase 2: Manipulation**

**Characteristics:**
- Price breaks out of accumulation range in the WRONG direction
- This is a FALSE MOVE (Judas Swing)
- Sweeps liquidity (stop losses above/below range)
- Traps retail traders entering the "breakout"
- Quick reversal back into or through the range
- Often occurs at session opens (London 8 AM, NY 9:30 AM)

**What to do:**
- DON'T trade the initial breakout
- Wait for the reversal confirmation
- This is your cue that distribution is about to begin
- Look for FVG creation, engulfing candles

**Phase 3: Distribution**

**Characteristics:**
- Price reverses and moves aggressively in the TRUE direction
- Maximum displacement and momentum
- Strong candles, FVG creation, structure breaks (BOS/CHOCH)
- Targets opposing liquidity pool
- This is the REAL institutional move

**What to do:**
- Enter on retracement (OTE, FVG, Order Block)
- Ride the distribution move
- Target: Opposite liquidity from where manipulation occurred

**PO3 Visual Pattern:**
\`\`\`
    Manipulation ↑ (False breakout)
          │
═══════════╧═══════════  ← Accumulation Range
          │
          ↓ Distribution (True move)
\`\`\`

### Institutional Logic

**Why PO3 exists:**
- Institutions need LIQUIDITY to fill large orders
- They can't simply "buy low" without sellers (and vice versa)
- The manipulation creates the necessary liquidity (retail stop losses)
- This ensures efficient fills at favorable prices
- The pattern is algorithmic — it repeats consistently

**The Smart Money Trap:**
- Retail sees consolidation → Waits for breakout
- Breakout occurs → Retail enters
- Price reverses → Retail gets stopped out
- Retail's stop losses = Smart Money's limit orders
- Smart Money then distributes in the true direction

### Trading Application

**Daily PO3 Trading Strategy:**

**Pre-London (Asian Session):**
1. Identify accumulation range (typically 12 AM - 7 AM London)
2. Mark equal highs (BSL) and equal lows (SSL)
3. Check HTF bias (4H/Daily) — which direction is favored?
4. Set alerts for manipulation

**London Session (8 AM - 12 PM):**
1. **8:00-

8:30 AM:** Watch for manipulation (Judas Swing)
   - Price sweeps one side of Asian range
   - Quick rejection back into range
2. **8:30-9:30 AM:** Distribution begins
   - Enter on retracement to FVG/OB from manipulation move
   - Target opposite liquidity

**Intraday PO3 on Lower Timeframes:**
- 1H/15M/5M charts show mini PO3 cycles within the daily cycle
- Each retracement during distribution shows its own accumulation → manipulation → distribution
- Trade these nested PO3 patterns for additional entries

**Weekly PO3:**
- Monday-Tuesday: Accumulation (weekly range forms)
- Wednesday: Manipulation (sweep Monday/Tuesday range)
- Thursday-Friday: Distribution (true weekly move)

### Common Mistakes

- ❌ Trading the breakout during manipulation — This is THE trap
- ❌ Not waiting for all three phases to develop before entering
- ❌ Expecting PO3 to always be perfect and clean — Market structure can be messy
- ❌ Trading against HTF bias during distribution phase
- ❌ Entering too late (chasing distribution without retracement)

### Advanced Notes

- **Nested PO3:** Every timeframe has its own PO3 cycle operating simultaneously (5M PO3 within 1H PO3 within Daily PO3)
- **Failed PO3:** Sometimes accumulation leads directly to distribution without obvious manipulation — this happens when liquidity is already available
- **Double Manipulation:** In highly volatile markets, Smart Money may manipulate BOTH sides before distribution
- **PO3 + Kill Zones:** Distribution phase almost always aligns with Kill Zone timing (London 8-9 AM, NY 9:30-11 AM)
- **Confirmation:** Use BOS/CHOCH to confirm the shift from manipulation to distribution

### Example

**EUR/USD Daily PO3:**

**Phase 1: Accumulation (Asian Session)**
- Time: 12:00 AM - 7:30 AM London
- Range: 1.0850 - 1.0870 (20 pip consolidation)
- BSL: Above 1.0870 (equal highs)
- SSL: Below 1.0850 (equal lows)
- HTF 4H: Bullish bias

**Phase 2: Manipulation (London Open)**
- Time: 8:00 AM London
- Price drops to 1.0845 (sweeps SSL below range) — Judas Swing
- Duration: 15 minutes
- Reversal: Bullish engulfing at 8:15 AM, back to 1.0855
- FVG created: 1.0848-1.0853

**Phase 3: Distribution (London Session)**
- Time: 8:30 AM - 11:00 AM
- Price breaks above 1.0870 (BOS bullish)
- Strong displacement upward
- Retracement to 1.0862 (OTE + FVG overlap)

**Entry:**
- BUY at 1.0862 (retracement entry during distribution)
- Stop Loss: 1.0847 (below manipulation low)
- Target: 1.0920 (next BSL above)

**Result:**
- 15 pip risk, 58 pip reward → 1:3.9 R:R
- Perfect PO3 execution: Range → False drop → True rally

The trade captured the distribution phase after identifying manipulation, achieving the institutional target.
`,
);

writeBN(
  "26-power-of-three",
  {
    title: "Power of Three",
    description:
      "Power of Three (PO3) Master করুন — Accumulation, Manipulation, Distribution Cycle। শিখুন কীভাবে প্রতিটি Price Move এই তিন-Phase Institutional Model অনুসরণ করে।",
    order: 26,
    level: "advanced",
  },
  `# Power of Three

### Definition

Power of Three (PO3), যা **Accumulation, Manipulation, Distribution (AMD)** Model নামেও পরিচিত, হলো মূল ICT Concept যা বর্ণনা করে **তিন-Phase Cycle যা সমস্ত Institutional Price Movement অনুসরণ করে**। প্রতিটি উল্লেখযোগ্য Market Move — একটি একক Candle থেকে একটি সাপ্তাহিক Swing পর্যন্ত — এই তিনটি স্বতন্ত্র Phase এর মধ্য দিয়ে অগ্রসর হয় যা Smart Money ব্যবহার করে Position Accumulate করতে, Retail Trader Manipulate করতে, এবং তাদের Target এ Distribute করতে।

**তিনটি Phase:**
1. **Accumulation** — Smart Money নিঃশব্দে Consolidation এ Position তৈরি করে
2. **Manipulation** — False Move Retail Trader Trap করে (Judas Swing / Liquidity Sweep)
3. **Distribution** — সত্যিকারের Institutional Move Price Target এ Deliver করে

**সার্বজনীন প্রয়োগ:** PO3 সমস্ত Timeframe এ প্রযোজ্য — একটি Daily Candle, একটি Trading Session, বা একটি বহু-সপ্তাহ Trend সবই এই Pattern অনুসরণ করে।

### Why It Matters

- PO3 হলো সমস্ত Price Action বোঝার MASTER KEY
- এটি ব্যাখ্যা করে কেন Breakout Fail হয় (Manipulation Phase)
- এটি দেখায় কখন ধৈর্য ধরতে হবে (Accumulation) এবং কখন কাজ করতে হবে (Distribution)
- PO3 বুঝলে Manipulation এর সময় আপনি Trap হবেন না
- প্রতিটি ICT Concept (FVG, OB, Liquidity, ইত্যাদি) PO3 Framework এর মধ্যে ফিট করে

### How It Works

**Phase 1: Accumulation**

**বৈশিষ্ট্য:**
- Price একটি সংকীর্ণ Range এ Consolidate করে
- কম Volatility, Choppy/Sideways Movement
- Equal High ও Equal Low গঠিত (Liquidity Pool)
- Smart Money নিঃশব্দে Position তৈরি করছে
- প্রায়ই Asian Session এ ঘটে (Daily PO3)

**কী করবেন:**
- Range High ও Low Mark করুন
- Liquidity Pool চিহ্নিত করুন (উপরে BSL, নিচে SSL)
- Range Trade করবেন না — ধৈর্য ধরুন
- Manipulation Phase এর জন্য প্রস্তুত হন

**Phase 2: Manipulation**

**বৈশিষ্ট্য:**
- Price Accumulation Range থেকে ভুল Direction এ Breakout করে
- এটি একটি FALSE MOVE (Judas Swing)
- Liquidity Sweep করে (Range এর উপরে/নিচে Stop Loss)
- "Breakout" এ Enter করা Retail Trader Trap করে
- Range এ বা Range এর মধ্য দিয়ে দ্রুত Reversal
- প্রায়ই Session Open এ ঘটে (London 8 AM, NY 9:30 AM)

**কী করবেন:**
- প্রাথমিক Breakout Trade করবেন না
- Reversal Confirmation এর জন্য অপেক্ষা করুন
- এটি আপনার ইঙ্গিত যে Distribution শুরু হতে চলেছে
- FVG তৈরি, Engulfing Candle দেখুন

**Phase 3: Distribution**

**বৈশিষ্ট্য:**
- Price Reverse হয় এবং সত্যিকারের Direction এ আক্রমণাত্মকভাবে Move করে
- সর্বোচ্চ Displacement ও Momentum
- শক্তিশালী Candle, FVG তৈরি, Structure Break (BOS/CHOCH)
- বিপরীত Liquidity Pool Target করে
- এটি সত্যিকারের INSTITUTIONAL Move

**কী করবেন:**
- Retracement এ Enter করুন (OTE, FVG, Order Block)
- Distribution Move Ride করুন
- Target: Manipulation যেখান থেকে ঘটেছে তার বিপরীত Liquidity

### Institutional Logic

**PO3 কেন বিদ্যমান:**
- Institution বড় Order Fill করতে LIQUIDITY প্রয়োজন
- তারা Seller ছাড়া কেবল "Buy Low" করতে পারে না (এবং বিপরীত)
- Manipulation প্রয়োজনীয় Liquidity তৈরি করে (Retail Stop Loss)
- এটি অনুকূল দামে দক্ষ Fill নিশ্চিত করে
- Pattern Algorithmic — এটি ধারাবাহিকভাবে পুনরাবৃত্তি হয়

**Smart Money Trap:**
- Retail Consolidation দেখে → Breakout এর জন্য অপেক্ষা করে
- Breakout ঘটে → Retail Enter করে
- Price Reverse হয় → Retail Stop Out হয়
- Retail এর Stop Loss = Smart Money এর Limit Order
- Smart Money তারপর সত্যিকারের Direction এ Distribute করে

### Trading Application

**Daily PO3 Trading Strategy:**

**Pre-London (Asian Session):**
1. Accumulation Range চিহ্নিত করুন (সাধারণত 12 AM - 7 AM London)
2. Equal High (BSL) ও Equal Low (SSL) Mark করুন
3. HTF Bias (4H/Daily) চেক করুন — কোন Direction পক্ষে?
4. Manipulation এর জন্য Alert সেট করুন

**London Session (8 AM - 12 PM):**
1. **8:00-8:30 AM:** Manipulation দেখুন (Judas Swing)
   - Price Asian Range এর একদিক Sweep করে
   - Range এ দ্রুত Rejection ফিরে
2. **8:30-9:30 AM:** Distribution শুরু হয়
   - Manipulation Move থেকে FVG/OB এ Retracement এ Enter করুন
   - বিপরীত Liquidity Target করুন

### Common Mistakes

- ❌ Manipulation এর সময় Breakout Trade করা — এটি TRAP
- ❌ Enter করার আগে তিনটি Phase Develop হওয়ার জন্য অপেক্ষা না করা
- ❌ PO3 সবসময় নিখুঁত ও পরিষ্কার হবে আশা করা — Market Structure জগাখিচুড়ি হতে পারে
- ❌ Distribution Phase এ HTF Bias এর বিরুদ্ধে Trade করা
- ❌ খুব দেরিতে Enter করা (Retracement ছাড়া Distribution Chase করা)

### Advanced Notes

- **Nested PO3:** প্রতিটি Timeframe এর নিজস্ব PO3 Cycle একসাথে কাজ করছে (5M PO3 1H PO3 এর মধ্যে Daily PO3 এর মধ্যে)
- **Failed PO3:** কখনো কখনো Accumulation সরাসরি Distribution এ Lead করে সুস্পষ্ট Manipulation ছাড়া — এটি ঘটে যখন Liquidity ইতিমধ্যে উপলব্ধ
- **Double Manipulation:** অত্যন্ত Volatile Market এ, Distribution এর আগে Smart Money উভয় দিকে Manipulate করতে পারে
- **PO3 + Kill Zone:** Distribution Phase প্রায় সবসময় Kill Zone Timing এর সাথে Align করে (London 8-9 AM, NY 9:30-11 AM)
- **Confirmation:** Manipulation থেকে Distribution এ Shift Confirm করতে BOS/CHOCH ব্যবহার করুন

### Example

**EUR/USD Daily PO3:**

**Phase 1: Accumulation (Asian Session)**
- সময়: 12:00 AM - 7:30 AM London
- Range: 1.0850 - 1.0870 (20 Pip Consolidation)
- BSL: 1.0870 এর উপরে (Equal High)
- SSL: 1.0850 এর নিচে (Equal Low)
- HTF 4H: Bullish Bias

**Phase 2: Manipulation (London Open)**
- সময়: 8:00 AM London
- Price 1.0845 এ Drop করে (Range এর নিচে SSL Sweep) — Judas Swing
- সময়কাল: 15 মিনিট
- Reversal: 8:15 AM এ Bullish Engulfing, 1.0855 এ ফিরে
- FVG তৈরি: 1.0848-1.0853

**Phase 3: Distribution (London Session)**
- সময়: 8:30 AM - 11:00 AM
- Price 1.0870 এর উপরে Break করে (BOS Bullish)
- শক্তিশালী Upward Displacement
- 1.0862 এ Retracement (OTE + FVG Overlap)

**Entry:**
- 1.0862 এ BUY (Distribution এর সময় Retracement Entry)
- Stop Loss: 1.0847 (Manipulation Low এর নিচে)
- Target: 1.0920 (উপরে পরবর্তী BSL)

**ফলাফল:**
- 15 Pip Risk, 58 Pip Reward → 1:3.9 R:R
- নিখুঁত PO3 Execution: Range → False Drop → True Rally

Trade Manipulation চিহ্নিত করার পর Distribution Phase ধরেছে, Institutional Target অর্জন করেছে।
`,
);

console.log("✅ Topic 26 (Power of Three) complete!\n");

console.log("\n🎉 Topics 20-26 now complete! Continuing with topics 27-37...\n");

// ============ TOPIC 27: Accumulation ============
writeEN(
  "27-accumulation",
  {
    title: "Accumulation",
    description:
      "Master the Accumulation phase — where Smart Money quietly builds positions before the major move. Learn to identify consolidation that precedes institutional distribution.",
    order: 27,
    level: "advanced",
  },
  `# Accumulation

### Definition

Accumulation is the **first phase of the Power of Three model** where Smart Money quietly builds large positions in a consolidation range before the major directional move. During this phase, price trades sideways in a tight range while institutions accumulate buy or sell orders without revealing their intentions to the market.

- **Bullish Accumulation:** Institutions are building LONG positions in preparation for an upward distribution move
- **Bearish Accumulation:** Institutions are building SHORT positions in preparation for a downward distribution move

**Key Characteristics:** Low volatility, equal highs/lows, tight range, choppy price action, often occurs during Asian session.

### Why It Matters

- Accumulation precedes EVERY major institutional move
- Identifying accumulation early lets you prepare for the coming distribution
- The liquidity created during accumulation (equal highs/lows) becomes the target for manipulation
- Understanding accumulation prevents you from overtrading during consolidation
- The range boundaries become key support/resistance levels

### How It Works

**Accumulation Formation:**
1. **Price enters consolidation** after a previous move
2. **Range forms:** Clear high and low boundaries develop
3. **Equal highs/lows:** Price repeatedly tests these levels without breaking through
4. **Low volume:** Volatility decreases, candles get smaller
5. **Duration:** Can last hours (intraday) to days/weeks (higher timeframes)
6. **Liquidity builds:** SSL below lows, BSL above highs accumulate

**Types of Accumulation:**
| Type | Duration | Timeframe | Typical Session |
|------|----------|-----------|-----------------|
| Intraday | 2-8 hours | 5M-1H | Asian Session |
| Daily | 1-3 days | 4H-Daily | Multi-session |
| Weekly | 1-3 weeks | Daily-Weekly | Multi-week |

### Institutional Logic

**Why accumulation occurs:**
- Institutions can't execute large orders instantly without moving price
- They need time to build positions gradually
- Accumulation allows them to "hide" their intentions
- The consolidation creates liquidity pools (retail stop losses) for later use
- Once position is built, they can manipulate then distribute

**Volume Profile:**
- During accumulation, volume is LOWER than average
- Smart Money is using limit orders, not market orders
- They want to avoid signaling their intentions
- Retail traders get bored and leave (perfect for institutions)

### Trading Application

**Identifying Accumulation:**
1. **Look for consolidation** lasting multiple hours/days
2. **Mark the range:** Identify clear high and low boundaries
3. **Equal highs/lows:** Note repeated tests of these levels
4. **Decreasing volatility:** Candle bodies getting smaller
5. **Mark liquidity:** BSL above highs, SSL below lows

**Trading During Accumulation:**
❌ **DON'T:**
- Trade breakouts of accumulation ranges (likely false)
- Overtr trade the range (low R:R, choppy)
- Expect big moves during this phase

✅ **DO:**
- Mark the range for manipulation setups later
- Wait for manipulation phase (breakout then rejection)
- Prepare entry orders for distribution phase
- Use as time to analyze HTF bias

**Post-Accumulation Trading:**
1. Wait for manipulation (false breakout of range)
2. Confirm reversal (engulfing, FVG, BOS)
3. Enter during distribution retracement
4. Target opposite liquidity pool

**Accumulation + HTF Analysis:**
- If HTF is bullish → Expect manipulation to sweep SSL, then rally
- If HTF is bearish → Expect manipulation to sweep BSL, then drop
- HTF bias determines which direction distribution will likely go

### Common Mistakes

- ❌ Trading inside accumulation ranges — Low probability, choppy fills
- ❌ Taking the first breakout as the real move — It's usually manipulation
- ❌ Ignoring HTF context — Accumulation direction matters
- ❌ Being impatient — Accumulation can last longer than expected
- ❌ Not marking the range clearly — You'll miss the manipulation setup

### Advanced Notes

- **Re-Accumulation:** After initial distribution, price may re-accumulate before continuing (nested PO3)
- **Wide Accumulation:** Larger ranges (100+ pips) suggest bigger distribution move coming
- **Tight Accumulation:** Very tight ranges (10-20 pips) suggest explosive move ahead
- **Time-Based:** Accumulation during specific sessions (Asian) is most significant
- **Failed Accumulation:** If range breaks and continues without reversal, it wasn't accumulation — it was continuation

### Example

**EUR/USD Accumulation to Distribution:**

**Accumulation Phase (Asian Session):**
- **Time:** 12:00 AM - 7:00 AM London
- **Range:** 1.0840 - 1.0860 (20 pips)
- **Equal Highs:** 1.0860 tested 3 times (BSL forming)
- **Equal Lows:** 1.0840 tested 2 times (SSL forming)
- **Characteristics:** Small candles, low volatility
- **HTF Context:** 4H bullish bias

**Manipulation Phase (London Open):**
- **Time:** 8:00 AM London
- **False Move:** Price drops to 1.0835 (sweeps SSL)
- **Rejection:** Bullish engulfing back to 1.0848
- **Duration:** 20 minutes

**Distribution Phase (London Morning):**
- **Time:** 8:30 AM - 11:00 AM
- **BOS:** Price breaks above 1.0860 (accumulation high)
- **Retracement:** Back to 1.0852 (FVG + OTE)
- **Entry:** BUY at 1.0852
- **Stop Loss:** 1.0838 (below manipulation low)
- **Target:** 1.0920 (next BSL)

**Result:**
- 14 pip risk, 68 pip reward → 1:4.9 R:R
- Accumulation range provided the setup framework

The key was recognizing the Asian consolidation as accumulation, waiting for manipulation, then entering distribution.
`,
);

writeBN(
  "27-accumulation",
  {
    title: "Accumulation",
    description:
      "Accumulation Phase Master করুন — যেখানে Smart Money Major Move এর আগে নিঃশব্দে Position তৈরি করে। Institutional Distribution এর আগে Consolidation চিহ্নিত করা শিখুন।",
    order: 27,
    level: "advanced",
  },
  `# Accumulation

### Definition

Accumulation হলো **Power of Three Model এর প্রথম Phase** যেখানে Smart Money Major Directional Move এর আগে Consolidation Range এ বড় Position নিঃশব্দে তৈরি করে। এই Phase এ, Price একটি সংকীর্ণ Range এ Sideways Trade করে যখন Institution তাদের উদ্দেশ্য Market এ প্রকাশ না করে Buy বা Sell Order Accumulate করে।

- **Bullish Accumulation:** Institution Upward Distribution Move এর প্রস্তুতিতে LONG Position তৈরি করছে
- **Bearish Accumulation:** Institution Downward Distribution Move এর প্রস্তুতিতে SHORT Position তৈরি করছে

**মূল বৈশিষ্ট্য:** কম Volatility, Equal High/Low, সংকীর্ণ Range, Choppy Price Action, প্রায়ই Asian Session এ ঘটে।

### Why It Matters

- Accumulation প্রতিটি Major Institutional Move এর আগে হয়
- Accumulation তাড়াতাড়ি চিহ্নিত করলে আসন্ন Distribution এর জন্য প্রস্তুত হতে পারেন
- Accumulation এর সময় তৈরি Liquidity (Equal High/Low) Manipulation এর জন্য Target হয়ে যায়
- Accumulation বুঝলে Consolidation এর সময় Overtrade করবেন না
- Range Boundary মূল Support/Resistance Level হয়ে যায়

### How It Works

**Accumulation গঠন:**
1. **Price Consolidation এ প্রবেশ করে** পূর্ববর্তী Move এর পর
2. **Range গঠিত:** স্পষ্ট High ও Low Boundary বিকশিত
3. **Equal High/Low:** Price বারবার Break Through ছাড়া এই Level Test করে
4. **কম Volume:** Volatility হ্রাস, Candle ছোট হয়
5. **সময়কাল:** ঘন্টা (Intraday) থেকে দিন/সপ্তাহ (Higher Timeframe) স্থায়ী হতে পারে
6. **Liquidity তৈরি:** Low এর নিচে SSL, High এর উপরে BSL জমা হয়

**Accumulation এর প্রকার:**
| Type | সময়কাল | Timeframe | সাধারণ Session |
|------|----------|-----------|-----------------|
| Intraday | 2-8 ঘন্টা | 5M-1H | Asian Session |
| Daily | 1-3 দিন | 4H-Daily | Multi-session |
| Weekly | 1-3 সপ্তাহ | Daily-Weekly | Multi-week |

### Institutional Logic

**Accumulation কেন ঘটে:**
- Institution Price Move না করে তাৎক্ষণিকভাবে বড় Order Execute করতে পারে না
- তাদের ধীরে ধীরে Position তৈরি করতে সময় প্রয়োজন
- Accumulation তাদের উদ্দেশ্য "লুকাতে" দেয়
- Consolidation পরে ব্যবহারের জন্য Liquidity Pool (Retail Stop Loss) তৈরি করে
- Position তৈরি হয়ে গেলে, তারা Manipulate করতে পারে তারপর Distribute করতে পারে

### Trading Application

**Accumulation চিহ্নিত করা:**
1. **Consolidation দেখুন** একাধিক ঘন্টা/দিন স্থায়ী
2. **Range Mark করুন:** স্পষ্ট High ও Low Boundary চিহ্নিত করুন
3. **Equal High/Low:** এই Level এর বারবার Test নোট করুন
4. **Volatility হ্রাস:** Candle Body ছোট হচ্ছে
5. **Liquidity Mark করুন:** High এর উপরে BSL, Low এর নিচে SSL

**Accumulation এর সময় Trading:**
❌ **করবেন না:**
- Accumulation Range এর Breakout Trade (সম্ভবত False)
- Range Overtrade (কম R:R, Choppy)
- এই Phase এ বড় Move আশা

✅ **করবেন:**
- পরে Manipulation Setup এর জন্য Range Mark করুন
- Manipulation Phase এর জন্য অপেক্ষা করুন (Breakout তারপর Rejection)
- Distribution Phase এর জন্য Entry Order প্রস্তুত করুন
- HTF Bias বিশ্লেষণ করতে Time হিসেবে ব্যবহার করুন

**Post-Accumulation Trading:**
1. Manipulation এর জন্য অপেক্ষা করুন (Range এর False Breakout)
2. Reversal Confirm করুন (Engulfing, FVG, BOS)
3. Distribution Retracement এ Enter করুন
4. বিপরীত Liquidity Pool Target করুন

### Common Mistakes

- ❌ Accumulation Range এর ভিতরে Trade করা — কম Probability, Choppy Fill
- ❌ প্রথম Breakout Real Move হিসেবে নেওয়া — এটি সাধারণত Manipulation
- ❌ HTF Context উপেক্ষা করা — Accumulation Direction গুরুত্বপূর্ণ
- ❌ অধৈর্য হওয়া — Accumulation প্রত্যাশিত চেয়ে দীর্ঘ স্থায়ী হতে পারে
- ❌ Range স্পষ্টভাবে Mark না করা — Manipulation Setup মিস করবেন

### Advanced Notes

- **Re-Accumulation:** প্রথম Distribution পরে, Continue করার আগে Price পুনরায় Accumulate করতে পারে (Nested PO3)
- **Wide Accumulation:** বড় Range (100+ Pip) বড় Distribution Move আসছে ইঙ্গিত করে
- **Tight Accumulation:** খুব সংকীর্ণ Range (10-20 Pip) বিস্ফোরক Move আগে ইঙ্গিত করে
- **Time-Based:** নির্দিষ্ট Session (Asian) এ Accumulation সবচেয়ে তাৎপর্যপূর্ণ
- **Failed Accumulation:** যদি Range Break করে ও Reversal ছাড়া Continue করে, এটি Accumulation ছিল না — Continuation ছিল

### Example

**EUR/USD Accumulation to Distribution:**

**Accumulation Phase (Asian Session):**
- **সময়:** 12:00 AM - 7:00 AM London
- **Range:** 1.0840 - 1.0860 (20 Pip)
- **Equal High:** 1.0860 3 বার Test (BSL গঠিত)
- **Equal Low:** 1.0840 2 বার Test (SSL গঠিত)
- **বৈশিষ্ট্য:** ছোট Candle, কম Volatility
- **HTF Context:** 4H Bullish Bias

**Manipulation Phase (London Open):**
- **সময়:** 8:00 AM London
- **False Move:** Price 1.0835 এ Drop করে (SSL Sweep)
- **Rejection:** 1.0848 এ Bullish Engulfing ফিরে
- **সময়কাল:** 20 মিনিট

**Distribution Phase (London Morning):**
- **সময়:** 8:30 AM - 11:00 AM
- **BOS:** Price 1.0860 এর উপরে Break করে (Accumulation High)
- **Retracement:** 1.0852 এ ফিরে (FVG + OTE)
- **Entry:** 1.0852 এ BUY
- **Stop Loss:** 1.0838 (Manipulation Low এর নিচে)
- **Target:** 1.0920 (পরবর্তী BSL)

**ফলাফল:**
- 14 Pip Risk, 68 Pip Reward → 1:4.9 R:R
- Accumulation Range Setup Framework দিয়েছে

মূল ছিল Asian Consolidation কে Accumulation হিসেবে চিনা, Manipulation এর জন্য অপেক্ষা করা, তারপর Distribution এ Enter করা।
`,
);

console.log("✅ Topic 27 (Accumulation) complete!\n");

console.log("\n📝 Continuing with remaining topics...\n");
