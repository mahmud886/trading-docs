SPEC = dict(
    fm=dict(date="2026-05-13", category="SMC", tags=["liquidity", "sweeps", "stop-hunt", "smc"], reading=5, featured=False),
    fig=dict(img="/images/ict/liquidity-sweep/eurusd-pdh-sweep-dark.webp", video="/videos/ict/sweep-anatomy-explainer-dark.mp4", lesson="/ict/liquidity-sweep"),
    en=dict(
        title="Liquidity Sweeps Explained — Anatomy of a Sweep and How to Trade It",
        description="A liquidity sweep is a brief move through an obvious high or low that closes back inside. This short guide covers the three parts of a sweep (the level, the wick, the close back), the confirmation you need before entering, the stop placement, and how a sweep differs from a breakout, with a worked previous-day-high example.",
        intro="A **liquidity sweep** happens when price pushes just beyond an obvious level (a previous high or low, equal highs or lows), triggers the orders resting there, and then **closes back inside the range**. It is a pattern in candles; what caused it is an interpretation.",
        fix="The original described sweeps as deliberate stop hunts and implied they reverse reliably. Some sweeps reverse and many turn into real breakouts. This version focuses on how to tell them apart and how to limit the cost of being wrong.",
        sections=[
            ("Anatomy of a Sweep", """
| Part                  | What you see                                                             |
| --------------------- | ------------------------------------------------------------------------ |
| **1. The level**      | An obvious high or low: previous day's high or low, equal highs or lows, session extremes |
| **2. The wick**       | Price trades beyond the level, often with a quick spike                  |
| **3. The close back** | A candle **closes back inside** the previous range                       |
| **4. Confirmation**   | A lower-timeframe structure shift in the opposite direction              |

Without part 3 you do not have a sweep, you have a breakout. See [Liquidity Sweep](/en/ict/liquidity-sweep) for the full anatomy and [Liquidity Concepts](/en/blog/liquidity-concepts-complete-guide) for the types of levels."""),
            ("Trading It", """
| Step | Rule                                                                                   |
| ---- | -------------------------------------------------------------------------------------- |
| 1    | Mark the level **before** price gets there                                              |
| 2    | Wait for the sweep and a close back inside                                              |
| 3    | Wait for a structure shift on a lower timeframe (a close beyond the last swing)         |
| 4    | Enter on the retest, with the stop **beyond the sweep's extreme**                       |
| 5    | Target the opposite side of the range or the next liquidity                             |

If price closes beyond the swept level again and holds, treat the move as a breakout and stand aside or reverse only on a new setup."""),
            ("Why Sweeps Fail", """
| Failure                                     | Looks like                                                      |
| ------------------------------------------- | --------------------------------------------------------------- |
| The close back inside never comes           | It was a breakout                                               |
| Sweep against a strong higher-timeframe trend | Reversal fades quickly                                         |
| A sweep during a news spike                 | Wicks are large and arbitrary                                   |
| Entering before confirmation                | You take the whole wick against you                             |"""),
        ],
        example="""
The previous day's high is **1.0890**. At the New York open (6:00 PM BD in summer) EUR/USD spikes to **1.0897** and a 15-minute candle closes at **1.0884**, back inside. A 5-minute candle then closes below the last higher low. Plan: sell **1.0882**, stop **1.0900** (above the sweep high): risk 18 pips; target **1.0850**: reward 32 pips, **1 : 1.8** planned. If price closes above **1.0900**, the sweep idea fails.""",
        mistakes=[["Entering at the wick", "Wait for the close back inside and a shift"], ["Calling any wick a sweep", "Require an obvious level and a close back inside"], ["Stop inside the wick", "Place it beyond the sweep's extreme"], ["Ignoring the larger trend", "Prefer sweeps that align with it"]],
        practice=["Find ten previous-day high or low touches and label each sweep or breakout.", "For the sweeps, note whether a lower-timeframe shift followed.", "Record the R reached after each confirmed entry."],
        summary=[["Sweep", "A move beyond an obvious level that closes back inside"], ["Needed", "The close back, then a structure shift"], ["Stop", "Beyond the sweep's extreme"], ["Caution", "Many beyond-level moves are breakouts"]],
        related=[("/ict/liquidity-sweep", "Liquidity Sweep"), ("/smc/liquidity-pools", "Liquidity Pools"), ("/blog/liquidity-concepts-complete-guide", "Liquidity Concepts"), ("/blog/liquidity-sweeps-smart-money", "Liquidity Sweeps and Smart Money")],
        fig_alt="A synthetic EUR/USD sweep of the previous day's high: price spikes above it and closes back inside",
        fig_note="Synthetic candles for teaching", fig_label="Liquidity Sweep"),
    bn=dict(
        title="Liquidity Sweeps ব্যাখ্যা — Sweep এর গঠন ও কীভাবে ট্রেড করবেন",
        description="Liquidity Sweep হলো সুস্পষ্ট High বা Low এর ওপারে ক্ষণিক মুভ যা ভেতরে ফিরে Close করে। এই সংক্ষিপ্ত গাইডে Sweep এর তিন অংশ (লেভেল, Wick, ফিরে Close), এন্ট্রির আগে প্রয়োজনীয় নিশ্চিতকরণ, Stop বসানো, আর Sweep কীভাবে Breakout থেকে আলাদা — আগের দিনের High এর উদাহরণসহ।",
        intro="**Liquidity Sweep** ঘটে যখন প্রাইস সুস্পষ্ট লেভেলের (আগের High বা Low, Equal High বা Low) সামান্য ওপারে গিয়ে সেখানে জমে থাকা অর্ডার ট্রিগার করে, তারপর **রেঞ্জের ভেতরে ফিরে Close করে**। এটি ক্যান্ডেলের প্যাটার্ন; কারণ ব্যাখ্যা মাত্র।",
        fix="মূল লেখায় Sweep কে ইচ্ছাকৃত Stop-হান্ট বলা হয়েছিল এবং নির্ভরযোগ্য উল্টে যাওয়ার ইঙ্গিত ছিল। কিছু Sweep উল্টায় আর অনেকগুলো আসল Breakout হয়। এই সংস্করণ আলাদা করার উপায় ও ভুল হলে খরচ সীমিত করার ওপর জোর দেয়।",
        sections=[
            ("Sweep এর গঠন", """
| অংশ                  | যা দেখেন                                                             |
| --------------------- | ------------------------------------------------------------------------ |
| **১. লেভেল**      | সুস্পষ্ট High বা Low: আগের দিনের High বা Low, Equal High বা Low, সেশনের চরম |
| **২. Wick**       | প্রাইস লেভেলের ওপারে ট্রেড করে, প্রায়ই দ্রুত স্পাইকে                  |
| **৩. ফিরে Close** | একটি ক্যান্ডেল আগের রেঞ্জের **ভেতরে ফিরে Close** করে                       |
| **৪. নিশ্চিতকরণ**   | লোয়ার-টাইমফ্রেমে বিপরীত দিকে স্ট্রাকচার শিফট              |

৩ নম্বর অংশ ছাড়া আপনার Sweep নেই, Breakout আছে। পূর্ণ গঠনের জন্য [Liquidity Sweep](/bn/ict/liquidity-sweep) ও লেভেলের ধরনের জন্য [Liquidity Concepts](/bn/blog/liquidity-concepts-complete-guide) দেখুন।"""),
            ("ট্রেড করা", """
| ধাপ | নিয়ম                                                                                   |
| ---- | -------------------------------------------------------------------------------------- |
| ১    | প্রাইস সেখানে পৌঁছানোর **আগে** লেভেল চিহ্নিত করুন                                              |
| ২    | Sweep ও ভেতরে ফিরে Close এর অপেক্ষা করুন                                              |
| ৩    | লোয়ার টাইমফ্রেমে স্ট্রাকচার শিফটের অপেক্ষা করুন (শেষ Swing এর ওপারে Close)         |
| ৪    | রিটেস্টে এন্ট্রি, Stop **Sweep এর চরমের ওপারে**                       |
| ৫    | রেঞ্জের উল্টো দিক বা পরের Liquidity তে টার্গেট                             |

প্রাইস আবার Sweep হওয়া লেভেলের ওপারে Close করে টিকে থাকলে মুভকে Breakout ধরুন; সরে থাকুন বা নতুন সেটআপ হলেই শুধু উল্টান।"""),
            ("কেন Sweep ব্যর্থ হয়", """
| ব্যর্থতা                                     | দেখতে কেমন                                                      |
| ------------------------------------------- | --------------------------------------------------------------- |
| ভেতরে ফিরে Close কখনো আসে না           | এটি Breakout ছিল                                               |
| শক্তিশালী হায়ার-টাইমফ্রেম ট্রেন্ডের বিরুদ্ধে Sweep | রিভার্সাল দ্রুত ফিকে হয়                                         |
| নিউজ স্পাইকের সময় Sweep                 | Wick বড় ও খেয়ালখুশি                                   |
| নিশ্চিতকরণের আগে এন্ট্রি                | পুরো Wick আপনার বিপরীতে নেন                             |"""),
        ],
        example="""
আগের দিনের High **1.0890**। New York খোলায় (Summer এ সন্ধ্যা ৬:০০ BD) EUR/USD **1.0897** এ স্পাইক করে আর ১৫-মিনিটের ক্যান্ডেল **1.0884** এ, ভেতরে ফিরে Close করে। তারপর ৫-মিনিটের ক্যান্ডেল শেষ Higher Low এর নিচে Close করে। পরিকল্পনা: **1.0882** এ Sell, Stop **1.0900** (Sweep High এর উপরে): রিস্ক ১৮ পিপ; টার্গেট **1.0850**: রিওয়ার্ড ৩২ পিপ, পরিকল্পিত **১ : ১.৮**। প্রাইস **1.0900** এর উপরে Close করলে Sweep ধারণা ব্যর্থ।""",
        mistakes=[["Wick এ এন্ট্রি", "ভেতরে ফিরে Close ও শিফটের অপেক্ষা করুন"], ["যেকোনো Wick কে Sweep বলা", "সুস্পষ্ট লেভেল ও ভেতরে ফিরে Close দাবি করুন"], ["Wick এর ভেতরে Stop", "Sweep এর চরমের ওপারে রাখুন"], ["বড় ট্রেন্ড উপেক্ষা", "এর সাথে মেলা Sweep পছন্দ করুন"]],
        practice=["আগের দিনের High বা Low এর দশটি ছোঁয়া খুঁজে প্রতিটিকে Sweep বা Breakout লেবেল করুন।", "Sweep গুলোর জন্য লোয়ার-টাইমফ্রেম শিফট এসেছিল কি না লিখুন।", "প্রতিটি নিশ্চিত এন্ট্রির পর কত R পৌঁছেছে লিখুন।"],
        summary=[["Sweep", "সুস্পষ্ট লেভেলের ওপারে মুভ যা ভেতরে ফিরে Close করে"], ["দরকার", "ফিরে Close, তারপর স্ট্রাকচার শিফট"], ["Stop", "Sweep এর চরমের ওপারে"], ["সতর্কতা", "লেভেলের ওপারের অনেক মুভই Breakout"]],
        related=[("/ict/liquidity-sweep", "Liquidity Sweep"), ("/smc/liquidity-pools", "Liquidity Pools"), ("/blog/liquidity-concepts-complete-guide", "Liquidity Concepts"), ("/blog/liquidity-sweeps-smart-money", "Liquidity Sweeps and Smart Money")],
        fig_alt="একটি সিন্থেটিক EUR/USD Sweep: আগের দিনের High এর উপরে প্রাইস স্পাইক করে ভেতরে ফিরে Close করে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Liquidity Sweep"),
)
