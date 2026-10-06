const sharp = require('sharp');
const path = require('path');

const imgPath = 'c:\\Users\\DELL\\Desktop\\Portfilo\\IMG-20251206-WA0000.jpg';

sharp(imgPath)
  .metadata()
  .then(meta => {
    console.log('Image Metadata:', {
      width: meta.width,
      height: meta.height,
      format: meta.format,
      space: meta.space,
      channels: meta.channels,
      hasAlpha: meta.hasAlpha
    });
  })
  .catch(console.error);
