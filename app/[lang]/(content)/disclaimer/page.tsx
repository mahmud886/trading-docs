export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{isBn ? "দায়মুক্তি" : "Disclaimer"}</h1>
      <p className="text-muted-foreground">
        {isBn ? "সর্বশেষ আপডেট: মে ১২, ২০২৬" : "Last updated: May 12, 2026"}
      </p>

      <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-6 my-6">
        <h2 className="mt-0 text-yellow-400">{isBn ? "⚠️ গুরুত্বপূর্ণ ঝুঁকি সতর্কতা" : "⚠️ Important Risk Warning"}</h2>
        <p className="mb-0">
          {isBn
            ? "ফরেক্স, CFD, ক্রিপ্টোকারেন্সি এবং অন্যান্য আর্থিক ইনস্ট্রুমেন্টে ট্রেডিংয়ে উল্লেখযোগ্য ক্ষতির ঝুঁকি রয়েছে। অতীত পারফরম্যান্স ভবিষ্যত ফলাফলের সূচক নয়। আপনি যা হারাতে সামর্থ্য আছে তার বেশি রিস্ক নেবেন না।"
            : "Trading forex, CFDs, cryptocurrencies, and other financial instruments involves significant risk of loss. Past performance is not indicative of future results. You should never risk more than you can afford to lose."}
        </p>
      </div>

      <h2>{isBn ? "আর্থিক পরামর্শ নয়" : "Not Financial Advice"}</h2>
      <p>
        {isBn
          ? "TradingDocs-এ প্রদত্ত সকল তথ্য শুধুমাত্র সাধারণ শিক্ষামূলক এবং তথ্যমূলক উদ্দেশ্যে। এই ওয়েবসাইটের কোনো কন্টেন্টই আর্থিক পরামর্শ, বিনিয়োগ পরামর্শ, ট্রেডিং পরামর্শ, বা অন্য কোনো ধরনের পরামর্শ হিসেবে গণ্য করা উচিত নয়।"
          : "All information provided on TradingDocs is for general educational and informational purposes only. Nothing on this website constitutes financial advice, investment advice, trading advice, or any other form of advice."}
      </p>

      <h2>{isBn ? "ঝুঁকি প্রকাশ" : "Risk Disclosure"}</h2>
      <ul>
        <li>{isBn ? "ট্রেডিংয়ে উল্লেখযোগ্য মূলধন ক্ষতির ঝুঁকি রয়েছে" : "Trading involves significant risk of capital loss"}</li>
        <li>{isBn ? "রিটেল ট্রেডারদের বড় অংশ ট্রেডিংয়ে অর্থ হারান" : "A large percentage of retail traders lose money trading"}</li>
        <li>{isBn ? "লিভারেজড পণ্য আপনার প্রাথমিক বিনিয়োগের চেয়ে বেশি ক্ষতি করতে পারে" : "Leveraged products can result in losses greater than your initial investment"}</li>
        <li>{isBn ? "অতীত পারফরম্যান্স ভবিষ্যত ফলাফলের গ্যারান্টি দেয় না" : "Past performance does not guarantee future results"}</li>
        <li>{isBn ? "আপনার হারাতে সামর্থ্য আছে তার বেশি অর্থ দিয়ে ট্রেড করবেন না" : "Do not trade with money you cannot afford to lose"}</li>
      </ul>

      <h2>{isBn ? "নির্ভুলতা" : "Accuracy"}</h2>
      <p>
        {isBn
          ? "আমরা সঠিক ও আপ-টু-ডেট তথ্য প্রদানের চেষ্টা করি, তবে কন্টেন্টের নির্ভুলতা, সম্পূর্ণতা বা প্রাসঙ্গিকতার কোনো গ্যারান্টি দিই না। ফাইন্যান্সিয়াল মার্কেট ক্রমাগত পরিবর্তিত হয় এবং তথ্য দ্রুত পুরনো হয়ে যেতে পারে।"
          : "While we strive to provide accurate and up-to-date information, we make no guarantees about the accuracy, completeness, or relevance of the content. Financial markets are constantly changing and information can become outdated quickly."}
      </p>

      <h2>{isBn ? "তৃতীয় পক্ষের পণ্য ও পরিষেবা" : "Third-Party Products and Services"}</h2>
      <p>
        {isBn
          ? "এই ওয়েবসাইটে ব্রোকার, ট্রেডিং প্ল্যাটফর্ম বা ট্রেডিং টুলের উল্লেখ অনুমোদন বা সুপারিশ গঠন করে না।"
          : "Any mention of brokers, trading platforms, or trading tools on this website does not constitute an endorsement or recommendation."}
      </p>

      <h2>{isBn ? "ব্যক্তিগত দায়িত্ব" : "Personal Responsibility"}</h2>
      <p>
        {isBn
          ? "আপনি আপনার নিজের ট্রেডিং সিদ্ধান্ত এবং তাদের ফলাফলের জন্য সম্পূর্ণ দায়ী। লাইভ ট্রেডিংয়ে যেকোনো মূলধন রিস্ক করার আগে সবসময় একজন লাইসেন্সপ্রাপ্ত আর্থিক পরামর্শদাতার সাথে পরামর্শ করুন।"
          : "You are entirely responsible for your own trading decisions and their outcomes. Always consult with a licensed financial advisor before risking any capital in live trading."}
      </p>

      <div className="rounded-lg border border-accent-green/30 bg-accent-green/5 p-6 my-6">
        <h3 className="mt-0">{isBn ? "💡 আমাদের মিশন" : "💡 Our Mission"}</h3>
        <p className="mb-0">
          {isBn
            ? "TradingDocs-এর মিশন হলো মানসম্পন্ন ট্রেডিং শিক্ষা প্রদান করা যাতে ট্রেডাররা সচেতন সিদ্ধান্ত নিতে পারেন। আমরা বিশ্বাস করি শিক্ষা হলো ট্রেডিংয়ে সাফল্যের ভিত্তি, কিন্তু শিক্ষা একাই লাভজনকতার গ্যারান্টি দিতে পারে না।"
            : "TradingDocs' mission is to provide quality trading education so traders can make informed decisions. We believe education is the foundation of success in trading, but education alone cannot guarantee profitability."}
        </p>
      </div>
    </article>
  );
}


