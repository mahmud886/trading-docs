SPEC = dict(
    fm=dict(date="2026-05-13", category="SMC", tags=["choch", "bos", "market-structure", "mss", "smc"], reading=8, featured=True),
    fig=dict(img="/images/smc/choch/bearish-choch-dark.webp", video="/videos/smc/choch-explainer-dark.mp4", lesson="/smc/choch"),
    en=dict(
        title="CHOCH vs BOS — Reading Market Direction",
        description="A break of structure (BOS) continues the trend; a change of character (CHOCH) is the first break against it. How to tell them apart, what counts as a valid break (close, not wick), the three ways to combine them (reversal, continuation, multi-timeframe), and how they fail.",
        intro="Both terms describe **breaks of swing points**, and the difference is direction relative to the trend. A **BOS** (break of structure) breaks a swing in the direction of the trend: it continues it. A **CHOCH** (change of character) is the first break against the trend: it is an early sign that the trend may be changing, and nothing more.",
        fix="The original quoted \"60–65%\" and \"75–80%\" reliabilities for CHOCH and BOS and a \"65–75% win rate\" for one model. We found no source for any of these, so they are removed. Both signals are descriptions of structure, and each can fail.",
        sections=[
            ("The Difference", """
| Feature                     | **BOS**                                              | **CHOCH**                                                     |
| --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------- |
| Direction vs trend          | With the trend                                       | Against the trend (the first break)                           |
| Uptrend example             | Close above the last swing high                      | Close below the last higher low                               |
| Downtrend example           | Close below the last swing low                       | Close above the last lower high                               |
| What it says                | The trend is continuing                              | The trend may be weakening; a reversal is possible, not certain |
| Useful for                  | Continuation entries on pullbacks                    | Early warning, and reversal setups with confirmation          |

A **valid break is a close beyond the swing**, not a wick. A wick through a swing high is a liquidity sweep: see [Liquidity Sweeps Explained](/en/blog/liquidity-sweeps-explained)."""),
            ("Three Ways to Use Them", """
| Model                         | Sequence                                                       | Idea                                                       |
| ----------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |
| **Reversal**                  | Sweep of a swing → CHOCH → BOS in the new direction            | The sweep takes stops, CHOCH shows the turn, BOS confirms  |
| **Continuation**              | BOS → pullback to a zone → entry                               | Buy the pullback in an uptrend after a BOS                 |
| **Multi-timeframe**           | Higher-timeframe BOS direction, lower-timeframe CHOCH/BOS entry | Enter in the direction of the larger trend                 |

The **reversal** model has more steps and therefore more places to be wrong; a CHOCH that is not followed by a BOS in the new direction is often just a deeper pullback. Read [CHOCH](/en/smc/choch), [BOS](/en/smc/bos) and [Market Structure Shift](/en/smc/market-structure-shift) for worked examples."""),
            ("How They Fail", """
| Failure                                | What it looks like                                                  |
| -------------------------------------- | ------------------------------------------------------------------- |
| CHOCH that reverses back               | Price closes back above the broken swing: it was a deeper pullback  |
| BOS in a stretched move                | Break followed by an immediate reversal (a buy-side liquidity grab) |
| Break on low participation             | A close through a swing during a quiet session, with no follow-through |
| Mixing timeframes                      | A 5-minute CHOCH against a strong 4-hour BOS                        |"""),
        ],
        example="""
EUR/USD in an uptrend on the 1-hour chart: the last higher low is **1.0820**. A candle closes at **1.0814**: a bearish CHOCH. Price pulls back to **1.0826** (the retest of the broken low) and a lower-timeframe candle rejects. Plan: sell **1.0826**, stop **1.0846** (above the swing that was broken), target **1.0770** (the next support): risk 20 pips, reward 56, **1 : 2.8** planned. If price closes above **1.0846**, the CHOCH failed and the idea is off.""",
        mistakes=[["Treating a wick through a swing as a break", "Require a close beyond the swing"], ["Calling the first CHOCH a confirmed reversal", "Wait for a BOS in the new direction, or treat it as an alert"], ["Trading a CHOCH against a strong higher-timeframe trend", "Check the larger structure first"], ["Entering at the break candle", "Plan an entry on the retest with a stop beyond the swing"]],
        practice=["Mark ten swing breaks on a chart and label each BOS or CHOCH, close or wick.", "For each CHOCH, note whether a BOS in the new direction followed.", "Count how many CHOCH signals were simply deeper pullbacks."],
        summary=[["BOS", "A close beyond a swing, with the trend: continuation"], ["CHOCH", "The first close beyond a swing against the trend: an early warning"], ["Models", "Reversal (sweep → CHOCH → BOS), continuation, multi-timeframe"], ["Caution", "No reliability numbers are guaranteed; both can fail"]],
        related=[("/smc/choch", "CHOCH"), ("/smc/bos", "BOS"), ("/smc/market-structure-shift", "Market Structure Shift"), ("/blog/market-structure-shift-choch-bos", "Market Structure Shift: CHOCH and BOS")],
        fig_alt="A synthetic bearish change of character: an uptrend makes higher lows, then a candle closes below the last higher low",
        fig_note="Synthetic candles for teaching", fig_label="CHOCH"),
    bn=dict(
        title="CHOCH বনাম BOS — মার্কেটের দিক পড়া",
        description="Break of Structure (BOS) ট্রেন্ড চালিয়ে যায়; Change of Character (CHOCH) তার বিরুদ্ধে প্রথম ভাঙা। কীভাবে আলাদা করবেন, বৈধ ভাঙা কী (Close, Wick নয়), মেলানোর তিন উপায় (রিভার্সাল, কন্টিনিউয়েশন, মাল্টি-টাইমফ্রেম), আর এগুলো কীভাবে ব্যর্থ হয়।",
        intro="দুটি শব্দই **Swing পয়েন্ট ভাঙা** বর্ণনা করে, আর পার্থক্য ট্রেন্ডের সাপেক্ষে দিকে। **BOS** (Break of Structure) ট্রেন্ডের দিকে Swing ভাঙে: ট্রেন্ড চালিয়ে যায়। **CHOCH** (Change of Character) ট্রেন্ডের বিরুদ্ধে প্রথম ভাঙা: ট্রেন্ড বদলাতে পারে তার প্রাথমিক ইঙ্গিত, এর বেশি কিছু নয়।",
        fix="মূল লেখায় CHOCH ও BOS এর জন্য \"৬০–৬৫%\" ও \"৭৫–৮০%\" নির্ভরযোগ্যতা এবং একটি মডেলের জন্য \"৬৫–৭৫% জয়ের হার\" দেওয়া হয়েছিল। এগুলোর কোনো উৎস আমরা পাইনি, তাই সরানো হয়েছে। দুটি সংকেতই স্ট্রাকচারের বর্ণনা, আর প্রতিটি ব্যর্থ হতে পারে।",
        sections=[
            ("পার্থক্য", """
| বৈশিষ্ট্য                     | **BOS**                                              | **CHOCH**                                                     |
| --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------- |
| ট্রেন্ডের সাপেক্ষে দিক          | ট্রেন্ডের সাথে                                       | ট্রেন্ডের বিরুদ্ধে (প্রথম ভাঙা)                           |
| আপট্রেন্ডের উদাহরণ              | শেষ Swing High এর উপরে Close                      | শেষ Higher Low এর নিচে Close                           |
| ডাউনট্রেন্ডের উদাহরণ            | শেষ Swing Low এর নিচে Close                       | শেষ Lower High এর উপরে Close                           |
| কী বলে                | ট্রেন্ড চলছে                              | ট্রেন্ড দুর্বল হতে পারে; রিভার্সাল সম্ভব, নিশ্চিত নয় |
| কাজে লাগে                  | পুলব্যাকে কন্টিনিউয়েশন এন্ট্রি                    | আগাম সতর্কতা, আর নিশ্চিতকরণসহ রিভার্সাল সেটআপ          |

**বৈধ ভাঙা হলো Swing এর ওপারে Close**, Wick নয়। Swing High এর ভেতর দিয়ে Wick হলো Liquidity Sweep: [Liquidity Sweeps Explained](/bn/blog/liquidity-sweeps-explained) দেখুন।"""),
            ("ব্যবহারের তিন উপায়", """
| মডেল                         | ক্রম                                                       | ধারণা                                                       |
| ----------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |
| **রিভার্সাল**                  | Swing এর Sweep → CHOCH → নতুন দিকে BOS            | Sweep Stop নেয়, CHOCH মোড় দেখায়, BOS নিশ্চিত করে  |
| **কন্টিনিউয়েশন**              | BOS → জোনে পুলব্যাক → এন্ট্রি                               | আপট্রেন্ডে BOS এর পর পুলব্যাকে Buy                 |
| **মাল্টি-টাইমফ্রেম**           | হায়ার-টাইমফ্রেম BOS এর দিক, লোয়ার-টাইমফ্রেম CHOCH/BOS এন্ট্রি | বড় ট্রেন্ডের দিকে এন্ট্রি                 |

**রিভার্সাল** মডেলে ধাপ বেশি, তাই ভুল হওয়ার জায়গাও বেশি; নতুন দিকে BOS ছাড়া CHOCH প্রায়ই গভীরতর পুলব্যাক মাত্র। কাজের উদাহরণের জন্য [CHOCH](/bn/smc/choch), [BOS](/bn/smc/bos) ও [Market Structure Shift](/bn/smc/market-structure-shift) পড়ুন।"""),
            ("কীভাবে ব্যর্থ হয়", """
| ব্যর্থতা                                | দেখতে কেমন                                                  |
| -------------------------------------- | ------------------------------------------------------------------- |
| উল্টে যাওয়া CHOCH               | প্রাইস ভাঙা Swing এর উপরে ফিরে Close করে: এটি গভীরতর পুলব্যাক ছিল  |
| টানা মুভে BOS                      | ভাঙার পরই রিভার্সাল (Buy-side Liquidity Grab) |
| কম অংশগ্রহণে ভাঙা             | শান্ত সেশনে Swing ভেদ করে Close, Follow-through নেই |
| টাইমফ্রেম মেশানো                      | শক্তিশালী ৪-ঘণ্টার BOS এর বিরুদ্ধে ৫-মিনিটের CHOCH                        |"""),
        ],
        example="""
১-ঘণ্টার চার্টে আপট্রেন্ডে EUR/USD: শেষ Higher Low **1.0820**। একটি ক্যান্ডেল **1.0814** এ Close করে: বেয়ারিশ CHOCH। প্রাইস **1.0826** এ পুলব্যাক করে (ভাঙা Low এর রিটেস্ট) আর লোয়ার-টাইমফ্রেমের ক্যান্ডেল প্রত্যাখ্যান করে। পরিকল্পনা: **1.0826** এ Sell, Stop **1.0846** (ভাঙা Swing এর উপরে), টার্গেট **1.0770** (পরের Support): রিস্ক ২০ পিপ, রিওয়ার্ড ৫৬, পরিকল্পিত **১ : ২.৮**। প্রাইস **1.0846** এর উপরে Close করলে CHOCH ব্যর্থ, ধারণা বাতিল।""",
        mistakes=[["Swing এর ভেতর দিয়ে Wick কে ভাঙা ধরা", "Swing এর ওপারে Close দাবি করুন"], ["প্রথম CHOCH কে নিশ্চিত রিভার্সাল বলা", "নতুন দিকে BOS এর অপেক্ষা করুন, বা সতর্কতা ধরুন"], ["শক্তিশালী হায়ার-টাইমফ্রেম ট্রেন্ডের বিরুদ্ধে CHOCH ট্রেড", "আগে বড় স্ট্রাকচার দেখুন"], ["ভাঙার ক্যান্ডেলে এন্ট্রি", "রিটেস্টে এন্ট্রি পরিকল্পনা করুন, Swing এর ওপারে Stop সহ"]],
        practice=["চার্টে দশটি Swing ভাঙা চিহ্নিত করে প্রতিটিকে BOS বা CHOCH, Close বা Wick লেবেল করুন।", "প্রতিটি CHOCH এর জন্য নতুন দিকে BOS এসেছিল কি না লিখুন।", "কতগুলো CHOCH শুধু গভীরতর পুলব্যাক ছিল গুনুন।"],
        summary=[["BOS", "ট্রেন্ডের সাথে Swing এর ওপারে Close: কন্টিনিউয়েশন"], ["CHOCH", "ট্রেন্ডের বিরুদ্ধে Swing এর ওপারে প্রথম Close: আগাম সতর্কতা"], ["মডেল", "রিভার্সাল (Sweep → CHOCH → BOS), কন্টিনিউয়েশন, মাল্টি-টাইমফ্রেম"], ["সতর্কতা", "কোনো নির্ভরযোগ্যতার সংখ্যা নিশ্চিত নয়; দুটিই ব্যর্থ হতে পারে"]],
        related=[("/smc/choch", "CHOCH"), ("/smc/bos", "BOS"), ("/smc/market-structure-shift", "Market Structure Shift"), ("/blog/market-structure-shift-choch-bos", "Market Structure Shift: CHOCH and BOS")],
        fig_alt="একটি সিন্থেটিক বেয়ারিশ Change of Character: আপট্রেন্ডে Higher Low তৈরি হয়, তারপর একটি ক্যান্ডেল শেষ Higher Low এর নিচে Close করে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="CHOCH"),
)
