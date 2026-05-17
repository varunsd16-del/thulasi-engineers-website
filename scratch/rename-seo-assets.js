import fs from 'fs';
import path from 'path';

// Define the root workspace path
const WORKSPACE_DIR = 'd:/thulasi/thulasi-constructions';
const PUBLIC_IMAGES_DIR = path.join(WORKSPACE_DIR, 'public/images');

// 1. Define the exhaustively researched mapping from old relative path to new relative path.
const IMAGE_MAP = {
  // A. Root public/images/ files
  'Hero img.png': 'hero/thulasi-engineers-construction-company-trichy.png',
  'hero.webp': 'hero/premium-residential-builders-trichy.webp',
  'hero-bg.jpg': 'hero/civil-engineering-contractors-trichy-bg.jpg',
  'cta-bg.png': 'hero/turnkey-building-construction-trichy-cta-bg.png',
  'about-story.jpg': 'hero/thulasi-engineers-civil-contracting-story.jpg',
  'modern-building.png': 'hero/modern-architectural-elevation-trichy.png',
  'logo1.png': 'hero/thulasi-engineers-branding-logo.png',
  
  // B. Old root service details images (moving into services folder)
  'service-industrial.jpg': 'services/industrial-shed-peb-builders-trichy.jpg',
  'service-infrastructure.jpg': 'services/civil-infrastructure-development-trichy.jpg',
  'service-management.jpg': 'services/construction-project-management-pmc-trichy.jpg',
  'service-renovation.jpg': 'services/home-remodeling-renovation-builders-trichy.jpg',
  'service-safety.jpg': 'services/construction-site-safety-management-trichy.jpg',
  'service-sustainable.jpg': 'services/green-building-sustainable-construction-trichy.jpg',
  
  // C. Old root projects details images (moving into projects folder)
  'project-1.jpg': 'projects/luxury-villa-construction-srirangam.jpg',
  'project-2.jpg': 'projects/modern-commercial-complex-thillai-nagar.jpg',
  'project-3.jpg': 'projects/turnkey-residential-construction-kk-nagar.jpg',
  'project-4.jpg': 'projects/industrial-peb-warehouse-shed-thuvakudi.jpg',
  'project-5.jpg': 'projects/stormwater-drainage-civil-infrastructure-panjapur.jpg',
  'project-6.jpg': 'projects/structural-remodeling-home-renovation-woraiyur.jpg',
  'project-apartments.jpg': 'projects/multi-storey-residential-apartments-trichy.jpg',
  'project-industrial.jpg': 'projects/heavy-industrial-shed-construction-peb-trichy.jpg',
  'project-office.jpg': 'projects/corporate-office-building-construction-trichy.jpg',
  'project-renovation.jpg': 'projects/old-home-structural-strengthening-renovations-trichy.jpg',
  'project-road.jpg': 'projects/high-performance-asphalt-highway-road-construction-trichy.jpg',
  'project-sewage.jpg': 'projects/public-utility-stormwater-drainage-systems-trichy.jpg',
  'project-steel.jpg': 'projects/heavy-structural-steel-fabrication-peb-shed-trichy.jpg',

  // D. Services Subdirectory Files
  'services/Architecture & Planning.webp': 'services/3d-architectural-planning-dtcp-approvals-trichy.webp',
  'services/Building Construction.webp': 'services/residential-commercial-building-construction-trichy.webp',
  'services/Project Management Consultant.webp': 'services/pmc-project-management-consultants-trichy.webp',
  'services/Safety Management.webp': 'services/zero-accident-construction-safety-management-trichy.webp',
  'services/Sustainable Construction.webp': 'services/green-building-sustainable-construction-trichy.webp',
  'services/renovation & remodeling.webp': 'services/home-renovation-structural-remodeling-trichy.webp',
  'services/approvals.png': 'services/dtcp-corporation-building-plan-approvals-trichy.png',
  'services/architectural-plan.png': 'services/vastu-compliant-2d-drafting-floor-plans-trichy.png',
  'services/boq_documentation.png': 'services/bill-of-quantities-boq-technical-documentation-trichy.png',
  'services/budget_cost_control.png': 'services/construction-budget-estimation-cost-control-trichy.png',
  'services/commercial.png': 'services/commercial-building-construction-services-trichy.png',
  'services/compliance_audits.png': 'services/industrial-safety-regulations-compliance-audits-trichy.png',
  'services/eco_friendly_materials.png': 'services/eco-friendly-aac-block-sustainable-materials-trichy.png',
  'services/elevation-design.png': 'services/custom-3d-elevation-designs-trichy.png',
  'services/exterior_makeover.png': 'services/exterior-remodeling-facade-structural-makeover-trichy.png',
  'services/factory.png': 'services/pre-engineered-building-peb-industrial-shed-trichy.png',
  'services/green_buildings.png': 'services/leed-standard-green-building-consultants-trichy.png',
  'services/hazard_mitigation.png': 'services/construction-site-hazard-identification-mitigation-trichy.png',
  'services/indian_bridge_engineering.png': 'services/civil-infrastructure-bridge-flyover-engineering-trichy.png',
  'services/indian_commercial_buildings.png': 'services/turnkey-commercial-building-contractors-trichy.png',
  'services/indian_drainage_systems.png': 'services/urban-stormwater-drainage-systems-construction-trichy.png',
  'services/indian_industrial_sheds.png': 'services/heavy-manufacturing-peb-industrial-sheds-trichy.png',
  'services/indian_machine_foundations.png': 'services/zero-vibration-heavy-machine-foundations-engineering-trichy.png',
  'services/indian_religious_buildings.png': 'services/religious-temple-church-construction-trichy.png',
  'services/indian_roads_bridges.png': 'services/civil-infrastructure-roads-bridges-development-trichy.png',
  'services/indian_sidco_infrastructure.png': 'services/sidco-industrial-estate-infrastructure-development-trichy.png',
  'services/indian_warehouse.png': 'services/large-span-logistics-warehouse-builders-trichy.png',
  'services/industrial.jpg': 'services/factory-warehouse-peb-shed-builders-trichy.jpg',
  'services/institutional.png': 'services/institutional-school-college-builders-trichy.png',
  'services/interior-planning.png': 'services/modular-kitchen-bathroom-interior-space-planning-trichy.png',
  'services/kitchen_bathroom_upgrades.png': 'services/premium-kitchen-bathroom-remodeling-upgrades-trichy.png',
  'services/landscape_design.png': 'services/integrated-landscape-garden-outdoor-space-design-trichy.png',
  'services/material_procurement.png': 'services/transparent-construction-material-procurement-consulting-trichy.png',
  'services/public_utilities.png': 'services/public-utility-infrastructure-contractors-trichy.png',
  'services/quality-control.png': 'services/rigorous-structural-concrete-quality-control-testing-trichy.png',
  'services/rainwater_harvesting.png': 'services/smart-residential-rainwater-harvesting-systems-trichy.png',
  'services/religious.png': 'services/traditional-spiritual-temple-church-builders-trichy.png',
  'services/renovation.png': 'services/structural-strengthening-old-building-renovations-trichy.png',
  'services/residential.jpg': 'services/luxury-residential-villa-builders-srirangam.jpg',
  'services/road-construction.png': 'services/durable-asphalt-concrete-road-construction-trichy.png',
  'services/roads-bridges.png': 'services/civil-infrastructure-highway-roads-bridges-trichy.png',
  'services/safety_training.png': 'services/certified-worker-site-safety-training-drills-trichy.png',
  'services/site-supervision.png': 'services/turnkey-site-supervision-coordination-pmc-trichy.png',
  'services/site_development.png': 'services/large-scale-earthmoving-site-development-grading-trichy.png',
  'services/site_safety_engineering.png': 'services/on-site-safety-officer-engineering-protocols-trichy.png',
  'services/solar_integration.png': 'services/energy-efficient-solar-power-panel-integration-trichy.png',
  'services/timeline_management.png': 'services/advanced-construction-scheduling-timeline-management-trichy.png',
  'services/waterproofing_painting.png': 'services/damp-proofing-waterproofing-leakage-repair-painting-trichy.png',
  'services/energy_efficient_design.png': 'services/natural-cooling-aac-block-energy-efficient-design-trichy.png',
  'services/equipment_inspection.png': 'services/rigorous-crane-heavy-equipment-inspection-trichy.png',
  'services/service-architecture.jpg': 'services/3d-architectural-plans-aesthetic-render-trichy.jpg',
  'services/service-building.jpg': 'services/residential-villa-building-construction-site-trichy.jpg',

  // E. Localities and Site Subdirectory Files
  'site images/commercial_construction_trichy.png': 'localities/commercial-construction-contractors-trichy.png',
  'site images/real.webp': 'localities/luxury-residence-elevation-thulasi-engineers.webp',
  'site images/real1.webp': 'localities/modern-independent-villa-construction-srirangam.webp',
  'site images/site1.webp': 'localities/ongoing-residential-villa-construction-trichy.webp',
  'site images/site2.webp': 'localities/structural-concrete-framing-work-trichy.webp',
  'site images/site3.webp': 'localities/commercial-hub-structural-column-casting-trichy.webp',
  'site images/site4.webp': 'localities/brickwork-plastering-villa-construction-trichy.webp',
  'site images/site5.webp': 'localities/civil-engineers-site-inspection-quality-check-trichy.webp',
  'site images/site6.webp': 'localities/independent-villa-elevation-design-srirangam.webp',
  'site images/site7.webp': 'localities/heavy-peb-industrial-shed-framing-thuvakudi.webp',
  'site images/site8.webp': 'localities/stormwater-drain-civil-infrastructure-trichy.webp',
  'site images/site9.webp': 'localities/structural-renovation-plastering-old-home-trichy.webp',
  'site images/site10.webp': 'localities/vastu-compliant-architectural-drafting-office-trichy.webp',
  'site images/site11.webp': 'localities/site-supervision-timeline-management-trichy.webp',
  'site images/site12.webp': 'localities/site-safety-officer-construction-briefing-trichy.webp',
  'site images/site13.webp': 'localities/green-building-aac-block-masonry-trichy.webp',
  'site images/site14.webp': 'localities/luxury-villa-structural-foundation-casting-srirangam.webp',
  'site images/site15.webp': 'localities/ongoing-commercial-retail-complex-cantonment.webp',
  'site images/site16.webp': 'localities/residential-house-structural-columns-woraiyur.webp',
  'site images/site17.webp': 'localities/industrial-peb-warehouse-foundation-thuvakudi.webp',
  'site images/site18.webp': 'localities/civil-infrastructure-road-subbase-grading-trichy.webp',
  'site images/site19.webp': 'localities/home-renovation-damp-proofing-treatment-puthur.webp',
  'site images/site20.webp': 'localities/architectural-plans-approval-verification-trichy.webp',
  'site images/site21.webp': 'localities/project-management-procurement-cost-tracking-trichy.webp',
  'site images/site22.webp': 'localities/construction-site-ppe-compliance-safety-check-trichy.webp',
  'site images/site23.webp': 'localities/eco-friendly-fly-ash-brick-construction-trichy.webp',
  'site images/site24.webp': 'localities/luxury-villa-facade-elevation-design-srirangam.webp',
  'site images/site25.webp': 'localities/commercial-complex-interior-layout-planning-trichy.webp',
  'site images/site26.webp': 'localities/residential-villa-brickwork-ongoing-kk-nagar.webp',
  'site images/site27.webp': 'localities/industrial-peb-shed-portal-frames-erection-trichy.webp',
  'site images/site28.webp': 'localities/urban-roads-asphalt-laying-machinery-trichy.webp',
};

