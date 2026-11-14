import { writeFileSync } from "fs";
import { join } from "path";
const C = join(process.cwd(), "content");
const w = (l, slug, f, c) => {
  writeFileSync(
    join(C, l, "forex-sessions", slug + ".mdx"),
    `---\ntitle: "${f.title}"\ndescription: "${f.description}"\nlevel: ${f.level}\norder: ${f.order}\nlastUpdated: "2026-06-10"\n---\n` +
      c,
    "utf-8",
  );
  console.log(`✅ ${l}/forex-sessions/${slug}`);
};

// FOREX SESSIONS BATCH 1: asian-range, london-open-manipulation, new-york-reversal, session-liquidity-sweeps

w(
  "en",
  "asian-range",
  {
    title: "Asian Range Concept (BD Time) — Complete Guide",
    description:
      "Master the Asian Range — a core ICT concept. Learn how to mark, trade, and use the Asian Range for London session setups. All times in Bangladesh time.",
    level: "intermediate",
    order: 10,
  },
  `
## What is the Asian Range?

The Asian Range is the **price range created during the Tokyo/Asian session** — from **5:00 AM to 1:00 PM Bangladesh time**. In ICT/SMC methodology, this range is critical because London session typically **sweeps one side** of this range to begin its directional move.

<Callout type="info" title="Why Asian Range Matters">
The Asian Range creates liquidity pools on both sides. Buy stops accumulate above the Asian high, sell stops below the Asian low. London's algorithm targets this liquidity approximately 75% of trading days.
</Callout>

---

## How to Mark the Asian Range

\`\`\`
1. Open your chart at 1:00 PM BD (just before London opens)
2. Mark the HIGHEST price from 5:00 AM - 1:00 PM BD
3. Mark the LOWEST price from 5:00 AM - 1:00 PM BD
4. These horizontal lines = Asian Range boundaries
5. The space between = consolidation/liquidity zone
\`\`\`

---

## Why London Targets the Asian Range

| Factor | Explanation |
|--------|-------------|
| **Equal highs form** | Multiple touches at Asian high = BSL |
| **Equal lows form** | Multiple touches at Asian low = SSL |
| **Retail stops** | Breakout traders place stops just beyond |
| **Institutional need** | London needs liquidity to begin its move |
| **Time alignment** | Asian = consolidation, London = expansion |

---

## Trading the Asian Range

### Bullish Scenario:
\`\`\`
1. London sweeps the ASIAN LOW (takes sell stops)
2. Immediate reversal — rejection candle/CHOCH on M15
3. Entry on FVG/OB with bullish bias
4. Stop: Below the sweep wick
5. Target: Asian HIGH and beyond (PDH)
6. Time: 1:00 - 3:00 PM BD (London Kill Zone)
\`\`\`

### Bearish Scenario:
\`\`\`
1. London sweeps the ASIAN HIGH (takes buy stops)
2. Immediate reversal — rejection/CHOCH on M15
3. Entry on FVG/OB with bearish bias
4. Stop: Above the sweep wick
5. Target: Asian LOW and beyond (PDL)
6. Time: 1:00 - 3:00 PM BD
\`\`\`

---

## Daily Routine for BD Traders

| Time (BD) | Action |
|-----------|--------|
| 5:00 AM | Asian session starts — range forming |
| 12:00 PM | Review range — are H/L clean? |
| 12:55 PM | Mark final Asian High and Low |
| 1:00 PM | London opens — watch for sweep |
| 1:00 - 2:00 PM | Sweep occurs — watch for MSS/CHOCH |
| 2:00 - 4:00 PM | Enter trade after confirmation |

---

## Rules

1. **Only trade the sweep, NOT the initial break**
2. **Wider range = bigger potential move** (Asian range width often equals London range)
3. **Tight range = explosive breakout** likely
4. **If no sweep by 3:00 PM BD**, the pattern may not play out today
5. **Works best on major pairs:** EUR/USD, GBP/USD, USD/JPY

---

## Related Topics

- [London Session](/en/forex-sessions/london) — What happens after the sweep
- [Kill Zones](/en/forex-sessions/kill-zones) — Timing entries
- [Session Liquidity Sweeps](/en/forex-sessions/session-liquidity-sweeps) — Sweep mechanics
- [London Open Manipulation](/en/forex-sessions/london-open-manipulation) — Manipulation details
`,
);

