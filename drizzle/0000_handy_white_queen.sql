CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_name" text NOT NULL,
	"amount" integer NOT NULL,
	"currency" text NOT NULL,
	"stripe_session_id" text,
	"created_at" timestamp DEFAULT now()
);
