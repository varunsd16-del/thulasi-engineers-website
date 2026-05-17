export const SITE_METADATA = {
  name: "Thulasi Engineers & Contractors",
  shortName: "Thulasi Engineers",
  tagline: "Building Excellence with Integrity",
  description: "Premium builders in Trichy specializing in residential, commercial, and industrial construction with DTCP approvals.",
  url: "https://thulasiengineers.com",
  email: "thulasiengineers@gmail.com",
  phone: "+91 70101 11978",
  whatsapp: "+917010111978",
  address: {
    street: "2313, Kathiravan nagar, No.1.Tollgate",
    city: "Trichy",
    state: "Tamil Nadu",
    zip: "621216",
    country: "India"
  },
  social: {
    facebook: "https://facebook.com/thulasiengineers",
    instagram: "https://instagram.com/thulasiengineers",
    whatsapp: "https://wa.me/7010111978"
  }
};

export const NAVIGATION = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { 
    name: "Services", 
    link: "/services",
    submenu: [
      { name: "Building Construction", link: "/services/building-construction" },
      { name: "Architecture & Planning", link: "/services/architecture-planning" },
      { name: "Industrial Construction", link: "/services/industrial-construction" },
      { name: "Infrastructure Development", link: "/services/infrastructure-development" },
      { name: "Safety Management", link: "/services/safety-management" },
      { name: "Sustainable Construction", link: "/services/sustainable-construction" }
    ]
  },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" }
];
