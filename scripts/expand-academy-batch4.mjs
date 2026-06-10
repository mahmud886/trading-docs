import { writeFileSync } from 'fs';
import { join } from 'path';

const contentDir = join(process.cwd(), 'content');

function writeMdx(lang, category, slug, frontmatter, content) {
  const fm = `---
title: "${frontmatter.title}"
description: "${frontmatter.description}"
level: ${frontmatter.level}
order: ${frontmatter.order}
lastUpdated: "2026-06-10"
---
`;
  writeFileSync(join(contentDir, lang, category, `${slug}.mdx`), fm + content, 'utf-8');
  console.log(`✅ ${lang}/${category}/${slug}.mdx`);
}

// ============================================================
// BATCH 4: TRADE MANAGEMENT (5 Topics × 2 Languages = 10 Files)
// ============================================================

// ============================
// 1. ORDER TYPES — EN
// ============================
writeMdx('en', 'academy', 'order-types', {
  title: "Order Types Explained — Complete Guide",
  description: "Master all trading order types: Market, Limit, Stop, Stop-Limit, Trailing Stop, OCO, and advanced orders. Learn when and how to use each type effectively.",
  level: "beginner",
  order: 19
}, `
## Understanding Order Types

An order is an instruction to your broker to buy or sell an asset. Different order types give you control over **when**, **at what price**, and **under what conditions** your trade executes. Mastering order types is essential for precise trade execution.

<Callout type="info" title="Why Orders Matter">
The difference between a profitable and losing trade can come down to execution. Using the right order type means better entries, tighter risk management, and avoiding slippage during volatile conditions.
</Callout>

---

## Basic Order Types

### 1. Market Order

Executes **immediately** at the best available price.

| Aspect | Detail |
|--------|--------|
| Speed | Instant execution |
| Price | Current market price (may slip) |
| Guarantee | Execution guaranteed, price not guaranteed |
| Best For | When you MUST enter/exit NOW |
| Risk | Slippage during volatile conditions |

**Use When:** Closing a losing position, entering during fast breakouts, or when exact price matters less than being in the trade.

### 2. Limit Order

Executes only at your **specified price or better**.

| Type | Description |
|------|-------------|
| **Buy Limit** | Buy at specified price or LOWER (below current price) |
| **Sell Limit** | Sell at specified price or HIGHER (above current price) |

**Use When:** You want a specific entry price, buying at support, selling at resistance, or taking profit.

### 3. Stop Order (Stop Market)

Becomes a market order when price reaches your **trigger price**.

| Type | Description |
|------|-------------|
| **Buy Stop** | Triggers buy when price rises ABOVE specified level |
| **Sell Stop** | Triggers sell when price falls BELOW specified level |

**Use When:** Stop losses, breakout entries, or protecting profits.

### 4. Stop-Limit Order

Becomes a limit order (not market) when price reaches the trigger level.

**Use When:** You want stop-loss protection but need price control. Risk: may not fill during gaps.

---

## Advanced Order Types

### 5. Trailing Stop

A stop loss that **moves with price** to lock in profits.

\`\`\`
Example (Long position, 50-pip trailing stop):
- Entry: 1.1000
- Price moves to 1.1050 → Stop moves to 1.1000 (break even)
- Price moves to 1.1100 → Stop moves to 1.1050 (+50 pips locked)
- Price moves to 1.1150 → Stop moves to 1.1100 (+100 pips locked)
- Price reverses to 1.1100 → CLOSED at +100 pips profit
\`\`\`

**Best For:** Trending markets where you want to ride the move but protect gains.

### 6. OCO (One-Cancels-Other)

Two orders linked together — when one fills, the other is automatically cancelled.

**Use When:** Setting both a take profit AND stop loss, or placing entries above and below a consolidation.

### 7. Take Profit (TP)

Automatically closes your position at a specified profit level.

### 8. Stop Loss (SL)

Automatically closes your position at a specified loss level.

---

## Order Type Summary Table

| Order Type | Execution | Price Control | Best Use Case |
|-----------|-----------|---------------|---------------|
| Market | Immediate | None | Urgent entry/exit |
| Limit | At price or better | Full | Planned entries at S/R |
| Stop Market | At trigger → market | Trigger only | Stop losses, breakouts |
| Stop-Limit | At trigger → limit | Full | Controlled stops |
| Trailing Stop | Moves with price | Dynamic | Riding trends |
| OCO | One triggers, other cancels | Both orders | SL + TP combo |

---

## Practical Examples

### Scenario 1: Buying at Support
\`\`\`
Current price: 1.1050
Support level: 1.1000
Plan: Buy at support

Order: Buy Limit at 1.1000
Stop Loss: 1.0970 (30 pips below support)
Take Profit: 1.1100 (100 pips above entry)
R:R = 1:3.3
\`\`\`

### Scenario 2: Breakout Entry
\`\`\`
Current price: 1.1000
Resistance: 1.1050
Plan: Buy if price breaks above resistance

Order: Buy Stop at 1.1055 (above resistance)
Stop Loss: 1.1020 (below resistance)
Take Profit: 1.1150 (measured move)
R:R = 1:2.7
\`\`\`

### Scenario 3: Protecting Profits
\`\`\`
Entry: 1.1000 (Long)
Current price: 1.1080 (+80 pips)
Plan: Protect profits but stay in trade

Option A: Move SL to 1.1050 (lock +50 pips)
Option B: Set trailing stop at 30 pips
Option C: Close 50%, trail rest
\`\`\`

---

## Common Mistakes

| Mistake | Consequence | Solution |
|---------|-------------|----------|
| Market order in low liquidity | Massive slippage | Use limit orders instead |
| No stop loss | Unlimited loss potential | ALWAYS set SL |
| Stop too tight | Stopped out by noise | Give room based on ATR |
| Limit too far from price | Never fills | Set realistic levels |
| Moving stop loss further | Larger loss than planned | Accept original risk |

---

## Related Topics

- [Bid, Ask & Spread](/en/academy/bid-ask-spread) — How orders fill at bid/ask
- [Risk Management](/en/academy/risk-management) — Using stops effectively
- [Position Sizing](/en/academy/position-sizing) — Calculate lot size with SL
- [Trading Plan](/en/academy/trading-plan) — Order strategy in your plan
- [Margin & Leverage](/en/academy/margin-leverage) — Margin and order types
`);

