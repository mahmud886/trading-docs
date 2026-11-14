SPEC = dict(
    fm=dict(date="2026-05-19", category="Academy", tags=["risk-management", "position-sizing", "advanced", "portfolio"], reading=9, featured=True),
    fig=dict(img="/images/quantitative/kelly-criterion/kelly-criterion-dark.webp", video="/videos/quantitative/kelly-explainer-dark.mp4", lesson="/quantitative/kelly-criterion"),
    en=dict(
        title="Risk Management and Position Sizing Masterclass — From One Trade to a Portfolio",
        description="An advanced guide to sizing: fractional Kelly and why traders bet less than the optimum, total open risk and correlated positions, volatility-scaled stops, drawdown rules and a worked three-position portfolio where three EUR/USD-style longs are really one bet. Includes the Kelly growth curve and simulated drawdowns.",
        intro="At the single-trade level, risk management means a fixed percentage and a stop. At the **portfolio** level you also have to ask: how much risk is open **in total**, and how much of it is really **the same bet**? This guide builds from the single trade up.",
        fix="The original gave institutional-style rules (portfolio heat caps, fixed Kelly fractions) as standards. They are conventions or illustrations; the numbers should come from your own edge estimates, tolerance and testing.",
        sections=[
            ("Sizing Beyond a Fixed Percent", """
| Method                  | How it works                                                          | When it helps                                   |
| ----------------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| **Fixed fractional**    | Risk the same percent each trade                                      | Simple and robust                               |
| **Fractional Kelly**    | Risk a fraction (¼ to ½) of the growth-optimal fraction f* = p − q/b  | When you have a credible estimate of p and b    |
| **Volatility-scaled**   | Stop and size scale with recent volatility (for example ATR)          | Markets whose swings change over time           |

The chart shows why a fraction of Kelly is popular: for 55% even-money bets, **half Kelly keeps about 75% of the growth** but in one 400-bet simulation had a 57% drawdown against 83% for full Kelly, and **double Kelly had no growth at all** and a 99% drawdown. The inputs are estimates, so betting a fraction leaves room for error. See [Kelly Criterion](/en/quantitative/kelly-criterion)."""),
            ("Portfolio-Level Risk", """
| Control                          | Rule (example)                                                          | Why                                              |
| -------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------ |
| **Total open risk**              | At most 3R open at any time                                              | Caps the loss if everything goes wrong at once   |
| **Correlated group risk**        | Count USD-linked positions as one bet and cap it at 2R                   | Several pairs can lose together                  |
| **Daily and weekly loss limits** | −2R a day, −5R a week                                                    | Stops a bad stretch                              |
| **Drawdown scaling**             | Halve the risk once drawdown passes 10R, restore at a new high           | Slows the damage; can also slow recovery         |

Correlation changes, so treat these as limits to **recheck**, not constants. See [Equity Curve Management](/en/quantitative/equity-curve-management)."""),
            ("Volatility-Scaled Stops", """
If the average daily range doubles, a normal stop is hit more often by noise. Scale the stop with volatility and **cut the size** so the money at risk stays the same:

| Market state       | Stop       | Size for 100 at risk (EUR/USD) |
| ------------------ | ---------- | ------------------------------ |
| Quiet (ATR 60 pips daily)  | 15 pips    | 0.67 standard lot              |
| Active (ATR 120 pips daily) | 30 pips   | 0.33 standard lot              |"""),
        ],
        example="""
Three longs, 1% risk each (100 on a 10,000 account): EUR/USD, GBP/USD and AUD/USD, all expressing a weaker dollar. The correlation between them is high, so this is close to **3R on one bet**. With the correlated-group cap at 2R, take two trades at 1% or all three at 0.67% (67 each). Plan for the EUR/USD leg at 0.67%: entry **1.0850**, stop **1.0830** (20 pips), target **1.0910** (60 pips), **1 : 3.0** planned: size = 67 ÷ (20 × 10) = **0.33 standard lot**.""",
        mistakes=[["Counting correlated positions separately", "Cap risk per correlated group"], ["Using Kelly with a guessed win rate", "Use a fraction, and stress the inputs"], ["Same stop in quiet and active markets", "Scale the stop and the size with volatility"], ["Keeping rules you've never tested", "Simulate them on your trade list"]],
        practice=["List your open positions and group the correlated ones.", "Compute total and per-group risk in R.", "Choose a Kelly fraction you would actually trade and write down the drawdown you accept."],
        summary=[["Sizing", "Fixed fractional, fractional Kelly, or volatility-scaled"], ["Portfolio", "Cap total open risk and correlated-group risk"], ["Kelly", "Half Kelly keeps about 75% of the growth with smaller drawdowns"], ["Numbers", "Illustrative: set yours from data"]],
        related=[("/quantitative/kelly-criterion", "Kelly Criterion"), ("/quantitative/equity-curve-management", "Equity Curve Management"), ("/quantitative/monte-carlo", "Monte Carlo Simulations"), ("/blog/risk-management-essentials", "Risk Management Essentials")],
        fig_alt="The Kelly growth curve peaking at the optimal fraction, and four stake sizes simulated over the same 400 bets with their maximum drawdowns",
        fig_note="Illustration from the Kelly lesson (synthetic bets)", fig_label="Kelly Criterion"),
    bn=dict(
        title="Risk Management ও Position Sizing মাস্টারক্লাস — একটি ট্রেড থেকে পোর্টফোলিও",
        description="সাইজিংয়ের উন্নত গাইড: ফ্র্যাকশনাল Kelly ও কেন ট্রেডাররা অপ্টিমামের চেয়ে কম বাজি ধরেন, মোট খোলা ঝুঁকি ও সম্পর্কিত পজিশন, ভোলাটিলিটি-স্কেলড Stop, Drawdown নিয়ম, আর তিন-পজিশনের পোর্টফোলিও উদাহরণ যেখানে তিনটি EUR/USD-ধরনের Long আসলে একটি বাজি। Kelly প্রবৃদ্ধি বক্ররেখা ও সিমুলেটেড Drawdown সহ।",
        intro="একক-ট্রেড স্তরে Risk Management মানে স্থির শতাংশ ও একটি Stop। **পোর্টফোলিও** স্তরে আরও প্রশ্ন: **মোট** কত ঝুঁকি খোলা, আর তার কতটা আসলে **একই বাজি**? এই গাইড একক ট্রেড থেকে উপরে গড়ে।",
        fix="মূল লেখায় প্রাতিষ্ঠানিক ধাঁচের নিয়ম (পোর্টফোলিও Heat ক্যাপ, স্থির Kelly ভগ্নাংশ) মান হিসেবে দেওয়া হয়েছিল। এগুলো রীতি বা উদাহরণ; সংখ্যা আপনার নিজের Edge অনুমান, সহনশীলতা ও পরীক্ষা থেকে আসা উচিত।",
        sections=[
            ("স্থির শতাংশের বাইরে সাইজিং", """
| পদ্ধতি                  | কীভাবে কাজ করে                                                          | কখন সাহায্য করে                                   |
| ----------------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| **স্থির ভগ্নাংশ**    | প্রতি ট্রেডে একই শতাংশ ঝুঁকি                                      | সরল ও মজবুত                               |
| **ফ্র্যাকশনাল Kelly**    | প্রবৃদ্ধি-অপ্টিমাল ভগ্নাংশ f* = p − q/b এর একটি অংশ (¼ থেকে ½) ঝুঁকি  | p ও b এর বিশ্বাসযোগ্য অনুমান থাকলে    |
| **ভোলাটিলিটি-স্কেলড**   | Stop ও সাইজ সাম্প্রতিক ভোলাটিলিটির (যেমন ATR) সাথে স্কেল হয়          | যে মার্কেটের দোলা সময়ের সাথে বদলায়           |

চার্ট দেখায় কেন Kelly এর ভগ্নাংশ জনপ্রিয়: ৫৫% সমান-অর্থের বাজিতে **Half Kelly প্রায় ৭৫% প্রবৃদ্ধি রাখে** কিন্তু একটি ৪০০-বাজির সিমুলেশনে Drawdown ৫৭% ছিল, পূর্ণ Kelly এর ৮৩% এর বিপরীতে, আর **Double Kelly তে কোনো প্রবৃদ্ধিই ছিল না** আর Drawdown ৯৯%। ইনপুটগুলো অনুমান, তাই ভগ্নাংশ বাজি ত্রুটির জায়গা রাখে। [Kelly Criterion](/bn/quantitative/kelly-criterion) দেখুন।"""),
            ("পোর্টফোলিও-স্তরের ঝুঁকি", """
| নিয়ন্ত্রণ                          | নিয়ম (উদাহরণ)                                                          | কেন                                              |
| -------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------ |
| **মোট খোলা ঝুঁকি**              | যেকোনো সময় সর্বোচ্চ ৩R খোলা                                              | সব একসাথে ভুল হলে ক্ষতির সীমা   |
| **সম্পর্কিত গ্রুপের ঝুঁকি**        | USD-সংযুক্ত পজিশন একটি বাজি ধরে ২R এ সীমিত করুন                   | কয়েকটি পেয়ার একসাথে হারতে পারে                  |
| **দৈনিক ও সাপ্তাহিক লস লিমিট** | দিনে −২R, সপ্তাহে −৫R                                                    | খারাপ সময় থামায়                                  |
| **Drawdown স্কেলিং**             | Drawdown ১০R ছাড়ালে ঝুঁকি অর্ধেক, নতুন শীর্ষে ফিরিয়ে আনুন           | ক্ষতি ধীর করে; পুনরুদ্ধারও ধীর করতে পারে         |

সম্পর্ক বদলায়, তাই এগুলোকে ধ্রুবক নয়, **আবার যাচাই করার** সীমা ধরুন। [Equity Curve Management](/bn/quantitative/equity-curve-management) দেখুন।"""),
            ("ভোলাটিলিটি-স্কেলড Stop", """
গড় দৈনিক রেঞ্জ দ্বিগুণ হলে স্বাভাবিক Stop নয়েজে বেশি লাগে। ভোলাটিলিটি অনুযায়ী Stop স্কেল করে **সাইজ কমান** যাতে ঝুঁকির অর্থ একই থাকে:

| মার্কেট অবস্থা       | Stop       | ১০০ ঝুঁকিতে সাইজ (EUR/USD) |
| ------------------ | ---------- | ------------------------------ |
| শান্ত (দৈনিক ATR ৬০ পিপ)  | ১৫ পিপ    | ০.৬৭ স্ট্যান্ডার্ড লট              |
| সক্রিয় (দৈনিক ATR ১২০ পিপ) | ৩০ পিপ   | ০.৩৩ স্ট্যান্ডার্ড লট              |"""),
        ],
        example="""
প্রতিটিতে ১% ঝুঁকিতে তিনটি Long (১০,০০০ অ্যাকাউন্টে ১০০): EUR/USD, GBP/USD ও AUD/USD, সবই দুর্বল ডলার প্রকাশ করে। তাদের মধ্যে Correlation বেশি, তাই এটি প্রায় **একটি বাজিতে ৩R**। সম্পর্কিত-গ্রুপ ক্যাপ ২R হলে ১% এ দুটি ট্রেড বা ০.৬৭% এ (প্রতিটি ৬৭) তিনটিই নিন। ০.৬৭% এ EUR/USD লেগের পরিকল্পনা: এন্ট্রি **1.0850**, Stop **1.0830** (২০ পিপ), টার্গেট **1.0910** (৬০ পিপ), পরিকল্পিত **১ : ৩.০**: সাইজ = ৬৭ ÷ (২০ × ১০) = **০.৩৩ স্ট্যান্ডার্ড লট**।""",
        mistakes=[["সম্পর্কিত পজিশন আলাদা গোনা", "সম্পর্কিত গ্রুপ প্রতি ঝুঁকি সীমিত করুন"], ["অনুমান করা জয়ের হারে Kelly", "ভগ্নাংশ ব্যবহার করুন, ইনপুট স্ট্রেস করুন"], ["শান্ত ও সক্রিয় মার্কেটে একই Stop", "ভোলাটিলিটি অনুযায়ী Stop ও সাইজ স্কেল করুন"], ["কখনো পরীক্ষা না করা নিয়ম রাখা", "আপনার ট্রেড তালিকায় সিমুলেট করুন"]],
        practice=["আপনার খোলা পজিশনের তালিকা করে সম্পর্কিতগুলো গ্রুপ করুন।", "মোট ও প্রতি-গ্রুপ ঝুঁকি R এ হিসাব করুন।", "আপনি আসলে ট্রেড করবেন এমন Kelly ভগ্নাংশ বেছে মেনে নেওয়া Drawdown লিখুন।"],
        summary=[["সাইজিং", "স্থির ভগ্নাংশ, ফ্র্যাকশনাল Kelly বা ভোলাটিলিটি-স্কেলড"], ["পোর্টফোলিও", "মোট খোলা ঝুঁকি ও সম্পর্কিত-গ্রুপ ঝুঁকি সীমিত করুন"], ["Kelly", "Half Kelly ছোট Drawdown এ প্রায় ৭৫% প্রবৃদ্ধি রাখে"], ["সংখ্যা", "উদাহরণ: ডেটা থেকে আপনারটি ঠিক করুন"]],
        related=[("/quantitative/kelly-criterion", "Kelly Criterion"), ("/quantitative/equity-curve-management", "Equity Curve Management"), ("/quantitative/monte-carlo", "Monte Carlo Simulations"), ("/blog/risk-management-essentials", "Risk Management Essentials")],
        fig_alt="অপ্টিমাল ভগ্নাংশে শীর্ষে ওঠা Kelly প্রবৃদ্ধি বক্ররেখা, আর একই ৪০০ বাজিতে সিমুলেট করা চার স্টেক সাইজ ও তাদের সর্বোচ্চ Drawdown",
        fig_note="Kelly লেসন থেকে উদাহরণ (সিন্থেটিক বাজি)", fig_label="Kelly Criterion"),
)
