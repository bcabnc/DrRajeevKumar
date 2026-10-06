const fs = require('fs');
const path = require('path');
const https = require('https');
const ort = require('onnxruntime-node');
const sharp = require('sharp');

const MODEL_DIR = path.join(__dirname, 'models');
const MODEL_PATH = path.join(MODEL_DIR, 'u2netp.onnx');
const MODEL_URL = 'https://github.com/danielgatis/rembg/releases/download/v0.0.0/u2netp.onnx';

const INPUT_IMAGE = 'c:\\Users\\DELL\\Desktop\\Portfilo\\IMG-20251206-WA0000.jpg';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

async function ensureModel() {
  if (!fs.existsSync(MODEL_DIR)) {
    fs.mkdirSync(MODEL_DIR, { recursive: true });
  }
  if (!fs.existsSync(MODEL_PATH) || fs.statSync(MODEL_PATH).size < 1000000) {
    console.log('Downloading u2netp ONNX model (~4.5MB)...');
    await downloadFile(MODEL_URL, MODEL_PATH);
    console.log('Model downloaded successfully to:', MODEL_PATH);
  } else {
    console.log('Model already exists at:', MODEL_PATH);
  }
}

async function processImage() {
  await ensureModel();

  console.log('Loading input image...');
  const inputMetadata = await sharp(INPUT_IMAGE).metadata();
  const origW = inputMetadata.width;
  const origH = inputMetadata.height;
  console.log(`Original dimensions: ${origW}x${origH}`);

  // u2netp expects 320x320 NCHW tensor with RGB normalized: (x / 255 - mean) / std
  // mean = [0.485, 0.456, 0.406], std = [0.229, 0.224, 0.225]
  console.log('Resizing to 320x320 for U2NetP model...');
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

    float32Data[i] = (r - mean[0]) / std[0]; // Channel 0 (R)
    float32Data[320 * 320 + i] = (g - mean[1]) / std[1]; // Channel 1 (G)
    float32Data[2 * 320 * 320 + i] = (b - mean[2]) / std[2]; // Channel 2 (B)
  }

  const tensor = new ort.Tensor('float32', float32Data, [1, 3, 320, 320]);

  console.log('Initializing ONNX InferenceSession...');
  const session = await ort.InferenceSession.create(MODEL_PATH);
  const feeds = {};
  const inputName = session.inputNames[0];
  feeds[inputName] = tensor;

  console.log('Running inference...');
  const results = await session.run(feeds);
  const outputName = session.outputNames[0];
  const outputTensor = results[outputName];
  const outData = outputTensor.data;

  // Find min and max to normalize mask
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < outData.length; i++) {
    const val = outData[i];
    if (val < min) min = val;
    if (val > max) max = val;
  }
  console.log(`Mask output range: min=${min}, max=${max}`);

  // Convert to grayscale 320x320 byte mask
  const maskBytes = new Uint8Array(320 * 320);
  for (let i = 0; i < 320 * 320; i++) {
    const norm = (outData[i] - min) / (max - min);
    // Sigmoid or power curve to sharpen edges
    const enhanced = Math.pow(norm, 1.2);
    maskBytes[i] = Math.round(enhanced * 255);
  }

  console.log('Upscaling mask to original dimensions...');
  const fullMaskBuffer = await sharp(maskBytes, {
    raw: { width: 320, height: 320, channels: 1 }
  })
    .resize(origW, origH, { fit: 'fill', kernel: 'lanczos3' })
    .toColourspace('b-w')
    .raw()
    .toBuffer();

  // Combine original image with mask to create transparent PNG
  console.log('Creating transparent cutout...');
  const origRgb = await sharp(INPUT_IMAGE).removeAlpha().raw().toBuffer();
  const rgbaBuffer = Buffer.alloc(origW * origH * 4);

  for (let i = 0; i < origW * origH; i++) {
    rgbaBuffer[i * 4] = origRgb[i * 3];
    rgbaBuffer[i * 4 + 1] = origRgb[i * 3 + 1];
    rgbaBuffer[i * 4 + 2] = origRgb[i * 3 + 2];
    rgbaBuffer[i * 4 + 3] = fullMaskBuffer[i];
  }

  const transparentPngPath = path.join(__dirname, '..', 'public', 'images', 'dr-rajeev-kumar-transparent.png');
  await sharp(rgbaBuffer, { raw: { width: origW, height: origH, channels: 4 } })
    .png()
    .toFile(transparentPngPath);
  console.log('Transparent cutout saved to:', transparentPngPath);

  // 1. GENERATE SITE PORTRAIT with prestigious academic studio background
  console.log('Generating academic studio portrait for website...');
  // Create an elegant dark studio backdrop with subtle radial glow and vignette
  // Background dimensions: origW x origH
  const studioBgSvg = `
    <svg width="${origW}" height="${origH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="studioGlow" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#2a2e3d" />
          <stop offset="35%" stop-color="#181c26" />
          <stop offset="70%" stop-color="#0e121a" />
          <stop offset="100%" stop-color="#07090e" />
        </radialGradient>
        <radialGradient id="warmLight" cx="42%" cy="30%" r="40%">
          <stop offset="0%" stop-color="#dfba73" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#dfba73" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#studioGlow)" />
      <rect width="100%" height="100%" fill="url(#warmLight)" />
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
  console.log('Academic studio portrait saved to:', sitePortraitPath);

  // 2. GENERATE FAVICON (Crop headshot, transparent bg, square)
  console.log('Generating transparent headshot favicon...');
  // Head is located around x: 230 to 730, y: 120 to 620 (approx 500x500 box)
  const headBox = {
    left: Math.round(origW * 0.18),
    top: Math.round(origH * 0.10),
    width: Math.round(origW * 0.64),
    height: Math.round(origW * 0.64)
  };

  const faviconPath = path.join(__dirname, '..', 'src', 'app', 'icon.png');
  const faviconPublicIco = path.join(__dirname, '..', 'public', 'favicon.ico');
  const faviconPublicPng = path.join(__dirname, '..', 'public', 'favicon.png');

  // Generate 512x512 transparent favicon headshot
  await sharp(transparentPngPath)
    .extract(headBox)
    .resize(512, 512)
    .png()
    .toFile(faviconPath);

  await sharp(transparentPngPath)
    .extract(headBox)
    .resize(64, 64)
    .png()
    .toFile(faviconPublicPng);

  // Also write 32x32 to public/favicon.ico
  await sharp(transparentPngPath)
    .extract(headBox)
    .resize(32, 32)
    .png()
    .toFile(faviconPublicIco);

  console.log('Favicons generated successfully at:', faviconPath, faviconPublicPng, faviconPublicIco);
}

processImage().catch(console.error);
