const fs = require('fs');

const s67 = fs.readFileSync('scripts/candidate_script_67.txt', 'utf8');
const s65 = fs.readFileSync('scripts/candidate_script_65.txt', 'utf8');

function extractBooks(scriptText, label) {
  console.log(`\n=== Checking ${label} ===`);
  // Look for JSON objects representing products
  // Often Amazon has: "entityList": [ ... ] or "items": [ ... ]
  // Let's find index of "B0G7RKZNCN"
  let pos = 0;
  while ((pos = scriptText.indexOf('"asin":"B0', pos)) !== -1) {
    // Find the enclosing object or surrounding 2500 characters backwards and forwards
    const start = Math.max(0, pos - 1000);
    const end = Math.min(scriptText.length, pos + 3000);
    const slice = scriptText.substring(start, end);
    
    // Check for title, asin, image, price
    const asinMatch = scriptText.substring(pos, pos + 50).match(/"asin":"([^"]+)"/);
    const asin = asinMatch ? asinMatch[1] : 'unknown';
    
    // Look for title around this asin
    // Let's search within 2000 chars forward and backward
    let title = 'N/A';
    const titleMatch = slice.match(/"title"\s*:\s*\{\s*"displayString"\s*:\s*"([^"]+)"\s*\}/);
    if (titleMatch) title = titleMatch[1];
    
    let img = 'N/A';
    const imgMatch = slice.match(/https:\/\/m\.media-amazon\.com\/images\/I\/[a-zA-Z0-9%_\-\.]+\.jpg/);
    if (imgMatch) img = imgMatch[0];

    console.log(`ASIN: ${asin} | Title: ${title} | Img: ${img}`);
    pos += 15;
  }
}

extractBooks(s65, 'Script 65');
extractBooks(s67, 'Script 67');
