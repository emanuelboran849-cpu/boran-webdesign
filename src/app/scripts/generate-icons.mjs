import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const sourceCandidates = [
  path.join(root, "public", "bw-logo-intro.png"),
  path.join(root, "public", "bw-logo.png"),
];

let source = null;

for (const candidate of sourceCandidates) {
  try {
    await fs.access(candidate);
    source = candidate;
    break;
  } catch {
    // try next
  }
}

if (!source) {
  throw new Error(
    "No logo source found. Expected public/bw-logo-intro.png or public/bw-logo.png"
  );
}

const outputDir = path.join(root, "public");

const makeIcon = async (size, filename) => {
  await sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: {
        r: 0,
        g: 0,
        b: 0,
        alpha: 1,
      },
    })
    .png({
      compressionLevel: 9,
      quality: 100,
    })
    .toFile(path.join(outputDir, filename));
};

await makeIcon(32, "favicon-32.png");
await makeIcon(180, "apple-touch-icon.png");
await makeIcon(192, "icon-192.png");
await makeIcon(512, "icon-512.png");

console.log("✅ Icons generated successfully from:", source);