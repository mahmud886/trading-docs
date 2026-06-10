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
// BATCH 2: MARKETS & INSTRUMENTS (6 Topics × 2 Languages = 12 Files)
// Topics: stock-market-basics, commodity-markets, cryptocurrency-fundamentals,
//         bonds-etfs, perpetual-futures, volatility-analysis
// ============================================================

// ============================
// 1. STOCK MARKET BASICS — EN
// ============================
writeMdx('en', 'academy', 'stock-market-basics', {
  title: "Stock Market Basics — Complete Guide",
  description: "Learn how the stock market works, how to trade stocks, understand market orders, stock exchanges, fundamental analysis, and build a solid foundation for stock trading.",
  level: "beginner",
  order: 7
}, `
## What is the Stock Market?

The stock market is a collection of exchanges where **shares of publicly traded companies** are bought and sold. When you buy a stock, you're purchasing a small piece of ownership (equity) in that company.

<Callout type="info" title="Key Concept">
The stock market serves two purposes: companies raise capital by selling shares to the public (IPO), and investors/traders buy and sell those shares to profit from price changes or earn dividends.
</Callout>

---

## How the Stock Market Works

### Market Structure:

| Component | Role |
|-----------|------|
| **Stock Exchange** | Venue where stocks are listed and traded (NYSE, NASDAQ) |
| **Brokers** | Intermediaries connecting buyers and sellers |
| **Market Makers** | Provide liquidity by always offering buy/sell prices |
| **Regulators** | Oversee fair trading (SEC in US, FCA in UK) |
| **Clearing Houses** | Settle transactions, ensure delivery |

### Major Stock Exchanges:

| Exchange | Location | Notable Stocks | Market Cap |
|----------|----------|---------------|------------|
| NYSE | New York | Berkshire, JPMorgan, Walmart | $25+ trillion |
| NASDAQ | New York | Apple, Microsoft, Google, Tesla | $22+ trillion |
| LSE | London | Shell, HSBC, Unilever | $3+ trillion |
| TSE | Tokyo | Toyota, Sony, Nintendo | $5+ trillion |
| SSE | Shanghai | Chinese blue-chips | $6+ trillion |

### Trading Hours:
- **NYSE/NASDAQ:** 9:30 AM - 4:00 PM ET (Regular), 4:00-8:00 PM (After-hours)
- **LSE:** 8:00 AM - 4:30 PM GMT
- **TSE:** 9:00 AM - 3:00 PM JST
- **Pre-market:** Limited liquidity, wider spreads

---

## Types of Stocks

### By Market Capitalization:

| Category | Market Cap | Characteristics | Examples |
|----------|-----------|-----------------|----------|
| **Large-cap** | $10B+ | Stable, lower growth, dividends | Apple, Microsoft |
| **Mid-cap** | $2B-10B | Growth + stability balance | Zoom, Etsy |
| **Small-cap** | $300M-2B | Higher growth, higher risk | Emerging companies |
| **Micro-cap** | <$300M | Very volatile, speculative | Penny stocks |

### By Investment Style:

| Type | Focus | Best For |
|------|-------|----------|
| **Growth Stocks** | Revenue/earnings growth | Capital appreciation |
| **Value Stocks** | Undervalued by market | Long-term investors |
| **Dividend Stocks** | Regular income payments | Passive income |
| **Blue-chip Stocks** | Established, reliable companies | Conservative investors |
| **Penny Stocks** | Under $5/share, highly speculative | High-risk traders |

---

## Fundamental Analysis for Stocks

### Key Metrics:

| Metric | Formula | What It Tells You |
|--------|---------|-------------------|
| **P/E Ratio** | Price ÷ Earnings Per Share | How expensive relative to earnings |
| **EPS** | Net Income ÷ Outstanding Shares | Profitability per share |
| **P/B Ratio** | Price ÷ Book Value | Price vs. actual asset value |
| **Dividend Yield** | Annual Dividend ÷ Stock Price | Income return percentage |
| **Revenue Growth** | (Current - Previous) ÷ Previous | Company growth rate |
| **Debt/Equity** | Total Debt ÷ Shareholder Equity | Financial leverage/risk |
| **Free Cash Flow** | Operating Cash - Capital Expenditures | Available cash |

### Earnings Reports:
- Released quarterly (every 3 months)
- Contain revenue, earnings, guidance
- Major catalyst for price movement
- "Beat" expectations → stock usually rises
- "Miss" expectations → stock usually falls

---

## How to Trade Stocks

### Step 1: Choose Your Approach

| Approach | Timeframe | Analysis | Goal |
|----------|-----------|----------|------|
| Day Trading | Intraday | Technical | Daily income |
| Swing Trading | Days-weeks | Technical + Fundamental | Medium-term gains |
| Position Trading | Months | Fundamental | Trend riding |
| Investing | Years | Fundamental | Long-term wealth |

### Step 2: Select a Broker

Look for:
- Low commissions (many now offer $0 commission)
- Good execution speed
- Research tools and screeners
- Fractional shares (buy partial shares)
- Regulatory compliance (SIPC insurance)

### Step 3: Research & Screen

Use stock screeners to filter by:
- Market cap, sector, industry
- P/E ratio, revenue growth
- Volume, volatility
- Technical patterns and setups

### Step 4: Execute Trades

- **Market Order:** Buy/sell immediately at current price
- **Limit Order:** Set your desired entry/exit price
- **Stop Order:** Trigger when price reaches level
- **Trailing Stop:** Moves with price to lock profits

---

## Stock Trading Strategies

### Momentum Trading:
- Trade stocks showing strong directional movement
- Volume confirmation essential
- Enter on breakouts or pullbacks to moving averages
- Exit on momentum exhaustion signals

### Breakout Trading:
- Identify consolidation patterns (triangles, rectangles)
- Enter when price breaks through with volume
- Stop loss below breakout level
- Target measured move distance

### Gap Trading:
- Trade price gaps at market open
- Gap up + continuation = ride the trend
- Gap up + reversal = fade the gap
- Pre-market analysis crucial

---

## Key Stock Market Concepts

### Dividends:
- Cash payments to shareholders (quarterly/annually)
- Dividend Yield = Annual Dividend ÷ Share Price
- Ex-dividend date: buy before to receive payment
- Dividend reinvestment compounds returns

### Stock Splits:
- Company divides shares (2:1 split: double shares, half price)
- No change in total value
- Increases accessibility for retail traders
- Often bullish signal

### Market Orders & Bid-Ask:
- Stocks have bid-ask spread (usually $0.01 for liquid stocks)
- Market orders execute immediately at best available price
- Limit orders give better control over entry

---

## Risks & Considerations

| Risk | Description | Mitigation |
|------|-------------|------------|
| Market Risk | Overall market decline | Diversification, stops |
| Company Risk | Specific company issues | Research, position limits |
| Liquidity Risk | Can't exit at desired price | Trade liquid stocks |
| Gap Risk | Overnight price jumps | Position sizing, hedge |
| Regulatory Risk | Rule changes, delistings | Stay informed |

---

## US Stock Market Rules

### Pattern Day Trading (PDT) Rule:
- Applies to US margin accounts
- 4+ day trades in 5 business days = PDT
- Requires $25,000 minimum equity
- Cash accounts exempt (but limited by settlement)

### Settlement:
- T+1 settlement (trade date + 1 business day)
- Cash accounts must wait for settlement
- Margin accounts can trade immediately

---

## Related Topics

- [What is Trading?](/en/academy/what-is-trading) — Trading fundamentals
- [Investing vs Trading](/en/academy/investing-vs-trading) — Choose your approach
- [Technical Indicators](/en/academy/technical-indicators) — Chart analysis tools
- [Order Types](/en/academy/order-types) — Execution methods
- [Indices Trading](/en/academy/indices-trading) — Trade market baskets
`);