// 2. Perform the physical moves and directory creation
console.log('--- Phase 1: Physical File Reorganization ---');

// Create the semantic folder layout if they don't exist
const targetSubdirs = ['hero', 'services', 'projects', 'localities'];
targetSubdirs.forEach(dir => {
  const fullPath = path.join(PUBLIC_IMAGES_DIR, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created semantic directory: ${fullPath}`);
  }
});

// Relocate files physically
for (const [oldRel, newRel] of Object.entries(IMAGE_MAP)) {
  const oldFullPath = path.join(PUBLIC_IMAGES_DIR, oldRel);
  const newFullPath = path.join(PUBLIC_IMAGES_DIR, newRel);
  
  if (fs.existsSync(oldFullPath)) {
    // Ensure parent directory exists for newFullPath
    const parentDir = path.dirname(newFullPath);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
    
    fs.renameSync(oldFullPath, newFullPath);
    console.log(`Successfully migrated: ${oldRel} -> ${newRel}`);
  } else {
    // Check if it already migrated
    if (fs.existsSync(newFullPath)) {
      console.log(`Already migrated: ${newRel}`);
    } else {
      console.warn(`WARNING: Source file not found: ${oldFullPath}`);
    }
  }
}

// 3. Scan and replace references across all Astro, JS, TS, and MD files in the codebase
console.log('\n--- Phase 2: Dynamic Codebase Path Refactoring ---');

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

let refactorCount = 0;
let fileModifiedCount = 0;

walkDir(SRC_DIR, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  let matchesFound = false;
  
  // Replace each mapped path
  for (const [oldRel, newRel] of Object.entries(IMAGE_MAP)) {
    // Match exact absolute path with leading slash, e.g. "/images/Hero img.png" or "/images/site images/site1.webp"
    const oldAbsolute = `/images/${oldRel}`;
    const newAbsolute = `/images/${newRel}`;
    
    if (content.includes(oldAbsolute)) {
      // Escape for regex to prevent character mismatch
      const escapedOld = oldAbsolute.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(escapedOld, 'g');
      content = content.replace(regex, newAbsolute);
      console.log(`  [Path Match] Refactored ${oldAbsolute} -> ${newAbsolute} in ${path.basename(filePath)}`);
      refactorCount++;
      matchesFound = true;
    }
    
    // Also match relative imports or filenames if referenced, e.g. "Hero img.png" or "site images/site1.webp"
    const oldImport = `images/${oldRel}`;
    const newImport = `images/${newRel}`;
    if (content.includes(oldImport)) {
      const escapedOldImport = oldImport.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(escapedOldImport, 'g');
      content = content.replace(regex, newImport);
      console.log(`  [Import Match] Refactored ${oldImport} -> ${newImport} in ${path.basename(filePath)}`);
      refactorCount++;
      matchesFound = true;
    }

    // Match bare filename references in JSON arrays or data files
    const oldBareName = oldRel.replace('services/', '').replace('site images/', '');
    if (!oldRel.includes('/') && content.includes(`"${oldBareName}"`)) {
      const newBareName = newRel; // Uses path relative to public/images
      content = content.replace(new RegExp(`"${oldBareName}"`, 'g'), `"${newBareName}"`);
      console.log(`  [Bare Name Match] Refactored "${oldBareName}" -> "${newBareName}" in ${path.basename(filePath)}`);
      refactorCount++;
      matchesFound = true;
    }
  }
  
  if (matchesFound && content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fileModifiedCount++;
  }
});

console.log(`\nRefactoring Complete!`);
console.log(`- Files physically moved: ${Object.keys(IMAGE_MAP).length}`);
console.log(`- Files updated in codebase: ${fileModifiedCount}`);
console.log(`- Total path strings updated: ${refactorCount}`);
