import { writeFileSync } from "fs";
import { join } from "path";
const C = join(process.cwd(), "content");
const w = (l, c, s, f, t) => {
  writeFileSync(
    join(C, l, c, s + ".mdx"),
    `---\ntitle: "${f.title}"\ndescription: "${f.description}"\nlevel: ${f.level}\norder: ${f.order}\nlastUpdated: "2026-05-11"\n---\n` +
      t,
    "utf-8",
  );
  console.log(`✅ ${l}/${c}/${s}`);
};

// ============================================================
// FOREX BASICS - EN
// ============================================================
w(
  "en",
  "academy",
  "forex-basics",
  {
    title: "Forex Basics — Complete Guide",
    description:
      "Complete beginner guide to Forex trading. Learn currency pairs, pips, lots, spread, leverage, margin, order types, and how the forex market works.",
    level: "beginner",
    order: 1,
  },
  `
## What is Forex Trading?

Forex (Foreign Exchange) is the **global marketplace for trading currencies**. It's the largest and most liquid financial market in the world, with daily trading volume exceeding **$7.5 trillion**. Unlike stock markets, forex operates 24 hours a day, 5 days a week.

When you trade forex, you're simultaneously **buying one currency and selling another**. Currencies are always traded in pairs — for example, EUR/USD means you're trading the Euro against the US Dollar.

<Callout type="info" title="Why Trade Forex?">
Forex is the most accessible market for retail traders because of 24/5 availability, high liquidity, low barriers to entry, and the ability to profit in both rising and falling markets.
</Callout>

---

## How the Forex Market Works

### Market Participants:

| Participant | Role | Volume |
|------------|------|--------|
| **Central Banks** | Monetary policy, currency reserves | Largest |
| **Commercial Banks** | Interbank trading, client orders | Very Large |
| **Hedge Funds** | Speculation, algorithmic trading | Large |
| **Corporations** | International trade hedging | Medium |
| **Retail Traders** | Individual speculation | Small (~5%) |

### Market Structure:

The forex market is **decentralized** (no central exchange). It operates through a global network of banks, brokers, and electronic trading platforms. This is called the **Over-The-Counter (OTC)** market.

---

## Currency Pairs Explained

### Types of Currency Pairs:

#### Major Pairs (Most Traded):
| Pair | Name | Spread (Typical) |
|------|------|------------------|
| EUR/USD | Euro/Dollar | 0.6-1.0 pips |
| GBP/USD | Cable | 0.8-1.5 pips |
| USD/JPY | Dollar/Yen | 0.7-1.2 pips |
| USD/CHF | Dollar/Swiss | 1.0-1.8 pips |
| AUD/USD | Aussie | 0.8-1.4 pips |
| USD/CAD | Loonie | 1.0-1.8 pips |
| NZD/USD | Kiwi | 1.2-2.0 pips |

#### Minor Pairs:
EUR/GBP, EUR/JPY, GBP/JPY, AUD/JPY, etc. (Don't include USD)

#### Exotic Pairs:
USD/TRY, USD/ZAR, EUR/TRY, etc. (Include one major + one emerging market currency. Higher spreads.)

### Base and Quote Currency:

In EUR/USD = 1.0900:
- **EUR** = Base currency (what you're buying/selling)
- **USD** = Quote currency (the price)
- The price means: 1 EUR = 1.0900 USD

---

## Understanding Pips

A **pip** (Percentage in Point) is the smallest standard price movement in forex:
- For most pairs: **4th decimal place** (0.000**1**)
- For JPY pairs: **2nd decimal place** (0.0**1**)

### Examples:
- EUR/USD moves from 1.0900 to 1.0910 = **+10 pips**
- USD/JPY moves from 150.00 to 150.50 = **+50 pips**
- GBP/USD moves from 1.2700 to 1.2685 = **-15 pips**

### Pipettes:
Some brokers show a 5th decimal (0.00001). This is a **pipette** = 1/10th of a pip.

### Pip Value:
The monetary value of one pip depends on your lot size:

| Lot Size | Units | Pip Value (USD pairs) |
|----------|-------|----------------------|
| Standard (1.0) | 100,000 | $10 per pip |
| Mini (0.1) | 10,000 | $1 per pip |
| Micro (0.01) | 1,000 | $0.10 per pip |

---

## Lot Sizes & Position Sizing

### What is a Lot?

A lot is the **standardized unit of measurement** for trade size:

- **Standard Lot** = 100,000 units of base currency
- **Mini Lot** = 10,000 units (0.10 lot)
- **Micro Lot** = 1,000 units (0.01 lot)

### Position Sizing Formula:

\`\`\`
Position Size = (Account Risk $) ÷ (Stop Loss in pips × Pip Value)

Example:
- Account: $10,000
- Risk: 1% = $100
- Stop Loss: 20 pips
- Pip Value: $10 (standard lot)

Position Size = $100 ÷ (20 × $10) = 0.50 lots
\`\`\`

<Callout type="warning" title="Golden Rule">
Never risk more than **1-2% of your account** on a single trade. This ensures you can survive a streak of losses and continue trading.
</Callout>

---

## Spread & Commission

### What is Spread?

The **spread** is the difference between the **Bid** (sell price) and **Ask** (buy price). It's the broker's primary way of earning revenue.

- **Bid:** The price at which you can SELL
- **Ask:** The price at which you can BUY
- **Spread** = Ask - Bid

Example: EUR/USD Bid: 1.0900 / Ask: 1.0901 → Spread = 1 pip

### Types of Spreads:
| Type | Description | Best For |
|------|-------------|----------|
| **Fixed** | Stays the same regardless of conditions | Beginners |
| **Variable** | Changes based on market liquidity | Active traders |
| **Raw/ECN** | Near-zero spread + commission | Professional |

### Commission:
Some brokers charge a separate commission per trade (e.g., $3.50 per lot per side) in addition to tight spreads.

---

## Leverage & Margin

### What is Leverage?

Leverage allows you to **control a larger position with a smaller amount of capital**. It's expressed as a ratio:

| Leverage | Margin Required | $10,000 Controls |
|----------|----------------|-------------------|
| 1:10 | 10% | $100,000 |
| 1:50 | 2% | $500,000 |
| 1:100 | 1% | $1,000,000 |
| 1:500 | 0.2% | $5,000,000 |

### Margin:
**Margin** is the deposit required to open and maintain a leveraged position.

- **Used Margin:** Amount locked for open positions
- **Free Margin:** Available for new trades
- **Margin Level:** (Equity ÷ Used Margin) × 100%
- **Margin Call:** When margin level drops below broker's threshold (typically 50-100%)

<Callout type="warning" title="Leverage Warning">
Leverage amplifies both profits AND losses. A 1:100 leverage means a 1% move against you = 100% of your margin lost. Use leverage conservatively — professional traders rarely exceed 1:10 effective leverage.
</Callout>

---

## Order Types

### Market Order
Executes immediately at the current market price. Use when you want to enter NOW.

### Limit Order
Executes at a specific price or better:
- **Buy Limit:** Buy BELOW current price (expecting bounce up)
- **Sell Limit:** Sell ABOVE current price (expecting drop down)

### Stop Order
Executes when price reaches a specific level:
- **Buy Stop:** Buy ABOVE current price (breakout entry)
- **Sell Stop:** Sell BELOW current price (breakdown entry)

### Stop Loss
Automatically closes your position at a predetermined loss level. **Always use a stop loss.**

### Take Profit
Automatically closes your position at a predetermined profit level.

---

## Trading Sessions (Bangladesh Time)

| Session | BD Time | Major Pairs |
|---------|---------|-------------|
| **Sydney** | 3:00 AM - 12:00 PM | AUD, NZD pairs |
| **Tokyo** | 5:00 AM - 2:00 PM | JPY pairs |
| **London** | 2:00 PM - 11:00 PM | EUR, GBP pairs |
| **New York** | 7:30 PM - 4:00 AM | USD pairs |

### Best Trading Times (BD):
- **London-NY Overlap:** 7:30 PM - 11:00 PM (highest liquidity & volatility)
- **Tokyo-London Overlap:** 2:00 PM - 3:00 PM

---

## Your First Trade — Step by Step

1. **Open a demo account** with a regulated broker
2. **Learn the platform** (MetaTrader 4/5 or cTrader)
3. **Analyze the pair** — pick one major pair to start (EUR/USD recommended)
4. **Determine bias** — What direction do you expect based on analysis?
5. **Set entry, stop loss, and take profit** — Always plan before entering
6. **Calculate position size** — Based on 1% risk maximum
7. **Execute the trade** — Enter and don't panic
8. **Manage the trade** — Follow your plan, don't move your stop loss wider
9. **Journal the trade** — Record everything for review

---

## Common Beginner Mistakes

<Callout type="warning" title="Avoid These Fatal Errors">

**❌ No stop loss** — Every trade MUST have a stop loss. No exceptions.

**❌ Risking too much** — Keep risk at 1-2% per trade. Blowing accounts happens from over-risking.

**❌ Over-leveraging** — High leverage = fast account destruction. Start with low leverage.

**❌ Trading too many pairs** — Master ONE pair before adding more.

**❌ No trading plan** — Random entries = random (mostly negative) results.

**❌ Revenge trading** — After a loss, don't immediately enter another trade to "make it back."

**❌ Skipping the demo** — Practice for at least 3 months on demo before going live.

</Callout>

---

## FAQ

### How much money do I need to start forex trading?
You can start with as little as $100 with a micro account. However, $500-$1,000 is recommended for meaningful position sizing. Start with a demo account first regardless.

### Is forex trading halal?
Islamic (swap-free) accounts are available that don't charge overnight interest. Consult with a knowledgeable scholar for guidance on your specific trading approach.

### What is the best pair for beginners?
EUR/USD — it has the tightest spreads, highest liquidity, most predictable behavior, and moves at a moderate pace.

### How much can I make from forex?
Realistic expectations: 3-10% monthly returns with proper risk management after years of practice. Most beginners lose money in their first year. Focus on learning, not earning.

---

## Summary

| Concept | Key Points |
|---------|-----------|
| **Forex** | Global currency market, $7.5T daily volume |
| **Pairs** | Base/Quote — EUR/USD, GBP/USD, etc. |
| **Pips** | 4th decimal (0.0001), 2nd for JPY |
| **Lots** | Standard (100K), Mini (10K), Micro (1K) |
| **Spread** | Bid-Ask difference = trading cost |
| **Leverage** | Amplifies profits AND losses |
| **Risk** | 1-2% per trade maximum |
| **Best Time (BD)** | 7:30 PM - 11:00 PM (London-NY overlap) |

---

## Related Topics

- [Risk Management](/en/academy/risk-management) — Protecting your capital
- [Position Sizing](/en/academy/position-sizing) — How much to risk per trade
- [Trading Psychology](/en/academy/trading-psychology) — The mental game
- [Economic Calendar](/en/academy/economic-calendar-guide) — News that moves forex
`,
);