// ============================
// 1. STOCK MARKET BASICS — BN
// ============================
writeMdx('bn', 'academy', 'stock-market-basics', {
  title: "Stock Market Basics — সম্পূর্ণ গাইড",
  description: "Stock Market কীভাবে কাজ করে, Stock কীভাবে Trade করবেন, Market Order, Stock Exchange, Fundamental Analysis বুঝুন এবং Stock Trading-এর শক্ত ভিত্তি তৈরি করুন।",
  level: "beginner",
  order: 7
}, `
## Stock Market কী?

Stock Market হলো এমন Exchange-এর সমষ্টি যেখানে **Publicly Traded Company-র Share** কেনা-বেচা হয়। আপনি যখন একটি Stock কেনেন, তখন সেই Company-র একটি ছোট অংশের Ownership (Equity) কিনছেন।

<Callout type="info" title="মূল ধারণা">
Stock Market দুটি উদ্দেশ্যে কাজ করে: Company জনগণের কাছে Share বিক্রি করে Capital তোলে (IPO), এবং Investor/Trader সেই Share কেনা-বেচা করে Price পরিবর্তন থেকে Profit করে বা Dividend আয় করে।
</Callout>

---

## Stock Market কীভাবে কাজ করে

### Market কাঠামো:

| উপাদান | ভূমিকা |
|---------|--------|
| **Stock Exchange** | যেখানে Stock Listed ও Traded হয় (NYSE, NASDAQ) |
| **Broker** | Buyer ও Seller-কে সংযুক্তকারী মধ্যস্থতাকারী |
| **Market Maker** | সবসময় Buy/Sell Price অফার করে Liquidity প্রদান |
| **Regulator** | ন্যায্য Trading তদারকি (US-এ SEC, UK-তে FCA) |
| **Clearing House** | Transaction নিষ্পত্তি, Delivery নিশ্চিতকরণ |

### প্রধান Stock Exchange:

| Exchange | অবস্থান | উল্লেখযোগ্য Stock | Market Cap |
|----------|---------|-------------------|------------|
| NYSE | New York | Berkshire, JPMorgan, Walmart | $25+ ট্রিলিয়ন |
| NASDAQ | New York | Apple, Microsoft, Google, Tesla | $22+ ট্রিলিয়ন |
| LSE | London | Shell, HSBC, Unilever | $3+ ট্রিলিয়ন |
| TSE | Tokyo | Toyota, Sony, Nintendo | $5+ ট্রিলিয়ন |

### Trading Hours:
- **NYSE/NASDAQ:** 9:30 AM - 4:00 PM ET (Regular), 4:00-8:00 PM (After-hours)
- **LSE:** 8:00 AM - 4:30 PM GMT
- **TSE:** 9:00 AM - 3:00 PM JST

---

## Stock-এর প্রকারভেদ

### Market Capitalization অনুযায়ী:

| ক্যাটেগরি | Market Cap | বৈশিষ্ট্য | উদাহরণ |
|----------|-----------|-----------|---------|
| **Large-cap** | $10B+ | স্থিতিশীল, কম Growth, Dividend | Apple, Microsoft |
| **Mid-cap** | $2B-10B | Growth ও Stability-র ভারসাম্য | Zoom, Etsy |
| **Small-cap** | $300M-2B | বেশি Growth, বেশি Risk | উদীয়মান Company |
| **Micro-cap** | <$300M | অত্যন্ত Volatile, Speculative | Penny Stock |

### Investment Style অনুযায়ী:

| ধরন | ফোকাস | উপযুক্ত |
|------|--------|----------|
| **Growth Stock** | Revenue/Earning বৃদ্ধি | Capital Appreciation |
| **Value Stock** | Market দ্বারা Undervalued | দীর্ঘমেয়াদী Investor |
| **Dividend Stock** | নিয়মিত Income Payment | Passive Income |
| **Blue-chip Stock** | প্রতিষ্ঠিত, নির্ভরযোগ্য Company | রক্ষণশীল Investor |
| **Penny Stock** | $5-এর নিচে/Share, অত্যন্ত Speculative | High-risk Trader |

---

## Stock-এর জন্য Fundamental Analysis

### মূল Metric:

| Metric | সূত্র | কী বলে |
|--------|-------|---------|
| **P/E Ratio** | Price ÷ Earnings Per Share | Earning-এর তুলনায় কতটা ব্যয়বহুল |
| **EPS** | Net Income ÷ Outstanding Share | প্রতি Share-এ Profitability |
| **P/B Ratio** | Price ÷ Book Value | প্রকৃত Asset Value-র তুলনায় Price |
| **Dividend Yield** | বার্ষিক Dividend ÷ Stock Price | Income Return শতাংশ |
| **Revenue Growth** | (বর্তমান - পূর্ববর্তী) ÷ পূর্ববর্তী | Company Growth Rate |
| **Debt/Equity** | মোট Debt ÷ Shareholder Equity | Financial Leverage/Risk |

### Earnings Report:
- প্রতি Quarter-এ (প্রতি ৩ মাস) প্রকাশিত
- Revenue, Earning, Guidance থাকে
- Price Movement-এর প্রধান Catalyst
- "Beat" Expectation → Stock সাধারণত বাড়ে
- "Miss" Expectation → Stock সাধারণত কমে

---

## Stock কীভাবে Trade করবেন

### ধাপ ১: আপনার পদ্ধতি বেছে নিন

| পদ্ধতি | Timeframe | Analysis | লক্ষ্য |
|---------|-----------|----------|--------|
| Day Trading | Intraday | Technical | দৈনিক Income |
| Swing Trading | দিন-সপ্তাহ | Technical + Fundamental | মধ্যমেয়াদী লাভ |
| Position Trading | মাস | Fundamental | Trend Riding |
| Investing | বছর | Fundamental | দীর্ঘমেয়াদী সম্পদ |

### ধাপ ২: Broker নির্বাচন

যা দেখবেন:
- কম Commission (অনেকে এখন $0 Commission অফার করে)
- ভালো Execution Speed
- Research Tool ও Screener
- Fractional Share (আংশিক Share কেনা)
- Regulatory Compliance

### ধাপ ৩: Research ও Screen

Stock Screener ব্যবহার করে Filter করুন:
- Market Cap, Sector, Industry
- P/E Ratio, Revenue Growth
- Volume, Volatility
- Technical Pattern ও Setup

---

## মূল Stock Market ধারণা

### Dividend:
- Shareholder-দের নগদ Payment (Quarterly/বার্ষিক)
- Dividend Yield = বার্ষিক Dividend ÷ Share Price
- Ex-dividend Date: Payment পেতে এই তারিখের আগে কিনুন
- Dividend Reinvestment Return Compound করে

### Stock Split:
- Company Share ভাগ করে (2:1 Split: দ্বিগুণ Share, অর্ধেক Price)
- মোট মূল্যে কোনো পরিবর্তন নেই
- Retail Trader-দের জন্য সহজলভ্যতা বাড়ায়
- প্রায়ই Bullish Signal

---

## Risk ও বিবেচ্য বিষয়

| Risk | বর্ণনা | প্রশমন |
|------|---------|--------|
| Market Risk | সামগ্রিক Market পতন | Diversification, Stop |
| Company Risk | নির্দিষ্ট Company সমস্যা | Research, Position Limit |
| Liquidity Risk | কাঙ্ক্ষিত Price-এ Exit করতে না পারা | Liquid Stock Trade করুন |
| Gap Risk | Overnight Price Jump | Position Sizing, Hedge |
| Regulatory Risk | নিয়ম পরিবর্তন, Delisting | অবগত থাকুন |

---

## US Stock Market নিয়ম

### Pattern Day Trading (PDT) Rule:
- US Margin Account-এ প্রযোজ্য
- ৫ Business Day-এ ৪+ Day Trade = PDT
- ন্যূনতম $25,000 Equity প্রয়োজন
- Cash Account ছাড় পায় (কিন্তু Settlement দ্বারা সীমিত)

---

## সম্পর্কিত বিষয়

- [Trading কী?](/bn/academy/what-is-trading) — Trading Fundamental
- [Investing vs Trading](/bn/academy/investing-vs-trading) — পদ্ধতি বেছে নিন
- [Technical Indicators](/bn/academy/technical-indicators) — Chart Analysis Tool
- [Order Types](/bn/academy/order-types) — Execution পদ্ধতি
- [Indices Trading](/bn/academy/indices-trading) — Market Basket Trade
`);

// ============================
// 2. COMMODITY MARKETS — EN
// ============================
writeMdx('en', 'academy', 'commodity-markets', {
  title: "Commodity Markets — Complete Trading Guide",
  description: "Master commodity trading including gold, oil, silver, and agricultural commodities. Learn how commodity markets work, trading strategies, and key price drivers.",
  level: "beginner",
  order: 8
}, `
## What Are Commodities?

Commodities are **raw materials and primary agricultural products** that can be bought and sold. They are the building blocks of the global economy — everything from the gold in your jewelry to the oil powering your car.

<Callout type="info" title="Why Trade Commodities?">
Commodities offer portfolio diversification, inflation protection, and unique trading opportunities driven by supply/demand dynamics, geopolitics, and weather patterns.
</Callout>

---

## Types of Commodities

### Hard Commodities (Extracted/Mined):

| Category | Instruments | Key Drivers |
|----------|------------|-------------|
| **Precious Metals** | Gold, Silver, Platinum, Palladium | Safe haven demand, USD, rates |
| **Energy** | Crude Oil (WTI/Brent), Natural Gas | OPEC, geopolitics, demand |
| **Industrial Metals** | Copper, Aluminum, Zinc, Iron | Construction, manufacturing |

### Soft Commodities (Grown/Produced):

| Category | Instruments | Key Drivers |
|----------|------------|-------------|
| **Grains** | Wheat, Corn, Soybeans, Rice | Weather, crop reports |
| **Softs** | Coffee, Cocoa, Sugar, Cotton | Weather, demand cycles |
| **Livestock** | Cattle, Hogs, Lean Pork | Feed costs, demand |

---

## How to Trade Commodities

### Trading Methods:

| Method | Description | Best For |
|--------|-------------|----------|
| **Futures Contracts** | Standardized exchange contracts | Professional traders |
| **CFDs** | Contracts for Difference via broker | Retail traders |
| **ETFs** | Exchange-traded funds tracking commodities | Investors |
| **Stocks** | Companies in commodity sector | Stock traders |
| **Options** | Rights to buy/sell futures | Hedgers, advanced |
| **Physical** | Direct purchase (gold bars, coins) | Long-term holders |

### Key Commodity Futures:

| Contract | Exchange | Lot Size | Tick Value |
|----------|----------|----------|------------|
| Gold (GC) | COMEX | 100 oz | $10 |
| Crude Oil (CL) | NYMEX | 1,000 barrels | $10 |
| Silver (SI) | COMEX | 5,000 oz | $25 |
| Natural Gas (NG) | NYMEX | 10,000 MMBtu | $10 |
| Copper (HG) | COMEX | 25,000 lbs | $12.50 |
| Corn (ZC) | CBOT | 5,000 bushels | $12.50 |

---

## Gold Trading (Most Popular)

### Why Gold is Special:
- **Safe haven** — Rises during uncertainty and fear
- **Inflation hedge** — Preserves purchasing power
- **USD inverse correlation** — When USD falls, gold tends to rise
- **Central bank reserves** — Governments hold gold
- **Limited supply** — Cannot be printed like fiat currency

### Gold Price Drivers:

| Factor | Impact on Gold |
|--------|---------------|
| USD strength | Inverse (USD up → Gold down) |
| Interest rates | Inverse (rates up → Gold down) |
| Inflation | Direct (inflation up → Gold up) |
| Geopolitical risk | Direct (risk up → Gold up) |
| Stock market crash | Direct (fear → Gold up) |
| Central bank buying | Direct (demand → Gold up) |

### Gold Trading Specifications (XAUUSD):
\`\`\`
- 1 Standard Lot = 100 oz gold
- Pip value (1 lot) = $1 per $0.01 move = $10 per pip (10 cents)
- Typical daily range: $20-50 (200-500 pips)
- Spread: 15-30 cents (1.5-3 pips) during active sessions
- High volatility: larger stops needed (30-100 pips)
\`\`\`

---

## Oil Trading

### Two Main Benchmarks:

| Benchmark | Exchange | Region | Price Relation |
|-----------|----------|--------|---------------|
| **WTI** (West Texas Intermediate) | NYMEX | Americas | Usually lower |
| **Brent** (North Sea) | ICE | Europe/Global | Usually higher |

### Oil Price Drivers:
- **OPEC decisions** — Production cuts/increases
- **US inventory data** — Weekly EIA/API reports
- **Global demand** — Economic growth, China/India consumption
- **Geopolitics** — Middle East tensions, Russia sanctions
- **US Dollar** — Inverse correlation
- **Seasonal patterns** — Summer driving season, winter heating

---

## Commodity Trading Strategies

### Trend Following:
- Commodities trend strongly due to supply/demand cycles
- Use weekly/daily moving averages
- Enter on pullbacks within trends
- Exit when trend structure breaks

### Seasonal Patterns:
- Agricultural commodities have planting/harvest cycles
- Energy has summer/winter demand patterns
- Gold tends to rally in Q1 and September
- Understanding seasonality gives statistical edge

### Supply/Demand Analysis:
- Inventory levels (EIA, USDA reports)
- Production data (OPEC, mine output)
- Consumption trends (China demand, EV adoption)
- Weather impacts (droughts, hurricanes)

---

## Risks Specific to Commodities

| Risk | Description | Management |
|------|-------------|-----------|
| Volatility | Larger than forex, sudden spikes | Wider stops, smaller positions |
| Gap Risk | Weekend/overnight gaps common | Position size accordingly |
| Contango/Backwardation | Futures curve costs | Understand roll mechanics |
| Geopolitical | Sudden supply disruptions | Stop losses, hedge |
| Weather | Unpredictable crop impacts | Diversify across commodities |
| Leverage | High contract values | Conservative position sizing |

---

## Related Topics

- [Gold Trading](/en/academy/gold-trading) — In-depth gold analysis
- [Futures Basics](/en/academy/futures-basics) — How futures work
- [Risk Management](/en/academy/risk-management) — Manage commodity volatility
- [Economic Indicators](/en/academy/economic-indicators-macro) — Macro drivers
- [Volatility Analysis](/en/academy/volatility-analysis) — Measure and trade volatility
`);

