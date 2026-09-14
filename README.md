# The Clitoral Playbook landing page

A responsive Next.js sales page for the final 24-page digital edition of *The Clitoral Playbook*.

## Run locally

```bash
npm install
npm run dev
```

## Payhip checkout

The live Payhip cart URL and public display price are included as safe defaults. They can also be overridden through environment variables:

```bash
NEXT_PUBLIC_PAYHIP_CHECKOUT_URL=https://payhip.com/buy?s=1&cart_links%5B%5D=035Rp&qty%5B035Rp%5D=1
NEXT_PUBLIC_EBOOK_PRICE=$9.99
```

Every purchase button opens the secure Payhip cart in a new tab.

The site is configured as a static export. `npm run build` creates the production files in `out/`.

## Marketing kit

Launch positioning, audience, messaging, offer strategy, email sequence, social campaigns, paid ad concepts, and testing plan are in `marketing/MARKETING_KIT.md`.
