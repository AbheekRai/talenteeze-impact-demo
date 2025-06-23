
import { campaignService } from '../services/campaignService';

// Global mock API endpoint handler
export const setupMockApiHandlers = () => {
  // Mock POST /api/mockClicks endpoint
  if (typeof window !== 'undefined') {
    const originalFetch = window.fetch;
    
    window.fetch = async (url: string | URL | Request, options?: RequestInit) => {
      const urlString = url.toString();
      
      if (urlString.includes('/api/mockClicks') && options?.method === 'POST') {
        const body = options.body ? JSON.parse(options.body.toString()) : {};
        const result = await campaignService.generateMockClicks(
          body.campaignId || 'demo-campaign-001',
          body.clicks || Math.floor(Math.random() * 200) + 50
        );
        
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Fall back to original fetch for other requests
      return originalFetch(url, options);
    };
  }
};
