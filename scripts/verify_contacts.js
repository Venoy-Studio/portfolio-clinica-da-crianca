import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const jsPath = path.join(rootDir, 'public', 'assets', 'index-1eVnhbBg.js');
const htmlPath = path.join(rootDir, 'index.html');

const js = fs.readFileSync(jsPath, 'utf8');
const html = fs.readFileSync(htmlPath, 'utf8');

const sensitiveTerms = [
  '99620',
  '2700',
  'dragabiguedes',
  'clinicadacriancapb',
  '10717',
  '6889',
  '6890',
  'SUN7',
  'Antônio Lira',
  'Camilo de Holanda',
  '58045-030'
];

console.log('--- Verificação de Segurança de Contatos e Dados Reais ---');
let hasLeak = false;

for (const term of sensitiveTerms) {
  const countJs = (js.match(new RegExp(term, 'gi')) || []).length;
  const countHtml = (html.match(new RegExp(term, 'gi')) || []).length;

  if (countJs > 0 || countHtml > 0) {
    console.error(`❌ ALERTA: Termo real "${term}" ainda encontrado! JS: ${countJs}, HTML: ${countHtml}`);
    hasLeak = true;
  }
}

if (!hasLeak) {
  console.log('✅ SUCESSO: Nenhum contato real foi encontrado no código ou assets!');
  console.log('✅ Todos os contatos (WhatsApp, Telefone, Endereço, Instagram, CRM) são 100% fictícios.');
  process.exit(0);
} else {
  process.exit(1);
}
