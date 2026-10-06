const fs = require('fs');
const path = require('path');

const base = 'd:/mci/mci screens/stitch_marine_corporation_digital_redesign';
const dirs = fs.readdirSync(base);
const result = {};

dirs.forEach(d => {
  const p = path.join(base, d, 'code.html');
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
    result[d] = imgMatches.map(m => {
      const full = m[0];
      const src = m[1];
      const altMatch = full.match(/alt=["']([^"']*)["']/i) || full.match(/data-alt=["']([^"']*)["']/i);
      return {
        src,
        alt: altMatch ? altMatch[1] : ''
      };
    });
  }
});

fs.writeFileSync('d:/mci/image_manifest.json', JSON.stringify(result, null, 2));
console.log('Processed', Object.keys(result).length, 'pages.');
let total = 0;
for (const k in result) {
  total += result[k].length;
  console.log(`${k}: ${result[k].length} images`);
}
console.log('Total images:', total);
