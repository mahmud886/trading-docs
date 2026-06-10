import { Shield, Eye, Database, Lock, Globe, Mail } from "lucide-react";
import Link from "next/link";

export default async function PrivacyPolicyPage({
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
          <Shield size={14} />
          {isBn ? "আইনি" : "Legal"}
        </div>
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
          {isBn ? "গোপনীয়তা নীতি" : "Privacy Policy"}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {isBn ? "সর্বশেষ আপডেট: জুন ১০, ২০২৬" : "Last updated: June 10, 2026"}
        </p>
      </div>

      {/* Quick Summary */}
      <div className="mb-12 rounded-2xl border border-accent-green/20 bg-accent-green/5 p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <Eye size={18} className="text-accent-green" />
          {isBn ? "সংক্ষেপে" : "TL;DR"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {isBn
            ? "আমরা আপনার ডেটা বিক্রি করি না। আমরা শুধু থিম ও ভাষা পছন্দ সেভ করি (লোকাল স্টোরেজে)। আমরা বেসিক অ্যানালিটিক্স ব্যবহার করি সাইট উন্নত করতে। এটাই সব।"
            : "We don't sell your data. We only save theme & language preferences (locally in your browser). We use basic analytics to improve the site. That's it."}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {/* Introduction */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/10">
              <Globe size={16} className="text-accent-blue" />
            </div>
            {isBn ? "ভূমিকা" : "Introduction"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "TradingDocs-এ আপনাকে স্বাগতম। আমরা আপনার গোপনীয়তাকে গুরুত্ব দিই এবং আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি ব্যাখ্যা করে কীভাবে আমরা আপনার তথ্য সংগ্রহ, ব্যবহার এবং রক্ষা করি যখন আপনি আমাদের ওয়েবসাইট ভিজিট করেন।"
              : "Welcome to TradingDocs. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website."}
          </p>
        </section>

        {/* Information We Collect */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-purple/10">
              <Database size={16} className="text-accent-purple" />
            </div>
            {isBn ? "তথ্য সংগ্রহ" : "Information We Collect"}
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-medium text-foreground">{isBn ? "স্বয়ংক্রিয়ভাবে সংগৃহীত তথ্য" : "Automatically Collected Information"}</h3>
              <ul className="mt-3 space-y-2">
                {[
                  isBn ? "ব্রাউজার টাইপ এবং ভার্সন" : "Browser type and version",
                  isBn ? "অপারেটিং সিস্টেম" : "Operating system",
                  isBn ? "রেফারিং URL" : "Referring URLs",
                  isBn ? "পৃষ্ঠা দর্শনের সময় এবং তারিখ" : "Time and date of page visits",
                  isBn ? "পৃষ্ঠা দর্শনের সংখ্যা" : "Number of page views",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-foreground">{isBn ? "লোকাল স্টোরেজ (কুকিজ নয়)" : "Local Storage (Not Cookies)"}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {isBn
                  ? "আমরা আপনার ব্রাউজারের লোকাল স্টোরেজে থিম পছন্দ (ডার্ক/লাইট মোড), ভাষা পছন্দ (ইংরেজি/বাংলা), এবং শেখার অগ্রগতি ডেটা সংরক্ষণ করি। এই ডেটা শুধুমাত্র আপনার ডিভাইসে থাকে।"
                  : "We store theme preference (dark/light mode), language preference (English/Bangla), and learning progress data in your browser's local storage. This data stays only on your device and is never sent to our servers."}
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-orange/10">
              <Eye size={16} className="text-accent-orange" />
            </div>
            {isBn ? "তথ্য ব্যবহার" : "How We Use Your Information"}
          </h2>
          <ul className="mt-4 space-y-2">
            {[
              isBn ? "ওয়েবসাইট কার্যকারিতা ও পারফরম্যান্স উন্নত করতে" : "To improve website functionality and performance",
              isBn ? "ব্যবহারকারীর পছন্দ মনে রাখতে (থিম, ভাষা)" : "To remember user preferences (theme, language)",
              isBn ? "ওয়েবসাইট ট্রাফিক ও ব্যবহারের ধরণ বিশ্লেষণ করতে" : "To analyze website traffic and usage patterns",
              isBn ? "কন্টেন্ট ও ব্যবহারকারী অভিজ্ঞতা উন্নত করতে" : "To improve content and user experience",
              isBn ? "কোন টপিক সবচেয়ে জনপ্রিয় তা বুঝতে" : "To understand which topics are most popular",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-orange/60" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
              <Lock size={16} className="text-red-400" />
            </div>
            {isBn ? "তথ্য শেয়ারিং" : "Information Sharing"}
          </h2>
          <div className="mt-4 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
            <p className="text-sm font-medium text-green-400">
              ✓ {isBn
                ? "আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি, ব্যবসা বা স্থানান্তর করি না।"
                : "We do NOT sell, trade, or transfer your personal information to third parties. Ever."}
            </p>
          </div>
        </section>

        {/* Third-Party Links */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold text-foreground">
            {isBn ? "তৃতীয় পক্ষের লিংক" : "Third-Party Links"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "আমাদের ওয়েবসাইটে তৃতীয় পক্ষের ওয়েবসাইটের লিংক থাকতে পারে (TradingView, ব্রোকার, ইত্যাদি)। আমরা তাদের গোপনীয়তা চর্চার জন্য দায়ী নই। বাহ্যিক সাইট ভিজিটের আগে তাদের নিজস্ব গোপনীয়তা নীতি পর্যালোচনা করুন।"
              : "Our website may contain links to third-party websites (TradingView, brokers, etc.). We are not responsible for their privacy practices. Please review their privacy policies before visiting external sites."}
          </p>
        </section>

        {/* Data Security */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10">
              <Lock size={16} className="text-accent-green" />
            </div>
            {isBn ? "ডেটা সুরক্ষা" : "Data Security"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "আমাদের সাইট HTTPS-এ সার্ভ করা হয়। আপনার শেখার অগ্রগতি ডেটা শুধুমাত্র আপনার ব্রাউজারের লোকাল স্টোরেজে সংরক্ষিত হয় — আমরা সার্ভারে কোনো ব্যক্তিগত ডেটা সংরক্ষণ করি না।"
              : "Our site is served over HTTPS. Your learning progress data is stored only in your browser's local storage — we do not store any personal data on our servers. There's no user account system, no database of personal information."}
          </p>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/10">
              <Mail size={16} className="text-accent-blue" />
            </div>
            {isBn ? "যোগাযোগ" : "Contact Us"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {isBn
              ? "এই গোপনীয়তা নীতি সম্পর্কে প্রশ্ন থাকলে GitHub-এ ইস্যু তৈরি করুন বা সরাসরি যোগাযোগ করুন।"
              : "If you have questions about this Privacy Policy, please open an issue on our GitHub repository or contact us directly."}
          </p>
        </section>
      </div>

      {/* Other Legal Links */}
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href={`/${lang}/terms`} className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent-green/30 hover:text-foreground">
          {isBn ? "ব্যবহারের শর্তাবলী →" : "Terms of Service →"}
        </Link>
        <Link href={`/${lang}/disclaimer`} className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent-green/30 hover:text-foreground">
          {isBn ? "দায়মুক্তি →" : "Disclaimer →"}
        </Link>
      </div>
    </div>
  );
}
