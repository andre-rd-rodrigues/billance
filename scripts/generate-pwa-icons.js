#!/usr/bin/env node
/**
 * Generates PWA icons (logo192.png, logo512.png) from assets/images/icon.png.
 * Requires one of: macOS (sips), ImageMagick (convert), or sharp (npm install sharp).
 * Run from project root: node scripts/generate-pwa-icons.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const srcIcon = path.join(projectRoot, 'assets', 'images', 'icon.png');
const publicDir = path.join(projectRoot, 'public');

const sizes = [192, 512];

if (!fs.existsSync(srcIcon)) {
  console.error('Source icon not found:', srcIcon);
  process.exit(1);
}

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function generateWithSips() {
  for (const size of sizes) {
    const dest = path.join(publicDir, `logo${size}.png`);
    execSync(`sips -z ${size} ${size} "${srcIcon}" --out "${dest}"`, {
      stdio: 'inherit',
    });
    console.log('Created', dest);
  }
}

async function generateWithSharp() {
  const sharp = require('sharp');
  for (const size of sizes) {
    const dest = path.join(publicDir, `logo${size}.png`);
    await sharp(srcIcon).resize(size, size).png().toFile(dest);
    console.log('Created', dest);
  }
}

function generateWithImageMagick() {
  sizes.forEach((size) => {
    const dest = path.join(publicDir, `logo${size}.png`);
    execSync(`convert "${srcIcon}" -resize ${size}x${size} "${dest}"`, {
      stdio: 'inherit',
    });
    console.log('Created', dest);
  });
}

// Prefer sips on macOS, then sharp, then ImageMagick
if (process.platform === 'darwin') {
  try {
    execSync('which sips', { stdio: 'ignore' });
    generateWithSips();
    return;
  } catch (_) {}
}

try {
  require.resolve('sharp');
  generateWithSharp().catch((err) => {
    console.error(err);
    process.exit(1);
  });
} catch (_) {
  try {
    execSync('which convert', { stdio: 'ignore' });
    generateWithImageMagick();
  } catch (e) {
    console.error(
      'No supported tool found. Options:\n' +
        '  - On macOS, sips is built-in.\n' +
        '  - Install sharp: npm install --save-dev sharp\n' +
        '  - Or install ImageMagick and use the convert command.'
    );
    process.exit(1);
  }
}
