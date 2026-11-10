import { parseHTML } from 'linkedom';
import { initDNSFooterRuntime } from '@dolomitinordicski/dns-shared-data/ui/footer';
import { DNS_FOUNDATION_RUNTIME_VERSION } from '@dolomitinordicski/dns-shared-data/foundation';

export { DNS_FOUNDATION_RUNTIME_VERSION };
export const foundationLogoUrl = 'https://raw.githubusercontent.com/dolomitinordicski/dns-shared-data/foundation-v'
  + DNS_FOUNDATION_RUNTIME_VERSION + '/brand/logo-web.png';

export function renderFoundationFooter({ locale = 'it', toolVersion }) {
  const { document } = parseHTML('<!doctype html><html><head></head><body></body></html>');
  document.documentElement.lang = locale;
  const footer = document.createElement('footer');
  footer.setAttribute('data-dns-tool-footer', '');
  footer.dataset.dnsLang = locale;
  footer.dataset.dnsToolName = 'DNS Wiki';
  footer.dataset.dnsToolVersion = toolVersion;
  const shell = document.createElement('div');
  shell.className = 'dns-tool-footer-shell';
  const primary = document.createElement('span');
  primary.className = 'dns-tool-footer-primary';
  primary.textContent = { it: 'Dolomiti NordicSki · Documentazione', de: 'Dolomiti NordicSki · Dokumentation', en: 'Dolomiti NordicSki · Documentation' }[locale] ?? 'Dolomiti NordicSki';
  shell.appendChild(primary);
  footer.appendChild(shell);
  document.body.appendChild(footer);
  const runtime = initDNSFooterRuntime(document);
  const html = footer.outerHTML;
  runtime.disconnect();
  return html;
}
