# DNS Wiki visual integration — provenance and release gates

## Verified primary sources
- DNS Shared Data repository: `dolomitinordicski/dns-shared-data`.
- Foundation 1.4.0 consolidated release: merged PR #262.
- Original swoosh: `graphics/swoosh.svg`, Git blob SHA `622dac4866e5ddd5e37daf5d249086a54fa3d38e`.
- Wiki copy: `public/assets/dns/swoosh.svg`. It is the official source file, **not a redrawing**.
- Foundation header gradient from PR #262: `linear-gradient(115deg, #164657, #447C8D 62%, #719BA7)`.
- Foundation footer gradient from PR #262: `linear-gradient(115deg, #0A2934 0%, #123D4B 55%, #235365 100%)`.
- Foundation's header and footer use differing layout/crop/rotation of the same swoosh source, reproduced as separate CSS presentations.
- Light reference: `#AAD0D1`; fonts: Be Vietnam Pro and Roboto.
- Astro/Starlight retains native language switcher, Pagefind Search, keyboard navigation and theme switcher.

## Isolation and update strategy
- Wiki contains **static presentation-only snapshot** of known Foundation visuals; no runtime imports from Shared Data, no Firebase/Identity/Auth, no Core deployment or PR mutation.
- When Foundation exports versioned, framework-neutral static tokens, replace snapshot with pinned generated assets and add drift testing.
- Do not silently track `main` or load unversioned remote CSS.
- Starlight light/dark behavior is preserved; theme palette values beyond the cited Foundation constants are local accessibility-oriented mappings and require browser contrast review.

## Outstanding before visual sign-off
1. Locate the canonical approved DNS **logo** asset (not yet identified in repository), install it unmodified and verify dimensions/license.
2. Compare header/footer visually to current released Foundation, including desktop/mobile and three locales.
3. Test search, light/dark, screen reader navigation, focus visibility, contrast and reduced motion in the browser.
4. Verify Foundation release tag: `foundation-v1.4.0` was not resolvable when this PR was created.
5. Tool pages remain explicit placeholders; production-link enablement remains out of scope.
6. The Wiki is NOT deployed; GitHub Pages settings remain unchanged.
