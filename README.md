# DNS Wiki

Official Dolomiti NordicSki documentation portal — initial implementation scaffold.

- Astro + Starlight; site base `/dns-wiki/`
- IT / DE / EN, each with explicit URL prefix
- 8 tool sections, marked **not yet verified against deployed versions**
- Contract: `docs/integrations/foundation-wiki-contract.md`
- Foundation/Core/Shared Data audit: `docs/FOUNDATION-ASSET-AUDIT.md`
- CI without deployment; **no Pages publication workflow**
- Foundation help links disabled until real public pages are deployed and checked

## Development

```sh
npm install
npm run check
npm run dev
```

## Release blockers
Confirm Foundation 1.4.0 PR #262 canonical tokens, logo, swoosh and Glacier Glass implementation.
Validate published tool versions, translate real guides, audit privacy and accessibility.
No merge, Pages settings changes or deployment without the user's explicit `AUTORIZZO DEPLOY PR #...`.
