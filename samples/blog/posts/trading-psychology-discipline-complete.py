SPEC = dict(
    fm=dict(date="2026-05-19", category="Academy", tags=["psychology", "discipline", "emotions", "mindset", "routine"], reading=10, featured=True),
    fig=dict(img="/images/quantitative/equity-curve-management/equity-curve-filter-dark.webp", video="/videos/quantitative/ec-explainer-dark.mp4", lesson="/quantitative/equity-curve-management"),
    en=dict(
        title="Trading Discipline — Rules, Routines and Limits That Hold Under Pressure",
        description="A practical guide to discipline in trading: write rules before the session, automate what you can (fixed size, stops, limits), use a daily routine and drawdown-based size reduction, and review honestly, with a worked example of a 1% risk day and a drawdown rule.",
        intro="Discipline is not willpower in the moment; it is **decisions made earlier, when you were calm**, and then followed. The more of the plan you fix in advance, the fewer choices you must make while price is moving.",
        fix="The original said psychology is \"80% of trading\" and promised results from specific habits. No such split is established and habits help people differently. This version focuses on rules you can write and check.",
        sections=[
            ("Make Decisions Before the Session", """
| Decide in advance              | Example rule                                                  |
| ------------------------------ | ------------------------------------------------------------- |
| Which setups you trade         | Two named setups, written with entry, stop and target         |
| When you trade                 | London open to 7:00 PM BD; no trading around major releases   |
| How much you risk              | 1% per trade, size from the stop                              |
| When you stop                  | Daily loss limit 2%, trade cap 3                              |
| What you do after a streak     | See the drawdown rule below                                   |"""),
            ("Reduce Choices", """
| Instead of…                         | Do this                                                       |
| ----------------------------------- | ------------------------------------------------------------- |
| Deciding the stop in the moment     | Place the stop and target orders together with the entry      |
| Judging size by feel                | Use a position-size calculator (see [Position Sizing](/en/blog/risk-management-position-sizing-masterclass)) |
| Watching every tick                 | Set alerts at your planned levels and step away               |
| Remembering the rules               | Keep a written [checklist](/en/blog/trade-execution-checklist) open |"""),
            ("A Drawdown Rule", """
Discipline needs a plan for when things go badly. One option: **cut risk after a drawdown**, and restore it after recovery.

| Drawdown from equity peak | Risk per trade |
| ------------------------- | -------------- |
| 0 – 5%                    | 1.0%           |
| 5 – 8%                    | 0.5%           |
| over 8%                   | Pause and review the plan |

Smaller size while losing slows the damage, but it also slows recovery, and in simulation it helps in some sequences and hurts in others (see [Equity Curve Management](/en/quantitative/equity-curve-management)). Decide it in advance and test it, rather than improvising in a bad week."""),
        ],
        example="""
Account 10,000. Rule: 1% risk, daily loss limit 2%, drawdown above 5% halves risk. Monday: buy EUR/USD **1.0850**, stop **1.0830**, target **1.0890** (**1 : 2.0**), 0.5 lot: −1R (−100). Second setup: also −1R. Day at −2%: stop, as written. By Friday the account is at 9,450, a 5.5% drawdown from 10,000, so next week's risk is 0.5% = 47 per trade; for a 20-pip stop the size is 47 ÷ (20 × 10) = **0.24 lot**. None of these were decisions made in the heat of the moment.""",
        mistakes=[["Rules written only in your head", "Write them down"], ["Changing rules during a losing week", "Change them only at the review"], ["No limit on losses per day", "Set it before the session"], ["Perfectionism about discipline", "Aim to follow the plan most of the time and measure it"]],
        practice=["Write your rules on one page with numbers.", "Set a daily loss limit and a trade cap in your platform notes.", "Track plan adherence for 20 trades."],
        summary=[["Discipline", "Decisions made in advance, then followed"], ["Reduce choices", "Orders, calculators, alerts, checklist"], ["Drawdown rule", "Cut size in drawdown, decided beforehand"], ["Review", "Measure adherence, change rules only at review"]],
        related=[("/quantitative/equity-curve-management", "Equity Curve Management"), ("/blog/trade-execution-checklist", "Trade Execution Checklist"), ("/blog/trading-psychology-emotions", "Trading Psychology: Emotions"), ("/blog/avoiding-overtrading", "Avoiding Overtrading")],
        fig_alt="A synthetic equity curve with and without a size-reduction filter during drawdown",
        fig_note="Illustration from the equity-curve lesson (synthetic trades)", fig_label="Equity Curve Management"),
    bn=dict(
        title="Trading Discipline — চাপের মধ্যেও টিকে থাকা নিয়ম, রুটিন ও সীমা",
        description="ট্রেডিংয়ে শৃঙ্খলার ব্যবহারিক গাইড: সেশনের আগে নিয়ম লিখুন, যা পারেন স্বয়ংক্রিয় করুন (স্থির সাইজ, Stop, লিমিট), দৈনিক রুটিন ও ড্রডাউন-ভিত্তিক সাইজ কমানো ব্যবহার করুন, সৎ রিভিউ করুন — ১% ঝুঁকির দিন ও ড্রডাউন নিয়মের উদাহরণসহ।",
        intro="শৃঙ্খলা মুহূর্তের ইচ্ছাশক্তি নয়; এটি **আগে শান্ত অবস্থায় নেওয়া সিদ্ধান্ত**, যা পরে অনুসরণ করা হয়। পরিকল্পনার যত বেশি আগে ঠিক করা থাকে, প্রাইস চলার সময় তত কম সিদ্ধান্ত নিতে হয়।",
        fix="মূল লেখায় সাইকোলজিকে \"ট্রেডিংয়ের ৮০%\" বলা হয়েছিল এবং নির্দিষ্ট অভ্যাস থেকে ফলের প্রতিশ্রুতি ছিল। এমন বিভাজন প্রতিষ্ঠিত নয় এবং অভ্যাস মানুষভেদে ভিন্ন কাজ করে। এই সংস্করণ এমন নিয়মে জোর দেয় যা লেখা ও যাচাই করা যায়।",
        sections=[
            ("সেশনের আগে সিদ্ধান্ত নিন", """
| আগে ঠিক করুন              | উদাহরণ নিয়ম                                                  |
| ------------------------------ | ------------------------------------------------------------- |
| কোন সেটআপ ট্রেড করবেন         | এন্ট্রি, Stop ও টার্গেটসহ লেখা দুটি নামকরা সেটআপ         |
| কখন ট্রেড করবেন                 | London খোলা থেকে সন্ধ্যা ৭:০০ BD; বড় রিলিজের আশেপাশে নয়   |
| কত ঝুঁকি নেবেন              | প্রতি ট্রেডে ১%, Stop থেকে সাইজ                              |
| কখন থামবেন                   | দৈনিক লস লিমিট ২%, ট্রেড ক্যাপ ৩                              |
| স্ট্রিকের পর কী করবেন     | নিচের ড্রডাউন নিয়ম দেখুন                                   |"""),
            ("সিদ্ধান্ত কমান", """
| এর বদলে…                         | এটি করুন                                                       |
| ----------------------------------- | ------------------------------------------------------------- |
| মুহূর্তে Stop ঠিক করা     | এন্ট্রির সাথে একসাথে Stop ও টার্গেট অর্ডার দিন      |
| অনুভব দিয়ে সাইজ                | পজিশন-সাইজ ক্যালকুলেটর ব্যবহার করুন ([Position Sizing](/bn/blog/risk-management-position-sizing-masterclass) দেখুন) |
| প্রতিটি টিক দেখা                 | পরিকল্পিত লেভেলে অ্যালার্ট দিয়ে সরে যান               |
| নিয়ম মনে রাখা               | লিখিত [চেকলিস্ট](/bn/blog/trade-execution-checklist) খোলা রাখুন |"""),
            ("ড্রডাউন নিয়ম", """
খারাপ সময়ের জন্যও শৃঙ্খলার পরিকল্পনা লাগে। একটি বিকল্প: **ড্রডাউনের পর ঝুঁকি কমান** আর রিকভারির পর ফিরিয়ে আনুন।

| ইকুইটি শীর্ষ থেকে ড্রডাউন | প্রতি ট্রেডে ঝুঁকি |
| ------------------------- | -------------- |
| ০ – ৫%                    | ১.০%           |
| ৫ – ৮%                    | ০.৫%           |
| ৮% এর বেশি                    | থামুন ও পরিকল্পনা রিভিউ করুন |

হারার সময় ছোট সাইজ ক্ষতি ধীর করে, কিন্তু রিকভারিও ধীর করে, আর সিমুলেশনে কিছু ক্রমে সাহায্য করে ও কিছুতে ক্ষতি করে ([Equity Curve Management](/bn/quantitative/equity-curve-management) দেখুন)। খারাপ সপ্তাহে ইম্প্রোভাইজ না করে আগে ঠিক করে পরীক্ষা করুন।"""),
        ],
        example="""
অ্যাকাউন্ট ১০,০০০। নিয়ম: ১% ঝুঁকি, দৈনিক লস লিমিট ২%, ৫% এর বেশি ড্রডাউনে ঝুঁকি অর্ধেক। সোমবার: EUR/USD **1.0850** এ Buy, Stop **1.0830**, টার্গেট **1.0890** (**১ : ২.০**), ০.৫ লট: −১R (−১০০)। দ্বিতীয় সেটআপও −১R। দিন −২%: লেখা নিয়মে থামুন। শুক্রবারে অ্যাকাউন্ট ৯,৪৫০, ১০,০০০ থেকে ৫.৫% ড্রডাউন, তাই পরের সপ্তাহে ঝুঁকি ০.৫% = ৪৭ প্রতি ট্রেডে; ২০ পিপ Stop এ সাইজ ৪৭ ÷ (২০ × ১০) = **০.২৪ লট**। এর কোনোটিই উত্তেজনার মুহূর্তে নেওয়া সিদ্ধান্ত নয়।""",
        mistakes=[["নিয়ম শুধু মাথায় রাখা", "লিখে রাখুন"], ["হারের সপ্তাহে নিয়ম বদলানো", "শুধু রিভিউতে বদলান"], ["দিনে লসের সীমা না রাখা", "সেশনের আগে ঠিক করুন"], ["শৃঙ্খলায় পারফেকশনিজম", "বেশিরভাগ সময় পরিকল্পনা মানার লক্ষ্য রাখুন ও মাপুন"]],
        practice=["এক পাতায় সংখ্যাসহ নিয়ম লিখুন।", "প্ল্যাটফর্মের নোটে দৈনিক লস লিমিট ও ট্রেড ক্যাপ রাখুন।", "২০ ট্রেডে পরিকল্পনা মানা ট্র্যাক করুন।"],
        summary=[["শৃঙ্খলা", "আগে নেওয়া সিদ্ধান্ত, পরে অনুসরণ"], ["সিদ্ধান্ত কমান", "অর্ডার, ক্যালকুলেটর, অ্যালার্ট, চেকলিস্ট"], ["ড্রডাউন নিয়ম", "ড্রডাউনে সাইজ কমানো, আগে ঠিক করা"], ["রিভিউ", "মানা মাপুন, শুধু রিভিউতে নিয়ম বদলান"]],
        related=[("/quantitative/equity-curve-management", "Equity Curve Management"), ("/blog/trade-execution-checklist", "Trade Execution Checklist"), ("/blog/trading-psychology-emotions", "Trading Psychology: Emotions"), ("/blog/avoiding-overtrading", "Avoiding Overtrading")],
        fig_alt="ড্রডাউনের সময় সাইজ-কমানো ফিল্টারসহ ও ছাড়া একটি সিন্থেটিক ইকুইটি কার্ভ",
        fig_note="Equity-curve লেসন থেকে উদাহরণ (সিন্থেটিক ট্রেড)", fig_label="Equity Curve Management"),
)
