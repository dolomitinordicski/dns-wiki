import fs from 'node:fs';
const registry = JSON.parse(fs.readFileSync('src/config/tool-registry.json', 'utf8'));
const problems = [];
for (const locale of registry.locales) {
  for (const route of ['', ...registry.tools.map(tool => tool.path + '/')]) {
    const file = 'dist/' + locale + '/' + route + 'index.html';
    if (!fs.existsSync(file)) problems.push('Missing built document: ' + file);
    else {
      const html = fs.readFileSync(file, 'utf8');
      if (!html.includes('dns-foundation-version')) problems.push('Missing Foundation metadata: ' + file);
    }
  }
}
if (!fs.existsSync('dist/pagefind/pagefind.js')) problems.push('Missing built documentation search index');
if (problems.length) { console.error(problems.join('\n')); process.exit(1); }
console.log('Verified all ' + registry.locales.length * (registry.tools.length + 1) + ' translated built document routes and search index');
