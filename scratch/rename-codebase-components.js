import fs from 'fs';
import path from 'path';

const WORKSPACE_DIR = 'd:/thulasi/thulasi-constructions';
const SRC_DIR = path.join(WORKSPACE_DIR, 'src');

const renameRegistry = [
  // Layouts
  {
    oldPath: 'src/layouts/BaseLayout.astro',
    newPath: 'src/layouts/engineering-authority-layout.astro',
    oldImport: 'BaseLayout.astro',
    newImport: 'engineering-authority-layout.astro',
    oldName: 'BaseLayout',
    newName: 'engineering-authority-layout' // Tag name or reference name
  },
  {
    oldPath: 'src/layouts/BlogLayout.astro',
    newPath: 'src/layouts/editorial-blog-layout.astro',
    oldImport: 'BlogLayout.astro',
    newImport: 'editorial-blog-layout.astro',
    oldName: 'BlogLayout',
    newName: 'editorial-blog-layout'
  },
  {
    oldPath: 'src/layouts/ServiceDetailLayout.astro',
    newPath: 'src/layouts/turnkey-service-detail-layout.astro',
    oldImport: 'ServiceDetailLayout.astro',
    newImport: 'turnkey-service-detail-layout.astro',
    oldName: 'ServiceDetailLayout',
    newName: 'turnkey-service-detail-layout'
  },
  
  // Common Components
  {
    oldPath: 'src/components/common/Header.astro',
    newPath: 'src/components/common/thulasi-branding-header.astro',
    oldImport: 'Header.astro',
    newImport: 'thulasi-branding-header.astro',
    oldName: 'Header',
    newName: 'thulasi-branding-header'
  },
  {
    oldPath: 'src/components/common/Footer.astro',
    newPath: 'src/components/common/engineering-authority-footer.astro',
    oldImport: 'Footer.astro',
    newImport: 'engineering-authority-footer.astro',
    oldName: 'Footer',
    newName: 'engineering-authority-footer'
  },
  {
    oldPath: 'src/components/common/Chatbot.astro',
    newPath: 'src/components/common/whatsapp-chatbot-widget.astro',
    oldImport: 'Chatbot.astro',
    newImport: 'whatsapp-chatbot-widget.astro',
    oldName: 'Chatbot',
    newName: 'whatsapp-chatbot-widget'
  },
  {
    oldPath: 'src/components/common/FloatingActions.astro',
    newPath: 'src/components/common/floating-action-triggers.astro',
    oldImport: 'FloatingActions.astro',
    newImport: 'floating-action-triggers.astro',
    oldName: 'FloatingActions',
    newName: 'floating-action-triggers'
  },

  // Service Features
  {
    oldPath: 'src/components/features/services/Hero.astro',
    newPath: 'src/components/features/services/premium-hero-construction.astro',
    oldImport: 'Hero.astro',
    newImport: 'premium-hero-construction.astro',
    oldName: 'Hero',
    newName: 'premium-hero-construction'
  },
  {
    oldPath: 'src/components/features/services/Welcome.astro',
    newPath: 'src/components/features/services/turnkey-authority-ribbon.astro',
    oldImport: 'Welcome.astro',
    newImport: 'turnkey-authority-ribbon.astro',
    oldName: 'Welcome',
    newName: 'turnkey-authority-ribbon'
  },
  {
    oldPath: 'src/components/features/services/ServicesCard.astro',
    newPath: 'src/components/features/services/construction-services-card.astro',
    oldImport: 'ServicesCard.astro',
    newImport: 'construction-services-card.astro',
    oldName: 'ServicesCard',
    newName: 'construction-services-card'
  },

  // Project Features
  {
    oldPath: 'src/components/features/projects/ProjectCard.astro',
    newPath: 'src/components/features/projects/portfolio-project-card.astro',
    oldImport: 'ProjectCard.astro',
    newImport: 'portfolio-project-card.astro',
    oldName: 'ProjectCard',
    newName: 'portfolio-project-card'
  },
  {
    oldPath: 'src/components/features/projects/ProjectShowcase.astro',
    newPath: 'src/components/features/projects/dynamic-project-masonry.astro',
    oldImport: 'ProjectShowcase.astro',
    newImport: 'dynamic-project-masonry.astro',
    oldName: 'ProjectShowcase',
    newName: 'dynamic-project-masonry'
  },

  // SEO Features
  {
    oldPath: 'src/components/features/seo/FAQSection.astro',
    newPath: 'src/components/features/seo/civil-engineering-faqs.astro',
    oldImport: 'FAQSection.astro',
    newImport: 'civil-engineering-faqs.astro',
    oldName: 'FAQSection',
    newName: 'civil-engineering-faqs'
  },
  {
    oldPath: 'src/components/features/seo/AreasServed.astro',
    newPath: 'src/components/features/seo/trichy-locality-showcase.astro',
    oldImport: 'AreasServed.astro',
    newImport: 'trichy-locality-showcase.astro',
    oldName: 'AreasServed',
    newName: 'trichy-locality-showcase'
  }
];

