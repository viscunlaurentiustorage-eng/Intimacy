# The Clit Runner landing page

A responsive Next.js sales page for the 37-page premium edition of *The Clit Runner* by The Pleasure Manual.

## Run locally

```bash
npm install
npm run dev
```

## Connect Lemon Squeezy

Copy `.env.example` to `.env.local` and replace the placeholder with the checkout URL from your Lemon Squeezy product:

```bash
NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL=https://YOUR-STORE.lemonsqueezy.com/buy/YOUR-CHECKOUT-ID
```

Restart the development server after changing environment variables. The site is configured as a static export; `npm run build` creates the production files in `out/`.
