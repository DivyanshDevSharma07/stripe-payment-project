# Security Checklist
> Review each item below and check it off once you've verified it in your project.
> This checklist is part of your **Week 4** deliverables.
## 🔑 Secret Management
- [ ] `.env` file is listed in `.gitignore`
- [ ] `.env` file is **never** committed to version control
- [ ] API keys are loaded from environment variables, not hardcoded
- [ ] Only **test keys** (`sk_test_...`, `pk_test_...`) are used during development
- [ ] `.env.example` contains placeholder values only (no real keys)
- [ ] Stripe secret key is only used server-side, never exposed to the browser
## 🔒 Webhook Security
- [ ] Webhook signature is verified using `stripe.webhooks.constructEvent()`
- [ ] Webhook route uses `express.raw()` to preserve the raw request body
- [ ] Webhook route is registered **before** `express.json()` middleware
- [ ] Invalid signatures return a `400` status code
- [ ] Webhook secret (`whsec_...`) is stored in `.env`, not hardcoded
## 💳 Payment Logic
- [ ] Prices are defined **server-side** (not sent from the client)
- [ ] Checkout sessions are created on the server, not the client
- [ ] `success_url` and `cancel_url` are set correctly
- [ ] Payment amounts use **cents** (e.g., `2000` = $20.00)
- [ ] Error responses don't leak sensitive information to the client
## 🧹 Code Quality
- [ ] No `console.log` statements expose sensitive data (keys, tokens)
- [ ] All API calls are wrapped in try/catch blocks
- [ ] Error messages are user-friendly (don't expose stack traces)
- [ ] Dependencies are up to date (`npm audit` shows no critical issues)
- [ ] Code is well-commented and organized