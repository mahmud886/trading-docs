SPEC = dict(
    fm=dict(date="2026-05-13", category="Forex Sessions", tags=["sessions", "overlap", "london-new-york", "kill-zones", "timing"], reading=7, featured=True),
    fig=dict(img="/images/forex-sessions/overlaps/overlap-day-ranges-dark.webp", video="/videos/forex-sessions/overlaps-explainer-dark.mp4", lesson="/forex-sessions/overlaps"),
    en=dict(
        title="Session Overlap Strategies — Trading London and New York Together",
        description="The three forex session overlaps in Bangladesh time (Sydney–Tokyo 6:00 AM–12:00 PM, Tokyo–London 1:00–3:00 PM, London–New York 6:00–10:00 PM in summer), what each is usually like, a pullback-continuation strategy for the London–New York overlap, how to handle the 6:30 PM data release, and why overlaps are not a guarantee of movement.",
        intro="An **overlap** is a window when two major centres are open at the same time. More participants are active, spreads on major pairs are usually tight, and ranges usually grow. That makes overlaps a sensible place to look for trades, not a promise that price will move.",
        fix="The original claimed that a fixed share of the day's range happens in the overlap and listed the overlap hours incorrectly in places. The times below are converted from the session hours (US/UK summer), and the share-of-range claim is removed because it had no source. Add one hour in winter for the London–New York overlap.",
        sections=[
            ("The Three Overlaps in BD Time", """
| Overlap             | **BD (US/UK summer)**  | **BD (winter)**        | Typical character                            |
| ------------------- | ---------------------- | ---------------------- | -------------------------------------------- |
| **Sydney–Tokyo**    | 6:00 AM – 12:00 PM     | 6:00 AM – 11:00 AM     | Quiet; AUD, NZD and JPY pairs                |
| **Tokyo–London**    | 1:00 PM – 3:00 PM      | 2:00 PM – 3:00 PM      | London takes over; the Asian range is tested |
| **London–New York** | **6:00 PM – 10:00 PM** | **7:00 PM – 11:00 PM** | Usually the busiest hours; US data           |

In the [Overlaps](/en/forex-sessions/overlaps) lesson's synthetic day, average hourly ranges were about 7 pips in Asia, 13 in London, 15 in the overlap and 7 after London closes: the overlap is the most active block, but real days vary."""),
            ("A Pullback-Continuation Plan for the London–New York Overlap", """
| Step | Rule                                                                                                |
| ---- | --------------------------------------------------------------------------------------------------- |
| 1    | Note London's direction and the London high/low before 6:00 PM BD                                   |
| 2    | At 6:00 PM, decide: **continuation** (price holds London's move) or **reversal** (it takes London's extreme and returns) |
| 3    | For continuation, wait for a pullback that holds a level or a gap                                    |
| 4    | Enter on the reaction; stop beyond the pullback; target the next level                              |
| 5    | Stop opening trades near the end of the overlap (about 10:00 PM BD)                                  |

At **6:30 PM BD (summer)** the US data release can spike price in both directions. Many traders stand aside until the first reaction settles. See [Economic Releases in BD Time](/en/forex-sessions/economic-releases)."""),
            ("What Can Go Wrong", """
| Problem                                      | Looks like                                                    |
| -------------------------------------------- | ------------------------------------------------------------- |
| Overlap with no movement                     | A narrow range despite two centres being open                 |
| The data spike reverses London's move        | Continuation plans fail; reversal plans work, or neither      |
| Chasing the first impulse                    | You enter at the extreme and take the pullback against you    |
| Wide spreads at the release                  | Entries and stops fill worse than planned                     |"""),
        ],
        example="""
London has pushed EUR/USD up. At 6:00 PM BD price pulls back into a gap at **1.0864 – 1.0872** and holds. Plan: buy **1.0871**, stop **1.0860** (below the gap): risk 11 pips; target **1.0910** (the next high): reward 39 pips, **1 : 3.5** planned. If price closes below **1.0860**, the continuation idea fails.""",
        mistakes=[["Assuming overlaps always move", "Wait for a setup; skip quiet overlaps"], ["Using summer times in winter", "Add one hour from early November to mid-March"], ["Trading the data spike", "Wait for the first reaction"], ["Starting new trades late in the overlap", "Set a stop time"]],
        practice=["Write the three overlaps in BD time for the current season.", "For ten days, note London's direction and what the 6:00 PM hour did.", "Count continuation days against reversal days."],
        summary=[["Overlaps", "Sydney–Tokyo, Tokyo–London, London–New York"], ["Busiest", "London–New York: 6:00–10:00 PM BD in summer"], ["Plan", "Decide continuation or reversal at 6:00 PM; enter on a pullback"], ["Caution", "No fixed share of the range is established"]],
        related=[("/forex-sessions/overlaps", "Session Overlaps"), ("/forex-sessions/economic-releases", "Economic Releases in BD Time"), ("/forex-sessions/best-trading-times-bd", "Best Trading Times in Bangladesh"), ("/blog/session-trading-strategy-complete", "Session Trading Strategy")],
        fig_alt="EUR/USD hourly candles over one synthetic day with the Asia, London, overlap and after-London blocks and a pullback long at the 6:00 PM overlap",
        fig_note="Synthetic candles for teaching (US/UK summer times)", fig_label="Session Overlaps"),
    bn=dict(
        title="Session Overlap Strategies — London ও New York একসাথে ট্রেড",
        description="বাংলাদেশ সময়ে তিন ফরেক্স সেশন ওভারল্যাপ (Sydney–Tokyo সকাল ৬:০০–দুপুর ১২:০০, Tokyo–London দুপুর ১:০০–৩:০০, London–New York সন্ধ্যা ৬:০০–রাত ১০:০০ Summer এ), প্রতিটি সাধারণত কেমন, London–New York ওভারল্যাপের পুলব্যাক-কন্টিনিউয়েশন কৌশল, সন্ধ্যা ৬:৩০ এর ডেটা রিলিজ সামলানো, আর কেন ওভারল্যাপ মুভের নিশ্চয়তা নয়।",
        intro="**ওভারল্যাপ** হলো যে উইন্ডোতে দুটি প্রধান কেন্দ্র একসাথে খোলা। বেশি অংশগ্রহণকারী সক্রিয়, মেজর পেয়ারে স্প্রেড সাধারণত সংকীর্ণ, আর রেঞ্জ সাধারণত বাড়ে। এটি ওভারল্যাপকে ট্রেড খোঁজার যুক্তিসঙ্গত জায়গা করে, প্রাইস নড়বে এমন প্রতিশ্রুতি নয়।",
        fix="মূল লেখায় দাবি ছিল দিনের রেঞ্জের নির্দিষ্ট অংশ ওভারল্যাপে হয় এবং কিছু জায়গায় ওভারল্যাপের ঘণ্টা ভুল ছিল। নিচের সময় সেশনের ঘণ্টা (US/UK Summer) থেকে রূপান্তরিত, আর রেঞ্জের অংশের দাবি সরানো হয়েছে কারণ উৎস ছিল না। London–New York ওভারল্যাপে Winter এ এক ঘণ্টা যোগ করুন।",
        sections=[
            ("BD সময়ে তিন ওভারল্যাপ", """
| ওভারল্যাপ             | **BD (US/UK Summer)**  | **BD (Winter)**        | সাধারণ চরিত্র                            |
| ------------------- | ---------------------- | ---------------------- | -------------------------------------------- |
| **Sydney–Tokyo**    | সকাল ৬:০০ – দুপুর ১২:০০     | সকাল ৬:০০ – ১১:০০     | শান্ত; AUD, NZD ও JPY পেয়ার                |
| **Tokyo–London**    | দুপুর ১:০০ – ৩:০০      | দুপুর ২:০০ – ৩:০০      | London নিয়ন্ত্রণ নেয়; এশিয়ান রেঞ্জ পরীক্ষা হয় |
| **London–New York** | **সন্ধ্যা ৬:০০ – রাত ১০:০০** | **সন্ধ্যা ৭:০০ – রাত ১১:০০** | সাধারণত সবচেয়ে ব্যস্ত ঘণ্টা; US ডেটা           |

[Overlaps](/bn/forex-sessions/overlaps) লেসনের সিন্থেটিক দিনে গড় ঘণ্টাভিত্তিক রেঞ্জ ছিল এশিয়ায় প্রায় ৭ পিপ, London এ ১৩, ওভারল্যাপে ১৫ আর London বন্ধের পর ৭: ওভারল্যাপ সবচেয়ে সক্রিয় ব্লক, কিন্তু আসল দিন ভিন্ন।"""),
            ("London–New York ওভারল্যাপের পুলব্যাক-কন্টিনিউয়েশন পরিকল্পনা", """
| ধাপ | নিয়ম                                                                                                |
| ---- | --------------------------------------------------------------------------------------------------- |
| ১    | সন্ধ্যা ৬:০০ BD এর আগে London এর দিক ও London এর High/Low লিখুন                                   |
| ২    | ৬:০০ এ ঠিক করুন: **কন্টিনিউয়েশন** (প্রাইস London এর মুভ ধরে রাখে) বা **রিভার্সাল** (London এর চরম নিয়ে ফেরে) |
| ৩    | কন্টিনিউয়েশনে এমন পুলব্যাকের অপেক্ষা করুন যা লেভেল বা গ্যাপ ধরে রাখে                                    |
| ৪    | প্রতিক্রিয়ায় এন্ট্রি; পুলব্যাকের ওপারে Stop; পরের লেভেলে টার্গেট                              |
| ৫    | ওভারল্যাপের শেষের (প্রায় রাত ১০:০০ BD) কাছে নতুন ট্রেড খোলা বন্ধ করুন                                  |

**সন্ধ্যা ৬:৩০ BD (Summer)** তে US ডেটা রিলিজ প্রাইসকে দুই দিকেই স্পাইক করাতে পারে। অনেক ট্রেডার প্রথম প্রতিক্রিয়া থিতু না হওয়া পর্যন্ত সরে থাকেন। [Economic Releases in BD Time](/bn/forex-sessions/economic-releases) দেখুন।"""),
            ("কী ভুল হতে পারে", """
| সমস্যা                                      | দেখতে কেমন                                                    |
| -------------------------------------------- | ------------------------------------------------------------- |
| মুভ ছাড়া ওভারল্যাপ                     | দুই কেন্দ্র খোলা থাকলেও সংকীর্ণ রেঞ্জ                 |
| ডেটা স্পাইক London এর মুভ উল্টায়        | কন্টিনিউয়েশন পরিকল্পনা ব্যর্থ; রিভার্সাল কাজ করে, বা কোনোটিই নয়      |
| প্রথম ইমপালসের পেছনে ছোটা                    | আপনি চরমে এন্ট্রি নিয়ে পুলব্যাক বিপরীতে পান    |
| রিলিজে চওড়া স্প্রেড                  | এন্ট্রি ও Stop পরিকল্পনার চেয়ে খারাপ ফিল হয়                     |"""),
        ],
        example="""
London EUR/USD কে উপরে ঠেলেছে। সন্ধ্যা ৬:০০ BD তে প্রাইস **1.0864 – 1.0872** এর গ্যাপে পুলব্যাক করে টিকে যায়। পরিকল্পনা: **1.0871** এ Buy, Stop **1.0860** (গ্যাপের নিচে): রিস্ক ১১ পিপ; টার্গেট **1.0910** (পরের High): রিওয়ার্ড ৩৯ পিপ, পরিকল্পিত **১ : ৩.৫**। প্রাইস **1.0860** এর নিচে Close করলে কন্টিনিউয়েশন ধারণা ব্যর্থ।""",
        mistakes=[["ওভারল্যাপ সবসময় নড়ে ধরা", "সেটআপের অপেক্ষা করুন; শান্ত ওভারল্যাপ বাদ দিন"], ["Winter এ Summer সময় ব্যবহার", "নভেম্বরের শুরু থেকে মধ্য-মার্চ এক ঘণ্টা যোগ করুন"], ["ডেটা স্পাইক ট্রেড", "প্রথম প্রতিক্রিয়ার অপেক্ষা করুন"], ["ওভারল্যাপের শেষে নতুন ট্রেড", "থামার সময় ঠিক করুন"]],
        practice=["চলতি ঋতুর জন্য BD সময়ে তিন ওভারল্যাপ লিখুন।", "দশ দিন London এর দিক ও সন্ধ্যা ৬:০০ ঘণ্টা কী করেছে লিখুন।", "কন্টিনিউয়েশন ও রিভার্সাল দিন গুনুন।"],
        summary=[["ওভারল্যাপ", "Sydney–Tokyo, Tokyo–London, London–New York"], ["সবচেয়ে ব্যস্ত", "London–New York: Summer এ সন্ধ্যা ৬:০০–রাত ১০:০০ BD"], ["পরিকল্পনা", "সন্ধ্যা ৬:০০ এ কন্টিনিউয়েশন বা রিভার্সাল ঠিক করুন; পুলব্যাকে এন্ট্রি"], ["সতর্কতা", "রেঞ্জের কোনো নির্দিষ্ট অংশ প্রতিষ্ঠিত নয়"]],
        related=[("/forex-sessions/overlaps", "Session Overlaps"), ("/forex-sessions/economic-releases", "Economic Releases in BD Time"), ("/forex-sessions/best-trading-times-bd", "Best Trading Times in Bangladesh"), ("/blog/session-trading-strategy-complete", "Session Trading Strategy")],
        fig_alt="এক সিন্থেটিক দিনে EUR/USD ঘণ্টাভিত্তিক ক্যান্ডেল, Asia, London, ওভারল্যাপ ও London-পরবর্তী ব্লক এবং সন্ধ্যা ৬:০০ ওভারল্যাপে পুলব্যাক Long সহ",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল (US/UK Summer সময়)", fig_label="Session Overlaps"),
)
