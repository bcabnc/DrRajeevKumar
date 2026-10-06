const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const ort = require('onnxruntime-node');

const MODEL_PATH = path.join(__dirname, 'models', 'u2netp.onnx');
const INPUT_IMAGE = path.join(__dirname, '..', 'Professional Office Portrait with Plant and Books.png');

async function processOfficePortrait() {
  console.log('Loading Professional Office Portrait...');
  const meta = await sharp(INPUT_IMAGE).metadata();
  const origW = meta.width;
  const origH = meta.height;
  console.log(`Dimensions: ${origW}x${origH}`);

  // 1. Save optimized site portrait to public/images/dr-rajeev-kumar.jpg
  const targetJpg = path.join(__dirname, '..', 'public', 'images', 'dr-rajeev-kumar.jpg');
  await sharp(INPUT_IMAGE)
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(targetJpg);
  console.log('Optimized site portrait saved to:', targetJpg);

  // 2. Perform AI background removal on headshot for pristine favicon
  console.log('Generating transparent headshot favicon...');
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

  let min = Infinity, max = -Infinity;
  for (let i = 0; i < outData.length; i++) {
    const v = outData[i];
    if (v < min) min = v;
    if (v > max) max = v;
  }

  const mask320 = new Uint8Array(320 * 320);
  for (let i = 0; i < 320 * 320; i++) {
    const norm = (outData[i] - min) / (max - min);
    let val = 0;
    if (norm > 0.4) {
      val = Math.min(255, Math.round(((norm - 0.4) / 0.4) * 255));
    }
    mask320[i] = val;
  }

  const fullMask = await sharp(mask320, {
    raw: { width: 320, height: 320, channels: 1 }
  })
    .resize(origW, origH, { fit: 'fill', kernel: 'lanczos3' })
    .toColourspace('b-w')
    .raw()
    .toBuffer();

  const origRgb = await sharp(INPUT_IMAGE).removeAlpha().raw().toBuffer();
  const rgbaBuffer = Buffer.alloc(origW * origH * 4);

  for (let i = 0; i < origW * origH; i++) {
    rgbaBuffer[i * 4] = origRgb[i * 3];
    rgbaBuffer[i * 4 + 1] = origRgb[i * 3 + 1];
    rgbaBuffer[i * 4 + 2] = origRgb[i * 3 + 2];
    rgbaBuffer[i * 4 + 3] = fullMask[i];
  }

  const transparentHeadPng = path.join(__dirname, '..', 'public', 'images', 'dr-rajeev-kumar-transparent.png');
  await sharp(rgbaBuffer, { raw: { width: origW, height: origH, channels: 4 } })
    .png()
    .toFile(transparentHeadPng);

  // Crop headshot centered around Dr. Rajeev Kumar's head
  // Head is around x: 260 to 860, y: 140 to 740
  const headBox = {
    left: Math.round(origW * 0.22),
    top: Math.round(origH * 0.10),
    width: Math.round(origW * 0.62),
    height: Math.round(origW * 0.62)
  };

  const faviconPath = path.join(__dirname, '..', 'src', 'app', 'icon.png');
  const faviconPublicPng = path.join(__dirname, '..', 'public', 'favicon.png');
  const faviconPublicIco = path.join(__dirname, '..', 'public', 'favicon.ico');

  await sharp(transparentHeadPng)
    .extract(headBox)
    .resize(512, 512)
    .png()
    .toFile(faviconPath);

  await sharp(transparentHeadPng)
    .extract(headBox)
    .resize(64, 64)
    .png()
    .toFile(faviconPublicPng);

  await sharp(transparentHeadPng)
    .extract(headBox)
    .resize(32, 32)
    .png()
    .toFile(faviconPublicIco);

  console.log('Favicon headshots updated successfully!');
}

processOfficePortrait().catch(console.error);
