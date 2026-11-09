import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderFoundationFooter, DNS_FOUNDATION_RUNTIME_VERSION } from '../src/lib/foundation-server.mjs';
import { DNS_DESIGN_SYSTEM } from '@dolomitinordicski/dns-shared-data/design-system';

test('uses the installed package for footer version, support and all locales', () => {
  for (const locale of ['it', 'de', 'en']) {
    const html = renderFoundationFooter({ locale, toolVersion: '0.2.0' });
    assert.ok(html.includes('Foundation v' + DNS_FOUNDATION_RUNTIME_VERSION));
    assert.ok(html.includes('dns-tool-footer-links'));
    assert.ok(html.includes('mailto:info@dolomitinordicski.com?subject='));
    assert.ok(html.includes('foundation-v' + DNS_FOUNDATION_RUNTIME_VERSION + '/graphics/swoosh.svg'));
    assert.ok(html.includes('data-dns-lang="' + locale + '"'));
  }
});

test('Wiki owns no palette, typography values or source-extraction adapter', () => {
  const css = fs.readFileSync('src/styles/dns-theme.css', 'utf8');
  assert.doesNotMatch(css, /#[0-9a-f]{3,8}\b|rgba?\(|linear-gradient\(|font-family\s*:/i);
  assert.equal(fs.existsSync('scripts/sync-foundation-tokens.mjs'), false);
  const render = fs.readFileSync('scripts/render-foundation.mjs', 'utf8');
  assert.doesNotMatch(render, /fetch\(|readFile.*node_modules|style\.textContent\s*=/);
  assert.ok(render.includes("import('@dolomitinordicski/dns-shared-data/foundation')"));
  assert.ok(DNS_DESIGN_SYSTEM.typography.primaryFamily);
});