// ============================
// 1. ORDER TYPES — BN
// ============================
writeMdx('bn', 'academy', 'order-types', {
  title: "Order Type ব্যাখ্যা — সম্পূর্ণ গাইড",
  description: "সব Trading Order Type আয়ত্ত করুন: Market, Limit, Stop, Stop-Limit, Trailing Stop, OCO এবং Advanced Order। কখন ও কীভাবে প্রতিটি Type কার্যকরভাবে ব্যবহার করবেন শিখুন।",
  level: "beginner",
  order: 19
}, `
## Order Type বোঝা

Order হলো আপনার Broker-কে কোনো Asset কেনা বা বেচার নির্দেশ। বিভিন্ন Order Type আপনাকে **কখন**, **কোন Price-এ** এবং **কোন শর্তে** আপনার Trade Execute হবে তার উপর নিয়ন্ত্রণ দেয়। সুনির্দিষ্ট Trade Execution-এর জন্য Order Type আয়ত্ত করা অপরিহার্য।

---

## মৌলিক Order Type

### ১. Market Order
বর্তমান সেরা উপলব্ধ Price-এ **তাৎক্ষণিক** Execute হয়।

| বিষয় | বিবরণ |
|--------|--------|
| গতি | তাৎক্ষণিক Execution |
| Price | বর্তমান Market Price (Slip হতে পারে) |
| গ্যারান্টি | Execution নিশ্চিত, Price নিশ্চিত নয় |
| উপযুক্ত | যখন এখনই Enter/Exit করতে হবে |
| Risk | Volatile অবস্থায় Slippage |

### ২. Limit Order
শুধুমাত্র আপনার **নির্দিষ্ট Price বা ভালো**-তে Execute হয়।

| ধরন | বর্ণনা |
|------|--------|
| **Buy Limit** | নির্দিষ্ট Price বা তার নিচে কেনা (বর্তমান Price-এর নিচে) |
| **Sell Limit** | নির্দিষ্ট Price বা তার উপরে বেচা (বর্তমান Price-এর উপরে) |

**ব্যবহার:** নির্দিষ্ট Entry Price চাইলে, Support-এ কেনা, Resistance-এ বেচা বা Profit নেওয়া।

### ৩. Stop Order (Stop Market)
Price আপনার **Trigger Price**-এ পৌঁছালে Market Order হয়ে যায়।

| ধরন | বর্ণনা |
|------|--------|
| **Buy Stop** | Price নির্দিষ্ট Level-এর উপরে গেলে Buy Trigger |
| **Sell Stop** | Price নির্দিষ্ট Level-এর নিচে গেলে Sell Trigger |

**ব্যবহার:** Stop Loss, Breakout Entry বা Profit সুরক্ষা।

### ৪. Stop-Limit Order
Price Trigger Level-এ পৌঁছালে Limit Order (Market নয়) হয়ে যায়।

**ব্যবহার:** Stop-loss সুরক্ষা চান কিন্তু Price Control প্রয়োজন। Risk: Gap-এ Fill নাও হতে পারে।

---

## Advanced Order Type

### ৫. Trailing Stop
Profit Lock করতে Price-এর সাথে **চলমান** Stop Loss।

\`\`\`
উদাহরণ (Long Position, 50-Pip Trailing Stop):
- Entry: 1.1000
- Price 1.1050 যায় → Stop 1.1000 যায় (Break Even)
- Price 1.1100 যায় → Stop 1.1050 যায় (+50 Pip Locked)
- Price 1.1150 যায় → Stop 1.1100 যায় (+100 Pip Locked)
- Price 1.1100 ফেরে → +100 Pip Profit-এ CLOSE
\`\`\`

**উপযুক্ত:** Trending Market যেখানে Move Ride করতে চান কিন্তু Gain সুরক্ষিত রাখতে চান।

### ৬. OCO (One-Cancels-Other)
দুটি সংযুক্ত Order — একটি Fill হলে অন্যটি স্বয়ংক্রিয়ভাবে Cancel হয়।

**ব্যবহার:** Take Profit ও Stop Loss উভয় সেট করা, বা Consolidation-এর উপরে ও নিচে Entry দেওয়া।

### ৭. Take Profit (TP)
নির্দিষ্ট Profit Level-এ স্বয়ংক্রিয়ভাবে Position Close করে।

### ৮. Stop Loss (SL)
নির্দিষ্ট Loss Level-এ স্বয়ংক্রিয়ভাবে Position Close করে।

---

## Order Type সারাংশ

| Order Type | Execution | Price Control | সেরা ব্যবহার |
|-----------|-----------|---------------|--------------|
| Market | তাৎক্ষণিক | কোনো নয় | জরুরি Entry/Exit |
| Limit | নির্দিষ্ট Price বা ভালো | সম্পূর্ণ | S/R-এ পরিকল্পিত Entry |
| Stop Market | Trigger → Market | শুধু Trigger | Stop Loss, Breakout |
| Stop-Limit | Trigger → Limit | সম্পূর্ণ | নিয়ন্ত্রিত Stop |
| Trailing Stop | Price-এর সাথে চলে | Dynamic | Trend Ride করা |
| OCO | একটি Trigger, অন্যটি Cancel | উভয় Order | SL + TP Combo |

---

## ব্যবহারিক উদাহরণ

### দৃশ্য ১: Support-এ কেনা
\`\`\`
বর্তমান Price: 1.1050
Support Level: 1.1000
পরিকল্পনা: Support-এ কেনা

Order: Buy Limit at 1.1000
Stop Loss: 1.0970 (Support-এর 30 Pip নিচে)
Take Profit: 1.1100 (Entry-র 100 Pip উপরে)
R:R = 1:3.3
\`\`\`

### দৃশ্য ২: Breakout Entry
\`\`\`
বর্তমান Price: 1.1000
Resistance: 1.1050
পরিকল্পনা: Price Resistance ভাঙলে কেনা

Order: Buy Stop at 1.1055 (Resistance-এর উপরে)
Stop Loss: 1.1020 (Resistance-এর নিচে)
Take Profit: 1.1150 (Measured Move)
R:R = 1:2.7
\`\`\`

---

## সাধারণ ভুল

| ভুল | পরিণতি | সমাধান |
|------|---------|--------|
| কম Liquidity-তে Market Order | বিশাল Slippage | Limit Order ব্যবহার করুন |
| Stop Loss নেই | সীমাহীন Loss সম্ভাবনা | সবসময় SL সেট করুন |
| খুব Tight Stop | Noise-এ Stop Out | ATR-এর ভিত্তিতে জায়গা দিন |
| Limit অনেক দূরে | কখনো Fill হয় না | বাস্তবসম্মত Level সেট করুন |
| Stop Loss দূরে সরানো | পরিকল্পিতের চেয়ে বড় Loss | Original Risk গ্রহণ করুন |

---

## সম্পর্কিত বিষয়

- [Bid, Ask ও Spread](/bn/academy/bid-ask-spread) — Bid/Ask-এ Order কীভাবে Fill হয়
- [Risk Management](/bn/academy/risk-management) — কার্যকর Stop ব্যবহার
- [Position Sizing](/bn/academy/position-sizing) — SL-সহ Lot Size গণনা
- [Trading Plan](/bn/academy/trading-plan) — Plan-এ Order Strategy
- [Margin ও Leverage](/bn/academy/margin-leverage) — Margin ও Order Type
`);

