import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const contentDir = join(process.cwd(), "content");

function writeMdx(lang, category, slug, frontmatter, content) {
  const fm = `---
title: "${frontmatter.title}"
description: "${frontmatter.description}"
level: ${frontmatter.level}
order: ${frontmatter.order}
lastUpdated: "2026-06-10"
---
`;
  const filePath = join(contentDir, lang, category, `${slug}.mdx`);
  writeFileSync(filePath, fm + content, "utf-8");
  console.log(`✅ ${lang}/${category}/${slug}.mdx`);
}

// ============================================================
// BATCH 1: TRADING FOUNDATION (6 Topics × 2 Languages = 12 Files)
// Topics: what-is-trading, investing-vs-trading, types-of-traders,
//         bid-ask-spread, pips-points-terminology, margin-leverage
// ============================================================

// ============================
// 1. WHAT IS TRADING — EN
// ============================
writeMdx(
  "en",
  "academy",
  "what-is-trading",
  {
    title: "What is Trading? — Complete Beginner Guide",
    description:
      "Learn what trading is, how financial markets work, types of tradable instruments, and how to get started with trading. A complete foundational guide for beginners.",
    level: "beginner",
    order: 1,
  },
  `
## What is Trading?

Trading is the act of **buying and selling financial instruments** — such as currencies, stocks, commodities, or cryptocurrencies — with the goal of profiting from price movements. Unlike long-term investing, trading focuses on capturing short-to-medium term price fluctuations.

<Callout type="info" title="Core Principle">
The fundamental concept of trading is simple: **buy low, sell high** (long positions) or **sell high, buy low** (short positions). Your profit is the difference between entry and exit price, minus costs.
</Callout>

---

## How Trading Works

Every trade involves two parties — a buyer and a seller — agreeing on a price through a marketplace. Here's the process:

### The Trading Cycle:

| Phase | Action | Key Focus |
|-------|--------|-----------|
| **1. Analysis** | Study charts, news, or data | Find high-probability setups |
| **2. Planning** | Define entry, stop loss, target | Risk management before entry |
| **3. Execution** | Place order via broker/platform | Proper order type selection |
| **4. Management** | Monitor and adjust if needed | Follow your trading plan |
| **5. Exit** | Close at target or stop loss | Discipline over emotion |
| **6. Review** | Journal and analyze result | Continuous improvement |

### What Moves Prices?

Prices move based on **supply and demand**:
- More buyers than sellers → Price rises
- More sellers than buyers → Price falls
- Equal pressure → Price consolidates (ranges)

Key price drivers include:
- **Economic data** (GDP, employment, inflation)
- **Central bank decisions** (interest rates, quantitative easing)
- **Geopolitical events** (wars, elections, sanctions)
- **Market sentiment** (fear, greed, FOMO)
- **Institutional order flow** (smart money positioning)

---

## Types of Financial Markets

### 1. Forex (Foreign Exchange)

The **largest financial market** in the world with $7.5+ trillion daily volume.

| Feature | Detail |
|---------|--------|
| Trading Hours | 24 hours, 5 days a week |
| Instruments | Currency pairs (EUR/USD, GBP/JPY) |
| Minimum Capital | $50-500 (micro accounts) |
| Leverage | Up to 1:500 (varies by region) |
| Best For | Beginners, active traders |

### 2. Stock Market

Trade ownership shares of publicly listed companies.

| Feature | Detail |
|---------|--------|
| Trading Hours | Market-specific (NYSE: 9:30AM-4:00PM ET) |
| Instruments | Individual stocks, ETFs |
| Minimum Capital | $100+ (fractional shares available) |
| Leverage | 2:1 to 4:1 (US regulations) |
| Best For | Swing traders, investors |

### 3. Cryptocurrency

Digital asset trading on centralized and decentralized exchanges.

| Feature | Detail |
|---------|--------|
| Trading Hours | 24/7, 365 days |
| Instruments | BTC, ETH, altcoins, tokens |
| Minimum Capital | $10+ |
| Leverage | Up to 1:125 (futures) |
| Best For | High-risk tolerance traders |

### 4. Commodities

Physical goods traded on futures exchanges.

| Feature | Detail |
|---------|--------|
| Trading Hours | Exchange-specific |
| Instruments | Gold, Oil, Silver, Coffee, Wheat |
| Minimum Capital | $2,000+ (futures) or $100 (CFDs) |
| Leverage | Varies by instrument |
| Best For | Portfolio diversification, hedging |

### 5. Futures & Options

Derivative contracts based on underlying assets.

| Feature | Detail |
|---------|--------|
| Trading Hours | Nearly 24 hours (electronic) |
| Instruments | Index futures, commodity futures, options |
| Minimum Capital | $2,000-25,000+ |
| Leverage | Built into contract specifications |
| Best For | Experienced traders, hedgers |

### 6. Indices

Baskets of stocks representing market segments.

| Feature | Detail |
|---------|--------|
| Trading Hours | Nearly 24 hours (CFDs) |
| Instruments | S&P 500, NASDAQ, DAX, Nikkei 225 |
| Minimum Capital | $100+ (CFDs) |
| Leverage | Up to 1:200 |
| Best For | Market-wide exposure |

---

## Trading vs. Gambling

<Callout type="warning" title="Critical Distinction">
Trading is NOT gambling when done correctly. The key difference is **edge** — a statistical advantage that, over many trades, produces positive expected value. Without an edge, you ARE gambling.
</Callout>

| Factor | Trading (Professional) | Gambling |
|--------|----------------------|----------|
| **Edge** | Statistical advantage | House always wins |
| **Risk Control** | Defined stop losses | All-or-nothing bets |
| **Analysis** | Data-driven decisions | Luck-based |
| **Position Sizing** | Calculated risk per trade | Random bet sizes |
| **Emotions** | Rules-based execution | Emotion-driven |
| **Long-term Result** | Consistent profitability | Guaranteed loss |

---

## What You Need to Start Trading

### 1. Education (Most Important)

Before risking real money:
- Learn market fundamentals
- Understand risk management
- Study technical or fundamental analysis
- Practice on demo accounts (3-6 months minimum)

### 2. Trading Capital

| Market | Minimum Recommended | Comfortable Start |
|--------|-------------------|-------------------|
| Forex | $200 | $1,000-5,000 |
| Stocks | $500 | $5,000-25,000 |
| Crypto | $100 | $1,000-5,000 |
| Futures | $5,000 | $10,000-25,000 |

<Callout type="warning" title="Risk Capital Only">
Only trade with money you can afford to lose completely. Never use emergency funds, borrowed money, or capital needed for living expenses.
</Callout>

### 3. Broker & Platform

Choose a **regulated broker** with:
- Proper regulatory oversight (FCA, ASIC, CySEC, SEC)
- Competitive spreads and commissions
- Reliable execution speed
- Quality charting tools
- Demo account availability

Popular platforms:
- **MetaTrader 4/5** — Forex, CFDs, commodities
- **TradingView** — Analysis, stocks, crypto
- **Interactive Brokers** — Stocks, futures, options
- **Binance/Bybit** — Cryptocurrency

### 4. Trading Plan

A written document defining:
- Markets you'll trade
- Timeframes and sessions
- Entry and exit criteria
- Risk management rules
- Position sizing formula
- Daily/weekly routines

---

## Trading Timeframes

| Style | Holding Period | Trades/Week | Profit Target | Best Timeframe |
|-------|--------------|-------------|---------------|----------------|
| **Scalping** | Seconds to minutes | 20-100+ | 5-20 pips | M1-M5 |
| **Day Trading** | Minutes to hours | 3-10 | 20-100 pips | M15-H1 |
| **Swing Trading** | Days to weeks | 2-5 | 100-500 pips | H4-D1 |
| **Position Trading** | Weeks to months | 1-3/month | 500+ pips | D1-W1 |

---

## Realistic Expectations

### What Trading is NOT:
- ❌ A get-rich-quick scheme
- ❌ Easy money with no effort
- ❌ Passive income from day one
- ❌ 100% win rate possible
- ❌ Risk-free opportunity

### What Trading IS:
- ✅ A skill-based profession requiring years of practice
- ✅ Probabilistic thinking (40-60% win rate is healthy)
- ✅ Disciplined rule-following
- ✅ Continuous learning and adaptation
- ✅ Capital preservation first, profits second

### Realistic Timeline:

| Phase | Duration | Focus |
|-------|----------|-------|
| **Learning** | 3-6 months | Education, demo trading |
| **Transition** | 6-12 months | Small live account, building confidence |
| **Development** | 1-2 years | Refining strategy, consistent execution |
| **Proficiency** | 2-3 years | Consistent profitability |
| **Mastery** | 3-5+ years | Scaling, multiple strategies |

---

## Essential Trading Rules for Beginners

1. **Never risk more than 1-2% per trade** — Capital preservation is priority #1
2. **Always use a stop loss** — Define maximum loss before entering
3. **Follow your trading plan** — No impulsive decisions
4. **Trade with the trend** — Higher probability setups
5. **Keep a trading journal** — Track every trade for improvement
6. **Start with demo** — Prove profitability before going live
7. **One strategy, one market** — Master before expanding
8. **Control emotions** — Fear and greed are your enemies
9. **Accept losses** — They are the cost of doing business
10. **Never stop learning** — Markets evolve, so must you

---

## Common Beginner Mistakes

| Mistake | Why It's Dangerous | Solution |
|---------|-------------------|----------|
| No stop loss | Unlimited potential loss | Always set SL before entry |
| Overleveraging | Account blow-up risk | Use conservative leverage |
| Overtrading | Death by a thousand cuts | Quality over quantity |
| Revenge trading | Emotional spiral | Walk away after 2 losses |
| No plan | Random, inconsistent results | Write and follow a plan |
| Ignoring risk | One bad trade ruins months | Risk management first |
| FOMO entries | Poor entry, bad R:R | Wait for your setup only |
| Moving stop loss | Larger loss than planned | Accept the original risk |

---

## Next Steps

After understanding what trading is, continue your education:

- [Investing vs Trading](/en/academy/investing-vs-trading) — Choose your approach
- [Types of Traders](/en/academy/types-of-traders) — Find your trading style
- [Forex Basics](/en/academy/forex-basics) — Learn the largest market
- [Risk Management](/en/academy/risk-management) — Protect your capital
- [Trading Psychology](/en/academy/trading-psychology) — Master your mindset
`,
);

