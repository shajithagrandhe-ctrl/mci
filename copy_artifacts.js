const fs = require('fs');
const path = require('path');

const srcDir = 'd:/mci/mci screens/stitch_marine_corporation_digital_redesign';
const destDir = 'C:/Users/my pc/.gemini/antigravity-ide/brain/eb9182e2-bee5-43e6-ba22-b18be6a9cabc/screens';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const dirs = fs.readdirSync(srcDir);
dirs.forEach(d => {
  const src = path.join(srcDir, d, 'screen.png');
  if (fs.existsSync(src)) {
    const dest = path.join(destDir, `${d}.png`);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${d}.png`);
  }
});

// Also copy the original reference pngs
const refDir = 'd:/mci/reference';
['about us.png', 'activities.png', 'contact.png', 'global presence.png', 'group.png'].forEach(f => {
  const p = path.join(refDir, f);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(destDir, `verified_${f.replace(/\s+/g, '_')}`));
    console.log(`Copied verified_${f}`);
  }
});
console.log('Finished copying screen artifacts.');