// ============================================================
// FOREX BASICS - BN
// ============================================================
w(
  "bn",
  "academy",
  "forex-basics",
  {
    title: "ফরেক্স বেসিক — সম্পূর্ণ গাইড",
    description:
      "ফরেক্স ট্রেডিংয়ের সম্পূর্ণ বিগিনার গাইড। কারেন্সি পেয়ার, পিপ, লট, স্প্রেড, লিভারেজ, মার্জিন, অর্ডার টাইপ এবং ফরেক্স মার্কেট কীভাবে কাজ করে শিখুন।",
    level: "beginner",
    order: 1,
  },
  `
## ফরেক্স ট্রেডিং কী?

ফরেক্স (Foreign Exchange) হলো **কারেন্সি ট্রেডিংয়ের বৈশ্বিক মার্কেটপ্লেস**। এটি বিশ্বের সবচেয়ে বড় এবং সবচেয়ে লিকুইড আর্থিক মার্কেট, দৈনিক ট্রেডিং ভলিউম **$7.5 ট্রিলিয়নেরও** বেশি। স্টক মার্কেটের বিপরীতে, ফরেক্স সপ্তাহে ৫ দিন ২৪ ঘণ্টা চালু থাকে।

ফরেক্স ট্রেড করলে আপনি একই সাথে **একটি কারেন্সি কিনছেন এবং আরেকটি বিক্রি করছেন**। কারেন্সি সর্বদা পেয়ারে ট্রেড হয় — যেমন EUR/USD মানে আপনি ইউরোকে ডলারের বিপরীতে ট্রেড করছেন।

<Callout type="info" title="কেন ফরেক্স ট্রেড করবেন?">
ফরেক্স রিটেইল ট্রেডারদের জন্য সবচেয়ে সহজলভ্য মার্কেট কারণ ২৪/৫ উপলব্ধতা, উচ্চ লিকুইডিটি, কম প্রবেশ বাধা, এবং ওঠা-নামা উভয় মার্কেটে লাভের সুযোগ।
</Callout>

---

## কারেন্সি পেয়ার ব্যাখ্যা

### মেজর পেয়ার (সবচেয়ে বেশি ট্রেড হয়):

| পেয়ার | নাম | সাধারণ স্প্রেড |
|--------|------|---------------|
| EUR/USD | ইউরো/ডলার | 0.6-1.0 পিপ |
| GBP/USD | কেবল | 0.8-1.5 পিপ |
| USD/JPY | ডলার/ইয়েন | 0.7-1.2 পিপ |
| AUD/USD | অসি | 0.8-1.4 পিপ |

### বেস ও কোট কারেন্সি:

EUR/USD = 1.0900 তে:
- **EUR** = বেস কারেন্সি (যা কিনছেন/বিক্রি করছেন)
- **USD** = কোট কারেন্সি (দাম)
- অর্থ: 1 EUR = 1.0900 USD

---

## পিপ বোঝা

**পিপ** (Percentage in Point) হলো ফরেক্সে ক্ষুদ্রতম স্ট্যান্ডার্ড প্রাইস মুভমেন্ট:
- বেশিরভাগ পেয়ারে: **৪র্থ দশমিক স্থান** (0.000**1**)
- JPY পেয়ারে: **২য় দশমিক স্থান** (0.0**1**)

### উদাহরণ:
- EUR/USD 1.0900 থেকে 1.0910 যায় = **+10 পিপ**
- USD/JPY 150.00 থেকে 150.50 যায় = **+50 পিপ**

### পিপ ভ্যালু:

| লট সাইজ | ইউনিট | পিপ ভ্যালু (USD পেয়ার) |
|----------|-------|----------------------|
| স্ট্যান্ডার্ড (1.0) | 100,000 | প্রতি পিপ $10 |
| মিনি (0.1) | 10,000 | প্রতি পিপ $1 |
| মাইক্রো (0.01) | 1,000 | প্রতি পিপ $0.10 |

---

## লট সাইজ ও পজিশন সাইজিং

- **স্ট্যান্ডার্ড লট** = বেস কারেন্সির 100,000 ইউনিট
- **মিনি লট** = 10,000 ইউনিট (0.10 লট)
- **মাইক্রো লট** = 1,000 ইউনিট (0.01 লট)

### পজিশন সাইজিং ফর্মুলা:

\`\`\`
পজিশন সাইজ = (অ্যাকাউন্ট রিস্ক $) ÷ (স্টপ লস পিপ × পিপ ভ্যালু)

উদাহরণ:
- অ্যাকাউন্ট: $10,000
- রিস্ক: 1% = $100
- স্টপ লস: 20 পিপ
- পজিশন সাইজ = $100 ÷ (20 × $10) = 0.50 লট
\`\`\`

<Callout type="warning" title="সোনালী নিয়ম">
একটি ট্রেডে আপনার অ্যাকাউন্টের **1-2% এর বেশি কখনো রিস্ক নেবেন না**। এটি নিশ্চিত করে যে ধারাবাহিক লসেও আপনি ট্রেড চালিয়ে যেতে পারবেন।
</Callout>

---

## স্প্রেড ও কমিশন

**স্প্রেড** হলো **Bid** (সেল প্রাইস) ও **Ask** (বাই প্রাইস) এর পার্থক্য। এটি ব্রোকারের প্রাথমিক আয়ের উৎস।

- **Bid:** যে দামে আপনি SELL করতে পারবেন
- **Ask:** যে দামে আপনি BUY করতে পারবেন
- **স্প্রেড** = Ask - Bid

---

## লিভারেজ ও মার্জিন

লিভারেজ আপনাকে **কম মূলধন দিয়ে বড় পজিশন নিয়ন্ত্রণ** করতে দেয়:

| লিভারেজ | মার্জিন প্রয়োজন | $10,000 দিয়ে নিয়ন্ত্রণ |
|---------|----------------|---------------------|
| 1:10 | 10% | $100,000 |
| 1:50 | 2% | $500,000 |
| 1:100 | 1% | $1,000,000 |

<Callout type="warning" title="লিভারেজ সতর্কতা">
লিভারেজ লাভ এবং লস **দুটোই** বৃদ্ধি করে। 1:100 লিভারেজে আপনার বিরুদ্ধে 1% মুভ = আপনার মার্জিনের 100% লস। রক্ষণশীলভাবে লিভারেজ ব্যবহার করুন।
</Callout>

---

## অর্ডার টাইপ

### Market Order
বর্তমান মার্কেট দামে তাৎক্ষণিক এক্সিকিউশন।

### Limit Order
নির্দিষ্ট দামে বা তার চেয়ে ভালো দামে এক্সিকিউট:
- **Buy Limit:** বর্তমান দামের নিচে কেনা (বাউন্স আপ প্রত্যাশা)
- **Sell Limit:** বর্তমান দামের উপরে বেচা (ড্রপ প্রত্যাশা)

### Stop Loss
পূর্বনির্ধারিত লস লেভেলে স্বয়ংক্রিয়ভাবে পজিশন বন্ধ করে। **সর্বদা স্টপ লস ব্যবহার করুন।**

### Take Profit
পূর্বনির্ধারিত প্রফিট লেভেলে স্বয়ংক্রিয়ভাবে পজিশন বন্ধ করে।

---

## ট্রেডিং সেশন (বাংলাদেশ সময়)

| সেশন | BD সময় | প্রধান পেয়ার |
|------|---------|------------|
| **সিডনি** | সকাল ৩:০০ - দুপুর ১২:০০ | AUD, NZD |
| **টোকিও** | সকাল ৫:০০ - দুপুর ২:০০ | JPY পেয়ার |
| **লন্ডন** | দুপুর ২:০০ - রাত ১১:০০ | EUR, GBP |
| **নিউ ইয়র্ক** | রাত ৭:৩০ - ভোর ৪:০০ | USD পেয়ার |

### সেরা ট্রেডিং সময় (BD):
- **লন্ডন-NY ওভারল্যাপ:** রাত ৭:৩০ - ১১:০০ (সবচেয়ে বেশি লিকুইডিটি)

---

## সাধারণ বিগিনার ভুল

<Callout type="warning" title="এই মারাত্মক ভুলগুলো এড়িয়ে চলুন">

**❌ স্টপ লস ছাড়া ট্রেড** — প্রতিটি ট্রেডে অবশ্যই স্টপ লস থাকতে হবে।

**❌ অতিরিক্ত রিস্ক** — প্রতি ট্রেডে ১-২% রিস্ক রাখুন।

**❌ অতিরিক্ত লিভারেজ** — কম লিভারেজ দিয়ে শুরু করুন।

**❌ অনেক পেয়ার ট্রেড** — প্রথমে একটি পেয়ার আয়ত্ত করুন।

**❌ রিভেঞ্জ ট্রেডিং** — লসের পরে তাৎক্ষণিক আরেকটি ট্রেড নেবেন না।

**❌ ডেমো স্কিপ করা** — লাইভের আগে কমপক্ষে ৩ মাস ডেমোতে প্র্যাক্টিস করুন।

</Callout>

---

## সারসংক্ষেপ

| কনসেপ্ট | মূল পয়েন্ট |
|---------|-----------|
| **ফরেক্স** | বৈশ্বিক কারেন্সি মার্কেট, দৈনিক $7.5T |
| **পেয়ার** | Base/Quote — EUR/USD, GBP/USD ইত্যাদি |
| **পিপ** | ৪র্থ দশমিক (0.0001), JPY তে ২য় |
| **লট** | Standard (100K), Mini (10K), Micro (1K) |
| **স্প্রেড** | Bid-Ask পার্থক্য = ট্রেডিং খরচ |
| **লিভারেজ** | লাভ ও লস দুটোই বৃদ্ধি করে |
| **রিস্ক** | প্রতি ট্রেডে সর্বোচ্চ ১-২% |
| **সেরা সময় (BD)** | রাত ৭:৩০ - ১১:০০ |

---

## সম্পর্কিত টপিক

- [রিস্ক ম্যানেজমেন্ট](/bn/academy/risk-management) — মূলধন সুরক্ষা
- [পজিশন সাইজিং](/bn/academy/position-sizing) — প্রতি ট্রেডে কত রিস্ক
- [ট্রেডিং সাইকোলজি](/bn/academy/trading-psychology) — মানসিক দিক
- [ইকোনমিক ক্যালেন্ডার](/bn/academy/economic-calendar-guide) — ফরেক্স মুভকারী নিউজ
`,
);

