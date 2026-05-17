import { TRICHY_LOCALITIES } from './trichy-localities-data';
import { CONSTRUCTION_SERVICES_REGISTRY } from './construction-services-registry';

export interface LinkNode {
  label: string;
  url: string;
}

export const INTERNAL_LINKING_ENGINE = {
  /**
   * Automatically calculates surrounding locality hubs to link, avoiding link silos
   */
  getSurroundingLocalityLinks: (currentLocalitySlug: string, limit = 4): LinkNode[] => {
    const allLocalities = Object.values(TRICHY_LOCALITIES);
    return allLocalities
      .filter(loc => loc.slug !== currentLocalitySlug)
      .slice(0, limit)
      .map(loc => ({
        label: `${loc.name} Construction`,
        url: `/construction-company-in-${loc.slug}/`
      }));
  },

  /**
   * Automatically connects services to parent categories
   */
  getRelatedServices: (currentServiceSlug: string): LinkNode[] => {
    const allServices = Object.values(CONSTRUCTION_SERVICES_REGISTRY);
    return allServices
      .filter(ser => ser.slug !== currentServiceSlug)
      .map(ser => ({
        label: ser.name,
        url: `/services/${ser.slug}/`
      }));
  },

  /**
   * Programmatic FAQ Engine: Compiles a custom, dynamic FAQ list based on locality parameters
   */
  generateProgrammaticFaqs: (
    serviceName: string,
    locationName: string,
    landmark: string
  ) => {
    return [
      {
        question: `Why is Thulasi Engineers considered the best choice for ${serviceName.toLowerCase()} in ${locationName}?`,
        answer: `As licensed civil engineers, we combine certified material quality (JSW Steel, UltraTech Cement) with transparent pricing and full-service DTCP/Corporation approvals near ${landmark} and the wider ${locationName} zone.`
      },
      {
        question: `How does soil structure in ${locationName} affect foundation casting costs?`,
        answer: `Certain plots near ${landmark} feature clayey soil requiring double-underreamed pile foundations or structural raft foundations to prevent moisture penetration and settlement.`
      },
      {
        question: `Do you handle structural billing clearances for renovations in ${locationName}?`,
        answer: `Yes! Our project management team prepares exact material procurement schedules and engineering site clearances for all renovation and new-build projects in ${locationName}.`
      }
    ];
  }
};