async function main() {
  console.log('--- Phase 1: Physical File Renames ---');
  
  for (const item of renameRegistry) {
    const oldFull = path.join(WORKSPACE_DIR, item.oldPath);
    const newFull = path.join(WORKSPACE_DIR, item.newPath);
    
    if (fs.existsSync(oldFull)) {
      // Ensure target directory exists
      const targetDir = path.dirname(newFull);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      
      fs.renameSync(oldFull, newFull);
      console.log(`Renamed: ${item.oldPath} ➔ ${item.newPath}`);
    } else {
      console.warn(`WARNING: File already moved or missing: ${item.oldPath}`);
    }
  }

  console.log('\n--- Phase 2: Updating Imports & Tag References across Codebase ---');
  
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

    for (const item of renameRegistry) {
      // 1. Match import lines: import Name from 'path/Old.astro' or from "path/Old.astro"
      // Match exactly import <Name> from
      const importPattern1 = new RegExp(`import\\s+([A-Za-z0-9_]+)\\s+from\\s+['"]([^'"]*)${item.oldImport}['"]`, 'g');
      if (importPattern1.test(content)) {
        content = content.replace(importPattern1, (match, p1, p2) => {
          // Replace both the import path and standard symbol usage
          return `import ${p1} from '${p2}${item.newImport}'`;
        });
        console.log(`  [Import Update] Refactored import for ${item.oldImport} ➔ ${item.newImport} in ${path.basename(filePath)}`);
        textReplacementCount++;
        matchesFound = true;
      }
      
      // 2. Match tag usage in Astro template code: <Name ... /> or <Name>...</Name>
      // Only perform JSX tag replacement if we can verify the tag name is used
      const tagPatternOpen = new RegExp(`<${item.oldName}(\\s|>)`, 'g');
      const tagPatternClose = new RegExp(`</${item.oldName}>`, 'g');
      
      if (tagPatternOpen.test(content) || tagPatternClose.test(content)) {
        // Replace tag references
        content = content.replace(tagPatternOpen, `<${item.oldName}$1`); // keep as is or rename if variable is changed
        // In Astro, if we imported it as `BaseLayout`, Astro uses `BaseLayout` variable.
        // Wait, to keep compilation perfectly safe, keeping the dynamic variable binding variable names
        // like "BaseLayout" is completely valid and standard, but let's check if the variable itself is renamed
        // or if we keep the variable imported name standard. 
        // Keeping imported identifier name matching ensures 100% zero JS runtime compilation scoping errors!
      }
    }

    if (matchesFound && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fileModifiedCount++;
    }
  });

  console.log(`\nRefactoring Complete!`);
  console.log(`- Files updated in codebase: ${fileModifiedCount}`);
  console.log(`- Total path strings updated: ${textReplacementCount}`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
});
