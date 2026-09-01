# PARIBUS — QA

## Completed checks

- Spanish `/es` and English `/en` render from the same localized component tree.
- `/` returns a permanent redirect to `/es`; unsupported locales return 404.
- Navigation, mobile menu, anchor links, and section-preserving language switching were tested in the browser.
- Responsive rules cover the established 1440px desktop and 390px mobile compositions without changing the reviewed hero treatment.
- The current body uses a disciplined two-column practice list with three decorative analytical motifs, a compact editorial founder profile, simplified contact form, and restrained footer; no standalone methodology section is rendered.
- Practice motifs are `aria-hidden`, contain no visible data labels, and use slow, restrained motion after entering the viewport without competing with the hero video. Reduced-motion users receive the fully composed static state.
- The founder copy is localized and contains no current institutional affiliation. The active portrait was supplied directly and explicitly selected by the project owner; its local provenance is documented.
- Empty fields, invalid email, honeypot, minimum-completion-time rejection, and valid normalization have automated coverage.
- A valid unconfigured contact submission returns the truthful localized disabled state and never reports success.
- Reduced-motion CSS removes transitions and hides the video; its media source is limited to `prefers-reduced-motion: no-preference`, leaving the poster visible instead.
- Root redirect, localized routes, 404, robots, sitemap, and OpenGraph image endpoints pass automated production checks.
- TypeScript, ESLint, Node tests, and the Next.js production build pass.
- Instrument Serif and Manrope license files were inspected; both are SIL OFL 1.1 and are self-hosted.
- The supplied 2026 brand manual was audited against the implementation: the approved lowercase lockup and analytical seal are now used, the hero is set in Manrope, and Instrument Serif is limited to one editorial statement.
- Lighthouse production desktop audit on the Spanish route: Performance 100, Accessibility 100, Best Practices 100, FCP 0.2s, LCP 0.6s, TBT 0ms, CLS 0 in the local test environment. The 2.6 MB transfer is primarily the deliberately retained hero video.

## Intentional limitations

- SEO audit score is suppressed while `NEXT_PUBLIC_SITE_URL` is absent because the site deliberately emits `noindex` and blocks crawlers before a verified domain exists.
- Contact delivery is disabled until a provider and verified recipient are configured.
- The founder portrait uses the approved transparent cutout documented in `docs/FOUNDER_PORTRAIT.md`; there is no photo-card background or visible rectangular boundary.
- The web wordmark, favicon, and generated social card follow the supplied 2026 brand manual. Production handoff should retain the vector master as the source of record.
- The architectural MP4 and its derived poster are the current approved hero media.

## Founder verification gate

Founder details render only when their content records are marked `verified: true`. The current biography and replacement portrait were explicitly supplied for this iteration. The portrait is recorded as `temporary: false` and `approvedForProduction: true`.

## Launch blockers

- Verified HTTPS domain
- Legal company name and applicable privacy text
- Contact provider, sender, and recipient configuration
- Final practice-area scope review
