# The Clitoral Playbook landing page

A responsive Next.js sales page for the final 24-page digital edition of *The Clitoral Playbook*.

## Run locally

```bash
npm install
npm run dev
```

## Connect Lemon Squeezy

Copy `.env.example` to `.env.local`, then add the reusable checkout URL from the Lemon Squeezy product and the public display price:

```bash
NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL=https://YOUR-STORE.lemonsqueezy.com/checkout/buy/YOUR-VARIANT-ID
NEXT_PUBLIC_EBOOK_PRICE=€19
```

When a real checkout URL is present, every purchase button opens Lemon Squeezy's checkout overlay. Without it, buttons lead to the offer section so the page remains safe to preview.

The site is configured as a static export. `npm run build` creates the production files in `out/`.

## Marketing kit

Launch positioning, audience, messaging, offer strategy, email sequence, social campaigns, paid ad concepts, and testing plan are in `marketing/MARKETING_KIT.md`.
