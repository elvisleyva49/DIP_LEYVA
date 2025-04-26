class OrderService {
    constructor(paymentGateway) {
      if (!(paymentGateway instanceof require('./PaymentGateway'))) {
        throw new Error('Invalid payment gateway implementation');
      }
      this.paymentGateway = paymentGateway;
    }
  
    async checkout(orderId, amount) {
      console.log(`Processing checkout for order ${orderId}`);
      try {
        const result = await this.paymentGateway.processPayment(amount);
        console.log(`Payment successful for order ${orderId}:`, result);
        return result;
      } catch (error) {
        console.error(`Payment failed for order ${orderId}:`, error);
        throw error;
      }
    }
  
    async refund(orderId, transactionId, amount) {
      console.log(`Processing refund for order ${orderId}`);
      try {
        const result = await this.paymentGateway.refundPayment(transactionId, amount);
        console.log(`Refund successful for order ${orderId}:`, result);
        return result;
      } catch (error) {
        console.error(`Refund failed for order ${orderId}:`, error);
        throw error;
      }
    }
  }
  
  module.exports = OrderService;