// ============================
// 1. WHAT IS TRADING — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "what-is-trading",
  {
    title: "Trading কী? — সম্পূর্ণ বিগিনার গাইড",
    description:
      "Trading কী, Financial Market কীভাবে কাজ করে, কোন কোন Instrument Trade করা যায় এবং কীভাবে Trading শুরু করবেন — বিগিনারদের জন্য সম্পূর্ণ ফাউন্ডেশনাল গাইড।",
    level: "beginner",
    order: 1,
  },
  `
## Trading কী?

Trading হলো **Financial Instrument কেনা-বেচা** করার প্রক্রিয়া — যেমন Currency, Stock, Commodity বা Cryptocurrency — যার মূল উদ্দেশ্য হলো Price Movement থেকে Profit অর্জন করা। Long-term Investing-এর বিপরীতে, Trading মূলত Short-to-medium term Price Fluctuation ক্যাপচার করার উপর ফোকাস করে।

<Callout type="info" title="মূল নীতি">
Trading-এর মৌলিক ধারণা সহজ: **কম দামে কিনুন, বেশি দামে বিক্রি করুন** (Long Position) অথবা **বেশি দামে বিক্রি করুন, কম দামে কিনুন** (Short Position)। আপনার Profit হলো Entry ও Exit Price-এর পার্থক্য, খরচ বাদ দিয়ে।
</Callout>

---

## Trading কীভাবে কাজ করে

প্রতিটি Trade-এ দুটি পক্ষ থাকে — একজন Buyer এবং একজন Seller — যারা একটি Marketplace-এর মাধ্যমে Price-এ একমত হন। এখানে সম্পূর্ণ প্রক্রিয়াটি দেখুন:

### Trading Cycle:

| পর্যায় | কাজ | মূল ফোকাস |
|---------|------|-----------|
| **১. Analysis** | Chart, News বা Data পর্যালোচনা | High-probability Setup খুঁজুন |
| **২. Planning** | Entry, Stop Loss, Target নির্ধারণ | Entry-র আগে Risk Management |
| **৩. Execution** | Broker/Platform-এ Order দিন | সঠিক Order Type নির্বাচন |
| **৪. Management** | Monitor করুন, প্রয়োজনে Adjust করুন | Trading Plan অনুসরণ |
| **৫. Exit** | Target বা Stop Loss-এ Close করুন | আবেগের উপর শৃঙ্খলা |
| **৬. Review** | Journal করুন ও ফলাফল বিশ্লেষণ করুন | ক্রমাগত উন্নতি |

### Price কেন ওঠানামা করে?

Price মূলত **Supply ও Demand**-এর ভিত্তিতে চলে:
- Buyer বেশি → Price বাড়ে
- Seller বেশি → Price কমে
- সমান চাপ → Price Consolidate করে (Range)

Price-এর মূল চালিকাশক্তি:
- **Economic Data** (GDP, Employment, Inflation)
- **Central Bank সিদ্ধান্ত** (Interest Rate, Quantitative Easing)
- **Geopolitical ঘটনা** (যুদ্ধ, নির্বাচন, Sanctions)
- **Market Sentiment** (ভয়, লোভ, FOMO)
- **Institutional Order Flow** (Smart Money Positioning)

---

## Financial Market-এর প্রকারভেদ

### ১. Forex (Foreign Exchange)

বিশ্বের **সবচেয়ে বড় Financial Market** — দৈনিক Volume $7.5+ ট্রিলিয়ন।

| বৈশিষ্ট্য | বিবরণ |
|-----------|--------|
| Trading Hours | সপ্তাহে ৫ দিন, ২৪ ঘণ্টা |
| Instrument | Currency Pair (EUR/USD, GBP/JPY) |
| ন্যূনতম Capital | $50-500 (Micro Account) |
| Leverage | ১:৫০০ পর্যন্ত (অঞ্চলভেদে ভিন্ন) |
| উপযুক্ত | Beginner, Active Trader |

### ২. Stock Market

Publicly Listed Company-র Ownership Share Trade করা।

| বৈশিষ্ট্য | বিবরণ |
|-----------|--------|
| Trading Hours | Market-ভিত্তিক (NYSE: 9:30AM-4:00PM ET) |
| Instrument | Individual Stock, ETF |
| ন্যূনতম Capital | $100+ (Fractional Share সুবিধা) |
| Leverage | ২:১ থেকে ৪:১ (US নিয়মানুযায়ী) |
| উপযুক্ত | Swing Trader, Investor |

### ৩. Cryptocurrency

Centralized ও Decentralized Exchange-এ Digital Asset Trading।

| বৈশিষ্ট্য | বিবরণ |
|-----------|--------|
| Trading Hours | ২৪/৭, ৩৬৫ দিন |
| Instrument | BTC, ETH, Altcoin, Token |
| ন্যূনতম Capital | $10+ |
| Leverage | ১:১২৫ পর্যন্ত (Futures) |
| উপযুক্ত | High-risk Tolerance Trader |

### ৪. Commodity

Futures Exchange-এ Physical Goods Trading।

| বৈশিষ্ট্য | বিবরণ |
|-----------|--------|
| Trading Hours | Exchange-ভিত্তিক |
| Instrument | Gold, Oil, Silver, Coffee, Wheat |
| ন্যূনতম Capital | $2,000+ (Futures) বা $100 (CFD) |
| Leverage | Instrument অনুযায়ী |
| উপযুক্ত | Portfolio Diversification, Hedging |

### ৫. Futures ও Options

Underlying Asset-এর উপর ভিত্তি করে Derivative Contract।

| বৈশিষ্ট্য | বিবরণ |
|-----------|--------|
| Trading Hours | প্রায় ২৪ ঘণ্টা (Electronic) |
| Instrument | Index Futures, Commodity Futures, Options |
| ন্যূনতম Capital | $2,000-25,000+ |
| Leverage | Contract Specification-এ Built-in |
| উপযুক্ত | অভিজ্ঞ Trader, Hedger |

### ৬. Indices

Market Segment প্রতিনিধিত্বকারী Stock-এর Basket।

| বৈশিষ্ট্য | বিবরণ |
|-----------|--------|
| Trading Hours | প্রায় ২৪ ঘণ্টা (CFD) |
| Instrument | S&P 500, NASDAQ, DAX, Nikkei 225 |
| ন্যূনতম Capital | $100+ (CFD) |
| Leverage | ১:২০০ পর্যন্ত |
| উপযুক্ত | Market-wide Exposure |

---

## Trading vs. Gambling

<Callout type="warning" title="গুরুত্বপূর্ণ পার্থক্য">
সঠিকভাবে করলে Trading জুয়া নয়। মূল পার্থক্য হলো **Edge** — একটি Statistical Advantage যা অনেকগুলো Trade-এর মধ্যে Positive Expected Value তৈরি করে। Edge ছাড়া আপনি আসলে Gambling-ই করছেন।
</Callout>

| বিষয় | Trading (Professional) | Gambling |
|--------|----------------------|----------|
| **Edge** | Statistical Advantage | House সবসময় জেতে |
| **Risk Control** | নির্ধারিত Stop Loss | All-or-nothing Bet |
| **Analysis** | Data-driven সিদ্ধান্ত | ভাগ্য-নির্ভর |
| **Position Sizing** | প্রতি Trade-এ গণনাকৃত Risk | Random Bet Size |
| **Emotion** | Rules-based Execution | আবেগ-চালিত |
| **দীর্ঘমেয়াদী ফলাফল** | ধারাবাহিক Profitability | নিশ্চিত Loss |

---

## Trading শুরু করতে কী প্রয়োজন

### ১. Education (সবচেয়ে গুরুত্বপূর্ণ)

Real Money Risk করার আগে:
- Market Fundamental শিখুন
- Risk Management বুঝুন
- Technical বা Fundamental Analysis অধ্যয়ন করুন
- Demo Account-এ Practice করুন (ন্যূনতম ৩-৬ মাস)

### ২. Trading Capital

| Market | ন্যূনতম সুপারিশ | আরামদায়ক শুরু |
|--------|----------------|---------------|
| Forex | $200 | $1,000-5,000 |
| Stock | $500 | $5,000-25,000 |
| Crypto | $100 | $1,000-5,000 |
| Futures | $5,000 | $10,000-25,000 |

<Callout type="warning" title="শুধুমাত্র Risk Capital ব্যবহার করুন">
শুধুমাত্র এমন টাকা দিয়ে Trade করুন যা সম্পূর্ণ হারালেও আপনার কোনো সমস্যা হবে না। কখনোই Emergency Fund, ধার করা টাকা বা জীবনযাত্রার খরচের জন্য প্রয়োজনীয় অর্থ ব্যবহার করবেন না।
</Callout>

### ৩. Broker ও Platform

একটি **Regulated Broker** বেছে নিন যেখানে থাকবে:
- যথাযথ Regulatory Oversight (FCA, ASIC, CySEC, SEC)
- প্রতিযোগিতামূলক Spread ও Commission
- নির্ভরযোগ্য Execution Speed
- মানসম্মত Charting Tool
- Demo Account সুবিধা

জনপ্রিয় Platform:
- **MetaTrader 4/5** — Forex, CFD, Commodity
- **TradingView** — Analysis, Stock, Crypto
- **Interactive Brokers** — Stock, Futures, Options
- **Binance/Bybit** — Cryptocurrency

### ৪. Trading Plan

একটি লিখিত Document যেখানে থাকবে:
- কোন Market-এ Trade করবেন
- Timeframe ও Session
- Entry ও Exit Criteria
- Risk Management নিয়ম
- Position Sizing Formula
- Daily/Weekly Routine

---

## Trading Timeframe

| Style | Holding Period | সাপ্তাহিক Trade | Profit Target | Best Timeframe |
|-------|--------------|-----------------|---------------|----------------|
| **Scalping** | সেকেন্ড থেকে মিনিট | ২০-১০০+ | 5-20 Pip | M1-M5 |
| **Day Trading** | মিনিট থেকে ঘণ্টা | ৩-১০ | 20-100 Pip | M15-H1 |
| **Swing Trading** | দিন থেকে সপ্তাহ | ২-৫ | 100-500 Pip | H4-D1 |
| **Position Trading** | সপ্তাহ থেকে মাস | ১-৩/মাস | 500+ Pip | D1-W1 |

---

## বাস্তবসম্মত প্রত্যাশা

### Trading যা নয়:
- ❌ দ্রুত ধনী হওয়ার উপায়
- ❌ কোনো পরিশ্রম ছাড়া সহজ অর্থ
- ❌ প্রথম দিন থেকে Passive Income
- ❌ ১০০% Win Rate সম্ভব
- ❌ Risk-free সুযোগ

### Trading যা:
- ✅ একটি Skill-based Profession যার জন্য বছরের পর বছর Practice প্রয়োজন
- ✅ Probabilistic Thinking (৪০-৬০% Win Rate স্বাস্থ্যকর)
- ✅ শৃঙ্খলাবদ্ধ Rule-following
- ✅ ক্রমাগত শেখা ও অভিযোজন
- ✅ প্রথমে Capital Preservation, তারপর Profit

### বাস্তবসম্মত Timeline:

| পর্যায় | সময়কাল | ফোকাস |
|---------|---------|--------|
| **শেখা** | ৩-৬ মাস | Education, Demo Trading |
| **Transition** | ৬-১২ মাস | ছোট Live Account, আত্মবিশ্বাস তৈরি |
| **Development** | ১-২ বছর | Strategy পরিমার্জন, ধারাবাহিক Execution |
| **Proficiency** | ২-৩ বছর | ধারাবাহিক Profitability |
| **Mastery** | ৩-৫+ বছর | Scaling, একাধিক Strategy |

---

## Beginner-দের জন্য অপরিহার্য Trading নিয়ম

1. **প্রতি Trade-এ ১-২% এর বেশি Risk নেবেন না** — Capital Preservation সর্বোচ্চ অগ্রাধিকার
2. **সবসময় Stop Loss ব্যবহার করুন** — Entry-র আগে Maximum Loss নির্ধারণ করুন
3. **Trading Plan অনুসরণ করুন** — আবেগপূর্ণ সিদ্ধান্ত নয়
4. **Trend-এর সাথে Trade করুন** — Higher Probability Setup
5. **Trading Journal রাখুন** — উন্নতির জন্য প্রতিটি Trade Track করুন
6. **Demo দিয়ে শুরু করুন** — Live যাওয়ার আগে Profitability প্রমাণ করুন
7. **একটি Strategy, একটি Market** — বিস্তার করার আগে Master করুন
8. **আবেগ নিয়ন্ত্রণ করুন** — ভয় ও লোভ আপনার শত্রু
9. **Loss গ্রহণ করুন** — এগুলো Business-এর খরচ
10. **শেখা কখনো বন্ধ করবেন না** — Market বিবর্তিত হয়, আপনাকেও হতে হবে

---

## সাধারণ Beginner ভুল

| ভুল | কেন বিপজ্জনক | সমাধান |
|-----|--------------|--------|
| Stop Loss নেই | সীমাহীন সম্ভাব্য Loss | Entry-র আগে সবসময় SL সেট করুন |
| Overleveraging | Account Blow-up-এর ঝুঁকি | Conservative Leverage ব্যবহার করুন |
| Overtrading | হাজার কাটায় মৃত্যু | Quality over Quantity |
| Revenge Trading | আবেগের ঘূর্ণিপাক | ২টি Loss-এর পর থামুন |
| কোনো Plan নেই | Random, অসামঞ্জস্য ফলাফল | Plan লিখুন ও অনুসরণ করুন |
| Risk উপেক্ষা | একটি খারাপ Trade মাসের পরিশ্রম নষ্ট করে | Risk Management সবার আগে |
| FOMO Entry | খারাপ Entry, খারাপ R:R | শুধুমাত্র আপনার Setup-এর জন্য অপেক্ষা করুন |
| Stop Loss সরানো | পরিকল্পিতের চেয়ে বড় Loss | Original Risk গ্রহণ করুন |

---

## পরবর্তী ধাপ

Trading কী তা বোঝার পর, আপনার শিক্ষা চালিয়ে যান:

- [Investing vs Trading](/bn/academy/investing-vs-trading) — আপনার পদ্ধতি বেছে নিন
- [Types of Traders](/bn/academy/types-of-traders) — আপনার Trading Style খুঁজুন
- [Forex Basics](/bn/academy/forex-basics) — সবচেয়ে বড় Market শিখুন
- [Risk Management](/bn/academy/risk-management) — আপনার Capital রক্ষা করুন
- [Trading Psychology](/bn/academy/trading-psychology) — আপনার Mindset আয়ত্ত করুন
`,
);

// ============================
// 2. INVESTING VS TRADING — EN
// ============================
writeMdx(
  "en",
  "academy",
  "investing-vs-trading",
  {
    title: "Investing vs Trading — Key Differences Explained",
    description:
      "Understand the fundamental differences between investing and trading. Learn which approach suits your goals, lifestyle, risk tolerance, and financial situation.",
    level: "beginner",
    order: 2,
  },
  `
## Investing vs Trading: Two Paths to Wealth

Investing and trading are fundamentally different approaches to profiting from financial markets. Understanding these differences helps you choose the right path — or combine both for optimal results.

<Callout type="info" title="Key Insight">
Neither approach is inherently "better." The right choice depends on your time availability, risk tolerance, capital, and financial goals. Many successful market participants use BOTH.
</Callout>

---

## Complete Side-by-Side Comparison

| Factor | Investing | Trading |
|--------|-----------|---------|
| **Timeframe** | Years to decades | Minutes to weeks |
| **Approach** | Passive (buy & hold) | Active (frequent transactions) |
| **Analysis** | Fundamental Analysis | Technical Analysis |
| **Goal** | Long-term wealth building | Short-term profit capture |
| **Capital Needed** | Higher ($5,000+) | Lower ($100-1,000) |
| **Time Required** | 1-2 hours/week | 2-8 hours/day |
| **Leverage** | Rarely used | Commonly used |
| **Risk Per Position** | Can handle 20%+ drawdowns | 1-2% strict maximum |
| **Trading Costs** | Minimal (few trades/year) | Significant (spreads, commissions) |
| **Tax Efficiency** | Long-term capital gains (lower) | Short-term capital gains (higher) |
| **Emotional Demand** | Low | High |
| **Dividends** | Core income source | Usually ignored |
| **Success Rate** | ~70-80% (index funds) | ~10-20% (retail traders) |

---

## What is Investing?

Investing is putting capital into assets with the expectation of **long-term appreciation** and **income generation** over years to decades.

### Investment Principles:

- **Buy and hold** — Time in market beats timing the market
- **Compound growth** — Returns generate returns over time
- **Diversification** — Spread risk across many assets
- **Dollar-cost averaging** — Regular contributions regardless of price
- **Fundamental analysis** — Value based on company earnings, growth, assets

### Common Investment Vehicles:

| Type | Expected Return | Risk Level | Best For |
|------|----------------|------------|----------|
| Index Funds (S&P 500) | 8-12%/year | Medium | Most people |
| Blue-chip Stocks | 7-15%/year | Medium | Growth + dividends |
| Bonds | 3-6%/year | Low | Capital preservation |
| Dividend Stocks | 4-8%/year + dividends | Medium-Low | Passive income |
| Real Estate | 8-15%/year | Medium | Tangible assets |
| Growth Stocks | 15-30%/year | High | Aggressive growth |

### Advantages of Investing:
- ✅ Lower stress (minimal monitoring)
- ✅ Tax-efficient (long-term capital gains rates)
- ✅ Compound growth over time
- ✅ Passive income from dividends
- ✅ Historical data supports long-term gains
- ✅ Minimal time commitment
- ✅ Higher success rate for average person

### Disadvantages of Investing:
- ❌ Slower wealth building
- ❌ Capital locked for years
- ❌ Market crashes can be painful
- ❌ Requires patience and discipline
- ❌ Inflation can erode conservative returns
- ❌ Limited upside in short term

---

## What is Trading?

Trading is actively buying and selling financial instruments to profit from **short-term price movements** — typically holding positions for minutes to weeks.

### Trading Principles:

- **Technical analysis** — Price action, patterns, indicators
- **Risk management** — Never risk more than 1-2% per trade
- **Market timing** — Enter and exit at specific price levels
- **Leverage** — Amplify returns (and risk)
- **Multiple timeframe analysis** — Confirm trends across timeframes

### Common Trading Styles:

| Style | Timeframe | Trades/Week | Skill Level | Capital |
|-------|-----------|-------------|-------------|---------|
| Scalping | Seconds-minutes | 50-200+ | Advanced | $5,000+ |
| Day Trading | Minutes-hours | 10-30 | Intermediate | $1,000+ |
| Swing Trading | Days-weeks | 3-8 | Beginner-friendly | $500+ |
| Position Trading | Weeks-months | 1-4 | Intermediate | $2,000+ |

### Advantages of Trading:
- ✅ Faster potential returns (monthly income possible)
- ✅ Profit in bull AND bear markets
- ✅ Lower capital requirement to start
- ✅ Active income generation
- ✅ Flexible schedule (trade any session)
- ✅ Scalable skill (works with $1K or $1M)

### Disadvantages of Trading:
- ❌ High stress and emotional demand
- ❌ Time-intensive (requires daily attention)
- ❌ Most retail traders lose money (80-90%)
- ❌ Higher costs (spreads, commissions, taxes)
- ❌ Requires continuous learning and adaptation
- ❌ Leverage amplifies losses too
- ❌ Performance pressure

---

## Choosing Your Path

### Choose INVESTING if you:
- Have a 5-20+ year time horizon
- Want passive wealth building
- Have limited daily time (full-time job)
- Prefer lower stress
- Want tax-efficient growth
- Are comfortable with slow, steady returns
- Prefer "set and forget" approach

### Choose TRADING if you:
- Want active income generation
- Can dedicate 2-8 hours daily
- Have strong emotional discipline
- Enjoy analysis and market study
- Want faster potential returns
- Are comfortable with higher risk
- Want to develop a professional skill

### Choose BOTH if you:
- Want diversified income streams
- Can separate strategies and capital
- Want long-term wealth AND short-term income
- Understand risk management for both

---

## The Hybrid Approach (Recommended)

The most effective strategy for many people combines both:

\`\`\`
Portfolio Allocation:
├── 70% — Long-term Investments (Index funds, ETFs, dividend stocks)
├── 20% — Active Trading Account (Swing trading, day trading)
└── 10% — Cash Reserve (Opportunities, emergencies)
\`\`\`

### How It Works:

1. **Core Portfolio (70%):** Auto-invest monthly in index funds/ETFs
2. **Trading Account (20%):** Actively trade with strict risk management
3. **Trading Profits:** Reinvest gains into long-term portfolio
4. **Result:** Wealth builds on both fronts

<Callout type="info" title="Pro Tip">
Use trading profits to accelerate your investment portfolio. A trader who makes 5% monthly on a $10,000 account and reinvests into index funds builds wealth much faster than either approach alone.
</Callout>

---

## Success Rate Reality

| Approach | Success Rate | Key Factor |
|----------|-------------|------------|
| Index Fund Investing | 70-80% | Time + patience |
| Active Stock Picking | 30-50% | Research + selection |
| Swing Trading | 20-30% | Discipline + skill |
| Day Trading | 5-15% | Experience + psychology |
| Scalping | 5-10% | Speed + technology |

---

## Financial Comparison (10-Year Projection)

### Scenario: $10,000 Starting Capital

**Investing (Index Fund):**
\`\`\`
Year 1:  $11,000 (+10%)
Year 5:  $16,105 (+61%)
Year 10: $25,937 (+159%)
Annual effort: 1 hour/week
\`\`\`

**Trading (Skilled Swing Trader — 5% monthly average):**
\`\`\`
Year 1:  $17,958 (+80%)
Year 3:  $57,900 (+479%)
Year 5:  $186,792 (+1,768%)
Annual effort: 4 hours/day
\`\`\`

<Callout type="warning" title="Reality Check">
The trading projection assumes consistent profitability which only 10-20% of traders achieve. Most traders actually LOSE money in the first 1-2 years. Factor in the learning curve and realistic expectations.
</Callout>

---

## Summary

| Question | Investing | Trading |
|----------|-----------|---------|
| Who should do it? | Everyone | Dedicated learners |
| When to start? | Now (time matters) | After education |
| How much time? | 1-2 hours/week | 2-8 hours/day |
| Realistic return? | 8-12%/year | 3-10%/month (if skilled) |
| Main risk? | Market crashes | Account blow-up |
| Best resource? | Index funds | Education + demo |

**Bottom Line:** Start investing immediately (even small amounts). Study trading on the side. When you're consistently profitable on demo for 3-6 months, add a small trading account to your strategy.

---

## Related Topics

- [What is Trading?](/en/academy/what-is-trading) — Trading fundamentals
- [Types of Traders](/en/academy/types-of-traders) — Find your style
- [Risk Management](/en/academy/risk-management) — Capital protection
- [Trading Plan](/en/academy/trading-plan) — Strategy development
- [Position Sizing](/en/academy/position-sizing) — Proper risk allocation
`,
);

