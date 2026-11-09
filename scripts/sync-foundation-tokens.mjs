/**
 * Build-time adapter for the canonical DNS Foundation design system.
 * No hand-maintained token values. Files are downloaded at a pinned Shared Data commit.
 * The wiki remains static and has no Shared Data runtime/Firebase dependency.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { transform } from 'esbuild';

const SHARED_COMMIT = '1a1a0ca3ac67fc904210b33479cd29c16c5064f1';
const BASE = `https://raw.githubusercontent.com/dolomitinordicski/dns-shared-data/${SHARED_COMMIT}/`;
const read = async (path) => {
  const res = await fetch(BASE + path, { signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`Shared Data asset ${path}: HTTP ${res.status}`);
  return res;
};
const ts = await (await read('src/design-system.ts')).text();
const { code } = await transform(ts, { loader: 'ts', format: 'esm', target: 'es2022' });
const source = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
const ds = source.DNS_DESIGN_SYSTEM;
if (!ds || ds.version !== '1.25.0') throw new Error('Unexpected DNS Design System version; stop instead of silently drifting');

const [navigation, footer, primitives] = await Promise.all([
  read('src/ui/navigation.ts').then(r=>r.text()),
  read('src/ui/footer.ts').then(r=>r.text()),
  read('src/ui/primitives.ts').then(r=>r.text())
]);
const gradient = (source, selector) => {
  const start = source.indexOf(selector);
  if (start < 0) throw new Error('Foundation style selector not found: ' + selector);
  const part = source.slice(start, start + 700);
  const match = part.match(/background:\s*(linear-gradient\([^;]+\));/);
  if (!match) throw new Error('Foundation gradient missing: ' + selector);
  return match[1].trim();
};
const headerGradient = gradient(navigation, '.dns-foundation-header {');
const footerGradient = gradient(footer, '[data-dns-tool-footer] {');
const c = ds.colors, t = ds.typography, s = ds.shape, sp = ds.spacing, sh = ds.shadow, h = ds.header, f = ds.footer;
const tokens = {
  '--color-dns-deep':c.deep,'--color-dns-mid':c.mid,'--color-dns-light':c.light,
  '--color-dns-bg':c.background,'--color-dns-surface':c.surface,
  '--color-dns-dark-text':c.darkText,'--color-dns-muted':c.mutedText,
  '--color-dns-border':c.border,'--color-dns-subtle-border':c.subtleBorder,
  '--color-dns-primary-dark':c.primaryDark,'--color-dns-secondary-dark':c.secondaryDark,
  '--font-display':`"${t.primaryFamily}",sans-serif`,
  '--font-heading':`"${t.primaryFamily}",sans-serif`,
  '--font-body':`"${t.primaryFamily}",sans-serif`,
  '--font-alt':`"${t.secondaryFamily}",sans-serif`,
  '--dns-base-font-size':`${t.baseFontSizePx}px`,
  '--dns-heading-size':`${t.headingPx}px`,
  '--dns-section-title-size':`${t.sectionTitlePx}px`,
  '--dns-label-size':`${t.labelPx}px`,
  '--dns-uppercase-tracking':`${t.uppercaseTrackingEm}em`,
  '--dns-card-radius':`${s.cardRadiusPx}px`,
  '--dns-control-radius':`${s.controlRadiusPx}px`,
  '--dns-badge-radius':`${s.badgeRadiusPx}px`,
  '--dns-page-x':`${sp.pageXRem}rem`,
  '--dns-page-y':`${sp.pageYRem}rem`,
  '--dns-card-padding':`${sp.cardPaddingRem}rem`,
  '--dns-card-gap':`${sp.cardGapPx}px`,
  '--dns-compact-gap':`${sp.compactGapPx}px`,
  '--dns-card-shadow':sh.card,
  '--dns-header-shadow':sh.header,
  '--dns-floating-shadow':sh.floatingControl,
  '--dns-header-logo-height':`${h.logoHeightPx}px`,
  '--dns-header-title-color':h.titleColor,
  '--dns-footer-text':f.textColor,
  '--dns-footer-font-size':`${f.fontSizePx}px`,
  '--dns-card-bg':ds.cards.background,
  '--dns-card-accent':ds.cards.defaultAccent,
  '--dns-card-accent-strong':ds.cards.strongAccent,
  '--dns-foundation-header-gradient':headerGradient,
  '--dns-foundation-footer-gradient':footerGradient,
};
const css = `/* GENERATED — DNS Shared Data ${SHARED_COMMIT}, design system ${ds.version}.
 * Run npm run sync:foundation. Do not manually edit design tokens here. */
