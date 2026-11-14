SPEC = dict(
    fm=dict(date="2026-04-20", category="Academy", tags=["risk-management", "position-sizing", "stop-loss", "beginner"], reading=7, featured=True),
    fig=dict(img="/images/quantitative/monte-carlo/monte-carlo-drawdown-dark.webp", video="/videos/quantitative/mc-explainer-dark.mp4", lesson="/quantitative/monte-carlo"),
    en=dict(
        title="Risk Management Essentials — Five Rules That Keep You in the Game",
        description="The five basic rules (a fixed risk per trade, a stop-loss on every trade, a minimum reward-to-risk, daily and weekly loss limits, and no averaging down), why drawdowns are harder to recover from than they look (a 50% loss needs a 100% gain), and how bad a run of trades can get even for a positive-expectancy system.",
        intro="Risk management is not a way to make a strategy profitable; it is a way to **stay in business long enough** for an edge to show. The rules below are simple, and each one exists because a specific kind of loss is otherwise easy to suffer.",
        fix="The original gave absolute statements about what \"professionals\" do and fixed numbers without sources. The five rules below are common practice; the exact numbers (1%, 2R, 3%) are starting points that you should set from your own tolerance and data.",
        sections=[
            ("The Five Rules", """
| # | Rule                                    | Why                                                                          | Example setting                |
| - | --------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------ |
| 1 | **Fixed risk per trade**                | One loss should never decide the month                                       | 1% of the account              |
| 2 | **A stop-loss on every trade**          | Limits the loss to a known amount before you enter                           | Placed at a structural level   |
| 3 | **A minimum reward-to-risk**            | A positive expectancy needs winners that are large enough                    | At least 1 : 1.5 planned       |
| 4 | **Daily and weekly loss limits**        | Stops a bad stretch from becoming a disaster                                 | −2R a day, −5R a week          |
| 5 | **No averaging down**                   | Adding to a loser turns a small loss into a large one                        | Never add to a losing position |

See [Position Sizing 101](/en/blog/position-sizing-101) for the size calculation and [Risk Management](/en/price-action/risk-management) for the equity-curve effect."""),
            ("Drawdowns Are Harder to Recover From Than They Look", """
| Loss from the peak | Gain needed to get back |
| ------------------ | ----------------------- |
| 10%                | 11.1%                   |
| 20%                | 25%                     |
| 30%                | 42.9%                   |
| 50%                | 100%                    |

The formula is 1 ÷ (1 − loss) − 1. Because recovery needs a larger percentage than the loss, **avoiding deep drawdowns matters more than chasing big gains**."""),
            ("How Bad Can a Run Get?", """
Even a system with positive expectancy can have a long run of losses. In the [Monte Carlo](/en/quantitative/monte-carlo) lesson a 100-trade backtest with an expectancy of +0.125R was resampled 4,000 times: the **median** maximum drawdown was 9R, but the **95th percentile** was 18R, and **12%** of the paths ended below zero after 100 trades. At 1% risk per trade, 18R is about a 16.5% drawdown; at 2% it is about 30.5%. The risk per trade should be small enough for the bad end of that range to be survivable."""),
        ],
        example="""
Account 10,000, risk 1% = 100. EUR/USD buy **1.0850**, stop **1.0830** (20 pips), target **1.0890** (40 pips): **1 : 2.0** planned. Size = 100 ÷ (20 × 10) = **0.50 standard lot**. Daily limit −2R (200): after two stopped trades you stop for the day. If the day's first trade runs −1R and a third setup appears, you skip it: a third loss would break the daily limit.""",
        mistakes=[["Moving the stop further away", "A stop only moves toward profit, never further from price"], ["Taking trades with less than your minimum reward-to-risk", "Skip them"], ["Risking more after a loss to \"get it back\"", "Keep risk fixed; stop at the daily limit"], ["Averaging down", "Accept the small loss"]],
        practice=["Write your five rules with your own numbers on one page.", "Compute 18 losses at your risk per trade and the resulting drawdown.", "Check each of your last 20 trades against rules 1 to 3."],
        summary=[["Rules", "Fixed risk, stop on every trade, minimum reward-to-risk, loss limits, no averaging down"], ["Recovery", "A 50% loss needs a 100% gain"], ["Path risk", "Even positive systems have bad runs; size for them"], ["Numbers", "The 1% and 2R figures are starting points to adjust"]],
        related=[("/blog/position-sizing-101", "Position Sizing 101"), ("/quantitative/monte-carlo", "Monte Carlo Simulations"), ("/price-action/risk-management", "Risk Management"), ("/blog/risk-management-position-sizing-masterclass", "Risk Management Masterclass")],
        fig_alt="Forty resampled equity paths of a 100-trade backtest and the distributions of final result and maximum drawdown",
        fig_note="Illustration from the Monte Carlo lesson (synthetic trades)", fig_label="Monte Carlo Simulations"),
    bn=dict(
        title="Risk Management Essentials — খেলায় টিকিয়ে রাখা পাঁচ নিয়ম",
        description="পাঁচ মৌলিক নিয়ম (প্রতি ট্রেডে স্থির ঝুঁকি, প্রতি ট্রেডে Stop-loss, ন্যূনতম রিওয়ার্ড-টু-রিস্ক, দৈনিক ও সাপ্তাহিক লস লিমিট, Averaging Down না করা), কেন Drawdown থেকে পুনরুদ্ধার যতটা মনে হয় তার চেয়ে কঠিন (৫০% ক্ষতিতে ১০০% লাভ লাগে), আর ধনাত্মক-Expectancy সিস্টেমেও ট্রেডের ধারা কত খারাপ হতে পারে।",
        intro="Risk Management কোনো স্ট্র্যাটেজিকে লাভজনক করার উপায় নয়; Edge দেখা দেওয়া পর্যন্ত **ব্যবসায় টিকে থাকার** উপায়। নিচের নিয়মগুলো সরল, আর প্রতিটি আছে কারণ নির্দিষ্ট ধরনের ক্ষতি নইলে সহজেই হয়।",
        fix="মূল লেখায় \"পেশাদাররা\" কী করে তা নিয়ে চূড়ান্ত বক্তব্য ও উৎস ছাড়া স্থির সংখ্যা ছিল। নিচের পাঁচ নিয়ম প্রচলিত চর্চা; সঠিক সংখ্যা (১%, ২R, ৩%) শুরুর বিন্দু যা আপনার সহনশীলতা ও ডেটা থেকে ঠিক করা উচিত।",
        sections=[
            ("পাঁচ নিয়ম", """
| # | নিয়ম                                    | কেন                                                                          | উদাহরণ সেটিং                |
| - | --------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------ |
| ১ | **প্রতি ট্রেডে স্থির ঝুঁকি**                | একটি লোকসান কখনো মাসের ফল ঠিক করবে না                                       | অ্যাকাউন্টের ১%              |
| ২ | **প্রতি ট্রেডে Stop-loss**          | এন্ট্রির আগেই ক্ষতি জানা অঙ্কে সীমিত করে                           | স্ট্রাকচারাল লেভেলে   |
| ৩ | **ন্যূনতম রিওয়ার্ড-টু-রিস্ক**            | ধনাত্মক Expectancy তে জয় যথেষ্ট বড় হতে হয়                    | পরিকল্পিত অন্তত ১ : ১.৫       |
| ৪ | **দৈনিক ও সাপ্তাহিক লস লিমিট**        | খারাপ সময়কে বিপর্যয় হতে দেয় না                                 | দিনে −২R, সপ্তাহে −৫R          |
| ৫ | **Averaging Down নয়**                   | হারা পজিশনে যোগ করা ছোট লোকসানকে বড় করে                        | হারা পজিশনে কখনো যোগ নয় |

সাইজ হিসাবের জন্য [Position Sizing 101](/bn/blog/position-sizing-101) ও Equity কার্ভের প্রভাবের জন্য [Risk Management](/bn/price-action/risk-management) দেখুন।"""),
            ("Drawdown থেকে পুনরুদ্ধার যতটা মনে হয় তার চেয়ে কঠিন", """
| শীর্ষ থেকে ক্ষতি | ফিরে আসতে দরকারি লাভ |
| ------------------ | ----------------------- |
| ১০%                | ১১.১%                   |
| ২০%                | ২৫%                     |
| ৩০%                | ৪২.৯%                   |
| ৫০%                | ১০০%                    |

সূত্র ১ ÷ (১ − ক্ষতি) − ১। পুনরুদ্ধারে ক্ষতির চেয়ে বেশি শতাংশ লাগে বলে **গভীর Drawdown এড়ানো বড় লাভের পেছনে ছোটার চেয়ে গুরুত্বপূর্ণ**।"""),
            ("ধারা কত খারাপ হতে পারে?", """
ধনাত্মক Expectancy এর সিস্টেমেও লোকসানের লম্বা ধারা হতে পারে। [Monte Carlo](/bn/quantitative/monte-carlo) লেসনে +০.১২৫R Expectancy এর ১০০-ট্রেড Backtest ৪,০০০ বার Resample করা হয়েছে: সর্বোচ্চ Drawdown এর **মিডিয়ান** ৯R, কিন্তু **৯৫ম Percentile** ১৮R, আর **১২%** পথ ১০০ ট্রেডের পর শূন্যের নিচে শেষ হয়েছে। প্রতি ট্রেডে ১% ঝুঁকিতে ১৮R প্রায় ১৬.৫% Drawdown; ২% এ প্রায় ৩০.৫%। প্রতি ট্রেডের ঝুঁকি এত ছোট হওয়া উচিত যাতে ওই পরিসরের খারাপ প্রান্ত টেকা যায়।"""),
        ],
        example="""
অ্যাকাউন্ট ১০,০০০, ঝুঁকি ১% = ১০০। EUR/USD Buy **1.0850**, Stop **1.0830** (২০ পিপ), টার্গেট **1.0890** (৪০ পিপ): পরিকল্পিত **১ : ২.০**। সাইজ = ১০০ ÷ (২০ × ১০) = **০.৫০ স্ট্যান্ডার্ড লট**। দৈনিক সীমা −২R (২০০): দুটি Stop-out এর পর সেদিনের জন্য থামুন। দিনের প্রথম ট্রেড −১R হলে ও তৃতীয় সেটআপ এলে বাদ দিন: তৃতীয় লোকসান দৈনিক সীমা ভাঙবে।""",
        mistakes=[["Stop আরও দূরে সরানো", "Stop শুধু মুনাফার দিকে সরে, প্রাইস থেকে দূরে নয়"], ["ন্যূনতম রিওয়ার্ড-টু-রিস্কের কম ট্রেড নেওয়া", "বাদ দিন"], ["\"ফিরিয়ে আনতে\" লোকসানের পর বেশি ঝুঁকি", "ঝুঁকি স্থির রাখুন; দৈনিক সীমায় থামুন"], ["Averaging Down", "ছোট লোকসান মেনে নিন"]],
        practice=["নিজের সংখ্যাসহ পাঁচ নিয়ম এক পাতায় লিখুন।", "আপনার প্রতি ট্রেডের ঝুঁকিতে ১৮ লোকসান ও ফল Drawdown হিসাব করুন।", "শেষ ২০ ট্রেড নিয়ম ১ থেকে ৩ এর সাথে মেলান।"],
        summary=[["নিয়ম", "স্থির ঝুঁকি, প্রতি ট্রেডে Stop, ন্যূনতম রিওয়ার্ড-টু-রিস্ক, লস লিমিট, Averaging Down নয়"], ["পুনরুদ্ধার", "৫০% ক্ষতিতে ১০০% লাভ লাগে"], ["পথের ঝুঁকি", "ধনাত্মক সিস্টেমেও খারাপ ধারা আছে; সেভাবে সাইজ করুন"], ["সংখ্যা", "১% ও ২R শুরুর বিন্দু, সমন্বয় করুন"]],
        related=[("/blog/position-sizing-101", "Position Sizing 101"), ("/quantitative/monte-carlo", "Monte Carlo Simulations"), ("/price-action/risk-management", "Risk Management"), ("/blog/risk-management-position-sizing-masterclass", "Risk Management Masterclass")],
        fig_alt="১০০-ট্রেড Backtest এর চল্লিশটি Resampled Equity পথ এবং চূড়ান্ত ফল ও সর্বোচ্চ Drawdown এর বণ্টন",
        fig_note="Monte Carlo লেসন থেকে উদাহরণ (সিন্থেটিক ট্রেড)", fig_label="Monte Carlo Simulations"),
)
