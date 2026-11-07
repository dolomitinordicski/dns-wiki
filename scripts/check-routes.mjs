import fs from 'node:fs';
const registry=JSON.parse(fs.readFileSync('src/config/tool-registry.json','utf8'));
const problems=[];
for(const lang of registry.locales){
  if(!fs.existsSync('src/content/docs/'+lang+'/index.mdx')) problems.push(lang+' homepage missing');
  for(const tool of registry.tools) {
    const p='src/content/docs/'+lang+'/'+tool.path+'/index.md';
    if(!fs.existsSync(p)) problems.push(p);
  }
}
const ids=registry.tools.map(t=>t.id);
if(new Set(ids).size!==ids.length) problems.push('duplicate tool IDs');
if(registry.tools.some(t=>t.enabledInFoundation)) problems.push('Foundation link enabled before production verification');
if(problems.length) { console.error(problems.join('\n')); process.exit(1); }
console.log('All locale overview pages exist; Foundation links remain disabled.');
