const fs = require('fs');
const https = require('https');
const path = require('path');

const books = JSON.parse(fs.readFileSync('scripts/amazon_books.json', 'utf8'));

const outDir = path.join(__dirname, '..', 'public', 'images', 'books');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const extracted = [];
  
  for (let i = 0; i < books.length; i++) {
    const b = books[i];
    const asin = b.asin;
    let title = b.title?.displayString || '';
    // Clean up title if it has "Book " prefix
    if (title.startsWith('Book ')) {
      title = title.replace(/^Book\s+/, '');
    }
    const binding = b.bindingInformation?.binding?.displayString || 'Kindle Edition';
    const imgUrl = b.productImages?.images?.[0]?.hiRes?.url || b.productImages?.images?.[0]?.lowRes?.url;
    
    // Find buy price
    let price = '₹449.00';
    try {
      const opts = b.buyingOptions || [];
      for (const opt of opts) {
        if (opt.price?.priceToPay?.moneyValueOrRange?.value?.displayString) {
          price = opt.price.priceToPay.moneyValueOrRange.value.displayString;
        } else if (opt.price?.priceToPay?.priceMessage?.replacementText?.money?.displayString) {
          // might be free with kindle unlimited
        }
      }
    } catch (e) {}

    const filename = `book-${asin}.jpg`;
    const localPath = path.join(outDir, filename);

    console.log(`Downloading cover for: ${title} (${asin})...`);
    if (imgUrl) {
      await downloadImage(imgUrl, localPath);
      console.log(`Saved to ${localPath}`);
    }

    const amazonUrl = `https://www.amazon.in/dp/${asin}`;

    extracted.push({
      id: `book-${asin.toLowerCase()}`,
      asin,
      title,
      binding,
      price,
      coverUrl: `/images/books/${filename}`,
      originalImgUrl: imgUrl,
      amazonUrl,
      author: 'Dr. Rajeev Kumar',
      featured: i === 0 || i === 1 // highlight first two as featured
    });
  }

  console.log('\n--- EXTRACTED BOOKS ---');
  console.log(JSON.stringify(extracted, null, 2));

  fs.writeFileSync('scripts/clean_books.json', JSON.stringify(extracted, null, 2), 'utf8');
}

run().catch(console.error);
