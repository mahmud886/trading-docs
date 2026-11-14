SPEC = dict(
    fm=dict(date="2026-05-19", category="ICT", tags=["fibonacci", "ote", "retracement", "ict", "entries"], reading=7, featured=True),
    fig=dict(img="/images/ict/ote/eurusd-bullish-ote-dark.webp", video="/videos/ict/ote-explainer-dark.mp4", lesson="/ict/ote"),
    en=dict(
        title="Fibonacci and the Optimal Trade Entry (OTE) — A Practical Guide",
        description="How to draw a Fibonacci retracement on a confirmed swing, where the 62%–79% optimal trade entry zone sits, how to build confluence with an order block or fair value gap, a full numeric example (entry, stop, target) and why Fibonacci levels are a convention rather than a proven edge.",
        intro="A **Fibonacci retracement** divides the distance between a swing low and swing high into ratios (23.6%, 38.2%, 50%, 61.8%, 78.6%) to estimate where a pullback might stop. The **optimal trade entry (OTE)** is an ICT term for the zone between the **62% and 79%** retracement, with the 70.5% level in the middle.",
        fix="The original treated the OTE zone as a reliable area where institutions enter. No study shows Fibonacci levels have predictive power by themselves; traders watch them partly **because many others do**. Use them as one input alongside structure and liquidity.",
        sections=[
            ("Drawing It Correctly", """
| Step | Rule                                                                                   |
| ---- | -------------------------------------------------------------------------------------- |
| 1    | Use a **confirmed** swing: a move that broke structure (for a long, low to high)       |
| 2    | Draw from the swing low to the swing high (reverse for shorts)                         |
| 3    | Mark 62%, 70.5% and 79% as the OTE zone                                                |
| 4    | Check for confluence: an order block, fair value gap or prior support inside the zone  |
| 5    | Wait for a reaction on a lower timeframe before entering                               |

Example swing: low **1.0800**, high **1.0900** (100 pips). The retracement levels measured down from the high:

| Level  | Price      |
| ------ | ---------- |
| 50%    | 1.0850     |
| 61.8%  | 1.0838     |
| 70.5%  | 1.0830     |
| 78.6%  | 1.0821     |

The OTE zone is therefore about **1.0821 – 1.0838**. See [Optimal Trade Entry](/en/ict/ote) and [Pullbacks with Fibonacci](/en/price-action/pullbacks)."""),
            ("Building Confluence", """
| Confluence                         | Why it adds weight                                          |
| ---------------------------------- | ----------------------------------------------------------- |
| Order block or FVG inside the zone | A second reason to expect a reaction                        |
| Discount in the larger range       | Buying below the 50% level of the dealing range             |
| Session liquidity swept first      | Stops already taken before the pullback                     |
| Higher-timeframe trend agrees      | The pullback is against a short-term move only              |

Fibonacci alone is just a ruler; confluence is what turns a level into a setup."""),
            ("When It Fails", """
| Failure                                     | What it looks like                                            |
| ------------------------------------------- | ------------------------------------------------------------- |
| Price slices through 78.6% and keeps going  | The swing is probably being reversed: stop is hit             |
| No pullback at all                          | Price runs away and you chase or miss                         |
| Drawing from the wrong swing                | Different swings give different levels: be consistent         |
| Too many levels on the chart                | Every price is "near a level"; use a few, with a reason       |"""),
        ],
        example="""
Swing low **1.0800**, high **1.0900**. A bullish fair value gap sits at **1.0826 – 1.0834**, inside the OTE zone, and a 5-minute candle rejects it. Plan: buy **1.0830** (the 70.5% level), stop **1.0812** (beyond the 79% level and the gap): risk 18 pips; target **1.0900** (the high): reward 70 pips, **1 : 3.9** planned. If price closes below **1.0812**, the idea is cancelled.""",
        mistakes=[["Entering on the level alone", "Wait for confluence and a reaction"], ["Stop inside the OTE zone", "Place it beyond the swing or the 79% level plus a buffer"], ["Redrawing the retracement to fit the price", "Fix the swing before the pullback"], ["Using ten levels", "Use 62%, 70.5% and 79%, with reasons"]],
        practice=["Draw the OTE zone on five past swings and check whether price reacted.", "Note whether there was a confluence inside the zone each time.", "Compare reactions with and without confluence."],
        summary=[["Retracement", "Ratios between a swing low and swing high estimate pullback depth"], ["OTE", "The 62%–79% zone with 70.5% in the middle"], ["Edge", "Not proven on its own; confluence and confirmation matter"], ["Stop", "Beyond the swing or the 79% level plus a buffer"]],
        related=[("/ict/ote", "Optimal Trade Entry"), ("/price-action/pullbacks", "Pullbacks"), ("/blog/how-to-use-fibonacci", "How to Use Fibonacci"), ("/blog/premium-discount-trading-guide", "Premium and Discount Trading Guide")],
        fig_alt="A synthetic EUR/USD bullish optimal trade entry: a Fibonacci retracement with the 62% to 79% zone marked and price reacting inside it",
        fig_note="Synthetic candles for teaching", fig_label="Optimal Trade Entry"),
    bn=dict(
        title="Fibonacci ও Optimal Trade Entry (OTE) — ব্যবহারিক গাইড",
        description="নিশ্চিত Swing এ Fibonacci Retracement কীভাবে আঁকবেন, ৬২%–৭৯% Optimal Trade Entry জোন কোথায়, Order Block বা Fair Value Gap এর সাথে Confluence কীভাবে বানাবেন, এন্ট্রি-Stop-টার্গেটসহ সংখ্যাভিত্তিক উদাহরণ, আর কেন Fibonacci লেভেল প্রমাণিত Edge নয়, রীতি।",
        intro="**Fibonacci Retracement** Swing Low ও Swing High এর মাঝের দূরত্বকে অনুপাতে (২৩.৬%, ৩৮.২%, ৫০%, ৬১.৮%, ৭৮.৬%) ভাগ করে পুলব্যাক কোথায় থামতে পারে তা অনুমান করে। **Optimal Trade Entry (OTE)** হলো **৬২% ও ৭৯%** Retracement এর মাঝের জোনের ICT পরিভাষা, মাঝে ৭০.৫% লেভেল।",
        fix="মূল লেখায় OTE জোনকে নির্ভরযোগ্য এলাকা ধরা হয়েছিল যেখানে প্রতিষ্ঠান এন্ট্রি নেয়। কোনো গবেষণা দেখায় না Fibonacci লেভেল নিজে ভবিষ্যদ্বাণীর ক্ষমতা রাখে; ট্রেডাররা আংশিক **অন্য অনেকে দেখে বলেই** এগুলো দেখেন। স্ট্রাকচার ও লিকুইডিটির পাশে একটি ইনপুট হিসেবে ব্যবহার করুন।",
        sections=[
            ("সঠিকভাবে আঁকা", """
| ধাপ | নিয়ম                                                                                   |
| ---- | -------------------------------------------------------------------------------------- |
| ১    | **নিশ্চিত** Swing ব্যবহার করুন: স্ট্রাকচার ভাঙা মুভ (Long এর জন্য Low থেকে High)       |
| ২    | Swing Low থেকে Swing High পর্যন্ত আঁকুন (Short এ উল্টো)                         |
| ৩    | ৬২%, ৭০.৫% ও ৭৯% কে OTE জোন হিসেবে চিহ্নিত করুন                                                |
| ৪    | Confluence দেখুন: জোনের ভেতরে Order Block, Fair Value Gap বা আগের Support  |
| ৫    | এন্ট্রির আগে লোয়ার টাইমফ্রেমে প্রতিক্রিয়ার অপেক্ষা করুন                               |

উদাহরণ Swing: Low **1.0800**, High **1.0900** (১০০ পিপ)। High থেকে নিচে মাপা Retracement লেভেল:

| লেভেল  | প্রাইস      |
| ------ | ---------- |
| ৫০%    | 1.0850     |
| ৬১.৮%  | 1.0838     |
| ৭০.৫%  | 1.0830     |
| ৭৮.৬%  | 1.0821     |

তাই OTE জোন প্রায় **1.0821 – 1.0838**। [Optimal Trade Entry](/bn/ict/ote) ও [Pullbacks](/bn/price-action/pullbacks) দেখুন।"""),
            ("Confluence বানানো", """
| Confluence                         | কেন ওজন যোগ করে                                          |
| ---------------------------------- | ----------------------------------------------------------- |
| জোনের ভেতরে Order Block বা FVG | প্রতিক্রিয়া আশার দ্বিতীয় কারণ                        |
| বড় রেঞ্জে Discount       | Dealing Range এর ৫০% লেভেলের নিচে Buy             |
| আগে সেশন লিকুইডিটি Sweep      | পুলব্যাকের আগেই Stop নেওয়া হয়েছে                             |
| হায়ার-টাইমফ্রেম ট্রেন্ড একমত      | পুলব্যাক শুধু স্বল্পমেয়াদি মুভের বিরুদ্ধে              |

শুধু Fibonacci একটি রুলার; Confluence-ই লেভেলকে সেটআপে পরিণত করে।"""),
            ("কখন ব্যর্থ হয়", """
| ব্যর্থতা                                     | দেখতে কেমন                                            |
| ------------------------------------------- | ------------------------------------------------------------- |
| প্রাইস ৭৮.৬% কেটে চলতেই থাকে  | Swing সম্ভবত উল্টে যাচ্ছে: Stop লাগে             |
| কোনো পুলব্যাকই হয় না                          | প্রাইস পালিয়ে যায়, আপনি তাড়া করেন বা মিস করেন                         |
| ভুল Swing থেকে আঁকা                | ভিন্ন Swing ভিন্ন লেভেল দেয়: ধারাবাহিক থাকুন         |
| চার্টে অনেক লেভেল                | প্রতিটি দাম "কোনো লেভেলের কাছে"; কারণসহ কয়েকটি ব্যবহার করুন       |"""),
        ],
        example="""
Swing Low **1.0800**, High **1.0900**। OTE জোনের ভেতরে **1.0826 – 1.0834** এ বুলিশ Fair Value Gap আছে, আর ৫-মিনিটের ক্যান্ডেল এটি প্রত্যাখ্যান করে। পরিকল্পনা: **1.0830** এ Buy (৭০.৫% লেভেল), Stop **1.0812** (৭৯% লেভেল ও গ্যাপের ওপারে): রিস্ক ১৮ পিপ; টার্গেট **1.0900** (High): রিওয়ার্ড ৭০ পিপ, পরিকল্পিত **১ : ৩.৯**। প্রাইস **1.0812** এর নিচে Close করলে ধারণা বাতিল।""",
        mistakes=[["শুধু লেভেলে এন্ট্রি", "Confluence ও প্রতিক্রিয়ার অপেক্ষা করুন"], ["OTE জোনের ভেতরে Stop", "Swing বা ৭৯% লেভেলের ওপারে বাফারসহ রাখুন"], ["প্রাইসের সাথে মেলাতে Retracement আবার আঁকা", "পুলব্যাকের আগে Swing ঠিক করুন"], ["দশটি লেভেল ব্যবহার", "কারণসহ ৬২%, ৭০.৫% ও ৭৯% ব্যবহার করুন"]],
        practice=["পাঁচটি পুরোনো Swing এ OTE জোন এঁকে প্রাইস প্রতিক্রিয়া দেখিয়েছে কি না দেখুন।", "প্রতিবার জোনের ভেতরে Confluence ছিল কি না লিখুন।", "Confluence সহ ও ছাড়া প্রতিক্রিয়া তুলনা করুন।"],
        summary=[["Retracement", "Swing Low ও High এর মাঝের অনুপাত পুলব্যাকের গভীরতা অনুমান করে"], ["OTE", "৬২%–৭৯% জোন, মাঝে ৭০.৫%"], ["Edge", "নিজে প্রমাণিত নয়; Confluence ও নিশ্চিতকরণ গুরুত্বপূর্ণ"], ["Stop", "Swing বা ৭৯% লেভেলের ওপারে বাফারসহ"]],
        related=[("/ict/ote", "Optimal Trade Entry"), ("/price-action/pullbacks", "Pullbacks"), ("/blog/how-to-use-fibonacci", "How to Use Fibonacci"), ("/blog/premium-discount-trading-guide", "Premium and Discount Trading Guide")],
        fig_alt="একটি সিন্থেটিক EUR/USD বুলিশ Optimal Trade Entry: ৬২% থেকে ৭৯% জোন চিহ্নিত Fibonacci Retracement ও জোনের ভেতরে প্রাইসের প্রতিক্রিয়া",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Optimal Trade Entry"),
)
