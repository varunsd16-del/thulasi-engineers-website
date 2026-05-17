export interface KnowledgeEntity {
  id: string;
  name: string;
  type: 'government' | 'regulation' | 'landmark' | 'municipality';
  wikipediaUrl?: string;
  description: string;
}

export const TRICHY_GOVERNMENT_ENTITIES: Record<string, KnowledgeEntity> = {
  dtcp: {
    id: 'dtcp-trichy',
    name: 'Directorate of Town and Country Planning (DTCP) Trichy',
    type: 'government',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Town_and_Country_Planning_Organisation',
    description: 'The state municipal approval body responsible for verifying land layouts and building plan permissions in Trichy district.'
  },
  corporation: {
    id: 'trichy-corporation',
    name: 'Tiruchirappalli City Corporation',
    type: 'municipality',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Tiruchirappalli_City_Corporation',
    description: 'The civic body governing Tiruchirappalli city, responsible for issuing building permits, drainage connections, and property tax assessments.'
  },
  nit: {
    id: 'nit-trichy',
    name: 'National Institute of Technology, Tiruchirappalli (NIT-T)',
    type: 'landmark',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/National_Institute_of_Technology,_Tiruchirappalli',
    description: 'A premier national engineering institution in Thuvakudi, representing the peak of structural and civil engineering education in Trichy.'
  }
};

export const TRICHY_BUILDING_REGULATIONS = {
  rulebook: 'Tamil Nadu Combined Development and Building Rules, 2019',
  setbackRules: {
    residential: 'Minimum front setback of 1.5m required for standard residential plots under 9m height.',
    commercial: 'Minimum side setbacks of 3m and fire safety access lanes required for multi-storey blocks.'
  },
  fsiRules: {
    standard: '1.5 Floor Space Index (FSI) for standard residential roads.',
    premium: 'Up to 2.0 FSI allowed for plots facing roads wider than 12 meters.'
  }
};

export const SEO_ENTITY_GRAPH = {
  /**
   * Resolves structural semantic links between locality hubs, services, and landmark entities
   */
  resolveEntityNodes: (serviceSlug: string, localitySlug: string) => {
    return {
      serviceNode: serviceSlug,
      localityNode: localitySlug,
      municipalNode: TRICHY_GOVERNMENT_ENTITIES.corporation.id,
      approvalBody: TRICHY_GOVERNMENT_ENTITIES.dtcp.id,
      regulationRules: TRICHY_BUILDING_REGULATIONS.rulebook,
      localAuthoritySignal: `Licensed construction verified under DTCP and Trichy Corporation regulations.`
    };
  }
};