w(
  "bn",
  "asian-range",
  {
    title: "Asian Range Concept (BD সময়) — সম্পূর্ণ গাইড",
    description:
      "Asian Range আয়ত্ত করুন — একটি মূল ICT Concept। London Session Setup-এ Asian Range কীভাবে Mark, Trade ও ব্যবহার করবেন শিখুন। সব সময় বাংলাদেশ সময়ে।",
    level: "intermediate",
    order: 10,
  },
  `
## Asian Range কী?

Asian Range হলো **Tokyo/Asian Session-এ তৈরি হওয়া Price Range** — **সকাল ৫:০০ থেকে দুপুর ১:০০ বাংলাদেশ সময়**। ICT/SMC Methodology-তে এই Range অত্যন্ত গুরুত্বপূর্ণ কারণ London Session সাধারণত তার Directional Move শুরু করতে এই Range-এর **একটি দিক Sweep** করে।

<Callout type="info" title="Asian Range কেন গুরুত্বপূর্ণ">
Asian Range উভয় দিকে Liquidity Pool তৈরি করে। Asian High-এর উপরে Buy Stop জমা হয়, Low-এর নিচে Sell Stop। London-এর Algorithm প্রায় ৭৫% Trading Day এই Liquidity Target করে।
</Callout>

---

## Asian Range কীভাবে Mark করবেন

\`\`\`
1. দুপুর ১:০০ BD-তে Chart Open করুন (London Open-এর ঠিক আগে)
2. সকাল ৫:০০ - দুপুর ১:০০ BD-র সর্বোচ্চ Price Mark করুন
3. সকাল ৫:০০ - দুপুর ১:০০ BD-র সর্বনিম্ন Price Mark করুন
4. এই Horizontal Line = Asian Range Boundary
5. মাঝের Space = Consolidation/Liquidity Zone
\`\`\`

---

## London কেন Asian Range Target করে

| বিষয় | ব্যাখ্যা |
|--------|---------|
| **Equal High তৈরি** | Asian High-এ একাধিক Touch = BSL |
| **Equal Low তৈরি** | Asian Low-তে একাধিক Touch = SSL |
| **Retail Stop** | Breakout Trader ঠিক বাইরে Stop রাখে |
| **Institutional প্রয়োজন** | London-এর Move শুরুতে Liquidity দরকার |
| **Time Alignment** | Asian = Consolidation, London = Expansion |

---

## Asian Range Trade করা

### Bullish Scenario:
\`\`\`
1. London ASIAN LOW Sweep করে (Sell Stop নেয়)
2. তাৎক্ষণিক Reversal — M15-এ Rejection/CHOCH
3. Bullish Bias-সহ FVG/OB-তে Entry
4. Stop: Sweep Wick-এর নিচে
5. Target: Asian HIGH ও তার বাইরে (PDH)
6. সময়: দুপুর ১:০০ - ৩:০০ BD (London Kill Zone)
\`\`\`

### Bearish Scenario:
\`\`\`
1. London ASIAN HIGH Sweep করে (Buy Stop নেয়)
2. তাৎক্ষণিক Reversal — M15-এ Rejection/CHOCH
3. Bearish Bias-সহ FVG/OB-তে Entry
4. Stop: Sweep Wick-এর উপরে
5. Target: Asian LOW ও তার বাইরে (PDL)
6. সময়: দুপুর ১:০০ - ৩:০০ BD
\`\`\`

---

## BD Trader-দের Daily Routine

| সময় (BD) | কাজ |
|-----------|------|
| সকাল ৫:০০ | Asian Session শুরু — Range তৈরি হচ্ছে |
| দুপুর ১২:০০ | Range Review — H/L পরিষ্কার? |
| দুপুর ১২:৫৫ | চূড়ান্ত Asian High ও Low Mark |
| দুপুর ১:০০ | London Open — Sweep পর্যবেক্ষণ |
| ১:০০ - ২:০০ | Sweep ঘটে — MSS/CHOCH পর্যবেক্ষণ |
| ২:০০ - ৪:০০ | Confirmation-এর পর Trade Enter |

---

## নিয়ম

1. **শুধু Sweep Trade করুন, Initial Break নয়**
2. **বড় Range = বড় সম্ভাব্য Move** (Asian Range Width প্রায়ই London Range-এর সমান)
3. **সংকীর্ণ Range = Explosive Breakout** সম্ভব
4. **বিকাল ৩:০০ BD-তেও Sweep না হলে** আজ Pattern কাজ নাও করতে পারে
5. **Major Pair-এ সেরা কাজ করে:** EUR/USD, GBP/USD, USD/JPY

---

## সম্পর্কিত বিষয়

- [London Session](/bn/forex-sessions/london) — Sweep-এর পর কী ঘটে
- [Kill Zones](/bn/forex-sessions/kill-zones) — Entry Timing
- [Session Liquidity Sweeps](/bn/forex-sessions/session-liquidity-sweeps) — Sweep Mechanics
`,
);