:root {
${Object.entries(tokens).map(([k,v])=>`  ${k}: ${v};`).join('\n')}
}
`;
await mkdir('src/styles/generated',{recursive:true});
await writeFile('src/styles/generated/foundation-tokens.css', css);

/**
 * Rather than copying a handful of colors, build the actual Foundation
 * CSS rules from the pinned runtime sources. These are the CSS templates
 * used by DNS Core/Shared Data and contain the official component geometry.
 */
const extractStyle = (source, label) => {
  const marker = 'style.textContent = ' + String.fromCharCode(96);
  const start = source.indexOf(marker);
  if (start < 0) throw new Error('Foundation style template missing: ' + label);
  const body = source.slice(start + marker.length);
  const end = body.indexOf(String.fromCharCode(96) + ';');
  if (end < 0) throw new Error('Foundation style template terminator missing: ' + label);
  return body.slice(0,end).replaceAll('\\\\n', '\\n');
};
const navValues = {
  'desktopTabs.tabPaddingYRem': ds.responsive.tabs.desktop.tabPaddingYRem,
  'desktopTabs.tabPaddingXRem': ds.responsive.tabs.desktop.tabPaddingXRem,
  'tabletTabs.tabPaddingYRem': ds.responsive.tabs.tablet.tabPaddingYRem,
  'tabletTabs.tabPaddingXRem': ds.responsive.tabs.tablet.tabPaddingXRem,
  'mobileTabs.tabPaddingYRem': ds.responsive.tabs.mobile.tabPaddingYRem,
  'mobileTabs.tabPaddingXRem': ds.responsive.tabs.mobile.tabPaddingXRem,
  'navigation.tabs.transitionMs': ds.navigation.tabs.transitionMs,
  'mobileMax': ds.responsive.breakpointsPx.mobileMax,
  'desktop': ds.responsive.breakpointsPx.desktopMin,
  'desktop - 1': ds.responsive.breakpointsPx.desktopMin - 1,
};
const navCss = extractStyle(navigation,'navigation').replace(/\\$\\{([^}]+)\\}/g, (match,expr)=>{
  const v=navValues[expr.trim()];
  if(v===undefined) throw new Error('Unexpected Foundation navigation token: '+expr);
  return String(v);
}).replaceAll('https://raw.githubusercontent.com/dolomitinordicski/dns-shared-data/foundation-v1.3.0/graphics/swoosh.svg','/dns-wiki/assets/dns/swoosh.svg');
const footerCss=extractStyle(footer,'footer');
const primitivesCss=extractStyle(primitives,'primitives');
if(!primitivesCss.includes('.dns-card{')||!navCss.includes('.dns-tool-header-shell')||!footerCss.includes('.dns-tool-footer-shell')) throw new Error('Canonical Foundation CSS contract missing');
await writeFile('src/styles/generated/foundation-components.css',
  '/* GENERATED from pinned DNS Foundation navigation/footer/primitives runtime. */\\n'+
  navCss+'\\n'+footerCss+'\\n'+primitivesCss+'\\n');

await mkdir('public/assets/dns',{recursive:true});
for (const [sourcePath,targetPath] of [
  ['brand/logo-web.png','public/assets/dns/logo-web.png'],
  ['graphics/swoosh.svg','public/assets/dns/swoosh.svg'],
]) {
  const bytes = Buffer.from(await (await read(sourcePath)).arrayBuffer());
  if (!bytes.length) throw new Error('Empty official brand asset: ' + sourcePath);
  await writeFile(targetPath,bytes);
}
console.log(`Foundation tokens synchronized: ${ds.version} at ${SHARED_COMMIT}`);