// ============================
// 2. MONEY MANAGEMENT ADVANCED — EN
// ============================
writeMdx('en', 'academy', 'money-management-advanced', {
  title: "Advanced Money Management — Complete Guide",
  description: "Master advanced money management: Kelly Criterion, anti-martingale, scaling in/out, portfolio heat, drawdown management, and capital allocation strategies for traders.",
  level: "intermediate",
  order: 20
}, `
## Advanced Money Management

Beyond basic risk management (1-2% per trade), advanced money management strategies help you **optimize returns while protecting capital** through sophisticated position sizing, scaling, and allocation techniques.

<Callout type="info" title="Key Principle">
Money management is the difference between a strategy that makes money and one that doesn't — even with identical win rates. Two traders with the same strategy can have vastly different results based solely on how they manage position sizes.
</Callout>

---

## Fixed Fractional Method

The most common method: Risk a **fixed percentage** of current equity per trade.

\`\`\`
Position Size = (Account Balance × Risk%) ÷ (Stop Loss × Pip Value)

Benefits:
- Risk decreases as account shrinks (survival)
- Risk increases as account grows (compounding)
- Self-adjusting and simple

Example:
- Account: $10,000, Risk: 1%
- Dollar risk: $100
- Stop: 40 pips, Pip value: $10
- Size: $100 ÷ (40 × $10) = 0.25 lots
\`\`\`

---

## Kelly Criterion

An optimal sizing formula that maximizes long-term growth rate.

\`\`\`
Kelly % = W - [(1-W) / R]

Where:
W = Win rate (as decimal)
R = Average win/average loss ratio

Example:
- Win rate: 55% (W = 0.55)
- Average win: $200, Average loss: $100 (R = 2.0)
- Kelly = 0.55 - [(1-0.55) / 2.0] = 0.55 - 0.225 = 0.325 = 32.5%

Half-Kelly (recommended): 16.25% per trade
Quarter-Kelly (conservative): 8.1% per trade
\`\`\`

<Callout type="warning" title="Full Kelly Warning">
Full Kelly is extremely aggressive. Most professionals use Half-Kelly or Quarter-Kelly to reduce volatility while still capturing most of the growth benefit.
</Callout>

---

## Scaling In and Out

### Scaling In (Adding to Winners):
\`\`\`
Strategy: Add to position as trade moves in your favor

Entry 1: 0.5 lots at 1.1000 (initial entry)
Entry 2: 0.3 lots at 1.1050 (confirming move)
Entry 3: 0.2 lots at 1.1100 (strong trend)

Average entry: weighted average of all entries
Stop: Move to break even on earliest entries
Result: Larger position in confirmed trend
\`\`\`

### Scaling Out (Partial Profits):
\`\`\`
Strategy: Close portions at different targets

Position: 1.0 lot
Close 50% at 1:1 RR (lock some profit, move SL to BE)
Close 30% at 1:2 RR (more profit locked)
Close 20% at 1:3 RR or trailing (run the trade)

Benefits: Guaranteed some profit, reduces pressure
Downside: Smaller overall profit if trade hits full target
\`\`\`

---

## Portfolio Heat

**Portfolio Heat** = Total risk across ALL open positions.

\`\`\`
Rule: Never exceed 5-6% total portfolio heat

Example:
- Trade 1: 1.5% risk (open)
- Trade 2: 2.0% risk (open)
- Trade 3: 1.5% risk (open)
- Total heat: 5% ← Maximum reached, NO new trades

If Trade 1 and 2 are correlated (same pair or sector):
- Effective risk is even higher
- Count correlated trades as combined risk
\`\`\`

---

## Drawdown Management

### Maximum Drawdown Rules:

| Level | Action |
|-------|--------|
| 5% drawdown | Review recent trades, check for pattern |
| 10% drawdown | Reduce position size by 50% |
| 15% drawdown | Stop trading, full strategy review |
| 20% drawdown | Extended break, back to demo |

### Recovery After Drawdown:
\`\`\`
Drawdown → Required Recovery:
-10% → Need +11.1% to recover
-20% → Need +25% to recover
-30% → Need +42.9% to recover
-50% → Need +100% to recover
-75% → Need +300% to recover

Key insight: Preventing drawdowns is MUCH easier than recovering.
\`\`\`

---

## Anti-Martingale Strategy

Increase position size after WINS, decrease after LOSSES.

\`\`\`
Standard approach:
- After each win: Increase risk by 0.25-0.5%
- After each loss: Decrease risk by 0.25-0.5%
- Maximum: 3% per trade
- Minimum: 0.5% per trade

Example progression (starting 1%):
Win → 1.25%
Win → 1.5%
Win → 1.75%
Loss → 1.25%
Loss → 1.0%

Benefit: Larger when winning, smaller when losing
\`\`\`

---

## Capital Allocation Strategies

### The Bucket Approach:
\`\`\`
Total Capital: $50,000
├── Active Trading (40%): $20,000
│   ├── Forex Account: $10,000
│   └── Crypto Account: $10,000
├── Swing/Position (30%): $15,000
│   └── Stock Swing Account: $15,000
├── Investment (20%): $10,000
│   └── ETF/Index: $10,000
└── Reserve (10%): $5,000
    └── Emergency/Opportunity: $5,000
\`\`\`

---

## Related Topics

- [Risk Management](/en/academy/risk-management) — Foundation of money management
- [Position Sizing](/en/academy/position-sizing) — Calculate exact sizes
- [Trading Plan](/en/academy/trading-plan) — Integrate money management
- [Trading Psychology](/en/academy/trading-psychology) — Emotional aspects of sizing
- [Performance Tracking](/en/academy/performance-tracking) — Measure effectiveness
`);

