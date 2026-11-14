SPEC = dict(
    fm=dict(date="2026-05-13", category="Price Action", tags=["fibonacci", "retracement", "extensions", "price-action"], reading=5, featured=False),
    fig=dict(img="/images/price-action/pullbacks/fib-pullback-confluence-dark.webp", video="/videos/price-action/pullbacks-explainer-dark.mp4", lesson="/price-action/pullbacks"),
    en=dict(
        title="How to Use Fibonacci Retracements and Extensions",
        description="A short, practical guide: how to pick the swing, which retracement levels traders watch (38.2%, 50%, 61.8%), how extensions are used for targets (127.2%, 161.8%), why the levels are a convention rather than a proven edge, and a worked EUR/USD example with a 1 to 3.9 planned reward-to-risk.",
        intro="**Fibonacci tools** are rulers. A **retracement** measures how far a pullback travels back into the previous move; an **extension** projects how far a move may go beyond its previous high or low. They are popular because many traders watch the same levels, which can make those prices matter, not because the ratios have been proven to predict markets.",
        fix="The original suggested that Fibonacci levels are reliable turning points. There is no established evidence for that. Use the levels with **structure and confluence**, and judge them on your own records.",
        sections=[
            ("Retracements", """
| Step | Rule                                                                                         |
| ---- | -------------------------------------------------------------------------------------------- |
| 1    | Pick a clear, **confirmed** swing (a move that broke structure)                              |
| 2    | In an uptrend draw from the swing low to the swing high; reverse for a downtrend             |
| 3    | Watch 38.2%, 50% and 61.8% for the pullback; deeper zones (70.5%, 78.6%) are the OTE area    |
| 4    | Look for confluence (a support level, an order block, a gap) near a level                    |
| 5    | Enter only after a reaction; place the stop beyond the swing or the next level               |

Example: swing low **1.0800**, high **1.0900** (100 pips). Measured down from the high: 38.2% → 1.0862, 50% → 1.0850, 61.8% → 1.0838. A shallow pullback (38.2%) is often read as a strong trend; a deeper one (61.8% or more) as a weaker one. Neither reading is a rule. See [Pullbacks](/en/price-action/pullbacks) and [Fibonacci and OTE](/en/blog/fibonacci-ote-complete-guide)."""),
            ("Extensions for Targets", """
| Extension | Price for the example (low + ratio × 100 pips) | Use                                    |
| --------- | ----------------------------------------------- | -------------------------------------- |
| 100%      | 1.0900 (the previous high)                      | First target                           |
| 127.2%    | 1.0927                                          | Common second target                   |
| 161.8%    | 1.0962                                          | An extended move; take profit earlier  |

Extensions are projections, not predictions. Prefer targets that also match a prior level, and take partial profit instead of waiting for the full projection."""),
            ("Common Pitfalls", """
| Pitfall                                   | Why it hurts                                                   |
| ----------------------------------------- | -------------------------------------------------------------- |
| Choosing the swing after seeing price     | You can always find a swing that makes a level fit             |
| Too many levels                           | Every price is near some level                                 |
| Treating a level as a wall                | Price often goes through levels                                |
| Ignoring the trend                        | Fibonacci pullbacks against a stronger trend tend to fail      |"""),
        ],
        example="""
Swing low **1.0800**, high **1.0900**. Price pulls back to the 50% level **1.0850**, which also matches an earlier support, and a 15-minute candle rejects it. Plan: buy **1.0852**, stop **1.0830** (below the 61.8% level): risk 22 pips; target **1.0927** (the 127.2% extension): reward 75 pips, **1 : 3.4** planned. If price closes below **1.0830**, the pullback is deeper than planned and the idea is cancelled.""",
        mistakes=[["Redrawing the swing to fit price", "Fix the swing before the pullback"], ["Entering at the level with no reaction", "Wait for a reaction candle"], ["Using extensions as exact targets", "Take partial profit near them"], ["Ignoring structure", "Combine levels with market structure"]],
        practice=["Draw retracements on five past swings and record where pullbacks stopped.", "Check how often price reached the 127.2% extension afterwards.", "Compare results with and without a confluence at the level."],
        summary=[["Retracement", "Measures pullback depth: 38.2%, 50%, 61.8% are commonly watched"], ["Extension", "Projects targets: 127.2% and 161.8% are common"], ["Edge", "Not proven by itself; confluence and confirmation matter"], ["Stop", "Beyond the swing or the next level"]],
        related=[("/price-action/pullbacks", "Pullbacks"), ("/blog/fibonacci-ote-complete-guide", "Fibonacci and OTE"), ("/ict/ote", "Optimal Trade Entry"), ("/price-action/support-resistance", "Support and Resistance")],
        fig_alt="A synthetic pullback to a Fibonacci level that coincides with support: the retracement and the reaction",
        fig_note="Synthetic candles for teaching", fig_label="Pullbacks"),
    bn=dict(
        title="Fibonacci Retracement ও Extension কীভাবে ব্যবহার করবেন",
        description="সংক্ষিপ্ত, ব্যবহারিক গাইড: Swing কীভাবে বাছবেন, ট্রেডাররা কোন Retracement লেভেল দেখেন (৩৮.২%, ৫০%, ৬১.৮%), টার্গেটের জন্য Extension কীভাবে ব্যবহার হয় (১২৭.২%, ১৬১.৮%), কেন লেভেলগুলো প্রমাণিত Edge নয়, রীতি, আর ১ : ৩.৯ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে EUR/USD উদাহরণ।",
        intro="**Fibonacci সরঞ্জাম** হলো রুলার। **Retracement** মাপে পুলব্যাক আগের মুভের কতটা ভেতরে ফেরে; **Extension** প্রজেক্ট করে মুভ তার আগের High বা Low এর ওপারে কতদূর যেতে পারে। এগুলো জনপ্রিয় কারণ অনেক ট্রেডার একই লেভেল দেখেন, যা ওই দামগুলোকে গুরুত্বপূর্ণ করতে পারে — অনুপাতগুলো মার্কেট ভবিষ্যদ্বাণী করে বলে প্রমাণিত নয়।",
        fix="মূল লেখায় ইঙ্গিত ছিল Fibonacci লেভেল নির্ভরযোগ্য মোড়ের বিন্দু। এর পক্ষে প্রতিষ্ঠিত প্রমাণ নেই। লেভেলগুলো **স্ট্রাকচার ও Confluence** সহ ব্যবহার করুন, আর নিজের রেকর্ডে বিচার করুন।",
        sections=[
            ("Retracement", """
| ধাপ | নিয়ম                                                                                         |
| ---- | -------------------------------------------------------------------------------------------- |
| ১    | স্পষ্ট, **নিশ্চিত** Swing বাছুন (স্ট্রাকচার ভাঙা মুভ)                              |
| ২    | আপট্রেন্ডে Swing Low থেকে Swing High পর্যন্ত আঁকুন; ডাউনট্রেন্ডে উল্টো             |
| ৩    | পুলব্যাকের জন্য ৩৮.২%, ৫০% ও ৬১.৮% দেখুন; গভীর জোন (৭০.৫%, ৭৮.৬%) OTE এলাকা    |
| ৪    | কোনো লেভেলের কাছে Confluence (সাপোর্ট লেভেল, Order Block, গ্যাপ) খুঁজুন                    |
| ৫    | প্রতিক্রিয়ার পরই এন্ট্রি; Swing বা পরের লেভেলের ওপারে Stop                |

উদাহরণ: Swing Low **1.0800**, High **1.0900** (১০০ পিপ)। High থেকে নিচে মেপে: ৩৮.২% → 1.0862, ৫০% → 1.0850, ৬১.৮% → 1.0838। অগভীর পুলব্যাক (৩৮.২%) প্রায়ই শক্তিশালী ট্রেন্ড হিসেবে পড়া হয়; গভীর (৬১.৮% বা বেশি) দুর্বল হিসেবে। কোনো পাঠই নিয়ম নয়। [Pullbacks](/bn/price-action/pullbacks) ও [Fibonacci and OTE](/bn/blog/fibonacci-ote-complete-guide) দেখুন।"""),
            ("টার্গেটের জন্য Extension", """
| Extension | উদাহরণের দাম (Low + অনুপাত × ১০০ পিপ) | ব্যবহার                                    |
| --------- | ----------------------------------------------- | -------------------------------------- |
| ১০০%      | 1.0900 (আগের High)                      | প্রথম টার্গেট                           |
| ১২৭.২%    | 1.0927                                          | সাধারণ দ্বিতীয় টার্গেট                   |
| ১৬১.৮%    | 1.0962                                          | বাড়ানো মুভ; আগেই মুনাফা নিন  |

Extension প্রজেক্শন, ভবিষ্যদ্বাণী নয়। আগের কোনো লেভেলের সাথেও মেলে এমন টার্গেট পছন্দ করুন, আর পুরো প্রজেক্শনের অপেক্ষার বদলে আংশিক মুনাফা নিন।"""),
            ("সাধারণ ফাঁদ", """
| ফাঁদ                                   | কেন ক্ষতি করে                                                   |
| ----------------------------------------- | -------------------------------------------------------------- |
| প্রাইস দেখার পর Swing বাছা     | লেভেল মেলে এমন Swing সবসময় পাওয়া যায়             |
| অনেক বেশি লেভেল                           | প্রতিটি দাম কোনো না কোনো লেভেলের কাছে                                 |
| লেভেলকে দেয়াল ধরা                | প্রাইস প্রায়ই লেভেল ভেদ করে যায়                                |
| ট্রেন্ড উপেক্ষা                        | শক্তিশালী ট্রেন্ডের বিরুদ্ধে Fibonacci পুলব্যাক ব্যর্থ হয়      |"""),
        ],
        example="""
Swing Low **1.0800**, High **1.0900**। প্রাইস ৫০% লেভেল **1.0850** এ পুলব্যাক করে, যা আগের একটি Support এর সাথেও মেলে, আর ১৫-মিনিটের ক্যান্ডেল এটি প্রত্যাখ্যান করে। পরিকল্পনা: **1.0852** এ Buy, Stop **1.0830** (৬১.৮% লেভেলের নিচে): রিস্ক ২২ পিপ; টার্গেট **1.0927** (১২৭.২% Extension): রিওয়ার্ড ৭৫ পিপ, পরিকল্পিত **১ : ৩.৪**। প্রাইস **1.0830** এর নিচে Close করলে পুলব্যাক পরিকল্পনার চেয়ে গভীর, ধারণা বাতিল।""",
        mistakes=[["প্রাইসের সাথে মেলাতে Swing আবার আঁকা", "পুলব্যাকের আগে Swing ঠিক করুন"], ["প্রতিক্রিয়া ছাড়াই লেভেলে এন্ট্রি", "প্রতিক্রিয়ার ক্যান্ডেলের অপেক্ষা করুন"], ["Extension কে সঠিক টার্গেট ধরা", "তার কাছে আংশিক মুনাফা নিন"], ["স্ট্রাকচার উপেক্ষা", "লেভেলকে মার্কেট স্ট্রাকচারের সাথে মেলান"]],
        practice=["পাঁচটি পুরোনো Swing এ Retracement এঁকে পুলব্যাক কোথায় থেমেছে লিখুন।", "পরে প্রাইস ১২৭.২% Extension এ কতবার পৌঁছেছে দেখুন।", "লেভেলে Confluence সহ ও ছাড়া ফল তুলনা করুন।"],
        summary=[["Retracement", "পুলব্যাকের গভীরতা মাপে: ৩৮.২%, ৫০%, ৬১.৮% সাধারণত দেখা হয়"], ["Extension", "টার্গেট প্রজেক্ট করে: ১২৭.২% ও ১৬১.৮% সাধারণ"], ["Edge", "নিজে প্রমাণিত নয়; Confluence ও নিশ্চিতকরণ গুরুত্বপূর্ণ"], ["Stop", "Swing বা পরের লেভেলের ওপারে"]],
        related=[("/price-action/pullbacks", "Pullbacks"), ("/blog/fibonacci-ote-complete-guide", "Fibonacci and OTE"), ("/ict/ote", "Optimal Trade Entry"), ("/price-action/support-resistance", "Support and Resistance")],
        fig_alt="সাপোর্টের সাথে মেলা Fibonacci লেভেলে একটি সিন্থেটিক পুলব্যাক: Retracement ও প্রতিক্রিয়া",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Pullbacks"),
)