// ============================
// 2. INVESTING VS TRADING — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "investing-vs-trading",
  {
    title: "Investing vs Trading — মূল পার্থক্য ব্যাখ্যা",
    description:
      "Investing ও Trading-এর মৌলিক পার্থক্য বুঝুন। জানুন কোন পদ্ধতি আপনার লক্ষ্য, জীবনধারা, Risk Tolerance এবং আর্থিক পরিস্থিতির জন্য উপযুক্ত।",
    level: "beginner",
    order: 2,
  },
  `
## Investing vs Trading: সম্পদ তৈরির দুটি পথ

Investing ও Trading হলো Financial Market থেকে Profit করার মৌলিকভাবে ভিন্ন দুটি পদ্ধতি। এই পার্থক্যগুলো বোঝা আপনাকে সঠিক পথ বেছে নিতে — অথবা সেরা ফলাফলের জন্য উভয়কে সংমিশ্রিত করতে সাহায্য করবে।

<Callout type="info" title="মূল অন্তর্দৃষ্টি">
কোনো পদ্ধতিই স্বাভাবিকভাবে "ভালো" নয়। সঠিক পছন্দ নির্ভর করে আপনার সময়ের প্রাপ্যতা, Risk Tolerance, Capital এবং Financial Goal-এর উপর। অনেক সফল Market Participant উভয়ই ব্যবহার করেন।
</Callout>

---

## সম্পূর্ণ তুলনা

| বিষয় | Investing | Trading |
|--------|-----------|---------|
| **সময়কাল** | বছর থেকে দশক | মিনিট থেকে সপ্তাহ |
| **পদ্ধতি** | Passive (Buy & Hold) | Active (ঘন ঘন Transaction) |
| **Analysis** | Fundamental Analysis | Technical Analysis |
| **লক্ষ্য** | দীর্ঘমেয়াদী সম্পদ তৈরি | স্বল্পমেয়াদী Profit |
| **প্রয়োজনীয় Capital** | বেশি ($5,000+) | কম ($100-1,000) |
| **প্রয়োজনীয় সময়** | সপ্তাহে ১-২ ঘণ্টা | দিনে ২-৮ ঘণ্টা |
| **Leverage** | খুব কম ব্যবহার | সাধারণত ব্যবহৃত |
| **Position প্রতি Risk** | ২০%+ Drawdown সহ্য করতে পারে | সর্বোচ্চ ১-২% |
| **Trading Cost** | ন্যূনতম (বছরে কয়েকটি Trade) | উল্লেখযোগ্য (Spread, Commission) |
| **Tax Efficiency** | Long-term Capital Gain (কম) | Short-term Capital Gain (বেশি) |
| **আবেগের চাপ** | কম | বেশি |
| **Dividend** | মূল আয়ের উৎস | সাধারণত উপেক্ষিত |
| **Success Rate** | ~৭০-৮০% (Index Fund) | ~১০-২০% (Retail Trader) |

---

## Investing কী?

Investing হলো এমন Asset-এ Capital বিনিয়োগ করা যেখানে বছর বা দশক ধরে **দীর্ঘমেয়াদী মূল্যবৃদ্ধি** এবং **আয় সৃষ্টির** প্রত্যাশা থাকে।

### Investment নীতিমালা:

- **Buy and Hold** — Market-এ সময় কাটানো Market Timing-কে হারায়
- **Compound Growth** — Return থেকে আবার Return তৈরি হয়
- **Diversification** — অনেক Asset-এ Risk ছড়িয়ে দিন
- **Dollar-cost Averaging** — Price যাই হোক নিয়মিত বিনিয়োগ
- **Fundamental Analysis** — Company-র Earning, Growth, Asset-এর ভিত্তিতে মূল্যায়ন

### সাধারণ Investment Vehicle:

| প্রকার | প্রত্যাশিত Return | Risk Level | উপযুক্ত |
|--------|-------------------|------------|----------|
| Index Fund (S&P 500) | ৮-১২%/বছর | Medium | বেশিরভাগ মানুষ |
| Blue-chip Stock | ৭-১৫%/বছর | Medium | Growth + Dividend |
| Bond | ৩-৬%/বছর | Low | Capital Preservation |
| Dividend Stock | ৪-৮%/বছর + Dividend | Medium-Low | Passive Income |
| Real Estate | ৮-১৫%/বছর | Medium | Tangible Asset |
| Growth Stock | ১৫-৩০%/বছর | High | Aggressive Growth |

### Investing-এর সুবিধা:
- ✅ কম Stress (ন্যূনতম Monitoring)
- ✅ Tax-efficient (Long-term Capital Gain Rate)
- ✅ সময়ের সাথে Compound Growth
- ✅ Dividend থেকে Passive Income
- ✅ Historical Data দীর্ঘমেয়াদী লাভ সমর্থন করে
- ✅ ন্যূনতম সময় প্রতিশ্রুতি
- ✅ সাধারণ মানুষের জন্য বেশি Success Rate

### Investing-এর অসুবিধা:
- ❌ ধীর সম্পদ তৈরি
- ❌ Capital বছরের পর বছর আটকে থাকে
- ❌ Market Crash কষ্টদায়ক হতে পারে
- ❌ ধৈর্য ও শৃঙ্খলা প্রয়োজন
- ❌ Inflation রক্ষণশীল Return ক্ষয় করতে পারে

---

## Trading কী?

Trading হলো **Short-term Price Movement** থেকে Profit করার জন্য সক্রিয়ভাবে Financial Instrument কেনা-বেচা — সাধারণত মিনিট থেকে সপ্তাহ পর্যন্ত Position ধরে রাখা।

### Trading নীতিমালা:

- **Technical Analysis** — Price Action, Pattern, Indicator
- **Risk Management** — প্রতি Trade-এ ১-২% এর বেশি Risk কখনো নয়
- **Market Timing** — নির্দিষ্ট Price Level-এ Entry ও Exit
- **Leverage** — Return (এবং Risk) বৃদ্ধি করে
- **Multiple Timeframe Analysis** — বিভিন্ন Timeframe-এ Trend Confirm করুন

### সাধারণ Trading Style:

| Style | Timeframe | সাপ্তাহিক Trade | Skill Level | Capital |
|-------|-----------|-----------------|-------------|---------|
| Scalping | সেকেন্ড-মিনিট | ৫০-২০০+ | Advanced | $5,000+ |
| Day Trading | মিনিট-ঘণ্টা | ১০-৩০ | Intermediate | $1,000+ |
| Swing Trading | দিন-সপ্তাহ | ৩-৮ | Beginner-friendly | $500+ |
| Position Trading | সপ্তাহ-মাস | ১-৪ | Intermediate | $2,000+ |

### Trading-এর সুবিধা:
- ✅ দ্রুত সম্ভাব্য Return (মাসিক Income সম্ভব)
- ✅ Bull ও Bear উভয় Market-এ Profit
- ✅ শুরু করতে কম Capital
- ✅ Active Income Generation
- ✅ নমনীয় সময়সূচি (যেকোনো Session-এ Trade)
- ✅ Scalable Skill ($1K বা $1M — উভয়ের জন্য কাজ করে)

### Trading-এর অসুবিধা:
- ❌ উচ্চ Stress ও আবেগের চাপ
- ❌ সময়-নিবিড় (দৈনিক মনোযোগ প্রয়োজন)
- ❌ বেশিরভাগ Retail Trader টাকা হারায় (৮০-৯০%)
- ❌ উচ্চ খরচ (Spread, Commission, Tax)
- ❌ ক্রমাগত শেখা ও অভিযোজন প্রয়োজন
- ❌ Leverage Loss-ও বাড়ায়

---

## আপনার পথ বেছে নিন

### INVESTING বেছে নিন যদি আপনি:
- ৫-২০+ বছরের Time Horizon রাখেন
- Passive Wealth Building চান
- দৈনিক সময় সীমিত (Full-time Job)
- কম Stress পছন্দ করেন
- Tax-efficient Growth চান
- ধীর, স্থির Return-এ স্বাচ্ছন্দ্য বোধ করেন

### TRADING বেছে নিন যদি আপনি:
- Active Income Generation চান
- দিনে ২-৮ ঘণ্টা সময় দিতে পারেন
- শক্তিশালী Emotional Discipline আছে
- Analysis ও Market Study উপভোগ করেন
- দ্রুত সম্ভাব্য Return চান
- উচ্চ Risk-এ স্বাচ্ছন্দ্য বোধ করেন

### উভয় বেছে নিন যদি আপনি:
- বৈচিত্র্যময় Income Stream চান
- Strategy ও Capital আলাদা করতে পারেন
- দীর্ঘমেয়াদী সম্পদ এবং স্বল্পমেয়াদী Income দুটোই চান

---

## Hybrid পদ্ধতি (সুপারিশকৃত)

অনেকের জন্য সবচেয়ে কার্যকর কৌশল হলো উভয়ের সংমিশ্রণ:

\`\`\`
Portfolio Allocation:
├── ৭০% — Long-term Investment (Index Fund, ETF, Dividend Stock)
├── ২০% — Active Trading Account (Swing Trading, Day Trading)
└── ১০% — Cash Reserve (সুযোগ, জরুরি অবস্থা)
\`\`\`

### কীভাবে কাজ করে:

1. **Core Portfolio (৭০%):** প্রতি মাসে Index Fund/ETF-এ Auto-invest
2. **Trading Account (২০%):** কঠোর Risk Management-সহ সক্রিয়ভাবে Trade
3. **Trading Profit:** দীর্ঘমেয়াদী Portfolio-তে Reinvest
4. **ফলাফল:** উভয় দিক থেকে সম্পদ তৈরি হয়

<Callout type="info" title="Pro Tip">
Trading Profit ব্যবহার করুন আপনার Investment Portfolio ত্বরান্বিত করতে। একজন Trader যিনি $10,000 Account-এ মাসিক ৫% করেন এবং Index Fund-এ Reinvest করেন, তিনি যেকোনো একক পদ্ধতির চেয়ে অনেক দ্রুত সম্পদ তৈরি করেন।
</Callout>

---

## Success Rate-এর বাস্তবতা

| পদ্ধতি | Success Rate | মূল বিষয় |
|---------|-------------|-----------|
| Index Fund Investing | ৭০-৮০% | সময় + ধৈর্য |
| Active Stock Picking | ৩০-৫০% | Research + Selection |
| Swing Trading | ২০-৩০% | শৃঙ্খলা + দক্ষতা |
| Day Trading | ৫-১৫% | অভিজ্ঞতা + Psychology |
| Scalping | ৫-১০% | Speed + Technology |

---

## সারসংক্ষেপ

| প্রশ্ন | Investing | Trading |
|---------|-----------|---------|
| কার করা উচিত? | সবার | নিবেদিত শিক্ষার্থী |
| কখন শুরু করবেন? | এখনই (সময় গুরুত্বপূর্ণ) | Education-এর পর |
| কতটা সময়? | সপ্তাহে ১-২ ঘণ্টা | দিনে ২-৮ ঘণ্টা |
| বাস্তবসম্মত Return? | ৮-১২%/বছর | ৩-১০%/মাস (দক্ষ হলে) |
| প্রধান ঝুঁকি? | Market Crash | Account Blow-up |
| সেরা Resource? | Index Fund | Education + Demo |

**মূল কথা:** অবিলম্বে Investing শুরু করুন (ছোট Amount হলেও)। পাশাপাশি Trading পড়ুন। Demo-তে ৩-৬ মাস ধারাবাহিকভাবে Profitable হলে, আপনার Strategy-তে একটি ছোট Trading Account যোগ করুন।

---

## সম্পর্কিত বিষয়

- [Trading কী?](/bn/academy/what-is-trading) — Trading Fundamental
- [Types of Traders](/bn/academy/types-of-traders) — আপনার Style খুঁজুন
- [Risk Management](/bn/academy/risk-management) — Capital সুরক্ষা
- [Trading Plan](/bn/academy/trading-plan) — Strategy Development
- [Position Sizing](/bn/academy/position-sizing) — সঠিক Risk Allocation
`,
);

