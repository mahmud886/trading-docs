import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function createFile(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Created: ${path.relative(process.cwd(), filePath)}`);
}

// For each new category, copy the _meta.json and create placeholder BN MDX files
const newCategories = ["order-flow", "intermarket", "quantitative", "wyckoff", "auction-market"];

for (const category of newCategories) {
  const enDir = path.join(contentDir, "en", category);
  const bnDir = path.join(contentDir, "bn", category);

  // Copy _meta.json
  const metaPath = path.join(enDir, "_meta.json");
  if (fs.existsSync(metaPath)) {
    createFile(path.join(bnDir, "_meta.json"), fs.readFileSync(metaPath, "utf-8"));
  }

  // Create BN placeholder MDX files from EN files
  const files = fs.readdirSync(enDir).filter((f) => f.endsWith(".mdx"));
  for (const file of files) {
    const enContent = fs.readFileSync(path.join(enDir, file), "utf-8");
    // Just copy the English content for now (can be translated later)
    createFile(path.join(bnDir, file), enContent);
  }
}

// Also create BN versions for new academy, smc, and ict files
const expandedCategories = [
  {
    category: "academy",
    files: [
      "central-bank-analysis",
      "cot-report",
      "institutional-positioning",
      "sentiment-analysis",
      "carry-trade",
      "seasonal-patterns",
      "interest-rate-differentials",
      "gdp-inflation-cycles",
      "slippage-management",
      "spread-dynamics",
      "liquidity-providers",
      "ecn-vs-market-maker",
      "smart-order-routing",
      "twap-execution",
      "vwap-execution",
      "partial-fills-scaling",
      "funding-rate-trading",
      "liquidation-heatmaps",
      "on-chain-analysis",
      "basis-trading",
      "dex-liquidity-pools",
      "mev-order-flow",
    ],
  },
  {
    category: "smc",
    files: [
      "supply-demand-zones",
      "fresh-vs-tested",
      "rally-base-rally",
      "zone-strength-scoring",
      "proximal-distal-lines",
    ],
  },
  {
    category: "ict",
    files: ["options-flow-signals", "max-pain-theory", "gamma-exposure", "put-call-ratio", "options-expiry-pinning"],
  },
];

for (const { category, files } of expandedCategories) {
  const enDir = path.join(contentDir, "en", category);
  const bnDir = path.join(contentDir, "bn", category);

  for (const slug of files) {
    const enFile = path.join(enDir, `${slug}.mdx`);
    if (fs.existsSync(enFile)) {
      const content = fs.readFileSync(enFile, "utf-8");
      createFile(path.join(bnDir, `${slug}.mdx`), content);
    }
  }

  // Update BN _meta.json if it exists
  const bnMetaPath = path.join(bnDir, "_meta.json");
  const enMetaPath = path.join(enDir, "_meta.json");
  if (fs.existsSync(enMetaPath)) {
    // If BN meta exists, merge. Otherwise copy EN meta.
    createFile(bnMetaPath, fs.readFileSync(enMetaPath, "utf-8"));
  }
}

console.log("\n✅ All Bangla placeholder files created!");
