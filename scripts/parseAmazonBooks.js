const fs = require('fs');

const s67 = fs.readFileSync('scripts/candidate_script_67.txt', 'utf8');

// Let's locate the array of products
// Usually it's in a JSON object passed to a function or stored in a variable
// Let's find where "B0G7RKZNCN" appears
const startIdx = s67.indexOf('{"asin":"B0G7RKZNCN"');
console.log('startIdx:', startIdx);

// Let's find the closing square bracket for this array
let depth = 0;
let arrayStart = s67.lastIndexOf('[', startIdx);
console.log('arrayStart:', arrayStart);

// Let's find the matching ']'
let inString = false;
let escape = false;
let arrayEnd = -1;

for (let i = arrayStart; i < s67.length; i++) {
  const c = s67[i];
  if (escape) {
    escape = false;
    continue;
  }
  if (c === '\\') {
    escape = true;
    continue;
  }
  if (c === '"') {
    inString = !inString;
    continue;
  }
  if (!inString) {
    if (c === '[') depth++;
    else if (c === ']') {
      depth--;
      if (depth === 0) {
        arrayEnd = i;
        break;
      }
    }
  }
}

console.log('arrayEnd:', arrayEnd);
if (arrayStart !== -1 && arrayEnd !== -1) {
  const jsonStr = s67.substring(arrayStart, arrayEnd + 1);
  try {
    const products = JSON.parse(jsonStr);
    console.log('Successfully parsed products! Count:', products.length);
    fs.writeFileSync('scripts/amazon_books.json', JSON.stringify(products, null, 2), 'utf8');
    
    products.forEach((p, idx) => {
      console.log(`\n--- Book ${idx + 1} ---`);
      console.log('ASIN:', p.asin);
      console.log('Title:', p.title?.displayString);
      console.log('Format:', p.bindingInformation?.binding?.displayString);
      console.log('Image:', p.productImages?.images?.[0]?.hiRes?.url || p.productImages?.images?.[0]?.lowRes?.url);
      console.log('Price:', p.prices?.price?.displayString || p.buyingOptions?.[0]?.price?.displayString || 'Available on Amazon');
      console.log('Rating:', p.customerReviews?.starRating?.displayString || 'N/A');
    });
  } catch (err) {
    console.error('JSON parse error:', err.message);
    fs.writeFileSync('scripts/failed_json.txt', jsonStr, 'utf8');
  }
}
