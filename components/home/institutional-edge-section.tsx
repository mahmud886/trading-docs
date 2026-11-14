export function InstitutionalEdgeSection({ lang }: { lang: string }) {
  return (
    <section className="relative border-t border-border/30">
      <div className="mx-auto max-w-6xl px-3 sm:px-5 xl:px-6 py-28">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-5 py-2.5 text-sm font-medium text-accent-blue">
            🏦 {lang === "bn" ? "ইনস্টিটিউশনাল এজ" : "The Institutional Edge"}
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {lang === "bn" ? "ব্যাংকদের মতো ট্রেড করুন" : "Trade Like the Banks"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {lang === "bn"
              ? "শিখুন কিভাবে JP Morgan, Goldman Sachs, এবং Citadel-এর মতো ইনস্টিটিউশনরা মার্কেটে লিকুইডিটি ইঞ্জিনিয়ার করে।"
              : "Learn how institutions like JP Morgan, Goldman Sachs, and Citadel engineer liquidity and position against retail traders."}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: lang === "bn" ? "অর্ডার ফ্লো অ্যানালাইসিস" : "Order Flow Analysis",
              desc:
                lang === "bn"
                  ? "DOM, ফুটপ্রিন্ট চার্ট, ডেল্টা — ইনস্টিটিউশনাল ফুটপ্রিন্ট দেখুন"
                  : "DOM, footprint charts, delta — see institutional footprints invisible on regular charts",
              color: "#00ff9d",
            },
            {
              title: lang === "bn" ? "লিকুইডিটি ইঞ্জিনিয়ারিং" : "Liquidity Engineering",
              desc:
                lang === "bn"
                  ? "ইনস্টিটিউশনরা কিভাবে স্টপ হান্ট করে এবং ফাঁদে ফেলে"
                  : "How institutions hunt stops and trap retail traders before the real move",
              color: "#38bdf8",
            },
            {
              title: lang === "bn" ? "টাইম-বেসড ট্রেডিং" : "Time-Based Trading",
              desc:
                lang === "bn"
                  ? "কিল জোন, লন্ডন ফিক্স, NY ওপেন — কখন ব্যাংকরা অ্যাক্টিভ"
                  : "Kill zones, London Fix, NY Open — when banks are most active in the markets",
              color: "#fb923c",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-7 backdrop-blur-xl">
              <div className="mb-4 h-1 w-12 rounded-full" style={{ backgroundColor: item.color }} />
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
