const sharp = require('sharp');
const path = require('path');

const SOURCE = 'public/images/604072276_18167741245378074_8470050349067886516_n (1).jpg';
const OUT_DIR = 'public/images/team';

// Les 4 personnes de gauche à droite — image 1440×1920
const crops = [
  {
    name: 'alisson',
    left: 0,
    top: 0,
    width: 380,
    height: 1920,
  },
  {
    name: 'coralie',
    left: 360,
    top: 0,
    width: 380,
    height: 1920,
  },
  {
    name: 'cynthia',
    left: 720,
    top: 0,
    width: 370,
    height: 1920,
  },
  {
    name: 'shanice',
    left: 1080,
    top: 0,
    width: 360,
    height: 1920,
  },
];

const fs = require('fs');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function cropAll() {
  for (const crop of crops) {
    const outPath = path.join(OUT_DIR, `${crop.name}.jpg`);
    await sharp(SOURCE)
      .extract({
        left: crop.left,
        top: crop.top,
        width: crop.width,
        height: crop.height,
      })
      .resize(600, 800, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 92 })
      .toFile(outPath);
    console.log(`✅ ${crop.name}.jpg — ${crop.width}x${crop.height}`);
  }
  console.log('\n🎉 4 portraits générés dans public/images/team/');
}

cropAll().catch(console.error);
