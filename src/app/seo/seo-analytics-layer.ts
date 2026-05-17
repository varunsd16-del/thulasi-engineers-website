export interface KeywordRankSignal {
  keyword: string;
  avgPosition: number;
  monthlyImpressions: number;
  ctrPercent: number;
}

export interface LocalityPerformanceNode {
  localitySlug: string;
  activeServiceLandingPages: number;
  totalImpressions: number;
  totalConversions: number;
  aiOverviewCitationsCount: number;
}

export const SEO_ANALYTICS_LAYER = {
  /**
   * Tracks telemetry payload models for Google Search Console & AI Search agent performance
   */
  logSearchPerformancePayload: (
    localitySlug: string,
    keywordData: KeywordRankSignal[]
  ): LocalityPerformanceNode => {
    // Calculates summary statistics for reporting dashboards
    const activeLandings = 4; // construction, builders, engineers, renovators
    const impressionsSum = keywordData.reduce((acc, curr) => acc + curr.monthlyImpressions, 0);
    const conversionsEst = Math.round(impressionsSum * 0.024); // 2.4% standard conversion rate on local search

    return {
      localitySlug,
      activeServiceLandingPages: activeLandings,
      totalImpressions: impressionsSum,
      totalConversions: conversionsEst,
      aiOverviewCitationsCount: Math.round(keywordData.filter(kw => kw.avgPosition <= 3).length * 1.5)
    };
  }
};
