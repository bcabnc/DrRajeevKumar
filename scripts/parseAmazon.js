const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\043df4e5-5b4e-4505-b705-cf92715d9ae8\\.system_generated\\steps\\296\\content.md';
const content = fs.readFileSync(filePath, 'utf8');

console.log('File size:', content.length);

// Let's find JSON containing asins or titles
const products = [];
// Find all occurrences of "asin":"..." and extract their surroundings
const regex = /"asin"\s*:\s*"([^"]+)"[\s\S]*?"title"\s*:\s*\{"displayString"\s*:\s*"([^"]+)"\}/g;
let m;
while ((m = regex.exec(content)) !== null) {
  products.push({ asin: m[1], title: m[2] });
}

console.log('Regex products:', products);

// Let's also search for all ASIN blocks with images
const asinImgRegex = /"asin"\s*:\s*"([^"]+)"[\s\S]*?"url"\s*:\s*"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/g;
const asinImgs = [];
while ((m = asinImgRegex.exec(content)) !== null) {
  asinImgs.push({ asin: m[1], url: m[2] });
}
console.log('ASIN Images count:', asinImgs.length);
console.log('Sample ASIN Images:', asinImgs.slice(0, 10));

// Let's search for all JSON blocks in script tags and parse them if they contain books
const scripts = content.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
for (let i = 0; i < scripts.length; i++) {
  const s = scripts[i];
  if (s.includes('Introduction to the Big Data Analytics') || s.includes('B0GX31ZGK2')) {
    console.log(`Found candidate script index ${i}, length: ${s.length}`);
    fs.writeFileSync(`scripts/candidate_script_${i}.txt`, s, 'utf8');
  }
}

