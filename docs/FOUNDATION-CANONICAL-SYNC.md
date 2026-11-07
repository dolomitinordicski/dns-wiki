# DNS Wiki — canonical Foundation build integration

Source of truth: `dolomitinordicski/dns-shared-data`, pinned commit `1a1a0ca3ac67fc904210b33479cd29c16c5064f1`.
Versions verified: Foundation 1.4.0 / DNS Design System 1.25.0.

## Build pipeline
`npm run sync:foundation` fetches `src/design-system.ts`, `src/ui/navigation.ts`, `src/ui/footer.ts`, `brand/logo-web.png`, and `graphics/swoosh.svg` at the pinned source commit. It transpiles the exported TS design system using esbuild, extracts canonical gradients from the runtime modules, and produces:
- `src/styles/generated/foundation-tokens.css` (canonical CSS variables)
- `public/assets/dns/logo-web.png` (official logo)
- `public/assets/dns/swoosh.svg` (official swoosh)

No tokens are manually edited. Astro runs the synchronization at `prebuild` and `predev`. The site consumes the emitted CSS; no runtime dependency on Firebase, authentication or Shared Data services.

## Important
A CDN or GitHub connectivity failure blocks the build rather than silently building with guessed values. The pin must be updated in a reviewed PR when Foundation changes. This is build-time consumption of the official design source, not a competing visual system.

Starlight's documentation layouts, accessible search, locale switcher, and theme controls remain native. The mapping layer is limited to translating Foundation's canonical variables to Starlight CSS variables and its HTML structure. Foundation dark accessibility reference surface/text colors are used only for the dark-mode bridge; formal browser QA is still required.

No changes to Shared Data/Core/Foundation production repositories; no deploy or Pages settings change.