// ============================
// 2. COMMODITY MARKETS — BN
// ============================
writeMdx('bn', 'academy', 'commodity-markets', {
  title: "Commodity Market — সম্পূর্ণ Trading গাইড",
  description: "Gold, Oil, Silver এবং Agricultural Commodity সহ Commodity Trading আয়ত্ত করুন। Commodity Market কীভাবে কাজ করে, Trading Strategy এবং মূল Price Driver শিখুন।",
  level: "beginner",
  order: 8
}, `
## Commodity কী?

Commodity হলো **কাঁচামাল ও প্রাথমিক কৃষিপণ্য** যা কেনা-বেচা করা যায়। এগুলো বৈশ্বিক অর্থনীতির মূল ভিত্তি — আপনার গয়নার Gold থেকে শুরু করে গাড়ি চালানোর Oil পর্যন্ত সবকিছু।

<Callout type="info" title="কেন Commodity Trade করবেন?">
Commodity Portfolio Diversification, Inflation Protection এবং Supply/Demand Dynamics, Geopolitics ও আবহাওয়া Pattern দ্বারা চালিত অনন্য Trading সুযোগ প্রদান করে।
</Callout>

---

## Commodity-র প্রকারভেদ

### Hard Commodity (খনন/উত্তোলন):

| ক্যাটেগরি | Instrument | মূল Driver |
|----------|-----------|------------|
| **Precious Metal** | Gold, Silver, Platinum, Palladium | Safe Haven চাহিদা, USD, Rate |
| **Energy** | Crude Oil (WTI/Brent), Natural Gas | OPEC, Geopolitics, চাহিদা |
| **Industrial Metal** | Copper, Aluminum, Zinc, Iron | নির্মাণ, উৎপাদন |

### Soft Commodity (উৎপাদন/চাষ):

| ক্যাটেগরি | Instrument | মূল Driver |
|----------|-----------|------------|
| **Grain** | Wheat, Corn, Soybean, Rice | আবহাওয়া, Crop Report |
| **Softs** | Coffee, Cocoa, Sugar, Cotton | আবহাওয়া, চাহিদা চক্র |
| **Livestock** | Cattle, Hog, Lean Pork | Feed খরচ, চাহিদা |

---

## Commodity কীভাবে Trade করবেন

### Trading পদ্ধতি:

| পদ্ধতি | বিবরণ | উপযুক্ত |
|--------|--------|----------|
| **Futures Contract** | মানসম্মত Exchange Contract | Professional Trader |
| **CFD** | Broker-এর মাধ্যমে Contract for Difference | Retail Trader |
| **ETF** | Commodity Track করা Exchange-traded Fund | Investor |
| **Stock** | Commodity Sector-এর Company | Stock Trader |
| **Options** | Futures কেনা/বেচার অধিকার | Hedger, Advanced |
| **Physical** | সরাসরি ক্রয় (Gold Bar, Coin) | দীর্ঘমেয়াদী ধারক |

---

## Gold Trading (সবচেয়ে জনপ্রিয়)

### Gold কেন বিশেষ:
- **Safe Haven** — অনিশ্চয়তা ও ভয়ের সময় বাড়ে
- **Inflation Hedge** — ক্রয়ক্ষমতা রক্ষা করে
- **USD Inverse Correlation** — USD কমলে Gold বাড়ে
- **Central Bank Reserve** — সরকার Gold ধারণ করে
- **সীমিত সরবরাহ** — Fiat Currency-র মতো Print করা যায় না

### Gold Price Driver:

| বিষয় | Gold-এ প্রভাব |
|--------|--------------|
| USD শক্তি | বিপরীত (USD বাড়লে → Gold কমে) |
| Interest Rate | বিপরীত (Rate বাড়লে → Gold কমে) |
| Inflation | সরাসরি (Inflation বাড়লে → Gold বাড়ে) |
| Geopolitical Risk | সরাসরি (Risk বাড়লে → Gold বাড়ে) |
| Stock Market Crash | সরাসরি (ভয় → Gold বাড়ে) |
| Central Bank Buying | সরাসরি (চাহিদা → Gold বাড়ে) |

### Gold Trading Specification (XAUUSD):
\`\`\`
- 1 Standard Lot = 100 oz Gold
- Pip Value (1 Lot) = $0.01 Move-এ $1 = Pip প্রতি $10 (10 Cent)
- সাধারণ দৈনিক Range: $20-50 (200-500 Pip)
- Spread: 15-30 Cent (1.5-3 Pip) Active Session-এ
- High Volatility: বড় Stop প্রয়োজন (30-100 Pip)
\`\`\`

---

## Oil Trading

### দুটি প্রধান Benchmark:

| Benchmark | Exchange | অঞ্চল | Price সম্পর্ক |
|-----------|----------|--------|--------------|
| **WTI** (West Texas Intermediate) | NYMEX | আমেরিকা | সাধারণত কম |
| **Brent** (North Sea) | ICE | ইউরোপ/বিশ্বব্যাপী | সাধারণত বেশি |

### Oil Price Driver:
- **OPEC সিদ্ধান্ত** — উৎপাদন কাটা/বৃদ্ধি
- **US Inventory Data** — সাপ্তাহিক EIA/API Report
- **বৈশ্বিক চাহিদা** — Economic Growth, China/India ভোগ
- **Geopolitics** — মধ্যপ্রাচ্য উত্তেজনা, Russia Sanction
- **US Dollar** — Inverse Correlation
- **Seasonal Pattern** — গ্রীষ্মকালীন Driving Season, শীতকালীন Heating

---

## Commodity Trading Strategy

### Trend Following:
- Supply/Demand Cycle-এর কারণে Commodity শক্তিশালীভাবে Trend করে
- Weekly/Daily Moving Average ব্যবহার করুন
- Trend-এর মধ্যে Pullback-এ Enter করুন
- Trend Structure ভাঙলে Exit করুন

### Seasonal Pattern:
- Agricultural Commodity-র Planting/Harvest Cycle থাকে
- Energy-র Summer/Winter Demand Pattern আছে
- Gold সাধারণত Q1 ও September-এ Rally করে
- Seasonality বোঝা Statistical Edge দেয়

### Supply/Demand Analysis:
- Inventory Level (EIA, USDA Report)
- Production Data (OPEC, Mine Output)
- Consumption Trend (China চাহিদা, EV Adoption)
- আবহাওয়ার প্রভাব (খরা, Hurricane)

---

## Commodity-র জন্য নির্দিষ্ট Risk

| Risk | বর্ণনা | ব্যবস্থাপনা |
|------|---------|-------------|
| Volatility | Forex-এর চেয়ে বেশি, আকস্মিক Spike | চওড়া Stop, ছোট Position |
| Gap Risk | Weekend/Overnight Gap সাধারণ | Position Size অনুযায়ী |
| Geopolitical | আকস্মিক Supply ব্যাঘাত | Stop Loss, Hedge |
| আবহাওয়া | অপূর্বানুমেয় Crop প্রভাব | Commodity জুড়ে Diversify |
| Leverage | উচ্চ Contract Value | রক্ষণশীল Position Sizing |

---

## সম্পর্কিত বিষয়

- [Gold Trading](/bn/academy/gold-trading) — গভীর Gold Analysis
- [Futures Basics](/bn/academy/futures-basics) — Futures কীভাবে কাজ করে
- [Risk Management](/bn/academy/risk-management) — Commodity Volatility ম্যানেজ
- [Economic Indicators](/bn/academy/economic-indicators-macro) — Macro Driver
- [Volatility Analysis](/bn/academy/volatility-analysis) — Volatility পরিমাপ ও Trade
`);

// ============================
// 3. CRYPTOCURRENCY FUNDAMENTALS — EN
// ============================
writeMdx('en', 'academy', 'cryptocurrency-fundamentals', {
  title: "Cryptocurrency Fundamentals — Complete Guide",
  description: "Understand cryptocurrency from the ground up. Learn blockchain technology, how crypto works, major coins, wallets, exchanges, and the crypto ecosystem.",
  level: "beginner",
  order: 9
}, `
## What is Cryptocurrency?

Cryptocurrency is a **digital or virtual currency** that uses cryptography for security and operates on decentralized networks based on blockchain technology. Unlike traditional currencies, crypto is not controlled by any government or central bank.

<Callout type="info" title="Key Innovation">
Cryptocurrency enables peer-to-peer transactions without intermediaries (banks). This decentralization is both its greatest strength (censorship resistance, 24/7 operation) and its greatest challenge (volatility, regulation uncertainty).
</Callout>

---

## Blockchain Technology

### What is Blockchain?
A **distributed digital ledger** that records all transactions across a network of computers. Each "block" contains transaction data and is linked to the previous block, forming a "chain."

### Key Properties:

| Property | Description |
|----------|-------------|
| **Decentralized** | No single point of control |
| **Immutable** | Records cannot be altered once confirmed |
| **Transparent** | All transactions publicly viewable |
| **Secure** | Cryptographic protection |
| **Permissionless** | Anyone can participate |

### How a Transaction Works:
1. User initiates transaction (sends crypto)
2. Transaction broadcast to network nodes
3. Nodes validate transaction using consensus mechanism
4. Valid transactions grouped into a block
5. Block added to blockchain (confirmed)
6. Transaction complete and immutable

---

## Major Cryptocurrencies

| Cryptocurrency | Symbol | Use Case | Market Position |
|---------------|--------|----------|-----------------|
| **Bitcoin** | BTC | Digital gold, store of value | #1 by market cap |
| **Ethereum** | ETH | Smart contracts, DeFi platform | #2 by market cap |
| **Solana** | SOL | Fast transactions, DeFi, NFTs | Top 5 |
| **BNB** | BNB | Binance ecosystem, gas fees | Top 5 |
| **XRP** | XRP | Cross-border payments | Top 10 |
| **Cardano** | ADA | Smart contracts, research-driven | Top 15 |
| **Avalanche** | AVAX | DeFi, enterprise solutions | Top 15 |

### Bitcoin vs. Ethereum:

| Factor | Bitcoin | Ethereum |
|--------|---------|----------|
| Purpose | Store of value, payment | Smart contract platform |
| Supply | Fixed (21M max) | Inflationary (no hard cap) |
| Consensus | Proof of Work (PoW) | Proof of Stake (PoS) |
| Speed | ~10 min blocks | ~12 sec blocks |
| Use Case | Digital gold | DeFi, NFTs, dApps |

---

## Crypto Ecosystem

### Key Components:

| Component | Description | Examples |
|-----------|-------------|----------|
| **Centralized Exchange (CEX)** | Traditional exchange with order books | Binance, Coinbase, Kraken |
| **Decentralized Exchange (DEX)** | Peer-to-peer, no custodian | Uniswap, PancakeSwap |
| **DeFi** | Decentralized finance protocols | Aave, Compound, MakerDAO |
| **NFTs** | Non-fungible tokens, digital ownership | OpenSea marketplace |
| **Stablecoins** | Crypto pegged to fiat value | USDT, USDC, DAI |
| **Layer 2** | Scaling solutions for base chains | Arbitrum, Optimism |
| **Wallets** | Store and manage crypto assets | MetaMask, Ledger |

---

## Types of Wallets

| Type | Security | Convenience | Best For |
|------|----------|-------------|----------|
| **Hardware Wallet** (Ledger, Trezor) | Very High | Low | Long-term storage |
| **Software Wallet** (MetaMask) | Medium | High | Active DeFi users |
| **Exchange Wallet** | Low-Medium | Very High | Active traders |
| **Paper Wallet** | High (if stored well) | Very Low | Cold storage |

<Callout type="warning" title="Security Rule">
"Not your keys, not your crypto." If your coins are on an exchange, you don't truly own them. For large holdings, use hardware wallets.
</Callout>

---

## Crypto Market Characteristics

### Why Crypto is Different:

| Factor | Traditional Markets | Crypto Markets |
|--------|-------------------|----------------|
| Hours | Specific sessions | 24/7/365 |
| Volatility | 1-3% daily typical | 5-20% daily possible |
| Regulation | Heavy | Evolving |
| Manipulation | Monitored | More common |
| Liquidity | Deep (major markets) | Variable |
| Leverage | Limited (regulated) | Up to 125x |
| Accessibility | KYC, restrictions | Often permissionless |

### Market Cycles:
- **Bull Market:** Extended uptrend (historically 1-2 years)
- **Bear Market:** Extended downtrend (historically 1-2 years)
- **Bitcoin Halving:** Supply reduction every ~4 years, historically triggers bull runs
- **Altseason:** Altcoins outperform Bitcoin (late bull cycle)

---

## Crypto Fundamentals for Evaluation

### What to Analyze:

| Metric | What It Shows |
|--------|--------------|
| Market Cap | Total value (Price × Supply) |
| Trading Volume | Liquidity and interest |
| Circulating Supply | Currently available coins |
| Total/Max Supply | Inflation/scarcity potential |
| TVL (Total Value Locked) | DeFi protocol adoption |
| Active Addresses | Network usage |
| Developer Activity | Project health (GitHub commits) |
| Tokenomics | Supply schedule, distribution |

---

## Risks of Cryptocurrency

| Risk | Description | Mitigation |
|------|-------------|------------|
| Extreme Volatility | 50-90% crashes possible | Position sizing, stops |
| Regulatory | Governments may ban/restrict | Diversify jurisdictions |
| Hacking | Exchange and wallet hacks | Hardware wallets, 2FA |
| Scams | Rug pulls, fake projects | Research thoroughly (DYOR) |
| Liquidity | Small coins can't be exited easily | Stick to top 20 coins |
| Technology | Smart contract bugs | Audit reports, insurance |

---

## Getting Started with Crypto

### Step-by-Step:
1. **Learn the basics** — Understand blockchain, wallets, keys
2. **Choose an exchange** — Start with reputable CEX (Binance, Coinbase)
3. **Complete KYC** — Identity verification required on most platforms
4. **Start small** — Invest only what you can afford to lose
5. **Secure your assets** — Enable 2FA, consider hardware wallet
6. **Learn trading** — Study charts, risk management before active trading
7. **DYOR** — Do Your Own Research before buying any token

---

## Related Topics

- [Crypto Trading](/en/academy/crypto-trading) — Active crypto trading strategies
- [Perpetual Futures](/en/academy/perpetual-futures) — Crypto derivatives trading
- [Risk Management](/en/academy/risk-management) — Capital protection
- [What is Trading?](/en/academy/what-is-trading) — Trading fundamentals
- [Technical Indicators](/en/academy/technical-indicators) — Chart analysis
`);

