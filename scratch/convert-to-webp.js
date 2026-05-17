import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const WORKSPACE_DIR = 'd:/thulasi/thulasi-constructions';
const PUBLIC_IMAGES_DIR = path.join(WORKSPACE_DIR, 'public/images');
const BRAN_GEN_IMAGE = 'C:/Users/varun/.gemini/antigravity/brain/fe87935b-5dc5-498c-9c20-13ab5d74f20c/og_construction_company_trichy_1779007961368.png';

async function main() {
  console.log('--- Phase 1: Social Open Graph Asset Conversion ---');
  
  const ogTargetWebp = path.join(PUBLIC_IMAGES_DIR, 'hero/og-construction-company-trichy.webp');
  if (fs.existsSync(BRAN_GEN_IMAGE)) {
    await sharp(BRAN_GEN_IMAGE)
      .webp({ quality: 85 })
      .toFile(ogTargetWebp);
    console.log(`Successfully generated OG WebP asset: ${ogTargetWebp}`);
  } else {
    console.warn(`WARNING: Brand image not found: ${BRAN_GEN_IMAGE}`);
  }

  console.log('\n--- Phase 2: Mass Conversion of JPG/PNG Assets to WebP ---');
  
  // Recursively find all JPG and PNG files in public/images
  const filesToConvert = [];
  
  function scanImages(dir) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.lstatSync(fullPath).isDirectory()) {
        scanImages(fullPath);
      } else {
        const ext = path.extname(fullPath).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext) && !file.endsWith('.webp')) {
          filesToConvert.push(fullPath);
        }
      }
    });
  }
  
  scanImages(PUBLIC_IMAGES_DIR);
  console.log(`Found ${filesToConvert.length} assets to convert to WebP...`);

  const pathReplacements = {};

  for (const oldFullPath of filesToConvert) {
    const ext = path.extname(oldFullPath);
    const newFullPath = oldFullPath.slice(0, -ext.length) + '.webp';
    
    try {
      // Perform the high-performance WebP conversion
      await sharp(oldFullPath)
        .webp({ quality: 80 })
        .toFile(newFullPath);
      
      // Calculate relative paths to update references in the codebase
      const oldRel = path.relative(PUBLIC_IMAGES_DIR, oldFullPath).replace(/\\/g, '/');
      const newRel = path.relative(PUBLIC_IMAGES_DIR, newFullPath).replace(/\\/g, '/');
      pathReplacements[oldRel] = newRel;
      
      console.log(`Converted: ${oldRel} ➔ ${newRel}`);
      
      // Physically delete the original larger asset
      fs.unlinkSync(oldFullPath);
      console.log(`Deleted original: ${oldRel}`);
    } catch (err) {
      console.error(`ERROR converting ${oldFullPath}:`, err);
    }
  }

  console.log('\n--- Phase 3: Codebase References Extension Refactoring ---');
  
  const SRC_DIR = path.join(WORKSPACE_DIR, 'src');

  function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.lstatSync(fullPath).isDirectory()) {
        walkDir(fullPath, callback);
      } else {
        const ext = path.extname(fullPath).toLowerCase();
        if (['.astro', '.js', '.ts', '.md', '.json'].includes(ext)) {
          callback(fullPath);
        }
      }
    });
  }

  let fileModifiedCount = 0;
  let textReplacementCount = 0;

  walkDir(SRC_DIR, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    let matchesFound = false;

    // Apply replacements for each converted asset
    for (const [oldRel, newRel] of Object.entries(pathReplacements)) {
      const oldAbsolute = `/images/${oldRel}`;
      const newAbsolute = `/images/${newRel}`;
      
      if (content.includes(oldAbsolute)) {
        const escaped = oldAbsolute.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        content = content.replace(new RegExp(escaped, 'g'), newAbsolute);
        console.log(`  [Code Update] ${oldAbsolute} ➔ ${newAbsolute} in ${path.basename(filePath)}`);
        textReplacementCount++;
        matchesFound = true;
      }
      
      const oldImport = `images/${oldRel}`;
      const newImport = `images/${newRel}`;
      if (content.includes(oldImport)) {
        const escaped = oldImport.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        content = content.replace(new RegExp(escaped, 'g'), newImport);
        console.log(`  [Code Update] ${oldImport} ➔ ${newImport} in ${path.basename(filePath)}`);
        textReplacementCount++;
        matchesFound = true;
      }
      
      // Also match base name references in JSON or data layers
      const oldBare = oldRel.replace(/^services\//, '').replace(/^projects\//, '').replace(/^localities\//, '').replace(/^hero\//, '');
      const newBare = newRel.replace(/^services\//, '').replace(/^projects\//, '').replace(/^localities\//, '').replace(/^hero\//, '');
      if (content.includes(`"${oldBare}"`)) {
        content = content.replace(new RegExp(`"${oldBare}"`, 'g'), `"${newBare}"`);
        console.log(`  [Code Update] "${oldBare}" ➔ "${newBare}" in ${path.basename(filePath)}`);
        textReplacementCount++;
        matchesFound = true;
      }
    }

    // Standardize all standard open graph tags in layouts/BaseLayout.astro if applicable
    if (filePath.endsWith('BaseLayout.astro') && content.includes('/images/hero/thulasi-engineers-branding-logo.webp')) {
      content = content.replace(
        '/images/hero/thulasi-engineers-branding-logo.webp',
        '/images/hero/og-construction-company-trichy.webp'
      );
      console.log(`  [BaseLayout OG Update] Updated default social preview to: /images/hero/og-construction-company-trichy.webp`);
      textReplacementCount++;
      matchesFound = true;
    }

    if (matchesFound && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fileModifiedCount++;
    }
  });

  console.log(`\nRefactoring and conversion complete!`);
  console.log(`- Total files converted: ${Object.keys(pathReplacements).length}`);
  console.log(`- Files updated in codebase: ${fileModifiedCount}`);
  console.log(`- Total path strings updated: ${textReplacementCount}`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
});
