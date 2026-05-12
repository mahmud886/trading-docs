export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{isBn ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}</h1>
      <p className="text-muted-foreground">
        {isBn ? "সর্বশেষ আপডেট: মে ১২, ২০২৬" : "Last updated: May 12, 2026"}
      </p>

      <h2>{isBn ? "শর্তাবলী গ্রহণ" : "Acceptance of Terms"}</h2>
      <p>
        {isBn
          ? "TradingDocs ওয়েবসাইট অ্যাক্সেস এবং ব্যবহার করে, আপনি এই ব্যবহারের শর্তাবলী মেনে চলতে এবং এর দ্বারা আবদ্ধ হতে সম্মত হচ্ছেন।"
          : "By accessing and using the TradingDocs website, you agree to comply with and be bound by these Terms of Service."}
      </p>

      <h2>{isBn ? "শিক্ষামূলক উদ্দেশ্য" : "Educational Purpose"}</h2>
      <p>
        {isBn
          ? "TradingDocs শুধুমাত্র শিক্ষামূলক এবং তথ্যমূলক উদ্দেশ্যে ট্রেডিং শিক্ষা কন্টেন্ট প্রদান করে। আমাদের কন্টেন্ট আর্থিক পরামর্শ, বিনিয়োগ পরামর্শ, বা কোনো নির্দিষ্ট আর্থিক পণ্য কেনা বা বেচার সুপারিশ গঠন করে না।"
          : "TradingDocs provides trading education content for educational and informational purposes only. Our content does not constitute financial advice, investment advice, or a recommendation to buy or sell any specific financial product."}
      </p>

      <h2>{isBn ? "ব্যবহারকারীর দায়িত্ব" : "User Responsibilities"}</h2>
      <ul>
        <li>{isBn ? "আপনি নিজের ট্রেডিং সিদ্ধান্তের জন্য সম্পূর্ণ দায়ী" : "You are solely responsible for your own trading decisions"}</li>
        <li>{isBn ? "লাইভ ট্রেডিংয়ের আগে আপনার নিজস্ব গবেষণা এবং যথাযথ পরিশ্রম করুন" : "Conduct your own research and due diligence before live trading"}</li>
        <li>{isBn ? "ট্রেডিং সিদ্ধান্ত নেওয়ার আগে যোগ্য আর্থিক পরামর্শদাতার সাথে পরামর্শ করুন" : "Consult with a qualified financial advisor before making trading decisions"}</li>
        <li>{isBn ? "যতটুকু হারাতে সামর্থ্য আছে তার বেশি রিস্ক নেবেন না" : "Never risk more than you can afford to lose"}</li>
      </ul>

      <h2>{isBn ? "বুদ্ধিবৃত্তিক সম্পত্তি" : "Intellectual Property"}</h2>
      <p>
        {isBn
          ? "TradingDocs-এ সকল কন্টেন্ট, টেক্সট, গ্রাফিক্স এবং ডিজাইন কপিরাইট দ্বারা সুরক্ষিত। আপনি ব্যক্তিগত, অ-বাণিজ্যিক ব্যবহারের জন্য কন্টেন্ট দেখতে এবং ডাউনলোড করতে পারেন।"
          : "All content, text, graphics, and design on TradingDocs are protected by copyright. You may view and download content for personal, non-commercial use."}
      </p>

      <h2>{isBn ? "দায়বদ্ধতার সীমাবদ্ধতা" : "Limitation of Liability"}</h2>
      <p>
        {isBn
          ? "TradingDocs আমাদের কন্টেন্ট ব্যবহারের ফলে উদ্ভূত কোনো প্রত্যক্ষ, পরোক্ষ, আনুষঙ্গিক বা পরিণামগত ক্ষতির জন্য দায়ী নয়। ট্রেডিংয়ে উল্লেখযোগ্য আর্থিক ক্ষতির ঝুঁকি রয়েছে এবং সকলের জন্য উপযুক্ত নয়।"
          : "TradingDocs is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our content. Trading involves significant risk of financial loss and is not suitable for everyone."}
      </p>

      <h2>{isBn ? "পরিবর্তন" : "Changes to Terms"}</h2>
      <p>
        {isBn
          ? "আমরা যেকোনো সময় এই শর্তাবলী আপডেট করার অধিকার সংরক্ষণ করি। পরিবর্তনগুলি এই পৃষ্ঠায় পোস্ট করা হবে।"
          : "We reserve the right to update these terms at any time. Changes will be posted on this page."}
      </p>

      <h2>{isBn ? "প্রযোজ্য আইন" : "Governing Law"}</h2>
      <p>
        {isBn
          ? "এই শর্তাবলী প্রযোজ্য আইন অনুযায়ী পরিচালিত এবং ব্যাখ্যা করা হবে।"
          : "These terms shall be governed by and construed in accordance with applicable law."}
      </p>
    </article>
  );
}


