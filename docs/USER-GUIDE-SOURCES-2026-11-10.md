# User guide provenance: Data Entry and Flyer Studio

Reviewed: 2026-11-10. This review covers integrated source and contracts, not a
production session with an operator account. No production records were read,
modified or copied into the guides.

## Frozen sources

| Repository | Source commit | Application version |
| --- | --- | --- |
| DNS-Data-Entry | ee946d158f06dca746e6c3e154d99a9b4d2f428d | 0.1.4 |
| DNS-Flyer-Studio | 97b8b97105238af41e3dd7261cbe48a1c0e88fbd | 0.0.4 |
| dns-shared-data | ea2022c65a0e8d085ce071744dbe1169b384259c | Contracts at this commit |
| dns-wiki | a07516cc0532f1772df9bca80c5852c96774d871 | 0.2.0 baseline |

The two tool commits install Foundation 1.4.1. Guide languages: IT, DE, EN.
Tool interface languages: IT/DE. English instructions retain real Italian control
labels where needed, rather than inventing an English application interface.

## Evidence by task

Paths below are relative to their named repository and the frozen commit above.

| Claim / workflow | Evidence |
| --- | --- |
| Data Entry login and module access | Data Entry: src/App.tsx; src/features/auth/LoginScreen.tsx; src/config/modules.ts |
| Pricing scopes, priority and explicit save | Data Entry: src/features/pricing/PricingSetup.tsx; README.md |
| Orders by organisation, drafts, submit and locking | Data Entry: src/features/orders/TicketOrdersTable.tsx; src/features/orders/AreaOrderForm.tsx |
| Seasonal catalogue, blank versus zero | Shared Data: docs/DNS-Order-Persistence-v0.4.md; docs/Seasonal-Operational-Dataset-v0.3.md |
| Supplier snapshots and revocation | Data Entry: src/services/publicOrderShares.ts; Shared Data: docs/DNS-Public-Order-Sharing-Print-v1.md |
| Sales, price snapshots, revenue adjustment and conflicts | Data Entry: src/features/sales/SalesEntry.tsx; README.md |
| Seasonal trail checks and per-trail saving | Data Entry: src/features/track-quality/TrackQualityEntry.tsx |
| KP dates, lengths, snow split, exclusion, revisions and validation | Data Entry: src/features/kp/KPDataEntry.tsx |
| Collective order header-only persistence | Data Entry: src/features/collective-orders/CollectiveOrdersWorkspace.tsx |
| General verification section is not a full approval workflow | Data Entry: src/App.tsx fallback for verification module |
| Flyer identity, safe loading and read-only central list | Flyer Studio: src/App.tsx; src/data/currentFlyerAccess.ts; src/data/flyerRepository.ts |
| Available product taxonomy and allowed editing | Flyer Studio: src/model/flyerProductModel.ts; src/components/EditorPanel.tsx; src/components/editor/EditorChrome.tsx |
| Official pricing and editorial regional from-prices | Flyer Studio: src/data/livePriceLists.ts; docs/F7.1-PRICE-LISTS-AND-TICKETS.md; docs/data-ownership-audit.md |
| Autosave status and failure handling | Flyer Studio: src/hooks/useFlyerAutosave.ts; src/components/EditorPanel.tsx |
| Image library, upload and temporary preview | Flyer Studio: src/components/editor/SimpleImageEditorTab.tsx |
| QR destination and permitted fields | Flyer Studio: src/components/editor/QRCodeEditorTab.tsx; src/components/editor/SimpleContentEditorTab.tsx |
| Print proofs do not issue valid tickets | Flyer Studio: src/components/print-proof/printProofModel.ts; docs/data-ownership-audit.md |
| Browser-vector PDF and raster PNG, per-product options | Flyer Studio: src/App.tsx; src/components/ExportModal.tsx |
| Social sharing does not publish a Core snapshot | Flyer Studio: src/components/SocialShareModal.tsx; Shared Data: docs/DNS-Flyer-Data-Domain-v1.md |
| Photo rights and credits | Flyer Studio: README.txt |
| Save versus immutable publication | Shared Data: docs/DNS-Flyer-Data-Domain-v1.md |

## Source conflicts resolved

- The Data Entry README still names Foundation 1.2.0; the pinned package and
  integrated runtime are 1.4.1. The guide records the actual package version.
- The Data Entry release gate contains historical findings and proposals. The
  guides do not carry forward old DEV login instructions, absence of a trail
  module, or a claim that all modules listed as planned are implemented.
- The old collective-order proposal says no persistence. Current source supports
  header persistence only. The guides explicitly warn that items and allocations
  remain local, without publishing private procurement fixture figures.
- Flyer F6 predates email/password login and the area-shared image library.
  Current integrated UI and acceptance documentation take precedence for those
  operator steps; old Google-only/local-binary statements are not repeated.
- F7 describes an earlier simplified tab set; current EditorChrome also exposes
  Layout, and ticket models disable the main image tab.
- F7.1 deferred detailed price mapping. Current livePriceLists.ts supplies the
  integrated mapping. Sample editorial prices and interim reciprocity mappings
  are not presented as official tariffs or entitlement.
- Save/open project dialogs present in the repository are not advertised as a
  top-level operator path because the current Navbar does not expose them.
- The general verification placeholder is distinguished from specific KP
  validation. Neither is described as final FAIR/accounting approval.

## Editorial and publication boundary

These are operational guides for documented features, not permission grants,
production acceptance evidence, accounting approval, or a statement that every
catalogue product is enabled for every account.

Only the Data Entry/Flyer Studio overview pages in IT/DE/EN and their home-page
availability labels are changed. Other tool guides and Foundation footer help
enablement remain unchanged. Existing document routes are preserved.

Future changes to tool fields, permissions, status transitions, product
availability or export behavior require a source review of all three languages.
Publication follows the Wiki's existing controlled manual Pages workflow.
