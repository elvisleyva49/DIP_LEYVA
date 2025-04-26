const PaymentGateway = require('../PaymentGateway');

class BankTransfer extends PaymentGateway {
  processPayment(amount) {
    console.log(`Processing $${amount} payment through Bank Transfer`);
    return new Promise((resolve) => {
      setTimeout(() => {
        const transactionId = `BANK-${Math.random().toString(36).substr(2, 9)}`;
        resolve({ success: true, transactionId });
      }, 2000);
    });
  }

  refundPayment(transactionId, amount) {
    console.log(`Refunding $${amount} via Bank Transfer for transaction ${transactionId}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, refundId: `REFUND-${Math.random().toString(36).substr(2, 9)}` });
      }, 2500);
    });
  }
}

module.exports = BankTransfer;