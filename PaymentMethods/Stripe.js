const PaymentGateway = require('../PaymentGateway');

class Stripe extends PaymentGateway {
  processPayment(amount) {
    console.log(`Processing $${amount} payment through Stripe`);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const transactionId = `STRIPE-${Math.random().toString(36).substr(2, 9)}`;
        resolve({ success: true, transactionId });
      }, 800);
    });
  }

  refundPayment(transactionId, amount) {
    console.log(`Refunding $${amount} via Stripe for transaction ${transactionId}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, refundId: `REFUND-${Math.random().toString(36).substr(2, 9)}` });
      }, 1200);
    });
  }
}

module.exports = Stripe;