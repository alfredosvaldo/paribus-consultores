# Founder portrait

- Source asset: `public/images/jorge-valverde-portrait.jpg`
- Site asset: `public/images/jorge-valverde-cutout.png`
- Original file: supplied directly by the project owner on 2026-08-31
- Original dimensions: 1026×1600 pixels
- Cutout dimensions: 820×1220 pixels, RGBA with genuine transparency
- Content-model status: `temporary: false`, `approvedForProduction: true`

The site uses a transparent cutout derived from the supplied photograph without synthetic replacement or facial modification. `scripts/remove-portrait-background.m` reproduces the source-specific grey-background extraction and editorial crop using macOS system imaging frameworks; it introduces no application dependency. CSS applies only a subtle bottom fade over the final 18% of the transparent subject. The original photograph remains preserved unchanged.
