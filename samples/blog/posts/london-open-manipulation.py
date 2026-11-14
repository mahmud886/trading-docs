SPEC = dict(
    fm=dict(date="2026-05-13", category="ICT", tags=["london-open", "manipulation", "judas-swing", "kill-zones", "sessions"], reading=8, featured=True),
    fig=dict(img="/images/forex-sessions/london-open-manipulation/london-judas-swing-dark.webp", video="/videos/forex-sessions/london-judas-explainer-dark.mp4", lesson="/forex-sessions/london-open-manipulation"),
    en=dict(
        title="London Open Judas Swing — A False Move Before the Real One?",
        description="The Judas swing is an early move at the London open that sweeps the Asian range and then reverses. How to mark the Asian range in Bangladesh time, the sequence that defines a Judas swing, how to enter, why it often fails, and a worked EUR/USD trade with a 1 to 1.9 planned reward-to-risk.",
        intro="At the London open, price often **spikes beyond the Asian range** (6:00 AM to 12:00 PM BD in summer) and then either reverses or continues. When it reverses, traders call the first move a **Judas swing**. It is a description of a sequence in hindsight, and the hard part is telling it apart from a real breakout while it is happening.",
        fix="The original said London \"manipulates\" the market on most days and that this pattern is reliable. There is no source for a frequency or success rate, and \"manipulation\" implies intent we cannot observe. The times were also converted incorrectly in places: they are now taken from New York time with one rule (+10 hours in US summer, +11 in winter).",
        sections=[
            ("The Sequence in Bangladesh Time", """
| Step | Time (BD, US/UK summer)  | What happens                                                              |
| ---- | ------------------------ | ------------------------------------------------------------------------- |
| 1    | 6:00 AM – 12:00 PM       | The Asian range forms; mark its high and low                              |
| 2    | 12:00 PM onward          | London kill zone begins (12:00 – 3:00 PM); London itself opens at 1:00 PM |
| 3    | First hour of London     | Price spikes beyond one side of the range (the sweep)                     |
| 4    | After the sweep          | A candle closes **back inside** the range, then a structure shift         |
| 5    | Rest of London           | Possible move to the other side of the range                              |

Add one hour in winter. See [London Open Manipulation](/en/forex-sessions/london-open-manipulation), [Asian Range](/en/forex-sessions/asian-range) and [Judas Swing](/en/ict/judas-swing)."""),
            ("Entry and Risk", """
| Item          | Rule                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------- |
| Bias          | Write the daily bias first: take Judas setups only in line with it                           |
| Trigger       | Sweep of an Asian extreme, a close back inside, then a lower-timeframe structure shift       |
| Entry         | Retest of the shift (a gap or order block)                                                   |
| Stop          | Beyond the sweep's extreme                                                                   |
| Target        | The opposite Asian extreme, then the previous day's level                                    |

If price closes beyond the swept extreme and holds, it is a real breakout: cancel the plan."""),
            ("Why It Fails", """
| Failure                                      | What it looks like                                                  |
| -------------------------------------------- | ------------------------------------------------------------------- |
| London breaks out and keeps going            | No close back inside; the sweep was a breakout                      |
| A narrow Asian range                         | Tiny ranges give frequent false triggers                            |
| News at the open                             | Releases dominate the move                                          |
| Trading without a bias                       | You take both directions and pay for whichever fails                |"""),
        ],
        example="""
The Asian range is **1.0860 – 1.0880**. At 1:10 PM BD price drops to **1.0852** and a 15-minute candle closes back at **1.0866**; a 5-minute candle closes above the last lower high. Daily bias is bullish. Plan: buy **1.0864**, stop **1.0848** (below the sweep low): risk 16 pips; target **1.0894** (above the Asian high): reward 30 pips, **1 : 1.9** planned. If price closes below **1.0848**, the idea is cancelled.""",
        mistakes=[["Assuming London always reverses the Asian break", "Wait for the close back inside"], ["Marking the range with the wrong clock", "Use 6:00 AM – 12:00 PM BD in summer"], ["Trading against the daily bias", "Take Judas setups only with the bias"], ["Entering on the spike", "Wait for the shift and the retest"]],
        practice=["For 20 London opens, mark the Asian range and record the first break and the close.", "Count sweep-and-reverse against break-and-hold days.", "Record the R of each triggered setup."],
        summary=[["Judas swing", "An early London move beyond the Asian range that reverses"], ["Times", "Asian 6:00 AM–12:00 PM BD; London kill zone 12:00–3:00 PM (summer)"], ["Entry", "After a close back inside and a structure shift"], ["Caution", "No frequency is established; many days break out and continue"]],
        related=[("/forex-sessions/london-open-manipulation", "London Open Manipulation"), ("/forex-sessions/asian-range", "Asian Range"), ("/ict/judas-swing", "Judas Swing"), ("/blog/ict-kill-zones-complete", "ICT Kill Zones Complete Schedule")],
        fig_alt="A synthetic London Judas swing: price sweeps the Asian low at the London open and closes back inside before rallying through the Asian high",
        fig_note="Synthetic candles for teaching (US/UK summer times)", fig_label="London Open Manipulation"),
    bn=dict(
        title="London Open Judas Swing — আসল মুভের আগে ভুয়া মুভ?",
        description="Judas Swing হলো London খোলায় এশিয়ান রেঞ্জ Sweep করে উল্টে যাওয়া আগাম মুভ। বাংলাদেশ সময়ে এশিয়ান রেঞ্জ কীভাবে চিহ্নিত করবেন, Judas Swing সংজ্ঞায়নকারী ক্রম, কীভাবে এন্ট্রি, কেন প্রায়ই ব্যর্থ হয়, আর ১ : ১.৯ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে EUR/USD ট্রেডের উদাহরণ।",
        intro="London খোলায় প্রাইস প্রায়ই **এশিয়ান রেঞ্জের ওপারে স্পাইক করে** (Summer এ সকাল ৬:০০ থেকে দুপুর ১২:০০ BD) আর তারপর উল্টায় বা চলতে থাকে। উল্টালে ট্রেডাররা প্রথম মুভকে **Judas Swing** বলেন। এটি পেছন ফিরে দেখা ক্রমের বর্ণনা, আর কঠিন অংশ ঘটার সময় একে আসল Breakout থেকে আলাদা করা।",
        fix="মূল লেখায় বলা হয়েছিল London বেশিরভাগ দিন মার্কেট \"ম্যানিপুলেট\" করে এবং এই প্যাটার্ন নির্ভরযোগ্য। কোনো ফ্রিকোয়েন্সি বা সাফল্যের হারের উৎস নেই, আর \"ম্যানিপুলেশন\" এমন উদ্দেশ্য বোঝায় যা আমরা দেখতে পাই না। কিছু জায়গায় সময়ও ভুলভাবে রূপান্তরিত ছিল: এখন New York সময় থেকে এক নিয়মে নেওয়া (US Summer এ +১০ ঘণ্টা, Winter এ +১১)।",
        sections=[
            ("বাংলাদেশ সময়ে ক্রম", """
| ধাপ | সময় (BD, US/UK Summer)  | কী ঘটে                                                              |
| ---- | ------------------------ | ------------------------------------------------------------------------- |
| ১    | সকাল ৬:০০ – দুপুর ১২:০০       | এশিয়ান রেঞ্জ তৈরি হয়; এর High ও Low চিহ্নিত করুন                              |
| ২    | দুপুর ১২:০০ থেকে          | London Kill Zone শুরু (১২:০০ – ৩:০০); London নিজে খোলে দুপুর ১:০০ এ |
| ৩    | London এর প্রথম ঘণ্টা     | প্রাইস রেঞ্জের এক পাশের ওপারে স্পাইক করে (Sweep)                     |
| ৪    | Sweep এর পর          | একটি ক্যান্ডেল রেঞ্জের **ভেতরে ফিরে Close** করে, তারপর স্ট্রাকচার শিফট         |
| ৫    | London এর বাকি সময়           | রেঞ্জের অন্য পাশে সম্ভাব্য মুভ                              |

Winter এ এক ঘণ্টা যোগ করুন। [London Open Manipulation](/bn/forex-sessions/london-open-manipulation), [Asian Range](/bn/forex-sessions/asian-range) ও [Judas Swing](/bn/ict/judas-swing) দেখুন।"""),
            ("এন্ট্রি ও ঝুঁকি", """
| বিষয়          | নিয়ম                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------- |
| বায়াস          | আগে ডেইলি বায়াস লিখুন: শুধু এর সাথে মেলে এমন Judas সেটআপ নিন                           |
| ট্রিগার       | এশিয়ান চরমের Sweep, ভেতরে ফিরে Close, তারপর লোয়ার-টাইমফ্রেম স্ট্রাকচার শিফট       |
| এন্ট্রি         | শিফটের রিটেস্ট (গ্যাপ বা Order Block)                                                   |
| Stop          | Sweep এর চরমের ওপারে                                                                   |
| টার্গেট        | এশিয়ান রেঞ্জের বিপরীত চরম, তারপর আগের দিনের লেভেল                                    |

প্রাইস Sweep হওয়া চরমের ওপারে Close করে টিকে থাকলে এটি আসল Breakout: পরিকল্পনা বাতিল করুন।"""),
            ("কেন ব্যর্থ হয়", """
| ব্যর্থতা                                      | দেখতে কেমন                                                  |
| -------------------------------------------- | ------------------------------------------------------------------- |
| London ভেঙে চলতেই থাকে            | ভেতরে ফিরে Close নেই; Sweep ছিল Breakout                      |
| সংকীর্ণ এশিয়ান রেঞ্জ                         | ছোট রেঞ্জে ঘন ঘন ভুয়া ট্রিগার                            |
| খোলায় নিউজ                             | রিলিজ মুভকে নিয়ন্ত্রণ করে                                          |
| বায়াস ছাড়া ট্রেড                       | দুই দিকেই ট্রেড নেন আর যেটি ব্যর্থ হয় তার দাম দেন                |"""),
        ],
        example="""
এশিয়ান রেঞ্জ **1.0860 – 1.0880**। দুপুর ১:১০ BD তে প্রাইস **1.0852** এ নামে আর ১৫-মিনিটের ক্যান্ডেল **1.0866** এ ফিরে Close করে; ৫-মিনিটের ক্যান্ডেল শেষ Lower High এর উপরে Close করে। ডেইলি বায়াস বুলিশ। পরিকল্পনা: **1.0864** এ Buy, Stop **1.0848** (Sweep Low এর নিচে): রিস্ক ১৬ পিপ; টার্গেট **1.0894** (এশিয়ান High এর উপরে): রিওয়ার্ড ৩০ পিপ, পরিকল্পিত **১ : ১.৯**। প্রাইস **1.0848** এর নিচে Close করলে ধারণা বাতিল।""",
        mistakes=[["London সবসময় এশিয়ান ভাঙা উল্টায় ধরা", "ভেতরে ফিরে Close এর অপেক্ষা করুন"], ["ভুল ঘড়িতে রেঞ্জ চিহ্নিত", "Summer এ সকাল ৬:০০ – দুপুর ১২:০০ BD ব্যবহার করুন"], ["ডেইলি বায়াসের বিরুদ্ধে ট্রেড", "শুধু বায়াসের সাথে Judas সেটআপ নিন"], ["স্পাইকে এন্ট্রি", "শিফট ও রিটেস্টের অপেক্ষা করুন"]],
        practice=["২০টি London খোলায় এশিয়ান রেঞ্জ চিহ্নিত করে প্রথম ভাঙা ও Close লিখুন।", "Sweep-ও-উল্টানো ও ভেঙে-টিকে-থাকা দিন গুনুন।", "ট্রিগার হওয়া প্রতিটি সেটআপের R লিখুন।"],
        summary=[["Judas Swing", "এশিয়ান রেঞ্জের ওপারে London এর আগাম মুভ যা উল্টায়"], ["সময়", "এশিয়ান সকাল ৬:০০–দুপুর ১২:০০ BD; London Kill Zone দুপুর ১২:০০–৩:০০ (Summer)"], ["এন্ট্রি", "ভেতরে ফিরে Close ও স্ট্রাকচার শিফটের পর"], ["সতর্কতা", "কোনো ফ্রিকোয়েন্সি প্রতিষ্ঠিত নয়; অনেক দিন ভেঙে চলতে থাকে"]],
        related=[("/forex-sessions/london-open-manipulation", "London Open Manipulation"), ("/forex-sessions/asian-range", "Asian Range"), ("/ict/judas-swing", "Judas Swing"), ("/blog/ict-kill-zones-complete", "ICT Kill Zones Complete Schedule")],
        fig_alt="একটি সিন্থেটিক London Judas Swing: London খোলায় প্রাইস এশিয়ান Low Sweep করে ভেতরে ফিরে Close করে, তারপর এশিয়ান High ভেদ করে র‍্যালি করে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল (US/UK Summer সময়)", fig_label="London Open Manipulation"),
)
