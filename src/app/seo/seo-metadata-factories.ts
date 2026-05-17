import { SITE_METADATA } from '../config/site';

export interface MetaPayload {
  title: string;
  description: string;
  keywords: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    image: string;
    type: string;
  };
}

/**
 * Metadata Factory for Localized Construction Landing Pages
 */
export function generateLocalConstructionMeta(
  serviceName: string,
  locationName: string,
  landmark: string
): MetaPayload {
  const pageTitle = `${serviceName} in ${locationName} | ${SITE_METADATA.shortName}`;
  const pageDesc = `Looking for ${serviceName.toLowerCase()} in ${locationName}? ${SITE_METADATA.name} offers premium turnkey engineering & builders services near ${landmark} and surrounding Trichy areas. Registered structural builders.`;
  const canonicalUrl = `${SITE_METADATA.url}/${serviceName.toLowerCase().replace(/\s+/g, '-')}-in-${locationName.toLowerCase().replace(/\s+/g, '-')}/`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: `${serviceName.toLowerCase()} in ${locationName.toLowerCase()}, builders ${locationName.toLowerCase()}, civil engineers ${locationName.toLowerCase()}, construction company ${locationName.toLowerCase()}`,
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      image: `${SITE_METADATA.url}/images/hero/og-construction-company-trichy.webp`,
      type: 'website'
    }
  };
}

/**
 * Metadata Factory for Specialized Project Management Consultancy (PMC)
 */
export function generatePmcMetaTags(subSilo?: string): MetaPayload {
  const pageTitle = subSilo 
    ? `${subSilo} PMC Consultants in Trichy | ${SITE_METADATA.shortName}`
    : `Project Management Consultants (PMC) in Trichy | ${SITE_METADATA.name}`;
  
  const pageDesc = `Scale your corporate or industrial infrastructure with Thulasi's premium Project Management Consultancy. We verify material quality, inspect foundations, and manage billing for zero-stress construction.`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: `pmc construction trichy, project management consultants, construction billing auditor trichy, industrial pmc`,
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: `${SITE_METADATA.url}/services/project-management/`,
      image: `${SITE_METADATA.url}/images/hero/og-construction-company-trichy.webp`,
      type: 'article'
    }
  };
}

/**
 * JSON-LD Schema Factory for Localized Entities & FAQ Snippets
 */
export function generateTrichySchema(
  serviceName: string,
  locationName: string,
  landmark: string,
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_METADATA.url}/#local-business-${locationName.toLowerCase()}`,
        "name": SITE_METADATA.name,
        "telephone": SITE_METADATA.phone,
        "url": SITE_METADATA.url,
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
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_METADATA.url}/${serviceName.toLowerCase().replace(/\s+/g, '-')}-in-${locationName.toLowerCase().replace(/\s+/g, '-')}/#faq`,
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };
}
