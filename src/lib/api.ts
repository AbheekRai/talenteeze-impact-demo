
import { campaignService } from '../services/campaignService';
import { influencerService } from '../services/influencerService';
import { paymentService } from '../services/paymentService';
import { analyticsService } from '../services/analyticsService';

// Mock API Functions - now using individual services
export const mockApi = {
  // Campaign Management
  getCampaigns: campaignService.getCampaigns,
  createCampaign: campaignService.createCampaign,
  generateMockClicks: campaignService.generateMockClicks,

  // Influencer Management
  getInfluencers: influencerService.getInfluencers,

  // Payment Processing
  processPayment: paymentService.processPayment,

  // Analytics Data
  getAnalytics: analyticsService.getAnalytics
};
