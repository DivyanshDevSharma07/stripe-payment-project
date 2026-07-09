const { pgTable, serial, text, integer, timestamp } = require('drizzle-orm/pg-core');

const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  productName: text('product_name').notNull(),
  amount: integer('amount').notNull(),
  currency: text('currency').notNull(),
  stripeSessionId: text('stripe_session_id').unique(),
  createdAt: timestamp('created_at').defaultNow(),
});

module.exports = { orders };