// ============================
// 2. MONEY MANAGEMENT ADVANCED — BN
// ============================
writeMdx('bn', 'academy', 'money-management-advanced', {
  title: "Advanced Money Management — সম্পূর্ণ গাইড",
  description: "Advanced Money Management আয়ত্ত করুন: Kelly Criterion, Anti-Martingale, Scaling In/Out, Portfolio Heat, Drawdown Management এবং Trader-দের জন্য Capital Allocation Strategy।",
  level: "intermediate",
  order: 20
}, `
## Advanced Money Management

মৌলিক Risk Management (প্রতি Trade-এ ১-২%)-এর বাইরে, Advanced Money Management Strategy আপনাকে পরিশীলিত Position Sizing, Scaling ও Allocation কৌশলের মাধ্যমে **Capital রক্ষা করে Return অপ্টিমাইজ** করতে সাহায্য করে।

<Callout type="info" title="মূল নীতি">
Money Management হলো একটি Strategy যা অর্থ উপার্জন করে ও যা করে না — এর মধ্যে পার্থক্য — এমনকি অভিন্ন Win Rate-এও। একই Strategy-সহ দুজন Trader শুধুমাত্র Position Size ম্যানেজ করার উপায়ের ভিত্তিতে সম্পূর্ণ ভিন্ন ফলাফল পেতে পারেন।
</Callout>

---

## Fixed Fractional Method

সবচেয়ে সাধারণ পদ্ধতি: বর্তমান Equity-র একটি **নির্দিষ্ট শতাংশ** প্রতি Trade-এ Risk করুন।

\`\`\`
Position Size = (Account Balance × Risk%) ÷ (Stop Loss × Pip Value)

সুবিধা:
- Account কমলে Risk কমে (টিকে থাকা)
- Account বাড়লে Risk বাড়ে (Compounding)
- Self-adjusting ও সহজ

উদাহরণ:
- Account: $10,000, Risk: 1%
- Dollar Risk: $100
- Stop: 40 Pip, Pip Value: $10
- Size: $100 ÷ (40 × $10) = 0.25 Lot
\`\`\`

---

## Kelly Criterion

দীর্ঘমেয়াদী Growth Rate সর্বোচ্চ করার একটি Optimal Sizing সূত্র।

\`\`\`
Kelly % = W - [(1-W) / R]

যেখানে:
W = Win Rate (Decimal-এ)
R = গড় Win/গড় Loss অনুপাত

উদাহরণ:
- Win Rate: 55% (W = 0.55)
- গড় Win: $200, গড় Loss: $100 (R = 2.0)
- Kelly = 0.55 - [(1-0.55) / 2.0] = 0.55 - 0.225 = 0.325 = 32.5%

Half-Kelly (সুপারিশকৃত): প্রতি Trade-এ 16.25%
Quarter-Kelly (রক্ষণশীল): প্রতি Trade-এ 8.1%
\`\`\`

<Callout type="warning" title="Full Kelly সতর্কতা">
Full Kelly অত্যন্ত আক্রমণাত্মক। বেশিরভাগ Professional Growth Benefit-এর বেশিরভাগ ধরে রেখে Volatility কমাতে Half-Kelly বা Quarter-Kelly ব্যবহার করেন।
</Callout>

---

## Scaling In ও Out

### Scaling In (Winner-এ যোগ করা):
\`\`\`
Strategy: Trade আপনার পক্ষে গেলে Position-এ যোগ করুন

Entry 1: 0.5 Lot at 1.1000 (প্রাথমিক Entry)
Entry 2: 0.3 Lot at 1.1050 (Move Confirm)
Entry 3: 0.2 Lot at 1.1100 (শক্তিশালী Trend)

ফলাফল: Confirmed Trend-এ বড় Position
\`\`\`

### Scaling Out (আংশিক Profit):
\`\`\`
Strategy: বিভিন্ন Target-এ আংশিক Close

Position: 1.0 Lot
50% Close at 1:1 RR (কিছু Profit Lock, SL BE-তে সরান)
30% Close at 1:2 RR (আরো Profit Locked)
20% Close at 1:3 RR বা Trailing (Trade Run করুন)

সুবিধা: কিছু Profit নিশ্চিত, চাপ কমায়
অসুবিধা: পূর্ণ Target Hit করলে সামগ্রিক Profit কম
\`\`\`

---

## Portfolio Heat

**Portfolio Heat** = সব Open Position জুড়ে মোট Risk।

\`\`\`
নিয়ম: মোট Portfolio Heat কখনো 5-6% অতিক্রম করবেন না

উদাহরণ:
- Trade 1: 1.5% Risk (Open)
- Trade 2: 2.0% Risk (Open)
- Trade 3: 1.5% Risk (Open)
- মোট Heat: 5% ← Maximum পৌঁছেছে, নতুন Trade নয়
\`\`\`

---

## Drawdown Management

### Maximum Drawdown নিয়ম:

| Level | Action |
|-------|--------|
| ৫% Drawdown | সাম্প্রতিক Trade Review, Pattern Check |
| ১০% Drawdown | Position Size ৫০% কমান |
| ১৫% Drawdown | Trading বন্ধ, সম্পূর্ণ Strategy Review |
| ২০% Drawdown | বর্ধিত বিরতি, Demo-তে ফিরুন |

### Drawdown-এর পর Recovery:
\`\`\`
Drawdown → প্রয়োজনীয় Recovery:
-10% → Recover-এ +11.1% প্রয়োজন
-20% → Recover-এ +25% প্রয়োজন
-30% → Recover-এ +42.9% প্রয়োজন
-50% → Recover-এ +100% প্রয়োজন

মূল অন্তর্দৃষ্টি: Drawdown প্রতিরোধ Recovery-র চেয়ে অনেক সহজ।
\`\`\`

---

## Anti-Martingale Strategy

WIN-এর পর Position Size বাড়ান, LOSS-এর পর কমান।

\`\`\`
মানক পদ্ধতি:
- প্রতি Win-এর পর: Risk 0.25-0.5% বাড়ান
- প্রতি Loss-এর পর: Risk 0.25-0.5% কমান
- সর্বোচ্চ: প্রতি Trade-এ 3%
- ন্যূনতম: প্রতি Trade-এ 0.5%

সুবিধা: জেতার সময় বড়, হারার সময় ছোট
\`\`\`

---

## সম্পর্কিত বিষয়

- [Risk Management](/bn/academy/risk-management) — Money Management-এর ভিত্তি
- [Position Sizing](/bn/academy/position-sizing) — সুনির্দিষ্ট Size গণনা
- [Trading Plan](/bn/academy/trading-plan) — Money Management সমন্বয়
- [Trading Psychology](/bn/academy/trading-psychology) — Sizing-এর আবেগিক দিক
- [Performance Tracking](/bn/academy/performance-tracking) — কার্যকারিতা পরিমাপ
`);

// ============================
// 3. TRADING PLAN — EN
// ============================
writeMdx('en', 'academy', 'trading-plan', {
  title: "Trading Plan Development — Complete Guide",
  description: "Build a professional trading plan. Learn all essential components: strategy rules, risk parameters, routine, journaling framework, and performance review process.",
  level: "beginner",
  order: 21
}, `
## Why You Need a Trading Plan

A trading plan is a **written document** that defines every aspect of your trading approach. Without one, you're making emotional decisions that lead to inconsistent results. With one, you have a roadmap that removes emotion and guides consistent execution.

<Callout type="warning" title="The Hard Truth">
95% of traders who fail have no written plan. Of the 5% who succeed, nearly all follow a documented strategy religiously. Your plan is your edge — without it, you're gambling.
</Callout>

---

## Essential Components

### 1. Market Selection
- Which markets will you trade? (Forex, Crypto, Stocks)
- Which specific instruments? (EUR/USD, Gold, BTC)
- Why these markets? (Liquidity, volatility, familiarity)
- Maximum number of markets to watch

### 2. Trading Style & Timeframe
- Style: Scalping, Day Trading, Swing Trading, Position
- Primary timeframe for entries (M15, H1, H4, D1)
- Higher timeframe for bias (D1, W1)
- Sessions you'll trade (London, NY, Asian)

### 3. Strategy Rules
\`\`\`
Entry Criteria (ALL must be met):
□ Higher timeframe trend direction confirmed
□ Key level identified (S/R, OB, Fib)
□ Entry signal present (candle pattern, indicator)
□ Risk:Reward minimum 1:2
□ No high-impact news within 30 minutes

Exit Criteria:
□ Take Profit: At pre-defined target level
□ Stop Loss: At pre-defined max loss level
□ Time Stop: Close if no movement within X hours
□ Manual: If thesis invalidated by price action
\`\`\`

### 4. Risk Management Rules
- Maximum risk per trade: ___% (e.g., 1%)
- Maximum daily loss: ___% (e.g., 3%)
- Maximum weekly loss: ___% (e.g., 5%)
- Maximum open positions: ___ (e.g., 3)
- Maximum correlation exposure: ___% (e.g., 4%)
- Stop after ___ consecutive losses (e.g., 3)

### 5. Position Sizing Formula
\`\`\`
Lot Size = (Account × Risk%) ÷ (Stop Loss pips × Pip Value)

Rules:
- Never exceed maximum lot size regardless of signal
- Reduce size during drawdown periods
- Account for correlation when multiple positions open
\`\`\`

### 6. Daily Routine
\`\`\`
Pre-Market (30 min before session):
□ Check economic calendar
□ Review higher timeframe bias
□ Mark key levels on charts
□ Check overnight moves

During Session:
□ Wait for setup criteria
□ Execute plan (no improvisation)
□ Manage open positions
□ Journal each trade immediately

Post-Market (15 min after session):
□ Review day's trades
□ Screenshot setups (taken and missed)
□ Update journal with notes
□ Identify improvements
\`\`\`

### 7. Performance Review
- Daily: Quick P&L review
- Weekly: Win rate, R:R, mistakes analysis
- Monthly: Full performance review, strategy adjustments
- Quarterly: Major strategy evaluation, goal assessment

---

## Trading Plan Template

\`\`\`
═══════════════════════════════════════
         MY TRADING PLAN
═══════════════════════════════════════

Trader: [Your Name]
Date Created: [Date]
Last Updated: [Date]
Account Size: $[Amount]

MARKETS: [List markets]
STYLE: [Scalp/Day/Swing/Position]
TIMEFRAMES: [Entry TF] + [Bias TF]
SESSIONS: [London/NY/Asian]

ENTRY RULES:
1. [Rule 1]
2. [Rule 2]
3. [Rule 3]

EXIT RULES:
- TP: [Method]
- SL: [Method]
- Time Stop: [Hours]

RISK RULES:
- Per trade: [%]
- Per day: [%]
- Per week: [%]
- Max positions: [Number]
- Stop after: [Number] losses

DAILY ROUTINE:
[Describe your routine]

REVIEW SCHEDULE:
- Daily / Weekly / Monthly

═══════════════════════════════════════
\`\`\`

---

## Common Plan Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Too vague | Can't follow consistently | Be specific and measurable |
| Too complex | Analysis paralysis | Keep rules simple (5-7 max) |
| Never updated | Becomes irrelevant | Review monthly, adjust quarterly |
| Not followed | Just decoration | Commit 100% or quit trading |
| No accountability | Easy to break rules | Share with mentor/community |

---

## Related Topics

- [Risk Management](/en/academy/risk-management) — Risk rules for your plan
- [Trading Psychology](/en/academy/trading-psychology) — Following your plan
- [Journaling](/en/academy/journaling) — Track plan adherence
- [Performance Tracking](/en/academy/performance-tracking) — Measure plan effectiveness
- [Position Sizing](/en/academy/position-sizing) — Sizing within your plan
`);