w(
  "en",
  "london-open-manipulation",
  {
    title: "London Open Manipulation — Complete Guide",
    description:
      "Master London Open manipulation patterns. Learn how smart money uses the first 30-60 minutes to trap retail traders and initiate the real move.",
    level: "intermediate",
    order: 8,
  },
  `
## What is London Open Manipulation?

London Open Manipulation (also called "Judas Swing") is the **false initial move** in the first 30-60 minutes of London session that traps retail traders before the real directional move begins. It's how smart money collects liquidity at the open.

<Callout type="warning" title="The Trap">
The first move at London Open is often FALSE. Smart money pushes price one direction to trigger stops and collect liquidity, then reverses to the true direction. Wait 30-60 minutes before entering.
</Callout>

---

## How It Works

\`\`\`
London Open Manipulation (Bullish Day):

1:00 PM BD → London opens
1:00 - 1:30 PM → Price drops sharply (Judas Swing DOWN)
                  ↓ Takes out Asian lows / sell stops
                  ↓ Retail thinks: "Bearish breakout!"
                  ↓ Retail shorts enter

1:30 - 2:00 PM → Price reverses violently (true direction UP)
                  ↑ Retail shorts get stopped
                  ↑ Smart money filled their longs on the drop
                  ↑ Real bullish move begins

This is the DAILY manipulation pattern of London session.
\`\`\`

---

## Identifying the Manipulation

| Signal | Description |
|--------|-------------|
| **Fast spike** | Sudden move in first 15-30 min |
| **Takes liquidity** | Sweeps Asian H/L or previous session levels |
| **Low volume** | Often on decreasing volume |
| **Against HTF bias** | Move contradicts D1/H4 trend |
| **Quick reversal** | Strong V-shape recovery |

---

## Trading the Manipulation

### Strategy:
\`\`\`
1. Mark Asian Range before London open (1:00 PM BD)
2. Determine daily bias (D1/H4 direction)
3. Wait for the initial "fake" move (first 30 min)
4. Look for sweep of Asian H/L + reversal
5. Enter AFTER the reversal confirms (CHOCH on M5/M15)
6. Stop: Beyond the manipulation wick
7. Target: Opposite side of Asian Range, then PDH/PDL

Key Rule: NEVER trade the first 30 minutes of London.
Wait for the trap to spring, then trade the real move.
\`\`\`

---

## BD Time Schedule

| Time (BD) | What Happens |
|-----------|-------------|
| 1:00 PM | London opens — manipulation begins |
| 1:00 - 1:30 PM | Judas Swing (false move) — DON'T trade |
| 1:30 - 2:00 PM | Reversal begins — look for confirmation |
| 2:00 - 4:00 PM | True move — enter with confirmation |
| 4:00 - 6:00 PM | Move continues (overlap with NY prep) |

---

## Related Topics

- [Asian Range](/en/forex-sessions/asian-range) — The range that gets swept
- [Kill Zones](/en/forex-sessions/kill-zones) — London Kill Zone
- [Session Liquidity Sweeps](/en/forex-sessions/session-liquidity-sweeps) — Sweep mechanics
- [New York Reversal](/en/forex-sessions/new-york-reversal) — Similar NY pattern
`,
);