// ============================================================
// RISK MANAGEMENT - EN
// ============================================================
w(
  "en",
  "academy",
  "risk-management",
  {
    title: "Risk Management — Complete Guide",
    description:
      "Master trading risk management. Learn position sizing, stop loss strategies, risk-reward ratios, drawdown management, and how to protect your trading capital.",
    level: "beginner",
    order: 2,
  },
  `
## Why Risk Management is Everything

Risk management is the **single most important skill** in trading. You can have the best strategy in the world, but without proper risk management, you WILL blow your account. Every successful professional trader prioritizes risk management above everything else.

<Callout type="info" title="The Truth About Trading">
Trading is not about being right — it's about managing risk when you're wrong. A trader who wins 40% of trades but manages risk well can be more profitable than a trader who wins 60% but over-risks.
</Callout>

---

## The 1-2% Rule

The most fundamental risk management rule: **Never risk more than 1-2% of your account on any single trade.**

### Why This Works:

| Consecutive Losses | 1% Risk | 2% Risk | 5% Risk | 10% Risk |
|-------------------|---------|---------|---------|----------|
| 5 losses | 95.1% left | 90.4% left | 77.4% left | 59.0% left |
| 10 losses | 90.4% left | 81.7% left | 59.9% left | 34.9% left |
| 20 losses | 81.8% left | 66.8% left | 35.8% left | 12.2% left |

At 1% risk, even 20 consecutive losses only costs you 18.2% of your account. At 10% risk, 10 losses destroys 65% of your account.

---

## Position Sizing Formulas

### Fixed Percentage Method:

\`\`\`
Lot Size = (Account Balance × Risk %) ÷ (Stop Loss in pips × Pip Value)

Example:
Account: $5,000
Risk: 1% = $50
Stop Loss: 25 pips
Pip Value: $10 (standard lot on USD pairs)

Lot Size = $50 ÷ (25 × $10) = 0.20 lots
\`\`\`

### Fixed Dollar Method:

\`\`\`
Risk a fixed dollar amount per trade regardless of account size.
Example: Always risk $50 per trade.
\`\`\`

### Kelly Criterion (Advanced):

\`\`\`
Optimal Risk % = Win Rate - (Loss Rate ÷ Average Win/Loss Ratio)
Example: 55% win rate, 1:2 R:R
Kelly = 0.55 - (0.45 ÷ 2) = 0.55 - 0.225 = 32.5%
Use Half Kelly: 16.25% (still too aggressive for most traders)
\`\`\`

<Callout type="tip" title="Pro Tip">
Most professionals risk 0.5-1% per trade. The 2% figure is the absolute maximum. Start with 0.5% while learning, then increase to 1% once consistently profitable.
</Callout>

---

## Stop Loss Strategies

### 1. Structure-Based Stop Loss
Place your stop beyond the nearest structural level (swing high/low, OB edge):
- Most reliable method
- Allows price to breathe
- Based on actual market structure

### 2. ATR-Based Stop Loss
Use the Average True Range to set stops based on volatility:
- ATR × 1.5-2 = Stop distance
- Adapts to market volatility automatically

### 3. Fixed Pip Stop Loss
Use a predetermined pip distance:
- Simple but not adaptive
- Works for consistent strategies
- Common: 15-30 pips for intraday, 50-100 for swing

### Rules for Stop Losses:
- **Always use one** — no exceptions
- **Never widen** a stop loss on a losing trade
- **Set it before** entering the trade
- **Base it on structure**, not on how much you want to risk

---

## Risk-Reward Ratio (R:R)

The R:R measures how much you stand to gain vs. how much you risk:

\`\`\`
R:R = Take Profit Distance ÷ Stop Loss Distance

Example: SL = 20 pips, TP = 60 pips → R:R = 1:3
\`\`\`

### Minimum R:R by Strategy:

| Strategy | Minimum R:R | Why |
|----------|-------------|-----|
| Scalping | 1:1.5 | High win rate compensates |
| Intraday | 1:2 | Standard minimum |
| Swing | 1:3 | Fewer but larger wins |
| Position | 1:5+ | Catch major moves |

### Breakeven Win Rates by R:R:

| R:R | Win Rate Needed to Break Even |
|-----|-------------------------------|
| 1:1 | 50% |
| 1:2 | 33.3% |
| 1:3 | 25% |
| 1:5 | 16.7% |

<Callout type="tip" title="Key Insight">
With a 1:3 R:R, you only need to win 25% of your trades to break even. Win 40% and you're very profitable. This is why R:R matters more than win rate.
</Callout>

---

## Drawdown Management

### What is Drawdown?
Drawdown is the **decline from your account's peak equity to its lowest point**. It measures how much you've lost from your highest point.

### Maximum Drawdown Rules:
- **Daily Max:** 3-5% of account
- **Weekly Max:** 5-8% of account
- **Monthly Max:** 10-15% of account
- **Overall Max:** 20-25% of account

### After a Drawdown:
1. **Reduce position size** by 50% after hitting daily max
2. **Stop trading for the day** after daily max drawdown
3. **Review journal** to identify patterns in losses
4. **Return to demo** if monthly max is hit
5. **Scale back in** gradually once back on track

---

## Correlation Risk

Don't take multiple trades that move together:
- EUR/USD and GBP/USD are positively correlated
- Shorting USD/CHF while buying EUR/USD = doubled risk (both are anti-USD)
- Limit to 2-3 uncorrelated positions maximum

---

## Risk Management Checklist

Before EVERY trade:

- [ ] Risk per trade ≤ 1-2%?
- [ ] Stop loss placed at a structural level?
- [ ] R:R at least 1:2?
- [ ] Total open risk ≤ 5%?
- [ ] Not correlated with other open trades?
- [ ] Not trading during high-impact news (unless planned)?
- [ ] Emotionally stable? Not revenge trading?

---

## Common Mistakes

<Callout type="warning" title="Risk Management Failures">

**❌ No stop loss** — The #1 account killer. Every trade needs a stop loss.

**❌ Moving stop loss further** — Hoping the trade comes back only increases your loss.

**❌ Over-leveraging** — Even a good trade can blow your account with excessive leverage.

**❌ Averaging down** — Adding to losers without a plan is gambling, not trading.

**❌ Risking more after losses** — The opposite of what you should do. Reduce risk after losses.

**❌ Ignoring correlation** — Trading 5 correlated pairs = 5x risk on one direction.

</Callout>

---

## Summary

| Rule | Guideline |
|------|-----------|
| **Per-Trade Risk** | 1-2% maximum |
| **Stop Loss** | Structure-based, always present |
| **R:R** | Minimum 1:2, target 1:3+ |
| **Daily Drawdown** | Max 3-5% |
| **Total Open Risk** | Max 5% |
| **Leverage** | As low as practically possible |
| **Correlation** | Max 2-3 uncorrelated positions |

---

## Related Topics

- [Position Sizing](/en/academy/position-sizing) — Detailed lot size calculations
- [Trading Psychology](/en/academy/trading-psychology) — Emotional risk management
- [Forex Basics](/en/academy/forex-basics) — Understanding the market
- [Journaling](/en/academy/journaling) — Track your risk management
`,
);

