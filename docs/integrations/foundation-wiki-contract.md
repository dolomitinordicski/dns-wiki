# Foundation ↔ DNS Wiki — integration contract (draft v0.1)
Status: proposed only. Do not enable production footer links.

Base URL: https://dolomitinordicski.github.io/dns-wiki/
Languages: it, de, en. Tool identifiers: src/config/tool-registry.json.
Homepage for each tool: `/{locale}/{toolId}/` relative to `/dns-wiki/`.

## Footer guidance
IT: Guida · Supporto
DE: Anleitung · Support
EN: Help · Support

Open validated Wiki URLs in new tab, using target="_blank" rel="noopener noreferrer".
If contextual page is missing, fall back to *verified published* tool overview; otherwise hide link.
The Foundation footer MUST NOT enable links merely because a Markdown file exists on a branch.
Support mailto:info@dolomitinordicski.com with safely URL-encoded subject containing tool/version and Foundation version when known.
Do not pass credentials, tokens, personal data or authentication state to the Wiki.
Do not change Foundation or PR #262 from DNS Wiki.