// ============================
// 3. TRADING PLAN — BN
// ============================
writeMdx('bn', 'academy', 'trading-plan', {
  title: "Trading Plan তৈরি — সম্পূর্ণ গাইড",
  description: "Professional Trading Plan তৈরি করুন। সব অপরিহার্য উপাদান শিখুন: Strategy Rule, Risk Parameter, Routine, Journaling Framework এবং Performance Review Process।",
  level: "beginner",
  order: 21
}, `
## কেন Trading Plan দরকার

Trading Plan হলো একটি **লিখিত Document** যা আপনার Trading পদ্ধতির প্রতিটি দিক সংজ্ঞায়িত করে। এটি ছাড়া আপনি আবেগপূর্ণ সিদ্ধান্ত নিচ্ছেন যা অসামঞ্জস্য ফলাফল দেয়। এটি থাকলে আপনার কাছে একটি Roadmap আছে যা আবেগ দূর করে এবং ধারাবাহিক Execution-এ পথ দেখায়।

<Callout type="warning" title="কঠিন সত্য">
ব্যর্থ হওয়া ৯৫% Trader-এর কোনো লিখিত Plan নেই। সফল ৫%-এর মধ্যে প্রায় সবাই একটি Documented Strategy ধর্মীয়ভাবে অনুসরণ করেন। আপনার Plan আপনার Edge — এটি ছাড়া আপনি Gambling করছেন।
</Callout>

---

## অপরিহার্য উপাদান

### ১. Market নির্বাচন
- কোন Market-এ Trade করবেন? (Forex, Crypto, Stock)
- কোন নির্দিষ্ট Instrument? (EUR/USD, Gold, BTC)
- কেন এই Market? (Liquidity, Volatility, পরিচিতি)

### ২. Trading Style ও Timeframe
- Style: Scalping, Day Trading, Swing Trading, Position
- Entry-র জন্য Primary Timeframe (M15, H1, H4, D1)
- Bias-এর জন্য Higher Timeframe (D1, W1)
- যে Session-এ Trade করবেন (London, NY, Asian)

### ৩. Strategy Rule
\`\`\`
Entry Criteria (সব পূরণ হতে হবে):
□ Higher Timeframe Trend Direction Confirmed
□ Key Level চিহ্নিত (S/R, OB, Fib)
□ Entry Signal আছে (Candle Pattern, Indicator)
□ Risk:Reward ন্যূনতম 1:2
□ 30 মিনিটের মধ্যে High-impact News নেই

Exit Criteria:
□ Take Profit: পূর্বনির্ধারিত Target Level-এ
□ Stop Loss: পূর্বনির্ধারিত Max Loss Level-এ
□ Time Stop: X ঘণ্টায় Movement না হলে Close
□ Manual: Price Action Thesis বাতিল করলে
\`\`\`

### ৪. Risk Management নিয়ম
- প্রতি Trade-এ সর্বোচ্চ Risk: ___% (যেমন ১%)
- সর্বোচ্চ দৈনিক Loss: ___% (যেমন ৩%)
- সর্বোচ্চ সাপ্তাহিক Loss: ___% (যেমন ৫%)
- সর্বোচ্চ Open Position: ___ (যেমন ৩)
- পরপর ___ Loss-এর পর থামুন (যেমন ৩)

### ৫. Position Sizing সূত্র
\`\`\`
Lot Size = (Account × Risk%) ÷ (Stop Loss Pip × Pip Value)

নিয়ম:
- Signal যাই হোক Maximum Lot Size অতিক্রম করবেন না
- Drawdown Period-এ Size কমান
- একাধিক Position Open থাকলে Correlation হিসাব করুন
\`\`\`

### ৬. দৈনিক Routine
\`\`\`
Pre-Market (Session-এর ৩০ মিনিট আগে):
□ Economic Calendar Check
□ Higher Timeframe Bias Review
□ Chart-এ Key Level চিহ্নিত
□ Overnight Move Check

Session চলাকালীন:
□ Setup Criteria-র জন্য অপেক্ষা
□ Plan Execute (কোনো Improvisation নয়)
□ Open Position Manage
□ প্রতিটি Trade তাৎক্ষণিক Journal

Post-Market (Session-এর ১৫ মিনিট পর):
□ দিনের Trade Review
□ Setup Screenshot (নেওয়া ও মিস করা)
□ Note-সহ Journal Update
□ উন্নতির জায়গা চিহ্নিত
\`\`\`

### ৭. Performance Review
- দৈনিক: দ্রুত P&L Review
- সাপ্তাহিক: Win Rate, R:R, ভুল Analysis
- মাসিক: সম্পূর্ণ Performance Review, Strategy Adjustment
- Quarterly: বড় Strategy মূল্যায়ন, লক্ষ্য Assessment

---

## সাধারণ Plan ভুল

| ভুল | সমস্যা | সমাধান |
|------|---------|--------|
| অত্যন্ত অস্পষ্ট | ধারাবাহিকভাবে অনুসরণ করা যায় না | নির্দিষ্ট ও পরিমাপযোগ্য করুন |
| অত্যন্ত জটিল | Analysis Paralysis | নিয়ম সহজ রাখুন (সর্বোচ্চ ৫-৭) |
| কখনো Update হয় না | অপ্রাসঙ্গিক হয়ে যায় | মাসিক Review, Quarterly Adjust |
| অনুসরণ করা হয় না | শুধু সাজসজ্জা | ১০০% Commit করুন নতুবা Trading ছাড়ুন |

---

## সম্পর্কিত বিষয়

- [Risk Management](/bn/academy/risk-management) — Plan-এর জন্য Risk Rule
- [Trading Psychology](/bn/academy/trading-psychology) — Plan অনুসরণ করা
- [Journaling](/bn/academy/journaling) — Plan Adherence Track করা
- [Performance Tracking](/bn/academy/performance-tracking) — Plan কার্যকারিতা পরিমাপ
- [Position Sizing](/bn/academy/position-sizing) — Plan-এর মধ্যে Sizing
`);

