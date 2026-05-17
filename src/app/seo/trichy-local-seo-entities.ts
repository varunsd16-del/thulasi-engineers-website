import { TRICHY_LOCALITIES } from './trichy-localities-data';
import { CONSTRUCTION_SERVICES_REGISTRY } from './construction-services-registry';
import { SITE_METADATA } from '../config/site';

export const TRICHY_SEO_ENTITIES = {
  brand: {
    name: SITE_METADATA.name,
    shortName: SITE_METADATA.shortName,
    url: SITE_METADATA.url,
    phone: SITE_METADATA.phone,
    email: SITE_METADATA.email,
    whatsapp: SITE_METADATA.whatsapp,
    address: SITE_METADATA.address
  },
  
  // Geolocation center point for Trichy (Central Business location)
  centerPoint: {
    latitude: 10.7905,
    longitude: 78.7047,
    radiusMeter: 25000 // 25km radius served around Trichy
  },

  // Map service codes to semantic slugs
  serviceSlugs: {
    'construction-company': 'building-construction',
    'builders': 'building-construction',
    'civil-engineers': 'architecture-planning',
    'home-renovation': 'building-construction'
  },

  // Central Schema Builder Helpers
  generateLocalBusinessSchema: () => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": SITE_METADATA.name,
      "image": `${SITE_METADATA.url}/images/hero/og-construction-company-trichy.webp`,
      "@id": `${SITE_METADATA.url}/#localbusiness`,
      "url": SITE_METADATA.url,
      "telephone": SITE_METADATA.phone,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_METADATA.address.street,
        "addressLocality": SITE_METADATA.address.city,
        "addressRegion": SITE_METADATA.address.state,
        "postalCode": SITE_METADATA.address.zip,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.8622,
        "longitude": 78.6904
      },
      "areaServed": Object.values(TRICHY_LOCALITIES).map(loc => loc.geoSchema),
      "sameAs": [
        SITE_METADATA.social.facebook,
        SITE_METADATA.social.instagram
      ]
    };
  }
};

export { TRICHY_LOCALITIES, CONSTRUCTION_SERVICES_REGISTRY };