w(
  "bn",
  "london-open-manipulation",
  {
    title: "London Open Manipulation — সম্পূর্ণ গাইড",
    description:
      "London Open Manipulation Pattern আয়ত্ত করুন। প্রথম ৩০-৬০ মিনিটে Smart Money কীভাবে Retail Trader Trap করে এবং প্রকৃত Move শুরু করে শিখুন।",
    level: "intermediate",
    order: 8,
  },
  `
## London Open Manipulation কী?

London Open Manipulation (যাকে "Judas Swing"-ও বলে) হলো London Session-এর প্রথম ৩০-৬০ মিনিটে **মিথ্যা Initial Move** যা প্রকৃত Directional Move শুরুর আগে Retail Trader-দের Trap করে। এভাবে Smart Money Open-এ Liquidity সংগ্রহ করে।

<Callout type="warning" title="Trap">
London Open-এ প্রথম Move প্রায়ই FALSE। Smart Money একদিকে Price ঠেলে Stop Trigger ও Liquidity সংগ্রহ করে, তারপর প্রকৃত Direction-এ Reverse করে। Enter করার আগে ৩০-৬০ মিনিট অপেক্ষা করুন।
</Callout>

---

## কীভাবে কাজ করে

\`\`\`
London Open Manipulation (Bullish Day):

দুপুর ১:০০ BD → London Open
১:০০ - ১:৩০ → Price দ্রুত নামে (Judas Swing DOWN)
                ↓ Asian Low / Sell Stop নেয়
                ↓ Retail ভাবে: "Bearish Breakout!"
                ↓ Retail Short Enter করে

১:৩০ - ২:০০ → Price তীব্রভাবে Reverse (প্রকৃত Direction UP)
                ↑ Retail Short Stop Out হয়
                ↑ Smart Money Drop-এ Long Fill করেছে
                ↑ প্রকৃত Bullish Move শুরু

এটি London Session-এর দৈনিক Manipulation Pattern।
\`\`\`

---

## Manipulation চিহ্নিতকরণ

| Signal | বর্ণনা |
|--------|--------|
| **দ্রুত Spike** | প্রথম ১৫-৩০ মিনিটে আকস্মিক Move |
| **Liquidity নেয়** | Asian H/L বা Previous Session Level Sweep |
| **কম Volume** | প্রায়ই Volume কমে |
| **HTF Bias-এর বিরুদ্ধে** | D1/H4 Trend-এর বিরোধী Move |
| **দ্রুত Reversal** | শক্তিশালী V-shape Recovery |

---

## Manipulation Trade করা

\`\`\`
1. London Open-এর আগে Asian Range Mark (দুপুর ১:০০ BD)
2. Daily Bias নির্ধারণ (D1/H4 Direction)
3. Initial "Fake" Move-এর জন্য অপেক্ষা (প্রথম ৩০ মিনিট)
4. Asian H/L Sweep + Reversal খুঁজুন
5. Reversal Confirm হওয়ার পর Enter (M5/M15-এ CHOCH)
6. Stop: Manipulation Wick-এর বাইরে
7. Target: Asian Range-এর বিপরীত দিক, তারপর PDH/PDL

মূল নিয়ম: London-এর প্রথম ৩০ মিনিট কখনো Trade করবেন না।
Trap Spring হওয়ার অপেক্ষা, তারপর প্রকৃত Move Trade।
\`\`\`

---

## BD সময়সূচী

| সময় (BD) | কী ঘটে |
|-----------|--------|
| দুপুর ১:০০ | London Open — Manipulation শুরু |
| ১:০০ - ১:৩০ | Judas Swing (False Move) — Trade করবেন না |
| ১:৩০ - ২:০০ | Reversal শুরু — Confirmation খুঁজুন |
| ২:০০ - ৪:০০ | প্রকৃত Move — Confirmation-সহ Enter |
| ৪:০০ - ৬:০০ | Move Continue (NY Prep-এর সাথে Overlap) |

---

## সম্পর্কিত বিষয়

- [Asian Range](/bn/forex-sessions/asian-range) — যে Range Sweep হয়
- [Kill Zones](/bn/forex-sessions/kill-zones) — London Kill Zone
- [New York Reversal](/bn/forex-sessions/new-york-reversal) — একই NY Pattern
`,
);

