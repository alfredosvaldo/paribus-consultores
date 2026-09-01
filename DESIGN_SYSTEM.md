# PARIBUS — DESIGN SYSTEM

## Design principles

1. Editorial over dashboard.
2. Space over decoration.
3. Hierarchy over density.
4. Motion must explain or reinforce structure.
5. Premium without luxury clichés.
6. Warm, not rustic.
7. Technical, not technological-looking.

## Colors

```css
:root {
  --espresso-900: #29211C;
  --charcoal-950: #171614;
  --ivory-050: #F3EFE8;
  --stone-300: #B7AA9E;
  --copper-500: #A66F46;
  --mineral-700: #47362C;
  --warm-white: #FAF8F4;
}
```

## Typography

Display: Instrument Serif
Body/UI: Manrope

Suggested scale:

```css
--text-hero: clamp(3.25rem, 7vw, 6.5rem);
--text-h1: clamp(2.75rem, 5.5vw, 4.75rem);
--text-h2: clamp(2.25rem, 4vw, 3.5rem);
--text-h3: clamp(1.75rem, 2.5vw, 2.125rem);
--text-body-xl: clamp(1.25rem, 1.7vw, 1.625rem);
--text-body: clamp(1.0625rem, 1.25vw, 1.1875rem);
--text-small: 0.875rem;
```

## Layout

- max width: 1360px
- content grid: 12 columns desktop
- generous section spacing
- avoid card grids unless functionally necessary
- target body line length: 55-70 characters

## Border

1px subtle lines using Stone with low opacity.

## Radius

Use minimal radii:
- 0-4 px on editorial surfaces
- max 8 px for functional inputs

No pill-shaped UI except tags if needed later.

## Buttons

Primary:
- dark solid or inverse light depending background
- no heavy shadow
- squared / slight radius

Secondary:
- text link + subtle copper rule or arrow

## Motion

Default easing:
`cubic-bezier(0.22, 1, 0.36, 1)`

Durations:
- micro: 180-260 ms
- reveal: 500-750 ms
- section transitions: 700-1000 ms

Respect reduced motion.

## Hero media

- video background with poster fallback
- dark overlay only if needed for text legibility
- never hide weak video behind excessive blur

## Accessibility

- WCAG AA contrast
- visible focus states
- keyboard navigation
- semantic HTML
- no hover-only information
- reduced motion support
