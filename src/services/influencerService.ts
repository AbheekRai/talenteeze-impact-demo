
import { Influencer } from '../types';
import { mockInfluencers } from '../data/seedData';

export const influencerService = {
  async getInfluencers(): Promise<Influencer[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockInfluencers;
  }
};