// ============================
// 4. TRADING COSTS & SPREADS — EN
// ============================
writeMdx('en', 'academy', 'trading-costs-spreads', {
  title: "Trading Costs & Spreads — Complete Analysis",
  description: "Understand all trading costs: spreads, commissions, swaps, slippage, and hidden fees. Learn how to minimize costs and maximize net profitability.",
  level: "beginner",
  order: 22
}, `
## Understanding Trading Costs

Every trade you make has costs that reduce your profits. Understanding and minimizing these costs is crucial — especially for active traders where costs compound over hundreds of trades.

---

## Types of Trading Costs

| Cost Type | Description | Impact Level |
|-----------|-------------|-------------|
| **Spread** | Bid-Ask difference | High (every trade) |
| **Commission** | Per-lot fee charged by broker | Medium-High |
| **Swap/Rollover** | Overnight holding fee | Medium (swing traders) |
| **Slippage** | Difference from expected vs actual fill | Variable |
| **Deposit/Withdrawal** | Transfer fees | Low |
| **Inactivity Fee** | Charged on dormant accounts | Low |
| **Currency Conversion** | Converting P&L to account currency | Low |

---

## Spread Costs (Most Important)

### Annual Impact by Trading Style:

| Style | Trades/Day | Avg Spread Cost | Annual Spread Cost |
|-------|-----------|-----------------|-------------------|
| Scalper (1 lot) | 20 | $12/trade | $60,480 |
| Day Trader (1 lot) | 5 | $12/trade | $15,120 |
| Swing Trader (1 lot) | 1/day | $12/trade | $3,024 |
| Position Trader | 1/week | $12/trade | $624 |

### How to Minimize Spread Costs:
1. Trade during high-liquidity sessions (London/NY overlap)
2. Use ECN/Raw spread accounts
3. Focus on major pairs (tighter spreads)
4. Avoid trading during news events
5. Use limit orders when possible

---

## Swap/Rollover Costs

Charged when holding positions overnight. Based on interest rate differential between currencies.

### Swap Types:
- **Positive Swap:** You EARN money for holding (rare but possible)
- **Negative Swap:** You PAY for holding (most common)

### Swap Impact on Swing Traders:
\`\`\`
Example: EUR/USD Short, swap = -$7.50 per lot per night

Holding for 5 days: -$7.50 × 5 = -$37.50 per lot
Holding for 20 days: -$7.50 × 20 = -$150 per lot

Wednesday triple swap: -$22.50 (3× for weekend)
\`\`\`

<Callout type="info" title="Swap-Free Accounts">
Islamic (swap-free) accounts are available at most brokers. They don't charge/pay swaps but may have wider spreads or administration fees instead.
</Callout>

---

## Slippage

The difference between your expected execution price and actual fill price.

### When Slippage Occurs:
- During high-volatility events (news, market open)
- Low liquidity periods
- Large position sizes
- Market orders (vs. limit orders)

### Minimizing Slippage:
- Use limit orders when possible
- Avoid trading during major news releases
- Trade liquid instruments during active sessions
- Reduce position size in thin markets

---

## Total Cost Analysis

\`\`\`
Total Cost Per Trade = Spread + Commission + Slippage

Example (1 standard lot EUR/USD):
- Spread: 1.0 pip = $10
- Commission: $7 round-trip
- Average slippage: 0.3 pip = $3
- Total: $20 per round-trip trade

If you make 5 trades/day:
- Daily cost: $100
- Monthly cost: $2,200 (22 days)
- Annual cost: $26,400

This means you need to generate >$26,400 in gross
profits just to BREAK EVEN on costs.
\`\`\`

---

## Cost-Effective Trading Tips

1. **Choose the right broker** — Compare total costs (spread + commission)
2. **Trade less, trade better** — Quality over quantity reduces costs
3. **Right timing** — Active sessions = tighter spreads
4. **Use appropriate account type** — ECN for active, standard for casual
5. **Consider swap** — Check swap rates before holding overnight
6. **Batch analysis time** — Don't over-trade due to boredom
7. **Track all costs** — Include them in your journal

---

## Related Topics

- [Bid, Ask & Spread](/en/academy/bid-ask-spread) — Spread mechanics
- [Order Types](/en/academy/order-types) — Reduce slippage with limit orders
- [Position Sizing](/en/academy/position-sizing) — Account for costs
- [Performance Tracking](/en/academy/performance-tracking) — Track net results
- [Forex Basics](/en/academy/forex-basics) — Market cost structure
`);

// ============================
// 4. TRADING COSTS & SPREADS — BN
// ============================
writeMdx('bn', 'academy', 'trading-costs-spreads', {
  title: "Trading Cost ও Spread — সম্পূর্ণ বিশ্লেষণ",
  description: "সব Trading Cost বুঝুন: Spread, Commission, Swap, Slippage এবং গোপন Fee। খরচ কমানো ও Net Profitability সর্বোচ্চ করা শিখুন।",
  level: "beginner",
  order: 22
}, `
## Trading Cost বোঝা

আপনার করা প্রতিটি Trade-এ খরচ থাকে যা Profit কমায়। এই খরচ বোঝা ও কমানো অত্যন্ত জরুরি — বিশেষত Active Trader-দের জন্য যেখানে শত শত Trade-এ খরচ Compound হয়।

---

## Trading Cost-এর ধরন

| Cost Type | বর্ণনা | প্রভাব মাত্রা |
|-----------|--------|-------------|
| **Spread** | Bid-Ask পার্থক্য | বেশি (প্রতিটি Trade) |
| **Commission** | Broker-এর প্রতি-Lot Fee | মধ্যম-বেশি |
| **Swap/Rollover** | Overnight Holding Fee | মধ্যম (Swing Trader) |
| **Slippage** | প্রত্যাশিত vs. প্রকৃত Fill-এর পার্থক্য | পরিবর্তনশীল |
| **Deposit/Withdrawal** | Transfer Fee | কম |
| **Inactivity Fee** | নিষ্ক্রিয় Account-এ চার্জ | কম |

---

## Spread Cost (সবচেয়ে গুরুত্বপূর্ণ)

### Trading Style অনুযায়ী বাৎসরিক প্রভাব:

| Style | দৈনিক Trade | গড় Spread Cost | বাৎসরিক Spread Cost |
|-------|-----------|-----------------|-------------------|
| Scalper (1 Lot) | ২০ | $12/Trade | $60,480 |
| Day Trader (1 Lot) | ৫ | $12/Trade | $15,120 |
| Swing Trader (1 Lot) | ১/দিন | $12/Trade | $3,024 |
| Position Trader | ১/সপ্তাহ | $12/Trade | $624 |

### Spread Cost কমানোর উপায়:
1. High-liquidity Session-এ Trade করুন (London/NY Overlap)
2. ECN/Raw Spread Account ব্যবহার করুন
3. Major Pair-এ ফোকাস করুন (সংকীর্ণ Spread)
4. News Event-এ Trading এড়িয়ে চলুন
5. সম্ভব হলে Limit Order ব্যবহার করুন

---

## Swap/Rollover Cost

Overnight Position ধরে রাখলে চার্জ হয়। Currency-র মধ্যে Interest Rate পার্থক্যের ভিত্তিতে।

### Swing Trader-এ Swap-এর প্রভাব:
\`\`\`
উদাহরণ: EUR/USD Short, Swap = -$7.50 প্রতি Lot প্রতি রাত

৫ দিন ধরে রাখলে: -$7.50 × 5 = -$37.50 প্রতি Lot
২০ দিন ধরে রাখলে: -$7.50 × 20 = -$150 প্রতি Lot

বুধবার Triple Swap: -$22.50 (Weekend-এর জন্য 3×)
\`\`\`

---

## Slippage

আপনার প্রত্যাশিত Execution Price ও প্রকৃত Fill Price-এর পার্থক্য।

### Slippage কমানোর উপায়:
- সম্ভব হলে Limit Order ব্যবহার করুন
- Major News Release-এর সময় Trading এড়িয়ে চলুন
- Active Session-এ Liquid Instrument Trade করুন
- পাতলা Market-এ Position Size কমান

---

## মোট Cost বিশ্লেষণ

\`\`\`
প্রতি Trade মোট Cost = Spread + Commission + Slippage

উদাহরণ (1 Standard Lot EUR/USD):
- Spread: 1.0 Pip = $10
- Commission: $7 Round-trip
- গড় Slippage: 0.3 Pip = $3
- মোট: $20 প্রতি Round-trip Trade

দিনে ৫টি Trade করলে:
- দৈনিক খরচ: $100
- মাসিক খরচ: $2,200 (22 দিন)
- বাৎসরিক খরচ: $26,400

এর মানে শুধু খরচে BREAK EVEN করতে
আপনাকে >$26,400 Gross Profit করতে হবে।
\`\`\`

---

## Cost-effective Trading টিপ

1. **সঠিক Broker বেছে নিন** — মোট খরচ তুলনা করুন (Spread + Commission)
2. **কম Trade, ভালো Trade** — Quality over Quantity খরচ কমায়
3. **সঠিক সময়** — Active Session = সংকীর্ণ Spread
4. **উপযুক্ত Account Type** — Active-দের জন্য ECN, Casual-দের জন্য Standard
5. **Swap বিবেচনা** — Overnight Hold-এর আগে Swap Rate Check করুন
6. **সব খরচ Track করুন** — Journal-এ অন্তর্ভুক্ত করুন

---

## সম্পর্কিত বিষয়

- [Bid, Ask ও Spread](/bn/academy/bid-ask-spread) — Spread Mechanics
- [Order Types](/bn/academy/order-types) — Limit Order-এ Slippage কমান
- [Position Sizing](/bn/academy/position-sizing) — খরচ হিসাবে নিন
- [Performance Tracking](/bn/academy/performance-tracking) — Net Result Track
- [Forex Basics](/bn/academy/forex-basics) — Market Cost Structure
`);

