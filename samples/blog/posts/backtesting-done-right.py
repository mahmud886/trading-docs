SPEC = dict(
    fm=dict(date="2026-05-09", category="Strategy Development", tags=["backtesting", "validation", "strategy", "statistics"], reading=8, featured=True),
    fig=dict(img="/images/quantitative/backtesting-methodology/backtest-overfitting-dark.webp", video="/videos/quantitative/bt-explainer-dark.mp4", lesson="/quantitative/backtesting-methodology"),
    en=dict(
        title="Backtesting Done Right: Test Your Strategy Without Fooling Yourself",
        description="A backtest shows what rules would have done, not that they have an edge. The five biggest mistakes (overfitting, look-ahead, survivorship, ignored costs, short samples), a four-step protocol with out-of-sample and forward testing, and a demonstration where the best of 180 random rules looks great by luck.",
        intro="A backtest applies fixed rules to past data. It can be a useful filter for bad ideas, but it is also very easy to **tune until it looks good**, and a good-looking backtest is not evidence of an edge. This guide covers the mistakes to avoid and a protocol that shrinks, though never removes, the problem.",
        fix="The original gave fixed thresholds as if they were standards (a win rate above 70% \"extremely rare\", drawdowns of 15–30% \"realistic\", a win rate of 50–65% \"realistic\"). What is realistic depends on the strategy and market, so those numbers are removed. The rule of thumb that survives: **the more impressive the result, the harder you should look for the mistake**.",
        sections=[
            ("The Five Biggest Mistakes", """
| Mistake                      | What goes wrong                                                                       | Defence                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Overfitting**              | Tuning rules and parameters to the exact past data until they fit its noise            | Few parameters; out-of-sample test; count every try      |
| **Look-ahead bias**          | Using information not known at decision time (today's close to decide today's entry)   | Decide on bar *t*, trade on bar *t + 1*                  |
| **Survivorship bias**        | Testing only instruments that still exist                                             | Use data that includes delisted or failed instruments    |
| **Ignoring costs**           | Spread, commission, slippage, financing left out                                      | Charge realistic costs on every trade                    |
| **Too short a sample**       | A few dozen trades in one market state                                                | Many trades, several regimes, report the uncertainty     |

The overfitting problem is easy to underestimate. In the [Backtesting Methodology](/en/quantitative/backtesting-methodology) lesson, 180 moving-average rules were tested on pure random-walk prices (no edge by construction). The best one earned +50% on the data it was chosen from and +6% on the next 500 bars; the average rule made +5% then −3%. The best rule was simply the best of many draws."""),
            ("A Four-Step Protocol", """
| Step                          | What to do                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| 1. **Write the rules first**  | Entry, exit, stop, size and the number of parameters, before looking at any results    |
| 2. **Build in-sample**        | Develop on one part of the data, and keep a log of every variant you try               |
| 3. **Validate out-of-sample** | Run the chosen rules once on data they were never fitted to (see [Walk-Forward](/en/quantitative/walk-forward)) |
| 4. **Forward test**           | Trade small, record every trade, compare with the backtest's expected behaviour        |

A fifth habit: report the **uncertainty**. With a small number of trades, an expectancy of +0.30R can have an error bar that includes zero (see [Expectancy Formula](/en/quantitative/expectancy-formula))."""),
            ("Red Flags and Green Flags", """
| Red flag                                          | Why                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| Smooth equity curve with very small drawdowns     | Often overfitting or look-ahead; real strategies have rough patches |
| Results change greatly with tiny parameter changes | The edge is fitted to noise                                       |
| Works only in one market or one period            | It may be a regime, not a rule                                     |
| No costs in the test                              | Net results are lower, sometimes negative                          |

| Green flag                                        | Why                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| Rules are simple and have a reason                | Fewer parameters to overfit                                        |
| Neighbouring parameters give similar results      | The edge doesn't depend on one setting                             |
| Out-of-sample results are in the same range       | The fit was not just noise                                         |
| Results hold after costs                          | Edge is bigger than friction                                       |"""),
        ],
        example="""
A backtest of 150 trades shows an expectancy of **+0.30R** before costs. Costs are 0.10R per trade, so after costs it is **+0.20R**. You tried 30 variants to get there, so +0.30R is the *best of 30*, not an average, and deserves a discount. A plan to test it forward: buy EUR/USD at **1.0850**, stop **1.0830**, target **1.0890** (risk 20 pips, reward 40, **1 : 2.0** planned) at small size for 100 more trades. If live expectancy is within the backtest's uncertainty you continue; if it is near zero you stop.""",
        mistakes=[["Reporting only the best parameter set", "Report how many were tried and the spread of results"], ["Re-using the same out-of-sample data after tuning on it", "Once you tune on it, it is in-sample"], ["Trusting a smooth equity curve", "Check sample size, drawdown and the number of trials"], ["Skipping the forward test", "Trade small before trusting any backtest"]],
        practice=["List every parameter you changed to get your best backtest result.", "Hold back the last 30% of the data and run the final rules on it once.", "Subtract realistic costs from every trade and recompute the expectancy."],
        summary=[["Backtest", "Shows what rules would have done, not that they have an edge"], ["Biases", "Overfitting, look-ahead, survivorship, costs, short samples"], ["Protocol", "Rules first, in-sample, out-of-sample, forward test"], ["Rule of thumb", "The better the result looks, the harder to look for the mistake"]],
        related=[("/quantitative/backtesting-methodology", "Statistical Backtesting Methodology"), ("/quantitative/walk-forward", "Walk-Forward Optimization"), ("/quantitative/expectancy-formula", "Expectancy Formula"), ("/blog/trading-journal-template", "Trading Journal Template")],
        fig_alt="The best in-sample moving-average rule out of 180 on random-walk prices: +50% over the first 500 days and +6% over the next 500, with all 180 rules' in-sample and out-of-sample results",
        fig_note="Synthetic random-walk prices with no edge by construction; the best in-sample rule was selected because it was the best of many", fig_label="Statistical Backtesting Methodology"),
    bn=dict(
        title="Backtesting Done Right: নিজেকে ধোঁকা না দিয়ে স্ট্র্যাটেজি পরীক্ষা",
        description="Backtest দেখায় নিয়ম কী করত, Edge আছে তা নয়। পাঁচ বড় ভুল (Overfitting, Look-ahead, Survivorship, উপেক্ষিত খরচ, ছোট নমুনা), Out-of-sample ও ফরওয়ার্ড টেস্টসহ চার-ধাপের প্রটোকল, আর ১৮০টি এলোমেলো নিয়মের সেরাটি ভাগ্যে ভালো দেখানোর প্রদর্শন।",
        intro="Backtest অতীত ডেটায় নির্দিষ্ট নিয়ম প্রয়োগ করে। খারাপ ধারণা ছাঁটাইয়ের জন্য এটি কাজের, কিন্তু ভালো দেখানো পর্যন্ত **টিউন করা** খুব সহজ, আর ভালো-দেখানো Backtest Edge এর প্রমাণ নয়। এই গাইডে এড়ানোর ভুল ও এমন একটি প্রটোকল আছে যা সমস্যা কমায়, কখনো পুরো সরায় না।",
        fix="মূল লেখায় স্থির থ্রেশহোল্ড মান হিসেবে দেওয়া হয়েছিল (৭০% এর উপরে জয়ের হার \"অত্যন্ত বিরল\", ১৫–৩০% Drawdown \"বাস্তবসম্মত\", ৫০–৬৫% জয়ের হার \"বাস্তবসম্মত\")। বাস্তবসম্মত কী তা স্ট্র্যাটেজি ও মার্কেটের ওপর নির্ভর করে, তাই সংখ্যাগুলো সরানো হয়েছে। যে নিয়ম টেকে: **ফল যত চমৎকার, ভুল খুঁজতে তত কঠোর হোন**।",
        sections=[
            ("পাঁচ বড় ভুল", """
| ভুল                      | কী ভুল হয়                                                                       | প্রতিরক্ষা                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Overfitting**              | নিয়ম ও প্যারামিটার অতীত ডেটার নয়েজ পর্যন্ত মেলানো            | কম প্যারামিটার; Out-of-sample টেস্ট; প্রতিটি চেষ্টা গোনা      |
| **Look-ahead Bias**          | সিদ্ধান্তের সময় অজানা তথ্য ব্যবহার (আজকের এন্ট্রির সিদ্ধান্তে আজকের Close)   | বার *t* এ সিদ্ধান্ত, বার *t + ১* এ ট্রেড                  |
| **Survivorship Bias**        | শুধু এখনো টিকে থাকা ইন্সট্রুমেন্ট পরীক্ষা                                             | ডিলিস্টেড বা ব্যর্থ ইন্সট্রুমেন্টসহ ডেটা ব্যবহার    |
| **খরচ উপেক্ষা**           | স্প্রেড, কমিশন, স্লিপেজ, ফাইন্যান্সিং বাদ                                      | প্রতি ট্রেডে বাস্তবসম্মত খরচ ধরুন                         |
| **খুব ছোট নমুনা**       | এক মার্কেট অবস্থায় কয়েক ডজন ট্রেড                                                | অনেক ট্রেড, কয়েকটি রেজিম, অনিশ্চয়তা জানানো     |

Overfitting এর সমস্যা কম ধরা সহজ। [Backtesting Methodology](/bn/quantitative/backtesting-methodology) লেসনে ১৮০টি Moving-average নিয়ম খাঁটি Random-walk প্রাইসে (গঠনগতভাবে Edge নেই) পরীক্ষা হয়েছে। সেরাটি যে ডেটা থেকে বাছা হয়েছিল তাতে +৫০% আর পরের ৫০০ বারে +৬% করেছে; গড় নিয়ম করেছে +৫% ও −৩%। সেরা নিয়ম ছিল অনেক চেষ্টার সেরা চেষ্টা মাত্র।"""),
            ("চার-ধাপের প্রটোকল", """
| ধাপ                          | কী করবেন                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| ১. **আগে নিয়ম লিখুন**  | কোনো ফল দেখার আগে এন্ট্রি, এক্সিট, Stop, সাইজ ও প্যারামিটারের সংখ্যা    |
| ২. **In-sample এ বানান**        | ডেটার একটি অংশে গড়ুন, আর চেষ্টা করা প্রতিটি রূপের লগ রাখুন               |
| ৩. **Out-of-sample এ যাচাই** | বেছে নেওয়া নিয়ম যে ডেটায় ফিট করা হয়নি তাতে একবার চালান ([Walk-Forward](/bn/quantitative/walk-forward) দেখুন) |
| ৪. **ফরওয়ার্ড টেস্ট**           | ছোট সাইজে ট্রেড, প্রতিটি ট্রেড লিখুন, Backtest এর প্রত্যাশিত আচরণের সাথে তুলনা        |

পঞ্চম অভ্যাস: **অনিশ্চয়তা** জানান। অল্প ট্রেডে +০.৩০R Expectancy এর ত্রুটি-সীমায় শূন্য থাকতে পারে ([Expectancy Formula](/bn/quantitative/expectancy-formula) দেখুন)।"""),
            ("লাল ও সবুজ পতাকা", """
| লাল পতাকা                                          | কেন                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| খুব ছোট Drawdown সহ মসৃণ Equity কার্ভ     | প্রায়ই Overfitting বা Look-ahead; আসল স্ট্র্যাটেজিতে খারাপ সময় থাকে |
| ছোট প্যারামিটার বদলে ফল ব্যাপক বদলায় | Edge নয়েজে ফিট করা                                       |
| শুধু এক মার্কেট বা এক সময়ে কাজ করে            | এটি রেজিম হতে পারে, নিয়ম নয়                                     |
| টেস্টে খরচ নেই                              | নেট ফল কম, কখনো ঋণাত্মক                          |

| সবুজ পতাকা                                        | কেন                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| নিয়ম সরল ও যুক্তিযুক্ত                | ফিট করার প্যারামিটার কম                                        |
| পাশের প্যারামিটারে একই রকম ফল      | Edge একটি সেটিংয়ের ওপর নির্ভর করে না                             |
| Out-of-sample ফল একই পরিসরে       | ফিট শুধু নয়েজ ছিল না                                          |
| খরচের পরও ফল টেকে                         | Edge ঘর্ষণের চেয়ে বড়                                       |"""),
        ],
        example="""
১৫০ ট্রেডের একটি Backtest এ খরচের আগে Expectancy **+০.৩০R**। প্রতি ট্রেডে খরচ ০.১০R, তাই খরচের পর **+০.২০R**। সেখানে পৌঁছাতে ৩০টি রূপ চেষ্টা করেছেন, তাই +০.৩০R হলো *৩০টির সেরা*, গড় নয়, আর ছাড় প্রাপ্য। ফরওয়ার্ড পরীক্ষার পরিকল্পনা: **1.0850** এ EUR/USD Buy, Stop **1.0830**, টার্গেট **1.0890** (রিস্ক ২০ পিপ, রিওয়ার্ড ৪০, পরিকল্পিত **১ : ২.০**), আরও ১০০ ট্রেড ছোট সাইজে। লাইভ Expectancy Backtest এর অনিশ্চয়তার মধ্যে থাকলে চালান; শূন্যের কাছে হলে থামুন।""",
        mistakes=[["শুধু সেরা প্যারামিটার সেট জানানো", "কতটি চেষ্টা হয়েছে ও ফলের বিস্তার জানান"], ["টিউন করার পর একই Out-of-sample ডেটা আবার ব্যবহার", "একবার তাতে টিউন করলে সেটি In-sample"], ["মসৃণ Equity কার্ভে ভরসা", "নমুনার আকার, Drawdown ও চেষ্টার সংখ্যা দেখুন"], ["ফরওয়ার্ড টেস্ট বাদ দেওয়া", "কোনো Backtest এ ভরসার আগে ছোট সাইজে ট্রেড করুন"]],
        practice=["আপনার সেরা Backtest ফল পেতে যে প্রতিটি প্যারামিটার বদলেছেন তা তালিকা করুন।", "ডেটার শেষ ৩০% সরিয়ে রেখে চূড়ান্ত নিয়ম তাতে একবার চালান।", "প্রতি ট্রেড থেকে বাস্তবসম্মত খরচ বাদ দিয়ে Expectancy আবার হিসাব করুন।"],
        summary=[["Backtest", "নিয়ম কী করত তা দেখায়, Edge আছে তা নয়"], ["Bias", "Overfitting, Look-ahead, Survivorship, খরচ, ছোট নমুনা"], ["প্রটোকল", "আগে নিয়ম, In-sample, Out-of-sample, ফরওয়ার্ড টেস্ট"], ["নিয়ম", "ফল যত ভালো দেখায়, ভুল খুঁজতে তত কঠোর হোন"]],
        related=[("/quantitative/backtesting-methodology", "Statistical Backtesting Methodology"), ("/quantitative/walk-forward", "Walk-Forward Optimization"), ("/quantitative/expectancy-formula", "Expectancy Formula"), ("/blog/trading-journal-template", "Trading Journal Template")],
        fig_alt="Random-walk প্রাইসে ১৮০টির মধ্যে In-sample সেরা Moving-average নিয়ম: প্রথম ৫০০ দিনে +৫০%, পরের ৫০০ দিনে +৬%, সব ১৮০ নিয়মের In-sample ও Out-of-sample ফলসহ",
        fig_note="গঠনগতভাবে Edge-হীন সিন্থেটিক Random-walk প্রাইস; In-sample সেরা নিয়ম বাছা হয়েছে কারণ এটি অনেকের মধ্যে সেরা ছিল", fig_label="Statistical Backtesting Methodology"),
)
