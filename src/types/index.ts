
// TypeScript interfaces for TalentEzee Impact Demo

export interface Campaign {
  id: string;
  name: string;
  brand: string;
  status: 'active' | 'pending' | 'completed' | 'paused';
  budget: number;
  spent: number;
  startDate: string;
  endDate?: string;
  influencers: string[];
  metrics: {
    reach: number;
    engagement: number;
    clicks: number;
    impressions: number;
    conversions: number;
    roi: number;
  };
}

export interface Influencer {
  id: string;
  username: string;
  name: string;
  followers: number;
  engagementRate: number;
  platforms: string[];
  rate: number;
  rating: number;
  completedCampaigns: number;
}

export interface Brand {
  id: string;
  name: string;
  industry: string;
  totalSpend: number;
  activeCampaigns: number;
  completedCampaigns: number;
}
