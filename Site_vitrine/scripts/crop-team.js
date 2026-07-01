const sharp = require('sharp');
const path = require('path');

const SOURCE = 'public/images/604072276_18167741245378074_8470050349067886516_n (1).jpg';
const OUT_DIR = 'public/images/team';

// Les 4 personnes de gauche à droite — image source 1440×1920.
// Cadres 3:4 centrés sur les visages (visage à ~38% de la hauteur du cadre).
const crops = [
  { name: 'alisson', left: 155, top: 545, width: 380, height: 507 },
  { name: 'coralie', left: 425, top: 625, width: 380, height: 507 },
  { name: 'cynthia', left: 775, top: 580, width: 380, height: 507 },
  { name: 'shanice', left: 1055, top: 595, width: 380, height: 507 },
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
      .resize(600, 800)
      .jpeg({ quality: 92 })
      .toFile(outPath);
    console.log(`✅ ${crop.name}.jpg`);
  }
  console.log('\n🎉 4 portraits générés dans public/images/team/');
}

cropAll().catch(console.error);
