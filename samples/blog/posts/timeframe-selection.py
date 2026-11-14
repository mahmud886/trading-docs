SPEC = dict(
    fm=dict(date="2026-05-07", category="Technical Analysis", tags=["timeframe", "analysis", "strategy", "multi-timeframe"], reading=7, featured=False),
    fig=dict(img="/images/price-action/intraday/intraday-fvg-sessions-dark.webp", video="/videos/price-action/intraday-explainer-dark.mp4", lesson="/price-action/intraday"),
    en=dict(
        title="Choosing a Timeframe — Match It to Your Time, Costs and Temperament",
        description="How to pick the timeframe you trade: your available time, how the spread compares with your stop (a 1-pip spread costs 0.2R on a 5-pip stop but 0.05R on a 20-pip stop), the noise at lower timeframes, a pairing for higher-timeframe context, and a simple trial method.",
        intro="There is no best timeframe, only the one that fits **your schedule, your costs and your temperament**. Lower timeframes offer more trades but more noise and a larger share of each trade lost to costs; higher timeframes offer fewer, slower trades and need wider stops.",
        fix="The original ranked timeframes by profitability and gave win rates for each. No such ranking is established: results depend on the trader, the pair and the period. This version shows the arithmetic that actually differs between timeframes (cost as a share of risk) and a way to test your own choice.",
        sections=[
            ("Four Trading Styles", """
| Style            | Typical chart | Holding time             | Typical stop (EUR/USD) | Attention needed          |
| ---------------- | ------------- | ------------------------ | ---------------------- | ------------------------- |
| **Scalping**     | 1m – 5m       | Minutes                  | 3 – 8 pips             | Constant, during sessions |
| **Day trading**  | 5m – 1H       | Hours, closed by the end of the day | 10 – 30 pips | Several hours a day       |
| **Swing**        | 4H – daily    | Days to weeks            | 40 – 100 pips          | Checks once or twice a day |
| **Position**     | Daily – weekly | Weeks to months         | 100+ pips              | Occasional                |

These are common ranges, not rules. See [Intraday](/en/price-action/intraday), [Scalping](/en/price-action/scalping) and [Swing Trading](/en/price-action/swing-trading)."""),
            ("Costs Decide More Than You Think", """
A spread of 1 pip costs the same in pips on every timeframe, but a very different share of your **risk**:

| Stop distance | Cost of a 1-pip spread in R |
| ------------- | --------------------------- |
| 5 pips        | 0.20R                       |
| 10 pips       | 0.10R                       |
| 20 pips       | 0.05R                       |
| 50 pips       | 0.02R                       |

With a 5-pip stop, a system needs an edge larger than 0.2R per trade just to break even on spread alone; with a 50-pip stop the same spread is a rounding error. Slippage adds to this at fast moments. See [Expectancy Formula](/en/quantitative/expectancy-formula) for how costs reduce expectancy."""),
            ("Choosing and Testing", """
| Step | What to do                                                                                  |
| ---- | ------------------------------------------------------------------------------------------- |
| 1    | List the hours per day you can **actually** watch the chart                                  |
| 2    | Pick the style whose holding time fits those hours                                          |
| 3    | Add one higher timeframe for direction (about 4 to 6 times the entry timeframe)             |
| 4    | Trade it on a demo or at small size for 50 trades and log R, costs and stress               |
| 5    | Change only one thing at a time (timeframe, pair or rules)                                  |

The [Multi-Timeframe Analysis](/en/blog/multi-timeframe-analysis-complete) post shows how to combine three charts."""),
        ],
        example="""
You can watch the chart for two hours a day, so you choose 15-minute entries with a 4-hour direction chart. EUR/USD: 4-hour structure bullish; on the 15-minute chart price pulls back and rejects a demand zone. Plan: buy **1.0850**, stop **1.0830** (20 pips), target **1.0890** (40 pips): **1 : 2.0** planned. A 1-pip spread costs 0.05R on that stop; on a 5-pip scalping stop it would cost 0.20R.""",
        mistakes=[["Choosing the timeframe for excitement", "Choose it for your schedule and costs"], ["Scalping with a wide spread", "Compute the spread as a share of the stop first"], ["Changing timeframes after each loss", "Fix it for at least 50 trades"], ["Ignoring the higher timeframe", "Add a direction chart"]],
        practice=["Write down the hours per day you can really trade.", "Compute the cost in R of your usual spread at your usual stop.", "Trade one timeframe for 50 demo trades and log the results."],
        summary=[["Fit", "Choose by schedule, costs and temperament"], ["Costs", "A 1-pip spread is 0.20R on a 5-pip stop and 0.05R on a 20-pip stop"], ["Context", "Add a direction chart 4 to 6 times higher"], ["Test", "Trade it for 50 trades and log the results"]],
        related=[("/price-action/intraday", "Intraday Price Action"), ("/price-action/swing-trading", "Swing Trading"), ("/blog/multi-timeframe-analysis-complete", "Multi-Timeframe Analysis"), ("/quantitative/expectancy-formula", "Expectancy Formula")],
        fig_alt="A synthetic intraday EUR/USD chart with session blocks and a fair value gap entry",
        fig_note="Synthetic candles for teaching", fig_label="Intraday Price Action"),
    bn=dict(
        title="টাইমফ্রেম বাছা — আপনার সময়, খরচ ও মেজাজের সাথে মেলান",
        description="কোন টাইমফ্রেমে ট্রেড করবেন কীভাবে বাছবেন: আপনার হাতের সময়, স্প্রেড Stop এর তুলনায় কত (১ পিপ স্প্রেড ৫-পিপ Stop এ ০.২R কিন্তু ২০-পিপ Stop এ ০.০৫R), ছোট টাইমফ্রেমে নয়েজ, হায়ার-টাইমফ্রেম প্রসঙ্গের জোড়া, আর সরল পরীক্ষার পদ্ধতি।",
        intro="সেরা টাইমফ্রেম বলে কিছু নেই, শুধু যেটি **আপনার সময়সূচি, খরচ ও মেজাজে** মানায়। ছোট টাইমফ্রেমে ট্রেড বেশি কিন্তু নয়েজ বেশি আর প্রতিটি ট্রেডের বড় অংশ খরচে যায়; বড় টাইমফ্রেমে ট্রেড কম, ধীর, আর চওড়া Stop লাগে।",
        fix="মূল লেখায় টাইমফ্রেমকে লাভজনকতায় র‍্যাঙ্ক করা হয়েছিল ও প্রতিটির জয়ের হার ছিল। এমন কোনো র‍্যাঙ্কিং প্রতিষ্ঠিত নয়: ফল ট্রেডার, পেয়ার ও সময়ের ওপর নির্ভর করে। এই সংস্করণ দেখায় টাইমফ্রেমে আসলে যে অঙ্ক ভিন্ন (ঝুঁকির অংশ হিসেবে খরচ) আর আপনার নিজের বাছাই পরীক্ষার উপায়।",
        sections=[
            ("চার ট্রেডিং স্টাইল", """
| স্টাইল            | সাধারণ চার্ট | ধরে রাখার সময়             | সাধারণ Stop (EUR/USD) | কত মনোযোগ লাগে          |
| ---------------- | ------------- | ------------------------ | ---------------------- | ------------------------- |
| **স্ক্যাল্পিং**     | ১ম – ৫ম       | মিনিট                  | ৩ – ৮ পিপ              | সেশনে সারাক্ষণ |
| **ডে ট্রেডিং**  | ৫ম – ১ঘ       | ঘণ্টা, দিন শেষে বন্ধ | ১০ – ৩০ পিপ | দিনে কয়েক ঘণ্টা       |
| **সুইং**        | ৪ঘ – ডেইলি    | দিন থেকে সপ্তাহ            | ৪০ – ১০০ পিপ          | দিনে একবার-দুবার দেখা |
| **পজিশন**     | ডেইলি – সাপ্তাহিক | সপ্তাহ থেকে মাস         | ১০০+ পিপ              | মাঝেমধ্যে                |

এগুলো প্রচলিত পরিসর, নিয়ম নয়। [Intraday](/bn/price-action/intraday), [Scalping](/bn/price-action/scalping) ও [Swing Trading](/bn/price-action/swing-trading) দেখুন।"""),
            ("খরচ যতটা ভাবেন তার চেয়ে বেশি ঠিক করে", """
১ পিপ স্প্রেড প্রতিটি টাইমফ্রেমে পিপে একই খরচ, কিন্তু আপনার **ঝুঁকির** খুব ভিন্ন অংশ:

| Stop দূরত্ব | ১ পিপ স্প্রেডের খরচ R এ |
| ------------- | --------------------------- |
| ৫ পিপ        | ০.২০R                       |
| ১০ পিপ       | ০.১০R                       |
| ২০ পিপ       | ০.০৫R                       |
| ৫০ পিপ       | ০.০২R                       |

৫-পিপ Stop এ শুধু স্প্রেডেই Break-even হতে সিস্টেমের প্রতি ট্রেডে ০.২R এর বেশি Edge লাগে; ৫০-পিপ Stop এ একই স্প্রেড নগণ্য। দ্রুত মুহূর্তে স্লিপেজ এতে যোগ হয়। খরচ কীভাবে Expectancy কমায় তা [Expectancy Formula](/bn/quantitative/expectancy-formula) এ দেখুন।"""),
            ("বাছা ও পরীক্ষা", """
| ধাপ | কী করবেন                                                                                  |
| ---- | ------------------------------------------------------------------------------------------- |
| ১    | দিনে যত ঘণ্টা **আসলে** চার্ট দেখতে পারেন তা তালিকা করুন                                  |
| ২    | যে স্টাইলের ধরে রাখার সময় ওই ঘণ্টায় মানায় তা বাছুন                                          |
| ৩    | দিকের জন্য একটি হায়ার টাইমফ্রেম যোগ করুন (এন্ট্রি টাইমফ্রেমের প্রায় ৪ থেকে ৬ গুণ)             |
| ৪    | ডেমোতে বা ছোট সাইজে ৫০ ট্রেড করে R, খরচ ও চাপ লগ করুন                |
| ৫    | একবারে একটি জিনিস বদলান (টাইমফ্রেম, পেয়ার বা নিয়ম)                                  |

তিনটি চার্ট কীভাবে মেলাবেন তা [Multi-Timeframe Analysis](/bn/blog/multi-timeframe-analysis-complete) পোস্টে আছে।"""),
        ],
        example="""
দিনে দুই ঘণ্টা চার্ট দেখতে পারেন, তাই ৪-ঘণ্টার দিক চার্টসহ ১৫-মিনিটে এন্ট্রি বাছলেন। EUR/USD: ৪-ঘণ্টার স্ট্রাকচার বুলিশ; ১৫-মিনিটে প্রাইস পুলব্যাক করে Demand জোন প্রত্যাখ্যান করে। পরিকল্পনা: **1.0850** এ Buy, Stop **1.0830** (২০ পিপ), টার্গেট **1.0890** (৪০ পিপ): পরিকল্পিত **১ : ২.০**। ওই Stop এ ১ পিপ স্প্রেডের খরচ ০.০৫R; ৫-পিপ স্ক্যাল্পিং Stop এ হতো ০.২০R।""",
        mistakes=[["উত্তেজনার জন্য টাইমফ্রেম বাছা", "সময়সূচি ও খরচ দেখে বাছুন"], ["চওড়া স্প্রেডে স্ক্যাল্পিং", "আগে Stop এর অংশ হিসেবে স্প্রেড হিসাব করুন"], ["প্রতি লোকসানের পর টাইমফ্রেম বদলানো", "অন্তত ৫০ ট্রেড স্থির রাখুন"], ["হায়ার টাইমফ্রেম উপেক্ষা", "একটি দিক চার্ট যোগ করুন"]],
        practice=["দিনে আসলে যত ঘণ্টা ট্রেড করতে পারেন লিখুন।", "আপনার স্বাভাবিক স্প্রেডের খরচ আপনার স্বাভাবিক Stop এ R এ হিসাব করুন।", "৫০টি ডেমো ট্রেড একটি টাইমফ্রেমে করে ফল লগ করুন।"],
        summary=[["মানানো", "সময়সূচি, খরচ ও মেজাজ দেখে বাছুন"], ["খরচ", "১ পিপ স্প্রেড ৫-পিপ Stop এ ০.২০R আর ২০-পিপ Stop এ ০.০৫R"], ["প্রসঙ্গ", "৪ থেকে ৬ গুণ বড় একটি দিক চার্ট যোগ করুন"], ["পরীক্ষা", "৫০ ট্রেড করে ফল লগ করুন"]],
        related=[("/price-action/intraday", "Intraday Price Action"), ("/price-action/swing-trading", "Swing Trading"), ("/blog/multi-timeframe-analysis-complete", "Multi-Timeframe Analysis"), ("/quantitative/expectancy-formula", "Expectancy Formula")],
        fig_alt="সেশন ব্লক ও Fair Value Gap এন্ট্রিসহ একটি সিন্থেটিক ইন্ট্রাডে EUR/USD চার্ট",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Intraday Price Action"),
)
