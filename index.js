const OrderService = require('./OrderService');
const PayPal = require('./PaymentMethods/PayPal');
const Stripe = require('./PaymentMethods/Stripe');
const BankTransfer = require('./PaymentMethods/BankTransfer');

// Example usage with different payment methods
async function runExamples() {
  // Create payment gateways
  const paypal = new PayPal();
  const stripe = new Stripe();
  const bankTransfer = new BankTransfer();

  // Create order services with different payment methods
  const paypalOrderService = new OrderService(paypal);
  const stripeOrderService = new OrderService(stripe);
  const bankOrderService = new OrderService(bankTransfer);

  // Process payments
  console.log('=== Processing with PayPal ===');
  const paypalResult = await paypalOrderService.checkout('ORDER-123', 99.99);
  await paypalOrderService.refund('ORDER-123', paypalResult.transactionId, 99.99);

  console.log('\n=== Processing with Stripe ===');
  const stripeResult = await stripeOrderService.checkout('ORDER-456', 49.99);
  await stripeOrderService.refund('ORDER-456', stripeResult.transactionId, 49.99);

  console.log('\n=== Processing with Bank Transfer ===');
  const bankResult = await bankOrderService.checkout('ORDER-789', 199.99);
  await bankOrderService.refund('ORDER-789', bankResult.transactionId, 199.99);
}

runExamples().catch(console.error);