import Link from "next/link";
import { BookOpen, ArrowRight, Activity } from "lucide-react";

export function CtaSection({ lang }: { lang: string }) {
  return (
    <section className="relative border-t border-border/30">
      <div className="mx-auto max-w-4xl px-3 sm:px-5 xl:px-6 py-28 text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          {lang === "bn" ? "আজই শুরু করুন" : "Start Your Journey Today"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          {lang === "bn"
            ? "সম্পূর্ণ বিনামূল্যে। কোনো সাইনআপ প্রয়োজন নেই। ট্রেডারদের জন্য তৈরি।"
            : "Completely free. No signup required. Built by traders, for traders who refuse to stay retail."}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={`/${lang}/price-action/introduction`}
            className="group flex items-center gap-2 rounded-full bg-accent-green px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(0,255,157,0.2)] transition-all hover:shadow-[0_0_50px_rgba(0,255,157,0.4)]"
          >
            <BookOpen size={18} />
            {lang === "bn" ? "বিগিনার থেকে শুরু" : "Start from Beginner"}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={`/${lang}/order-flow`}
            className="neon-border flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-foreground"
          >
            <Activity size={18} />
            {lang === "bn" ? "অর্ডার ফ্লো শিখুন" : "Learn Order Flow"}
          </Link>
        </div>
      </div>
    </section>
  );
}