// ============================
// 3. CRYPTOCURRENCY FUNDAMENTALS — BN
// ============================
writeMdx('bn', 'academy', 'cryptocurrency-fundamentals', {
  title: "Cryptocurrency Fundamentals — সম্পূর্ণ গাইড",
  description: "Cryptocurrency শূন্য থেকে বুঝুন। Blockchain Technology, Crypto কীভাবে কাজ করে, প্রধান Coin, Wallet, Exchange এবং Crypto Ecosystem শিখুন।",
  level: "beginner",
  order: 9
}, `
## Cryptocurrency কী?

Cryptocurrency হলো একটি **Digital বা Virtual Currency** যা নিরাপত্তার জন্য Cryptography ব্যবহার করে এবং Blockchain Technology-র উপর ভিত্তি করে Decentralized Network-এ পরিচালিত হয়। Traditional Currency-র বিপরীতে, Crypto কোনো সরকার বা Central Bank দ্বারা নিয়ন্ত্রিত নয়।

<Callout type="info" title="মূল উদ্ভাবন">
Cryptocurrency মধ্যস্থতাকারী (Bank) ছাড়াই Peer-to-peer Transaction সম্ভব করে। এই Decentralization এর সবচেয়ে বড় শক্তি (Censorship Resistance, ২৪/৭ পরিচালনা) এবং সবচেয়ে বড় চ্যালেঞ্জ (Volatility, Regulation অনিশ্চয়তা) — দুটোই।
</Callout>

---

## Blockchain Technology

### Blockchain কী?
একটি **Distributed Digital Ledger** যা Computer-এর Network জুড়ে সমস্ত Transaction রেকর্ড করে। প্রতিটি "Block"-এ Transaction Data থাকে এবং এটি আগের Block-এর সাথে সংযুক্ত, একটি "Chain" তৈরি করে।

### মূল বৈশিষ্ট্য:

| বৈশিষ্ট্য | বর্ণনা |
|-----------|--------|
| **Decentralized** | কোনো একক নিয়ন্ত্রণ কেন্দ্র নেই |
| **Immutable** | একবার Confirm হলে Record পরিবর্তন করা যায় না |
| **Transparent** | সমস্ত Transaction প্রকাশ্যে দেখা যায় |
| **Secure** | Cryptographic সুরক্ষা |
| **Permissionless** | যেকেউ অংশ নিতে পারে |

---

## প্রধান Cryptocurrency

| Cryptocurrency | Symbol | ব্যবহার | Market অবস্থান |
|---------------|--------|---------|----------------|
| **Bitcoin** | BTC | Digital Gold, Store of Value | Market Cap-এ #১ |
| **Ethereum** | ETH | Smart Contract, DeFi Platform | Market Cap-এ #২ |
| **Solana** | SOL | দ্রুত Transaction, DeFi, NFT | Top ৫ |
| **BNB** | BNB | Binance Ecosystem, Gas Fee | Top ৫ |
| **XRP** | XRP | Cross-border Payment | Top ১০ |

### Bitcoin vs. Ethereum:

| বিষয় | Bitcoin | Ethereum |
|--------|---------|----------|
| উদ্দেশ্য | Store of Value, Payment | Smart Contract Platform |
| Supply | নির্দিষ্ট (সর্বোচ্চ 21M) | Inflationary (কোনো Hard Cap নেই) |
| Consensus | Proof of Work (PoW) | Proof of Stake (PoS) |
| Speed | ~১০ মিনিট Block | ~১২ সেকেন্ড Block |
| Use Case | Digital Gold | DeFi, NFT, dApp |

---

## Crypto Ecosystem

### মূল উপাদান:

| উপাদান | বর্ণনা | উদাহরণ |
|---------|--------|---------|
| **Centralized Exchange (CEX)** | Order Book-সহ Traditional Exchange | Binance, Coinbase, Kraken |
| **Decentralized Exchange (DEX)** | Peer-to-peer, কোনো Custodian নেই | Uniswap, PancakeSwap |
| **DeFi** | Decentralized Finance Protocol | Aave, Compound, MakerDAO |
| **NFT** | Non-fungible Token, Digital Ownership | OpenSea Marketplace |
| **Stablecoin** | Fiat Value-তে Pegged Crypto | USDT, USDC, DAI |
| **Layer 2** | Base Chain-এর জন্য Scaling Solution | Arbitrum, Optimism |
| **Wallet** | Crypto Asset সংরক্ষণ ও ব্যবস্থাপনা | MetaMask, Ledger |

---

## Wallet-এর প্রকারভেদ

| ধরন | নিরাপত্তা | সুবিধা | উপযুক্ত |
|------|-----------|---------|----------|
| **Hardware Wallet** (Ledger, Trezor) | অত্যন্ত উচ্চ | কম | দীর্ঘমেয়াদী সংরক্ষণ |
| **Software Wallet** (MetaMask) | মধ্যম | বেশি | Active DeFi ব্যবহারকারী |
| **Exchange Wallet** | কম-মধ্যম | অত্যন্ত বেশি | Active Trader |
| **Paper Wallet** | উচ্চ (ভালোভাবে সংরক্ষিত হলে) | অত্যন্ত কম | Cold Storage |

<Callout type="warning" title="নিরাপত্তা নিয়ম">
"Not your keys, not your crypto." আপনার Coin Exchange-এ থাকলে আপনি সত্যিকার অর্থে মালিক নন। বড় Holdings-এর জন্য Hardware Wallet ব্যবহার করুন।
</Callout>

---

## Crypto Market-এর বৈশিষ্ট্য

### কেন Crypto আলাদা:

| বিষয় | Traditional Market | Crypto Market |
|--------|-------------------|---------------|
| সময় | নির্দিষ্ট Session | ২৪/৭/৩৬৫ |
| Volatility | সাধারণত দৈনিক ১-৩% | দৈনিক ৫-২০% সম্ভব |
| Regulation | কঠোর | বিবর্তনশীল |
| Manipulation | পর্যবেক্ষিত | বেশি সাধারণ |
| Liquidity | গভীর (প্রধান Market) | পরিবর্তনশীল |
| Leverage | সীমিত (Regulated) | ১২৫× পর্যন্ত |

### Market Cycle:
- **Bull Market:** বর্ধিত Uptrend (ঐতিহাসিকভাবে ১-২ বছর)
- **Bear Market:** বর্ধিত Downtrend (ঐতিহাসিকভাবে ১-২ বছর)
- **Bitcoin Halving:** প্রতি ~৪ বছরে Supply হ্রাস, ঐতিহাসিকভাবে Bull Run ট্রিগার করে
- **Altseason:** Altcoin Bitcoin-কে Outperform করে (Bull Cycle-এর শেষ দিকে)

---

## Crypto মূল্যায়নের জন্য Fundamental

### কী Analyze করবেন:

| Metric | কী দেখায় |
|--------|-----------|
| Market Cap | মোট মূল্য (Price × Supply) |
| Trading Volume | Liquidity ও আগ্রহ |
| Circulating Supply | বর্তমানে উপলব্ধ Coin |
| Total/Max Supply | Inflation/Scarcity সম্ভাবনা |
| TVL (Total Value Locked) | DeFi Protocol Adoption |
| Active Address | Network ব্যবহার |
| Developer Activity | Project স্বাস্থ্য (GitHub Commit) |
| Tokenomics | Supply Schedule, Distribution |

---

## Cryptocurrency-র Risk

| Risk | বর্ণনা | প্রশমন |
|------|---------|--------|
| চরম Volatility | ৫০-৯০% Crash সম্ভব | Position Sizing, Stop |
| Regulatory | সরকার নিষিদ্ধ/সীমাবদ্ধ করতে পারে | Jurisdiction Diversify |
| Hacking | Exchange ও Wallet Hack | Hardware Wallet, 2FA |
| Scam | Rug Pull, নকল Project | পুঙ্খানুপুঙ্খ Research (DYOR) |
| Liquidity | ছোট Coin সহজে Exit করা যায় না | Top 20 Coin-এ থাকুন |
| Technology | Smart Contract Bug | Audit Report, Insurance |

---

## Crypto শুরু করুন

### ধাপে ধাপে:
1. **মূল বিষয় শিখুন** — Blockchain, Wallet, Key বুঝুন
2. **Exchange বেছে নিন** — সম্মানজনক CEX দিয়ে শুরু করুন (Binance, Coinbase)
3. **KYC সম্পন্ন করুন** — বেশিরভাগ Platform-এ Identity Verification প্রয়োজন
4. **ছোট শুরু করুন** — শুধু যা হারাতে পারবেন তাই Invest করুন
5. **Asset সুরক্ষিত করুন** — 2FA Enable করুন, Hardware Wallet বিবেচনা করুন
6. **Trading শিখুন** — Active Trading-এর আগে Chart, Risk Management অধ্যয়ন করুন
7. **DYOR** — কোনো Token কেনার আগে নিজে Research করুন

---

## সম্পর্কিত বিষয়

- [Crypto Trading](/bn/academy/crypto-trading) — Active Crypto Trading Strategy
- [Perpetual Futures](/bn/academy/perpetual-futures) — Crypto Derivative Trading
- [Risk Management](/bn/academy/risk-management) — Capital সুরক্ষা
- [Trading কী?](/bn/academy/what-is-trading) — Trading Fundamental
- [Technical Indicators](/bn/academy/technical-indicators) — Chart Analysis
`);

