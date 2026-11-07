# DNS Wiki — GitHub Pages controlled preview runbook

Status: proposed workflow only; not published.

## Hosting settings (do not change without explicit authorization)
1. Check GitHub repository **Settings → Pages** and verify Pages has been enabled.
2. To use the workflow in this PR, Pages source must be **GitHub Actions**, not legacy branch publishing.
3. Confirm repository visibility and plan meet GitHub Pages conditions.
4. Verify environment protection and release reviewer requirements on `github-pages` before granting deploy permissions.

## Authorization and release workflow
- CI remains independent: `.github/workflows/ci.yml` builds PRs without deploy.
- This workflow is **manual-only** (`workflow_dispatch`); merging it cannot publish anything.
- Running a deployment and making any Pages settings changes require a fresh explicit `AUTORIZZO DEPLOY PR #...` authorization.
- When authorized, an operator may manually dispatch with exact confirmation value `APPROVED-WIKI-PREVIEW`.
- There is no binding between the confirmation text and the identity of the authorizer: governance relies on restricted repository permissions and required reviewers. Do not treat this input as a security boundary.

## Preview validation
- Public URL once deployed: `https://dolomitinordicski.github.io/dns-wiki/`.
- Check all 3 languages at `/it/`, `/de/`, `/en/`.
- Check original swoosh at `/assets/dns/swoosh.svg`.
- Check 8 tool overview routes per locale, search index, light/dark, responsive navigation and mailto.
- Use keyboard-only and mobile browser testing for focus, contrast and reduced motion.
- Verify no tool footer links are enabled before public guide verification.

## Open risks
- First-party GitHub connector does not currently expose repository Pages settings read/write, so current Pages configuration has not been confirmed.
- Logo asset and manual visual/browser accessibility review remain outstanding.
- Public Pages previews are publicly visible and should only contain vetted, non-sensitive content.
