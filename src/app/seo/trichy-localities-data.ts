export interface Locality {
  name: string;
  slug: string;
  landmark: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  geoSchema: {
    "@type": string;
    "name": string;
    "sameAs"?: string;
  };
  keywords: string[];
}

export const TRICHY_LOCALITIES: Record<string, Locality> = {
  srirangam: {
    name: 'Srirangam',
    slug: 'srirangam',
    landmark: 'Ranganathaswamy Temple',
    postalCode: '620006',
    latitude: 10.8622,
    longitude: 78.6904,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Srirangam",
      "sameAs": "https://en.wikipedia.org/wiki/Srirangam"
    },
    keywords: ['srirangam builders', 'luxury villas srirangam', 'house construction srirangam']
  },
  'thillai-nagar': {
    name: 'Thillai Nagar',
    slug: 'thillai-nagar',
    landmark: 'Makkal Mandram',
    postalCode: '620018',
    latitude: 10.8288,
    longitude: 78.6828,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Thillai Nagar",
      "sameAs": "https://en.wikipedia.org/wiki/Thillai_Nagar"
    },
    keywords: ['commercial building thillai nagar', 'builders in thillai nagar', 'office renovators thillai nagar']
  },
  'kk-nagar': {
    name: 'KK Nagar',
    slug: 'kk-nagar',
    landmark: 'Ordnance Factory',
    postalCode: '620021',
    latitude: 10.7851,
    longitude: 78.7186,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "K. K. Nagar, Tiruchirappalli",
      "sameAs": "https://en.wikipedia.org/wiki/K._K._Nagar,_Tiruchirappalli"
    },
    keywords: ['builders in kk nagar', 'independent house kk nagar', 'civil engineering kk nagar']
  },
  woraiyur: {
    name: 'Woraiyur',
    slug: 'woraiyur',
    landmark: 'Vekkali Amman Temple',
    postalCode: '620003',
    latitude: 10.8285,
    longitude: 78.6675,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Woraiyur",
      "sameAs": "https://en.wikipedia.org/wiki/Woraiyur"
    },
    keywords: ['home renovators woraiyur', 'house renovation in woraiyur', 'budget builders woraiyur']
  },
  cantonment: {
    name: 'Cantonment',
    slug: 'cantonment',
    landmark: 'Trichy Central Bus Stand',
    postalCode: '620001',
    latitude: 10.8037,
    longitude: 78.6865,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Cantonment, Tiruchirappalli",
      "sameAs": "https://en.wikipedia.org/wiki/Cantonment,_Tiruchirappalli"
    },
    keywords: ['commercial contractors cantonment', 'office renovation cantonment', 'civil engineer cantonment']
  },
  karumandapam: {
    name: 'Karumandapam',
    slug: 'karumandapam',
    landmark: 'National College',
    postalCode: '620015',
    latitude: 10.7967,
    longitude: 78.6659,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Karumandapam",
    },
    keywords: ['residential builders karumandapam', 'home renovators karumandapam', 'civil engineer karumandapam']
  },
  puthur: {
    name: 'Puthur',
    slug: 'puthur',
    landmark: 'Bishop Heber College',
    postalCode: '620017',
    latitude: 10.8202,
    longitude: 78.6756,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Puthur, Tiruchirappalli",
    },
    keywords: ['house construction puthur', 'builders in puthur', 'renovation company puthur']
  },
  tiruverumbur: {
    name: 'Tiruverumbur',
    slug: 'tiruverumbur',
    landmark: 'BHEL',
    postalCode: '620013',
    latitude: 10.7937,
    longitude: 78.7667,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Tiruverumbur",
      "sameAs": "https://en.wikipedia.org/wiki/Tiruverumbur"
    },
    keywords: ['industrial contractors tiruverumbur', 'peb warehouse tiruverumbur', 'bhel builders']
  },
  samayapuram: {
    name: 'Samayapuram',
    slug: 'samayapuram',
    landmark: 'Samayapuram Mariamman Temple',
    postalCode: '621112',
    latitude: 10.9298,
    longitude: 78.7331,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Samayapuram",
      "sameAs": "https://en.wikipedia.org/wiki/Samayapuram"
    },
    keywords: ['house construction samayapuram', 'commercial building samayapuram', 'builders samayapuram']
  },
  'golden-rock': {
    name: 'Golden Rock',
    slug: 'golden-rock',
    landmark: 'Railway Colony',
    postalCode: '620004',
    latitude: 10.7876,
    longitude: 78.7188,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Golden Rock, Tiruchirappalli",
      "sameAs": "https://en.wikipedia.org/wiki/Golden_Rock,_Tiruchirappalli"
    },
    keywords: ['renovation golden rock', 'home builders golden rock', 'railway contractors']
  },
  lalgudi: {
    name: 'Lalgudi',
    slug: 'lalgudi',
    landmark: 'Lalgudi Railway Station',
    postalCode: '621601',
    latitude: 10.8711,
    longitude: 78.8284,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Lalgudi",
      "sameAs": "https://en.wikipedia.org/wiki/Lalgudi"
    },
    keywords: ['builders lalgudi', 'construction lalgudi', 'villa builders lalgudi']
  },
  manapparai: {
    name: 'Manapparai',
    slug: 'manapparai',
    landmark: 'Cattle Market',
    postalCode: '621306',
    latitude: 10.6074,
    longitude: 78.4187,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Manapparai",
      "sameAs": "https://en.wikipedia.org/wiki/Manapparai"
    },
    keywords: ['civil engineer manapparai', 'construction company manapparai', 'builders manapparai']
  },
  thuvakudi: {
    name: 'Thuvakudi',
    slug: 'thuvakudi',
    landmark: 'NIT Trichy',
    postalCode: '620015',
    latitude: 10.7601,
    longitude: 78.8132,
    geoSchema: {
      "@type": "AdministrativeArea",
      "name": "Thuvakudi",
      "sameAs": "https://en.wikipedia.org/wiki/Thuvakudi"
    },
    keywords: ['peb shed thuvakudi', 'industrial warehouse thuvakudi', 'nit trichy civil engineering']
  }
};
