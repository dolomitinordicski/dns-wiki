import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
export default defineConfig({
  site: 'https://dolomitinordicski.github.io',
  base: '/dns-wiki/',
  trailingSlash: 'always',
  integrations: [starlight({
    title: 'DNS Wiki',
    defaultLocale: 'it',
    locales: { it: { label: 'Italiano' }, de: { label: 'Deutsch' }, en: { label: 'English' } },
    components: {
      Header: './src/components/DNSHeader.astro',
      Footer: './src/components/DNSFooter.astro',
    },
    customCss: [
      './src/styles/generated/foundation-tokens.css',
      '@fontsource/be-vietnam-pro/400.css',
      '@fontsource/be-vietnam-pro/600.css',
      '@fontsource/roboto/400.css',
      './src/styles/dns-theme.css',
    ],
    sidebar: [
      { label: 'DNS Workspace', autogenerate: { directory: 'workspace' } },
      { label: 'DNS Data Entry', autogenerate: { directory: 'data-entry' } },
      { label: 'DNS Flyer Studio', autogenerate: { directory: 'flyer-studio' } },
      { label: 'DNS Analytics', autogenerate: { directory: 'analytics' } },
      { label: 'DNS Faktura', autogenerate: { directory: 'faktura' } },
      { label: 'DNS Polls', autogenerate: { directory: 'polls' } },
      { label: 'DNS Partner Hub', autogenerate: { directory: 'partner-hub' } },
      { label: 'DNS Digital Pass', autogenerate: { directory: 'digital-pass' } },
    ],
  })],
});
