import { FileText, BookOpen, UserCheck, Copyright, Scale, RefreshCcw, Gavel } from "lucide-react";
import Link from "next/link";

export default async function TermsPage({
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
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-2 text-sm text-accent-blue">
          <FileText size={14} />
          {isBn ? "আইনি" : "Legal"}
        </div>
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
          {isBn ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {isBn ? "সর্বশেষ আপডেট: জুন ১০, ২০২৬" : "Last updated: June 10, 2026"}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {/* Acceptance */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10">
              <UserCheck size={16} className="text-accent-green" />
            </div>
            {isBn ? "শর্তাবলী গ্রহণ" : "Acceptance of Terms"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "TradingDocs ওয়েবসাইট অ্যাক্সেস এবং ব্যবহার করে, আপনি এই ব্যবহারের শর্তাবলী মেনে চলতে এবং এর দ্বারা আবদ্ধ হতে সম্মত হচ্ছেন। আপনি যদি এই শর্তাবলীতে সম্মত না হন, তাহলে অনুগ্রহ করে আমাদের ওয়েবসাইট ব্যবহার করবেন না।"
              : "By accessing and using the TradingDocs website, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our website."}
          </p>
        </section>

        {/* Educational Purpose */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/10">
              <BookOpen size={16} className="text-accent-blue" />
            </div>
            {isBn ? "শিক্ষামূলক উদ্দেশ্য" : "Educational Purpose"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "TradingDocs শুধুমাত্র শিক্ষামূলক এবং তথ্যমূলক উদ্দেশ্যে ট্রেডিং শিক্ষা কন্টেন্ট প্রদান করে। আমাদের কন্টেন্ট আর্থিক পরামর্শ, বিনিয়োগ পরামর্শ, বা কোনো নির্দিষ্ট আর্থিক পণ্য কেনা বা বেচার সুপারিশ গঠন করে না।"
              : "TradingDocs provides trading education content for educational and informational purposes only. Our content does not constitute financial advice, investment advice, or a recommendation to buy or sell any specific financial product."}
          </p>
          <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
            <p className="text-sm text-yellow-300/90">
              ⚠️ {isBn
                ? "এই সাইটের কোনো কন্টেন্ট আপনার নির্দিষ্ট পরিস্থিতির জন্য ব্যক্তিগতকৃত আর্থিক পরামর্শ নয়।"
                : "Nothing on this site is personalized financial advice for your specific situation."}
            </p>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-orange/10">
              <UserCheck size={16} className="text-accent-orange" />
            </div>
            {isBn ? "ব্যবহারকারীর দায়িত্ব" : "User Responsibilities"}
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              isBn ? "আপনি নিজের ট্রেডিং সিদ্ধান্তের জন্য সম্পূর্ণ দায়ী" : "You are solely responsible for your own trading decisions",
              isBn ? "লাইভ ট্রেডিংয়ের আগে আপনার নিজস্ব গবেষণা এবং যথাযথ পরিশ্রম করুন" : "Conduct your own research and due diligence before live trading",
              isBn ? "ট্রেডিং সিদ্ধান্ত নেওয়ার আগে যোগ্য আর্থিক পরামর্শদাতার সাথে পরামর্শ করুন" : "Consult with a qualified financial advisor before making trading decisions",
              isBn ? "যতটুকু হারাতে সামর্থ্য আছে তার বেশি রিস্ক নেবেন না" : "Never risk more than you can afford to lose",
              isBn ? "ডেমো অ্যাকাউন্টে অনুশীলন করুন আসল অর্থ ব্যবহারের আগে" : "Practice on demo accounts before using real money",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent-orange/30 text-[10px] text-accent-orange">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-purple/10">
              <Copyright size={16} className="text-accent-purple" />
            </div>
            {isBn ? "বুদ্ধিবৃত্তিক সম্পত্তি" : "Intellectual Property"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "TradingDocs-এ সকল কন্টেন্ট, টেক্সট, গ্রাফিক্স, ডিজাইন, এবং টুলস কপিরাইট দ্বারা সুরক্ষিত। আপনি ব্যক্তিগত, অ-বাণিজ্যিক ব্যবহারের জন্য কন্টেন্ট দেখতে এবং ব্যবহার করতে পারেন। বাণিজ্যিক পুনরুৎপাদন বা পুনঃবিতরণ অনুমোদিত নয়।"
              : "All content, text, graphics, design, and tools on TradingDocs are protected by copyright. You may view and use content for personal, non-commercial use. Commercial reproduction or redistribution is not permitted without written consent."}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
              <p className="text-xs font-medium text-green-400">✓ {isBn ? "ব্যক্তিগত শিক্ষার জন্য ব্যবহার" : "Personal learning use"}</p>
            </div>
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
              <p className="text-xs font-medium text-green-400">✓ {isBn ? "লিংক শেয়ার করা" : "Sharing links to content"}</p>
            </div>
            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3">
              <p className="text-xs font-medium text-red-400">✗ {isBn ? "বাণিজ্যিক পুনরুৎপাদন" : "Commercial reproduction"}</p>
            </div>
            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3">
              <p className="text-xs font-medium text-red-400">✗ {isBn ? "কন্টেন্ট পুনঃবিক্রয়" : "Reselling content"}</p>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
              <Scale size={16} className="text-red-400" />
            </div>
            {isBn ? "দায়বদ্ধতার সীমাবদ্ধতা" : "Limitation of Liability"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "TradingDocs আমাদের কন্টেন্ট ব্যবহারের ফলে উদ্ভূত কোনো প্রত্যক্ষ, পরোক্ষ, আনুষঙ্গিক বা পরিণামগত ক্ষতির জন্য দায়ী নয়। ট্রেডিংয়ে উল্লেখযোগ্য আর্থিক ক্ষতির ঝুঁকি রয়েছে এবং সকলের জন্য উপযুক্ত নয়। আপনি নিজের সিদ্ধান্ত এবং তার ফলাফলের জন্য সম্পূর্ণ দায়ী।"
              : "TradingDocs is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our content. Trading involves significant risk of financial loss and is not suitable for everyone. You are entirely responsible for your own decisions and their outcomes."}
          </p>
        </section>

        {/* Changes */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10">
              <RefreshCcw size={16} className="text-accent-green" />
            </div>
            {isBn ? "পরিবর্তন" : "Changes to Terms"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "আমরা যেকোনো সময় এই শর্তাবলী আপডেট করার অধিকার সংরক্ষণ করি। পরিবর্তনগুলি এই পৃষ্ঠায় পোস্ট করা হবে এবং আপডেটের তারিখ পরিবর্তন করা হবে।"
              : "We reserve the right to update these terms at any time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance."}
          </p>
        </section>

        {/* Governing Law */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/10">
              <Gavel size={16} className="text-accent-blue" />
            </div>
            {isBn ? "প্রযোজ্য আইন" : "Governing Law"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "এই শর্তাবলী বাংলাদেশের প্রযোজ্য আইন অনুযায়ী পরিচালিত এবং ব্যাখ্যা করা হবে।"
              : "These terms shall be governed by and construed in accordance with applicable laws of Bangladesh."}
          </p>
        </section>
      </div>

      {/* Other Legal Links */}
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href={`/${lang}/privacy-policy`} className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent-green/30 hover:text-foreground">
          {isBn ? "গোপনীয়তা নীতি →" : "Privacy Policy →"}
        </Link>
        <Link href={`/${lang}/disclaimer`} className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent-green/30 hover:text-foreground">
          {isBn ? "দায়মুক্তি →" : "Disclaimer →"}
        </Link>
      </div>
    </div>
  );
}
