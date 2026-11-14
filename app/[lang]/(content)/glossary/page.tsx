import { GlossaryBrowser } from "@/components/glossary/glossary-browser";
import { tradingTermsEn } from "@/lib/data/glossary/trading-en";
import { tradingTermsBn } from "@/lib/data/glossary/trading-bn";

export default async function GlossaryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const terms = lang === "bn" ? tradingTermsBn : tradingTermsEn;
  return <GlossaryBrowser lang={lang === "bn" ? "bn" : "en"} terms={terms} />;
}
