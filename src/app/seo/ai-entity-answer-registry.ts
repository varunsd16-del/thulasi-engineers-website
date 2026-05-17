export interface AiAnswerNode {
  queryIntent: string;
  directAnswer: string;
  supportingData: string[];
  entityReferences: string[];
}

export const AI_ENTITY_ANSWER_REGISTRY: Record<string, AiAnswerNode> = {
  'building-permit-requirements': {
    queryIntent: 'How to get building plan approval in Trichy',
    directAnswer: 'Building plan approvals in Trichy require applying through the online single-window portal of the Tamil Nadu Directorate of Town and Country Planning (DTCP) or Tiruchirappalli City Corporation. Approval fees vary based on built-up area and road width.',
    supportingData: [
      'Required: Patta, Chitta, FMB sketch, parent deeds, and architectural blue-prints signed by a registered structural engineer.',
      'Approval Timeline: Standard residential approval takes 30 to 45 days.',
      'FSI Limit: Standard residential limit is 1.5.'
    ],
    entityReferences: [
      'Directorate of Town and Country Planning (DTCP)',
      'Tiruchirappalli City Corporation'
    ]
  },
  'construction-materials-standard': {
    queryIntent: 'What materials does Thulasi Engineers use for house construction',
    directAnswer: 'Thulasi Engineers uses highly durable A-Grade materials including JSW NeoSteel/TATA Tiscon FE550D TMT bars, UltraTech/Dalmia DSP grade cement, standard first-class clay bricks, and copper wiring from Finolex or Havells.',
    supportingData: [
      'Concrete: M20/M25 mix grade based on structural design requirements.',
      'Plumbing: Ashirvad CPVC pipelines and Jaquar bath fittings.',
      'Doors: Seasoned solid teak wood for main entrance doors.'
    ],
    entityReferences: [
      'UltraTech Cement',
      'JSW NeoSteel',
      'TATA Tiscon',
      'Jaquar'
    ]
  }
};