// ============================
// 3. TYPES OF TRADERS — EN
// ============================
writeMdx(
  "en",
  "academy",
  "types-of-traders",
  {
    title: "Types of Traders — Scalper, Day Trader, Swing & Position Trader",
    description:
      "Discover the four main types of traders: Scalper, Day Trader, Swing Trader, and Position Trader. Learn which trading style matches your personality, schedule, and goals.",
    level: "beginner",
    order: 3,
  },
  `
## Types of Traders — Find Your Style

Every successful trader has found a style that matches their personality, schedule, and risk tolerance. There is no "best" style — only the best style **for you**.

<Callout type="info" title="Why Style Matters">
Trading against your personality guarantees failure. A patient person forcing scalping, or an impatient person trying position trading, will both struggle emotionally and financially.
</Callout>

---

## The Trading Spectrum

\`\`\`
SCALPER ← → DAY TRADER ← → SWING TRADER ← → POSITION TRADER
(seconds)    (hours)        (days)           (weeks/months)

High frequency  ─────────────────────────→  Low frequency
High leverage   ─────────────────────────→  Low leverage
High stress     ─────────────────────────→  Low stress
High screen time ────────────────────────→  Low screen time
Small targets   ─────────────────────────→  Large targets
\`\`\`

---

## 1. Scalper

**Definition:** A trader who holds positions for **seconds to minutes**, capturing very small price movements with high frequency.

### Characteristics:

| Attribute | Detail |
|-----------|--------|
| **Holding Time** | 5 seconds to 5 minutes |
| **Trades Per Day** | 10-100+ |
| **Profit Per Trade** | 3-15 pips |
| **Daily Target** | 30-100+ pips |
| **Leverage** | High (20:1 to 100:1) |
| **Stop Loss** | 3-10 pips |
| **Timeframes Used** | M1, M5 |
| **Screen Time** | 4-8 hours of intense focus |

### Who Should Scalp:
- ✅ Fast decision makers
- ✅ People who handle pressure well
- ✅ Those with fast internet and good platform
- ✅ Full-time traders with dedicated time blocks
- ✅ People who dislike overnight risk

### Who Should NOT Scalp:
- ❌ Emotional or hesitant people
- ❌ Those with slow internet/platform
- ❌ People who can't dedicate full attention
- ❌ Beginners (learn swing first)
- ❌ Part-time traders

### Scalping Strategy Example:

\`\`\`
Setup: M1/M5 chart during London/NY overlap
Entry: Break of micro-structure (5-min FVG fill)
Stop Loss: 5-8 pips
Take Profit: 10-15 pips (1:2 RR minimum)
Session: 8:00-11:00 AM EST only
Max trades: 10 per day
Max daily loss: 3% of account
\`\`\`

### Pros & Cons:

| Pros | Cons |
|------|------|
| Quick profits | High stress, intense focus |
| No overnight risk | Spread costs compound |
| Many opportunities daily | Requires fast execution |
| Small stops (limited risk) | Exhausting over time |
| Compound quickly | Not suitable for beginners |

---

## 2. Day Trader

**Definition:** A trader who opens and closes all positions within **the same trading day**, never holding overnight.

### Characteristics:

| Attribute | Detail |
|-----------|--------|
| **Holding Time** | 15 minutes to 8 hours |
| **Trades Per Day** | 2-8 |
| **Profit Per Trade** | 20-80 pips |
| **Daily Target** | 50-150 pips |
| **Leverage** | Moderate (10:1 to 30:1) |
| **Stop Loss** | 15-40 pips |
| **Timeframes Used** | M15, M30, H1 |
| **Screen Time** | 3-6 hours |

### Who Should Day Trade:
- ✅ People with 3-6 hours of dedicated time daily
- ✅ Those who prefer clean daily P&L
- ✅ Moderate risk tolerance
- ✅ Can focus during specific market sessions
- ✅ Intermediate experience level

### Day Trading Strategy Example:

\`\`\`
Setup: H1 trend direction + M15 entry
Entry: Bullish Order Block + FVG confluence on M15
Stop Loss: Below Order Block (20-30 pips)
Take Profit: Next H1 liquidity level (60-100 pips)
Session: London or NY session only
Max trades: 3 per day
Max daily loss: 2% of account
\`\`\`

### Pros & Cons:

| Pros | Cons |
|------|------|
| No overnight gap risk | Requires daily time commitment |
| Daily profit opportunities | Can be stressful during sessions |
| Moderate leverage needed | PDT rule in US ($25K minimum) |
| Clear daily results | Missing moves after session |
| Good work-life balance possible | Requires specific session focus |

---

## 3. Swing Trader

**Definition:** A trader who holds positions for **days to weeks**, capturing larger price swings and multi-day trends.

### Characteristics:

| Attribute | Detail |
|-----------|--------|
| **Holding Time** | 2 days to 3 weeks |
| **Trades Per Week** | 2-5 |
| **Profit Per Trade** | 80-300 pips |
| **Weekly Target** | 100-400 pips |
| **Leverage** | Low to moderate (5:1 to 15:1) |
| **Stop Loss** | 40-100 pips |
| **Timeframes Used** | H4, D1 |
| **Screen Time** | 30 min to 2 hours/day |

### Who Should Swing Trade:
- ✅ People with full-time jobs
- ✅ Those who prefer less screen time
- ✅ Patient personalities
- ✅ Beginners learning the market
- ✅ Those comfortable with overnight holds

### Swing Trading Strategy Example:

\`\`\`
Setup: D1 trend direction + H4 pullback entry
Entry: H4 Order Block/FVG after pullback to premium/discount
Stop Loss: Above/below swing structure (50-80 pips)
Take Profit: Next D1 swing high/low (150-300 pips)
Analysis: Check charts 2x daily (morning + evening)
Max open positions: 3
Max portfolio risk: 5% total
\`\`\`

### Pros & Cons:

| Pros | Cons |
|------|------|
| Part-time compatible | Overnight gap risk |
| Larger moves = better R:R | Requires patience |
| Less stress day-to-day | Swap/rollover costs |
| Fewer decisions | Fewer opportunities |
| Best for beginners | Must handle drawdowns |
| Lower trading costs | Longer feedback loop |

---

## 4. Position Trader

**Definition:** A trader who holds positions for **weeks to months**, riding major trends and economic cycles.

### Characteristics:

| Attribute | Detail |
|-----------|--------|
| **Holding Time** | 2 weeks to 6 months |
| **Trades Per Month** | 1-3 |
| **Profit Per Trade** | 300-1,000+ pips |
| **Monthly Target** | 300-800 pips |
| **Leverage** | Low (2:1 to 5:1) |
| **Stop Loss** | 100-300 pips |
| **Timeframes Used** | D1, W1 |
| **Screen Time** | 15-30 minutes/day |

### Who Should Position Trade:
- ✅ Very patient personalities
- ✅ Those with large accounts
- ✅ Fundamental analysis enthusiasts
- ✅ People wanting minimal time commitment
- ✅ Experienced traders with conviction

### Position Trading Strategy Example:

\`\`\`
Setup: W1 trend + D1 structural shift
Entry: D1 Order Block after major correction
Stop Loss: Below weekly structure (150-250 pips)
Take Profit: Major weekly target (500-1000 pips)
Analysis: Check charts daily for 15 min
Max open positions: 2-3
Fundamental alignment required
\`\`\`

---

## Style Comparison Summary

| Factor | Scalper | Day Trader | Swing Trader | Position Trader |
|--------|---------|------------|--------------|-----------------|
| **Time/Day** | 4-8 hrs | 3-6 hrs | 30 min-2 hrs | 15-30 min |
| **Stress** | Very High | High | Moderate | Low |
| **Capital** | $5K+ | $1K+ | $500+ | $5K+ |
| **Best For** | Pros | Full-time traders | Part-timers | Patient investors |
| **Win Rate** | 55-70% | 45-60% | 40-55% | 35-50% |
| **R:R Ratio** | 1:1 to 1:2 | 1:2 to 1:3 | 1:2 to 1:4 | 1:3 to 1:10 |
| **Beginner?** | No | Maybe | Yes ✅ | Maybe |

<Callout type="info" title="Recommendation for Beginners">
Start with **Swing Trading** on the H4/D1 timeframe. It gives you time to think, analyze, and learn without the pressure of fast markets. Once profitable, you can explore other styles.
</Callout>

---

## How to Choose Your Style

Ask yourself these questions:

1. **How much time can I dedicate daily?**
   - Less than 1 hour → Swing/Position
   - 2-4 hours → Day Trading
   - 4+ hours → Scalping/Day Trading

2. **What's my personality?**
   - Patient, methodical → Swing/Position
   - Action-oriented, fast → Scalping/Day Trading
   - Balanced → Day Trading/Swing

3. **What's my risk tolerance?**
   - Conservative → Position/Swing
   - Moderate → Swing/Day Trading
   - Aggressive → Day Trading/Scalping

4. **What's my schedule?**
   - Full-time job → Swing Trading
   - Part-time flexible → Day Trading
   - Full-time trader → Any style

---

## Related Topics

- [What is Trading?](/en/academy/what-is-trading) — Trading fundamentals
- [Risk Management](/en/academy/risk-management) — Protect your capital
- [Trading Psychology](/en/academy/trading-psychology) — Master your mindset
- [Trading Plan](/en/academy/trading-plan) — Build your system
- [Forex Basics](/en/academy/forex-basics) — Learn the market
`,
);

// ============================
// 3. TYPES OF TRADERS — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "types-of-traders",
  {
    title: "Trader-দের ধরন — Scalper, Day Trader, Swing ও Position Trader",
    description:
      "চারটি প্রধান Trader ধরন আবিষ্কার করুন: Scalper, Day Trader, Swing Trader এবং Position Trader। জানুন কোন Trading Style আপনার ব্যক্তিত্ব, সময়সূচি ও লক্ষ্যের সাথে মেলে।",
    level: "beginner",
    order: 3,
  },
  `
## Trader-দের ধরন — আপনার Style খুঁজুন

প্রতিটি সফল Trader এমন একটি Style খুঁজে পেয়েছেন যা তাঁর ব্যক্তিত্ব, সময়সূচি ও Risk Tolerance-এর সাথে মেলে। কোনো "সেরা" Style নেই — শুধুমাত্র **আপনার জন্য** সেরা Style আছে।

<Callout type="info" title="Style কেন গুরুত্বপূর্ণ">
ব্যক্তিত্বের বিরুদ্ধে Trading করলে ব্যর্থতা নিশ্চিত। ধৈর্যশীল ব্যক্তি জোর করে Scalping করলে, অথবা অধৈর্য ব্যক্তি Position Trading চেষ্টা করলে — উভয়েই আবেগিক ও আর্থিকভাবে ক্ষতিগ্রস্ত হবেন।
</Callout>

---

## Trading Spectrum

\`\`\`
SCALPER ← → DAY TRADER ← → SWING TRADER ← → POSITION TRADER
(সেকেন্ড)    (ঘণ্টা)        (দিন)           (সপ্তাহ/মাস)

বেশি Frequency  ─────────────────────→  কম Frequency
বেশি Leverage   ─────────────────────→  কম Leverage
বেশি Stress     ─────────────────────→  কম Stress
বেশি Screen Time ────────────────────→  কম Screen Time
ছোট Target     ─────────────────────→  বড় Target
\`\`\`

---

## ১. Scalper

**সংজ্ঞা:** একজন Trader যিনি **সেকেন্ড থেকে মিনিট** পর্যন্ত Position ধরে রেখে, High Frequency-তে খুব ছোট Price Movement ক্যাপচার করেন।

### বৈশিষ্ট্য:

| বিষয় | বিবরণ |
|-------|--------|
| **Holding Time** | ৫ সেকেন্ড থেকে ৫ মিনিট |
| **প্রতিদিন Trade** | ১০-১০০+ |
| **প্রতি Trade Profit** | ৩-১৫ Pip |
| **দৈনিক Target** | ৩০-১০০+ Pip |
| **Leverage** | বেশি (20:1 থেকে 100:1) |
| **Stop Loss** | ৩-১০ Pip |
| **Timeframe** | M1, M5 |
| **Screen Time** | ৪-৮ ঘণ্টা তীব্র মনোযোগ |

### কারা Scalp করবেন:
- ✅ দ্রুত সিদ্ধান্ত নেওয়া ব্যক্তি
- ✅ চাপ সামলাতে পারেন যারা
- ✅ দ্রুত Internet ও ভালো Platform আছে যাদের
- ✅ Full-time Trader যাদের নির্দিষ্ট সময় আছে
- ✅ Overnight Risk পছন্দ করেন না যারা

### কারা Scalp করবেন না:
- ❌ আবেগপ্রবণ বা দ্বিধাগ্রস্ত ব্যক্তি
- ❌ ধীর Internet/Platform
- ❌ পূর্ণ মনোযোগ দিতে পারবেন না যারা
- ❌ Beginner (আগে Swing শিখুন)
- ❌ Part-time Trader

### Scalping-এর সুবিধা ও অসুবিধা:

| সুবিধা | অসুবিধা |
|---------|---------|
| দ্রুত Profit | উচ্চ Stress, তীব্র ফোকাস |
| Overnight Risk নেই | Spread Cost জমা হয় |
| প্রতিদিন অনেক সুযোগ | দ্রুত Execution প্রয়োজন |
| ছোট Stop (সীমিত Risk) | সময়ের সাথে ক্লান্তিকর |
| দ্রুত Compound | Beginner-দের জন্য নয় |

---

## ২. Day Trader

**সংজ্ঞা:** একজন Trader যিনি **একই Trading Day-তে** সব Position Open ও Close করেন, কখনোই Overnight Hold করেন না।

### বৈশিষ্ট্য:

| বিষয় | বিবরণ |
|-------|--------|
| **Holding Time** | ১৫ মিনিট থেকে ৮ ঘণ্টা |
| **প্রতিদিন Trade** | ২-৮ |
| **প্রতি Trade Profit** | ২০-৮০ Pip |
| **দৈনিক Target** | ৫০-১৫০ Pip |
| **Leverage** | মধ্যম (10:1 থেকে 30:1) |
| **Stop Loss** | ১৫-৪০ Pip |
| **Timeframe** | M15, M30, H1 |
| **Screen Time** | ৩-৬ ঘণ্টা |

### কারা Day Trade করবেন:
- ✅ দিনে ৩-৬ ঘণ্টা সময় দিতে পারেন
- ✅ পরিষ্কার দৈনিক P&L পছন্দ করেন
- ✅ মধ্যম Risk Tolerance
- ✅ নির্দিষ্ট Market Session-এ ফোকাস করতে পারেন
- ✅ Intermediate অভিজ্ঞতা স্তর

### সুবিধা ও অসুবিধা:

| সুবিধা | অসুবিধা |
|---------|---------|
| Overnight Gap Risk নেই | দৈনিক সময় প্রতিশ্রুতি |
| প্রতিদিন Profit-এর সুযোগ | Session-এ Stressful হতে পারে |
| মধ্যম Leverage প্রয়োজন | US-এ PDT Rule ($25K ন্যূনতম) |
| স্পষ্ট দৈনিক ফলাফল | Session-এর পর Movement মিস |
| ভালো Work-life Balance সম্ভব | নির্দিষ্ট Session Focus প্রয়োজন |

---

## ৩. Swing Trader

**সংজ্ঞা:** একজন Trader যিনি **দিন থেকে সপ্তাহ** পর্যন্ত Position ধরে রেখে, বড় Price Swing ও Multi-day Trend ক্যাপচার করেন।

### বৈশিষ্ট্য:

| বিষয় | বিবরণ |
|-------|--------|
| **Holding Time** | ২ দিন থেকে ৩ সপ্তাহ |
| **সাপ্তাহিক Trade** | ২-৫ |
| **প্রতি Trade Profit** | ৮০-৩০০ Pip |
| **সাপ্তাহিক Target** | ১০০-৪০০ Pip |
| **Leverage** | কম থেকে মধ্যম (5:1 থেকে 15:1) |
| **Stop Loss** | ৪০-১০০ Pip |
| **Timeframe** | H4, D1 |
| **Screen Time** | দিনে ৩০ মিনিট থেকে ২ ঘণ্টা |

### কারা Swing Trade করবেন:
- ✅ Full-time Job আছে যাদের
- ✅ কম Screen Time পছন্দ করেন
- ✅ ধৈর্যশীল ব্যক্তিত্ব
- ✅ Market শিখছেন এমন Beginner
- ✅ Overnight Hold-এ স্বাচ্ছন্দ্য আছে

### সুবিধা ও অসুবিধা:

| সুবিধা | অসুবিধা |
|---------|---------|
| Part-time-এর সাথে সামঞ্জস্যপূর্ণ | Overnight Gap Risk |
| বড় Move = ভালো R:R | ধৈর্য প্রয়োজন |
| দৈনিক কম Stress | Swap/Rollover খরচ |
| কম সিদ্ধান্ত | কম সুযোগ |
| Beginner-দের জন্য সেরা | Drawdown সামলাতে হয় |
| কম Trading Cost | দীর্ঘ Feedback Loop |

---

## ৪. Position Trader

**সংজ্ঞা:** একজন Trader যিনি **সপ্তাহ থেকে মাস** পর্যন্ত Position ধরে রেখে, বড় Trend ও Economic Cycle-এ Ride করেন।

### বৈশিষ্ট্য:

| বিষয় | বিবরণ |
|-------|--------|
| **Holding Time** | ২ সপ্তাহ থেকে ৬ মাস |
| **মাসিক Trade** | ১-৩ |
| **প্রতি Trade Profit** | ৩০০-১,০০০+ Pip |
| **মাসিক Target** | ৩০০-৮০০ Pip |
| **Leverage** | কম (2:1 থেকে 5:1) |
| **Stop Loss** | ১০০-৩০০ Pip |
| **Timeframe** | D1, W1 |
| **Screen Time** | দিনে ১৫-৩০ মিনিট |

---

## Style তুলনা সারাংশ

| বিষয় | Scalper | Day Trader | Swing Trader | Position Trader |
|--------|---------|------------|--------------|-----------------|
| **সময়/দিন** | ৪-৮ ঘণ্টা | ৩-৬ ঘণ্টা | ৩০ মি-২ ঘণ্টা | ১৫-৩০ মিনিট |
| **Stress** | খুব বেশি | বেশি | মধ্যম | কম |
| **Capital** | $5K+ | $1K+ | $500+ | $5K+ |
| **উপযুক্ত** | Pro | Full-time Trader | Part-timer | ধৈর্যশীল Investor |
| **Win Rate** | ৫৫-৭০% | ৪৫-৬০% | ৪০-৫৫% | ৩৫-৫০% |
| **R:R Ratio** | 1:1 থেকে 1:2 | 1:2 থেকে 1:3 | 1:2 থেকে 1:4 | 1:3 থেকে 1:10 |
| **Beginner?** | না | হয়তো | হ্যাঁ ✅ | হয়তো |

<Callout type="info" title="Beginner-দের জন্য সুপারিশ">
H4/D1 Timeframe-এ **Swing Trading** দিয়ে শুরু করুন। এটি আপনাকে চিন্তা, Analysis ও শেখার সময় দেয় — দ্রুত Market-এর চাপ ছাড়াই। Profitable হলে অন্য Style Explore করতে পারবেন।
</Callout>

---

## কীভাবে আপনার Style বেছে নেবেন

নিজেকে এই প্রশ্নগুলো করুন:

1. **দিনে কতটা সময় দিতে পারবেন?**
   - ১ ঘণ্টার কম → Swing/Position
   - ২-৪ ঘণ্টা → Day Trading
   - ৪+ ঘণ্টা → Scalping/Day Trading

2. **আমার ব্যক্তিত্ব কেমন?**
   - ধৈর্যশীল, পদ্ধতিগত → Swing/Position
   - Action-oriented, দ্রুত → Scalping/Day Trading
   - ভারসাম্যপূর্ণ → Day Trading/Swing

3. **আমার Risk Tolerance কতটা?**
   - রক্ষণশীল → Position/Swing
   - মধ্যম → Swing/Day Trading
   - আক্রমণাত্মক → Day Trading/Scalping

4. **আমার সময়সূচি কেমন?**
   - Full-time Job → Swing Trading
   - Part-time নমনীয় → Day Trading
   - Full-time Trader → যেকোনো Style

---

## সম্পর্কিত বিষয়

- [Trading কী?](/bn/academy/what-is-trading) — Trading Fundamental
- [Risk Management](/bn/academy/risk-management) — Capital সুরক্ষা
- [Trading Psychology](/bn/academy/trading-psychology) — Mindset আয়ত্ত
- [Trading Plan](/bn/academy/trading-plan) — System তৈরি
- [Forex Basics](/bn/academy/forex-basics) — Market শিখুন
`,
);