w(
  "en",
  "new-york-reversal",
  {
    title: "New York Reversal — Complete Guide",
    description:
      "Master the New York session reversal pattern. Learn how NY often reverses London's move and creates the daily high/low.",
    level: "intermediate",
    order: 9,
  },
  `
## What is the New York Reversal?

The New York Reversal is a pattern where the **NY session reverses the London session's direction**, often creating the opposite daily extreme. If London made the daily low, NY makes the daily high (and vice versa).

---

## How It Works

\`\`\`
Common Pattern (Bullish NY Reversal):
1. London creates the daily LOW (sweeps Asian low)
2. London moves up but stalls
3. NY opens and pushes slightly lower (takes London's low)
4. NY REVERSES strongly upward
5. NY creates the daily HIGH

Time (BD):
- London Low: 1:00 - 3:00 PM
- NY Reversal: 6:00 - 8:00 PM
- NY High: 8:00 - 11:00 PM
\`\`\`

---

## When NY Reverses vs. Continues

| NY Reversal (Counter) | NY Continuation |
|-----------------------|-----------------|
| London overextended | London just started |
| London hit major S/R | London in open space |
| High-impact US news against London | No US news |
| Daily bias opposite to London | Daily bias same as London |

---

## Trading the NY Reversal

\`\`\`
1. Note London's direction and extreme (H or L)
2. Wait for NY open (6:00 PM BD)
3. Look for London's extreme to be swept or tested
4. If reversal forms (CHOCH on M15) → trade the reversal
5. Stop: Beyond London's extreme
6. Target: Opposite daily extreme (if London made low, target high)
7. Best on days with US news that contradicts London
\`\`\`

---

## BD Time for NY Reversal

| Time (BD) | Action |
|-----------|--------|
| 5:00 - 6:00 PM | Pre-NY — note London's direction |
| 6:00 - 7:00 PM | NY opens — watch for initial move |
| 7:00 - 8:00 PM | Reversal window — look for CHOCH |
| 8:00 - 11:00 PM | Trade the reversal move |

---

## Related Topics

- [London Session](/en/forex-sessions/london) — What NY reverses
- [New York Session](/en/forex-sessions/new-york) — Full NY guide
- [Daily Session Bias](/en/forex-sessions/daily-session-bias) — Predicting direction
- [London Open Manipulation](/en/forex-sessions/london-open-manipulation) — Similar London pattern
`,
);

w(
  "bn",
  "new-york-reversal",
  {
    title: "New York Reversal — সম্পূর্ণ গাইড",
    description:
      "New York Session Reversal Pattern আয়ত্ত করুন। NY কীভাবে প্রায়ই London-এর Move Reverse করে ও Daily High/Low তৈরি করে শিখুন।",
    level: "intermediate",
    order: 9,
  },
  `
## New York Reversal কী?

New York Reversal হলো এমন Pattern যেখানে **NY Session London Session-এর Direction Reverse করে**, প্রায়ই বিপরীত Daily Extreme তৈরি করে। London যদি Daily Low করে, NY Daily High করে (এবং উল্টো)।

---

## কীভাবে কাজ করে

\`\`\`
সাধারণ Pattern (Bullish NY Reversal):
1. London Daily LOW তৈরি করে (Asian Low Sweep)
2. London উপরে Move করে কিন্তু Stall
3. NY Open হয়ে সামান্য নিচে Push (London-এর Low নেয়)
4. NY শক্তিশালীভাবে উপরে REVERSE
5. NY Daily HIGH তৈরি করে

সময় (BD):
- London Low: দুপুর ১:০০ - ৩:০০
- NY Reversal: সন্ধ্যা ৬:০০ - ৮:০০
- NY High: রাত ৮:০০ - ১১:০০
\`\`\`

---

## NY কখন Reverse vs. Continue করে

| NY Reversal (Counter) | NY Continuation |
|-----------------------|-----------------|
| London Overextended | London সবে শুরু |
| London Major S/R Hit করেছে | London Open Space-এ |
| London-এর বিরুদ্ধে US News | কোনো US News নেই |
| London-এর বিপরীত Daily Bias | London-এর মতো Daily Bias |

---

## NY Reversal Trade করা

\`\`\`
1. London-এর Direction ও Extreme (H বা L) Note করুন
2. NY Open-এর জন্য অপেক্ষা (সন্ধ্যা ৬:০০ BD)
3. London-এর Extreme Sweep/Test হচ্ছে কি না দেখুন
4. Reversal তৈরি হলে (M15-এ CHOCH) → Reversal Trade
5. Stop: London-এর Extreme-এর বাইরে
6. Target: বিপরীত Daily Extreme
7. London-কে Contradict করে এমন US News Day-এ সেরা
\`\`\`

---

## BD সময়সূচী

| সময় (BD) | কাজ |
|-----------|------|
| বিকাল ৫:০০ - ৬:০০ | Pre-NY — London-এর Direction Note |
| সন্ধ্যা ৬:০০ - ৭:০০ | NY Open — Initial Move পর্যবেক্ষণ |
| সন্ধ্যা ৭:০০ - ৮:০০ | Reversal Window — CHOCH খুঁজুন |
| রাত ৮:০০ - ১১:০০ | Reversal Move Trade |

---

## সম্পর্কিত বিষয়

- [London Session](/bn/forex-sessions/london) — NY কী Reverse করে
- [New York Session](/bn/forex-sessions/new-york) — সম্পূর্ণ NY Guide
- [Daily Session Bias](/bn/forex-sessions/daily-session-bias) — Direction Predict
`,
);

