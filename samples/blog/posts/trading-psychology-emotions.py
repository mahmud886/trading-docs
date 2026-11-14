SPEC = dict(
    fm=dict(date="2026-05-11", category="Psychology", tags=["psychology", "emotions", "discipline", "mindset"], reading=9, featured=True),
    fig=dict(img="/images/quantitative/monte-carlo/monte-carlo-drawdown-dark.webp", video="/videos/quantitative/mc-explainer-dark.mp4", lesson="/quantitative/monte-carlo"),
    en=dict(
        title="Trading Psychology — Fear, Greed, FOMO and Revenge Trading",
        description="How fear, greed, FOMO and revenge trading show up in a trading plan and what rules limit the damage: pre-set risk, a daily loss limit, a cooling-off routine and a loss-streak table showing that long losing runs are normal even for a profitable system.",
        intro="Most traders know what to do and still don't do it. Emotions matter because **trading puts money and uncertainty together**. You cannot remove them, but you can write rules that limit what they are able to do.",
        fix="The original claimed fixed percentages of traders fail from psychology and promised that specific techniques cure emotions. No such figures are established. This version describes common patterns and practical rules; none of it is therapy or a guarantee.",
        sections=[
            ("Four Common Patterns", """
| Emotion          | What it looks like                                   | Rule that limits it                                       |
| ---------------- | ---------------------------------------------------- | --------------------------------------------------------- |
| **Fear**         | Skipping valid setups, closing winners early         | Fixed small risk per trade so one loss doesn't hurt       |
| **Greed**        | Oversizing, moving targets, holding past the plan    | Size from the stop; take the planned exit                 |
| **FOMO**         | Chasing a move that has already run                  | Trade only at planned levels (see [Timeframe Selection](/en/blog/timeframe-selection)) |
| **Revenge**      | Doubling size after a loss to win it back            | Daily loss limit and a mandatory break                    |"""),
            ("Losing Streaks Are Normal", """
With a win rate *p*, the chance of **n losses in a row** at a given moment is (1 − *p*)ⁿ, and over many trades a long streak becomes likely. For a 45% win rate, a run of 5 losses has probability 0.55⁵ ≈ 5.0% at any starting trade; over 200 trades the chance of seeing at least one such run is very high.

| Streak of losses | Probability at one start (win rate 45%) | Drawdown at 1% risk |
| ---------------- | ---------------------------------------- | ------------------- |
| 3                | 16.6%                                    | 3.0%                |
| 5                | 5.0%                                     | 4.9%                |
| 8                | 0.8%                                     | 7.7%                |
| 10               | 0.25%                                    | 9.6%                |

See [Monte Carlo](/en/quantitative/monte-carlo): the same system produces very different drawdowns depending on the order of trades. Knowing this in advance makes a streak a **planned event**, not a crisis."""),
            ("A Simple Protocol", """
| Trigger                            | Action                                                    |
| ---------------------------------- | --------------------------------------------------------- |
| Two losses in a row                | Pause for 30 minutes, re-read the plan                    |
| Daily loss limit reached (for example 2%) | Stop for the day, no exceptions                    |
| Feeling the urge to \"get it back\"  | Close the platform and write what you feel                |
| Weekly review                      | Compare plan trades against emotional ones                |

Log the emotion in your [trading journal](/en/blog/trading-journal-template) so patterns become visible. If stress affects your sleep, health or finances, talk to a professional; a trading rule is no substitute."""),
        ],
        example="""
Account 10,000, risk 1% = 100. Trade 1: buy EUR/USD **1.0850**, stop **1.0830**, target **1.0890** (**1 : 2.0**), size 100 ÷ (20 × 10) = **0.5 lot**: stopped out (−1R). Trade 2 stopped (−1R): the day is at −2%, which is the daily loss limit, so you stop. The urge to \"win it back\" appears; the rule says close the platform. Tomorrow the next planned setup again risks 1% (0.5 lot, not 1.0). A doubled third trade risking 2% could have turned a 2% day into a 4% one.""",
        mistakes=[["Doubling size after losses", "Keep size fixed by the stop"], ["No daily loss limit", "Set one before the session"], ["Hiding emotions", "Log them in the journal"], ["Judging by one result", "Judge by the plan and the sample"]],
        practice=["Write your own daily loss limit and cooling-off rule.", "Compute the streak table for your own win rate.", "For one week log the emotion before each entry."],
        summary=[["Emotions", "Cannot be removed, only limited by rules"], ["Streaks", "Long losing runs are normal and can be computed"], ["Protocol", "Pause, daily limit, journal"], ["Caution", "Seek professional help if stress is serious"]],
        related=[("/quantitative/monte-carlo", "Monte Carlo"), ("/forex-sessions/session-psychology", "Session Psychology"), ("/blog/avoiding-overtrading", "Avoiding Overtrading"), ("/blog/trading-psychology-discipline-complete", "Trading Discipline Guide")],
        fig_alt="Many simulated equity paths of the same strategy with their drawdown distribution on synthetic data",
        fig_note="Illustration from the Monte Carlo lesson (synthetic trades)", fig_label="Monte Carlo"),
    bn=dict(
        title="Trading Psychology — ভয়, লোভ, FOMO ও Revenge Trading",
        description="ভয়, লোভ, FOMO ও Revenge Trading ট্রেডিং পরিকল্পনায় কীভাবে দেখা দেয় আর কোন নিয়ম ক্ষতি সীমিত করে: আগে ঠিক করা ঝুঁকি, দৈনিক লস লিমিট, ঠান্ডা হওয়ার রুটিন, আর লস-স্ট্রিক টেবিল যা দেখায় লাভজনক সিস্টেমেও লম্বা হার স্বাভাবিক।",
        intro="বেশিরভাগ ট্রেডার কী করতে হবে জানেন, তবু করেন না। আবেগ গুরুত্বপূর্ণ কারণ **ট্রেডিংয়ে টাকা ও অনিশ্চয়তা একসাথে থাকে**। আবেগ সরানো যায় না, কিন্তু এমন নিয়ম লেখা যায় যা আবেগ কী করতে পারে তা সীমিত করে।",
        fix="মূল লেখায় ট্রেডারদের নির্দিষ্ট শতাংশ সাইকোলজির কারণে ব্যর্থ হয় বলা হয়েছিল এবং নির্দিষ্ট কৌশল আবেগ সারায় বলে প্রতিশ্রুতি ছিল। এমন কোনো সংখ্যা প্রতিষ্ঠিত নয়। এই সংস্করণ সাধারণ প্যাটার্ন ও ব্যবহারিক নিয়ম বর্ণনা করে; এর কিছুই থেরাপি বা নিশ্চয়তা নয়।",
        sections=[
            ("চারটি সাধারণ প্যাটার্ন", """
| আবেগ          | দেখতে কেমন                                   | যে নিয়ম সীমিত করে                                       |
| ---------------- | ---------------------------------------------------- | --------------------------------------------------------- |
| **ভয়**         | বৈধ সেটআপ বাদ দেওয়া, জেতা ট্রেড আগে বন্ধ করা         | প্রতি ট্রেডে স্থির ছোট ঝুঁকি যাতে একটি লস না লাগে       |
| **লোভ**        | বেশি সাইজ, টার্গেট সরানো, পরিকল্পনার পরেও ধরে রাখা    | Stop থেকে সাইজ; পরিকল্পিত এক্সিট নিন                 |
| **FOMO**         | যে মুভ আগেই চলে গেছে তার পিছনে ছোটা                  | শুধু পরিকল্পিত লেভেলে ট্রেড ([Timeframe Selection](/bn/blog/timeframe-selection) দেখুন) |
| **Revenge**      | হারের পর ফিরে পেতে সাইজ দ্বিগুণ করা            | দৈনিক লস লিমিট ও বাধ্যতামূলক বিরতি                    |"""),
            ("লম্বা হার স্বাভাবিক", """
জয়ের হার *p* হলে নির্দিষ্ট মুহূর্তে **পরপর n হারের** সম্ভাবনা (১ − *p*)ⁿ, আর অনেক ট্রেডে লম্বা স্ট্রিক প্রায় নিশ্চিত হয়ে ওঠে। ৪৫% জয়ের হারে ৫টি টানা হারের সম্ভাবনা ০.৫৫⁵ ≈ ৫.০% যেকোনো শুরুতে; ২০০ ট্রেডে অন্তত একবার এমন স্ট্রিক দেখার সম্ভাবনা খুব বেশি।

| টানা হার | এক শুরুতে সম্ভাবনা (জয়ের হার ৪৫%) | ১% ঝুঁকিতে ড্রডাউন |
| ---------------- | ---------------------------------------- | ------------------- |
| ৩                | ১৬.৬%                                    | ৩.০%                |
| ৫                | ৫.০%                                     | ৪.৯%                |
| ৮                | ০.৮%                                     | ৭.৭%                |
| ১০               | ০.২৫%                                    | ৯.৬%                |

[Monte Carlo](/bn/quantitative/monte-carlo) দেখুন: একই সিস্টেম ট্রেডের ক্রমের ওপর ভিত্তি করে খুব ভিন্ন ড্রডাউন দেয়। আগে থেকে এটি জানলে স্ট্রিক হয় **পরিকল্পিত ঘটনা**, সংকট নয়।"""),
            ("একটি সরল প্রোটোকল", """
| ট্রিগার                            | কী করবেন                                                    |
| ---------------------------------- | --------------------------------------------------------- |
| পরপর দুটি হার                | ৩০ মিনিট বিরতি, পরিকল্পনা আবার পড়ুন                    |
| দৈনিক লস লিমিটে পৌঁছানো (যেমন ২%) | সেদিন থামুন, ব্যতিক্রম নেই                    |
| \"ফিরিয়ে আনার\" তাগিদ  | প্ল্যাটফর্ম বন্ধ করে কী অনুভব করছেন লিখুন                |
| সাপ্তাহিক রিভিউ                      | পরিকল্পিত ও আবেগী ট্রেড তুলনা                |

আবেগ [ট্রেডিং জার্নালে](/bn/blog/trading-journal-template) লিখুন যাতে প্যাটার্ন দেখা যায়। স্ট্রেস ঘুম, স্বাস্থ্য বা আর্থিক অবস্থায় প্রভাব ফেললে পেশাদারের সাথে কথা বলুন; ট্রেডিং নিয়ম তার বিকল্প নয়।"""),
        ],
        example="""
অ্যাকাউন্ট ১০,০০০, ঝুঁকি ১% = ১০০। ট্রেড ১: EUR/USD **1.0850** এ Buy, Stop **1.0830**, টার্গেট **1.0890** (**১ : ২.০**), সাইজ ১০০ ÷ (২০ × ১০) = **০.৫ লট**: Stop Out (−১R)। ট্রেড ২ Stop Out (−১R): দিনের ফল −২%, অর্থাৎ দৈনিক লস লিমিট, তাই থামুন। \"ফিরিয়ে আনার\" তাগিদ আসে; নিয়ম বলে প্ল্যাটফর্ম বন্ধ করুন। আগামীকাল পরের পরিকল্পিত সেটআপে আবার ১% ঝুঁকি (০.৫ লট, ১.০ নয়)। ২% ঝুঁকির দ্বিগুণ তৃতীয় ট্রেড ২% এর দিনকে ৪% এ নিয়ে যেতে পারত।""",
        mistakes=[["হারের পর সাইজ দ্বিগুণ", "Stop অনুযায়ী সাইজ স্থির রাখুন"], ["দৈনিক লস লিমিট না রাখা", "সেশনের আগে ঠিক করুন"], ["আবেগ লুকানো", "জার্নালে লিখুন"], ["এক ফলে বিচার", "পরিকল্পনা ও নমুনা দিয়ে বিচার করুন"]],
        practice=["নিজের দৈনিক লস লিমিট ও ঠান্ডা হওয়ার নিয়ম লিখুন।", "নিজের জয়ের হারের জন্য স্ট্রিক টেবিল হিসাব করুন।", "এক সপ্তাহ প্রতিটি এন্ট্রির আগে আবেগ লগ করুন।"],
        summary=[["আবেগ", "সরানো যায় না, নিয়ম দিয়ে সীমিত করা যায়"], ["স্ট্রিক", "লম্বা হার স্বাভাবিক ও হিসাব করা যায়"], ["প্রোটোকল", "বিরতি, দৈনিক লিমিট, জার্নাল"], ["সতর্কতা", "স্ট্রেস গুরুতর হলে পেশাদারের সাহায্য নিন"]],
        related=[("/quantitative/monte-carlo", "Monte Carlo"), ("/forex-sessions/session-psychology", "Session Psychology"), ("/blog/avoiding-overtrading", "Avoiding Overtrading"), ("/blog/trading-psychology-discipline-complete", "Trading Discipline Guide")],
        fig_alt="একই স্ট্র্যাটেজির বহু সিমুলেটেড ইকুইটি পথ ও তাদের ড্রডাউন বন্টন, সিন্থেটিক ডেটায়",
        fig_note="Monte Carlo লেসন থেকে উদাহরণ (সিন্থেটিক ট্রেড)", fig_label="Monte Carlo"),
)