// ============================
// 4. BID-ASK SPREAD — EN
// ============================
writeMdx(
  "en",
  "academy",
  "bid-ask-spread",
  {
    title: "Bid, Ask & Spread — Complete Mechanics Guide",
    description:
      "Master bid-ask spread mechanics. Learn how spreads work, why they matter for your profitability, and how to minimize spread costs across different markets.",
    level: "beginner",
    order: 4,
  },
  `
## Understanding Bid, Ask & Spread

Every time you trade, you encounter the **bid-ask spread** — the difference between the buying and selling price. This is your first cost of trading and understanding it is essential for profitability.

<Callout type="info" title="Why This Matters">
The spread is an invisible cost that many beginners ignore. On every trade you enter, you start at a LOSS equal to the spread. You must overcome this cost before reaching profit.
</Callout>

---

## Core Definitions

### Bid Price
The price at which the market (broker) is willing to **BUY** from you. This is the price you receive when you SELL.

### Ask Price (Offer)
The price at which the market (broker) is willing to **SELL** to you. This is the price you pay when you BUY.

### Spread
The difference between Ask and Bid price: **Spread = Ask - Bid**

### Visual Example:

\`\`\`
EUR/USD Quote:
┌─────────────────────────────────────┐
│  BID: 1.0895  │  ASK: 1.0897      │
│  (Sell price) │  (Buy price)       │
│               │                     │
│         SPREAD: 2 pips              │
└─────────────────────────────────────┘

When you BUY: You enter at 1.0897 (Ask)
When you SELL: You enter at 1.0895 (Bid)
Your immediate cost: 2 pips
\`\`\`

---

## How Spread Affects Your Trades

### Going Long (Buy):
1. You BUY at the **Ask** price (higher)
2. To close, you SELL at the **Bid** price
3. Price must move UP by at least the spread to break even

### Going Short (Sell):
1. You SELL at the **Bid** price (lower)
2. To close, you BUY at the **Ask** price
3. Price must move DOWN by at least the spread to break even

### Practical Impact:

| Spread | Required Movement to Break Even | Impact on 10-pip Target |
|--------|--------------------------------|------------------------|
| 0.5 pips | Price must move 0.5 pips | 5% cost |
| 1.0 pips | Price must move 1.0 pips | 10% cost |
| 2.0 pips | Price must move 2.0 pips | 20% cost |
| 5.0 pips | Price must move 5.0 pips | 50% cost |

<Callout type="warning" title="Scalpers Beware">
If your average profit target is 10 pips and the spread is 2 pips, you're paying 20% of your profit to the broker on every trade. Over hundreds of trades, this compounds significantly.
</Callout>

---

## Types of Spreads

### Fixed Spread
- Remains constant regardless of market conditions
- Offered by market maker brokers
- Typically wider than variable spreads
- Advantage: Predictable costs
- Disadvantage: Usually higher overall

### Variable (Floating) Spread
- Changes based on market liquidity and volatility
- Offered by ECN/STP brokers
- Tighter during high liquidity, wider during low
- Advantage: Often cheaper during active sessions
- Disadvantage: Can widen dramatically during news

### Typical Spreads by Market:

| Instrument | Normal Spread | News Spread | Best Session |
|-----------|---------------|-------------|--------------|
| EUR/USD | 0.6-1.2 pips | 3-8 pips | London/NY overlap |
| GBP/USD | 0.8-1.8 pips | 5-15 pips | London session |
| USD/JPY | 0.7-1.4 pips | 3-10 pips | Tokyo/London |
| Gold (XAUUSD) | 15-30 cents | 50-150 cents | London/NY |
| S&P 500 | 0.3-0.8 points | 2-5 points | US session |
| Bitcoin | $5-30 | $50-200 | Variable |

---

## What Determines Spread Size?

### 1. Liquidity
- High liquidity = Tight spreads (EUR/USD, USD/JPY)
- Low liquidity = Wide spreads (exotic pairs, small-cap stocks)

### 2. Volatility
- Low volatility = Tighter spreads
- High volatility = Wider spreads (news events)

### 3. Trading Session
- Active session (London/NY) = Tightest spreads
- Off-hours (Asian session for EUR pairs) = Wider spreads
- Weekend gaps = Much wider

### 4. Broker Type
- ECN/STP brokers = Tighter spreads + commission
- Market makers = Wider spreads, no commission
- DMA brokers = Raw institutional spreads + fee

### 5. Account Type
- Standard accounts = Wider spreads, no commission
- Raw/ECN accounts = Tight spreads + commission per lot
- VIP accounts = Best spreads for high-volume traders

---

## Calculating Spread Cost

### Formula:
\`\`\`
Spread Cost = Spread (pips) × Pip Value × Position Size

Example:
- Pair: EUR/USD
- Spread: 1.2 pips
- Position: 1 standard lot (100,000 units)
- Pip value: $10

Spread Cost = 1.2 × $10 × 1 = $12 per trade (round trip)
\`\`\`

### Daily Cost for Active Traders:
\`\`\`
Daily Spread Cost = Avg Spread × Pip Value × Lot Size × Number of Trades

Example (Day Trader):
- 5 trades/day × $12 per trade = $60/day
- Monthly: $60 × 22 trading days = $1,320/month
- Yearly: $1,320 × 12 = $15,840/year
\`\`\`

<Callout type="warning" title="Hidden Cost">
A day trader making 5 trades daily on 1 standard lot can pay over $15,000/year just in spreads. This is why choosing a low-spread broker and timing your entries during tight-spread sessions is crucial.
</Callout>

---

## How to Minimize Spread Costs

1. **Trade major pairs** — EUR/USD, USD/JPY have the tightest spreads
2. **Trade during active sessions** — London and NY overlap (8:00-12:00 EST)
3. **Avoid trading during news** — Spreads widen 3-10x during high-impact events
4. **Use ECN/Raw spread accounts** — Pay commission but get tighter spreads
5. **Consider lot size** — Spread cost is per lot; trade appropriate sizes
6. **Don't scalp exotic pairs** — Spreads too wide for small targets
7. **Compare brokers** — Even 0.5 pip difference adds up over thousands of trades
8. **Use limit orders** — You choose the entry price (can enter at bid)

---

## Spread vs. Commission: Which is Better?

| Factor | Spread Only | Raw Spread + Commission |
|--------|-------------|------------------------|
| **Total Cost** | Often higher | Often lower |
| **Transparency** | Hidden in spread | Clear, separate fee |
| **Scalping** | Expensive | Better value |
| **Swing Trading** | Acceptable | Slight advantage |
| **Best For** | Beginners (simpler) | Active traders |

### Example Comparison:

**Spread Only Broker:** EUR/USD spread = 1.6 pips → Cost per lot = $16

**Raw + Commission Broker:** EUR/USD spread = 0.2 pips + $7 commission → Total cost = $2 + $7 = $9

**Savings: $7 per trade (43% cheaper)**

---

## Related Topics

- [Pips, Points & Terminology](/en/academy/pips-points-terminology) — Understanding price measurements
- [Trading Costs & Spreads](/en/academy/trading-costs-spreads) — Complete cost analysis
- [Order Types](/en/academy/order-types) — Execute at better prices
- [Forex Basics](/en/academy/forex-basics) — Market fundamentals
- [Position Sizing](/en/academy/position-sizing) — Calculate proper lot sizes
`,
);

