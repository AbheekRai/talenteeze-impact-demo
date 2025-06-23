
import { Campaign } from '../types';
import { mockCampaigns } from '../data/seedData';

export const campaignService = {
  async getCampaigns(): Promise<Campaign[]> {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return mockCampaigns;
  },

  async createCampaign(campaignData: Partial<Campaign>): Promise<Campaign> {
    await new Promise(resolve => setTimeout(resolve, 800));
    const newCampaign: Campaign = {
      id: `camp-${Date.now()}`,
      name: campaignData.name || 'New Campaign',
      brand: 'TechCorp',
      status: 'pending',
      budget: campaignData.budget || 0,
      spent: 0,
      startDate: campaignData.startDate || new Date().toISOString().split('T')[0],
      influencers: campaignData.influencers || [],
      metrics: {
        reach: 0,
        engagement: 0,
        clicks: 0,
        impressions: 0,
        conversions: 0,
        roi: 0
      }
    };
    mockCampaigns.push(newCampaign);
    return newCampaign;
  },

  async generateMockClicks(campaignId: string, clicks: number = 100): Promise<{ success: boolean; data: any }> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const campaign = mockCampaigns.find(c => c.id === campaignId);
    if (campaign) {
      campaign.metrics.clicks += clicks;
      campaign.metrics.impressions += clicks * 15; // Simulate impression ratio
      campaign.metrics.conversions += Math.floor(clicks * 0.05); // 5% conversion rate
      campaign.metrics.reach += clicks * 100; // Simulate reach multiplier
      campaign.metrics.engagement += clicks * 3; // Simulate engagement
      campaign.metrics.roi = ((campaign.metrics.conversions * 50 - campaign.spent) / campaign.spent) * 100;
    }

    return {
      success: true,
      data: {
        campaignId,
        clicksAdded: clicks,
        newTotal: campaign?.metrics.clicks || 0
      }
    };
  }
};
