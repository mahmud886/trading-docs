SPEC = dict(
    fm=dict(date="2026-05-19", category="SMC", tags=["premium-discount", "smc", "equilibrium", "dealing-range", "pd-arrays"], reading=8, featured=True),
    fig=dict(img="/images/ict/dealing-range/eurusd-dealing-range-map-dark.webp", video="/videos/ict/dealing-range-explainer-dark.mp4", lesson="/ict/dealing-range"),
    en=dict(
        title="Premium and Discount Zones in Nested Ranges — The Complete Picture",
        description="How premium and discount work across nested ranges (weekly inside monthly, daily inside weekly, intraday inside daily), how to rank PD arrays inside each half, when the two halves disagree, and a worked premium sell with a 1 to 3 planned reward-to-risk.",
        intro="A single 50% level is easy to draw. In practice ranges are **nested**: a daily range sits inside a weekly one, an intraday range inside the daily. The same price can be in **discount of the hourly range** and in **premium of the daily range** at the same time. Working out how those layers combine is the core of using premium and discount well.",
        fix="The original treated premium and discount as institutional rules and quoted high accuracy. The 50% split and the idea of ranked arrays are conventions: useful for organising entries, but not proven predictors. Judge them by your own records.",
        sections=[
            ("Nested Ranges", """
| Layer      | Example range                  | Equilibrium | Role                                   |
| ---------- | ------------------------------ | ----------- | -------------------------------------- |
| Higher     | Weekly: **1.0700 – 1.1000**    | 1.0850      | The side of the larger market          |
| Middle     | Daily: **1.0800 – 1.0950**     | 1.0875      | Where today's range sits               |
| Lower      | 1-hour: **1.0860 – 1.0900**    | 1.0880      | The range you trade inside             |

A price of **1.0890** is in premium of the 1-hour range (above 1.0880) and of the daily range (above 1.0875), and, with the weekly equilibrium at 1.0850, also of the weekly range. All three layers agree: a premium location for sells. A price of **1.0840** is in discount of the weekly and daily ranges but could be in premium of a tiny hourly range: here the layers **disagree** and the larger ones should carry more weight. See [Dealing Range](/en/ict/dealing-range)."""),
            ("Ranking PD Arrays Inside a Half", """
| Rank (stronger first)                    | Why                                                          |
| ---------------------------------------- | ------------------------------------------------------------ |
| Zone formed at the range extreme (after a sweep) | Origin of the move and close to the stop-loss               |
| Order block with displacement and a gap  | Two features agree                                           |
| Fair value gap alone                     | One feature                                                  |
| Level near equilibrium                   | Weakest: the middle of the range gives little edge           |

Prefer zones deep in the correct half and far from equilibrium. See [PD Arrays](/en/ict/pd-arrays) and [Premium and Discount Trading Guide](/en/blog/premium-discount-trading-guide)."""),
            ("When the Layers Disagree", """
| Situation                                               | Response                                                         |
| ------------------------------------------------------- | ---------------------------------------------------------------- |
| All layers premium (or all discount)                    | Clean location: trade with a zone and confirmation               |
| Higher layer discount, lower premium                    | Mixed: reduce size or wait for the lower range to shift         |
| Price near equilibrium on the main layer                | Skip: little location advantage                                  |
| A layer's range has just broken                         | Redraw it first                                                  |"""),
        ],
        example="""
Layers agree: price is in premium of the weekly (**1.0850**), daily (**1.0875**) and hourly (**1.0880**) ranges at **1.0888**. A bearish order block with a gap sits at **1.0880 – 1.0890** and a 5-minute candle rejects it. Plan: sell **1.0882**, stop **1.0898** (above the block): risk 16 pips; target **1.0834** (the daily range's lower half): reward 48 pips, **1 : 3.0** planned. If price closes above **1.0898**, the idea is cancelled.""",
        mistakes=[["Using one range and ignoring the layers", "Check at least two timeframes"], ["Trading near equilibrium", "Prefer zones deep in the correct half"], ["Not redrawing after a break", "Update the range when structure changes"], ["Treating the layers as equal", "Give the larger ranges more weight"]],
        practice=["Mark the weekly, daily and 1-hour ranges and their equilibria on one pair.", "List where the current price sits in each.", "Record how often your trades came from a location where all layers agreed."],
        summary=[["Nested ranges", "Weekly, daily and intraday each have their own equilibrium"], ["Best case", "All layers agree on premium or discount"], ["Disagreement", "Let the larger layer carry more weight, or wait"], ["Status", "A convention to test, not a proven predictor"]],
        related=[("/ict/dealing-range", "Dealing Range"), ("/ict/pd-arrays", "PD Arrays"), ("/smc/premium-discount", "Premium and Discount"), ("/blog/premium-discount-trading-guide", "Premium and Discount Trading Guide")],
        fig_alt="A synthetic EUR/USD dealing range map with the equilibrium and the premium and discount halves of nested ranges",
        fig_note="Synthetic candles for teaching", fig_label="Dealing Range"),
    bn=dict(
        title="Nested রেঞ্জে Premium ও Discount জোন — সম্পূর্ণ চিত্র",
        description="Nested রেঞ্জ জুড়ে (মাসিকের ভেতরে সাপ্তাহিক, সাপ্তাহিকের ভেতরে ডেইলি, ডেইলির ভেতরে ইন্ট্রাডে) Premium ও Discount কীভাবে কাজ করে, প্রতিটি অর্ধেকের ভেতরে PD Array কীভাবে র‍্যাঙ্ক করবেন, দুই অর্ধেক একমত না হলে কী করবেন, আর ১ : ৩ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে Premium Sell এর উদাহরণ।",
        intro="একটি ৫০% লেভেল আঁকা সহজ। বাস্তবে রেঞ্জ **Nested**: ডেইলি রেঞ্জ সাপ্তাহিকের ভেতরে, ইন্ট্রাডে রেঞ্জ ডেইলির ভেতরে। একই দাম একই সময়ে **ঘণ্টার রেঞ্জের Discount এ** আর **ডেইলি রেঞ্জের Premium এ** থাকতে পারে। এই স্তরগুলো কীভাবে মেলে তা বোঝাই Premium ও Discount ভালোভাবে ব্যবহারের মূল।",
        fix="মূল লেখায় Premium ও Discount কে প্রাতিষ্ঠানিক নিয়ম ধরা হয়েছিল এবং উচ্চ নির্ভুলতা বলা হয়েছিল। ৫০% বিভাজন ও র‍্যাঙ্ক করা Array এর ধারণা রীতি: এন্ট্রি সাজাতে কাজের, কিন্তু প্রমাণিত ভবিষ্যদ্বক্তা নয়। নিজের রেকর্ডে বিচার করুন।",
        sections=[
            ("Nested রেঞ্জ", """
| স্তর      | উদাহরণ রেঞ্জ                  | Equilibrium | ভূমিকা                                   |
| ---------- | ------------------------------ | ----------- | -------------------------------------- |
| উপরের     | সাপ্তাহিক: **1.0700 – 1.1000**    | 1.0850      | বড় মার্কেটের দিক                    |
| মাঝের     | ডেইলি: **1.0800 – 1.0950**     | 1.0875      | আজকের রেঞ্জ কোথায়               |
| নিচের      | ১-ঘণ্টা: **1.0860 – 1.0900**    | 1.0880      | যে রেঞ্জের ভেতরে ট্রেড করেন             |

**1.0890** দাম ১-ঘণ্টার রেঞ্জের Premium এ (1.0880 এর উপরে) ও ডেইলি রেঞ্জের Premium এ (1.0875 এর উপরে), আর সাপ্তাহিক Equilibrium 1.0850 হওয়ায় সাপ্তাহিক Premium এও। তিন স্তরই একমত: Sell এর জন্য Premium অবস্থান। **1.0840** দাম সাপ্তাহিক ও ডেইলি রেঞ্জের Discount এ, কিন্তু ছোট ঘণ্টার রেঞ্জের Premium এ হতে পারে: এখানে স্তরগুলো **একমত নয়** আর বড়গুলোর ওজন বেশি হওয়া উচিত। [Dealing Range](/bn/ict/dealing-range) দেখুন।"""),
            ("অর্ধেকের ভেতরে PD Array র‍্যাঙ্ক", """
| র‍্যাঙ্ক (শক্তিশালী আগে)                    | কেন                                                          |
| ---------------------------------------- | ------------------------------------------------------------ |
| রেঞ্জের চরমে তৈরি জোন (Sweep এর পর) | মুভের উৎস ও Stop-loss এর কাছে               |
| Displacement ও গ্যাপসহ Order Block  | দুটি বৈশিষ্ট্য মেলে                                           |
| শুধু Fair Value Gap                     | একটি বৈশিষ্ট্য                                                  |
| Equilibrium এর কাছে লেভেল                   | সবচেয়ে দুর্বল: রেঞ্জের মাঝখানে সামান্য Edge                       |

সঠিক অর্ধেকের গভীরে ও Equilibrium থেকে দূরের জোন পছন্দ করুন। [PD Arrays](/bn/ict/pd-arrays) ও [Premium and Discount Trading Guide](/bn/blog/premium-discount-trading-guide) দেখুন।"""),
            ("স্তরগুলো একমত না হলে", """
| পরিস্থিতি                                               | প্রতিক্রিয়া                                                         |
| ------------------------------------------------------- | ---------------------------------------------------------------- |
| সব স্তর Premium (বা সব Discount)                    | পরিষ্কার অবস্থান: জোন ও নিশ্চিতকরণসহ ট্রেড               |
| উপরের স্তর Discount, নিচের Premium                    | মিশ্র: সাইজ কমান বা নিচের রেঞ্জ শিফটের অপেক্ষা করুন         |
| প্রধান স্তরে প্রাইস Equilibrium এর কাছে                | বাদ দিন: অবস্থানের সামান্য সুবিধা                                  |
| কোনো স্তরের রেঞ্জ ভেঙেছে                         | আগে আবার আঁকুন                                                |"""),
        ],
        example="""
স্তরগুলো একমত: **1.0888** এ প্রাইস সাপ্তাহিক (**1.0850**), ডেইলি (**1.0875**) ও ঘণ্টার (**1.0880**) রেঞ্জের Premium এ। **1.0880 – 1.0890** এ গ্যাপসহ বেয়ারিশ Order Block, আর ৫-মিনিটের ক্যান্ডেল এটি প্রত্যাখ্যান করে। পরিকল্পনা: **1.0882** এ Sell, Stop **1.0898** (ব্লকের উপরে): রিস্ক ১৬ পিপ; টার্গেট **1.0834** (ডেইলি রেঞ্জের নিচের অর্ধেক): রিওয়ার্ড ৪৮ পিপ, পরিকল্পিত **১ : ৩.০**। প্রাইস **1.0898** এর উপরে Close করলে ধারণা বাতিল।""",
        mistakes=[["একটি রেঞ্জ ব্যবহার করে স্তর উপেক্ষা", "অন্তত দুটি টাইমফ্রেম দেখুন"], ["Equilibrium এর কাছে ট্রেড", "সঠিক অর্ধেকের গভীরের জোন পছন্দ করুন"], ["ভাঙার পর আবার না আঁকা", "স্ট্রাকচার বদলালে রেঞ্জ আপডেট করুন"], ["স্তরগুলোকে সমান ধরা", "বড় রেঞ্জকে বেশি ওজন দিন"]],
        practice=["এক পেয়ারে সাপ্তাহিক, ডেইলি ও ১-ঘণ্টার রেঞ্জ ও তাদের Equilibrium চিহ্নিত করুন।", "বর্তমান প্রাইস প্রতিটিতে কোথায় তা লিখুন।", "আপনার কতগুলো ট্রেড সব স্তর একমত এমন অবস্থান থেকে এসেছে লিখুন।"],
        summary=[["Nested রেঞ্জ", "সাপ্তাহিক, ডেইলি ও ইন্ট্রাডের প্রত্যেকের নিজস্ব Equilibrium"], ["সেরা ক্ষেত্র", "সব স্তর Premium বা Discount এ একমত"], ["মতভেদ", "বড় স্তরকে বেশি ওজন দিন, বা অপেক্ষা করুন"], ["অবস্থা", "পরীক্ষার রীতি, প্রমাণিত ভবিষ্যদ্বক্তা নয়"]],
        related=[("/ict/dealing-range", "Dealing Range"), ("/ict/pd-arrays", "PD Arrays"), ("/smc/premium-discount", "Premium and Discount"), ("/blog/premium-discount-trading-guide", "Premium and Discount Trading Guide")],
        fig_alt="Equilibrium ও Nested রেঞ্জের Premium ও Discount অর্ধেকসহ একটি সিন্থেটিক EUR/USD Dealing Range ম্যাপ",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Dealing Range"),
)
