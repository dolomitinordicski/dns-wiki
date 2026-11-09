# DNS Wiki Foundation integration

Wiki consumes the same immutable npm Git dependency as the DNS tools:
`@dolomitinordicski/dns-shared-data#foundation-v1.4.1`.
The committed npm lockfile resolves the dereferenced release commit.

Foundation owns design tokens, component styles, footer links/version/graphics,
accessibility, theme settings and persistence. Astro/Starlight owns document
routes, translated content, search, sidebar and page layout.

The static stylesheet is rendered by executing the installed package's public
runtime APIs in an isolated build-time DOM. It contains no copied source templates
and performs no raw-source downloads. The browser uses the same package runtime.
The local stylesheet only maps Starlight semantic roles and document layout.

Foundation is the sole theme preference owner. Starlight's theme selector is
disabled; the adapter passes the Foundation resolved theme to Starlight.
IT/DE/EN document languages remain independent of operational language storage.
Foundation 1.4.1 accessibility controls support IT/DE: English documents use the
shared German control fallback with the correct lang attribute, without local
translations or a fork of the accessibility menu.

`npm ci` installs the committed lock; `npm run check` verifies routes, installed
Foundation provenance, integration invariants and the production build.
`npm run test:browser` verifies all three locales at desktop/mobile widths,
theme persistence/system changes, search, language navigation and mobile menu.

The standard Foundation release dispatch regenerates a stale lock even when its
manifest already names the requested tag, and runs clean-install consumer checks.
Publication retains the existing controlled Pages workflow.
