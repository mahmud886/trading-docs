export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isBn = lang === "bn";

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{isBn ? "গোপনীয়তা নীতি" : "Privacy Policy"}</h1>
      <p className="text-muted-foreground">
        {isBn ? "সর্বশেষ আপডেট: মে ১২, ২০২৬" : "Last updated: May 12, 2026"}
      </p>

      <h2>{isBn ? "ভূমিকা" : "Introduction"}</h2>
      <p>
        {isBn
          ? "TradingDocs-এ আপনাকে স্বাগতম। আমরা আপনার গোপনীয়তাকে গুরুত্ব দিই এবং আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি ব্যাখ্যা করে কীভাবে আমরা আপনার তথ্য সংগ্রহ, ব্যবহার এবং রক্ষা করি।"
          : "Welcome to TradingDocs. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website."}
      </p>

      <h2>{isBn ? "তথ্য সংগ্রহ" : "Information We Collect"}</h2>
      <h3>{isBn ? "স্বয়ংক্রিয়ভাবে সংগৃহীত তথ্য" : "Automatically Collected Information"}</h3>
      <ul>
        <li>{isBn ? "ব্রাউজার টাইপ এবং ভার্সন" : "Browser type and version"}</li>
        <li>{isBn ? "অপারেটিং সিস্টেম" : "Operating system"}</li>
        <li>{isBn ? "রেফারিং URL" : "Referring URLs"}</li>
        <li>{isBn ? "পৃষ্ঠা দর্শনের সময় এবং তারিখ" : "Time and date of page visits"}</li>
        <li>{isBn ? "পৃষ্ঠা দর্শনের সংখ্যা" : "Number of page views"}</li>
      </ul>

      <h3>{isBn ? "কুকিজ" : "Cookies"}</h3>
      <p>
        {isBn
          ? "আমরা আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করি। এর মধ্যে থিম পছন্দ (ডার্ক/লাইট মোড) এবং ভাষা পছন্দ অন্তর্ভুক্ত।"
          : "We use cookies to improve your browsing experience. This includes theme preference (dark/light mode) and language preference."}
      </p>

      <h2>{isBn ? "তথ্য ব্যবহার" : "How We Use Your Information"}</h2>
      <ul>
        <li>{isBn ? "ওয়েবসাইট কার্যকারিতা ও পারফরম্যান্স উন্নত করতে" : "To improve website functionality and performance"}</li>
        <li>{isBn ? "ব্যবহারকারীর পছন্দ মনে রাখতে" : "To remember user preferences"}</li>
        <li>{isBn ? "ওয়েবসাইট ট্রাফিক ও ব্যবহারের ধরণ বিশ্লেষণ করতে" : "To analyze website traffic and usage patterns"}</li>
        <li>{isBn ? "কন্টেন্ট ও ব্যবহারকারী অভিজ্ঞতা উন্নত করতে" : "To improve content and user experience"}</li>
      </ul>

      <h2>{isBn ? "তথ্য শেয়ারিং" : "Information Sharing"}</h2>
      <p>
        {isBn
          ? "আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি, ব্যবসা বা স্থানান্তর করি না।"
          : "We do not sell, trade, or transfer your personal information to third parties."}
      </p>

      <h2>{isBn ? "তৃতীয় পক্ষের লিংক" : "Third-Party Links"}</h2>
      <p>
        {isBn
          ? "আমাদের ওয়েবসাইটে তৃতীয় পক্ষের ওয়েবসাইটের লিংক থাকতে পারে। আমরা তাদের গোপনীয়তা চর্চার জন্য দায়ী নই।"
          : "Our website may contain links to third-party websites. We are not responsible for their privacy practices."}
      </p>

      <h2>{isBn ? "ডেটা সুরক্ষা" : "Data Security"}</h2>
      <p>
        {isBn
          ? "আমরা আপনার তথ্যের নিরাপত্তা রক্ষায় যুক্তিসঙ্গত ব্যবস্থা গ্রহণ করি, কিন্তু ইন্টারনেটে কোনো তথ্য প্রেরণ ১০০% নিরাপদ নয়।"
          : "We implement reasonable security measures to protect your information, but no transmission over the internet is 100% secure."}
      </p>

      <h2>{isBn ? "যোগাযোগ" : "Contact Us"}</h2>
      <p>
        {isBn
          ? "এই গোপনীয়তা নীতি সম্পর্কে প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।"
          : "If you have questions about this Privacy Policy, please contact us."}
      </p>
    </article>
  );
}


