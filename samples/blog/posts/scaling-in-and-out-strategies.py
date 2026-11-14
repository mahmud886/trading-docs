SPEC = dict(
    fm=dict(date="2026-05-13", category="Academy", tags=["scaling", "position-sizing", "risk-management", "execution", "pyramid"], reading=8, featured=True),
    fig=dict(img="/images/price-action/trade-management/trade-management-three-ways-dark.webp", video="/videos/price-action/trade-management-explainer-dark.mp4", lesson="/price-action/trade-management"),
    en=dict(
        title="Scaling In and Out of Trades — What Partials and Pyramiding Do",
        description="Scaling out takes profit in parts, scaling in adds to a winning position. This guide shows with one price path that no scaling style wins on every path, how to scale in without raising total risk, why adding to a loser (averaging down) is a different and riskier act, and a worked half-at-1R example.",
        intro="**Scaling out** means closing part of a position at set levels; **scaling in** (pyramiding) means adding to a position that is already working. Both change the shape of your results: they trade upside for protection (scaling out) or add exposure to a winner (scaling in). Neither is free.",
        fix="The original described scaling as a way to guarantee profit and called a break-even stop \"risk-free\". A stop at break-even can still lose to slippage or a gap, and a partial locks in only what was closed. Scaling changes the **distribution** of outcomes; it does not remove risk.",
        sections=[
            ("Scaling Out: One Path, Three Results", """
Long **1.0850**, stop **1.0830** (1R = 20 pips), targets at 1R **1.0870**, 2R **1.0890**, 3R **1.0910**. Price climbs to about 1.8R, pulls back to 1.0849, then runs to 3R.

| Style                            | What happens                                                         | Result    |
| -------------------------------- | -------------------------------------------------------------------- | --------- |
| **A · Hold to 3R**               | Rides the pullback and reaches the target                            | **+3R**   |
| **B · Break-even stop at 1R**    | Stop moved to 1.0850; the pullback hits it                           | **0R**    |
| **C · Partials 50 / 30 / 20**    | 50% closed at 1R (+0.5R), then the rest stopped at entry             | **+0.5R** |

On a path that instead reverses from 1.8R to the original stop, the order flips: A loses 1R, B scratches at 0R, C keeps +0.5R. **No style wins on every path**: holding keeps the upside and the full risk, partials smooth the result and cap the upside. See [Trade Management](/en/price-action/trade-management)."""),
            ("Scaling In Without Raising Total Risk", """
| Step | Rule                                                                                       |
| ---- | ------------------------------------------------------------------------------------------ |
| 1    | Add only to a position that is **already profitable**                                       |
| 2    | Add a **smaller** size than the original                                                    |
| 3    | Move the stop for the whole position so that total risk does not exceed the original risk  |
| 4    | Stop adding when price stalls or structure weakens                                          |

Example: 1.0 lot at **1.0850**, stop **1.0830**. At **1.0880** add 0.5 lot and move the stop for both to **1.0860**. If stopped: the first lot gains 10 pips, the added half loses 20 pips × 0.5 = 10 pip-lots: net about **zero**. Total risk after the add is no more than before."""),
            ("Scaling In Is Not Averaging Down", """
| Act                              | What it does                                                | Risk                                      |
| -------------------------------- | ----------------------------------------------------------- | ----------------------------------------- |
| Adding to a **winner**           | Raises exposure while the idea is working                   | A pullback hits a larger position         |
| Adding to a **loser**            | Raises exposure while the idea is failing                   | A small loss becomes a large one          |

Adding to a loser breaks the plan you made when you chose the stop. Treat it as a new trade that needs its own setup and its own stop."""),
        ],
        example="""
Long EUR/USD **1.0850**, stop **1.0830** (20 pips). Plan: close half at **1.0870** (+1R) and move the stop to **1.0850**; the rest targets **1.0910** (3R). If both parts hit: 0.5 × 1R + 0.5 × 3R = **+2R**. If the second half returns to break-even: 0.5 × 1R = **+0.5R**. If price never reaches 1.0870: **−1R**. The plan's reward-to-risk on the whole position, if everything works, is about **1 : 2.0**.""",
        mistakes=[["Believing a break-even stop is risk-free", "It can still lose to slippage or a gap"], ["Adding to a losing trade", "Treat it as a new trade with its own stop"], ["Adding the same size at higher prices", "Add less each time and keep total risk fixed"], ["Choosing the style after seeing the path", "Fix the rules before entering"]],
        practice=["Replay five past winners with and without a 1R partial and note the R of each.", "Do the same on five past losers.", "Decide the single scaling rule you will use and write it down."],
        summary=[["Scaling out", "Takes profit in parts: smooths results, caps the upside"], ["Scaling in", "Adds to a winner with a smaller size and a stop that keeps total risk fixed"], ["Averaging down", "Adding to a loser: different and riskier"], ["Evidence", "No style wins on every path"]],
        related=[("/price-action/trade-management", "Trade Management"), ("/price-action/exit-models", "Exit Models"), ("/blog/risk-management-essentials", "Risk Management Essentials"), ("/blog/position-sizing-101", "Position Sizing 101")],
        fig_alt="One synthetic EUR/USD path managed three ways: holding to 3R gives +3R, a break-even stop gives 0R, and partials give +0.5R",
        fig_note="Synthetic candles; the three results are simulated on this one path, not a track record", fig_label="Trade Management"),
    bn=dict(
        title="ট্রেডে Scale In ও Scale Out — Partial ও Pyramiding কী করে",
        description="Scale Out মানে মুনাফা ভাগে নেওয়া, Scale In মানে জেতা পজিশনে যোগ করা। এই গাইডে একটি প্রাইস পথ দিয়ে দেখানো হয়েছে কোনো স্কেলিং স্টাইল সব পথে জেতে না, মোট ঝুঁকি না বাড়িয়ে কীভাবে Scale In করবেন, কেন হারা পজিশনে যোগ করা (Averaging Down) আলাদা ও ঝুঁকিপূর্ণ, আর ১R এ অর্ধেক বের করার উদাহরণ।",
        intro="**Scale Out** মানে নির্দিষ্ট লেভেলে পজিশনের অংশ বন্ধ করা; **Scale In** (Pyramiding) মানে ইতিমধ্যে কাজ করা পজিশনে যোগ করা। দুটিই আপনার ফলের আকার বদলায়: এরা ঊর্ধ্বমুখী সম্ভাবনার বদলে সুরক্ষা দেয় (Scale Out) বা জেতা পজিশনে এক্সপোজার বাড়ায় (Scale In)। কোনোটিই বিনামূল্যে নয়।",
        fix="মূল লেখায় স্কেলিংকে মুনাফা নিশ্চিত করার উপায় বলা হয়েছিল এবং Break-even Stop কে \"ঝুঁকিমুক্ত\" বলা হয়েছিল। Break-even এর Stop স্লিপেজ বা গ্যাপে হারতে পারে, আর Partial শুধু যা বন্ধ হয়েছে তাই লক করে। স্কেলিং ফলের **বণ্টন** বদলায়; ঝুঁকি সরায় না।",
        sections=[
            ("Scale Out: এক পথ, তিন ফল", """
Long **1.0850**, Stop **1.0830** (১R = ২০ পিপ), টার্গেট ১R **1.0870**, ২R **1.0890**, ৩R **1.0910**। প্রাইস প্রায় ১.৮R পর্যন্ত ওঠে, 1.0849 এ পুলব্যাক করে, তারপর ৩R এ ছোটে।

| স্টাইল                            | কী ঘটে                                                         | ফল    |
| -------------------------------- | -------------------------------------------------------------------- | --------- |
| **A · ৩R পর্যন্ত ধরে রাখা**               | পুলব্যাক পেরিয়ে টার্গেটে পৌঁছায়                            | **+৩R**   |
| **B · ১R এ Break-even Stop**    | Stop 1.0850 এ সরে; পুলব্যাক এটি ছোঁয়                           | **০R**    |
| **C · Partial ৫০ / ৩০ / ২০**    | ১R এ ৫০% বন্ধ (+০.৫R), বাকিটা এন্ট্রিতে Stop             | **+০.৫R** |

যে পথে প্রাইস ১.৮R থেকে মূল Stop এ উল্টে যায়, সেখানে ক্রম উল্টে: A হারে ১R, B ০R এ বেরোয়, C রাখে +০.৫R। **কোনো স্টাইল সব পথে জেতে না**: ধরে রাখলে ঊর্ধ্বমুখী সম্ভাবনা ও পূর্ণ ঝুঁকি থাকে, Partial ফল মসৃণ করে ও ঊর্ধ্বসীমা বেঁধে দেয়। [Trade Management](/bn/price-action/trade-management) দেখুন।"""),
            ("মোট ঝুঁকি না বাড়িয়ে Scale In", """
| ধাপ | নিয়ম                                                                                       |
| ---- | ------------------------------------------------------------------------------------------ |
| ১    | শুধু **ইতিমধ্যে লাভে থাকা** পজিশনে যোগ করুন                                       |
| ২    | মূলটির চেয়ে **ছোট** সাইজ যোগ করুন                                                    |
| ৩    | পুরো পজিশনের Stop সরান যাতে মোট ঝুঁকি মূল ঝুঁকির বেশি না হয়  |
| ৪    | প্রাইস থামলে বা স্ট্রাকচার দুর্বল হলে যোগ বন্ধ করুন                                          |

উদাহরণ: **1.0850** এ ১.০ লট, Stop **1.0830**। **1.0880** এ ০.৫ লট যোগ করে দুটির Stop **1.0860** এ সরান। Stop লাগলে: প্রথম লট ১০ পিপ লাভ করে, যোগ করা অর্ধেক ২০ পিপ × ০.৫ = ১০ পিপ-লট হারায়: নেট প্রায় **শূন্য**। যোগের পর মোট ঝুঁকি আগের চেয়ে বেশি নয়।"""),
            ("Scale In মানে Averaging Down নয়", """
| কাজ                              | কী করে                                                | ঝুঁকি                                      |
| -------------------------------- | ----------------------------------------------------------- | ----------------------------------------- |
| **জেতা** পজিশনে যোগ           | ধারণা কাজ করার সময় এক্সপোজার বাড়ায়                   | পুলব্যাক বড় পজিশনে লাগে         |
| **হারা** পজিশনে যোগ            | ধারণা ব্যর্থ হওয়ার সময় এক্সপোজার বাড়ায়                   | ছোট লোকসান বড় হয়          |

হারা পজিশনে যোগ করা Stop বাছার সময়ের পরিকল্পনা ভাঙে। একে নতুন ট্রেড ধরুন যার নিজস্ব সেটআপ ও নিজস্ব Stop লাগে।"""),
        ],
        example="""
Long EUR/USD **1.0850**, Stop **1.0830** (২০ পিপ)। পরিকল্পনা: **1.0870** এ (+১R) অর্ধেক বন্ধ করে Stop **1.0850** এ সরান; বাকিটা **1.0910** (৩R) টার্গেট। দুই অংশই লাগলে: ০.৫ × ১R + ০.৫ × ৩R = **+২R**। দ্বিতীয় অর্ধেক Break-even এ ফিরলে: ০.৫ × ১R = **+০.৫R**। প্রাইস 1.0870 এ না পৌঁছালে: **−১R**। সবকিছু কাজ করলে পুরো পজিশনের পরিকল্পিত রিওয়ার্ড-টু-রিস্ক প্রায় **১ : ২.০**।""",
        mistakes=[["Break-even Stop কে ঝুঁকিমুক্ত ভাবা", "স্লিপেজ বা গ্যাপে এটিও হারতে পারে"], ["হারা ট্রেডে যোগ করা", "নিজস্ব Stop সহ নতুন ট্রেড ধরুন"], ["উঁচু দামে একই সাইজ যোগ", "প্রতিবার কম যোগ করুন ও মোট ঝুঁকি স্থির রাখুন"], ["পথ দেখে স্টাইল বাছা", "এন্ট্রির আগে নিয়ম ঠিক করুন"]],
        practice=["পাঁচটি পুরোনো জেতা ট্রেড ১R Partial সহ ও ছাড়া রিপ্লে করে প্রতিটির R লিখুন।", "পাঁচটি হারা ট্রেডেও একই করুন।", "যে একটি স্কেলিং নিয়ম ব্যবহার করবেন তা লিখে রাখুন।"],
        summary=[["Scale Out", "ভাগে মুনাফা: ফল মসৃণ করে, ঊর্ধ্বসীমা বাঁধে"], ["Scale In", "জেতা পজিশনে ছোট সাইজে, মোট ঝুঁকি স্থির রাখা Stop সহ যোগ"], ["Averaging Down", "হারা পজিশনে যোগ: আলাদা ও ঝুঁকিপূর্ণ"], ["প্রমাণ", "কোনো স্টাইল সব পথে জেতে না"]],
        related=[("/price-action/trade-management", "Trade Management"), ("/price-action/exit-models", "Exit Models"), ("/blog/risk-management-essentials", "Risk Management Essentials"), ("/blog/position-sizing-101", "Position Sizing 101")],
        fig_alt="একটি সিন্থেটিক EUR/USD পথ তিনভাবে পরিচালিত: ৩R পর্যন্ত ধরে রাখলে +৩R, Break-even Stop এ ০R, আর Partial এ +০.৫R",
        fig_note="সিন্থেটিক ক্যান্ডেল; তিন ফল এই একটি পথে সিমুলেটেড, ট্র্যাক রেকর্ড নয়", fig_label="Trade Management"),
)
