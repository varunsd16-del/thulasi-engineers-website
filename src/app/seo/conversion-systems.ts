import { SITE_METADATA } from '../config/site';

export interface CostEstimateResult {
  builtAreaSqFt: number;
  packageType: 'standard' | 'premium' | 'luxury';
  totalCostEstimate: number;
  planningDurationMonths: number;
  materialsSuggested: string[];
}

export const CONVERSION_SYSTEMS = {
  whatsapp: {
    phoneNumber: SITE_METADATA.whatsapp,
    defaultMessage: `Hello Thulasi Engineers! I would like to enquire about a construction project in Trichy. Please share your turnkey packages.`,
    
    /**
     * Generate dynamic WhatsApp deep-link based on locality or service type
     */
    generateLink: (service?: string, locality?: string) => {
      let msg = `Hello! I am looking for a civil engineer.`;
      if (service && locality) {
        msg = `Hello! I would like to get a free turnkey estimation for ${service.toLowerCase()} in ${locality}.`;
      } else if (service) {
        msg = `Hello! I would like to enquire about your ${service.toLowerCase()} services in Trichy.`;
      }
      return `https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(msg)}`;
    }
  },

  /**
   * Enterprise Lead Calculator Engine
   */
  calculateConstructionCost: (
    areaSqFt: number,
    pkg: 'standard' | 'premium' | 'luxury'
  ): CostEstimateResult => {
    let ratePerSqFt = 1850;
    let duration = 10;
    let materials = ['UltraTech Cement', 'JSW NeoSteel', 'TATA Tiscon'];

    if (pkg === 'premium') {
      ratePerSqFt = 2150;
      duration = 12;
      materials = ['Dalmia DSP Cement', 'TATA Tiscon FE550D', 'Jaquar Fittings'];
    } else if (pkg === 'luxury') {
      ratePerSqFt = 2400;
      duration = 14;
      materials = ['Ramco Supercrete', 'JSW Neosteel FE550D', 'Italian Marble Flooring', 'Smart Automation'];
    }

    return {
      builtAreaSqFt: areaSqFt,
      packageType: pkg,
      totalCostEstimate: areaSqFt * ratePerSqFt,
      planningDurationMonths: duration,
      materialsSuggested: materials
    };
  }
};
