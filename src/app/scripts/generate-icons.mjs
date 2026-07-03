import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputDir = path.join(root, "public");

function createIconSvg() {
  return `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#000000"/>
      <circle cx="256" cy="256" r="236" fill="#030303"/>
      <circle cx="256" cy="256" r="222" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="6"/>

      <text
        x="50%"
        y="55%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="245"
        font-weight="500"
        letter-spacing="-34"
        fill="#ffffff"
      >BW</text>
    </svg>
  `;
}

async function makeIcon(size, filename) {
  await sharp(Buffer.from(createIconSvg()))
    .resize(size, size)
    .png({
      compressionLevel: 9,
      quality: 100,
    })
    .toFile(path.join(outputDir, filename));
}

await makeIcon(32, "favicon-32.png");
await makeIcon(180, "apple-touch-icon.png");
await makeIcon(192, "icon-192.png");
await makeIcon(512, "icon-512.png");

console.log("✅ Clean BW favicon icons generated successfully.");