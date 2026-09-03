# Team portraits

## Alexis Salazar

- Source asset: `public/images/alexis-salazar-source.png`
- Site asset: `public/images/alexis-salazar-cutout.png`
- Original file: supplied directly by the project owner via chat on 2026-09-02
- Original dimensions: 576×576 pixels, square, opaque peach/salmon backdrop
- Cutout dimensions: 576×576 pixels, RGBA with genuine transparency
- Content-model status: `temporary: false`, `approvedForProduction: true`

The site uses a transparent cutout derived from the supplied photograph without synthetic
replacement or facial modification. `scripts/lift-portrait-subject.m` extracts the subject
using Vision's `VNGenerateForegroundInstanceMaskRequest` (macOS 14+) rather than colour
keying: the supplied backdrop is high-chroma, so the grey-luminance heuristic in
`scripts/remove-portrait-background.m` (used for the founder portrait) does not apply here
and would keep the background entirely. Same shared display treatment as the founder
portrait — the `.founder-portrait` bottom-fade mask and `.founder-portrait img`
`saturate(0.97) contrast(0.98)` filter — applied via CSS, not baked into the asset.

Known limitation: the source is square (576×576) versus the founder's tall portrait crop
(820×1220), so the two portraits do not share the same aspect ratio. It renders adequately
at the current display width but sits visibly shorter than the founder's torso crop. A
higher-resolution, portrait-oriented original would improve both sharpness and proportional
consistency with the founder portrait.

See `docs/FOUNDER_PORTRAIT.md` for the founder's portrait provenance.
