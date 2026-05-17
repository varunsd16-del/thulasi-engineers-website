export const categories = [
  { 
    id: 'residential-construction', 
    title: 'Residential Construction', 
    slug: 'residential-construction',
    target: 'house construction in trichy, residential builders in trichy',
    description: 'Expert engineering for your dream home. From planning to handover, we build luxury villas and independent houses in Trichy.'
  },
  { 
    id: 'pmc', 
    title: 'PMC (Project Management)', 
    slug: 'pmc',
    target: 'PMC consultants trichy, project management consultancy',
    description: 'Enterprise-level construction consulting and high-authority project management expertise.'
  },
  { 
    id: 'commercial-construction', 
    title: 'Commercial Construction', 
    slug: 'commercial-construction',
    target: 'commercial builders trichy, office building construction',
    description: 'High-performance commercial spaces, office buildings, and retail hubs designed for business success.'
  },
  { 
    id: 'industrial-construction', 
    title: 'Industrial Construction', 
    slug: 'industrial-construction',
    target: 'industrial construction trichy, warehouse construction',
    description: 'Robust industrial sheds, warehouses, and factory units in Trichy and BHEL industrial zones.'
  },
  { 
    id: 'renovation-remodeling', 
    title: 'Renovation & Remodeling', 
    slug: 'renovation-remodeling',
    target: 'home renovation trichy, remodeling contractors',
    description: 'Transforming old properties into modern masterpieces with structural retrofitting and interior upgrades.'
  },
  { 
    id: 'architecture-planning', 
    title: 'Architecture & Planning', 
    slug: 'architecture-planning',
    target: 'architects in trichy, house planning trichy',
    description: 'Vastu-compliant architectural designs, 3D visualizations, and optimized floor plans.'
  },
  { 
    id: 'structural-engineering', 
    title: 'Structural Engineering', 
    slug: 'structural-engineering',
    target: 'structural engineers trichy, foundation design',
    description: 'The science of stability. Ensuring every structure is earthquake-resistant and durable.'
  },
  { 
    id: 'construction-cost-guides', 
    title: 'Construction Cost Guides', 
    slug: 'construction-cost-guides',
    target: 'construction cost trichy, sq ft cost trichy',
    description: 'Transparent breakdowns of construction costs, material prices, and labor rates in Trichy.'
  },
  { 
    id: 'interior-design', 
    title: 'Interior Design & Modular Kitchen', 
    slug: 'interior-design',
    target: 'interior designers trichy, modular kitchen trichy',
    description: 'Premium interior solutions that blend functionality with luxury aesthetics.'
  },
  { 
    id: 'building-approvals', 
    title: 'Building Approval & DTCP', 
    slug: 'building-approvals',
    target: 'DTCP approval trichy, building plan approval',
    description: 'Expert guidance on navigating building regulations and obtaining DTCP approvals in Tamil Nadu.'
  },
  { 
    id: 'materials-quality', 
    title: 'Construction Materials & Quality', 
    slug: 'materials-quality',
    target: 'best construction materials, quality checks',
    description: 'In-depth analysis of construction materials and rigorous quality control protocols.'
  },
  { 
    id: 'area-guides', 
    title: 'Trichy Area-Based Guides', 
    slug: 'area-guides',
    target: 'builders in srirangam, builders in thillai nagar',
    description: 'Localized construction insights for Srirangam, KK Nagar, Cantonment, and more.'
  },
  { 
    id: 'smart-homes', 
    title: 'Smart Homes & Modern Designs', 
    slug: 'smart-homes',
    target: 'smart home construction trichy, home automation',
    description: 'Integrating technology and sustainable design into modern residential living.'
  },
  { 
    id: 'villa-construction', 
    title: 'Villa Construction', 
    slug: 'villa-construction',
    target: 'villa builders trichy, duplex villa ideas',
    description: 'Specialized expertise in designing and building high-end luxury villas in Trichy.'
  },
  { 
    id: 'turnkey-construction', 
    title: 'Turnkey Construction', 
    slug: 'turnkey-construction',
    target: 'turnkey construction trichy, turnkey builders',
    description: 'Complete end-to-end construction management where we handle everything from design to key handover.'
  },
  { 
    id: 'civil-engineering-insights', 
    title: 'Civil Engineering Insights', 
    slug: 'civil-engineering-insights',
    target: 'civil engineers trichy, site supervision',
    description: 'Professional insights from our senior engineers on construction methodologies and innovation.'
  }
];

export const getCategoryById = (id: string) => categories.find(c => c.id === id);
export const getCategoryBySlug = (slug: string) => categories.find(c => c.slug === slug);