w(
  "en",
  "session-liquidity-sweeps",
  {
    title: "Session Liquidity Sweeps — Complete Guide",
    description:
      "Master how sessions sweep previous session liquidity. Learn the chain of sweeps from Asian to London to New York.",
    level: "intermediate",
    order: 11,
  },
  `
## What are Session Liquidity Sweeps?

Session Liquidity Sweeps occur when a **new session targets and takes the liquidity** left by the previous session. This is the fundamental mechanism driving intraday price movement in institutional trading.

---

## The Sweep Chain

\`\`\`
Session Flow (BD Time):
Asian (5AM-1PM) → Creates range (liquidity above/below)
London (1PM-10PM) → Sweeps Asian H or L, then trends
NY (6PM-3AM) → Continues or sweeps London H/L

Each session's H/L becomes the NEXT session's target.
\`\`\`

---

## Types of Session Sweeps

| Sweep Type | What Happens | Time (BD) |
|-----------|-------------|-----------|
| London sweeps Asian Low | Bearish trap → bullish move | 1:00 - 2:00 PM |
| London sweeps Asian High | Bullish trap → bearish move | 1:00 - 2:00 PM |
| NY sweeps London Low | London low taken for NY longs | 6:00 - 8:00 PM |
| NY sweeps London High | London high taken for NY shorts | 6:00 - 8:00 PM |
| Next day sweeps PDH | Previous day high = BSL target | Next London open |
| Next day sweeps PDL | Previous day low = SSL target | Next London open |

---

## Trading Session Sweeps

\`\`\`
1. Mark previous session H/L clearly
2. Wait for new session to approach these levels
3. If price sweeps (goes beyond then reverses):
   - That's the entry signal
   - Enter on reversal confirmation (CHOCH/engulfing)
4. Stop: Beyond the sweep wick
5. Target: Opposite session extreme

Success rate: ~70% when aligned with daily bias
\`\`\`

---

## Rules

1. The FIRST sweep of a session is highest probability
2. Mark ALL session H/L as potential targets
3. Align sweeps with higher timeframe bias
4. Don't trade sweeps against the daily trend
5. PDH/PDL sweeps are stronger than intraday session sweeps

---

## Related Topics

- [Asian Range](/en/forex-sessions/asian-range) — Most commonly swept range
- [London Open Manipulation](/en/forex-sessions/london-open-manipulation) — London sweeps
- [Session Liquidity (SMC)](/en/smc/session-liquidity) — Detailed SMC context
- [Kill Zones](/en/forex-sessions/kill-zones) — When sweeps happen
`,
);