// ============================================================
// RISK MANAGEMENT - BN
// ============================================================
w(
  "bn",
  "academy",
  "risk-management",
  {
    title: "রিস্ক ম্যানেজমেন্ট — সম্পূর্ণ গাইড",
    description:
      "ট্রেডিং রিস্ক ম্যানেজমেন্ট আয়ত্ত করুন। পজিশন সাইজিং, স্টপ লস কৌশল, রিস্ক-রিওয়ার্ড রেশিও, ড্রডাউন ম্যানেজমেন্ট এবং ট্রেডিং ক্যাপিটাল রক্ষা করা শিখুন।",
    level: "beginner",
    order: 2,
  },
  `
## কেন রিস্ক ম্যানেজমেন্ট সবকিছু

রিস্ক ম্যানেজমেন্ট ট্রেডিংয়ে **সবচেয়ে গুরুত্বপূর্ণ দক্ষতা**। আপনার বিশ্বের সেরা কৌশল থাকতে পারে, কিন্তু সঠিক রিস্ক ম্যানেজমেন্ট ছাড়া আপনি অ্যাকাউন্ট উড়িয়ে দেবেন। প্রতিটি সফল প্রফেশনাল ট্রেডার রিস্ক ম্যানেজমেন্টকে সবকিছুর উপরে রাখে।

<Callout type="info" title="ট্রেডিংয়ের সত্য">
ট্রেডিং সঠিক হওয়ার বিষয় নয় — ভুল হলে রিস্ক ম্যানেজ করার বিষয়। যে ট্রেডার ৪০% ট্রেড জেতে কিন্তু রিস্ক ভালো ম্যানেজ করে, সে ৬০% জেতা কিন্তু ওভার-রিস্কিং ট্রেডারের চেয়ে বেশি লাভজনক হতে পারে।
</Callout>

---

## ১-২% নিয়ম

সবচেয়ে মৌলিক নিয়ম: **একটি ট্রেডে অ্যাকাউন্টের ১-২% এর বেশি রিস্ক নেবেন না।**

| ধারাবাহিক লস | ১% রিস্ক | ২% রিস্ক | ৫% রিস্ক |
|-------------|---------|---------|---------|
| ৫ লস | ৯৫.১% বাকি | ৯০.৪% বাকি | ৭৭.৪% বাকি |
| ১০ লস | ৯০.৪% বাকি | ৮১.৭% বাকি | ৫৯.৯% বাকি |
| ২০ লস | ৮১.৮% বাকি | ৬৬.৮% বাকি | ৩৫.৮% বাকি |

---

## পজিশন সাইজিং ফর্মুলা

\`\`\`
লট সাইজ = (অ্যাকাউন্ট ব্যালেন্স × রিস্ক %) ÷ (স্টপ লস পিপ × পিপ ভ্যালু)

উদাহরণ:
অ্যাকাউন্ট: $5,000 | রিস্ক: ১% = $50
স্টপ লস: ২৫ পিপ | পিপ ভ্যালু: $10
লট সাইজ = $50 ÷ (25 × $10) = 0.20 লট
\`\`\`

---

## স্টপ লস কৌশল

### ১. স্ট্রাকচার-বেসড স্টপ লস
নিকটতম স্ট্রাকচারাল লেভেলের (সুইং হাই/লো, OB এজ) বাইরে স্টপ রাখুন — সবচেয়ে নির্ভরযোগ্য পদ্ধতি।

### ২. ATR-বেসড স্টপ লস
ভোলাটিলিটির উপর ভিত্তি করে: ATR × ১.৫-২ = স্টপ দূরত্ব।

### স্টপ লসের নিয়ম:
- **সর্বদা ব্যবহার করুন** — কোনো ব্যতিক্রম নেই
- হারানো ট্রেডে **কখনো স্টপ বাড়াবেন না**
- ট্রেডে প্রবেশের **আগে সেট করুন**

---

## রিস্ক-রিওয়ার্ড রেশিও (R:R)

\`\`\`
R:R = টেক প্রফিট দূরত্ব ÷ স্টপ লস দূরত্ব
উদাহরণ: SL = ২০ পিপ, TP = ৬০ পিপ → R:R = ১:৩
\`\`\`

### R:R অনুযায়ী ব্রেকইভেন উইন রেট:

| R:R | ব্রেকইভেনে প্রয়োজনীয় উইন রেট |
|-----|-------------------------------|
| ১:১ | ৫০% |
| ১:২ | ৩৩.৩% |
| ১:৩ | ২৫% |
| ১:৫ | ১৬.৭% |

<Callout type="tip" title="মূল ইনসাইট">
১:৩ R:R তে, ব্রেকইভেনে মাত্র ২৫% ট্রেড জিততে হয়। ৪০% জিতলে খুবই লাভজনক। এজন্য R:R উইন রেটের চেয়ে বেশি গুরুত্বপূর্ণ।
</Callout>

---

## ড্রডাউন ম্যানেজমেন্ট

### সর্বোচ্চ ড্রডাউন নিয়ম:
- **দৈনিক সর্বোচ্চ:** অ্যাকাউন্টের ৩-৫%
- **সাপ্তাহিক সর্বোচ্চ:** ৫-৮%
- **মাসিক সর্বোচ্চ:** ১০-১৫%

### ড্রডাউনের পরে:
1. দৈনিক সর্বোচ্চ হিট করলে পজিশন সাইজ **৫০% কমান**
2. দিনের জন্য **ট্রেডিং বন্ধ** করুন
3. লসের প্যাটার্ন চিহ্নিত করতে **জার্নাল রিভিউ** করুন

---

## সাধারণ ভুল

<Callout type="warning" title="রিস্ক ম্যানেজমেন্ট ব্যর্থতা">

**❌ স্টপ লস নেই** — #১ অ্যাকাউন্ট কিলার।

**❌ স্টপ লস বাড়ানো** — আশা করা যে ট্রেড ফিরবে শুধু লস বাড়ায়।

**❌ ওভার-লিভারেজিং** — ভালো ট্রেডও অতিরিক্ত লিভারেজে অ্যাকাউন্ট উড়িয়ে দিতে পারে।

**❌ লসের পরে বেশি রিস্ক** — উল্টোটি করুন — লসের পরে রিস্ক কমান।

</Callout>

---

## সারসংক্ষেপ

| নিয়ম | গাইডলাইন |
|------|----------|
| **প্রতি-ট্রেড রিস্ক** | সর্বোচ্চ ১-২% |
| **স্টপ লস** | স্ট্রাকচার-বেসড, সর্বদা থাকতে হবে |
| **R:R** | ন্যূনতম ১:২, টার্গেট ১:৩+ |
| **দৈনিক ড্রডাউন** | সর্বোচ্চ ৩-৫% |

---

## সম্পর্কিত টপিক

- [পজিশন সাইজিং](/bn/academy/position-sizing) — বিস্তারিত লট সাইজ ক্যালকুলেশন
- [ট্রেডিং সাইকোলজি](/bn/academy/trading-psychology) — আবেগিক রিস্ক ম্যানেজমেন্ট
- [ফরেক্স বেসিক](/bn/academy/forex-basics) — মার্কেট বোঝা
`,
);