// ============================
// 4. BONDS & ETFs — EN
// ============================
writeMdx('en', 'academy', 'bonds-etfs', {
  title: "Bonds & ETFs — Complete Investment Guide",
  description: "Understand bonds and ETFs for trading and investing. Learn bond mechanics, yield curves, ETF types, and how to use them for diversification and income generation.",
  level: "beginner",
  order: 10
}, `
## Bonds & ETFs: Essential Financial Instruments

Bonds and ETFs are foundational instruments for both investors and traders. Understanding them enhances your overall market knowledge and provides diversification opportunities.

---

## What Are Bonds?

A **Bond** is a debt instrument — essentially an IOU from a borrower (government or corporation) to a lender (you). When you buy a bond, you're lending money in exchange for regular interest payments and return of principal at maturity.

### Bond Mechanics:

| Term | Definition |
|------|-----------|
| **Face Value (Par)** | Amount paid back at maturity (typically $1,000) |
| **Coupon Rate** | Annual interest rate paid on face value |
| **Maturity Date** | When the bond expires and principal is returned |
| **Yield** | Effective annual return based on current price |
| **Credit Rating** | Risk assessment (AAA = safest, C = junk) |

### Types of Bonds:

| Type | Issuer | Risk | Yield | Example |
|------|--------|------|-------|---------|
| **Treasury Bonds** | Government | Very Low | Low | US T-Bonds |
| **Corporate Bonds** | Companies | Medium | Medium | Apple, Microsoft bonds |
| **Municipal Bonds** | Local government | Low | Low (tax-free) | City/state bonds |
| **High-Yield (Junk)** | Lower-rated companies | High | High | BB-rated corporate |

### Bond Price and Yield Relationship:
\`\`\`
Bond Price ↑ → Yield ↓
Bond Price ↓ → Yield ↑

When interest rates RISE:
- Existing bond prices FALL
- New bonds issued at higher yields

When interest rates FALL:
- Existing bond prices RISE
- New bonds issued at lower yields
\`\`\`

### The Yield Curve:

| Shape | Meaning | Market Implication |
|-------|---------|-------------------|
| **Normal** (upward) | Long-term yields > short-term | Economy healthy, growth expected |
| **Flat** | Similar yields across maturities | Transition period, uncertainty |
| **Inverted** | Short-term yields > long-term | Recession indicator (historically reliable) |

---

## What Are ETFs?

An **ETF (Exchange-Traded Fund)** is a basket of securities that trades on an exchange like a stock. ETFs track indices, sectors, commodities, or other assets.

### How ETFs Work:
- Traded throughout the day (like stocks)
- Hold multiple underlying assets
- Low management fees (0.03%-0.75% typical)
- Tax efficient
- Highly liquid (major ETFs)

### Types of ETFs:

| Type | Tracks | Examples | Best For |
|------|--------|----------|----------|
| **Index ETFs** | Market indices | SPY (S&P 500), QQQ (NASDAQ) | Passive investing |
| **Sector ETFs** | Specific industries | XLF (Finance), XLK (Tech) | Sector rotation |
| **Bond ETFs** | Bond portfolios | TLT (20yr Treasury), HYG (High Yield) | Fixed income |
| **Commodity ETFs** | Commodity prices | GLD (Gold), USO (Oil) | Commodity exposure |
| **International ETFs** | Foreign markets | EEM (Emerging Markets), VEA (Developed) | Global diversification |
| **Leveraged ETFs** | Amplified returns | TQQQ (3x NASDAQ), SOXL (3x Semis) | Short-term trading |
| **Inverse ETFs** | Profit from declines | SQQQ (3x inverse NASDAQ) | Hedging/shorting |

### Most Popular ETFs:

| ETF | Tracks | Expense Ratio | AUM |
|-----|--------|---------------|-----|
| SPY | S&P 500 | 0.09% | $500B+ |
| QQQ | NASDAQ 100 | 0.20% | $200B+ |
| VTI | Total US Market | 0.03% | $350B+ |
| GLD | Gold price | 0.40% | $60B+ |
| TLT | 20+ Year Treasury | 0.15% | $40B+ |

---

## Bonds for Traders

### Trading Bond Futures:
- US Treasury futures (ZB, ZN, ZF) among most liquid markets
- Trade interest rate expectations
- Safe haven during equity selloffs
- High leverage available

### Bond Market Signals for All Traders:
- **Inverted yield curve** → Potential recession → Risk-off
- **Rising yields** → Higher borrowing costs → Bearish for growth stocks
- **Falling yields** → Flight to safety → Dollar impact
- **10-year yield** → Benchmark for mortgage rates, valuations

---

## ETFs for Traders

### Why Trade ETFs:
- Lower risk than individual stocks (diversification)
- Track themes without picking individual winners
- Leveraged ETFs for amplified short-term moves
- Sector rotation strategies
- Hedge portfolio with inverse ETFs

### ETF Trading Strategies:

**Sector Rotation:**
- Identify strongest/weakest sectors
- Buy strong sector ETFs, short weak ones
- Rotate based on economic cycle

**Pairs Trading:**
- Long one ETF, short correlated one
- Profit from relative performance
- Lower market risk

---

## Bonds vs. Stocks vs. ETFs:

| Factor | Bonds | Stocks | ETFs |
|--------|-------|--------|------|
| Risk | Low-Medium | Medium-High | Varies |
| Return | 3-8%/year | 8-15%/year | Varies |
| Income | Fixed coupon | Dividends (variable) | Distributions |
| Liquidity | Moderate | High | High |
| Diversification | Per issuer | Per company | Built-in |
| Best For | Income, safety | Growth | Diversified exposure |

---

## Related Topics

- [Stock Market Basics](/en/academy/stock-market-basics) — Stock fundamentals
- [Indices Trading](/en/academy/indices-trading) — Index trading guide
- [Economic Indicators](/en/academy/economic-indicators-macro) — Macro analysis
- [Investing vs Trading](/en/academy/investing-vs-trading) — Choose your approach
- [Risk Management](/en/academy/risk-management) — Portfolio protection
`);

// ============================
// 4. BONDS & ETFs — BN
// ============================
writeMdx('bn', 'academy', 'bonds-etfs', {
  title: "Bond ও ETF — সম্পূর্ণ Investment গাইড",
  description: "Trading ও Investing-এর জন্য Bond ও ETF বুঝুন। Bond Mechanics, Yield Curve, ETF-এর ধরন এবং Diversification ও Income Generation-এ এগুলো কীভাবে ব্যবহার করবেন শিখুন।",
  level: "beginner",
  order: 10
}, `
## Bond ও ETF: অপরিহার্য Financial Instrument

Bond ও ETF হলো Investor ও Trader উভয়ের জন্য মৌলিক Instrument। এগুলো বোঝা আপনার সামগ্রিক Market জ্ঞান বাড়ায় এবং Diversification-এর সুযোগ দেয়।

---

## Bond কী?

**Bond** হলো একটি Debt Instrument — মূলত একটি ঋণদাতার (আপনি) কাছে ঋণগ্রহীতার (সরকার বা Corporation) IOU। Bond কিনলে আপনি নিয়মিত Interest Payment ও Maturity-তে Principal ফেরত পাওয়ার বিনিময়ে অর্থ ধার দিচ্ছেন।

### Bond Mechanics:

| Term | সংজ্ঞা |
|------|--------|
| **Face Value (Par)** | Maturity-তে ফেরত দেওয়া পরিমাণ (সাধারণত $1,000) |
| **Coupon Rate** | Face Value-তে প্রদত্ত বার্ষিক Interest Rate |
| **Maturity Date** | Bond-এর মেয়াদ শেষ হয় ও Principal ফেরত আসে |
| **Yield** | বর্তমান Price-এর ভিত্তিতে কার্যকর বার্ষিক Return |
| **Credit Rating** | Risk মূল্যায়ন (AAA = সবচেয়ে নিরাপদ, C = Junk) |

### Bond-এর ধরন:

| ধরন | ইস্যুকারী | Risk | Yield | উদাহরণ |
|------|-----------|------|-------|---------|
| **Treasury Bond** | সরকার | অত্যন্ত কম | কম | US T-Bond |
| **Corporate Bond** | Company | মধ্যম | মধ্যম | Apple, Microsoft Bond |
| **Municipal Bond** | স্থানীয় সরকার | কম | কম (Tax-free) | City/State Bond |
| **High-Yield (Junk)** | নিম্ন Rating-এর Company | বেশি | বেশি | BB-rated Corporate |

### Bond Price ও Yield সম্পর্ক:
\`\`\`
Bond Price ↑ → Yield ↓
Bond Price ↓ → Yield ↑

Interest Rate বাড়লে:
- বিদ্যমান Bond Price কমে
- নতুন Bond বেশি Yield-এ Issue হয়

Interest Rate কমলে:
- বিদ্যমান Bond Price বাড়ে
- নতুন Bond কম Yield-এ Issue হয়
\`\`\`

### Yield Curve:

| আকৃতি | অর্থ | Market ইঙ্গিত |
|--------|------|--------------|
| **Normal** (ঊর্ধ্বমুখী) | Long-term Yield > Short-term | অর্থনীতি সুস্থ, Growth প্রত্যাশিত |
| **Flat** | সব Maturity-তে সমান Yield | Transition Period, অনিশ্চয়তা |
| **Inverted** | Short-term Yield > Long-term | Recession Indicator (ঐতিহাসিকভাবে নির্ভরযোগ্য) |

---

## ETF কী?

**ETF (Exchange-Traded Fund)** হলো Securities-এর একটি Basket যা Stock-এর মতো Exchange-এ Trade হয়। ETF Index, Sector, Commodity বা অন্যান্য Asset Track করে।

### ETF কীভাবে কাজ করে:
- সারাদিন ধরে Trade হয় (Stock-এর মতো)
- একাধিক Underlying Asset ধারণ করে
- কম Management Fee (সাধারণত 0.03%-0.75%)
- Tax Efficient
- অত্যন্ত Liquid (প্রধান ETF)

### ETF-এর ধরন:

| ধরন | Track করে | উদাহরণ | উপযুক্ত |
|------|----------|---------|----------|
| **Index ETF** | Market Index | SPY (S&P 500), QQQ (NASDAQ) | Passive Investing |
| **Sector ETF** | নির্দিষ্ট Industry | XLF (Finance), XLK (Tech) | Sector Rotation |
| **Bond ETF** | Bond Portfolio | TLT (20yr Treasury), HYG | Fixed Income |
| **Commodity ETF** | Commodity Price | GLD (Gold), USO (Oil) | Commodity Exposure |
| **Leveraged ETF** | বর্ধিত Return | TQQQ (3x NASDAQ) | Short-term Trading |
| **Inverse ETF** | পতন থেকে Profit | SQQQ (3x Inverse NASDAQ) | Hedging/Shorting |

---

## Trader-দের জন্য Bond

### Bond Market Signal:
- **Inverted Yield Curve** → সম্ভাব্য Recession → Risk-off
- **Rising Yield** → বেশি Borrowing Cost → Growth Stock-এ Bearish
- **Falling Yield** → Flight to Safety → Dollar প্রভাব
- **10-year Yield** → Mortgage Rate ও Valuation-এর Benchmark

---

## Trader-দের জন্য ETF

### কেন ETF Trade করবেন:
- Individual Stock-এর চেয়ে কম Risk (Diversification)
- Individual Winner না বেছে Theme Track করুন
- Leveraged ETF — বর্ধিত Short-term Move
- Sector Rotation Strategy
- Inverse ETF দিয়ে Portfolio Hedge করুন

---

## Bond vs. Stock vs. ETF:

| বিষয় | Bond | Stock | ETF |
|--------|------|-------|-----|
| Risk | কম-মধ্যম | মধ্যম-বেশি | বিভিন্ন |
| Return | ৩-৮%/বছর | ৮-১৫%/বছর | বিভিন্ন |
| Income | নির্দিষ্ট Coupon | Dividend (পরিবর্তনশীল) | Distribution |
| Liquidity | মধ্যম | বেশি | বেশি |
| Diversification | প্রতি Issuer | প্রতি Company | Built-in |
| উপযুক্ত | Income, নিরাপত্তা | Growth | Diversified Exposure |

---

## সম্পর্কিত বিষয়

- [Stock Market Basics](/bn/academy/stock-market-basics) — Stock Fundamental
- [Indices Trading](/bn/academy/indices-trading) — Index Trading গাইড
- [Economic Indicators](/bn/academy/economic-indicators-macro) — Macro Analysis
- [Investing vs Trading](/bn/academy/investing-vs-trading) — পদ্ধতি বেছে নিন
- [Risk Management](/bn/academy/risk-management) — Portfolio সুরক্ষা
`);

