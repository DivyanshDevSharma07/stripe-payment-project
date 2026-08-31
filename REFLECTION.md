# Reflection

## 3 Things I Learned
1. I learned how to integrate Stripe Checkout into a Node.js and Express application, securely create checkout sessions, and process payments using Stripe's API.
2. I learned how webhooks work, why signature verification is important, and how to store successful payment details in a PostgreSQL database using Drizzle ORM.
3. I learned how to test a payment application using Playwright for end-to-end browser automation and the Stripe CLI for webhook event testing.

## 1 Challenge I Faced
Understanding how Stripe webhooks worked was the biggest challenge. It took time to understand how Stripe sends events to my server, how webhook signatures are verified, and how the payment flow connects the checkout session, webhook, and database.

## 1 Thing I Would Do Differently
If I started the project again, I would spend more time understanding the overall architecture before writing code. Having a clear picture of how the frontend, backend, Stripe, webhooks, and database interact would have made development and debugging much easier.