w(
  "bn",
  "session-liquidity-sweeps",
  {
    title: "Session Liquidity Sweep — সম্পূর্ণ গাইড",
    description:
      "Session কীভাবে পূর্ববর্তী Session-এর Liquidity Sweep করে আয়ত্ত করুন। Asian থেকে London থেকে New York পর্যন্ত Sweep Chain শিখুন।",
    level: "intermediate",
    order: 11,
  },
  `
## Session Liquidity Sweep কী?

Session Liquidity Sweep ঘটে যখন একটি **নতুন Session পূর্ববর্তী Session-এর রেখে যাওয়া Liquidity Target করে নেয়**। এটি Institutional Trading-এ Intraday Price Movement চালিত করার মৌলিক Mechanism।

---

## Sweep Chain

\`\`\`
Session Flow (BD সময়):
Asian (৫AM-১PM) → Range তৈরি (উপরে/নিচে Liquidity)
London (১PM-১০PM) → Asian H বা L Sweep করে, তারপর Trend
NY (৬PM-৩AM) → Continue করে বা London H/L Sweep করে

প্রতিটি Session-এর H/L পরবর্তী Session-এর TARGET হয়।
\`\`\`

---

## Session Sweep-এর ধরন

| Sweep ধরন | কী ঘটে | সময় (BD) |
|-----------|--------|-----------|
| London Asian Low Sweep | Bearish Trap → Bullish Move | ১:০০ - ২:০০ PM |
| London Asian High Sweep | Bullish Trap → Bearish Move | ১:০০ - ২:০০ PM |
| NY London Low Sweep | NY Long-এর জন্য London Low নেওয়া | ৬:০০ - ৮:০০ PM |
| NY London High Sweep | NY Short-এর জন্য London High নেওয়া | ৬:০০ - ৮:০০ PM |
| PDH Sweep পরের দিন | Previous Day High = BSL Target | পরবর্তী London Open |
| PDL Sweep পরের দিন | Previous Day Low = SSL Target | পরবর্তী London Open |

---

## Session Sweep Trade করা

\`\`\`
1. পূর্ববর্তী Session H/L স্পষ্টভাবে Mark
2. নতুন Session এই Level Approach করার অপেক্ষা
3. যদি Price Sweep করে (বাইরে যায় তারপর Reverse):
   - এটি Entry Signal
   - Reversal Confirmation-এ Enter (CHOCH/Engulfing)
4. Stop: Sweep Wick-এর বাইরে
5. Target: বিপরীত Session Extreme

Daily Bias-এর সাথে Aligned হলে Success Rate: ~৭০%
\`\`\`

---

## নিয়ম

1. Session-এর প্রথম Sweep সর্বোচ্চ Probability
2. সব Session H/L সম্ভাব্য Target হিসেবে Mark করুন
3. Higher Timeframe Bias-এর সাথে Sweep Align করুন
4. Daily Trend-এর বিরুদ্ধে Sweep Trade করবেন না
5. PDH/PDL Sweep Intraday Session Sweep-এর চেয়ে শক্তিশালী

---

## সম্পর্কিত বিষয়

- [Asian Range](/bn/forex-sessions/asian-range) — সবচেয়ে বেশি Swept Range
- [London Open Manipulation](/bn/forex-sessions/london-open-manipulation) — London Sweep
- [Kill Zones](/bn/forex-sessions/kill-zones) — কখন Sweep ঘটে
`,
);

w(
  "en",
  "daily-session-bias",
  {
    title: "Daily Session Bias — Complete Guide",
    description:
      "Master how to determine daily directional bias before the session starts. Use higher timeframe analysis to predict session direction.",
    level: "intermediate",
    order: 12,
  },
  `
## What is Daily Session Bias?

Daily Session Bias is determining the **most likely direction** for today's trading BEFORE the session begins. By analyzing D1/H4 structure and key levels, you can predict whether today will be bullish or bearish — and only take trades in that direction.

---

## How to Determine Bias

\`\`\`
Step 1: Check D1 candle
- Previous D1 closed bullish? → Bullish bias today
- Previous D1 closed bearish? → Bearish bias today
- D1 at key level? → Potential reversal day

Step 2: Check H4 structure
- HH/HL forming? → Bullish bias
- LH/LL forming? → Bearish bias
- Range? → Wait for break

Step 3: Identify draw on liquidity
- Unswept highs above? → Bullish target
- Unswept lows below? → Bearish target
- PDH/PDL as immediate targets

Step 4: Weekly candle context
- Where is price within weekly range?
- Upper 25% → look for shorts
- Lower 25% → look for longs
\`\`\`

---

## Applying Bias to Sessions

| Bias | London Action | NY Action |
|------|-------------|-----------|
| Bullish | Sweep Asian LOW, then rally | Continue higher or hold gains |
| Bearish | Sweep Asian HIGH, then sell | Continue lower or hold losses |
| Neutral | Wait for London to show direction | Follow London's lead |

---

## Rules

1. **Determine bias BEFORE market opens** — not after
2. **Only trade in bias direction** — skip counter-bias setups
3. **Re-evaluate if CHOCH occurs** against your bias on H4
4. **No bias? No trade.** — Unclear = sit out
5. **Tuesday-Thursday** have most reliable bias continuation

---

## Related Topics

- [London Open Manipulation](/en/forex-sessions/london-open-manipulation) — Bias determines which side gets swept
- [Kill Zones](/en/forex-sessions/kill-zones) — When to execute bias trades
- [Session Strategies](/en/forex-sessions/session-strategies) — Strategy per bias
`,
);

