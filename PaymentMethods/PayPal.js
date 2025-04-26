const PaymentGateway = require('../PaymentGateway');

class PayPal extends PaymentGateway {
  processPayment(amount) {
    console.log(`Processing $${amount} payment through PayPal`);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const transactionId = `PAYPAL-${Math.random().toString(36).substr(2, 9)}`;
        resolve({ success: true, transactionId });
      }, 1000);
    });
  }

  refundPayment(transactionId, amount) {
    console.log(`Refunding $${amount} via PayPal for transaction ${transactionId}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, refundId: `REFUND-${Math.random().toString(36).substr(2, 9)}` });
      }, 1500);
    });
  }
}

module.exports = PayPal;