// ============================
// 4. BID-ASK SPREAD — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "bid-ask-spread",
  {
    title: "Bid, Ask ও Spread — সম্পূর্ণ Mechanics গাইড",
    description:
      "Bid-Ask Spread Mechanics আয়ত্ত করুন। জানুন Spread কীভাবে কাজ করে, কেন এটি Profitability-র জন্য গুরুত্বপূর্ণ, এবং কীভাবে বিভিন্ন Market-এ Spread Cost কমাবেন।",
    level: "beginner",
    order: 4,
  },
  `
## Bid, Ask ও Spread বোঝা

প্রতিবার আপনি Trade করেন, আপনি **Bid-Ask Spread**-এর মুখোমুখি হন — কেনা ও বেচার Price-এর মধ্যে পার্থক্য। এটি আপনার Trading-এর প্রথম খরচ এবং Profitability-র জন্য এটি বোঝা অপরিহার্য।

<Callout type="info" title="কেন এটি গুরুত্বপূর্ণ">
Spread একটি অদৃশ্য খরচ যা অনেক Beginner উপেক্ষা করেন। প্রতিটি Trade-এ Entry করার সাথে সাথে আপনি Spread-এর সমান LOSS-এ শুরু করেন। Profit-এ পৌঁছানোর আগে এই খরচ কাটিয়ে উঠতে হবে।
</Callout>

---

## মূল সংজ্ঞা

### Bid Price
যে Price-এ Market (Broker) আপনার কাছ থেকে **কিনতে** প্রস্তুত। আপনি যখন SELL করেন তখন এই Price পান।

### Ask Price (Offer)
যে Price-এ Market (Broker) আপনার কাছে **বিক্রি করতে** প্রস্তুত। আপনি যখন BUY করেন তখন এই Price দেন।

### Spread
Ask ও Bid Price-এর পার্থক্য: **Spread = Ask - Bid**

### উদাহরণ:

\`\`\`
EUR/USD Quote:
┌─────────────────────────────────────┐
│  BID: 1.0895  │  ASK: 1.0897      │
│  (Sell Price) │  (Buy Price)       │
│               │                     │
│         SPREAD: 2 Pip               │
└─────────────────────────────────────┘

আপনি BUY করলে: 1.0897 (Ask)-এ Entry
আপনি SELL করলে: 1.0895 (Bid)-এ Entry
তাৎক্ষণিক খরচ: 2 Pip
\`\`\`

---

## Spread আপনার Trade কীভাবে প্রভাবিত করে

### Long (Buy) Position:
1. আপনি **Ask** Price-এ (বেশি) কিনছেন
2. Close করতে **Bid** Price-এ বিক্রি করবেন
3. Break Even-এ পৌঁছাতে Price কমপক্ষে Spread-এর সমান UP হতে হবে

### Short (Sell) Position:
1. আপনি **Bid** Price-এ (কম) বিক্রি করছেন
2. Close করতে **Ask** Price-এ কিনবেন
3. Break Even-এ পৌঁছাতে Price কমপক্ষে Spread-এর সমান DOWN হতে হবে

### ব্যবহারিক প্রভাব:

| Spread | Break Even-এ প্রয়োজনীয় Movement | ১০-Pip Target-এ প্রভাব |
|--------|--------------------------------|------------------------|
| 0.5 Pip | Price 0.5 Pip মুভ করতে হবে | ৫% খরচ |
| 1.0 Pip | Price 1.0 Pip মুভ করতে হবে | ১০% খরচ |
| 2.0 Pip | Price 2.0 Pip মুভ করতে হবে | ২০% খরচ |
| 5.0 Pip | Price 5.0 Pip মুভ করতে হবে | ৫০% খরচ |

<Callout type="warning" title="Scalper-দের জন্য সতর্কতা">
আপনার গড় Profit Target যদি ১০ Pip হয় এবং Spread ২ Pip, তাহলে প্রতিটি Trade-এ আপনার Profit-এর ২০% Broker-কে দিচ্ছেন। শত শত Trade-এ এটি উল্লেখযোগ্যভাবে জমা হয়।
</Callout>

---

## Spread-এর প্রকারভেদ

### Fixed Spread
- Market Condition নির্বিশেষে স্থির থাকে
- Market Maker Broker অফার করে
- সাধারণত Variable Spread-এর চেয়ে চওড়া
- সুবিধা: পূর্বানুমানযোগ্য খরচ
- অসুবিধা: সাধারণত সামগ্রিকভাবে বেশি

### Variable (Floating) Spread
- Market Liquidity ও Volatility-র উপর ভিত্তি করে পরিবর্তিত হয়
- ECN/STP Broker অফার করে
- High Liquidity-তে সংকীর্ণ, Low-তে প্রশস্ত
- সুবিধা: Active Session-এ প্রায়ই সস্তা
- অসুবিধা: News-এর সময় নাটকীয়ভাবে বাড়তে পারে

### Market অনুযায়ী সাধারণ Spread:

| Instrument | Normal Spread | News Spread | সেরা Session |
|-----------|---------------|-------------|--------------|
| EUR/USD | 0.6-1.2 Pip | 3-8 Pip | London/NY Overlap |
| GBP/USD | 0.8-1.8 Pip | 5-15 Pip | London Session |
| USD/JPY | 0.7-1.4 Pip | 3-10 Pip | Tokyo/London |
| Gold (XAUUSD) | 15-30 Cent | 50-150 Cent | London/NY |
| S&P 500 | 0.3-0.8 Point | 2-5 Point | US Session |
| Bitcoin | $5-30 | $50-200 | Variable |

---

## Spread-এর আকার কী নির্ধারণ করে?

### ১. Liquidity
- বেশি Liquidity = সংকীর্ণ Spread (EUR/USD, USD/JPY)
- কম Liquidity = প্রশস্ত Spread (Exotic Pair, Small-cap Stock)

### ২. Volatility
- কম Volatility = সংকীর্ণ Spread
- বেশি Volatility = প্রশস্ত Spread (News Event)

### ৩. Trading Session
- Active Session (London/NY) = সবচেয়ে সংকীর্ণ Spread
- Off-hours (EUR Pair-এ Asian Session) = প্রশস্ত Spread
- Weekend Gap = অনেক বেশি প্রশস্ত

### ৪. Broker-এর ধরন
- ECN/STP Broker = সংকীর্ণ Spread + Commission
- Market Maker = প্রশস্ত Spread, Commission নেই
- DMA Broker = Raw Institutional Spread + Fee

---

## Spread Cost গণনা

### সূত্র:
\`\`\`
Spread Cost = Spread (Pip) × Pip Value × Position Size

উদাহরণ:
- Pair: EUR/USD
- Spread: 1.2 Pip
- Position: 1 Standard Lot (100,000 Unit)
- Pip Value: $10

Spread Cost = 1.2 × $10 × 1 = $12 প্রতি Trade (Round Trip)
\`\`\`

### Active Trader-এর দৈনিক খরচ:
\`\`\`
Daily Spread Cost = গড় Spread × Pip Value × Lot Size × Trade সংখ্যা

উদাহরণ (Day Trader):
- দিনে ৫টি Trade × প্রতি Trade $12 = $60/দিন
- মাসিক: $60 × 22 Trading Day = $1,320/মাস
- বাৎসরিক: $1,320 × 12 = $15,840/বছর
\`\`\`

<Callout type="warning" title="গোপন খরচ">
একজন Day Trader যিনি ১ Standard Lot-এ দিনে ৫টি Trade করেন, শুধু Spread-এ বছরে $15,000 এর বেশি খরচ করতে পারেন। এজন্য Low-spread Broker বেছে নেওয়া এবং Tight-spread Session-এ Entry করা অত্যন্ত জরুরি।
</Callout>

---

## Spread Cost কীভাবে কমাবেন

1. **Major Pair Trade করুন** — EUR/USD, USD/JPY-এ সবচেয়ে সংকীর্ণ Spread
2. **Active Session-এ Trade করুন** — London ও NY Overlap (8:00-12:00 EST)
3. **News-এর সময় Trading এড়িয়ে চলুন** — High-impact Event-এ Spread ৩-১০ গুণ বাড়ে
4. **ECN/Raw Spread Account ব্যবহার করুন** — Commission দিন কিন্তু সংকীর্ণ Spread পান
5. **Lot Size বিবেচনা করুন** — Spread Cost প্রতি Lot; উপযুক্ত Size-এ Trade করুন
6. **Exotic Pair-এ Scalp করবেন না** — ছোট Target-এর জন্য Spread খুব চওড়া
7. **Broker তুলনা করুন** — ০.৫ Pip পার্থক্যও হাজার Trade-এ অনেক বড়
8. **Limit Order ব্যবহার করুন** — আপনি Entry Price বেছে নিন (Bid-এ Enter করতে পারেন)

---

## Spread vs. Commission: কোনটি ভালো?

| বিষয় | শুধু Spread | Raw Spread + Commission |
|--------|-------------|------------------------|
| **মোট খরচ** | প্রায়ই বেশি | প্রায়ই কম |
| **স্বচ্ছতা** | Spread-এ লুকানো | স্পষ্ট, আলাদা Fee |
| **Scalping** | ব্যয়বহুল | ভালো Value |
| **Swing Trading** | গ্রহণযোগ্য | সামান্য সুবিধা |
| **উপযুক্ত** | Beginner (সহজ) | Active Trader |

---

## সম্পর্কিত বিষয়

- [Pips, Points ও Terminology](/bn/academy/pips-points-terminology) — Price পরিমাপ বোঝা
- [Trading Costs ও Spreads](/bn/academy/trading-costs-spreads) — সম্পূর্ণ খরচ বিশ্লেষণ
- [Order Types](/bn/academy/order-types) — ভালো Price-এ Execute করুন
- [Forex Basics](/bn/academy/forex-basics) — Market Fundamental
- [Position Sizing](/bn/academy/position-sizing) — সঠিক Lot Size গণনা
`,
);

// ============================
// 5. PIPS, POINTS & TERMINOLOGY — EN
// ============================
writeMdx(
  "en",
  "academy",
  "pips-points-terminology",
  {
    title: "Pips, Points & Trading Terminology — Complete Guide",
    description:
      "Master essential trading terminology: pips, pipettes, points, ticks, lot sizes, leverage, margin, and all the key terms every trader must know.",
    level: "beginner",
    order: 5,
  },
  `
## Pips, Points & Essential Trading Terminology

Understanding trading terminology is the foundation of market literacy. Without knowing what a pip is, how lots work, or what leverage means, you cannot properly analyze trades or manage risk.

<Callout type="info" title="Why Terminology Matters">
Every trading discussion, analysis, and strategy uses standardized terminology. Misunderstanding a single term can lead to incorrect position sizing, miscalculated risk, or missed opportunities.
</Callout>

---

## What is a Pip?

A **Pip** (Percentage in Point / Price Interest Point) is the **smallest standard unit of price movement** in forex trading.

### Pip Measurement:
- **Most currency pairs:** 4th decimal place (0.000**1**)
- **JPY pairs:** 2nd decimal place (0.0**1**)

### Examples:

| Pair | Movement | Pip Change |
|------|----------|------------|
| EUR/USD | 1.0900 → 1.0910 | +10 pips |
| EUR/USD | 1.0900 → 1.0885 | -15 pips |
| USD/JPY | 150.00 → 150.50 | +50 pips |
| USD/JPY | 150.00 → 149.70 | -30 pips |
| GBP/USD | 1.2700 → 1.2745 | +45 pips |

---

## Pipettes (Fractional Pips)

A **Pipette** is 1/10th of a pip — the 5th decimal place for most pairs, or 3rd for JPY pairs.

\`\`\`
EUR/USD: 1.09003 → the "3" is a pipette
USD/JPY: 150.003 → the "3" is a pipette

10 pipettes = 1 pip
\`\`\`

Many modern brokers show pipette-level pricing for more precise entries and exits.

---

## Points vs. Pips

| Term | Used In | Definition |
|------|---------|------------|
| **Pip** | Forex | 4th decimal (0.0001) or 2nd for JPY |
| **Point** | Indices, Stocks | Minimum price increment for that instrument |
| **Tick** | Futures | Minimum price movement for futures contracts |
| **Cent** | Commodities (Gold) | $0.01 movement |

### Examples:
- **S&P 500:** 1 point = $1 per contract
- **Gold:** 1 point = $1 (but measured in cents: $0.01 = 1 cent)
- **Bitcoin:** 1 point = $1
- **ES Futures:** 1 tick = 0.25 points = $12.50 per contract

---

## Pip Value Calculation

The monetary value of one pip depends on your **lot size** and the **currency pair**:

### Standard Pip Values (USD pairs):

| Lot Size | Name | Units | Pip Value |
|----------|------|-------|-----------|
| 1.00 | Standard Lot | 100,000 | $10.00 |
| 0.10 | Mini Lot | 10,000 | $1.00 |
| 0.01 | Micro Lot | 1,000 | $0.10 |
| 0.001 | Nano Lot | 100 | $0.01 |

### Pip Value Formula:
\`\`\`
Pip Value = (Pip Size ÷ Exchange Rate) × Lot Size in Units

Example (EUR/USD at 1.0900):
Pip Value = (0.0001 ÷ 1.0900) × 100,000 = $9.17 ≈ $10

Example (USD/JPY at 150.00):
Pip Value = (0.01 ÷ 150.00) × 100,000 = $6.67
\`\`\`

<Callout type="warning" title="Important">
Pip value varies by pair and exchange rate. For pairs where USD is the quote currency (EUR/USD, GBP/USD), pip value is always $10 per standard lot. For other pairs, it fluctuates.
</Callout>

---

## Lot Sizes Explained

### What is a Lot?

A **Lot** is the standardized unit for measuring trade size. It determines how much of an asset you're buying or selling.

### Forex Lot Sizes:

| Lot Type | Size | 1 Pip Worth | Suitable For |
|----------|------|-------------|--------------|
| **Standard** (1.0) | 100,000 units | $10 | $10,000+ accounts |
| **Mini** (0.10) | 10,000 units | $1 | $1,000-10,000 accounts |
| **Micro** (0.01) | 1,000 units | $0.10 | $100-1,000 accounts |
| **Nano** (0.001) | 100 units | $0.01 | Demo/practice |

### Position Sizing Example:
\`\`\`
Account: $5,000
Risk: 1% = $50
Stop Loss: 25 pips
Pip Value needed: $50 ÷ 25 = $2 per pip
Lot Size: $2 ÷ $10 = 0.20 lots (2 mini lots)
\`\`\`

---

## Essential Trading Terms

### Order & Execution Terms:

| Term | Definition |
|------|-----------|
| **Market Order** | Buy/sell at current price immediately |
| **Limit Order** | Buy/sell at specified price or better |
| **Stop Order** | Buy/sell when price reaches trigger level |
| **Stop Loss (SL)** | Order to close position at maximum loss |
| **Take Profit (TP)** | Order to close position at target profit |
| **Slippage** | Difference between expected and actual fill price |
| **Fill** | Confirmation that your order has been executed |

### Position Terms:

| Term | Definition |
|------|-----------|
| **Long** | Buying an asset (profit when price rises) |
| **Short** | Selling an asset (profit when price falls) |
| **Entry** | Price where you open a position |
| **Exit** | Price where you close a position |
| **Open Position** | Active trade that hasn't been closed |
| **Flat** | No open positions |

### Risk & Money Terms:

| Term | Definition |
|------|-----------|
| **Leverage** | Borrowed capital to control larger positions |
| **Margin** | Deposit required to open leveraged position |
| **Margin Call** | Warning that margin is running low |
| **Stop Out** | Broker forcibly closes positions |
| **Drawdown** | Peak-to-trough decline in account equity |
| **Risk-Reward (R:R)** | Ratio of potential loss vs. potential gain |
| **Win Rate** | Percentage of trades that are profitable |
| **Equity** | Account balance + floating P&L |

### Market Analysis Terms:

| Term | Definition |
|------|-----------|
| **Support** | Price level where buying pressure is strong |
| **Resistance** | Price level where selling pressure is strong |
| **Trend** | General direction of price movement |
| **Bullish** | Expecting price to rise |
| **Bearish** | Expecting price to fall |
| **Consolidation** | Price moving sideways in a range |
| **Breakout** | Price moving beyond support/resistance |
| **Pullback** | Temporary reversal against the trend |
| **Volatility** | Degree of price fluctuation |
| **Liquidity** | Ease of buying/selling without impacting price |

---

## Leverage & Margin Explained (Brief)

### Leverage:
Allows you to control a large position with small capital.

\`\`\`
Leverage 1:100 means:
- Your capital: $1,000
- You control: $100,000 (100× your money)
- 1 standard lot on EUR/USD possible

BUT: 1% adverse move = $1,000 loss = YOUR ENTIRE ACCOUNT
\`\`\`

### Margin:
The collateral (deposit) required to open a leveraged trade.

\`\`\`
Margin Required = Position Size ÷ Leverage

Example:
- Position: $100,000 (1 standard lot)
- Leverage: 1:100
- Margin Required: $100,000 ÷ 100 = $1,000
\`\`\`

---

## Key Formulas Every Trader Must Know

| Formula | Calculation |
|---------|------------|
| **Pip Value** | (Pip Size ÷ Rate) × Lot Units |
| **Position Size** | (Risk $) ÷ (SL pips × Pip Value) |
| **Risk %** | (SL pips × Pip Value × Lots) ÷ Account × 100 |
| **Risk-Reward** | TP distance ÷ SL distance |
| **Margin Required** | Position Size ÷ Leverage |
| **Profit/Loss** | Pips gained/lost × Pip Value × Lots |
| **Break Even** | Entry ± (Spread + Commission in pips) |

---

## Related Topics

- [Bid, Ask & Spread](/en/academy/bid-ask-spread) — Understanding price quotes
- [Position Sizing](/en/academy/position-sizing) — Calculate proper trade sizes
- [Margin & Leverage](/en/academy/margin-leverage) — Risk of borrowed capital
- [Forex Basics](/en/academy/forex-basics) — Complete forex guide
- [Order Types](/en/academy/order-types) — All order types explained
`,
);

