const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const ort = require('onnxruntime-node');

const MODEL_PATH = path.join(__dirname, 'models', 'u2netp.onnx');
const INPUT_IMAGE = 'c:\\Users\\DELL\\Desktop\\Portfilo\\IMG-20251206-WA0000.jpg';

async function run() {
  console.log('Loading input image...');
  const meta = await sharp(INPUT_IMAGE).metadata();
  const origW = meta.width;
  const origH = meta.height;

  // 1. Run U2NetP to get base mask
  const resizedBuffer = await sharp(INPUT_IMAGE)
    .resize(320, 320, { fit: 'fill' })
    .removeAlpha()
    .raw()
    .toBuffer();

  const float32Data = new Float32Array(3 * 320 * 320);
  const mean = [0.485, 0.456, 0.406];
  const std = [0.229, 0.224, 0.225];

  for (let i = 0; i < 320 * 320; i++) {
    const r = resizedBuffer[i * 3] / 255.0;
    const g = resizedBuffer[i * 3 + 1] / 255.0;
    const b = resizedBuffer[i * 3 + 2] / 255.0;
    float32Data[i] = (r - mean[0]) / std[0];
    float32Data[320 * 320 + i] = (g - mean[1]) / std[1];
    float32Data[2 * 320 * 320 + i] = (b - mean[2]) / std[2];
  }

  const tensor = new ort.Tensor('float32', float32Data, [1, 3, 320, 320]);
  const session = await ort.InferenceSession.create(MODEL_PATH);
  const feeds = {};
  feeds[session.inputNames[0]] = tensor;
  const results = await session.run(feeds);
  const outData = results[session.outputNames[0]].data;

  // Find min and max
  let min = Infinity, max = -Infinity;
  for (let i = 0; i < outData.length; i++) {
    if (outData[i] < min) min = outData[i];
    if (outData[i] > max) max = outData[i];
  }

  // Convert to 320x320 byte mask
  const mask320 = new Uint8Array(320 * 320);
  for (let i = 0; i < 320 * 320; i++) {
    const norm = (outData[i] - min) / (max - min);
    // Use threshold curve to produce sharp subject boundary
    let val = 0;
    if (norm > 0.45) {
      val = Math.min(255, Math.round(((norm - 0.45) / 0.35) * 255));
    }
    mask320[i] = val;
  }

  // Upscale mask to original dimensions
  const fullMask = await sharp(mask320, {
    raw: { width: 320, height: 320, channels: 1 }
  })
    .resize(origW, origH, { fit: 'fill', kernel: 'lanczos3' })
    .toColourspace('b-w')
    .raw()
    .toBuffer();

  const origRgb = await sharp(INPUT_IMAGE).removeAlpha().raw().toBuffer();
  const refinedRgba = Buffer.alloc(origW * origH * 4);

  // Clean up wire and edge artifacts
  for (let y = 0; y < origH; y++) {
    for (let x = 0; x < origW; x++) {
      const idx = y * origW + x;
      const rgbIdx = idx * 3;
      const rgbaIdx = idx * 4;

      let r = origRgb[rgbIdx];
      let g = origRgb[rgbIdx + 1];
      let b = origRgb[rgbIdx + 2];
      let a = fullMask[idx];

      // 1. Remove hanging wire above hair (top area y < 195)
      if (y < 195) {
        a = 0;
      }

      // 2. Remove far left edge clutter if any (x < 20)
      if (x < 20 && y < 700) {
        a = 0;
      }

      // 3. Green fringe desaturation / edge decontamination
      // If alpha is partial or pixel is on edge with wall green tint:
      if (a > 0 && a < 255) {
        // If greenish wall color spilled into edge hair
        if (g > r && g > b) {
          const lum = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
          r = Math.min(r, lum);
          g = Math.min(g, Math.round((r + b) / 2));
          b = Math.min(b, lum);
        }
      }

      // If hair boundary (around top of head y between 195 and 330):
      if (y >= 195 && y < 330 && a > 10) {
        if (g > 115 && g > r + 3) {
          a = Math.max(0, Math.round(a * 0.15));
        }
      }

      refinedRgba[rgbaIdx] = r;
      refinedRgba[rgbaIdx + 1] = g;
      refinedRgba[rgbaIdx + 2] = b;
      refinedRgba[rgbaIdx + 3] = a;
    }
  }

  // Save refined transparent cutout
  const transparentPngPath = path.join(__dirname, '..', 'public', 'images', 'dr-rajeev-kumar-transparent.png');
  await sharp(refinedRgba, { raw: { width: origW, height: origH, channels: 4 } })
    .png()
    .toFile(transparentPngPath);
  console.log('Saved refined transparent PNG to:', transparentPngPath);

  // 2. Composite onto Prestigious Academic Studio Backdrop
  // Create rich studio background: deep obsidian `#0b0e14` with soft warm gold ambient backlight
  const studioBgSvg = `
    <svg width="${origW}" height="${origH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Deep rich vignette -->
        <radialGradient id="vignette" cx="48%" cy="36%" r="62%">
          <stop offset="0%" stop-color="#1e2330" />
          <stop offset="45%" stop-color="#121620" />
          <stop offset="75%" stop-color="#0a0d14" />
          <stop offset="100%" stop-color="#05070a" />
        </radialGradient>
        <!-- Soft academic gold backlight behind head -->
        <radialGradient id="goldBacklight" cx="46%" cy="32%" r="35%">
          <stop offset="0%" stop-color="#dfba73" stop-opacity="0.18" />
          <stop offset="50%" stop-color="#c59b48" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#dfba73" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#vignette)" />
      <rect width="100%" height="100%" fill="url(#goldBacklight)" />
    </svg>
  `;

  const bgBuffer = await sharp(Buffer.from(studioBgSvg))
    .resize(origW, origH)
    .toBuffer();

  const sitePortraitPath = path.join(__dirname, '..', 'public', 'images', 'dr-rajeev-kumar.jpg');
  await sharp(bgBuffer)
    .composite([
      { input: transparentPngPath, top: 0, left: 0 }
    ])
    .jpeg({ quality: 96 })
    .toFile(sitePortraitPath);
  console.log('Saved refined studio portrait to:', sitePortraitPath);

  // 3. Generate Favicon with clean centered headshot (transparent background)
  // Head center is approx x: 470, y: 380
  // Size: 520x520 box
  const headBox = {
    left: Math.round(origW * 0.17),
    top: Math.round(origH * 0.14),
    width: Math.round(origW * 0.65),
    height: Math.round(origW * 0.65)
  };

  const faviconPath = path.join(__dirname, '..', 'src', 'app', 'icon.png');
  const faviconPublicPng = path.join(__dirname, '..', 'public', 'favicon.png');
  const faviconPublicIco = path.join(__dirname, '..', 'public', 'favicon.ico');

  // App icon (512x512)
  await sharp(transparentPngPath)
    .extract(headBox)
    .resize(512, 512)
    .png()
    .toFile(faviconPath);

  // Public favicon png (64x64)
  await sharp(transparentPngPath)
    .extract(headBox)
    .resize(64, 64)
    .png()
    .toFile(faviconPublicPng);

  // Public favicon ico (32x32)
  await sharp(transparentPngPath)
    .extract(headBox)
    .resize(32, 32)
    .png()
    .toFile(faviconPublicIco);

  console.log('Favicons generated cleanly!');
}

run().catch(console.error);