// ============================
// 5. PERPETUAL FUTURES — EN
// ============================
writeMdx('en', 'academy', 'perpetual-futures', {
  title: "Perpetual Futures & Funding Rates — Complete Guide",
  description: "Master perpetual futures trading. Learn how perps work, funding rate mechanics, liquidation, and strategies for trading crypto and forex perpetual contracts.",
  level: "intermediate",
  order: 11
}, `
## What Are Perpetual Futures?

Perpetual Futures (Perps) are derivative contracts that allow you to trade an asset's price without expiry dates. Unlike traditional futures that expire monthly/quarterly, perpetual contracts can be held indefinitely.

<Callout type="info" title="Key Feature">
Perpetual futures are the most popular trading instrument in crypto markets. They combine the leverage of futures with the simplicity of never worrying about contract expiry or rolling positions.
</Callout>

---

## How Perpetual Futures Work

### vs. Traditional Futures:

| Feature | Traditional Futures | Perpetual Futures |
|---------|-------------------|-------------------|
| Expiry | Monthly/Quarterly | No expiry |
| Settlement | At expiry date | Continuous (funding) |
| Price Anchor | Converges at expiry | Funding rate mechanism |
| Rolling | Required before expiry | Not needed |
| Available | All markets | Mainly crypto, some forex |

### The Funding Rate Mechanism:

Perpetual futures use a **funding rate** to keep the contract price close to the spot (actual) price:

\`\`\`
If Perp Price > Spot Price:
→ Funding rate is POSITIVE
→ Longs PAY shorts
→ Incentivizes selling (brings price down to spot)

If Perp Price < Spot Price:
→ Funding rate is NEGATIVE
→ Shorts PAY longs
→ Incentivizes buying (brings price up to spot)
\`\`\`

### Funding Rate Payment:
- Typically paid every 8 hours (some exchanges 1 hour)
- Rate varies based on premium/discount to spot
- Directly debited/credited to your position
- Can be 0.01% to 0.5%+ per interval during extreme conditions

---

## Leverage in Perpetual Futures

### Available Leverage by Exchange:

| Exchange | Max Leverage | Maintenance Margin |
|----------|-------------|-------------------|
| Binance | 125x | 0.5-5% |
| Bybit | 100x | 0.5-5% |
| OKX | 125x | 0.5-5% |
| dYdX | 20x | 3-5% |
| GMX | 50x | 1-2% |

### Position Sizing with Leverage:

\`\`\`
Position Value = Margin × Leverage

Example:
- Account: $10,000
- Margin used: $1,000 (10% of account)
- Leverage: 10x
- Position Value: $1,000 × 10 = $10,000

Each 1% price move = $100 (10% of margin)
Each 10% price move = $1,000 (100% of margin = LIQUIDATION)
\`\`\`

---

## Liquidation

### What is Liquidation?
When your losses approach your margin deposit, the exchange forcibly closes your position to prevent negative balance.

### Liquidation Price Formula:
\`\`\`
Long Liquidation Price = Entry Price × (1 - 1/Leverage + Maintenance Margin Rate)
Short Liquidation Price = Entry Price × (1 + 1/Leverage - Maintenance Margin Rate)

Example (Long, 10x leverage, 0.5% maintenance):
Entry: $50,000 BTC
Liquidation ≈ $50,000 × (1 - 0.10 + 0.005) = $45,250
Price must drop ~9.5% for liquidation
\`\`\`

### Avoiding Liquidation:
1. **Use lower leverage** (5x-10x maximum recommended)
2. **Set stop losses** well before liquidation price
3. **Don't use all available margin** (keep free margin)
4. **Monitor positions actively** during volatile periods
5. **Use isolated margin** (limits loss to one position)

---

## Cross Margin vs. Isolated Margin

| Feature | Cross Margin | Isolated Margin |
|---------|-------------|-----------------|
| Margin Pool | Entire account balance | Only assigned margin |
| Liquidation Risk | Uses all free balance | Limited to position margin |
| Flexibility | Higher effective leverage | Fixed per position |
| Risk | Entire account at risk | Only allocated margin at risk |
| Best For | Experienced traders | Beginners, risk management |

<Callout type="warning" title="Safety Recommendation">
Always use **Isolated Margin** when learning. Cross margin means a single bad trade can liquidate your ENTIRE account. Isolated margin limits your maximum loss to the margin allocated to that specific position.
</Callout>

---

## Funding Rate Strategies

### Funding Rate Arbitrage:
\`\`\`
Strategy: Collect funding payments while staying market-neutral

Method:
1. Long spot BTC (buy actual Bitcoin)
2. Short perp BTC (equal size)
3. Collect positive funding rate (longs pay you)
4. Net exposure: zero (hedged)
5. Profit: funding rate payments

Risk: Funding rate turns negative (then you pay)
Return: 10-40% APR during bull markets
\`\`\`

### Reading Funding Rates for Direction:
- **Very positive funding** (0.1%+) → Market overleveraged long → Potential crash
- **Very negative funding** (-0.1%+) → Market overleveraged short → Potential squeeze
- **Neutral funding** (0.01%) → Balanced market

---

## Order Types in Perpetual Futures

| Order Type | Description | Use Case |
|-----------|-------------|----------|
| **Market** | Execute immediately at best price | Quick entry/exit |
| **Limit** | Execute at specified price or better | Precise entries |
| **Stop Market** | Trigger market order at stop price | Stop losses |
| **Stop Limit** | Trigger limit order at stop price | Controlled stops |
| **Take Profit** | Close at profit target | Automated exits |
| **Trailing Stop** | Follows price with fixed distance | Lock profits |
| **Reduce Only** | Only reduces position, won't increase | Safety orders |

---

## Risk Management for Perps

### Rules for Perpetual Futures:

1. **Maximum 5-10x leverage** for regular trading
2. **Never use more than 20% of account** as margin for one position
3. **Set stop loss BEFORE entry** — never trade without it
4. **Use isolated margin** until very experienced
5. **Watch funding rates** — high rates signal overextension
6. **Avoid liquidation cascade zones** (high OI levels)
7. **Reduce size during extreme volatility**

### Position Size Formula for Perps:
\`\`\`
Max Position = (Account × Risk%) ÷ (Stop Loss % × Leverage adjustment)

Example:
- Account: $10,000
- Risk per trade: 2% = $200
- Stop loss: 2% from entry
- Leverage: 10x

Max Position Value = $200 ÷ 0.02 = $10,000
Margin needed = $10,000 ÷ 10 = $1,000
\`\`\`

---

## Common Mistakes with Perpetual Futures

| Mistake | Result | Solution |
|---------|--------|----------|
| Using max leverage | Instant liquidation | Use 5-10x max |
| No stop loss | Account blow-up | Always set SL |
| Cross margin without care | Entire account lost | Use isolated |
| Ignoring funding rates | Silent losses over time | Check rates before holding |
| Overleveraging portfolio | One bad trade ruins all | Max 20% margin per trade |
| Trading during high volatility without reducing | Flash crash liquidation | Reduce size in extreme conditions |

---

## Related Topics

- [Crypto Trading](/en/academy/crypto-trading) — Complete crypto strategies
- [Futures Basics](/en/academy/futures-basics) — Traditional futures explained
- [Risk Management](/en/academy/risk-management) — Capital protection
- [Margin & Leverage](/en/academy/margin-leverage) — Leverage mechanics
- [Position Sizing](/en/academy/position-sizing) — Calculate correct sizes
`);

