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
    customCss: [
      '@fontsource-variable/be-vietnam-pro',
      '@fontsource-variable/roboto',
      './src/styles/dns-theme.css',
    ],
    sidebar: [{label:'DNS Tools',translations:{de:'DNS Werkzeuge',en:'DNS Tools'},items:[
      {autogenerate:{directory:'workspace'}},
      {autogenerate:{directory:'data-entry'}},
      {autogenerate:{directory:'flyer-studio'}},
      {autogenerate:{directory:'analytics'}},
      {autogenerate:{directory:'faktura'}},
      {autogenerate:{directory:'polls'}},
      {autogenerate:{directory:'partner-hub'}},
      {autogenerate:{directory:'digital-pass'}},
    ]}],
  })],
});
