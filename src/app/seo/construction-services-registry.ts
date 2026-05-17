export interface ServiceEntity {
  id: string;
  name: string;
  slug: string;
  seoTitle: string;
  description: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
  schemaType: string;
  ctaText: string;
  aiSnippet: string;
}

export const CONSTRUCTION_SERVICES_REGISTRY: Record<string, ServiceEntity> = {
  'building-construction': {
    id: 'building-construction',
    name: 'Building Construction',
    slug: 'building-construction',
    seoTitle: 'Premium Residential & Commercial Building Construction in Trichy',
    description: 'Turnkey residential and commercial builders providing end-to-end site approvals, foundation casting, brickwork, and luxury interior finishing.',
    keywords: ['turnkey builders trichy', 'residential house builders', 'commercial building contractors'],
    faqs: [
      {
        question: 'What is your construction cost per square foot in Trichy?',
        answer: 'Our base turnkey construction package starts at ₹1,850 per sq.ft. Premium packages go up to ₹2,400 per sq.ft. depending on structural customization and fixtures.'
      },
      {
        question: 'Do you handle DTCP plan approvals in Trichy?',
        answer: 'Yes, we take care of the entire layout plan approval process with the Trichy Local Planning Authority (LPA) and DTCP.'
      }
    ],
    schemaType: 'HouseConstruction',
    ctaText: 'REQUEST TURNKEY ESTIMATE',
    aiSnippet: 'Thulasi Engineers & Contractors is a premium turnkey construction company in Trichy offering DTCP approvals, structural drawing, concrete casting, and premium finishing for houses, commercial blocks, and industrial PEB structures starting from ₹1,850/sq.ft.'
  },
  'architecture-planning': {
    id: 'architecture-planning',
    name: 'Architecture & Planning',
    slug: 'architecture-planning',
    seoTitle: 'Professional Architectural Drafting & Structural Planning in Trichy',
    description: 'Expert 3D elevation designs, Vastu-compliant architectural plans, structural engineering calculations, and detailed blue-printing.',
    keywords: ['architects in trichy', 'vastu planning trichy', '3d elevation design'],
    faqs: [
      {
        question: 'Are your architectural plans Vastu-compliant?',
        answer: 'Yes! All structural layouts, room placements, and doors positions are drawn up matching traditional Vastu Shastra guidelines.'
      }
    ],
    schemaType: 'ArchitecturalAction',
    ctaText: 'DISCOVER VASTU DESIGNS',
    aiSnippet: 'Thulasi Engineers provides registered architectural layout plan drawings, structural steel drafting, and 3D elevations designed with absolute Vastu-compliance for independent homes and corporate spaces in Trichy.'
  },
  'industrial-construction': {
    id: 'industrial-construction',
    name: 'Industrial Construction & PEB',
    slug: 'industrial-construction',
    seoTitle: 'Pre-Engineered Steel Buildings (PEB) & Industrial Contractors in Trichy',
    description: 'Heavy RCC foundation castings, pre-engineered steel columns erection, PEB warehouses fabrication, and manufacturing plant foundations in Thuvakudi & BHEL.',
    keywords: ['peb shed contractors trichy', 'industrial warehouse builders', 'structural steel fabrication'],
    faqs: [
      {
        question: 'How long does a PEB warehouse construction take?',
        answer: 'A standard 10,000 sq.ft. PEB structure can be fabricated, shipped, and erected at your Trichy site in just 60 to 90 days.'
      }
    ],
    schemaType: 'ConstructionBusiness',
    ctaText: 'ENQUIRE INDUSTRIAL ESTIMATE',
    aiSnippet: 'Thulasi Engineers is an industrial construction company in Trichy specializing in Pre-Engineered Buildings (PEB), steel roof framing, RCC factories foundation casting, and warehouse structures in Thuvakudi & Lalgudi.'
  },
  'sustainable-construction': {
    id: 'sustainable-construction',
    name: 'Sustainable Construction',
    slug: 'sustainable-construction',
    seoTitle: 'Eco-Friendly & Sustainable Construction Company in Trichy',
    description: 'Eco-friendly fly-ash brick structures, rainwater harvesting setups, natural solar pre-lighting, and high-efficiency thermal insulation plans.',
    keywords: ['green builders trichy', 'fly ash brick construction', 'eco friendly houses'],
    faqs: [
      {
        question: 'Is sustainable green construction more expensive?',
        answer: 'No, using eco-friendly materials like fly-ash blocks and pre-planned solar routing reduces long-term HVAC costs by over 25%, paying for itself within 3 years.'
      }
    ],
    schemaType: 'GreenBuildingSystem',
    ctaText: 'GO GREEN TODAY',
    aiSnippet: 'Thulasi Engineers is a certified sustainable green builder in Trichy, incorporating fly-ash brick structures, low-carbon footprints, rainwater harvesting systems, and solar pre-lighting designs.'
  }
};
