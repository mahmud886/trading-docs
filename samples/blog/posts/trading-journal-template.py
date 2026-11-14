SPEC = dict(
    fm=dict(date="2026-05-08", category="Improvement", tags=["journal", "tracking", "analysis", "self-improvement"], reading=8, featured=True),
    fig=dict(img="/images/quantitative/expectancy-formula/expectancy-formula-dark.webp", video="/videos/quantitative/ex-explainer-dark.mp4", lesson="/quantitative/expectancy-formula"),
    en=dict(
        title="Trading Journal Template — What to Record and How to Review It",
        description="A practical trading journal: the columns to record for every trade (setup, entry, stop, target, result in R, followed-the-plan, emotion), the metrics to compute (win rate, average win and loss, expectancy with an uncertainty range), a weekly review routine, and a worked 10-trade example.",
        intro="A journal turns trading from memory into **data**. Memory favours the dramatic trades; a log lets you see the average one. Keep it simple enough that you will fill it in after every trade, and review it on a schedule.",
        fix="The original promised that journaling by itself improves results and quoted fixed benchmarks. A journal helps only if you review it and act on it, and the benchmarks depend on the strategy. The template below records what you need to compute your own numbers, along with their uncertainty.",
        sections=[
            ("The Columns", """
| Column             | What to write                                                             | Why                                       |
| ------------------ | ------------------------------------------------------------------------- | ----------------------------------------- |
| Date, time (BD)    | When you entered                                                          | Find which hours work for you             |
| Pair and direction | EUR/USD long                                                              | Compare pairs                             |
| Setup              | Your named setup (for example "London sweep and shift")                    | Separate setups in the statistics         |
| Entry / stop / target | The prices you planned                                                 | Check the plan against the result         |
| Planned R:R        | Reward divided by risk                                                    | Compare plan and outcome                  |
| Result in R        | Result divided by the amount risked (−1, +2.3, 0 …)                       | The common unit across sizes              |
| Followed the plan? | Yes or no                                                                 | Separates plan quality from discipline    |
| Emotion before/after | One word                                                                | Notices patterns (FOMO, revenge)          |
| Screenshot         | The chart at entry                                                        | Review with context                       |"""),
            ("The Numbers to Compute", """
| Metric               | Formula                                                                | Note                                          |
| -------------------- | ---------------------------------------------------------------------- | --------------------------------------------- |
| Win rate             | Winning trades ÷ all trades                                            | Meaningless without the average win and loss  |
| Average win / loss   | Mean R of winners / mean R of losers                                   |                                               |
| **Expectancy**       | Win rate × average win − loss rate × average loss                      | Per trade, in R                               |
| Standard error       | Standard deviation of R ÷ √(number of trades)                          | The rough uncertainty of the expectancy       |
| Plan adherence       | Plan trades ÷ all trades                                               | Is the problem the plan or the discipline?    |

See [Expectancy Formula](/en/quantitative/expectancy-formula): in its 40-trade example the expectancy was +0.38R, but the approximate 95% interval ran from −0.07R to +0.82R, which includes zero: **a positive average over a small sample is not proof of an edge**."""),
            ("A Weekly Review", """
| Step | What to do                                                                                 |
| ---- | ------------------------------------------------------------------------------------------ |
| 1    | Total R for the week, split by plan trades and off-plan trades                              |
| 2    | List the best and worst trades and read your emotion notes                                  |
| 3    | Find one pattern (an hour, a setup, an emotion) that repeats                                |
| 4    | Write one rule change to test next week: only one                                           |
| 5    | Don't change rules based on fewer than about 30 trades of a given setup                     |"""),
        ],
        example="""
Ten trades, in R: +2.0, −1, −1, +1.5, −1, +2.0, −1, 0, +2.5, −1. Winners: 4 (+8.0R total), losers: 5 (−5R), one scratch. Total **+3R**, average **+0.30R** per trade. Standard deviation about 1.5R, standard error about 0.48R, so the rough 95% interval is about −0.65R to +1.25R: ten trades cannot separate an edge from luck. A planned trade for the next entry: buy **1.0850**, stop **1.0830**, target **1.0890** (**1 : 2.0**), logged with its screenshot.""",
        mistakes=[["Recording only winners or only losers", "Record every trade"], ["Using money instead of R", "R lets you compare different sizes"], ["Never reviewing", "Review weekly on a fixed day"], ["Changing rules after a few trades", "Wait for a larger sample per setup"]],
        practice=["Create the journal with the columns above.", "Log your next 20 trades with R, plan adherence and emotion.", "Compute win rate, expectancy and the standard error."],
        summary=[["Journal", "A log of every trade, with R and whether you followed the plan"], ["Metrics", "Win rate, average win and loss, expectancy, standard error"], ["Review", "Weekly; one rule change at a time"], ["Caution", "Small samples can't prove an edge"]],
        related=[("/quantitative/expectancy-formula", "Expectancy Formula"), ("/blog/trade-execution-checklist", "Trade Execution Checklist"), ("/blog/avoiding-overtrading", "Avoiding Overtrading"), ("/blog/risk-management-essentials", "Risk Management Essentials")],
        fig_alt="Expectancy against win rate for several reward-to-risk ratios, and a 40-trade synthetic sample with its average R and an interval that includes zero",
        fig_note="Illustration from the expectancy lesson (synthetic trades)", fig_label="Expectancy Formula"),
    bn=dict(
        title="Trading Journal Template — কী রেকর্ড করবেন ও কীভাবে রিভিউ করবেন",
        description="ব্যবহারিক ট্রেডিং জার্নাল: প্রতিটি ট্রেডে যে কলাম রেকর্ড করবেন (সেটআপ, এন্ট্রি, Stop, টার্গেট, R এ ফল, পরিকল্পনা মেনেছেন কি না, আবেগ), যে মেট্রিক হিসাব করবেন (জয়ের হার, গড় জয় ও হার, অনিশ্চয়তার পরিসরসহ Expectancy), সাপ্তাহিক রিভিউ রুটিন, আর ১০ ট্রেডের উদাহরণ।",
        intro="জার্নাল ট্রেডিংকে স্মৃতি থেকে **ডেটায়** বদলে। স্মৃতি নাটকীয় ট্রেড পছন্দ করে; লগ আপনাকে গড় ট্রেড দেখায়। এটি এত সরল রাখুন যাতে প্রতিটি ট্রেডের পর পূরণ করেন, আর নির্ধারিত সময়ে রিভিউ করুন।",
        fix="মূল লেখায় প্রতিশ্রুতি ছিল শুধু জার্নাল রাখলেই ফল ভালো হয় এবং স্থির বেঞ্চমার্ক দেওয়া হয়েছিল। জার্নাল কাজে লাগে শুধু যদি রিভিউ করে তার ওপর কাজ করেন, আর বেঞ্চমার্ক স্ট্র্যাটেজির ওপর নির্ভর করে। নিচের টেমপ্লেট আপনার নিজের সংখ্যা ও তার অনিশ্চয়তা হিসাব করতে যা লাগে তা রেকর্ড করে।",
        sections=[
            ("কলাম", """
| কলাম             | কী লিখবেন                                                             | কেন                                       |
| ------------------ | ------------------------------------------------------------------------- | ----------------------------------------- |
| তারিখ, সময় (BD)    | কখন এন্ট্রি নিয়েছেন                                                          | কোন ঘণ্টা আপনার জন্য কাজ করে বুঝতে             |
| পেয়ার ও দিক | EUR/USD Long                                                              | পেয়ার তুলনা                             |
| সেটআপ              | আপনার নামকরা সেটআপ (যেমন "London Sweep ও শিফট")                    | পরিসংখ্যানে সেটআপ আলাদা করতে              |
| এন্ট্রি / Stop / টার্গেট | যে দাম পরিকল্পনা করেছেন                                                 | ফলের সাথে পরিকল্পনা মেলাতে         |
| পরিকল্পিত R:R        | রিওয়ার্ড ভাগ রিস্ক                                                    | পরিকল্পনা ও ফল তুলনা                  |
| R এ ফল        | ফল ভাগ ঝুঁকির অঙ্ক (−১, +২.৩, ০ …)                       | বিভিন্ন সাইজে সাধারণ একক                |
| পরিকল্পনা মেনেছেন? | হ্যাঁ বা না                                                                 | পরিকল্পনার মান ও শৃঙ্খলা আলাদা করে    |
| আগে/পরে আবেগ | এক শব্দ                                                                | প্যাটার্ন ধরে (FOMO, প্রতিশোধ)          |
| স্ক্রিনশট         | এন্ট্রির সময় চার্ট                                                        | প্রসঙ্গসহ রিভিউ                        |"""),
            ("যে সংখ্যা হিসাব করবেন", """
| মেট্রিক               | সূত্র                                                                | মন্তব্য                                          |
| -------------------- | ---------------------------------------------------------------------- | --------------------------------------------- |
| জয়ের হার             | জেতা ট্রেড ÷ সব ট্রেড                                            | গড় জয় ও হার ছাড়া অর্থহীন  |
| গড় জয় / হার   | জেতাদের গড় R / হারাদের গড় R                                   |                                               |
| **Expectancy**       | জয়ের হার × গড় জয় − হারের হার × গড় হার                      | প্রতি ট্রেডে, R এ                               |
| Standard Error       | R এর Standard Deviation ÷ √(ট্রেড সংখ্যা)                          | Expectancy এর মোটামুটি অনিশ্চয়তা       |
| পরিকল্পনা মানা       | পরিকল্পিত ট্রেড ÷ সব ট্রেড                                               | সমস্যা পরিকল্পনায় নাকি শৃঙ্খলায়?    |

[Expectancy Formula](/bn/quantitative/expectancy-formula) দেখুন: ৪০-ট্রেডের উদাহরণে Expectancy +০.৩৮R ছিল, কিন্তু প্রায় ৯৫% ব্যবধান −০.০৭R থেকে +০.৮২R, যাতে শূন্য আছে: **ছোট নমুনায় ধনাত্মক গড় Edge এর প্রমাণ নয়**।"""),
            ("সাপ্তাহিক রিভিউ", """
| ধাপ | কী করবেন                                                                                 |
| ---- | ------------------------------------------------------------------------------------------ |
| ১    | সপ্তাহের মোট R, পরিকল্পিত ও পরিকল্পনা-বহির্ভূত ট্রেডে ভাগ করে                              |
| ২    | সেরা ও সবচেয়ে খারাপ ট্রেড তালিকা করে আবেগের নোট পড়ুন                                  |
| ৩    | একটি পুনরাবৃত্ত প্যাটার্ন (ঘণ্টা, সেটআপ, আবেগ) খুঁজুন                                |
| ৪    | পরের সপ্তাহে পরীক্ষার জন্য একটি নিয়ম বদল লিখুন: শুধু একটি                                           |
| ৫    | কোনো সেটআপের প্রায় ৩০ ট্রেডের কমে নিয়ম বদলাবেন না                     |"""),
        ],
        example="""
দশটি ট্রেড R এ: +২.০, −১, −১, +১.৫, −১, +২.০, −১, ০, +২.৫, −১। জয়: ৪টি (মোট +৮.০R), হার: ৫টি (−৫R), একটি স্ক্র্যাচ। মোট **+৩R**, প্রতি ট্রেডে গড় **+০.৩০R**। Standard Deviation প্রায় ১.৫R, Standard Error প্রায় ০.৪৮R, তাই মোটামুটি ৯৫% ব্যবধান প্রায় −০.৬৫R থেকে +১.২৫R: দশ ট্রেড Edge ও ভাগ্য আলাদা করতে পারে না। পরের এন্ট্রির পরিকল্পিত ট্রেড: **1.0850** এ Buy, Stop **1.0830**, টার্গেট **1.0890** (**১ : ২.০**), স্ক্রিনশটসহ লগ।""",
        mistakes=[["শুধু জেতা বা শুধু হারা ট্রেড রেকর্ড", "প্রতিটি ট্রেড রেকর্ড করুন"], ["টাকার বদলে R ব্যবহার না করা", "R এ ভিন্ন সাইজ তুলনা করা যায়"], ["কখনো রিভিউ না করা", "নির্দিষ্ট দিনে সাপ্তাহিক রিভিউ করুন"], ["কয়েক ট্রেডে নিয়ম বদলানো", "প্রতি সেটআপে বড় নমুনার অপেক্ষা করুন"]],
        practice=["উপরের কলামসহ জার্নাল বানান।", "পরের ২০ ট্রেড R, পরিকল্পনা মানা ও আবেগসহ লগ করুন।", "জয়ের হার, Expectancy ও Standard Error হিসাব করুন।"],
        summary=[["জার্নাল", "প্রতিটি ট্রেডের লগ, R ও পরিকল্পনা মেনেছেন কি না সহ"], ["মেট্রিক", "জয়ের হার, গড় জয় ও হার, Expectancy, Standard Error"], ["রিভিউ", "সাপ্তাহিক; একবারে একটি নিয়ম বদল"], ["সতর্কতা", "ছোট নমুনা Edge প্রমাণ করতে পারে না"]],
        related=[("/quantitative/expectancy-formula", "Expectancy Formula"), ("/blog/trade-execution-checklist", "Trade Execution Checklist"), ("/blog/avoiding-overtrading", "Avoiding Overtrading"), ("/blog/risk-management-essentials", "Risk Management Essentials")],
        fig_alt="বিভিন্ন রিওয়ার্ড-টু-রিস্কের জন্য জয়ের হারের বিপরীতে Expectancy, আর গড় R ও শূন্যসহ ব্যবধানসহ ৪০-ট্রেডের একটি সিন্থেটিক নমুনা",
        fig_note="Expectancy লেসন থেকে উদাহরণ (সিন্থেটিক ট্রেড)", fig_label="Expectancy Formula"),
)
