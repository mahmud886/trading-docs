import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const C = join(process.cwd(), 'content');

// Topics 1-19 to process
const topics = [
  '01-ict-foundation',
  '02-smc-foundation',
  '03-market-structure',
  '04-bos',
  '05-choch',
  '06-liquidity',
  '07-buy-side-liquidity',
  '08-sell-side-liquidity',
  '09-equal-highs',
  '10-equal-lows',
  '11-liquidity-sweep',
  '12-liquidity-grab',
  '13-inducement',
  '14-premium-discount',
  '15-dealing-range',
  '16-order-block',
  '17-breaker-block',
  '18-mitigation-block',
  '19-fair-value-gap'
];

topics.forEach(slug => {
  const enPath = join(C, 'en', 'academy', 'ict-smc-course', `${slug}.mdx`);
  const bnPath = join(C, 'bn', 'academy', 'ict-smc-course', `${slug}.mdx`);

  try {
    // Read the English file
    const content = readFileSync(enPath, 'utf-8');

    // Extract frontmatter and content using more flexible regex
    const lines = content.split('\n');
    let frontmatterEnd = -1;
    let frontmatterStart = -1;

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        if (frontmatterStart === -1) {
          frontmatterStart = i;
        } else if (frontmatterEnd === -1) {
          frontmatterEnd = i;
          break;
        }
      }
    }

    if (frontmatterStart === -1 || frontmatterEnd === -1) {
      console.log(`⚠️  ${slug}: No frontmatter found`);
      return;
    }

    const frontmatter = lines.slice(frontmatterStart + 1, frontmatterEnd).join('\n');
    const body = lines.slice(frontmatterEnd + 1).join('\n');

    // Find the Bangla Version section
    const banglaMatch = body.match(/##\s*Bangla Version\s*\n([\s\S]*?)$/);

    if (!banglaMatch) {
      console.log(`⚠️  ${slug}: No Bangla section found`);
      return;
    }

    // Extract English content (everything before Bangla Version)
    const englishPart = body.split(/##\s*Bangla Version/)[0].trim();

    // Extract Bangla content
    const banglaPart = banglaMatch[1].trim();

    // Get title from frontmatter
    const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : slug;

    // Create new English file (without Bangla section)
    const newEnContent = `---\n${frontmatter}\n---\n\n${englishPart}\n`;
    writeFileSync(enPath, newEnContent, 'utf-8');

    // Create Bangla file
    const newBnContent = `---\n${frontmatter}\n---\n\n# ${title}\n\n${banglaPart}\n`;
    writeFileSync(bnPath, newBnContent, 'utf-8');

    console.log(`✅ ${slug}: Split successfully`);

  } catch (error) {
    console.log(`❌ ${slug}: Error - ${error.message}`);
  }
});

console.log('\n✅ All topics 1-19 split into separate EN and BN files!');


