import sharp from 'sharp';
import path from 'path';

const inputPath = path.resolve('public/images/hero/og-construction-company-trichy.webp');
const outputPathJpg = path.resolve('public/images/hero/og-construction-company-trichy.jpg');
const outputPathPng = path.resolve('public/images/hero/og-construction-company-trichy.png');

async function convert() {
  try {
    // Convert to JPG
    await sharp(inputPath)
      .jpeg({ quality: 90 })
      .toFile(outputPathJpg);
    console.log('Successfully converted to JPG!');

    // Convert to PNG
    await sharp(inputPath)
      .png()
      .toFile(outputPathPng);
    console.log('Successfully converted to PNG!');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

convert();
