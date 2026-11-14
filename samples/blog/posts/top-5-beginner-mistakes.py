SPEC = dict(
    fm=dict(date="2026-05-05", category="Academy", tags=["beginner", "mistakes", "psychology", "risk-management"], reading=6, featured=True),
    fig=dict(img="/images/quantitative/introduction/quant-law-of-large-numbers-dark.webp", video="/videos/quantitative/qi-explainer-dark.mp4", lesson="/quantitative/introduction"),
    en=dict(
        title="Top 5 Beginner Mistakes in Trading — and What to Do Instead",
        description="The five mistakes that cost new traders most (no stop or too much risk, overtrading, no written plan or journal, judging a strategy on a few trades, and chasing moves), with the arithmetic of why each hurts and a first-month plan. Shows that a positive edge is only 50% likely to be ahead after 10 trades.",
        intro="Most early losses come from a handful of avoidable habits, not from missing a secret strategy. Each mistake below has a cause, a cost you can compute, and a simple replacement.",
        fix="The original quoted percentages of beginners who fail and fixed timelines for becoming profitable. We found no reliable source for those figures, so they are removed. What remains is arithmetic and habits you can check on your own account.",
        sections=[
            ("The Five Mistakes", """
| # | Mistake                                         | Why it hurts                                                                     | Do instead                                       |
| - | ----------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------ |
| 1 | **No stop, or risking too much per trade**      | A 10% loss needs 11.1% to recover; 50% needs 100%                                | Fixed 0.5–1% risk and a stop on every trade      |
| 2 | **Overtrading**                                 | Every trade pays a cost; trades with no edge only pay it                         | A trade cap and a written setup list             |
| 3 | **No plan and no journal**                      | You can't tell what works                                                        | One-page plan; log every trade in R              |
| 4 | **Judging a strategy on a few trades**          | Small samples are mostly noise                                                   | Judge over many trades, and report uncertainty   |
| 5 | **Chasing moves**                               | You enter late, at the extreme, and the stop is far away                          | Wait for a pullback or a retest                  |

See [Risk Management Essentials](/en/blog/risk-management-essentials), [Avoiding Overtrading](/en/blog/avoiding-overtrading) and [Trading Journal Template](/en/blog/trading-journal-template)."""),
            ("Why a Few Trades Tell You Little", """
Take a real, positive edge: wins 45% of the time for +1.5R and loses 55% for −1R, an expectancy of **+0.125R** per trade. The chance that it is **ahead** after *n* trades:

| Trades | Probability the cumulative result is positive |
| ------ | --------------------------------------------- |
| 10     | 50%                                           |
| 20     | 59%                                           |
| 50     | 71%                                           |
| 100    | 82%                                           |
| 200    | 91%                                           |

After 10 trades a system with a genuine edge is as likely to be behind as ahead; a bad month does not mean the idea is bad, and a good month does not mean it is good. See [Introduction to Quantitative Trading](/en/quantitative/introduction)."""),
            ("A First-Month Plan", """
| Week | Focus                                                                           |
| ---- | ------------------------------------------------------------------------------- |
| 1    | Learn the platform; paper-trade one pair; write the one-page plan               |
| 2    | Mark structure and levels daily; take demo trades only from the plan            |
| 3    | Log every trade with its reason, R and emotion; review at the end of the week   |
| 4    | Count plan trades versus off-plan trades; trim the plan; stay on demo or tiny size |

Treat the first months as paid education, with the cost kept small by a fixed tiny risk."""),
        ],
        example="""
A first trade done properly: 10,000 demo account, 0.5% risk (50). EUR/USD buy **1.0850**, stop **1.0830** (20 pips), target **1.0890** (40 pips): **1 : 2.0** planned. Size = 50 ÷ (20 × 10) = **0.25 standard lot**. The stop is placed before entry, the size comes from the stop, and the result is logged in R whether it wins or loses.""",
        mistakes=[["Risking a large percentage to \"grow fast\"", "Start small: 0.5% or less"], ["Trading every day because it feels productive", "Trade the plan, skip quiet days"], ["Skipping the journal", "Ten lines per trade is enough"], ["Quitting a plan after three losses", "Judge it over many trades"]],
        practice=["Write a one-page plan: pair, timeframe, setup, risk, stop and daily limits.", "Compute the size for a 0.5% risk and a 20-pip stop on your account.", "Log your next 20 demo trades in R."],
        summary=[["Mistakes", "No stop or too much risk, overtrading, no plan or journal, small samples, chasing"], ["Arithmetic", "A real edge is only 50% likely to be ahead after 10 trades"], ["Habit", "Fixed small risk, a plan, a journal, many trades"], ["Mindset", "Early months are education"]],
        related=[("/blog/risk-management-essentials", "Risk Management Essentials"), ("/blog/avoiding-overtrading", "Avoiding Overtrading"), ("/blog/trading-journal-template", "Trading Journal Template"), ("/quantitative/introduction", "Introduction to Quantitative Trading")],
        fig_alt="A simulation of 30 equity paths of a strategy with a small positive edge and the probability of being ahead after 10, 20, 50, 100, 200 and 500 trades",
        fig_note="Illustration from the quantitative introduction (synthetic simulation)", fig_label="Introduction to Quantitative Trading"),
    bn=dict(
        title="ট্রেডিংয়ে নতুনদের শীর্ষ ৫ ভুল — আর বদলে কী করবেন",
        description="নতুন ট্রেডারদের সবচেয়ে বেশি ক্ষতি করা পাঁচ ভুল (Stop না থাকা বা বেশি ঝুঁকি, Overtrading, লিখিত পরিকল্পনা বা জার্নাল না থাকা, কয়েকটি ট্রেডে স্ট্র্যাটেজি বিচার, আর মুভের পেছনে ছোটা), প্রতিটি কেন ক্ষতি করে তার অঙ্ক ও প্রথম মাসের পরিকল্পনা। দেখায় ধনাত্মক Edge ১০ ট্রেডের পর এগিয়ে থাকার সম্ভাবনা মাত্র ৫০%।",
        intro="শুরুর বেশিরভাগ লোকসান আসে কয়েকটি এড়ানো যায় এমন অভ্যাস থেকে, কোনো গোপন স্ট্র্যাটেজি মিস করা থেকে নয়। নিচের প্রতিটি ভুলের একটি কারণ, হিসাব করা যায় এমন খরচ, ও সরল বিকল্প আছে।",
        fix="মূল লেখায় কত শতাংশ নতুন ব্যর্থ হয় ও লাভজনক হতে নির্দিষ্ট সময়সীমার সংখ্যা ছিল। সেই সংখ্যার নির্ভরযোগ্য উৎস আমরা পাইনি, তাই সরানো হয়েছে। যা থাকে তা অঙ্ক ও আপনার নিজের অ্যাকাউন্টে যাচাই করা যায় এমন অভ্যাস।",
        sections=[
            ("পাঁচ ভুল", """
| # | ভুল                                         | কেন ক্ষতি করে                                                                     | বদলে করুন                                       |
| - | ----------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------ |
| ১ | **Stop না থাকা, বা প্রতি ট্রেডে বেশি ঝুঁকি**      | ১০% ক্ষতিতে ১১.১% লাগে; ৫০% এ ১০০%                                | স্থির ০.৫–১% ঝুঁকি ও প্রতি ট্রেডে Stop      |
| ২ | **Overtrading**                                 | প্রতি ট্রেডে খরচ লাগে; Edge-হীন ট্রেড শুধু খরচই দেয়                         | ট্রেড ক্যাপ ও লিখিত সেটআপ তালিকা             |
| ৩ | **পরিকল্পনা ও জার্নাল নেই**                      | কী কাজ করে বোঝা যায় না                                                        | এক পাতার পরিকল্পনা; প্রতি ট্রেড R এ লগ করুন              |
| ৪ | **কয়েকটি ট্রেডে স্ট্র্যাটেজি বিচার**          | ছোট নমুনা বেশিরভাগ নয়েজ                                                     | অনেক ট্রেড জুড়ে বিচার ও অনিশ্চয়তা জানান   |
| ৫ | **মুভের পেছনে ছোটা**                              | দেরিতে, চরমে এন্ট্রি, আর Stop দূরে                          | পুলব্যাক বা রিটেস্টের অপেক্ষা করুন                  |

[Risk Management Essentials](/bn/blog/risk-management-essentials), [Avoiding Overtrading](/bn/blog/avoiding-overtrading) ও [Trading Journal Template](/bn/blog/trading-journal-template) দেখুন।"""),
            ("কেন কয়েকটি ট্রেড অল্পই বলে", """
একটি আসল, ধনাত্মক Edge নিন: ৪৫% সময় +১.৫R জেতে, ৫৫% সময় −১R হারে, প্রতি ট্রেডে Expectancy **+০.১২৫R**। *n* ট্রেডের পর এটি **এগিয়ে** থাকার সম্ভাবনা:

| ট্রেড | মোট ফল ধনাত্মক হওয়ার সম্ভাবনা |
| ------ | --------------------------------------------- |
| ১০     | ৫০%                                           |
| ২০     | ৫৯%                                           |
| ৫০     | ৭১%                                           |
| ১০০    | ৮২%                                           |
| ২০০    | ৯১%                                           |

১০ ট্রেডের পর আসল Edge এর সিস্টেমও এগিয়ে থাকার মতোই পিছিয়ে থাকার সম্ভাবনা রাখে; খারাপ মাস মানে ধারণা খারাপ নয়, আর ভালো মাস মানে ভালো নয়। [Introduction to Quantitative Trading](/bn/quantitative/introduction) দেখুন।"""),
            ("প্রথম মাসের পরিকল্পনা", """
| সপ্তাহ | ফোকাস                                                                           |
| ---- | ------------------------------------------------------------------------------- |
| ১    | প্ল্যাটফর্ম শিখুন; এক পেয়ারে পেপার-ট্রেড; এক পাতার পরিকল্পনা লিখুন               |
| ২    | প্রতিদিন স্ট্রাকচার ও লেভেল চিহ্নিত করুন; শুধু পরিকল্পনা থেকে ডেমো ট্রেড নিন            |
| ৩    | প্রতিটি ট্রেড কারণ, R ও আবেগসহ লগ করুন; সপ্তাহ শেষে রিভিউ   |
| ৪    | পরিকল্পিত বনাম পরিকল্পনা-বহির্ভূত ট্রেড গুনুন; পরিকল্পনা ছাঁটুন; ডেমোতে বা ক্ষুদ্র সাইজে থাকুন |

প্রথম মাসগুলোকে মূল্য-দেওয়া শিক্ষা ধরুন, স্থির ক্ষুদ্র ঝুঁকিতে খরচ ছোট রেখে।"""),
        ],
        example="""
সঠিকভাবে করা প্রথম ট্রেড: ১০,০০০ ডেমো অ্যাকাউন্ট, ০.৫% ঝুঁকি (৫০)। EUR/USD Buy **1.0850**, Stop **1.0830** (২০ পিপ), টার্গেট **1.0890** (৪০ পিপ): পরিকল্পিত **১ : ২.০**। সাইজ = ৫০ ÷ (২০ × ১০) = **০.২৫ স্ট্যান্ডার্ড লট**। Stop এন্ট্রির আগে বসে, সাইজ Stop থেকে আসে, আর জিতুক বা হারুক ফল R এ লগ হয়।""",
        mistakes=[["\"দ্রুত বাড়াতে\" বড় শতাংশ ঝুঁকি", "ছোট শুরু করুন: ০.৫% বা কম"], ["ফলপ্রসূ লাগে বলে প্রতিদিন ট্রেড", "পরিকল্পনা ট্রেড করুন, শান্ত দিন বাদ দিন"], ["জার্নাল বাদ দেওয়া", "প্রতি ট্রেডে দশ লাইনই যথেষ্ট"], ["তিন লোকসানের পর পরিকল্পনা ছাড়া", "অনেক ট্রেডে বিচার করুন"]],
        practice=["এক পাতার পরিকল্পনা লিখুন: পেয়ার, টাইমফ্রেম, সেটআপ, ঝুঁকি, Stop ও দৈনিক সীমা।", "আপনার অ্যাকাউন্টে ০.৫% ঝুঁকি ও ২০-পিপ Stop এর সাইজ হিসাব করুন।", "আপনার পরের ২০টি ডেমো ট্রেড R এ লগ করুন।"],
        summary=[["ভুল", "Stop না থাকা বা বেশি ঝুঁকি, Overtrading, পরিকল্পনা বা জার্নাল নেই, ছোট নমুনা, ছোটা"], ["অঙ্ক", "আসল Edge ১০ ট্রেডের পর এগিয়ে থাকার সম্ভাবনা মাত্র ৫০%"], ["অভ্যাস", "স্থির ছোট ঝুঁকি, পরিকল্পনা, জার্নাল, অনেক ট্রেড"], ["মানসিকতা", "শুরুর মাসগুলো শিক্ষা"]],
        related=[("/blog/risk-management-essentials", "Risk Management Essentials"), ("/blog/avoiding-overtrading", "Avoiding Overtrading"), ("/blog/trading-journal-template", "Trading Journal Template"), ("/quantitative/introduction", "Introduction to Quantitative Trading")],
        fig_alt="ছোট ধনাত্মক Edge এর স্ট্র্যাটেজির ৩০টি Equity পথের সিমুলেশন ও ১০, ২০, ৫০, ১০০, ২০০ ও ৫০০ ট্রেডের পর এগিয়ে থাকার সম্ভাবনা",
        fig_note="কোয়ান্টিটেটিভ ভূমিকা থেকে উদাহরণ (সিন্থেটিক সিমুলেশন)", fig_label="Introduction to Quantitative Trading"),
)