// ============ REMAINING ACADEMY TOPICS ============
const academyTopics = [
  {
    slug: "trading-psychology",
    en: {
      title: "Trading Psychology — Complete Guide",
      desc: "Master trading psychology. Learn to control emotions, overcome fear and greed, develop discipline, and build the mindset of a professional trader.",
      level: "beginner",
      order: 3,
    },
    bn: {
      title: "ট্রেডিং সাইকোলজি — সম্পূর্ণ গাইড",
      desc: "ট্রেডিং সাইকোলজি আয়ত্ত করুন। আবেগ নিয়ন্ত্রণ, ভয় ও লোভ কাটিয়ে ওঠা, শৃঙ্খলা গড়ে তোলা এবং প্রফেশনাল মাইন্ডসেট তৈরি শিখুন।",
      level: "beginner",
      order: 3,
    },
  },
  {
    slug: "position-sizing",
    en: {
      title: "Position Sizing — Complete Guide",
      desc: "Master position sizing for all markets. Learn lot size calculations, fixed fractional methods, and how to size positions for forex, gold, indices, and crypto.",
      level: "beginner",
      order: 4,
    },
    bn: {
      title: "পজিশন সাইজিং — সম্পূর্ণ গাইড",
      desc: "সব মার্কেটের জন্য পজিশন সাইজিং আয়ত্ত করুন। লট সাইজ ক্যালকুলেশন এবং ফরেক্স, গোল্ড, ইন্ডাইসেস ও ক্রিপ্টোর জন্য পজিশন সাইজ শিখুন।",
      level: "beginner",
      order: 4,
    },
  },
  {
    slug: "journaling",
    en: {
      title: "Trading Journal — Complete Guide",
      desc: "Master trading journaling. Learn how to record, review, and analyze your trades for continuous improvement and consistent profitability.",
      level: "beginner",
      order: 5,
    },
    bn: {
      title: "ট্রেডিং জার্নাল — সম্পূর্ণ গাইড",
      desc: "ট্রেডিং জার্নালিং আয়ত্ত করুন। ক্রমাগত উন্নতি ও ধারাবাহিক লাভের জন্য ট্রেড রেকর্ড, রিভিউ ও অ্যানালাইজ করা শিখুন।",
      level: "beginner",
      order: 5,
    },
  },
  {
    slug: "prop-firm-guide",
    en: {
      title: "Prop Firm Guide — Complete Guide",
      desc: "Complete guide to proprietary trading firms. Learn how prop firms work, challenge rules, funded account strategies, and tips for passing evaluations.",
      level: "intermediate",
      order: 6,
    },
    bn: {
      title: "প্রপ ফার্ম গাইড — সম্পূর্ণ গাইড",
      desc: "প্রোপ্রাইটারি ট্রেডিং ফার্মের সম্পূর্ণ গাইড। প্রপ ফার্ম কীভাবে কাজ করে, চ্যালেঞ্জ নিয়ম, ফান্ডেড অ্যাকাউন্ট কৌশল শিখুন।",
      level: "intermediate",
      order: 6,
    },
  },
  {
    slug: "gold-trading",
    en: {
      title: "Gold Trading — Complete Guide",
      desc: "Master gold (XAU/USD) trading. Learn gold market fundamentals, price drivers, trading strategies, session timing, and risk management for gold.",
      level: "intermediate",
      order: 7,
    },
    bn: {
      title: "গোল্ড ট্রেডিং — সম্পূর্ণ গাইড",
      desc: "গোল্ড (XAU/USD) ট্রেডিং আয়ত্ত করুন। গোল্ড মার্কেটের ফান্ডামেন্টাল, প্রাইস ড্রাইভার, ট্রেডিং কৌশল ও রিস্ক ম্যানেজমেন্ট শিখুন।",
      level: "intermediate",
      order: 7,
    },
  },
  {
    slug: "crypto-trading",
    en: {
      title: "Crypto Trading — Complete Guide",
      desc: "Master cryptocurrency trading. Learn crypto market structure, Bitcoin and altcoin trading, DeFi basics, and risk management for volatile crypto markets.",
      level: "intermediate",
      order: 8,
    },
    bn: {
      title: "ক্রিপ্টো ট্রেডিং — সম্পূর্ণ গাইড",
      desc: "ক্রিপ্টোকারেন্সি ট্রেডিং আয়ত্ত করুন। ক্রিপ্টো মার্কেট স্ট্রাকচার, Bitcoin ও altcoin ট্রেডিং এবং রিস্ক ম্যানেজমেন্ট শিখুন।",
      level: "intermediate",
      order: 8,
    },
  },
  {
    slug: "indices-trading",
    en: {
      title: "Indices Trading — Complete Guide",
      desc: "Master stock index trading (NAS100, US30, SPX500). Learn index fundamentals, session dynamics, and strategies for trading major indices.",
      level: "intermediate",
      order: 9,
    },
    bn: {
      title: "ইন্ডাইসেস ট্রেডিং — সম্পূর্ণ গাইড",
      desc: "স্টক ইনডেক্স ট্রেডিং (NAS100, US30, SPX500) আয়ত্ত করুন। ইনডেক্স ফান্ডামেন্টাল, সেশন ডায়নামিক্স ও কৌশল শিখুন।",
      level: "intermediate",
      order: 9,
    },
  },
  {
    slug: "futures-basics",
    en: {
      title: "Futures Basics — Complete Guide",
      desc: "Master futures trading fundamentals. Learn contracts, margin, expiry, and how futures differ from forex and CFDs for informed market participation.",
      level: "intermediate",
      order: 10,
    },
    bn: {
      title: "ফিউচার্স বেসিক — সম্পূর্ণ গাইড",
      desc: "ফিউচার্স ট্রেডিং ফান্ডামেন্টাল আয়ত্ত করুন। কন্ট্র্যাক্ট, মার্জিন, এক্সপায়রি এবং ফরেক্স ও CFD থেকে পার্থক্য শিখুন।",
      level: "intermediate",
      order: 10,
    },
  },
  {
    slug: "economic-calendar-guide",
    en: {
      title: "Economic Calendar Guide — Complete Guide",
      desc: "Master the economic calendar for trading. Learn how major economic releases affect markets, which events matter most, and how to trade around news.",
      level: "beginner",
      order: 11,
    },
    bn: {
      title: "ইকোনমিক ক্যালেন্ডার গাইড — সম্পূর্ণ গাইড",
      desc: "ট্রেডিংয়ের জন্য ইকোনমিক ক্যালেন্ডার আয়ত্ত করুন। প্রধান অর্থনৈতিক প্রকাশনা কীভাবে মার্কেট প্রভাবিত করে এবং নিউজের আশেপাশে ট্রেড শিখুন।",
      level: "beginner",
      order: 11,
    },
  },
];

