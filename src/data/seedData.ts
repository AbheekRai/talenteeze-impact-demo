
import { Campaign, Influencer, Brand } from '../types';

export const mockCampaigns: Campaign[] = [
  {
    id: 'camp-001',
    name: 'Summer Collection Launch',
    brand: 'TechCorp',
    status: 'active',
    budget: 15000,
    spent: 12400,
    startDate: '2024-01-01',
    endDate: '2024-02-01',
    influencers: ['inf-001', 'inf-002', 'inf-003'],
    metrics: {
      reach: 850000,
      engagement: 45600,
      clicks: 15420,
      impressions: 245600,
      conversions: 892,
      roi: 285
    }
  },
  {
    id: 'camp-002',
    name: 'Brand Awareness Q2',
    brand: 'TechCorp',
    status: 'active',
    budget: 12000,
    spent: 8900,
    startDate: '2024-01-15',
    endDate: '2024-03-15',
    influencers: ['inf-002', 'inf-004', 'inf-005'],
    metrics: {
      reach: 620000,
      engagement: 32100,
      clicks: 12100,
      impressions: 187000,
      conversions: 654,
      roi: 310
    }
  }
];

export const mockInfluencers: Influencer[] = [
  {
    id: 'inf-001',
    username: '@lifestyle_sarah',
    name: 'Sarah Johnson',
    followers: 145000,
    engagementRate: 4.2,
    platforms: ['Instagram', 'TikTok'],
    rate: 850,
    rating: 4.9,
    completedCampaigns: 23
  },
  {
    id: 'inf-002',
    username: '@tech_reviewer',
    name: 'Mike Chen',
    followers: 89000,
    engagementRate: 3.8,
    platforms: ['YouTube', 'Instagram'],
    rate: 650,
    rating: 4.7,
    completedCampaigns: 18
  },
  {
    id: 'inf-003',
    username: '@fitness_journey',
    name: 'Alex Rodriguez',
    followers: 210000,
    engagementRate: 5.1,
    platforms: ['Instagram', 'YouTube'],
    rate: 1200,
    rating: 4.8,
    completedCampaigns: 31
  }
];

export const mockBrand: Brand = {
  id: 'brand-001',
  name: 'TechCorp',
  industry: 'Technology',
  totalSpend: 45600,
  activeCampaigns: 8,
  completedCampaigns: 24
};
