SPEC = dict(
    fm=dict(date="2026-05-19", category="SMC", tags=["liquidity", "bsl", "ssl", "stop-hunt", "sweep"], reading=8, featured=True),
    fig=dict(img="/images/smc/liquidity-pools/liquidity-pools-map-dark.webp", video="/videos/smc/liquidity-pools-explainer-dark.mp4", lesson="/smc/liquidity-pools"),
    en=dict(
        title="Liquidity Concepts — Where the Stops Are and How Price Reacts to Them",
        description="What liquidity means on a chart (clusters of resting stop and pending orders), the main types (equal highs and lows, previous day and session extremes, trendline and range liquidity), buy-side versus sell-side, how a sweep differs from a breakout, and a worked sell-side sweep entry with a planned 1 to 2.3 reward-to-risk.",
        intro="On a chart, **liquidity** is where many orders are likely to rest: stop-losses of traders already in the market and pending entries of traders waiting to join. When price reaches such a cluster, orders trigger and volume appears, which is why these areas often matter. The idea is simple; reading it takes judgement.",
        fix="The original described liquidity grabs as deliberate hunts by institutions and gave confident success rates. We cannot see who places orders, and no reliable rate is established. The versions below describe **where resting orders are likely**, not who is acting.",
        sections=[
            ("Types of Liquidity", """
| Type                         | Where it sits                                         | Side                                  |
| ---------------------------- | ----------------------------------------------------- | ------------------------------------- |
| **Equal highs**              | Two or more highs at nearly the same price            | Buy-side (stops of shorts above)      |
| **Equal lows**               | Two or more lows at nearly the same price             | Sell-side (stops of longs below)      |
| **Previous day's high/low**  | Yesterday's extremes                                  | Buy-side above, sell-side below       |
| **Session highs/lows**       | Asian, London or New York extremes                    | Both                                  |
| **Trendline or range edges** | Where many traders place stops beyond a visible line  | Both                                  |

**Buy-side liquidity (BSL)** sits above price (buy stops and the stops of shorts). **Sell-side liquidity (SSL)** sits below. See [Liquidity Pools](/en/smc/liquidity-pools), [Equal Highs and Lows](/en/smc/equal-highs-lows) and [Internal and External Liquidity](/en/smc/internal-external-liquidity)."""),
            ("Sweep, Run or Breakout?", """
| Behaviour                                         | Name              | What price does after                                 |
| ------------------------------------------------- | ----------------- | ----------------------------------------------------- |
| Wick through the level, **closes back inside**    | **Sweep**         | Often reverses; it needs confirmation                 |
| Closes beyond the level and **holds** there       | **Breakout/run**  | Often continues                                       |
| Closes beyond, then **falls back** within a few candles | Failed breakout | Same idea as a sweep, slower                       |

You cannot know in advance which one you will get. The practical rule: wait for the **close** and for a lower-timeframe structure shift before acting. See [Liquidity Sweeps Explained](/en/blog/liquidity-sweeps-explained)."""),
            ("Using Liquidity", """
| Use                         | How                                                                               |
| --------------------------- | --------------------------------------------------------------------------------- |
| As a **target**             | Take profit just before the next obvious cluster                                  |
| As a **trigger**            | Watch a sweep of a cluster, then a shift of structure, then enter on the return   |
| As a **warning**            | Don't put your stop exactly where everyone else does (just beyond equal lows)     |

Liquidity is context: it tells you where price may be drawn and where reactions may start, but it does not predict direction."""),
        ],
        example="""
EUR/USD has equal lows at **1.0820**. Price dips to **1.0814** at the London open and closes back at **1.0824**; a 5-minute candle then closes above the last lower high. Plan: buy **1.0828**, stop **1.0810** (below the sweep low): risk 18 pips; target **1.0870** (the next swing high, where buy-side liquidity sits): reward 42 pips, **1 : 2.3** planned. If price closes below **1.0810**, the sweep idea is wrong.""",
        mistakes=[["Assuming every sweep reverses", "Wait for a close and a structure shift"], ["Placing stops exactly beyond equal highs or lows", "Give the stop room beyond the obvious cluster"], ["Treating a close beyond the level as a sweep", "That is a breakout until proven otherwise"], ["Ignoring the higher-timeframe direction", "Prefer sweeps that align with the larger trend"]],
        practice=["Mark equal highs, equal lows and previous-day extremes on one chart.", "For ten touches, label each sweep, run or failed breakout.", "Compare how many sweeps reversed within 10 candles."],
        summary=[["Liquidity", "Clusters of resting stops and pending orders"], ["Types", "Equal highs and lows, daily and session extremes, line edges"], ["Behaviours", "Sweep (back inside), run (holds beyond), failed breakout"], ["Use", "Targets, triggers and warnings; not a direction forecast"]],
        related=[("/smc/liquidity-pools", "Liquidity Pools"), ("/smc/equal-highs-lows", "Equal Highs and Lows"), ("/ict/liquidity-sweep", "Liquidity Sweep"), ("/blog/liquidity-sweeps-explained", "Liquidity Sweeps Explained")],
        fig_alt="A synthetic map of liquidity pools: equal highs and lows, previous day's high and low, and session extremes marked on a chart",
        fig_note="Synthetic candles for teaching", fig_label="Liquidity Pools"),
    bn=dict(
        title="Liquidity Concepts — Stop কোথায় আর প্রাইস কীভাবে সাড়া দেয়",
        description="চার্টে Liquidity মানে কী (Resting Stop ও পেন্ডিং অর্ডারের গুচ্ছ), প্রধান ধরন (Equal High-Low, আগের দিন ও সেশনের চরম, ট্রেন্ডলাইন ও রেঞ্জ লিকুইডিটি), Buy-side বনাম Sell-side, Sweep কীভাবে Breakout থেকে আলাদা, আর ১ : ২.৩ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে Sell-side Sweep এন্ট্রির উদাহরণ।",
        intro="চার্টে **Liquidity** হলো যেখানে অনেক অর্ডার জমে থাকার সম্ভাবনা: মার্কেটে থাকা ট্রেডারদের Stop-loss ও যোগ দিতে অপেক্ষারত ট্রেডারদের পেন্ডিং এন্ট্রি। প্রাইস এমন গুচ্ছে পৌঁছালে অর্ডার ট্রিগার হয় ও ভলিউম আসে, তাই এই এলাকা প্রায়ই গুরুত্বপূর্ণ। ধারণা সরল; পড়তে বিচার লাগে।",
        fix="মূল লেখায় Liquidity Grab কে প্রতিষ্ঠানের ইচ্ছাকৃত শিকার বলে বর্ণনা করা হয়েছিল এবং আত্মবিশ্বাসী সাফল্যের হার ছিল। কে অর্ডার বসায় আমরা দেখতে পাই না, আর নির্ভরযোগ্য কোনো হার প্রতিষ্ঠিত নয়। নিচের সংস্করণ বর্ণনা করে **Resting অর্ডার কোথায় থাকার সম্ভাবনা**, কে কাজ করছে তা নয়।",
        sections=[
            ("Liquidity এর ধরন", """
| ধরন                         | কোথায় থাকে                                         | দিক                                  |
| ---------------------------- | ----------------------------------------------------- | ------------------------------------- |
| **Equal High**              | প্রায় একই দামে দুই বা বেশি High            | Buy-side (উপরে Short এর Stop)      |
| **Equal Low**               | প্রায় একই দামে দুই বা বেশি Low             | Sell-side (নিচে Long এর Stop)      |
| **আগের দিনের High/Low**  | গতকালের চরম                                  | উপরে Buy-side, নিচে Sell-side       |
| **সেশনের High/Low**       | এশিয়ান, London বা New York এর চরম                    | উভয়                                  |
| **ট্রেন্ডলাইন বা রেঞ্জের কিনারা** | দৃশ্যমান রেখার ওপারে অনেকে Stop বসায়  | উভয়                                  |

**Buy-side Liquidity (BSL)** প্রাইসের উপরে (Buy Stop ও Short এর Stop)। **Sell-side Liquidity (SSL)** নিচে। [Liquidity Pools](/bn/smc/liquidity-pools), [Equal Highs and Lows](/bn/smc/equal-highs-lows) ও [Internal and External Liquidity](/bn/smc/internal-external-liquidity) দেখুন।"""),
            ("Sweep, Run নাকি Breakout?", """
| আচরণ                                         | নাম              | পরে প্রাইস কী করে                                 |
| ------------------------------------------------- | ----------------- | ----------------------------------------------------- |
| লেভেল ভেদ করে Wick, **ভেতরে ফিরে Close**    | **Sweep**         | প্রায়ই উল্টায়; নিশ্চিতকরণ লাগে                 |
| লেভেলের ওপারে Close ও সেখানে **টিকে থাকে**       | **Breakout/Run**  | প্রায়ই চলতে থাকে                                       |
| ওপারে Close, তারপর কয়েক ক্যান্ডেলে **ফিরে আসে** | ব্যর্থ Breakout | Sweep এর মতোই ধারণা, ধীরে                       |

আগে থেকে কোনটি পাবেন তা জানা যায় না। ব্যবহারিক নিয়ম: কাজের আগে **Close** ও লোয়ার-টাইমফ্রেম স্ট্রাকচার শিফটের অপেক্ষা করুন। [Liquidity Sweeps Explained](/bn/blog/liquidity-sweeps-explained) দেখুন।"""),
            ("Liquidity ব্যবহার", """
| ব্যবহার                         | কীভাবে                                                                               |
| --------------------------- | --------------------------------------------------------------------------------- |
| **টার্গেট** হিসেবে             | পরের সুস্পষ্ট গুচ্ছের ঠিক আগে মুনাফা নিন                                  |
| **ট্রিগার** হিসেবে            | গুচ্ছের Sweep, তারপর স্ট্রাকচার শিফট দেখুন, তারপর ফেরায় এন্ট্রি   |
| **সতর্কতা** হিসেবে            | সবার মতো ঠিক একই জায়গায় Stop রাখবেন না (Equal Low এর ঠিক ওপারে)     |

Liquidity হলো প্রসঙ্গ: এটি বলে প্রাইস কোথায় আকৃষ্ট হতে পারে ও প্রতিক্রিয়া কোথায় শুরু হতে পারে, কিন্তু দিক পূর্বাভাস দেয় না।"""),
        ],
        example="""
EUR/USD তে **1.0820** এ Equal Low। London খোলায় প্রাইস **1.0814** এ নেমে **1.0824** এ ফিরে Close করে; তারপর ৫-মিনিটের ক্যান্ডেল শেষ Lower High এর উপরে Close করে। পরিকল্পনা: **1.0828** এ Buy, Stop **1.0810** (Sweep Low এর নিচে): রিস্ক ১৮ পিপ; টার্গেট **1.0870** (পরের Swing High, যেখানে Buy-side Liquidity): রিওয়ার্ড ৪২ পিপ, পরিকল্পিত **১ : ২.৩**। প্রাইস **1.0810** এর নিচে Close করলে Sweep ধারণা ভুল।""",
        mistakes=[["প্রতিটি Sweep উল্টায় ধরা", "Close ও স্ট্রাকচার শিফটের অপেক্ষা করুন"], ["Equal High বা Low এর ঠিক ওপারে Stop", "সুস্পষ্ট গুচ্ছের ওপারে Stop এর জায়গা দিন"], ["লেভেলের ওপারে Close কে Sweep ধরা", "প্রমাণ না হওয়া পর্যন্ত এটি Breakout"], ["হায়ার-টাইমফ্রেমের দিক উপেক্ষা", "বড় ট্রেন্ডের সাথে মেলা Sweep পছন্দ করুন"]],
        practice=["একটি চার্টে Equal High, Equal Low ও আগের দিনের চরম চিহ্নিত করুন।", "দশটি ছোঁয়ার প্রতিটিকে Sweep, Run বা ব্যর্থ Breakout লেবেল করুন।", "কতগুলো Sweep ১০ ক্যান্ডেলের মধ্যে উল্টেছে তুলনা করুন।"],
        summary=[["Liquidity", "Resting Stop ও পেন্ডিং অর্ডারের গুচ্ছ"], ["ধরন", "Equal High-Low, দৈনিক ও সেশনের চরম, রেখার কিনারা"], ["আচরণ", "Sweep (ভেতরে ফেরা), Run (ওপারে টেকা), ব্যর্থ Breakout"], ["ব্যবহার", "টার্গেট, ট্রিগার ও সতর্কতা; দিকের পূর্বাভাস নয়"]],
        related=[("/smc/liquidity-pools", "Liquidity Pools"), ("/smc/equal-highs-lows", "Equal Highs and Lows"), ("/ict/liquidity-sweep", "Liquidity Sweep"), ("/blog/liquidity-sweeps-explained", "Liquidity Sweeps Explained")],
        fig_alt="Liquidity Pool এর একটি সিন্থেটিক ম্যাপ: চার্টে চিহ্নিত Equal High ও Low, আগের দিনের High-Low ও সেশনের চরম",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Liquidity Pools"),
)
