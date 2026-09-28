# Clínica da Criança — Clone Fiel (Contatos Fictícios)

Clone de alta fidelidade visual, estrutural e interativa da landing page da **Clínica da Criança** (original: `https://clinica-da-crianca.vercel.app/`).

O projeto preserva **100% do layout, tipografia, paleta de cores, imagens em alta resolução (WebP), animações, carrossel e comportamento mobile-first**, com **todos os dados de contato e identificação substituídos por informações estritamente fictícias**.

---

## 📋 Tabela de Dados Reais vs. Fictícios

| Dado | Original (Real) | Clone (Fictício) |
| :--- | :--- | :--- |
| **Telefone de Exibição** | `(83) 99620-2700` | `(83) 99999-8888` |
| **Link do WhatsApp** | `https://wa.me/5583996202700` | `https://wa.me/5583999998888` |
| **Telefone Schema.org** | `+55-83-99620-2700` | `+55-83-99999-8888` |
| **Prédio / Edifício** | `Empresarial SUN7` | `Empresarial Cabo Branco Office` |
| **Endereço Principal** | `Av. Antônio Lira, 1074, Cabo Branco` | `Av. Cabo Branco, 1500, Sala 302, Cabo Branco` |
| **CEP** | `58045-030` | `58045-000` |
| **Endereço Secundário** | `Av. Camilo de Holanda, 552, Centro` | `Av. Central da Saúde, 500, Centro` |
| **Instagram da Clínica** | `@clinicadacriancapb` | `@clinicadacrianca.ficticia` |
| **Instagram da Médica** | `@dragabiguedes` | `@dragabi.ficticia` |
| **CRM / RQE** | `CRM-PB 10717 · RQE 6889 · RQE 6890` | `CRM-PB 99999 · RQE 8888 · RQE 8889` |

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v18+)
- npm

### 1. Iniciar servidor de desenvolvimento
```bash
npm run dev
```
O servidor estará disponível em `http://localhost:5173/`.

### 2. Gerar build de produção
```bash
npm run build
```

### 3. Visualizar build de produção
```bash
npm run preview
```

### 4. Verificar se há dados reais no código
```bash
npm run check:contacts
```

---

## 📁 Estrutura de Pastas

```text
├── assets/                 # Folhas de estilo, scripts e imagens compiladas
├── public/                 # Assets públicos servidos estaticamente
│   ├── assets/             # Imagens WebP, bundle JS e CSS
│   ├── favicon.svg         # Ícone do site
│   └── og.jpg              # Imagem para compartilhamento (Open Graph)
├── scripts/
│   └── verify_contacts.js  # Script de auditoria para garantir ausência de dados reais
├── index.html              # Estrutura HTML com metatags e microdados Schema.org
├── package.json            # Configuração do projeto e scripts Vite
└── README.md               # Documentação do projeto
```