w(
  "bn",
  "daily-session-bias",
  {
    title: "Daily Session Bias — সম্পূর্ণ গাইড",
    description:
      "Session শুরুর আগে দৈনিক Directional Bias কীভাবে নির্ধারণ করবেন আয়ত্ত করুন। Session Direction Predict করতে Higher Timeframe Analysis ব্যবহার।",
    level: "intermediate",
    order: 12,
  },
  `
## Daily Session Bias কী?

Daily Session Bias হলো Session শুরুর আগে আজকের Trading-এর **সবচেয়ে সম্ভাব্য Direction** নির্ধারণ করা। D1/H4 Structure ও Key Level বিশ্লেষণ করে আপনি Predict করতে পারেন আজ Bullish হবে না Bearish — এবং শুধু সেই Direction-এ Trade নেবেন।

---

## Bias কীভাবে নির্ধারণ করবেন

\`\`\`
ধাপ ১: D1 Candle Check
- পূর্ববর্তী D1 Bullish Close? → আজ Bullish Bias
- পূর্ববর্তী D1 Bearish Close? → আজ Bearish Bias
- D1 Key Level-এ? → সম্ভাব্য Reversal Day

ধাপ ২: H4 Structure Check
- HH/HL তৈরি হচ্ছে? → Bullish Bias
- LH/LL তৈরি হচ্ছে? → Bearish Bias
- Range? → Break-এর জন্য অপেক্ষা

ধাপ ৩: Draw on Liquidity চিহ্নিত
- উপরে Unswept High? → Bullish Target
- নিচে Unswept Low? → Bearish Target
- PDH/PDL তাৎক্ষণিক Target হিসেবে

ধাপ ৪: Weekly Candle Context
- Weekly Range-এর মধ্যে Price কোথায়?
- Upper 25% → Short খুঁজুন
- Lower 25% → Long খুঁজুন
\`\`\`

---

## Session-এ Bias প্রয়োগ

| Bias | London Action | NY Action |
|------|-------------|-----------|
| Bullish | Asian LOW Sweep, তারপর Rally | উপরে Continue বা Gain ধরে রাখা |
| Bearish | Asian HIGH Sweep, তারপর Sell | নিচে Continue বা Loss ধরে রাখা |
| Neutral | London Direction দেখানোর অপেক্ষা | London-কে Follow |

---

## নিয়ম

1. **Market Open-এর আগে Bias নির্ধারণ** — পরে নয়
2. **শুধু Bias Direction-এ Trade** — Counter-bias Setup Skip
3. **H4-এ Bias-এর বিরুদ্ধে CHOCH হলে পুনর্মূল্যায়ন**
4. **Bias নেই? Trade নেই।** — অস্পষ্ট = বসে থাকুন
5. **মঙ্গল-বৃহস্পতিবার** সবচেয়ে নির্ভরযোগ্য Bias Continuation

---

## সম্পর্কিত বিষয়

- [London Open Manipulation](/bn/forex-sessions/london-open-manipulation) — Bias নির্ধারণ করে কোন দিক Sweep
- [Kill Zones](/bn/forex-sessions/kill-zones) — কখন Bias Trade Execute
- [Session Strategies](/bn/forex-sessions/session-strategies) — Bias অনুযায়ী Strategy
`,
);

console.log("\n✅ Forex Sessions Batch 1 Complete: 4 topics × 2 languages = 8 files");
console.log(
  "Topics: asian-range, london-open-manipulation, new-york-reversal, session-liquidity-sweeps, daily-session-bias",
);
