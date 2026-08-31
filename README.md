# 💳 Stripe Payment Integration
A backend payment integration project built with **Node.js, Express, Stripe, PostgreSQL, and Drizzle ORM**. The project demonstrates how to create Stripe Checkout Sessions, securely handle payment events through webhooks, store payment data in a PostgreSQL database, and test the payment flow using Playwright.

## 🚀 Features
* 💳 Stripe Checkout integration
* 🔐 Environment-based secret key management
* 🛒 Create Stripe Checkout Sessions
* 🔔 Stripe Webhook integration
* 🗄️ PostgreSQL database integration
* ⚡ Drizzle ORM for database operations
* 🧪 Automated browser testing with Playwright
* 🔄 Payment status handling through webhook events
* 🌐 REST API built with Express.js

## 🛠️ Tech Stack
| Technology       | Purpose                         |
| ---------------- | ------------------------------- |
| **Node.js**      | Backend runtime                 |
| **Express.js**   | REST API / server               |
| **Stripe**       | Payment processing              |
| **PostgreSQL**   | Database                        |
| **Drizzle ORM**  | Database queries & schema       |
| **Playwright**   | Automated browser testing       |
| **dotenv**       | Environment variable management |
| **Git & GitHub** | Version control                 |

## 📁 Project Structure
stripe-payment-project/
│
├── src/
│   ├── routes/
│   │   ├── checkout.js
│   │   └── webhook.js
│   │
│   ├── db/
│   │   ├── schema.js
│   │   └── index.js
│   │
│   └── server.js
│
├── tests/
│   └── payment.spec.js
│
├── .env
├── .gitignore
├── package.json
├── drizzle.config.js
└── README.md
```

> The exact structure may vary depending on the current implementation of the project.

## ⚙️ How It Works

### 1. Checkout Request

The client sends a request to the Express backend to initiate a payment.

```text
Client
  │
  │  POST /checkout
  ▼
Express Server
  │
  │  Create Checkout Session
  ▼
Stripe API
  │
  │  Checkout URL
  ▼
Client
  │
  ▼
Stripe Checkout
```

### 2. Payment Processing

The customer completes the payment on Stripe Checkout.

Stripe then sends an event to the application's webhook endpoint.

```text
Customer
   │
   ▼
Stripe Checkout
   │
   │ Payment completed
   ▼
Stripe Webhook
   │
   ▼
Express Webhook Route
   │
   ▼
PostgreSQL
```

### 3. Webhook Handling

The webhook endpoint listens for Stripe events such as:

* `checkout.session.completed`
* Payment-related events
* Other relevant Stripe webhook events

The application processes the event and stores the required payment information in PostgreSQL.

### 🔐 Stripe Webhook Security

Stripe webhook signature verification is used to ensure that incoming webhook requests are genuinely sent by Stripe.

The webhook route is registered **before `express.json()`** so that the raw request body is available for Stripe signature verification.

## 🗄️ Database

PostgreSQL is used to persist payment-related information.

**Drizzle ORM** is used for:

* Defining database schemas
* Running database queries
* Managing database interactions
* Keeping database operations type-safe and structured

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
DATABASE_URL=your_postgresql_connection_string
PORT=3000
```

⚠️ **Never commit your `.env` file or Stripe secret keys to GitHub.**

Make sure `.env` is included in `.gitignore`:

```gitignore
node_modules/
.env
```

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DivyanshDevSharma07/stripe-payment-project.git
cd stripe-payment-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file and add your Stripe and PostgreSQL credentials.

### 4. Start the server

```bash
npm run dev
```

The server will run on:

```text
http://localhost:3000
```

## 🔔 Testing Stripe Webhooks Locally

Stripe CLI can be used to forward webhook events to the local Express server.

Example:

```bash
stripe listen --forward-to localhost:3000/webhook
```

The Stripe CLI provides a webhook signing secret that can be configured in the `.env` file.

You can then trigger Stripe test events locally and verify that the application receives and processes them correctly.

## 🧪 Automated Testing

The project uses **Playwright** for automated browser testing.

Playwright is used to verify the application's payment flow from the user's perspective, including navigating through the checkout process and validating expected behavior.

Run tests using:

```bash
npx playwright test
```

For the interactive Playwright test runner:

```bash
npx playwright test --ui
```

## 🧠 Key Concepts Learned

Through this project, I worked with:

* Stripe Checkout Sessions
* Stripe API integration
* Stripe Webhooks
* Webhook signature verification
* Express middleware ordering
* REST API development
* PostgreSQL
* Drizzle ORM
* Environment variables and secret management
* Stripe CLI for local webhook development
* Automated browser testing with Playwright
* Git and GitHub workflow

## 🔄 Payment Flow

```text
                    ┌─────────────────┐
                    │     Client      │
                    └────────┬────────┘
                             │
                             │ Create Checkout
                             ▼
                    ┌─────────────────┐
                    │ Express Backend │
                    └────────┬────────┘
                             │
                             │ Stripe API
                             ▼
                    ┌─────────────────┐
                    │ Stripe Checkout │
                    └────────┬────────┘
                             │
                             │ Payment
                             ▼
                    ┌─────────────────┐
                    │      Stripe     │
                    └────────┬────────┘
                             │
                             │ Webhook Event
                             ▼
                    ┌─────────────────┐
                    │ Webhook Handler │
                    └────────┬────────┘
                             │
                             │ Drizzle ORM
                             ▼
                    ┌─────────────────┐
                    │   PostgreSQL    │
                    └─────────────────┘
```

## 📌 Future Improvements

* Add authentication and user accounts
* Add an order management system
* Add payment history dashboard
* Add refund handling
* Add improved error handling and logging
* Add more comprehensive API and end-to-end tests
* Deploy the application to a production environment

## 👨‍💻 Author

**Divyansh Dev**

Electronics & Communication Engineering
Delhi Technological University

---

⭐ If you found this project useful, consider giving it a star!


## 💳 Stripe Test Cards
Use these card numbers in test mode. No real charges will be made.
| Scenario | Card Number | Expiry | CVC | ZIP |
|----------|-------------|--------|-----|-----|
| ✅ **Successful payment** | `4242 4242 4242 4242` | Any future date | Any 3 digits | Any 5 digits |
| ❌ **Card declined** | `4000 0000 0000 0002` | Any future date | Any 3 digits | Any 5 digits |
| ⚠️ **Requires authentication** | `4000 0025 0000 3155` | Any future date | Any 3 digits | Any 5 digits |
| 💸 **Insufficient funds** | `4000 0000 0000 9995` | Any future date | Any 3 digits | Any 5 digits |
| 🕐 **Processing error** | `4000 0000 0000 0119` | Any future date | Any 3 digits | Any 5 digits |