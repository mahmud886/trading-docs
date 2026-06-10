import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const svgPath = path.join(root, "public/icons/logo.svg");
const outDir = path.join(root, "public/icons");

const sizes = [
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "maskable-icon-512.png", size: 512, maskable: true },
];

const svg = await readFile(svgPath);

await mkdir(outDir, { recursive: true });

for (const { name, size, maskable } of sizes) {
  const output = path.join(outDir, name);

  if (maskable) {
    const padding = Math.round(size * 0.1);
    const inner = size - padding * 2;
    const maskableSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
        <rect width="${size}" height="${size}" fill="#000000"/>
        <svg x="${padding}" y="${padding}" width="${inner}" height="${inner}" viewBox="0 0 512 512">
          ${svg
            .toString()
            .replace(/<svg[^>]*>/, "")
            .replace(/<\/svg>\s*$/, "")}
        </svg>
      </svg>
    `;

    await sharp(Buffer.from(maskableSvg)).resize(size, size).png().toFile(output);
  } else {
    await sharp(svg).resize(size, size).png().toFile(output);
  }

  console.log(`Generated ${name}`);
}

await writeFile(
  path.join(outDir, "README.md"),
  "# PWA icons\n\nGenerated from `logo.svg` via `npm run generate:icons`.\n",
);
