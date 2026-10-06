import { pipeline, env, RawImage } from '@xenova/transformers';
import fs from 'fs';
import path from 'path';

env.allowLocalModels = false;

async function run() {
  console.log('Loading segmentation pipeline with briaai/RMBG-1.4...');
  const segmenter = await pipeline('image-segmentation', 'briaai/RMBG-1.4');
  console.log('Pipeline loaded! Reading input image...');

  const inputPath = 'c:\\Users\\DELL\\Desktop\\Portfilo\\IMG-20251206-WA0000.jpg';
  const image = await RawImage.read(inputPath);
  console.log('Image dimensions:', image.width, image.height);

  console.log('Running segmentation...');
  const output = await segmenter(image);
  console.log('Segmentation completed! Output keys:', Object.keys(output));

  // output is a RawImage or mask
  await output.save('c:\\Users\\DELL\\Desktop\\Portfilo\\public\\images\\cutout.png');
  console.log('Saved cutout to public/images/cutout.png');
}

run().catch(console.error);
