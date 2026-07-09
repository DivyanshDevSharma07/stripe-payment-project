### Week 3 — Webhooks & Event Handling
| Task | File(s) | What You'll Do |
|------|---------|----------------|
| Install Stripe CLI | Terminal | Download from [stripe.com/docs/stripe-cli](https://docs.stripe.com/stripe-cli) |
| Start webhook listener | Terminal | Run `stripe listen --forward-to localhost:3000/webhook` |
| Copy webhook secret | `.env` | Paste the `whsec_...` value from the CLI output |
| Build webhook handler | `routes/webhook.js` | Verify signature, handle `checkout.session.completed` event |
| Mount the route | `server.js` | Register the webhook route **before** `express.json()` |
| Test webhooks | Terminal | Make a payment and verify events appear in your server logs |
| Write assignment | `routes/webhook.js` | Explain why signature verification matters (3 sentences) |

| Task | File(s) | What You'll Do |
|------|---------|----------------|
| Test edge cases | Browser | Test with failing cards, expired cards, etc. |
| Enhance UI | `public/*.html` | Add animations, better styling, loading states |
| Complete security checklist | `SECURITY_CHECKLIST.md` | Review and check off every item |
| Write reflection | `REFLECTION.md` | Document what you learned |
| Trigger test events | Terminal | Use `stripe trigger checkout.session.completed` |

## 💳 Stripe Test Cards
Use these card numbers in test mode. No real charges will be made.
| Scenario | Card Number | Expiry | CVC | ZIP |
|----------|-------------|--------|-----|-----|
| ✅ **Successful payment** | `4242 4242 4242 4242` | Any future date | Any 3 digits | Any 5 digits |
| ❌ **Card declined** | `4000 0000 0000 0002` | Any future date | Any 3 digits | Any 5 digits |
| ⚠️ **Requires authentication** | `4000 0025 0000 3155` | Any future date | Any 3 digits | Any 5 digits |
| 💸 **Insufficient funds** | `4000 0000 0000 9995` | Any future date | Any 3 digits | Any 5 digits |
| 🕐 **Processing error** | `4000 0000 0000 0119` | Any future date | Any 3 digits | Any 5 digits |