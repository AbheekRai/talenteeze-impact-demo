
export interface AnalyticsData {
  date: string;
  clicks: number;
  impressions: number;
  conversions: number;
  spend: number;
}

export const analyticsService = {
  async getAnalytics(timeRange: '7d' | '30d' | '90d' = '30d'): Promise<AnalyticsData[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Generate mock analytics data based on time range
    const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
    const analyticsData: AnalyticsData[] = [];
    
    for (let i = 0; i < days; i++) {
      analyticsData.push({
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        clicks: Math.floor(Math.random() * 1000) + 500,
        impressions: Math.floor(Math.random() * 15000) + 8000,
        conversions: Math.floor(Math.random() * 50) + 20,
        spend: Math.floor(Math.random() * 500) + 200
      });
    }
    
    return analyticsData.reverse();
  }
};