// ============================
// 5. PERPETUAL FUTURES — BN
// ============================
writeMdx('bn', 'academy', 'perpetual-futures', {
  title: "Perpetual Futures ও Funding Rate — সম্পূর্ণ গাইড",
  description: "Perpetual Futures Trading আয়ত্ত করুন। Perp কীভাবে কাজ করে, Funding Rate Mechanics, Liquidation এবং Crypto ও Forex Perpetual Contract Trading-এর Strategy শিখুন।",
  level: "intermediate",
  order: 11
}, `
## Perpetual Futures কী?

Perpetual Futures (Perp) হলো Derivative Contract যা আপনাকে কোনো Expiry Date ছাড়াই একটি Asset-এর Price Trade করতে দেয়। Traditional Futures-এর বিপরীতে যেগুলো Monthly/Quarterly Expire হয়, Perpetual Contract অনির্দিষ্টকাল ধরে রাখা যায়।

<Callout type="info" title="মূল বৈশিষ্ট্য">
Perpetual Futures হলো Crypto Market-এ সবচেয়ে জনপ্রিয় Trading Instrument। এগুলো Futures-এর Leverage-কে Contract Expiry বা Rolling Position নিয়ে চিন্তা না করার সরলতার সাথে একত্রিত করে।
</Callout>

---

## Perpetual Futures কীভাবে কাজ করে

### Traditional Futures-এর সাথে তুলনা:

| বৈশিষ্ট্য | Traditional Futures | Perpetual Futures |
|-----------|-------------------|-------------------|
| Expiry | Monthly/Quarterly | কোনো Expiry নেই |
| Settlement | Expiry Date-এ | ক্রমাগত (Funding) |
| Price Anchor | Expiry-তে Converge | Funding Rate Mechanism |
| Rolling | Expiry-র আগে প্রয়োজন | প্রয়োজন নেই |
| উপলব্ধ | সব Market | মূলত Crypto, কিছু Forex |

### Funding Rate Mechanism:

Perpetual Futures একটি **Funding Rate** ব্যবহার করে Contract Price-কে Spot (প্রকৃত) Price-এর কাছাকাছি রাখতে:

\`\`\`
যদি Perp Price > Spot Price:
→ Funding Rate পজিটিভ
→ Long-রা Short-দের Pay করে
→ Selling-এ উৎসাহিত করে (Price Spot-এ নামায়)

যদি Perp Price < Spot Price:
→ Funding Rate নেগেটিভ
→ Short-রা Long-দের Pay করে
→ Buying-এ উৎসাহিত করে (Price Spot-এ তোলে)
\`\`\`

### Funding Rate Payment:
- সাধারণত প্রতি ৮ ঘণ্টায় দেওয়া হয় (কিছু Exchange-এ ১ ঘণ্টা)
- Spot-এর তুলনায় Premium/Discount-এর ভিত্তিতে Rate পরিবর্তিত হয়
- সরাসরি আপনার Position থেকে Debit/Credit হয়
- চরম পরিস্থিতিতে Interval প্রতি 0.01% থেকে 0.5%+ হতে পারে

---

## Perpetual Futures-এ Leverage

### Leverage-সহ Position Sizing:

\`\`\`
Position Value = Margin × Leverage

উদাহরণ:
- Account: $10,000
- ব্যবহৃত Margin: $1,000 (Account-এর 10%)
- Leverage: 10x
- Position Value: $1,000 × 10 = $10,000

প্রতি 1% Price Move = $100 (Margin-এর 10%)
প্রতি 10% Price Move = $1,000 (Margin-এর 100% = LIQUIDATION)
\`\`\`

---

## Liquidation

### Liquidation কী?
আপনার Loss যখন Margin Deposit-এর কাছাকাছি পৌঁছায়, Exchange জোর করে আপনার Position Close করে Negative Balance রোধ করতে।

### Liquidation Price সূত্র:
\`\`\`
Long Liquidation Price = Entry Price × (1 - 1/Leverage + Maintenance Margin Rate)

উদাহরণ (Long, 10x Leverage, 0.5% Maintenance):
Entry: $50,000 BTC
Liquidation ≈ $50,000 × (1 - 0.10 + 0.005) = $45,250
Liquidation-এর জন্য Price ~9.5% কমতে হবে
\`\`\`

### Liquidation এড়ানোর উপায়:
1. **কম Leverage ব্যবহার করুন** (সর্বোচ্চ 5x-10x সুপারিশকৃত)
2. **Stop Loss সেট করুন** Liquidation Price-এর অনেক আগে
3. **সব Available Margin ব্যবহার করবেন না** (Free Margin রাখুন)
4. **Volatile Period-এ Position সক্রিয়ভাবে Monitor করুন**
5. **Isolated Margin ব্যবহার করুন** (একটি Position-এ Loss সীমাবদ্ধ রাখে)

---

## Cross Margin vs. Isolated Margin

| বৈশিষ্ট্য | Cross Margin | Isolated Margin |
|-----------|-------------|-----------------|
| Margin Pool | সম্পূর্ণ Account Balance | শুধুমাত্র নির্ধারিত Margin |
| Liquidation Risk | সব Free Balance ব্যবহার করে | Position Margin-এ সীমাবদ্ধ |
| নমনীয়তা | বেশি Effective Leverage | প্রতি Position-এ নির্দিষ্ট |
| Risk | সম্পূর্ণ Account ঝুঁকিতে | শুধু বরাদ্দকৃত Margin ঝুঁকিতে |
| উপযুক্ত | অভিজ্ঞ Trader | Beginner, Risk Management |

<Callout type="warning" title="নিরাপত্তা সুপারিশ">
শেখার সময় সবসময় **Isolated Margin** ব্যবহার করুন। Cross Margin মানে একটি খারাপ Trade আপনার সম্পূর্ণ Account Liquidate করতে পারে। Isolated Margin আপনার সর্বোচ্চ Loss সেই নির্দিষ্ট Position-এ বরাদ্দকৃত Margin-এ সীমাবদ্ধ রাখে।
</Callout>

---

## Funding Rate Strategy

### Funding Rate Arbitrage:
\`\`\`
Strategy: Market-neutral থেকে Funding Payment সংগ্রহ করুন

পদ্ধতি:
1. Spot BTC Long করুন (প্রকৃত Bitcoin কিনুন)
2. Perp BTC Short করুন (সমান Size)
3. Positive Funding Rate সংগ্রহ করুন (Long-রা আপনাকে Pay করে)
4. Net Exposure: শূন্য (Hedged)
5. Profit: Funding Rate Payment

Risk: Funding Rate Negative হলে (তখন আপনি Pay করেন)
Return: Bull Market-এ 10-40% APR
\`\`\`

### Direction জানতে Funding Rate পড়া:
- **অত্যন্ত Positive Funding** (0.1%+) → Market Overleveraged Long → সম্ভাব্য Crash
- **অত্যন্ত Negative Funding** (-0.1%+) → Market Overleveraged Short → সম্ভাব্য Squeeze
- **Neutral Funding** (0.01%) → ভারসাম্যপূর্ণ Market

---

## Perpetual Futures-এ Risk Management

### নিয়ম:

1. **সাধারণ Trading-এ সর্বোচ্চ 5-10x Leverage**
2. **একটি Position-এর Margin-এ Account-এর ২০% এর বেশি কখনো নয়**
3. **Entry-র আগে Stop Loss সেট করুন** — কখনো SL ছাড়া Trade নয়
4. **অত্যন্ত অভিজ্ঞ না হওয়া পর্যন্ত Isolated Margin ব্যবহার করুন**
5. **Funding Rate পর্যবেক্ষণ করুন** — উচ্চ Rate Overextension-এর Signal
6. **চরম Volatility-তে Size কমান**

---

## Perpetual Futures-এ সাধারণ ভুল

| ভুল | ফলাফল | সমাধান |
|------|--------|--------|
| Max Leverage ব্যবহার | তাৎক্ষণিক Liquidation | সর্বোচ্চ 5-10x ব্যবহার |
| Stop Loss নেই | Account Blow-up | সবসময় SL সেট করুন |
| অসাবধানে Cross Margin | সম্পূর্ণ Account হারানো | Isolated ব্যবহার করুন |
| Funding Rate উপেক্ষা | সময়ের সাথে নীরব Loss | ধরে রাখার আগে Rate Check |
| Portfolio Overleveraging | একটি খারাপ Trade সব নষ্ট করে | প্রতি Trade-এ সর্বোচ্চ 20% Margin |

---

## সম্পর্কিত বিষয়

- [Crypto Trading](/bn/academy/crypto-trading) — সম্পূর্ণ Crypto Strategy
- [Futures Basics](/bn/academy/futures-basics) — Traditional Futures ব্যাখ্যা
- [Risk Management](/bn/academy/risk-management) — Capital সুরক্ষা
- [Margin ও Leverage](/bn/academy/margin-leverage) — Leverage Mechanics
- [Position Sizing](/bn/academy/position-sizing) — সঠিক Size গণনা
`);

// ============================
// 6. VOLATILITY ANALYSIS — EN
// ============================
writeMdx('en', 'academy', 'volatility-analysis', {
  title: "Volatility Analysis & VIX — Complete Guide",
  description: "Master volatility analysis for trading. Learn how to measure, interpret, and trade volatility using ATR, VIX, Bollinger Bands, and volatility-based strategies.",
  level: "intermediate",
  order: 12
}, `
## What is Volatility?

Volatility measures the **degree of price fluctuation** over a given time period. High volatility means large, rapid price swings; low volatility means small, gradual movements. Understanding volatility is essential for proper position sizing, stop placement, and strategy selection.

<Callout type="info" title="Key Insight">
Volatility is not direction — it tells you HOW MUCH price might move, not which direction. High volatility creates both great opportunities and great risks. Smart traders adjust their approach based on current volatility conditions.
</Callout>

---

## Measuring Volatility

### 1. Average True Range (ATR)

The most practical volatility indicator for traders:

\`\`\`
True Range = Maximum of:
1. Current High - Current Low
2. |Current High - Previous Close|
3. |Current Low - Previous Close|

ATR = Average of True Range over N periods (typically 14)
\`\`\`

### How to Use ATR:

| Application | Method |
|-------------|--------|
| **Stop Loss** | Set SL at 1.5-2× ATR from entry |
| **Take Profit** | Set TP at 2-3× ATR from entry |
| **Position Size** | Larger ATR = smaller position size |
| **Filter** | Don't trade when ATR is extremely low |
| **Breakout** | Enter when price moves >1× ATR from level |

### ATR-Based Stop Loss Example:
\`\`\`
EUR/USD Daily ATR = 80 pips
Entry: 1.0900 (Long)
Stop Loss: 1.0900 - (80 × 1.5) = 1.0900 - 120 pips = 1.0780
Take Profit: 1.0900 + (80 × 2.5) = 1.0900 + 200 pips = 1.1100
Risk:Reward = 120:200 = 1:1.67
\`\`\`

---

### 2. VIX (Volatility Index)

The **CBOE Volatility Index** measures expected 30-day volatility of the S&P 500, often called the "Fear Index."

### VIX Levels:

| VIX Range | Market Condition | Trading Implications |
|-----------|-----------------|---------------------|
| Below 12 | Very low volatility (complacency) | Breakout imminent, sell options |
| 12-20 | Normal volatility | Standard trading conditions |
| 20-30 | Elevated volatility | Increased uncertainty, wider stops |
| 30-40 | High volatility (fear) | Sell panic, buy opportunity |
| Above 40 | Extreme fear/crisis | Major crash, eventual reversal |

### VIX Trading Signals:
- **VIX spikes (>30)** → Fear is high → Contrarian buying opportunity for stocks
- **VIX extremely low (<12)** → Complacency → Market may be due for correction
- **VIX trending down** → Risk-on environment → Bullish for stocks
- **VIX trending up** → Risk-off environment → Defensive positioning

---

### 3. Bollinger Band Width

\`\`\`
BB Width = (Upper Band - Lower Band) ÷ Middle Band

Squeeze: BB Width at its lowest → Big move coming (direction unknown)
Expansion: BB Width widening → Trend developing
\`\`\`

---

## Volatility Regimes

### Low Volatility Environment:
- **Characteristics:** Tight ranges, small candles, low ATR
- **Strategy:** Range trading, mean reversion, breakout anticipation
- **Position Size:** Can use slightly larger (tighter stops work)
- **Caution:** Breakout coming — be ready to switch strategies

### High Volatility Environment:
- **Characteristics:** Large candles, gaps, fast moves, high ATR
- **Strategy:** Trend following, momentum, wider stops
- **Position Size:** Must be SMALLER (wider stops needed)
- **Caution:** Stops can be hit easily — use volatility-adjusted sizing

### Transition Periods:
- Moving from low → high volatility (breakout phase)
- Moving from high → low volatility (consolidation after trend)
- Most profitable trades happen during transitions

---

## Volatility-Based Position Sizing

### The ATR-Based Formula:
\`\`\`
Position Size = (Account × Risk%) ÷ (ATR × Multiplier × Pip Value)

Example:
Account: $10,000
Risk: 1% = $100
ATR (14-day): 80 pips
Multiplier: 1.5 (SL at 1.5× ATR = 120 pips)
Pip Value: $10 (1 standard lot)

Position Size = $100 ÷ (120 × $10) = 0.08 lots

During high volatility (ATR = 150 pips):
Position Size = $100 ÷ (225 × $10) = 0.04 lots
→ Position automatically smaller when volatility is high!
\`\`\`

<Callout type="info" title="Dynamic Sizing">
ATR-based position sizing is one of the most robust methods because it automatically adjusts your position size to current market conditions. When markets are volatile, you trade smaller. When calm, you can trade slightly larger.
</Callout>

---

## Trading Volatility

### Strategy 1: Bollinger Band Squeeze Breakout
- Wait for BB to squeeze (narrow width)
- Enter on breakout with volume confirmation
- Direction determined by overall trend bias
- Stop inside the squeeze, target 2-3× ATR

### Strategy 2: VIX Mean Reversion
- Buy stocks/indices when VIX spikes above 30
- Historical data shows markets recover after fear spikes
- Scale in positions as VIX rises further
- Take profit as VIX normalizes

### Strategy 3: Volatility Expansion
- Identify assets transitioning from low → high volatility
- Enter early in the expansion phase
- Ride the trend as volatility expands
- Exit when volatility starts contracting

---

## Volatility by Market

| Market | Avg Daily Volatility | High Vol Days |
|--------|---------------------|---------------|
| EUR/USD | 60-100 pips | 150+ pips |
| GBP/USD | 80-130 pips | 200+ pips |
| Gold | $15-40 | $60-100+ |
| S&P 500 | 0.5-1.5% | 3-5%+ |
| Bitcoin | 2-5% | 10-20%+ |
| USD/JPY | 50-90 pips | 150+ pips |

---

## Summary

- **Volatility** = magnitude of price movement (not direction)
- **ATR** = best practical tool for traders (stop sizing, position sizing)
- **VIX** = market fear gauge (contrarian signals)
- **High volatility** = smaller positions, wider stops
- **Low volatility** = breakout anticipation, slightly larger positions
- **Always adapt** your strategy and sizing to current volatility

---

## Related Topics

- [Risk Management](/en/academy/risk-management) — Capital protection fundamentals
- [Position Sizing](/en/academy/position-sizing) — Calculate exact lot sizes
- [Bollinger Bands](/en/academy/bollinger-bands-trading) — Volatility-based indicator
- [Technical Indicators](/en/academy/technical-indicators) — Complete indicator guide
- [Trading Psychology](/en/academy/trading-psychology) — Managing emotions during volatility
`);

