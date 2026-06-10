import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

// Revert all BN _meta.json files to match their EN counterparts exactly

const categories = ["order-flow", "intermarket", "quantitative", "wyckoff", "auction-market", "smc", "ict", "academy"];

for (const category of categories) {
  const enMetaPath = path.join(contentDir, "en", category, "_meta.json");
  const bnMetaPath = path.join(contentDir, "bn", category, "_meta.json");

  if (fs.existsSync(enMetaPath)) {
    const enContent = fs.readFileSync(enMetaPath, "utf-8");
    fs.writeFileSync(bnMetaPath, enContent, "utf-8");
    console.log(`Synced: content/bn/${category}/_meta.json → EN version`);
  }
}

console.log("\n✅ All BN _meta.json files now match EN versions (English labels).");
