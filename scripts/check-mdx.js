const fs = require("fs");
const path = require("path");

const dirs = ["content/en/academy", "content/bn/academy"];
const issues = [];

dirs.forEach((dir) => {
  const files = fs.readdirSync(dir).filter((x) => x.endsWith(".mdx"));
  files.forEach((fn) => {
    const filepath = dir + "/" + fn;
    const content = fs.readFileSync(filepath, "utf8");
    const lines = content.split("\n");

    // Check for < followed by number (MDX interprets as JSX)
    lines.forEach((line, i) => {
      // < followed by a digit breaks MDX
      if (/<\d/.test(line)) {
        issues.push({ file: filepath, line: i + 1, type: "ANGLE_DIGIT", text: line.trim().substring(0, 100) });
      }
      // < followed by special chars (not tag)
      if (/<[^/A-Za-z\s!-]/.test(line) && line.indexOf("Callout") === -1) {
        issues.push({ file: filepath, line: i + 1, type: "BAD_ANGLE", text: line.trim().substring(0, 100) });
      }
      // Bare { } that MDX treats as JSX expression
      if (
        /\{[a-zA-Z]/.test(line) &&
        line.indexOf("Callout") === -1 &&
        line.indexOf("<") === -1 &&
        line.indexOf("```") === -1
      ) {
        // skip frontmatter
        if (i > 5 || !line.startsWith(" ")) {
          // issues.push({ file: filepath, line: i + 1, type: 'BRACE', text: line.trim().substring(0, 100) });
        }
      }
      // Devanagari numerals
      if (/[\u0966-\u096F]/.test(line)) {
        issues.push({ file: filepath, line: i + 1, type: "DEVANAGARI_NUM", text: line.trim().substring(0, 100) });
      }
      // Check for >5% or similar where > starts a line context
      if (/^>/.test(line.trim()) && !line.trim().startsWith("> ")) {
        if (line.trim().length > 1 && !/^>\s*$/.test(line.trim())) {
          issues.push({ file: filepath, line: i + 1, type: "BLOCKQUOTE", text: line.trim().substring(0, 100) });
        }
      }
    });

    // Check if BN and EN have identical content (copy-paste issue)
    if (dir === "content/bn/academy") {
      const enPath = "content/en/academy/" + fn;
      if (fs.existsSync(enPath)) {
        const enContent = fs.readFileSync(enPath, "utf8");
        // Compare body (skip frontmatter)
        const bnBody = content.split("---").slice(2).join("---").trim();
        const enBody = enContent.split("---").slice(2).join("---").trim();
        if (bnBody === enBody && bnBody.length > 100) {
          issues.push({
            file: filepath,
            line: 0,
            type: "IDENTICAL_CONTENT",
            text: "Bengali content is IDENTICAL to English - not translated",
          });
        }
      }
    }
  });
});

// Also check for bonds-etfs in BN
const bnFiles = fs.readdirSync("content/bn/academy").filter((x) => x.endsWith(".mdx"));
const enFiles = fs.readdirSync("content/en/academy").filter((x) => x.endsWith(".mdx"));
const missingBn = enFiles.filter((f) => !bnFiles.includes(f));
if (missingBn.length > 0) {
  console.log("\nMISSING Bengali files:");
  missingBn.forEach((f) => console.log("  - " + f));
}

if (issues.length === 0) {
  console.log("No MDX issues found!");
} else {
  console.log("\nMDX ISSUES FOUND:\n");
  issues.forEach((i) => {
    console.log(`[${i.type}] ${i.file}:${i.line}`);
    console.log(`  ${i.text}\n`);
  });
}

console.log("\nFile size comparison (BN vs EN):");
enFiles.forEach((fn) => {
  const enLines = fs.readFileSync("content/en/academy/" + fn, "utf8").split("\n").length;
  const bnPath = "content/bn/academy/" + fn;
  if (fs.existsSync(bnPath)) {
    const bnLines = fs.readFileSync(bnPath, "utf8").split("\n").length;
    const ratio = Math.round((bnLines / enLines) * 100);
    const flag = ratio < 30 ? " ⚠️ STUB" : ratio > 90 && ratio < 110 ? " ⚠️ SAME?" : "";
    if (flag) console.log(`  ${fn}: EN=${enLines} BN=${bnLines} (${ratio}%)${flag}`);
  } else {
    console.log(`  ${fn}: MISSING in BN`);
  }
});
