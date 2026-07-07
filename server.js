require('dotenv').config();
const express = require('express');
const stripe =require('stripe')(process.env.STRIPE_SECRET_KEY);
const checkoutRoutes= require('./routes/checkout');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/checkout',checkoutRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log("Stripe SDK initialized");
});