// ============================
// 5. PERFORMANCE TRACKING — EN
// ============================
writeMdx('en', 'academy', 'performance-tracking', {
  title: "Performance Tracking & Analytics — Complete Guide",
  description: "Master trading performance tracking. Learn key metrics, how to analyze your results, identify strengths and weaknesses, and continuously improve your trading.",
  level: "beginner",
  order: 23
}, `
## Why Track Performance?

Performance tracking transforms trading from gambling into a **data-driven profession**. Without measuring results, you cannot identify what works, what doesn't, and where to improve.

<Callout type="info" title="Professional Standard">
Every professional trader, hedge fund, and prop firm tracks performance meticulously. If you're serious about trading, your journal and analytics are as important as your strategy.
</Callout>

---

## Key Performance Metrics

| Metric | Formula | Healthy Range |
|--------|---------|---------------|
| **Win Rate** | Winning trades ÷ Total trades | 40-60% |
| **Risk:Reward** | Average win ÷ Average loss | 1.5:1 to 3:1 |
| **Profit Factor** | Gross profit ÷ Gross loss | Above 1.5 |
| **Expectancy** | (WR × Avg Win) - (LR × Avg Loss) | Positive |
| **Max Drawdown** | Largest peak-to-trough decline | Below 20% |
| **Sharpe Ratio** | (Return - Risk-free) ÷ Std deviation | Above 1.0 |
| **Recovery Factor** | Net profit ÷ Max drawdown | Above 3.0 |

---

## Expectancy Formula

\`\`\`
Expectancy = (Win% × Average Win) - (Loss% × Average Loss)

Example:
- Win rate: 55%
- Average win: $150
- Average loss: $100

Expectancy = (0.55 × $150) - (0.45 × $100)
           = $82.50 - $45.00
           = $37.50 per trade

Over 100 trades: $37.50 × 100 = $3,750 expected profit
\`\`\`

---

## What to Track (Journal Fields)

### Per Trade:
| Field | Why |
|-------|-----|
| Date/Time | Identify best trading times |
| Pair/Instrument | Find best-performing markets |
| Direction (Long/Short) | Identify directional bias |
| Entry Price | Record for analysis |
| Stop Loss | Calculate R:R |
| Take Profit | Measure target achievement |
| Lot Size | Position sizing review |
| Result (P&L) | Performance measurement |
| R-multiple | How many R gained/lost |
| Setup Type | Identify best setups |
| Emotion | Track psychological state |
| Notes | Qualitative observations |
| Screenshot | Visual record for review |

### Weekly Summary:
- Total trades taken
- Win rate for the week
- Total P&L
- Best/worst trade
- Rules violations
- Key lessons learned

---

## Analyzing Your Data

### Questions to Ask Monthly:

1. **Best performing setup?** → Trade more of these
2. **Worst performing setup?** → Eliminate or improve
3. **Best day of week?** → Focus trading days
4. **Best session?** → Optimize schedule
5. **Average R gained?** → Assess strategy efficiency
6. **Rules violations?** → Identify discipline gaps
7. **Emotional patterns?** → Address psychological issues
8. **Drawdown depth?** → Assess risk management

---

## Performance Review Process

### Weekly Review (30 minutes):
\`\`\`
□ Calculate weekly stats (win rate, P&L, avg R)
□ Identify best and worst trade
□ Note any rule violations
□ Check if trading plan was followed
□ Set 1 improvement goal for next week
\`\`\`

### Monthly Review (2 hours):
\`\`\`
□ Full metrics calculation
□ Compare to previous months
□ Identify patterns (best/worst setups, days, times)
□ Review emotional journal entries
□ Assess strategy effectiveness
□ Plan adjustments if needed
□ Set monthly goals
\`\`\`

---

## Tools for Tracking

| Tool | Type | Best For |
|------|------|----------|
| **Spreadsheet** (Excel/Sheets) | Manual | Full customization |
| **Myfxbook** | Automated (Forex) | MT4/MT5 integration |
| **TradingView** | Manual + Charts | Visual journaling |
| **Edgewonk** | Dedicated journal | Professional analytics |
| **TraderSync** | Dedicated journal | Multiple brokers |
| **Notion/Trello** | Flexible | Custom workflows |

---

## Common Tracking Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Not tracking at all | Can't improve what you don't measure | Start today, even basic |
| Only tracking P&L | Miss why you win/lose | Track all fields |
| Not reviewing data | Data without analysis is useless | Schedule weekly reviews |
| Changing strategy too often | Never know what works | Give strategies 50+ trades |
| Ignoring emotions | Psychology determines execution | Log emotional state |

---

## Related Topics

- [Journaling](/en/academy/journaling) — Detailed trade journal guide
- [Trading Plan](/en/academy/trading-plan) — Plan performance criteria
- [Risk Management](/en/academy/risk-management) — Risk metrics tracking
- [Trading Psychology](/en/academy/trading-psychology) — Emotional tracking
- [Money Management](/en/academy/money-management-advanced) — Sizing optimization
`);

