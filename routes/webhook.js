const express = require("express");
const router = express.Router();
const { db } = require("../src/db/db");
const { orders } = require("../src/db/schema");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
router.post("/",express.raw({ type: "application/json" }),async(req, res) => {
    const signature = req.headers["stripe-signature"];
        try {
            const event = stripe.webhooks.constructEvent(
                req.body,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET
            );
            // Handle different Stripe events
            if (event.type === "checkout.session.completed") {
                const session = event.data.object;
                await db.insert(orders).values({
                productName: "Premium Template",
                amount: session.amount_total,
                currency: session.currency,
                stripeSessionId: session.id,
            });
                console.log("✅ Order saved to database")
            } else {
                console.log("ℹ️ Unhandled Event:", event.type);
            }
            res.sendStatus(200);
        } catch (err) {
            console.error("❌ Webhook Signature Verification Failed:", err.message);
            res.sendStatus(400);
        }
});
module.exports = router;