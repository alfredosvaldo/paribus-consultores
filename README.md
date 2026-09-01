# PARIBUS

Bilingual institutional website for Paribus Consultores. Spanish is the default language at `/es`; English is available at `/en`; `/` redirects to `/es`.

## Local development

Requirements: Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000/es` or `http://localhost:3000/en`.

## Quality checks

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

To run production route checks, start the production build on port 3100 and run:

```bash
npm run start -- -p 3100
npm run test:routes
```

## Content and localisation

All public copy is centralized in `content/site-content.ts`. Spanish follows `CONTENT.md` plus explicitly approved later content; English uses a restrained British-English adaptation. Components are shared between locales.

Founder biography records remain behind an explicit `verified` gate. The current concise biography was supplied for this iteration and does not state a current institutional affiliation. The active portrait was supplied directly by the project owner and explicitly selected for the site; its content record is marked `temporary: false` and `approvedForProduction: true`. See `docs/FOUNDER_PORTRAIT.md`.

## Contact delivery

The contact form validates input on the server and includes honeypot and minimum-completion-time checks. Delivery is intentionally disabled through `lib/contact-transport.ts` until a real provider and verified recipient are configured.

An unconfigured submission never reports success and never stores or silently discards the message. It returns:

- Spanish: `El envío de mensajes aún no está habilitado.`
- English: `Message delivery is not yet enabled.`

Implement a real `ContactTransport`, add provider-specific secrets only to the deployment environment, and add a success state before enabling delivery.

## Production URL and indexing

Set `NEXT_PUBLIC_SITE_URL` to the verified HTTPS origin before deployment. Until it is set:

- pages emit `noindex, nofollow`;
- `robots.txt` disallows crawling;
- production canonicals and `hreflang` links are withheld;
- structured organisation data is omitted.

This prevents a local or unverified domain from being indexed accidentally.

## Fonts

Instrument Serif and variable Manrope are self-hosted through `next/font/local` from the installed Fontsource packages. Both packages include the SIL Open Font License 1.1. CSS fallbacks remain Georgia for display and Arial/Helvetica for body and UI.

The supplied 2026 brand manual is reflected in the principal web lockup, analytical seal favicon, and typographic hierarchy. Manrope carries the wordmark, hero, headings, body, and UI; Instrument Serif is reserved for the single editorial statement. See `docs/BRAND_MANUAL_AUDIT.md`.

## Hero media

The homepage hero uses the approved architectural MP4 at `public/media/paribus-architectural-hero.mp4`, with a still derived from the same footage as its poster and failure fallback. The video is muted, inline, decorative, and automatically pauses when the hero is off-screen or the document is hidden. A short opacity transition masks the eight-second loop boundary. Users who prefer reduced motion receive only the static poster.

## Outstanding launch inputs

- Verified domain and legal company name
- Contact recipient and delivery provider
- Applicable privacy/legal text
- Confirmed final scope for each practice area