// ============================
// 5. PERFORMANCE TRACKING — BN
// ============================
writeMdx('bn', 'academy', 'performance-tracking', {
  title: "Performance Tracking ও Analytics — সম্পূর্ণ গাইড",
  description: "Trading Performance Tracking আয়ত্ত করুন। মূল Metric, ফলাফল বিশ্লেষণ, শক্তি ও দুর্বলতা চিহ্নিতকরণ এবং ক্রমাগত Trading উন্নতির পদ্ধতি শিখুন।",
  level: "beginner",
  order: 23
}, `
## কেন Performance Track করবেন?

Performance Tracking Trading-কে Gambling থেকে একটি **Data-driven Profession**-এ রূপান্তরিত করে। ফলাফল পরিমাপ না করলে আপনি কী কাজ করে, কী করে না এবং কোথায় উন্নতি করবেন তা চিহ্নিত করতে পারবেন না।

<Callout type="info" title="Professional Standard">
প্রতিটি Professional Trader, Hedge Fund ও Prop Firm সূক্ষ্মভাবে Performance Track করে। Trading নিয়ে সিরিয়াস হলে আপনার Journal ও Analytics আপনার Strategy-র মতোই গুরুত্বপূর্ণ।
</Callout>

---

## মূল Performance Metric

| Metric | সূত্র | স্বাস্থ্যকর Range |
|--------|-------|-------------------|
| **Win Rate** | Winning Trade ÷ মোট Trade | ৪০-৬০% |
| **Risk:Reward** | গড় Win ÷ গড় Loss | 1.5:1 থেকে 3:1 |
| **Profit Factor** | Gross Profit ÷ Gross Loss | 1.5-এর উপরে |
| **Expectancy** | (WR × গড় Win) - (LR × গড় Loss) | Positive |
| **Max Drawdown** | বৃহত্তম Peak-to-trough পতন | ২০%-এর নিচে |
| **Sharpe Ratio** | (Return - Risk-free) ÷ Std Deviation | 1.0-এর উপরে |
| **Recovery Factor** | Net Profit ÷ Max Drawdown | 3.0-এর উপরে |

---

## Expectancy সূত্র

\`\`\`
Expectancy = (Win% × গড় Win) - (Loss% × গড় Loss)

উদাহরণ:
- Win Rate: 55%
- গড় Win: $150
- গড় Loss: $100

Expectancy = (0.55 × $150) - (0.45 × $100)
           = $82.50 - $45.00
           = $37.50 প্রতি Trade

100 Trade-এ: $37.50 × 100 = $3,750 প্রত্যাশিত Profit
\`\`\`

---

## কী Track করবেন (Journal Field)

### প্রতি Trade:
| Field | কেন |
|-------|-----|
| তারিখ/সময় | সেরা Trading সময় চিহ্নিত |
| Pair/Instrument | সেরা Performing Market খুঁজুন |
| Direction (Long/Short) | Directional Bias চিহ্নিত |
| Entry Price | Analysis-এর জন্য Record |
| Stop Loss | R:R গণনা |
| Take Profit | Target Achievement পরিমাপ |
| Lot Size | Position Sizing Review |
| ফলাফল (P&L) | Performance Measurement |
| R-multiple | কত R Gain/Loss |
| Setup Type | সেরা Setup চিহ্নিত |
| আবেগ | Psychological State Track |
| Note | গুণগত পর্যবেক্ষণ |
| Screenshot | Review-র জন্য Visual Record |

---

## Data বিশ্লেষণ

### মাসিক যে প্রশ্নগুলো করবেন:

1. **সেরা Performing Setup?** → এগুলো বেশি Trade করুন
2. **সবচেয়ে খারাপ Setup?** → বাদ দিন বা উন্নত করুন
3. **সেরা সপ্তাহের দিন?** → Trading দিন ফোকাস করুন
4. **সেরা Session?** → সময়সূচি Optimize করুন
5. **গড় R Gain?** → Strategy Efficiency মূল্যায়ন
6. **নিয়ম লঙ্ঘন?** → শৃঙ্খলার Gap চিহ্নিত
7. **আবেগের Pattern?** → Psychological সমস্যা সমাধান
8. **Drawdown গভীরতা?** → Risk Management মূল্যায়ন

---

## Performance Review Process

### সাপ্তাহিক Review (৩০ মিনিট):
\`\`\`
□ সাপ্তাহিক Stats গণনা (Win Rate, P&L, গড় R)
□ সেরা ও সবচেয়ে খারাপ Trade চিহ্নিত
□ নিয়ম লঙ্ঘন নোট করুন
□ Trading Plan অনুসরণ হয়েছে কি Check
□ পরবর্তী সপ্তাহের জন্য ১টি উন্নতি লক্ষ্য সেট
\`\`\`

### মাসিক Review (২ ঘণ্টা):
\`\`\`
□ সম্পূর্ণ Metric গণনা
□ পূর্ববর্তী মাসের সাথে তুলনা
□ Pattern চিহ্নিত (সেরা/খারাপ Setup, দিন, সময়)
□ Emotional Journal Entry Review
□ Strategy কার্যকারিতা মূল্যায়ন
□ প্রয়োজনে সমন্বয় পরিকল্পনা
□ মাসিক লক্ষ্য সেট
\`\`\`

---

## Tracking-এর Tool

| Tool | ধরন | উপযুক্ত |
|------|------|----------|
| **Spreadsheet** (Excel/Sheets) | Manual | সম্পূর্ণ Customization |
| **Myfxbook** | Automated (Forex) | MT4/MT5 Integration |
| **TradingView** | Manual + Chart | Visual Journaling |
| **Edgewonk** | Dedicated Journal | Professional Analytics |
| **Notion/Trello** | Flexible | Custom Workflow |

---

## সাধারণ Tracking ভুল

| ভুল | প্রভাব | সমাধান |
|------|---------|--------|
| একেবারেই Track না করা | যা পরিমাপ করেন না তা উন্নত করতে পারেন না | আজই শুরু করুন, মৌলিক হলেও |
| শুধু P&L Track করা | কেন জেতেন/হারেন তা মিস | সব Field Track করুন |
| Data Review না করা | Analysis ছাড়া Data অকেজো | সাপ্তাহিক Review Schedule করুন |
| খুব ঘন ঘন Strategy পরিবর্তন | কী কাজ করে জানা যায় না | Strategy-কে ৫০+ Trade দিন |
| আবেগ উপেক্ষা | Psychology Execution নির্ধারণ করে | Emotional State Log করুন |

---

## সম্পর্কিত বিষয়

- [Journaling](/bn/academy/journaling) — বিস্তারিত Trade Journal গাইড
- [Trading Plan](/bn/academy/trading-plan) — Plan Performance Criteria
- [Risk Management](/bn/academy/risk-management) — Risk Metric Tracking
- [Trading Psychology](/bn/academy/trading-psychology) — Emotional Tracking
- [Money Management](/bn/academy/money-management-advanced) — Sizing Optimization
`);

console.log('\n✅ Academy Batch 4 Complete: 5 topics × 2 languages = 10 files');
console.log('Topics: order-types, money-management-advanced, trading-plan, trading-costs-spreads, performance-tracking');

