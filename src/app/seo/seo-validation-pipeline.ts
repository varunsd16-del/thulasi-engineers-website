export interface ValidationResult {
  passed: boolean;
  score: number; // 0 to 100
  errors: string[];
  warnings: string[];
}

export const SEO_VALIDATION_PIPELINE = {
  /**
   * Automates semantic audit validation on page metadata payloads
   */
  validateMetadata: (payload: {
    title: string;
    description: string;
    keywords?: string;
  }): ValidationResult => {
    const errors: string[] = [];
    const warnings: string[] = [];
    let score = 100;

    // 1. Title Checks
    if (!payload.title || payload.title.trim() === '') {
      errors.push('CRITICAL: Missing Title Tag.');
      score -= 30;
    } else if (payload.title.length > 60) {
      warnings.push('Title exceeds 60 characters (truncation risk).');
      score -= 5;
    }

    // 2. Description Checks
    if (!payload.description || payload.description.trim() === '') {
      errors.push('CRITICAL: Missing Meta Description.');
      score -= 30;
    } else if (payload.description.length < 110) {
      warnings.push('Description is too thin (ideal: 120-160 characters).');
      score -= 10;
    }

    // 3. Keyword Checks
    if (!payload.keywords || payload.keywords.trim() === '') {
      warnings.push('Missing focus keywords.');
      score -= 10;
    }

    return {
      passed: errors.length === 0,
      score: Math.max(0, score),
      errors,
      warnings
    };
  },

  /**
   * Scores content body semantic depth and AI Overview eligibility
   */
  scoreContentSilo: (htmlContent: string, targetKeywords: string[]): number => {
    let score = 50; // Base score

    if (!htmlContent) return 0;

    // Check keyword coverage
    targetKeywords.forEach(kw => {
      if (htmlContent.toLowerCase().includes(kw.toLowerCase())) {
        score += 10;
      }
    });

    // Check semantic FAQ presence
    if (htmlContent.includes('faq-section') || htmlContent.includes('<dt>')) {
      score += 15;
    }

    // Check structured data linkings
    if (htmlContent.includes('application/ld+json')) {
      score += 15;
    }

    return Math.min(100, score);
  }
};