// ============================
// 5. PIPS, POINTS & TERMINOLOGY — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "pips-points-terminology",
  {
    title: "Pip, Point ও Trading Terminology — সম্পূর্ণ গাইড",
    description:
      "অত্যাবশ্যকীয় Trading Terminology আয়ত্ত করুন: Pip, Pipette, Point, Tick, Lot Size, Leverage, Margin এবং প্রতিটি Trader-এর জানা প্রয়োজনীয় সব Term।",
    level: "beginner",
    order: 5,
  },
  `
## Pip, Point ও অত্যাবশ্যকীয় Trading Terminology

Trading Terminology বোঝা হলো Market Literacy-র ভিত্তি। Pip কী, Lot কীভাবে কাজ করে, বা Leverage-এর অর্থ কী না জানলে আপনি সঠিকভাবে Trade Analysis বা Risk Manage করতে পারবেন না।

<Callout type="info" title="Terminology কেন গুরুত্বপূর্ণ">
প্রতিটি Trading আলোচনা, Analysis এবং Strategy-তে স্ট্যান্ডার্ড Terminology ব্যবহৃত হয়। একটি মাত্র Term ভুল বুঝলে ভুল Position Sizing, ভুল Risk গণনা, বা সুযোগ হাতছাড়া হতে পারে।
</Callout>

---

## Pip কী?

**Pip** (Percentage in Point / Price Interest Point) হলো Forex Trading-এ **Price Movement-এর সবচেয়ে ছোট মানক একক**।

### Pip পরিমাপ:
- **বেশিরভাগ Currency Pair:** ৪র্থ Decimal Place (0.000**1**)
- **JPY Pair:** ২য় Decimal Place (0.0**1**)

### উদাহরণ:

| Pair | Movement | Pip পরিবর্তন |
|------|----------|------------|
| EUR/USD | 1.0900 → 1.0910 | +10 Pip |
| EUR/USD | 1.0900 → 1.0885 | -15 Pip |
| USD/JPY | 150.00 → 150.50 | +50 Pip |
| USD/JPY | 150.00 → 149.70 | -30 Pip |
| GBP/USD | 1.2700 → 1.2745 | +45 Pip |

---

## Pipette (Fractional Pip)

**Pipette** হলো ১ Pip-এর ১/১০ ভাগ — বেশিরভাগ Pair-এ ৫ম Decimal Place, JPY-তে ৩য়।

\`\`\`
EUR/USD: 1.09003 → "3" হলো একটি Pipette
USD/JPY: 150.003 → "3" হলো একটি Pipette

10 Pipette = 1 Pip
\`\`\`

আধুনিক Broker-রা আরও সুনির্দিষ্ট Entry ও Exit-এর জন্য Pipette-level Pricing দেখান।

---

## Point vs. Pip

| Term | ব্যবহৃত হয় | সংজ্ঞা |
|------|------------|--------|
| **Pip** | Forex | ৪র্থ Decimal (0.0001) বা JPY-তে ২য় |
| **Point** | Index, Stock | সেই Instrument-এর Minimum Price Increment |
| **Tick** | Futures | Futures Contract-এর Minimum Price Movement |
| **Cent** | Commodity (Gold) | $0.01 Movement |

### উদাহরণ:
- **S&P 500:** 1 Point = প্রতি Contract $1
- **Gold:** 1 Point = $1 (কিন্তু Cent-এ পরিমাপ: $0.01 = 1 Cent)
- **Bitcoin:** 1 Point = $1
- **ES Futures:** 1 Tick = 0.25 Point = প্রতি Contract $12.50

---

## Pip Value গণনা

এক Pip-এর আর্থিক মূল্য নির্ভর করে আপনার **Lot Size** ও **Currency Pair**-এর উপর:

### Standard Pip Value (USD Pair):

| Lot Size | নাম | Unit | Pip Value |
|----------|-----|------|-----------|
| 1.00 | Standard Lot | 100,000 | $10.00 |
| 0.10 | Mini Lot | 10,000 | $1.00 |
| 0.01 | Micro Lot | 1,000 | $0.10 |
| 0.001 | Nano Lot | 100 | $0.01 |

### Pip Value সূত্র:
\`\`\`
Pip Value = (Pip Size ÷ Exchange Rate) × Lot Unit

উদাহরণ (EUR/USD at 1.0900):
Pip Value = (0.0001 ÷ 1.0900) × 100,000 = $9.17 ≈ $10

উদাহরণ (USD/JPY at 150.00):
Pip Value = (0.01 ÷ 150.00) × 100,000 = $6.67
\`\`\`

<Callout type="warning" title="গুরুত্বপূর্ণ">
Pip Value Pair ও Exchange Rate অনুযায়ী পরিবর্তিত হয়। যেসব Pair-এ USD Quote Currency (EUR/USD, GBP/USD), সেখানে Pip Value সবসময় Standard Lot-এ $10। অন্যান্য Pair-এ এটি ওঠানামা করে।
</Callout>

---

## Lot Size ব্যাখ্যা

### Lot কী?

**Lot** হলো Trade Size পরিমাপের মানক একক। এটি নির্ধারণ করে আপনি কতটুকু Asset কিনছেন বা বিক্রি করছেন।

### Forex Lot Size:

| Lot Type | Size | ১ Pip-এর মূল্য | উপযুক্ত |
|----------|------|----------------|----------|
| **Standard** (1.0) | 100,000 Unit | $10 | $10,000+ Account |
| **Mini** (0.10) | 10,000 Unit | $1 | $1,000-10,000 Account |
| **Micro** (0.01) | 1,000 Unit | $0.10 | $100-1,000 Account |
| **Nano** (0.001) | 100 Unit | $0.01 | Demo/Practice |

### Position Sizing উদাহরণ:
\`\`\`
Account: $5,000
Risk: 1% = $50
Stop Loss: 25 Pip
প্রয়োজনীয় Pip Value: $50 ÷ 25 = $2 প্রতি Pip
Lot Size: $2 ÷ $10 = 0.20 Lot (2 Mini Lot)
\`\`\`

---

## অত্যাবশ্যকীয় Trading Term

### Order ও Execution Term:

| Term | সংজ্ঞা |
|------|--------|
| **Market Order** | বর্তমান Price-এ তাৎক্ষণিক Buy/Sell |
| **Limit Order** | নির্দিষ্ট Price বা তার চেয়ে ভালোতে Buy/Sell |
| **Stop Order** | Price Trigger Level-এ পৌঁছালে Buy/Sell |
| **Stop Loss (SL)** | Maximum Loss-এ Position Close-এর Order |
| **Take Profit (TP)** | Target Profit-এ Position Close-এর Order |
| **Slippage** | প্রত্যাশিত ও প্রকৃত Fill Price-এর পার্থক্য |
| **Fill** | আপনার Order Execute হয়েছে — এই নিশ্চিতকরণ |

### Position Term:

| Term | সংজ্ঞা |
|------|--------|
| **Long** | Asset কেনা (Price বাড়লে Profit) |
| **Short** | Asset বিক্রি (Price কমলে Profit) |
| **Entry** | যে Price-এ Position Open করেন |
| **Exit** | যে Price-এ Position Close করেন |
| **Open Position** | Active Trade যা এখনো Close হয়নি |
| **Flat** | কোনো Open Position নেই |

### Risk ও Money Term:

| Term | সংজ্ঞা |
|------|--------|
| **Leverage** | বড় Position Control-এর জন্য ধার করা Capital |
| **Margin** | Leveraged Position Open করতে প্রয়োজনীয় Deposit |
| **Margin Call** | Margin কমে যাওয়ার সতর্কতা |
| **Stop Out** | Broker জোর করে Position Close করে |
| **Drawdown** | Account Equity-র Peak-to-trough পতন |
| **Risk-Reward (R:R)** | সম্ভাব্য Loss vs. সম্ভাব্য Gain-এর অনুপাত |
| **Win Rate** | Profitable Trade-এর শতাংশ |
| **Equity** | Account Balance + Floating P&L |

### Market Analysis Term:

| Term | সংজ্ঞা |
|------|--------|
| **Support** | যে Price Level-এ Buying Pressure শক্তিশালী |
| **Resistance** | যে Price Level-এ Selling Pressure শক্তিশালী |
| **Trend** | Price Movement-এর সাধারণ দিক |
| **Bullish** | Price বাড়বে এই প্রত্যাশা |
| **Bearish** | Price কমবে এই প্রত্যাশা |
| **Consolidation** | Price একটি Range-এ পাশে চলছে |
| **Breakout** | Price Support/Resistance ভেদ করছে |
| **Pullback** | Trend-এর বিপরীতে সাময়িক Reversal |
| **Volatility** | Price ওঠানামার মাত্রা |
| **Liquidity** | Price প্রভাবিত না করে কেনা-বেচার সহজতা |

---

## Leverage ও Margin সংক্ষেপে

### Leverage:
ছোট Capital দিয়ে বড় Position Control করতে দেয়।

\`\`\`
Leverage 1:100 মানে:
- আপনার Capital: $1,000
- আপনি Control করছেন: $100,000 (আপনার অর্থের 100×)
- EUR/USD-এ 1 Standard Lot সম্ভব

কিন্তু: 1% বিপরীত Movement = $1,000 Loss = আপনার সম্পূর্ণ ACCOUNT
\`\`\`

### Margin:
Leveraged Trade Open করতে প্রয়োজনীয় জামানত (Deposit)।

\`\`\`
Margin Required = Position Size ÷ Leverage

উদাহরণ:
- Position: $100,000 (1 Standard Lot)
- Leverage: 1:100
- Margin Required: $100,000 ÷ 100 = $1,000
\`\`\`

---

## প্রতিটি Trader-এর জানা উচিত এমন মূল সূত্র

| সূত্র | গণনা |
|--------|------|
| **Pip Value** | (Pip Size ÷ Rate) × Lot Unit |
| **Position Size** | (Risk $) ÷ (SL Pip × Pip Value) |
| **Risk %** | (SL Pip × Pip Value × Lot) ÷ Account × 100 |
| **Risk-Reward** | TP Distance ÷ SL Distance |
| **Margin Required** | Position Size ÷ Leverage |
| **Profit/Loss** | Pip Gained/Lost × Pip Value × Lot |
| **Break Even** | Entry ± (Spread + Commission in Pip) |

---

## সম্পর্কিত বিষয়

- [Bid, Ask ও Spread](/bn/academy/bid-ask-spread) — Price Quote বোঝা
- [Position Sizing](/bn/academy/position-sizing) — সঠিক Trade Size গণনা
- [Margin ও Leverage](/bn/academy/margin-leverage) — ধার করা Capital-এর Risk
- [Forex Basics](/bn/academy/forex-basics) — সম্পূর্ণ Forex গাইড
- [Order Types](/bn/academy/order-types) — সব Order Type ব্যাখ্যা
`,
);

