# MASTER IMPLEMENTATION PROMPT — PARIBUS

You are the lead product designer and senior front-end engineer responsible for implementing the first public website for **Paribus Consultores**, a boutique economic, financial and regulatory consulting firm.

Before writing code, read these files in full and treat them as immutable sources of truth:

1. `docs/BRAND.md`
2. `docs/CONTENT.md`
3. `docs/DESIGN_SYSTEM.md`

If any implementation idea conflicts with those files, follow the files.

## Goal

Create an exceptionally polished, restrained, editorial consulting website that communicates seniority, rigor and clarity without relying on fabricated clients, KPIs, projects or testimonials.

The site must feel closer to a high-end economic advisory firm and an editorial publication than to a SaaS landing page.

## Pages

Implement:

- `/` — Inicio
- `/areas-de-practica`
- `/jorge-valverde`
- `/contacto`

Do not implement visible Insights, Team, Cases or Client sections.

## Design direction

Core concept: **Aislar lo que importa.**

Tagline: **Rigor para decisiones complejas.**

Use:
- Instrument Serif for display typography
- Manrope for UI/body
- Espresso / ivory / charcoal / copper palette from the design system
- generous whitespace
- precise grid
- fine rules
- restrained motion
- one strong abstract visual system

Do not use:
- gradient-heavy AI aesthetics
- purple/blue startup palettes
- huge rounded cards
- bento grids
- generic business icons
- stock office photography
- handshake imagery
- fake charts
- fake statistics
- fake client logos
- testimonial placeholders
- excessive shadows
- glassmorphism as a UI style

## Hero

The homepage hero must support:

- full-viewport abstract background video on capable desktop devices;
- instant poster image fallback;
- static alternative when `prefers-reduced-motion` is enabled;
- mobile-optimized static or lightweight media variant;
- overlaid text with impeccable contrast.

Use placeholder paths only:

- `/video/hero-paribus.webm`
- `/video/hero-paribus.mp4`
- `/images/hero-paribus-poster.avif`

Do not generate fake media files.

## Motion

Motion should be quiet and deliberate.

Implement:
- masked text reveals;
- subtle line growth;
- restrained section transitions;
- optional sticky behavior for the “Definir / Analizar / Decidir” section.

Do not implement scroll hijacking.

Prefer Motion. Use GSAP only if a specific interaction cannot be implemented cleanly otherwise.

## Architecture

Use:
- latest stable Next.js available in the environment;
- TypeScript;
- Tailwind CSS;
- App Router;
- reusable components;
- server components by default;
- client components only where interaction requires them.

Keep dependencies minimal.

## Content

All visible copy must come from `docs/CONTENT.md` or structured content files derived verbatim from it.

Never invent factual claims.

The provisional founder bio must be clearly isolated in the content layer so it can be replaced after CV verification.

## SEO

Implement:
- metadata per page;
- OpenGraph defaults;
- sitemap;
- robots;
- canonical structure;
- organization/professional-service structured data only with verified fields.

Do not fabricate social profiles, address details, phone numbers or company identifiers.

## Contact

Build an accessible contact form with:
- Nombre
- Organización
- Correo
- Mensaje

Implement validation and a clean server-side integration boundary, but if no email provider credentials exist, provide a documented mock/stub rather than inventing credentials.

## Accessibility

Target WCAG AA.

Required:
- semantic landmarks;
- keyboard navigation;
- visible focus states;
- reduced-motion behavior;
- appropriate labels;
- color contrast;
- no hover-only critical content.

## Performance

Optimize for Core Web Vitals.

Required:
- responsive images;
- lazy load below-fold media;
- avoid layout shift;
- do not block LCP on hero video;
- preload only essential fonts/assets;
- no unnecessary third-party scripts.

## Deliverables

1. Working production-ready Next.js site.
2. Clean README with setup instructions.
3. `docs/QA.md` containing:
   - completed checks;
   - known limitations;
   - items requiring founder verification.
4. Automated lint/build checks.
5. No console errors.
6. No fabricated content.

## Quality gate

Before declaring completion, verify:

- the site still looks premium with the hero video disabled;
- mobile composition is intentionally designed, not merely stacked;
- typography and spacing are consistent;
- no section looks like a generic template block;
- all claims can be traced to approved content;
- the brand feels warm and serious, not rustic or café-like;
- motion remains subordinate to content;
- build and lint succeed.

Do not redesign the brand. Implement it faithfully.
