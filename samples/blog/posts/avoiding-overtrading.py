SPEC = dict(
    fm=dict(date="2026-05-13", category="Academy", tags=["psychology", "discipline", "overtrading", "risk-management", "trading-habits"], reading=9, featured=True),
    fig=dict(img="/images/quantitative/equity-curve-management/equity-curve-filter-dark.webp", video="/videos/quantitative/ec-explainer-dark.mp4", lesson="/quantitative/equity-curve-management"),
    en=dict(
        title="Avoiding Overtrading — A Practical Guide to Protecting Your Account",
        description="Overtrading means taking trades outside your plan. This guide shows why extra low-quality trades cost more than they earn, the usual causes (FOMO, boredom, revenge), and a set of simple limits: a trade cap, a daily loss limit, a three-strike rule and a checklist gate.",
        intro="**Overtrading** is trading more than your plan calls for: extra trades, oversized trades, or trades taken for emotional reasons rather than because a setup appeared. It is one of the most common ways accounts lose money even when the underlying strategy works.",
        fix="The original called overtrading \"the #1 account killer\" and quoted fixed percentages for what institutions do. We found no source for either. What is solid is the arithmetic: every trade pays a cost, and trades with no edge only pay it.",
        sections=[
            ("Why Extra Trades Cost More Than They Earn", """
Suppose your plan produces about 10 trades a week with an expectancy of **+0.35R** each before costs, and each trade costs **0.10R** (spread and slippage). The week's net result is 10 × (0.35 − 0.10) = **+2.5R**.

Now add 10 more trades a week taken out of boredom or FOMO. Assume (this is an assumption, not a measurement) they have **no edge**, so their gross expectancy is 0R:

| Trades per week          | Gross expectancy | Cost per trade | Net per week          |
| ------------------------ | ---------------- | -------------- | --------------------- |
| 10 planned trades        | +0.35R           | 0.10R          | +2.5R                 |
| + 10 impulsive trades    | 0R               | 0.10R          | −1.0R                 |
| **Total (20 trades)**    |                  |                | **+1.5R (40% less)**  |

More trades did not mean more profit. The chart below comes from the [Equity Curve Management](/en/quantitative/equity-curve-management) lesson: a simple rule that skips trades while the system is struggling lowered the maximum drawdown in 92% of 1,000 simulated sequences."""),
            ("The Usual Causes", """
| Cause                  | What it looks like                                              | Counter                                        |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------- |
| **FOMO**               | Chasing a move you missed                                       | Write down the next valid setup instead        |
| **Boredom**            | Clicking because nothing is happening                           | Schedule non-trading time; close the platform  |
| **Revenge trading**    | Doubling down after a loss                                      | A hard stop after a set number of losses       |
| **Overconfidence**     | Raising size after a few wins                                   | Keep risk per trade fixed                      |
| **No clear rules**     | Not knowing what counts as a setup                              | A written checklist (see below)                |"""),
            ("Limits That Work", """
| Limit                    | Example rule                                                                  | Why it helps                                   |
| ------------------------ | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| **Window**               | Trade only your planned window, for example the London open (1:00 PM BD in summer, 2:00 PM in winter) | Fewer, better-chosen hours        |
| **Trade cap**            | At most 3 trades a day                                                        | Stops volume creeping up                       |
| **Daily loss limit**     | Stop for the day at −2R                                                       | Caps the damage of a bad day                   |
| **Three-strike rule**    | Three losses in a row: close the platform for the day                         | Interrupts revenge trading                     |
| **Checklist gate**       | No entry unless every checklist item is ticked                                | Replaces impulse with rules                    |

These numbers are examples. Choose limits you can follow, write them down before the session, and review them monthly."""),
        ],
        example="""
A plan trade: buy EUR/USD at **1.0850**, stop **1.0830**, target **1.0880**: risk 20 pips, reward 30, **1 : 1.5** planned. The daily limits are 3 trades and −2R. After two stopped trades (−2R) you are done for the day, even if a third setup appears: the cost of one more loss is bigger than the value of one more chance, because your judgement is usually worse after losses.""",
        mistakes=[["Setting limits and breaking them", "Make the limit mechanical: close the platform, log out"], ["Counting only winners as 'good' trades", "Judge a trade by whether it followed the plan"],
                  ["Making up lost R in the same session", "Stop at the daily limit; review tomorrow"], ["Ignoring costs on small trades", "Costs are paid on every trade, win or lose"]],
        practice=["Count your trades per week for a month and mark which ones were in the plan.", "Add up the net R of plan trades and of off-plan trades separately.", "Write one trade cap and one loss limit you will follow next week."],
        summary=[["Overtrading", "Trades beyond the plan: extra, oversized or emotional"], ["Arithmetic", "No-edge trades only pay costs, so they reduce net result"], ["Limits", "Window, trade cap, daily loss limit, three strikes, checklist"], ["Review", "Compare plan and off-plan trades in your journal"]],
        related=[("/quantitative/equity-curve-management", "Equity Curve Management"), ("/forex-sessions/session-psychology", "Session Psychology"), ("/blog/trading-psychology-emotions", "Trading Psychology: Emotions"), ("/blog/trade-execution-checklist", "Trade Execution Checklist")],
        fig_alt="A 300-trade synthetic equity curve with a filter that skips trades while the system is struggling: +19R with a 16R drawdown against +12R and 24R when always trading",
        fig_note="Illustration from another lesson (synthetic trades): skipping trades while a system struggles mostly trims drawdowns", fig_label="Equity Curve Management"),
    bn=dict(
        title="Avoiding Overtrading — অ্যাকাউন্ট রক্ষার ব্যবহারিক গাইড",
        description="Overtrading মানে পরিকল্পনার বাইরে ট্রেড নেওয়া। এই গাইডে দেখানো হয়েছে কেন অতিরিক্ত নিম্নমানের ট্রেড আয়ের চেয়ে বেশি খরচ করে, সাধারণ কারণ (FOMO, একঘেয়েমি, প্রতিশোধ), আর কিছু সরল সীমা: ট্রেড ক্যাপ, দৈনিক লস লিমিট, থ্রি-স্ট্রাইক নিয়ম ও চেকলিস্ট গেট।",
        intro="**Overtrading** মানে পরিকল্পনা যতটা চায় তার চেয়ে বেশি ট্রেড করা: অতিরিক্ত ট্রেড, বড় সাইজের ট্রেড, বা সেটআপ আসার কারণে নয় বরং আবেগের কারণে নেওয়া ট্রেড। অন্তর্নিহিত স্ট্র্যাটেজি কাজ করলেও অ্যাকাউন্ট লোকসানের সবচেয়ে প্রচলিত উপায়গুলোর একটি এটি।",
        fix="মূল লেখায় Overtrading কে \"১ নম্বর অ্যাকাউন্ট-ঘাতক\" বলা হয়েছিল এবং প্রতিষ্ঠানগুলো কী করে তার স্থির শতাংশ দেওয়া হয়েছিল। কোনোটারই উৎস আমরা পাইনি। যা নিশ্চিত তা হলো অঙ্ক: প্রতিটি ট্রেডে খরচ লাগে, আর Edge-হীন ট্রেড শুধু খরচই দেয়।",
        sections=[
            ("কেন অতিরিক্ত ট্রেড আয়ের চেয়ে বেশি খরচ করে", """
ধরুন আপনার পরিকল্পনা সপ্তাহে প্রায় ১০টি ট্রেড দেয়, খরচের আগে প্রতিটির Expectancy **+০.৩৫R**, আর প্রতি ট্রেডের খরচ **০.১০R** (স্প্রেড ও স্লিপেজ)। সপ্তাহের নেট ফল ১০ × (০.৩৫ − ০.১০) = **+২.৫R**।

এখন একঘেয়েমি বা FOMO তে আরও ১০টি ট্রেড যোগ করুন। ধরে নিন (এটি অনুমান, পরিমাপ নয়) এগুলোর **কোনো Edge নেই**, মানে মোট Expectancy ০R:

| সপ্তাহে ট্রেড          | মোট Expectancy | প্রতি ট্রেডে খরচ | সপ্তাহে নেট          |
| ------------------------ | ---------------- | -------------- | --------------------- |
| ১০টি পরিকল্পিত ট্রেড        | +০.৩৫R           | ০.১০R          | +২.৫R                 |
| + ১০টি আবেগী ট্রেড    | ০R               | ০.১০R          | −১.০R                 |
| **মোট (২০ ট্রেড)**    |                  |                | **+১.৫R (৪০% কম)**  |

বেশি ট্রেড মানে বেশি লাভ নয়। নিচের চার্ট [Equity Curve Management](/bn/quantitative/equity-curve-management) লেসন থেকে: সিস্টেম সংগ্রামের সময় ট্রেড বাদ দেওয়ার একটি সরল নিয়ম ১,০০০ সিমুলেটেড ক্রমের ৯২% এ সর্বোচ্চ Drawdown কমিয়েছিল।"""),
            ("সাধারণ কারণ", """
| কারণ                  | দেখতে কেমন                                              | প্রতিকার                                        |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------- |
| **FOMO**               | যে মুভ মিস করেছেন তার পেছনে ছোটা                                       | পরের বৈধ সেটআপ লিখে রাখুন        |
| **একঘেয়েমি**            | কিছু ঘটছে না বলে ক্লিক করা                           | ট্রেড-বিহীন সময় ঠিক করুন; প্ল্যাটফর্ম বন্ধ করুন  |
| **প্রতিশোধের ট্রেড**    | লোকসানের পর দ্বিগুণ করা                                      | নির্দিষ্ট লোকসানের পর কঠোর থামা       |
| **অতি-আত্মবিশ্বাস**     | কয়েকটি জয়ের পর সাইজ বাড়ানো                                   | প্রতি ট্রেডের ঝুঁকি স্থির রাখুন                      |
| **স্পষ্ট নিয়ম নেই**     | কী সেটআপ গণ্য হবে তা না জানা                              | লিখিত চেকলিস্ট (নিচে দেখুন)                |"""),
            ("যে সীমাগুলো কাজ করে", """
| সীমা                    | উদাহরণ নিয়ম                                                                  | কেন কাজ করে                                   |
| ------------------------ | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| **উইন্ডো**               | শুধু পরিকল্পিত উইন্ডোতে ট্রেড, যেমন London খোলা (Summer এ দুপুর ১:০০ BD, Winter এ ২:০০) | কম, ভালো-বাছা ঘণ্টা        |
| **ট্রেড ক্যাপ**            | দিনে সর্বোচ্চ ৩টি ট্রেড                                                        | সংখ্যা চুপিসারে বাড়া ঠেকায়                       |
| **দৈনিক লস লিমিট**     | দিনে −২R এ থামুন                                                       | খারাপ দিনের ক্ষতি সীমিত করে                   |
| **থ্রি-স্ট্রাইক নিয়ম**    | টানা তিন লোকসানে সেদিনের জন্য প্ল্যাটফর্ম বন্ধ                         | প্রতিশোধের ট্রেড থামায়                    |
| **চেকলিস্ট গেট**       | চেকলিস্টের সব ঘর টিক না হলে এন্ট্রি নয়                                | আবেগের জায়গায় নিয়ম আনে                    |

এই সংখ্যাগুলো উদাহরণ। যে সীমা মানতে পারবেন তা বাছুন, সেশনের আগে লিখে রাখুন, আর মাসিক রিভিউ করুন।"""),
        ],
        example="""
একটি পরিকল্পিত ট্রেড: **1.0850** এ EUR/USD Buy, Stop **1.0830**, টার্গেট **1.0880**: রিস্ক ২০ পিপ, রিওয়ার্ড ৩০, পরিকল্পিত **১ : ১.৫**। দৈনিক সীমা ৩টি ট্রেড ও −২R। দুটি Stop-out (−২R) এর পর সেদিনের কাজ শেষ, তৃতীয় সেটআপ এলেও: আরেকটি লোকসানের খরচ আরেকটি সুযোগের মূল্যের চেয়ে বেশি, কারণ লোকসানের পর আপনার বিচার সাধারণত খারাপ হয়।""",
        mistakes=[["সীমা ঠিক করে ভাঙা", "সীমাকে যান্ত্রিক করুন: প্ল্যাটফর্ম বন্ধ, লগ আউট"], ["শুধু জয়কে 'ভালো' ট্রেড গণ্য করা", "ট্রেডকে বিচার করুন পরিকল্পনা মেনেছে কি না দিয়ে"],
                  ["একই সেশনে হারানো R তোলা", "দৈনিক সীমায় থামুন; কাল রিভিউ করুন"], ["ছোট ট্রেডে খরচ উপেক্ষা", "জয় বা হার, প্রতিটি ট্রেডে খরচ লাগে"]],
        practice=["এক মাস সপ্তাহে ট্রেড গুনুন আর কোনগুলো পরিকল্পনায় ছিল চিহ্নিত করুন।", "পরিকল্পিত ও পরিকল্পনার বাইরের ট্রেডের নেট R আলাদা যোগ করুন।", "পরের সপ্তাহে মানবেন এমন একটি ট্রেড ক্যাপ ও একটি লস লিমিট লিখুন।"],
        summary=[["Overtrading", "পরিকল্পনার বাইরে ট্রেড: অতিরিক্ত, বড় বা আবেগী"], ["অঙ্ক", "Edge-হীন ট্রেড শুধু খরচ দেয়, তাই নেট ফল কমায়"], ["সীমা", "উইন্ডো, ট্রেড ক্যাপ, দৈনিক লস লিমিট, থ্রি স্ট্রাইক, চেকলিস্ট"], ["রিভিউ", "জার্নালে পরিকল্পিত ও পরিকল্পনা-বহির্ভূত ট্রেড তুলনা করুন"]],
        related=[("/quantitative/equity-curve-management", "Equity Curve Management"), ("/forex-sessions/session-psychology", "Session Psychology"), ("/blog/trading-psychology-emotions", "Trading Psychology: Emotions"), ("/blog/trade-execution-checklist", "Trade Execution Checklist")],
        fig_alt="৩০০-ট্রেডের সিন্থেটিক Equity কার্ভ, সিস্টেম সংগ্রামের সময় ট্রেড বাদ দেওয়া ফিল্টারসহ: +১৯R ও ১৬R Drawdown, সবসময় ট্রেডে +১২R ও ২৪R",
        fig_note="অন্য লেসন থেকে উদাহরণ (সিন্থেটিক ট্রেড): সিস্টেম সংগ্রামের সময় ট্রেড বাদ দেওয়া মূলত Drawdown ছাঁটে", fig_label="Equity Curve Management"),
)
