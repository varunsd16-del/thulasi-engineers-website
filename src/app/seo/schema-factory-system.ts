import { SITE_METADATA } from '../config/site';

export const SCHEMA_FACTORY_SYSTEM = {
  /**
   * Generates a fully qualified Service schema
   */
  generateServiceSchema: (
    serviceName: string,
    description: string,
    slug: string
  ) => {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_METADATA.url}/services/${slug}/#service`,
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "LocalBusiness",
        "name": SITE_METADATA.name,
        "telephone": SITE_METADATA.phone,
        "url": SITE_METADATA.url
      },
      "areaServed": "Tiruchirappalli"
    };
  },

  /**
   * Generates a fully qualified Locality schema
   */
  generateLocalitySchema: (
    localityName: string,
    landmark: string,
    latitude: number,
    longitude: number
  ) => {
    return {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": `${SITE_METADATA.url}/#place-${localityName.toLowerCase()}`,
      "name": localityName,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      },
      "hasMap": `https://maps.google.com/?q=${latitude},${longitude}`,
      "landmark": landmark
    };
  },

  /**
   * Generates a structural Case Study Project schema
   */
  generateProjectSchema: (project: {
    title: string;
    location: string;
    timeline: string;
    area: string;
    slug: string;
  }) => {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${SITE_METADATA.url}/projects/${project.slug}/#project`,
      "name": project.title,
      "locationCreated": {
        "@type": "Place",
        "name": project.location
      },
      "temporalCoverage": project.timeline,
      "about": [
        {
          "@type": "QuantitativeValue",
          "value": project.area,
          "unitText": "Sq.Ft."
        }
      ]
    };
  },

  /**
   * Generates a compliant News/Blog Article schema
   */
  generateArticleSchema: (post: {
    title: string;
    description: string;
    pubDate: Date;
    category: string;
    slug: string;
  }) => {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_METADATA.url}/blog/${post.category}/${post.slug}/#article`,
      "headline": post.title,
      "description": post.description,
      "datePublished": post.pubDate.toISOString().split('T')[0],
      "author": {
        "@type": "Organization",
        "name": SITE_METADATA.name,
        "url": SITE_METADATA.url
      },
      "publisher": {
        "@type": "Organization",
        "name": SITE_METADATA.name,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_METADATA.url}/images/hero/thulasi-engineers-branding-logo.webp`
        }
      }
    };
  }
};
