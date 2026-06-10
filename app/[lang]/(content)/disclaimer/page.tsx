import { AlertTriangle, TrendingDown, Info, Heart, ExternalLink, UserX } from "lucide-react";
import Link from "next/link";

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-2 text-sm text-yellow-400">
          <AlertTriangle size={14} />
          {isBn ? "আইনি" : "Legal"}
        </div>
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
          {isBn ? "দায়মুক্তি" : "Disclaimer"}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {isBn ? "সর্বশেষ আপডেট: জুন ১০, ২০২৬" : "Last updated: June 10, 2026"}
        </p>
      </div>

      {/* Critical Risk Warning */}
      <div className="mb-12 rounded-2xl border-2 border-yellow-500/30 bg-yellow-500/5 p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
            <AlertTriangle size={24} className="text-yellow-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-yellow-400">
              {isBn ? "⚠️ গুরুত্বপূর্ণ ঝুঁকি সতর্কতা" : "⚠️ Important Risk Warning"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isBn
                ? "ফরেক্স, CFD, ক্রিপ্টোকারেন্সি এবং অন্যান্য আর্থিক ইনস্ট্রুমেন্টে ট্রেডিংয়ে উল্লেখযোগ্য ক্ষতির ঝুঁকি রয়েছে এবং সকল বিনিয়োগকারীর জন্য উপযুক্ত নয়। অতীত পারফরম্যান্স ভবিষ্যত ফলাফলের সূচক নয়। আপনি যা হারাতে সামর্থ্য আছে তার বেশি রিস্ক নেবেন না।"
                : "Trading forex, CFDs, cryptocurrencies, and other financial instruments involves significant risk of loss and is not suitable for all investors. Past performance is not indicative of future results. You should never risk more than you can afford to lose."}
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {/* Not Financial Advice */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
              <Info size={16} className="text-red-400" />
            </div>
            {isBn ? "আর্থিক পরামর্শ নয়" : "Not Financial Advice"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "TradingDocs-এ প্রদত্ত সকল তথ্য শুধুমাত্র সাধারণ শিক্ষামূলক এবং তথ্যমূলক উদ্দেশ্যে। এই ওয়েবসাইটের কোনো কন্টেন্টই আর্থিক পরামর্শ, বিনিয়োগ পরামর্শ, ট্রেডিং পরামর্শ, বা অন্য কোনো ধরনের পরামর্শ হিসেবে গণ্য করা উচিত নয়।"
              : "All information provided on TradingDocs is for general educational and informational purposes only. Nothing on this website constitutes financial advice, investment advice, trading advice, or any other form of advice. You should not make any financial decision based solely on what you read here."}
          </p>
        </section>

        {/* Risk Disclosure */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-orange/10">
              <TrendingDown size={16} className="text-accent-orange" />
            </div>
            {isBn ? "ঝুঁকি প্রকাশ" : "Risk Disclosure"}
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              { text: isBn ? "ট্রেডিংয়ে উল্লেখযোগ্য মূলধন ক্ষতির ঝুঁকি রয়েছে" : "Trading involves significant risk of capital loss", icon: "💰" },
              { text: isBn ? "রিটেল ট্রেডারদের ৭০-৮০% ট্রেডিংয়ে অর্থ হারান" : "70-80% of retail traders lose money trading", icon: "📊" },
              { text: isBn ? "লিভারেজড পণ্য আপনার প্রাথমিক বিনিয়োগের চেয়ে বেশি ক্ষতি করতে পারে" : "Leveraged products can result in losses greater than your initial investment", icon: "⚡" },
              { text: isBn ? "অতীত পারফরম্যান্স ভবিষ্যত ফলাফলের গ্যারান্টি দেয় না" : "Past performance does not guarantee future results", icon: "📈" },
              { text: isBn ? "আপনার হারাতে সামর্থ্য আছে তার বেশি অর্থ দিয়ে ট্রেড করবেন না" : "Do not trade with money you cannot afford to lose", icon: "🚫" },
              { text: isBn ? "ক্রিপ্টোকারেন্সি অত্যন্ত ভোলাটাইল এবং মূল্য শূন্যে নামতে পারে" : "Cryptocurrencies are extremely volatile and can go to zero", icon: "🪙" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 shrink-0 text-base">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </section>

        {/* Accuracy */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/10">
              <Info size={16} className="text-accent-blue" />
            </div>
            {isBn ? "নির্ভুলতা" : "Accuracy"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "আমরা সঠিক ও আপ-টু-ডেট তথ্য প্রদানের চেষ্টা করি, তবে কন্টেন্টের নির্ভুলতা, সম্পূর্ণতা বা প্রাসঙ্গিকতার কোনো গ্যারান্টি দিই না। ফাইন্যান্সিয়াল মার্কেট ক্রমাগত পরিবর্তিত হয় এবং তথ্য দ্রুত পুরনো হয়ে যেতে পারে। সর্বদা সর্বশেষ তথ্যের জন্য নিজের গবেষণা করুন।"
              : "While we strive to provide accurate and up-to-date information, we make no guarantees about the accuracy, completeness, or relevance of the content. Financial markets are constantly changing and information can become outdated quickly. Always do your own research for the most current information."}
          </p>
        </section>

        {/* Third-Party */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-purple/10">
              <ExternalLink size={16} className="text-accent-purple" />
            </div>
            {isBn ? "তৃতীয় পক্ষের পণ্য ও পরিষেবা" : "Third-Party Products and Services"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "এই ওয়েবসাইটে ব্রোকার, ট্রেডিং প্ল্যাটফর্ম, প্রপ ফার্ম, বা ট্রেডিং টুলের উল্লেখ অনুমোদন বা সুপারিশ গঠন করে না। যেকোনো তৃতীয় পক্ষের সেবা ব্যবহারের আগে আপনার নিজস্ব গবেষণা করুন।"
              : "Any mention of brokers, trading platforms, prop firms, or trading tools on this website does not constitute an endorsement or recommendation. Always conduct your own due diligence before using any third-party service."}
          </p>
        </section>

        {/* Personal Responsibility */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10">
              <UserX size={16} className="text-accent-green" />
            </div>
            {isBn ? "ব্যক্তিগত দায়িত্ব" : "Personal Responsibility"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "আপনি আপনার নিজের ট্রেডিং সিদ্ধান্ত এবং তাদের ফলাফলের জন্য সম্পূর্ণ দায়ী। লাইভ ট্রেডিংয়ে যেকোনো মূলধন রিস্ক করার আগে সবসময় একজন লাইসেন্সপ্রাপ্ত আর্থিক পরামর্শদাতার সাথে পরামর্শ করুন। আমাদের শিক্ষামূলক কন্টেন্ট কোনো নির্দিষ্ট ট্রেড বা কৌশলের সুপারিশ নয়।"
              : "You are entirely responsible for your own trading decisions and their outcomes. Always consult with a licensed financial advisor before risking any capital in live trading. Our educational content is not a recommendation for any specific trade or strategy."}
          </p>
        </section>

        {/* Our Mission */}
        <section className="rounded-2xl border border-accent-green/20 bg-accent-green/5 p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10">
              <Heart size={16} className="text-accent-green" />
            </div>
            {isBn ? "💡 আমাদের মিশন" : "💡 Our Mission"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "TradingDocs-এর মিশন হলো মানসম্পন্ন, ইনস্টিটিউশনাল-গ্রেড ট্রেডিং শিক্ষা প্রদান করা যাতে ট্রেডাররা সচেতন সিদ্ধান্ত নিতে পারেন। আমরা বিশ্বাস করি শিক্ষা হলো ট্রেডিংয়ে সাফল্যের ভিত্তি, কিন্তু শিক্ষা একাই লাভজনকতার গ্যারান্টি দিতে পারে না। ট্রেডিং সাফল্যের জন্য শৃঙ্খলা, অনুশীলন, ঝুঁকি ব্যবস্থাপনা এবং মানসিক দৃঢ়তা প্রয়োজন।"
              : "TradingDocs' mission is to provide quality, institutional-grade trading education so traders can make informed decisions. We believe education is the foundation of success in trading, but education alone cannot guarantee profitability. Trading success requires discipline, practice, risk management, and psychological resilience — alongside knowledge."}
          </p>
        </section>
      </div>

      {/* Other Legal Links */}
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href={`/${lang}/privacy-policy`} className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent-green/30 hover:text-foreground">
          {isBn ? "গোপনীয়তা নীতি →" : "Privacy Policy →"}
        </Link>
        <Link href={`/${lang}/terms`} className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent-green/30 hover:text-foreground">
          {isBn ? "ব্যবহারের শর্তাবলী →" : "Terms of Service →"}
        </Link>
      </div>
    </div>
  );
}