// ============================
// 6. MARGIN & LEVERAGE — EN
// ============================
writeMdx(
  "en",
  "academy",
  "margin-leverage",
  {
    title: "Margin & Leverage — Complete Risk Guide",
    description:
      "Understand how margin and leverage work in trading. Learn leverage ratios, margin requirements, margin calls, and how to use leverage safely without blowing your account.",
    level: "beginner",
    order: 6,
  },
  `
## Margin & Leverage Explained

Leverage is the **most powerful and most dangerous** tool in trading. It can multiply your profits — but equally multiply your losses. Understanding margin and leverage is essential for capital preservation.

<Callout type="warning" title="Critical Warning">
Leverage is the #1 reason retail traders blow their accounts. A trader using 100:1 leverage on a $1,000 account can lose everything with just a 1% adverse move. Use leverage responsibly.
</Callout>

---

## What is Leverage?

Leverage allows you to control a **larger position than your actual capital** by borrowing from your broker.

### How It Works:

\`\`\`
Without Leverage (1:1):
- Your capital: $10,000
- Position size: $10,000
- 1% move = $100 profit/loss (1% of account)

With 100:1 Leverage:
- Your capital: $10,000
- Position size: $1,000,000
- 1% move = $10,000 profit/loss (100% of account!)
\`\`\`

### Leverage Ratios:

| Leverage | Margin Required | $1,000 Controls | 1% Move Impact |
|----------|----------------|-----------------|----------------|
| 1:1 | 100% | $1,000 | $10 (1%) |
| 5:1 | 20% | $5,000 | $50 (5%) |
| 10:1 | 10% | $10,000 | $100 (10%) |
| 50:1 | 2% | $50,000 | $500 (50%) |
| 100:1 | 1% | $100,000 | $1,000 (100%) |
| 500:1 | 0.2% | $500,000 | $5,000 (500%!) |

---

## What is Margin?

Margin is the **collateral deposit** your broker requires to open and maintain a leveraged position. It's NOT a fee — it's a security deposit that gets returned when you close the position.

### Types of Margin:

| Term | Definition |
|------|-----------|
| **Required Margin** | Amount needed to open a specific position |
| **Used Margin** | Total margin currently tied up in open positions |
| **Free Margin** | Available capital for new positions (Equity - Used Margin) |
| **Margin Level** | (Equity ÷ Used Margin) × 100% |
| **Margin Call** | Warning when margin level drops below broker's threshold |
| **Stop Out** | Broker forcibly closes positions when margin is too low |

### Margin Calculation:

\`\`\`
Required Margin = Position Size ÷ Leverage

Examples:
- 1 lot EUR/USD at 100:1 = $100,000 ÷ 100 = $1,000 margin
- 0.5 lot EUR/USD at 50:1 = $50,000 ÷ 50 = $1,000 margin
- 0.1 lot EUR/USD at 100:1 = $10,000 ÷ 100 = $100 margin
\`\`\`

---

## Margin Call & Stop Out

### Margin Call:
A warning from your broker that your margin level has dropped below a certain threshold (typically 100% or 80%).

### Stop Out:
When margin level falls further (typically 50% or 20%), the broker automatically closes your losing positions to prevent negative balance.

### Example Scenario:

\`\`\`
Account: $5,000
Position: 2 standard lots EUR/USD (leverage 100:1)
Required Margin: $2,000
Free Margin: $3,000

Price moves against you 50 pips:
Loss = 50 pips × $10 × 2 lots = $1,000
Equity: $5,000 - $1,000 = $4,000
Margin Level: ($4,000 ÷ $2,000) × 100 = 200% ✅ Safe

Price moves 150 pips against you:
Loss = 150 × $10 × 2 = $3,000
Equity: $5,000 - $3,000 = $2,000
Margin Level: ($2,000 ÷ $2,000) × 100 = 100% ⚠️ MARGIN CALL

Price moves 200 pips against you:
Loss = 200 × $10 × 2 = $4,000
Equity: $5,000 - $4,000 = $1,000
Margin Level: ($1,000 ÷ $2,000) × 100 = 50% 🛑 STOP OUT
\`\`\`

---

## Regulatory Leverage Limits

Different regions have different maximum leverage rules:

| Region | Regulator | Max Leverage (Forex) | Max Leverage (Crypto) |
|--------|-----------|---------------------|----------------------|
| EU | ESMA | 30:1 | 2:1 |
| UK | FCA | 30:1 | 2:1 |
| USA | NFA/CFTC | 50:1 | Not available |
| Australia | ASIC | 30:1 | 2:1 |
| Japan | FSA | 25:1 | 2:1 |
| Offshore | Various | 500:1+ | 125:1+ |

<Callout type="info" title="Why Regulations Exist">
Regulatory leverage limits exist to protect retail traders from themselves. Before these rules, account blow-up rates were significantly higher. Lower leverage = safer trading for most people.
</Callout>

---

## Safe Leverage Usage

### The Real Leverage Formula:

\`\`\`
Effective Leverage = Total Position Value ÷ Account Equity

Example:
- Account: $10,000
- Position: 0.5 lot EUR/USD = $50,000
- Effective Leverage: $50,000 ÷ $10,000 = 5:1

This is SAFE leverage (even though broker offers 100:1)
\`\`\`

### Recommended Effective Leverage:

| Trader Level | Max Effective Leverage | Reasoning |
|-------------|----------------------|-----------|
| Beginner | 2:1 to 3:1 | Learning, mistake tolerance |
| Intermediate | 3:1 to 5:1 | Proven system, building confidence |
| Advanced | 5:1 to 10:1 | Consistent track record |
| Professional | 10:1 to 20:1 | Strong risk management |

### Golden Rule:
> **Just because your broker offers 500:1 leverage doesn't mean you should use it.** Think of available leverage as a emergency reserve, not a daily tool.

---

## Leverage Impact on Risk Management

### Without Proper Position Sizing:

\`\`\`
Account: $1,000, Leverage: 100:1
Bad Trader: Opens 1 standard lot ($100,000)
- Uses 100% of available leverage
- 10 pip stop loss = $100 loss = 10% of account
- 50 pip adverse move = $500 = 50% of account
- 100 pip adverse move = ACCOUNT BLOWN
\`\`\`

### With Proper Position Sizing:

\`\`\`
Account: $1,000, Leverage: 100:1
Smart Trader: Opens 0.02 lots ($2,000)
- Uses 2:1 effective leverage
- 50 pip stop loss = $10 loss = 1% of account
- Can survive 50 consecutive losses
- Still has leverage available for proper sizing
\`\`\`

---

## Leverage by Market

| Market | Typical Leverage | Pip Value Impact |
|--------|-----------------|-----------------|
| Forex Majors | 30:1 to 500:1 | Moderate |
| Forex Exotics | 20:1 to 100:1 | Higher |
| Gold | 20:1 to 200:1 | Very High ($10/pip at 1 lot) |
| Indices | 20:1 to 200:1 | High |
| Stocks | 2:1 to 5:1 | Moderate |
| Crypto | 2:1 to 125:1 | Extreme |

---

## Common Leverage Mistakes

| Mistake | Consequence | Solution |
|---------|-------------|----------|
| Max leverage on every trade | Frequent account blow-ups | Use 2-5:1 effective leverage |
| No stop loss with leverage | Unlimited loss potential | Always use SL |
| Multiple large positions | Concentrated risk | Limit total exposure to 5% |
| Ignoring margin level | Surprise stop-outs | Monitor margin level always |
| High leverage + news trading | Massive slippage losses | Reduce size before news |
| Scaling without adjusting | Overleveraged after adds | Recalculate after each add |

---

## Practical Leverage Framework

### For a $5,000 Account:

| Risk Level | Lot Size | Effective Leverage | 50-pip SL Cost | % Risk |
|-----------|----------|-------------------|----------------|--------|
| Conservative | 0.05 | 1:1 | $25 | 0.5% |
| Standard | 0.10 | 2:1 | $50 | 1.0% |
| Moderate | 0.20 | 4:1 | $100 | 2.0% |
| Aggressive | 0.50 | 10:1 | $250 | 5.0% |
| Dangerous | 1.00 | 20:1 | $500 | 10% ⚠️ |

<Callout type="info" title="Recommended Approach">
Start with the "Standard" row (1% risk per trade, 2:1 effective leverage). This gives you room to be wrong 50 times before losing 50% of your account — plenty of room to learn and improve.
</Callout>

---

## Summary

- **Leverage** amplifies both profits AND losses
- **Margin** is collateral, not a fee
- **Margin Call** is a warning; **Stop Out** is forced closure
- **Available leverage ≠ leverage you should use**
- **Effective leverage of 2:1 to 5:1** is safe for most traders
- **Position sizing** determines your REAL leverage, not broker's maximum
- **Risk 1-2% per trade** regardless of available leverage

---

## Related Topics

- [Risk Management](/en/academy/risk-management) — Complete capital protection guide
- [Position Sizing](/en/academy/position-sizing) — Calculate exact lot sizes
- [Pips & Terminology](/en/academy/pips-points-terminology) — Understanding measurements
- [Forex Basics](/en/academy/forex-basics) — Market fundamentals
- [Trading Psychology](/en/academy/trading-psychology) — Avoid leverage temptation
`,
);

// ============================
// 6. MARGIN & LEVERAGE — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "margin-leverage",
  {
    title: "Margin ও Leverage — সম্পূর্ণ Risk গাইড",
    description:
      "Trading-এ Margin ও Leverage কীভাবে কাজ করে বুঝুন। Leverage Ratio, Margin Requirement, Margin Call এবং Account না উড়িয়ে নিরাপদে Leverage ব্যবহার শিখুন।",
    level: "beginner",
    order: 6,
  },
  `
## Margin ও Leverage ব্যাখ্যা

Leverage হলো Trading-এর **সবচেয়ে শক্তিশালী এবং সবচেয়ে বিপজ্জনক** হাতিয়ার। এটি আপনার Profit বাড়াতে পারে — কিন্তু সমানভাবে Loss-ও বাড়াতে পারে। Capital Preservation-এর জন্য Margin ও Leverage বোঝা অপরিহার্য।

<Callout type="warning" title="গুরুত্বপূর্ণ সতর্কতা">
Leverage হলো Retail Trader-দের Account Blow করার #১ কারণ। $1,000 Account-এ 100:1 Leverage ব্যবহারকারী একজন Trader মাত্র ১% বিপরীত Movement-এ সবকিছু হারাতে পারেন। দায়িত্বের সাথে Leverage ব্যবহার করুন।
</Callout>

---

## Leverage কী?

Leverage আপনাকে আপনার Broker থেকে ধার নিয়ে **প্রকৃত Capital-এর চেয়ে বড় Position Control** করতে দেয়।

### কীভাবে কাজ করে:

\`\`\`
Leverage ছাড়া (1:1):
- আপনার Capital: $10,000
- Position Size: $10,000
- 1% Move = $100 Profit/Loss (Account-এর 1%)

100:1 Leverage-সহ:
- আপনার Capital: $10,000
- Position Size: $1,000,000
- 1% Move = $10,000 Profit/Loss (Account-এর 100%!)
\`\`\`

### Leverage Ratio:

| Leverage | প্রয়োজনীয় Margin | $1,000 Control করে | ১% Move-এর প্রভাব |
|----------|-------------------|-------------------|-------------------|
| 1:1 | 100% | $1,000 | $10 (1%) |
| 5:1 | 20% | $5,000 | $50 (5%) |
| 10:1 | 10% | $10,000 | $100 (10%) |
| 50:1 | 2% | $50,000 | $500 (50%) |
| 100:1 | 1% | $100,000 | $1,000 (100%) |
| 500:1 | 0.2% | $500,000 | $5,000 (500%!) |

---

## Margin কী?

Margin হলো Leveraged Position Open ও Maintain করতে আপনার Broker-এর প্রয়োজনীয় **জামানত Deposit**। এটি Fee নয় — এটি একটি Security Deposit যা Position Close করলে ফেরত আসে।

### Margin-এর প্রকারভেদ:

| Term | সংজ্ঞা |
|------|--------|
| **Required Margin** | নির্দিষ্ট Position Open করতে প্রয়োজনীয় পরিমাণ |
| **Used Margin** | Open Position-এ বর্তমানে আটকে থাকা মোট Margin |
| **Free Margin** | নতুন Position-এর জন্য উপলব্ধ Capital (Equity - Used Margin) |
| **Margin Level** | (Equity ÷ Used Margin) × 100% |
| **Margin Call** | Margin Level Broker-এর Threshold-এর নিচে গেলে সতর্কতা |
| **Stop Out** | Margin অত্যন্ত কম হলে Broker জোর করে Position Close করে |

### Margin গণনা:

\`\`\`
Required Margin = Position Size ÷ Leverage

উদাহরণ:
- 1 Lot EUR/USD at 100:1 = $100,000 ÷ 100 = $1,000 Margin
- 0.5 Lot EUR/USD at 50:1 = $50,000 ÷ 50 = $1,000 Margin
- 0.1 Lot EUR/USD at 100:1 = $10,000 ÷ 100 = $100 Margin
\`\`\`

---

## Margin Call ও Stop Out

### Margin Call:
আপনার Broker-এর সতর্কতা যে Margin Level একটি নির্দিষ্ট Threshold-এর (সাধারণত ১০০% বা ৮০%) নিচে নেমে গেছে।

### Stop Out:
Margin Level আরও কমলে (সাধারণত ৫০% বা ২০%), Broker স্বয়ংক্রিয়ভাবে আপনার Losing Position Close করে দেয় Negative Balance রোধ করতে।

### উদাহরণ:

\`\`\`
Account: $5,000
Position: 2 Standard Lot EUR/USD (Leverage 100:1)
Required Margin: $2,000
Free Margin: $3,000

Price আপনার বিরুদ্ধে 50 Pip যায়:
Loss = 50 Pip × $10 × 2 Lot = $1,000
Equity: $5,000 - $1,000 = $4,000
Margin Level: ($4,000 ÷ $2,000) × 100 = 200% ✅ নিরাপদ

Price আপনার বিরুদ্ধে 150 Pip যায়:
Loss = 150 × $10 × 2 = $3,000
Equity: $5,000 - $3,000 = $2,000
Margin Level: ($2,000 ÷ $2,000) × 100 = 100% ⚠️ MARGIN CALL

Price আপনার বিরুদ্ধে 200 Pip যায়:
Loss = 200 × $10 × 2 = $4,000
Equity: $5,000 - $4,000 = $1,000
Margin Level: ($1,000 ÷ $2,000) × 100 = 50% 🛑 STOP OUT
\`\`\`

---

## নিরাপদ Leverage ব্যবহার

### Real Leverage সূত্র:

\`\`\`
Effective Leverage = মোট Position Value ÷ Account Equity

উদাহরণ:
- Account: $10,000
- Position: 0.5 Lot EUR/USD = $50,000
- Effective Leverage: $50,000 ÷ $10,000 = 5:1

এটি নিরাপদ Leverage (যদিও Broker 100:1 অফার করে)
\`\`\`

### সুপারিশকৃত Effective Leverage:

| Trader Level | সর্বোচ্চ Effective Leverage | কারণ |
|-------------|---------------------------|------|
| Beginner | 2:1 থেকে 3:1 | শেখার পর্যায়, ভুলের সুযোগ |
| Intermediate | 3:1 থেকে 5:1 | প্রমাণিত System, আত্মবিশ্বাস তৈরি |
| Advanced | 5:1 থেকে 10:1 | ধারাবাহিক Track Record |
| Professional | 10:1 থেকে 20:1 | শক্তিশালী Risk Management |

### সোনালী নিয়ম:
> **আপনার Broker 500:1 Leverage অফার করলেই যে ব্যবহার করতে হবে তা নয়।** Available Leverage-কে Emergency Reserve হিসেবে ভাবুন, দৈনিক Tool হিসেবে নয়।

---

## Risk Management-এ Leverage-এর প্রভাব

### সঠিক Position Sizing ছাড়া:

\`\`\`
Account: $1,000, Leverage: 100:1
খারাপ Trader: 1 Standard Lot Open করেন ($100,000)
- ১০০% Available Leverage ব্যবহার
- 10 Pip Stop Loss = $100 Loss = Account-এর 10%
- 50 Pip বিপরীত Move = $500 = Account-এর 50%
- 100 Pip বিপরীত Move = ACCOUNT BLOWN
\`\`\`

### সঠিক Position Sizing-সহ:

\`\`\`
Account: $1,000, Leverage: 100:1
স্মার্ট Trader: 0.02 Lot Open করেন ($2,000)
- 2:1 Effective Leverage ব্যবহার
- 50 Pip Stop Loss = $10 Loss = Account-এর 1%
- পরপর 50টি Loss সহ্য করতে পারবেন
- সঠিক Sizing-এর জন্য এখনো Leverage উপলব্ধ
\`\`\`

---

## ব্যবহারিক Leverage Framework

### $5,000 Account-এর জন্য:

| Risk Level | Lot Size | Effective Leverage | 50-Pip SL খরচ | % Risk |
|-----------|----------|-------------------|---------------|--------|
| Conservative | 0.05 | 1:1 | $25 | 0.5% |
| Standard | 0.10 | 2:1 | $50 | 1.0% |
| Moderate | 0.20 | 4:1 | $100 | 2.0% |
| Aggressive | 0.50 | 10:1 | $250 | 5.0% |
| বিপজ্জনক | 1.00 | 20:1 | $500 | 10% ⚠️ |

<Callout type="info" title="সুপারিশকৃত পদ্ধতি">
"Standard" সারি দিয়ে শুরু করুন (প্রতি Trade-এ ১% Risk, 2:1 Effective Leverage)। এটি আপনার Account-এর ৫০% হারানোর আগে ৫০ বার ভুল হওয়ার সুযোগ দেয় — শিখতে ও উন্নতি করতে যথেষ্ট।
</Callout>

---

## সারসংক্ষেপ

- **Leverage** Profit এবং Loss উভয়ই বাড়ায়
- **Margin** হলো জামানত, Fee নয়
- **Margin Call** হলো সতর্কতা; **Stop Out** হলো জোরপূর্বক Closure
- **Available Leverage ≠ ব্যবহার করা উচিত এমন Leverage**
- বেশিরভাগ Trader-এর জন্য **2:1 থেকে 5:1 Effective Leverage** নিরাপদ
- **Position Sizing** আপনার প্রকৃত Leverage নির্ধারণ করে, Broker-এর Maximum নয়
- Available Leverage নির্বিশেষে **প্রতি Trade-এ ১-২% Risk**

---

## সম্পর্কিত বিষয়

- [Risk Management](/bn/academy/risk-management) — সম্পূর্ণ Capital সুরক্ষা গাইড
- [Position Sizing](/bn/academy/position-sizing) — সুনির্দিষ্ট Lot Size গণনা
- [Pip ও Terminology](/bn/academy/pips-points-terminology) — পরিমাপ বোঝা
- [Forex Basics](/bn/academy/forex-basics) — Market Fundamental
- [Trading Psychology](/bn/academy/trading-psychology) — Leverage Temptation এড়ান
`,
);

console.log("\n✅ Academy Batch 1 Complete: 6 topics × 2 languages = 12 files");
console.log(
  "Topics: what-is-trading, investing-vs-trading, types-of-traders, bid-ask-spread, pips-points-terminology, margin-leverage",
);
