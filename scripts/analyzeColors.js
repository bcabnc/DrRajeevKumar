const sharp = require('sharp');

async function analyze() {
  const image = sharp('c:\\Users\\DELL\\Desktop\\Portfilo\\IMG-20251206-WA0000.jpg');
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  function getPixel(x, y) {
    const idx = (y * w + x) * 3;
    return [data[idx], data[idx + 1], data[idx + 2]];
  }

  console.log('Top-Left (0, 0):', getPixel(0, 0));
  console.log('Top-Right (w-1, 0):', getPixel(w - 1, 0));
  console.log('Top-Center (w/2, 10):', getPixel(Math.floor(w / 2), 10));
  console.log('Left-Middle (10, h/2):', getPixel(10, Math.floor(h / 2)));
  console.log('Right-Middle (w-10, h/2):', getPixel(w - 10, Math.floor(h / 2)));
  console.log('Hair center (480, 260):', getPixel(480, 260));
  console.log('Face forehead (450, 340):', getPixel(450, 340));
  console.log('Vest chest (500, 800):', getPixel(500, 800));
}

analyze().catch(console.error);