// ============================
// 6. VOLATILITY ANALYSIS — BN
// ============================
writeMdx('bn', 'academy', 'volatility-analysis', {
  title: "Volatility Analysis ও VIX — সম্পূর্ণ গাইড",
  description: "Trading-এর জন্য Volatility Analysis আয়ত্ত করুন। ATR, VIX, Bollinger Band ব্যবহার করে Volatility পরিমাপ, ব্যাখ্যা ও Trade করা এবং Volatility-based Strategy শিখুন।",
  level: "intermediate",
  order: 12
}, `
## Volatility কী?

Volatility একটি নির্দিষ্ট সময়ে **Price ওঠানামার মাত্রা** পরিমাপ করে। High Volatility মানে বড়, দ্রুত Price Swing; Low Volatility মানে ছোট, ধীরগতির Movement। সঠিক Position Sizing, Stop Placement এবং Strategy নির্বাচনের জন্য Volatility বোঝা অপরিহার্য।

<Callout type="info" title="মূল অন্তর্দৃষ্টি">
Volatility Direction নয় — এটি বলে Price কতটা Move করতে পারে, কোন দিকে নয়। High Volatility দুর্দান্ত সুযোগ ও দুর্দান্ত Risk উভয়ই তৈরি করে। স্মার্ট Trader বর্তমান Volatility অবস্থার ভিত্তিতে পদ্ধতি পরিবর্তন করেন।
</Callout>

---

## Volatility পরিমাপ

### ১. Average True Range (ATR)

Trader-দের জন্য সবচেয়ে ব্যবহারিক Volatility Indicator:

\`\`\`
True Range = সর্বোচ্চটি:
1. Current High - Current Low
2. |Current High - Previous Close|
3. |Current Low - Previous Close|

ATR = N Period-এ True Range-এর Average (সাধারণত 14)
\`\`\`

### ATR কীভাবে ব্যবহার করবেন:

| প্রয়োগ | পদ্ধতি |
|---------|--------|
| **Stop Loss** | Entry থেকে 1.5-2× ATR-এ SL সেট করুন |
| **Take Profit** | Entry থেকে 2-3× ATR-এ TP সেট করুন |
| **Position Size** | বড় ATR = ছোট Position Size |
| **Filter** | ATR অত্যন্ত কম হলে Trade করবেন না |
| **Breakout** | Price যখন Level থেকে >1× ATR Move করে তখন Enter |

### ATR-based Stop Loss উদাহরণ:
\`\`\`
EUR/USD Daily ATR = 80 Pip
Entry: 1.0900 (Long)
Stop Loss: 1.0900 - (80 × 1.5) = 1.0900 - 120 Pip = 1.0780
Take Profit: 1.0900 + (80 × 2.5) = 1.0900 + 200 Pip = 1.1100
Risk:Reward = 120:200 = 1:1.67
\`\`\`

---

### ২. VIX (Volatility Index)

**CBOE Volatility Index** S&P 500-এর প্রত্যাশিত ৩০-দিনের Volatility পরিমাপ করে, প্রায়ই "Fear Index" বলা হয়।

### VIX Level:

| VIX Range | Market অবস্থা | Trading ইঙ্গিত |
|-----------|--------------|----------------|
| ১২-এর নিচে | অত্যন্ত কম Volatility (আত্মতুষ্টি) | Breakout আসন্ন |
| ১২-২০ | স্বাভাবিক Volatility | মানক Trading অবস্থা |
| ২০-৩০ | বর্ধিত Volatility | অনিশ্চয়তা বাড়ছে, চওড়া Stop |
| ৩০-৪০ | উচ্চ Volatility (ভয়) | Panic Sell, Buying সুযোগ |
| ৪০-এর উপরে | চরম ভয়/সংকট | বড় Crash, শেষ পর্যন্ত Reversal |

### VIX Trading Signal:
- **VIX Spike (>30)** → ভয় বেশি → Stock-এ Contrarian Buying সুযোগ
- **VIX অত্যন্ত কম (<12)** → আত্মতুষ্টি → Market Correction-এর সময় হতে পারে
- **VIX নিম্নমুখী** → Risk-on পরিবেশ → Stock-এ Bullish
- **VIX ঊর্ধ্বমুখী** → Risk-off পরিবেশ → Defensive Positioning

---

## Volatility Regime

### Low Volatility পরিবেশ:
- **বৈশিষ্ট্য:** সংকীর্ণ Range, ছোট Candle, কম ATR
- **Strategy:** Range Trading, Mean Reversion, Breakout Anticipation
- **Position Size:** সামান্য বড় হতে পারে (Tight Stop কাজ করে)
- **সতর্কতা:** Breakout আসছে — Strategy পরিবর্তনে প্রস্তুত থাকুন

### High Volatility পরিবেশ:
- **বৈশিষ্ট্য:** বড় Candle, Gap, দ্রুত Move, উচ্চ ATR
- **Strategy:** Trend Following, Momentum, চওড়া Stop
- **Position Size:** অবশ্যই ছোট হতে হবে (চওড়া Stop প্রয়োজন)
- **সতর্কতা:** Stop সহজে Hit হতে পারে — Volatility-adjusted Sizing ব্যবহার করুন

---

## Volatility-based Position Sizing

### ATR-based সূত্র:
\`\`\`
Position Size = (Account × Risk%) ÷ (ATR × Multiplier × Pip Value)

উদাহরণ:
Account: $10,000
Risk: 1% = $100
ATR (14-day): 80 Pip
Multiplier: 1.5 (SL at 1.5× ATR = 120 Pip)
Pip Value: $10 (1 Standard Lot)

Position Size = $100 ÷ (120 × $10) = 0.08 Lot

High Volatility-তে (ATR = 150 Pip):
Position Size = $100 ÷ (225 × $10) = 0.04 Lot
→ Volatility বেশি হলে Position স্বয়ংক্রিয়ভাবে ছোট!
\`\`\`

<Callout type="info" title="Dynamic Sizing">
ATR-based Position Sizing সবচেয়ে শক্তিশালী পদ্ধতিগুলোর একটি কারণ এটি বর্তমান Market অবস্থার সাথে স্বয়ংক্রিয়ভাবে আপনার Position Size Adjust করে। Market Volatile হলে ছোট Trade করেন। শান্ত হলে সামান্য বড় Trade করতে পারেন।
</Callout>

---

## Volatility Trading

### Strategy ১: Bollinger Band Squeeze Breakout
- BB Squeeze (সংকীর্ণ Width)-এর জন্য অপেক্ষা করুন
- Volume Confirmation-সহ Breakout-এ Enter করুন
- সামগ্রিক Trend Bias দ্বারা Direction নির্ধারিত
- Squeeze-র ভিতরে Stop, Target 2-3× ATR

### Strategy ২: VIX Mean Reversion
- VIX ৩০-এর উপরে Spike করলে Stock/Index কিনুন
- Historical Data দেখায় Fear Spike-এর পর Market Recovery হয়
- VIX আরও বাড়লে Scale In করুন
- VIX Normalize হলে Profit নিন

### Strategy ৩: Volatility Expansion
- Low → High Volatility-তে Transition করছে এমন Asset চিহ্নিত করুন
- Expansion Phase-র শুরুতে Enter করুন
- Volatility Expand হওয়ার সাথে Trend Ride করুন
- Volatility Contract শুরু করলে Exit করুন

---

## Market অনুযায়ী Volatility

| Market | গড় দৈনিক Volatility | High Volatility দিন |
|--------|---------------------|---------------------|
| EUR/USD | 60-100 Pip | 150+ Pip |
| GBP/USD | 80-130 Pip | 200+ Pip |
| Gold | $15-40 | $60-100+ |
| S&P 500 | 0.5-1.5% | 3-5%+ |
| Bitcoin | 2-5% | 10-20%+ |
| USD/JPY | 50-90 Pip | 150+ Pip |

---

## সারসংক্ষেপ

- **Volatility** = Price Movement-এর মাত্রা (Direction নয়)
- **ATR** = Trader-দের জন্য সেরা ব্যবহারিক Tool (Stop Sizing, Position Sizing)
- **VIX** = Market Fear Gauge (Contrarian Signal)
- **High Volatility** = ছোট Position, চওড়া Stop
- **Low Volatility** = Breakout Anticipation, সামান্য বড় Position
- বর্তমান Volatility-তে সবসময় আপনার Strategy ও Sizing **Adapt** করুন

---

## সম্পর্কিত বিষয়

- [Risk Management](/bn/academy/risk-management) — Capital সুরক্ষার Fundamental
- [Position Sizing](/bn/academy/position-sizing) — সুনির্দিষ্ট Lot Size গণনা
- [Bollinger Bands](/bn/academy/bollinger-bands-trading) — Volatility-based Indicator
- [Technical Indicators](/bn/academy/technical-indicators) — সম্পূর্ণ Indicator গাইড
- [Trading Psychology](/bn/academy/trading-psychology) — Volatility-তে আবেগ ম্যানেজ
`);

console.log('\n✅ Academy Batch 2 Complete: 6 topics × 2 languages = 12 files');
console.log('Topics: stock-market-basics, commodity-markets, cryptocurrency-fundamentals, bonds-etfs, perpetual-futures, volatility-analysis');

