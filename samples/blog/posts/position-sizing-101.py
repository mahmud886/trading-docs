SPEC = dict(
    fm=dict(date="2026-05-10", category="Risk Management", tags=["position-sizing", "risk", "money-management", "capital-protection"], reading=7, featured=True),
    fig=dict(img="/images/price-action/risk-management/risk-per-trade-equity-dark.webp", video="/videos/price-action/risk-management-explainer-dark.mp4", lesson="/price-action/risk-management"),
    en=dict(
        title="Position Sizing 101 — How Big Should Each Trade Be?",
        description="The position-size formula (size = money at risk divided by stop distance times pip value), lot sizes and pip values, fixed-fractional risk of 0.5% to 2%, what a run of losses does to an account at each risk level, and worked EUR/USD and USD/JPY calculations with a 1 to 3 planned reward-to-risk.",
        intro="**Position size** decides how much a stop-out costs. A good setup with an oversized position can end an account; a modest edge with a small, steady size can last. The calculation is short and mechanical: choose the **money you are willing to lose**, find the **stop distance**, and let those two numbers set the size.",
        fix="The original gave one-size-fits-all rules and quoted survival figures without sources. The risk level you choose depends on your edge, your tolerance for drawdown and your account; the table below shows the arithmetic so you can decide.",
        sections=[
            ("The Formula", """
> **Position size = (account × risk %) ÷ (stop distance in pips × pip value per unit of size)**

| Lot type        | Units      | Pip value (USD-quoted pair such as EUR/USD) |
| --------------- | ---------- | ------------------------------------------- |
| Standard lot    | 100,000    | About 10 USD per pip                        |
| Mini lot (0.10) | 10,000     | About 1 USD per pip                         |
| Micro lot (0.01) | 1,000     | About 0.10 USD per pip                      |

For USD/JPY a standard lot is worth about **1,000 yen per pip** (0.01 × 100,000), which is roughly 6.7 USD when USD/JPY is 150; check your platform's pip value for pairs without USD as the quote currency.

Example: account 5,000, risk 1% = **50**; stop **25 pips**; pip value needed = 50 ÷ 25 = **2 USD per pip** = **0.20 standard lot**. See [Risk Management](/en/price-action/risk-management) for how risk per trade shapes an equity curve."""),
            ("What a Losing Run Does", """
The account after *n* consecutive full losses at risk *r* is (1 − r)^n. For 10 losses in a row:

| Risk per trade | Account after 10 losses | Loss    | Gain needed to recover |
| -------------- | ----------------------- | ------- | ---------------------- |
| 0.5%           | 95.1%                   | −4.9%   | +5.1%                  |
| 1%             | 90.4%                   | −9.6%   | +10.6%                 |
| 2%             | 81.7%                   | −18.3%  | +22.4%                 |
| 5%             | 59.9%                   | −40.1%  | +67.0%                 |

Recovery is harder than the loss: a 20% loss needs a **25%** gain, 30% needs 42.9%, 50% needs **100%**. Ten losses in a row is not impossible for a system with a modest win rate, so the risk per trade should be small enough that such a run is survivable. See [Monte Carlo Simulations](/en/quantitative/monte-carlo) for how likely bad runs are."""),
            ("Choosing the Risk Level", """
| Factor                          | Consideration                                                          |
| ------------------------------- | ---------------------------------------------------------------------- |
| Edge                            | A system with a larger, proven edge can bear more risk per trade       |
| Drawdown tolerance              | Pick a risk such that a bad run is a drawdown you can sit through      |
| Correlated positions            | Two EUR/USD-type trades are close to one bigger trade: count them together |
| Account size                    | A very small account may force larger percentages: that is a warning   |

Many traders use 0.5% to 2% as a starting range; that is a convention, not a rule. Review it with data."""),
        ],
        example="""
Account 10,000 at 1% risk (100). EUR/USD: entry **1.0850**, stop **1.0825** (25 pips), target **1.0925** (75 pips): **1 : 3.0** planned. Size = 100 ÷ (25 × 10) = **0.40 standard lot**. USD/JPY at 150.00 with a 30-pip stop (0.30 yen): pip value per standard lot is about 1,000 yen = 6.67 USD, so size = 100 ÷ (30 × 6.67) = **0.50 standard lot**. If either stop is hit, the loss is about 100, whatever the pair.""",
        mistakes=[["Fixed lot size regardless of stop", "Recompute the size from the stop each time"], ["Widening the stop without reducing the size", "A wider stop needs a smaller position"], ["Counting correlated trades separately", "Treat them as one larger risk"], ["Risking more after a loss", "Keep risk fixed; reduce if anything"]],
        practice=["Write down your account, your risk % and compute the money at risk.", "For three recent trades compute the size you should have used.", "Use the table to find the risk where 10 losses would be a drawdown you can accept."],
        summary=[["Formula", "Size = money at risk ÷ (stop pips × pip value)"], ["Risk", "A fixed fraction of the account, chosen in advance"], ["Losing run", "Account = (1 − r)^n; recovery needs more than the loss"], ["Correlation", "Count related trades together"]],
        related=[("/price-action/risk-management", "Risk Management"), ("/quantitative/kelly-criterion", "Kelly Criterion"), ("/quantitative/monte-carlo", "Monte Carlo Simulations"), ("/blog/risk-management-essentials", "Risk Management Essentials")],
        fig_alt="A synthetic equity curve showing the effect of risking a fixed percentage of the account per trade",
        fig_note="Synthetic trades for teaching", fig_label="Risk Management"),
    bn=dict(
        title="Position Sizing 101 — প্রতিটি ট্রেড কত বড় হবে?",
        description="পজিশন সাইজ সূত্র (সাইজ = ঝুঁকির অর্থ ভাগ Stop দূরত্ব গুণ পিপ মান), লট সাইজ ও পিপ মান, ০.৫% থেকে ২% স্থির-ভগ্নাংশ ঝুঁকি, প্রতিটি ঝুঁকি স্তরে টানা লোকসান অ্যাকাউন্টে কী করে, আর ১ : ৩ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে EUR/USD ও USD/JPY হিসাবের উদাহরণ।",
        intro="**পজিশন সাইজ** ঠিক করে একটি Stop-out এর খরচ কত। ভালো সেটআপে বড় পজিশন অ্যাকাউন্ট শেষ করতে পারে; মাঝারি Edge ছোট, স্থির সাইজে টিকে যেতে পারে। হিসাব ছোট ও যান্ত্রিক: **কত হারাতে রাজি** তা বাছুন, **Stop দূরত্ব** বের করুন, আর এই দুই সংখ্যা সাইজ ঠিক করুক।",
        fix="মূল লেখায় সবার জন্য এক নিয়ম ও উৎস ছাড়া টিকে থাকার সংখ্যা ছিল। কোন ঝুঁকি স্তর বাছবেন তা আপনার Edge, Drawdown সহনশীলতা ও অ্যাকাউন্টের ওপর নির্ভর করে; নিচের টেবিল অঙ্ক দেখায় যাতে আপনি ঠিক করতে পারেন।",
        sections=[
            ("সূত্র", """
> **পজিশন সাইজ = (অ্যাকাউন্ট × ঝুঁকি %) ÷ (পিপে Stop দূরত্ব × সাইজের প্রতি একক পিপ মান)**

| লটের ধরন        | ইউনিট      | পিপ মান (USD-কোটেড পেয়ার যেমন EUR/USD) |
| --------------- | ---------- | ------------------------------------------- |
| স্ট্যান্ডার্ড লট    | ১০০,০০০    | প্রতি পিপে প্রায় ১০ USD                        |
| মিনি লট (০.১০) | ১০,০০০     | প্রতি পিপে প্রায় ১ USD                        |
| মাইক্রো লট (০.০১) | ১,০০০     | প্রতি পিপে প্রায় ০.১০ USD                      |

USD/JPY তে স্ট্যান্ডার্ড লট প্রতি পিপে প্রায় **১,০০০ ইয়েন** (০.০১ × ১০০,০০০), যা USD/JPY ১৫০ হলে প্রায় ৬.৭ USD; USD যে পেয়ারের Quote নয় সেগুলোর জন্য আপনার প্ল্যাটফর্মের পিপ মান দেখুন।

উদাহরণ: অ্যাকাউন্ট ৫,০০০, ঝুঁকি ১% = **৫০**; Stop **২৫ পিপ**; দরকারি পিপ মান = ৫০ ÷ ২৫ = **প্রতি পিপে ২ USD** = **০.২০ স্ট্যান্ডার্ড লট**। প্রতি ট্রেডের ঝুঁকি Equity কার্ভ কেমন গড়ে তা [Risk Management](/bn/price-action/risk-management) এ দেখুন।"""),
            ("টানা লোকসান কী করে", """
ঝুঁকি *r* এ টানা *n* পূর্ণ লোকসানের পর অ্যাকাউন্ট (১ − r)^n। টানা ১০ লোকসানে:

| প্রতি ট্রেডে ঝুঁকি | ১০ লোকসানের পর অ্যাকাউন্ট | ক্ষতি    | পুনরুদ্ধারে দরকারি লাভ |
| -------------- | ----------------------- | ------- | ---------------------- |
| ০.৫%           | ৯৫.১%                   | −৪.৯%   | +৫.১%                  |
| ১%             | ৯০.৪%                   | −৯.৬%   | +১০.৬%                 |
| ২%             | ৮১.৭%                   | −১৮.৩%  | +২২.৪%                 |
| ৫%             | ৫৯.৯%                   | −৪০.১%  | +৬৭.০%                 |

পুনরুদ্ধার ক্ষতির চেয়ে কঠিন: ২০% ক্ষতিতে **২৫%** লাভ লাগে, ৩০% এ ৪২.৯%, ৫০% এ **১০০%**। মাঝারি জয়ের হারের সিস্টেমে টানা ১০ লোকসান অসম্ভব নয়, তাই প্রতি ট্রেডের ঝুঁকি এত ছোট হওয়া উচিত যে এমন ধারা টেকা যায়। খারাপ ধারা কত সম্ভাব্য তা [Monte Carlo Simulations](/bn/quantitative/monte-carlo) এ দেখুন।"""),
            ("ঝুঁকি স্তর বাছা", """
| বিষয়                          | বিবেচনা                                                          |
| ------------------------------- | ---------------------------------------------------------------------- |
| Edge                            | বড়, প্রমাণিত Edge এর সিস্টেম প্রতি ট্রেডে বেশি ঝুঁকি বইতে পারে       |
| Drawdown সহনশীলতা              | এমন ঝুঁকি বাছুন যাতে খারাপ ধারা এমন Drawdown যা সহ্য করা যায়      |
| সম্পর্কিত পজিশন            | দুটি EUR/USD-ধরনের ট্রেড প্রায় একটি বড় ট্রেড: একসাথে গুনুন |
| অ্যাকাউন্টের আকার                    | খুব ছোট অ্যাকাউন্ট বড় শতাংশ বাধ্য করতে পারে: এটি সতর্কতা   |

অনেক ট্রেডার ০.৫% থেকে ২% কে শুরুর পরিসর ধরেন; এটি রীতি, নিয়ম নয়। ডেটা দিয়ে রিভিউ করুন।"""),
        ],
        example="""
অ্যাকাউন্ট ১০,০০০, ১% ঝুঁকি (১০০)। EUR/USD: এন্ট্রি **1.0850**, Stop **1.0825** (২৫ পিপ), টার্গেট **1.0925** (৭৫ পিপ): পরিকল্পিত **১ : ৩.০**। সাইজ = ১০০ ÷ (২৫ × ১০) = **০.৪০ স্ট্যান্ডার্ড লট**। USD/JPY ১৫০.০০ এ ৩০-পিপ Stop (০.৩০ ইয়েন): প্রতি স্ট্যান্ডার্ড লটে পিপ মান প্রায় ১,০০০ ইয়েন = ৬.৬৭ USD, তাই সাইজ = ১০০ ÷ (৩০ × ৬.৬৭) = **০.৫০ স্ট্যান্ডার্ড লট**। যেকোনো Stop লাগলে পেয়ার যাই হোক ক্ষতি প্রায় ১০০।""",
        mistakes=[["Stop যাই হোক স্থির লট সাইজ", "প্রতিবার Stop থেকে সাইজ আবার হিসাব করুন"], ["সাইজ না কমিয়ে Stop চওড়া করা", "চওড়া Stop এ ছোট পজিশন লাগে"], ["সম্পর্কিত ট্রেড আলাদা গোনা", "একটি বড় ঝুঁকি ধরুন"], ["লোকসানের পর বেশি ঝুঁকি", "ঝুঁকি স্থির রাখুন; কমানো বরং ভালো"]],
        practice=["আপনার অ্যাকাউন্ট ও ঝুঁকি % লিখে ঝুঁকির অর্থ হিসাব করুন।", "তিনটি সাম্প্রতিক ট্রেডে যে সাইজ ব্যবহার করা উচিত ছিল হিসাব করুন।", "টেবিল দিয়ে এমন ঝুঁকি খুঁজুন যেখানে ১০ লোকসান আপনি মেনে নিতে পারা Drawdown।"],
        summary=[["সূত্র", "সাইজ = ঝুঁকির অর্থ ÷ (Stop পিপ × পিপ মান)"], ["ঝুঁকি", "আগে বাছা অ্যাকাউন্টের স্থির ভগ্নাংশ"], ["টানা লোকসান", "অ্যাকাউন্ট = (১ − r)^n; পুনরুদ্ধারে ক্ষতির চেয়ে বেশি লাগে"], ["সম্পর্ক", "সম্পর্কিত ট্রেড একসাথে গুনুন"]],
        related=[("/price-action/risk-management", "Risk Management"), ("/quantitative/kelly-criterion", "Kelly Criterion"), ("/quantitative/monte-carlo", "Monte Carlo Simulations"), ("/blog/risk-management-essentials", "Risk Management Essentials")],
        fig_alt="একটি সিন্থেটিক Equity কার্ভ যা প্রতি ট্রেডে অ্যাকাউন্টের স্থির শতাংশ ঝুঁকির প্রভাব দেখায়",
        fig_note="শেখানোর জন্য সিন্থেটিক ট্রেড", fig_label="Risk Management"),
)