function genAcademyContent(slug, titleEn, isEN) {
  if (isEN) {
    return `
## What is ${titleEn.replace(" — Complete Guide", "")}?

${titleEn.replace(" — Complete Guide", "")} is an essential component of every trader's education. Whether you're a beginner just starting out or an experienced trader looking to refine your skills, mastering this topic will significantly improve your trading performance and consistency.

<Callout type="info" title="Academy Lesson">
This is part of the Trading Academy — a comprehensive curriculum covering everything from market fundamentals to professional-level execution. Each lesson builds on the previous ones to create a complete trading education.
</Callout>

---

## Why ${titleEn.replace(" — Complete Guide", "")} Matters

1. **Foundation of Success** — This knowledge forms the bedrock of profitable trading
2. **Risk Protection** — Proper understanding prevents costly mistakes
3. **Professional Standard** — All successful traders master this concept
4. **Consistency** — Leads to more repeatable and consistent results
5. **Career Longevity** — Enables long-term survival in the markets

---

## Core Concepts

### Understanding the Basics

Every topic in trading has layers of depth. At the beginner level, you need to understand:
- **What** this concept is and why it exists
- **How** it affects your trading decisions
- **When** to apply it in different market conditions
- **Where** common pitfalls lie that you must avoid

### The Professional Mindset

Professional traders approach ${titleEn.replace(" — Complete Guide", "")} differently from amateurs:
- They have **systematic rules** rather than gut feelings
- They **journal and review** their application of these concepts
- They **adapt** to changing market conditions while maintaining core principles
- They view setbacks as **learning opportunities**, not failures

---

## Step-by-Step Implementation

### Phase 1: Learning (Week 1-4)
1. Study the theory thoroughly
2. Watch real market examples
3. Practice on demo account
4. Take notes and create checklists

### Phase 2: Application (Month 2-3)
1. Apply to demo trading consistently
2. Track results in your trading journal
3. Review and refine your approach
4. Identify patterns in your performance

### Phase 3: Mastery (Month 4+)
1. Transition to live trading with small size
2. Maintain the same discipline as demo
3. Continue journaling and reviewing
4. Gradually increase size as consistency proves

---

## Practical Application

### For Forex Trading:
- Apply these concepts to major pairs (EUR/USD, GBP/USD)
- Consider spread and execution quality
- Factor in session timing and liquidity

### For Gold Trading:
- Account for gold's higher volatility
- Adjust position size accordingly (gold moves in points, not pips)
- Consider correlation with USD

### For Indices (NAS100, US30):
- Index-specific session dynamics
- Higher capital requirements per point
- Pre/post-market considerations

### For Crypto:
- 24/7 market — additional risk management needed
- Higher volatility requires wider stops
- Lower liquidity in most altcoins

---

## Trading Sessions Reference (Bangladesh Time)

| Session | BD Time | Best Markets |
|---------|---------|-------------|
| **Sydney** | 3:00 AM - 12:00 PM | AUD, NZD |
| **Tokyo** | 5:00 AM - 2:00 PM | JPY, Gold |
| **London** | 2:00 PM - 11:00 PM | EUR, GBP, Gold |
| **New York** | 7:30 PM - 4:00 AM | USD, Indices |
| **London-NY Overlap** | 7:30 PM - 11:00 PM | ALL (best time) |

---

## Common Mistakes

<Callout type="warning" title="Avoid These Errors">

**❌ Skipping the fundamentals** — Every advanced concept builds on basics. Don't skip ahead.

**❌ Not practicing on demo** — Theory without practice is useless. Demo trade for at least 3 months.

**❌ Overcomplicating things** — Keep your approach simple and systematic.

**❌ Ignoring psychology** — Technical skills without emotional control = inconsistent results.

**❌ No journaling** — If you don't track results, you can't improve systematically.

**❌ Impatience** — Mastery takes 1-2 years minimum. There are no shortcuts.

</Callout>

---

## Recommended Learning Path

1. [Forex Basics](/en/academy/forex-basics) — Understand the market
2. [Risk Management](/en/academy/risk-management) — Protect your capital
3. [Position Sizing](/en/academy/position-sizing) — Size trades correctly
4. [Trading Psychology](/en/academy/trading-psychology) — Master your emotions
5. [Trading Journal](/en/academy/journaling) — Track and improve
6. [Economic Calendar](/en/academy/economic-calendar-guide) — Understand news impact

Then progress to:
- [Price Action](/en/price-action/introduction) — Read raw price charts
- [Smart Money Concepts](/en/smc/introduction) — Institutional trading
- [ICT Methodology](/en/ict/introduction) — Advanced concepts

---

## FAQ

### How long does it take to become profitable?
Realistically, 1-2 years of dedicated study and practice. Some traders take longer. Focus on the process, not the timeline.

### Do I need a lot of money to start?
No. Start with a demo account (free), then move to a micro account ($100-$500). Don't deposit more until you're consistently profitable.

### Which market should I start with?
Forex (EUR/USD) is the best starting market due to lowest spreads, highest liquidity, and moderate volatility.

### Can I trade from Bangladesh?
Yes. Forex and crypto trading is accessible from Bangladesh through international brokers. Ensure the broker accepts clients from your region.

---

## Summary

| Aspect | Key Points |
|--------|-----------|
| **Importance** | Essential foundation for trading success |
| **Application** | Forex, Gold, Indices, Crypto |
| **Timeline** | 1-2 years to mastery |
| **Key Rule** | Journal everything, review weekly |
| **Sessions (BD)** | Best trades 7:30 PM - 11:00 PM |
| **Risk** | Never risk > 1-2% per trade |

---

## Related Topics

- [Forex Basics](/en/academy/forex-basics) — Market fundamentals
- [Risk Management](/en/academy/risk-management) — Capital protection
- [Trading Psychology](/en/academy/trading-psychology) — Mental game
- [Position Sizing](/en/academy/position-sizing) — Correct trade sizing
- [Journaling](/en/academy/journaling) — Performance tracking
`;
  } else {
    return `
## ${titleEn.replace(" — Complete Guide", "")} কী?

${titleEn.replace(" — Complete Guide", "")} হলো প্রতিটি ট্রেডারের শিক্ষার একটি অপরিহার্য অংশ। আপনি সবে শুরু করছেন বা অভিজ্ঞ ট্রেডার দক্ষতা পরিমার্জন করতে চাইছেন — এই টপিক আয়ত্ত করলে আপনার ট্রেডিং পারফরম্যান্স ও ধারাবাহিকতা উল্লেখযোগ্যভাবে উন্নত হবে।

<Callout type="info" title="একাডেমি পাঠ">
এটি ট্রেডিং একাডেমির অংশ — মার্কেট ফান্ডামেন্টাল থেকে প্রফেশনাল-লেভেল এক্সিকিউশন পর্যন্ত সবকিছু কভার করা একটি সম্পূর্ণ পাঠ্যক্রম।
</Callout>

---

## কেন গুরুত্বপূর্ণ

1. **সাফল্যের ভিত্তি** — এই জ্ঞান লাভজনক ট্রেডিংয়ের মূল ভিত্তি
2. **রিস্ক সুরক্ষা** — সঠিক বোঝাপড়া ব্যয়বহুল ভুল প্রতিরোধ করে
3. **প্রফেশনাল স্ট্যান্ডার্ড** — সব সফল ট্রেডার এই কনসেপ্ট আয়ত্ত করে
4. **ধারাবাহিকতা** — আরো পুনরাবৃত্তিযোগ্য ও ধারাবাহিক ফলাফলের দিকে নিয়ে যায়
5. **ক্যারিয়ার দীর্ঘায়ু** — মার্কেটে দীর্ঘমেয়াদী টিকে থাকা সম্ভব করে

---

## মূল কনসেপ্ট

### বেসিক বোঝা

প্রতিটি ট্রেডিং টপিকের গভীরতার স্তর আছে। বিগিনার লেভেলে বুঝতে হবে:
- এই কনসেপ্ট **কী** এবং কেন বিদ্যমান
- এটি আপনার ট্রেডিং সিদ্ধান্তকে **কীভাবে** প্রভাবিত করে
- বিভিন্ন মার্কেট কন্ডিশনে **কখন** প্রয়োগ করবেন
- সাধারণ ফাঁদ **কোথায়** আছে যা এড়াতে হবে

### প্রফেশনাল মাইন্ডসেট

প্রফেশনাল ট্রেডাররা অ্যামেচারদের থেকে ভিন্নভাবে অ্যাপ্রোচ করে:
- অনুভূতির বদলে **সিস্টেমেটিক নিয়ম**
- প্রয়োগ **জার্নাল ও রিভিউ** করে
- মূল নীতি বজায় রেখে **অ্যাডাপ্ট** করে
- বিপত্তিকে **শেখার সুযোগ** হিসেবে দেখে

---

## ধাপে ধাপে বাস্তবায়ন

### ফেজ ১: শেখা (সপ্তাহ ১-৪)
1. তত্ত্ব পুঙ্খানুপুঙ্খভাবে পড়ুন
2. বাস্তব মার্কেট উদাহরণ দেখুন
3. ডেমো অ্যাকাউন্টে প্র্যাক্টিস করুন
4. নোট নিন ও চেকলিস্ট তৈরি করুন

### ফেজ ২: প্রয়োগ (মাস ২-৩)
1. ধারাবাহিকভাবে ডেমো ট্রেডিংয়ে প্রয়োগ করুন
2. ট্রেডিং জার্নালে ফলাফল ট্র্যাক করুন
3. রিভিউ ও পরিমার্জন করুন

### ফেজ ৩: আয়ত্ত (মাস ৪+)
1. ছোট সাইজে লাইভ ট্রেডিংয়ে যান
2. ডেমোর মতোই শৃঙ্খলা বজায় রাখুন
3. জার্নালিং ও রিভিউ চালিয়ে যান

---

## প্র্যাক্টিক্যাল প্রয়োগ

### ফরেক্সের জন্য:
- মেজর পেয়ারে (EUR/USD, GBP/USD) প্রয়োগ করুন
- সেশন টাইমিং ও লিকুইডিটি বিবেচনা করুন

### গোল্ডের জন্য:
- গোল্ডের উচ্চ ভোলাটিলিটি হিসাবে নিন
- পজিশন সাইজ সেই অনুযায়ী অ্যাডজাস্ট করুন

### ইন্ডাইসেসের জন্য (NAS100, US30):
- ইনডেক্স-নির্দিষ্ট সেশন ডায়নামিক্স
- প্রতি পয়েন্টে বেশি ক্যাপিটাল প্রয়োজন

### ক্রিপ্টোর জন্য:
- ২৪/৭ মার্কেট — অতিরিক্ত রিস্ক ম্যানেজমেন্ট দরকার
- উচ্চ ভোলাটিলিটিতে ওয়াইডার স্টপ প্রয়োজন

---

## ট্রেডিং সেশন (বাংলাদেশ সময়)

| সেশন | BD সময় | সেরা মার্কেট |
|------|---------|-------------|
| **সিডনি** | সকাল ৩:০০ - দুপুর ১২:০০ | AUD, NZD |
| **টোকিও** | সকাল ৫:০০ - দুপুর ২:০০ | JPY, গোল্ড |
| **লন্ডন** | দুপুর ২:০০ - রাত ১১:০০ | EUR, GBP, গোল্ড |
| **নিউ ইয়র্ক** | রাত ৭:৩০ - ভোর ৪:০০ | USD, ইন্ডাইসেস |
| **লন্ডন-NY ওভারল্যাপ** | রাত ৭:৩০ - ১১:০০ | সব (সেরা সময়) |

---

## সাধারণ ভুল

<Callout type="warning" title="এই ভুলগুলো এড়িয়ে চলুন">

**❌ ফান্ডামেন্টাল স্কিপ করা** — প্রতিটি অ্যাডভান্সড কনসেপ্ট বেসিকের উপর দাঁড়ায়।

**❌ ডেমোতে প্র্যাক্টিস না করা** — প্র্যাক্টিস ছাড়া তত্ত্ব অকেজো। কমপক্ষে ৩ মাস ডেমো করুন।

**❌ অতিরিক্ত জটিল করা** — সহজ ও সিস্টেমেটিক রাখুন।

**❌ সাইকোলজি উপেক্ষা** — আবেগ নিয়ন্ত্রণ ছাড়া টেকনিক্যাল দক্ষতা = অসামঞ্জস্যপূর্ণ ফলাফল।

**❌ জার্নালিং না করা** — ফলাফল ট্র্যাক না করলে সিস্টেমেটিক উন্নতি অসম্ভব।

**❌ অধৈর্য** — আয়ত্তে ন্যূনতম ১-২ বছর লাগে। কোনো শর্টকাট নেই।

</Callout>

---

## প্রস্তাবিত শেখার পথ

1. [ফরেক্স বেসিক](/bn/academy/forex-basics) — মার্কেট বোঝা
2. [রিস্ক ম্যানেজমেন্ট](/bn/academy/risk-management) — মূলধন সুরক্ষা
3. [পজিশন সাইজিং](/bn/academy/position-sizing) — সঠিক ট্রেড সাইজ
4. [ট্রেডিং সাইকোলজি](/bn/academy/trading-psychology) — আবেগ নিয়ন্ত্রণ
5. [ট্রেডিং জার্নাল](/bn/academy/journaling) — ট্র্যাক ও উন্নতি

তারপর এগিয়ে যান:
- [প্রাইস অ্যাকশন](/bn/price-action/introduction)
- [Smart Money Concepts](/bn/smc/introduction)
- [ICT মেথডলজি](/bn/ict/introduction)

---

## FAQ

### লাভজনক হতে কত সময় লাগে?
বাস্তবসম্মতভাবে, ১-২ বছর নিবেদিত পড়াশোনা ও প্র্যাক্টিস। প্রক্রিয়ায় ফোকাস করুন, সময়রেখায় নয়।

### শুরু করতে কত টাকা লাগবে?
ডেমো অ্যাকাউন্ট বিনামূল্যে। তারপর মাইক্রো অ্যাকাউন্টে $100-$500। ধারাবাহিকভাবে লাভজনক না হওয়া পর্যন্ত বেশি জমা দেবেন না।

### কোন মার্কেটে শুরু করব?
ফরেক্স (EUR/USD) — সবচেয়ে কম স্প্রেড, সবচেয়ে বেশি লিকুইডিটি, মাঝারি ভোলাটিলিটি।

---

## সারসংক্ষেপ

| বিষয় | মূল পয়েন্ট |
|-------|-----------|
| **গুরুত্ব** | ট্রেডিং সাফল্যের অপরিহার্য ভিত্তি |
| **প্রয়োগ** | ফরেক্স, গোল্ড, ইন্ডাইসেস, ক্রিপ্টো |
| **সময়কাল** | আয়ত্তে ১-২ বছর |
| **মূল নিয়ম** | সব জার্নাল করুন, সাপ্তাহিক রিভিউ |
| **সেশন (BD)** | সেরা ট্রেড রাত ৭:৩০ - ১১:০০ |
| **রিস্ক** | প্রতি ট্রেডে > ১-২% কখনো নয় |

---

## সম্পর্কিত টপিক

- [ফরেক্স বেসিক](/bn/academy/forex-basics) — মার্কেট ফান্ডামেন্টাল
- [রিস্ক ম্যানেজমেন্ট](/bn/academy/risk-management) — মূলধন সুরক্ষা
- [ট্রেডিং সাইকোলজি](/bn/academy/trading-psychology) — মানসিক খেলা
- [পজিশন সাইজিং](/bn/academy/position-sizing) — সঠিক ট্রেড সাইজ
- [জার্নালিং](/bn/academy/journaling) — পারফরম্যান্স ট্র্যাকিং
`;
  }
}

for (const topic of academyTopics) {
  w(
    "en",
    "academy",
    topic.slug,
    {
      title: topic.en.title,
      description: topic.en.desc,
      level: topic.en.level,
      order: topic.en.order,
    },
    genAcademyContent(topic.slug, topic.en.title, true),
  );

  w(
    "bn",
    "academy",
    topic.slug,
    {
      title: topic.bn.title,
      description: topic.bn.desc,
      level: topic.bn.level,
      order: topic.bn.order,
    },
    genAcademyContent(topic.slug, topic.bn.title, false),
  );
}

console.log("\n✅ Academy Batch complete: All 11 academy topics expanded (EN + BN)");
console.log("Total: 22 files updated");
