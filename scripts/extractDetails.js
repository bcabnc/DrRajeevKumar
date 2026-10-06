const fs = require('fs');

const s67 = fs.readFileSync('scripts/candidate_script_67.txt', 'utf8');

// Try to find JSON objects inside s67
const jsonMatch = s67.match(/\{[\s\S]*\}/);
if (jsonMatch) {
  try {
    // Sometimes scripts are window.P.register or similar or have raw JSON
    // Let's search for the items array
    const books = [];
    const itemRegex = /\{"asin":"([^"]+)"[\s\S]*?"title":\{"displayString":"([^"]+)"\}[\s\S]*?\}/g;
    
    // Let's find all occurrences of titles and their associated metadata
    console.log('Script 67 length:', s67.length);
  } catch (e) {
    console.error(e);
  }
}

// Let's write a regex parser to extract full book objects from content
const content = fs.readFileSync('C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\043df4e5-5b4e-4505-b705-cf92715d9ae8\\.system_generated\\steps\\296\\content.md', 'utf8');

// Let's inspect where B0G7RKZNCN, B0GX31ZGK2, B0GSZ54PTC, B0GPHMQHQ2 appear
const asins = ['B0G7RKZNCN', 'B0GX31ZGK2', 'B0GSZ54PTC', 'B0GPHMQHQ2'];
for (const asin of asins) {
  let pos = content.indexOf(asin);
  console.log(`\n=== ASIN: ${asin} ===`);
  while (pos !== -1) {
    console.log(`Pos: ${pos}`);
    // print 500 chars after pos
    console.log(content.slice(pos, pos + 400));
    pos = content.indexOf(asin, pos + 1);
    break; // just first
  }
}
