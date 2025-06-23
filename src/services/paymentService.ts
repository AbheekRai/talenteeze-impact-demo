
export const paymentService = {
  async processPayment(amount: number, campaignId: string): Promise<{ success: boolean; transactionId: string }> {
    await new Promise(resolve => setTimeout(resolve, 1200)); // Simulate payment processing
    
    // Simulate payment success/failure (95% success rate)
    const success = Math.random() > 0.05;
    
    return {
      success,
      transactionId: success ? `txn_${Date.now()}` : ''
    };
  }
};
