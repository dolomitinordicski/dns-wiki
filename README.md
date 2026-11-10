# DNS Wiki

Dolomiti NordicSki documentation portal, built with Astro/Starlight.
Application release: 0.2.0.

## Shared Foundation

Wiki consumes `@dolomitinordicski/dns-shared-data` pinned to the immutable
`foundation-v1.4.1` release, with a committed npm lockfile. The Foundation
package owns design tokens, header/footer styles, shared components,
accessibility, light/dark/system theme and release metadata.

There are no local palette values or downloaded Foundation source templates.
The static first-paint stylesheet is rendered by executing the installed
package's public runtime APIs; the browser initializes that same package.
Only the Starlight semantic-role and document-layout adapter remains local.

See [integration details](docs/FOUNDATION-PACKAGE-INTEGRATION.md).

## Development

```sh
npm ci
npm run check
npm run dev
```

## Verification

```sh
node --test scripts/foundation-lock.test.mjs
npm run check
npx playwright install chromium
npm run test:browser
```

CI verifies exact Foundation release provenance, clean installation, route and
integration checks, production build, and browser behavior in IT/DE/EN on desktop
and mobile. Foundation release dispatches regenerate stale lockfiles and open
validated update PRs.

## Publication

The existing manually controlled Pages preview workflow is retained. A merge
does not automatically publish. Foundation help links are enabled only for
verified public document pages; documentation content and translations still
need their own editorial validation.
