import { initDNSFoundation, type DNSFoundationRuntimeHandle } from '@dolomitinordicski/dns-shared-data/foundation';
import { initDNSAccessibilityRuntime } from '@dolomitinordicski/dns-shared-data/ui/accessibility';
import { initDNSNavigationStyles } from '@dolomitinordicski/dns-shared-data/ui/navigation';

let disconnect: (() => void) | undefined;

export function mountWikiFoundation() {
  disconnect?.();
  const root = document.documentElement;
  const locale = root.lang || 'it';
  // Foundation 1.4.1 provides IT/DE operational controls. Keep EN document
  // semantics and routes intact and label its shared DE fallback explicitly.
  const controlLanguage = locale.startsWith('it') ? 'it' : 'de';
  const runtime: DNSFoundationRuntimeHandle = initDNSFoundation({
    language: controlLanguage, persistLanguage: false, shellProfile: 'portal',
    chrome: false, accessibility: false, print: false,
    dataUI: false, identityUI: false, assetUI: false, capabilityUI: false,
  });
  root.lang = locale;
  initDNSNavigationStyles();
  const mount = document.querySelector<HTMLElement>('[data-dns-accessibility-mount]');
  const accessibility = initDNSAccessibilityRuntime({ mountTarget: mount, language: controlLanguage });
  mount?.setAttribute('lang', controlLanguage);

  // Foundation is the only preference owner. Starlight receives its resolved
  // theme; its independent theme selector is disabled, not synchronized twice.
  const bridgeTheme = () => {
    const theme = root.dataset.dnsTheme;
    if ((theme === 'light' || theme === 'dark') && root.dataset.theme !== theme) root.dataset.theme = theme;
    const overlay = document.querySelector<HTMLElement>('.dns-a11y-overlay');
    if (overlay) overlay.lang = controlLanguage;
  };
  bridgeTheme();
  const themeObserver = new MutationObserver(bridgeTheme);
  themeObserver.observe(root, { attributes: true, attributeFilter: ['data-dns-theme'] });
  themeObserver.observe(document.body, { childList: true });

  // Starlight owns document navigation; measure Foundation's actual header
  // instead of duplicating its dimensions in Wiki CSS.
  const header = document.querySelector<HTMLElement>('[data-dns-tool-header]');
  const measure = () => {
    if (header) root.style.setProperty('--sl-nav-height', header.getBoundingClientRect().height + 'px');
  };
  const resize = new ResizeObserver(measure);
  if (header) resize.observe(header);
  measure();
  disconnect = () => {
    themeObserver.disconnect();
    resize.disconnect();
    accessibility.disconnect();
    runtime.disconnect();
    disconnect = undefined;
  };
}

document.addEventListener('astro:page-load', mountWikiFoundation);
document.addEventListener('astro:before-swap', () => disconnect?.());
window.addEventListener('pagehide', () => disconnect?.());
window.addEventListener('pageshow', event => { if (event.persisted) mountWikiFoundation(); });
mountWikiFoundation();
