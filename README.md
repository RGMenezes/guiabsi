# Guia BSI — IFF Campos

Plataforma de orientação para alunos de Bacharelado em Sistemas de Informação do IFF Campos Centro. Desenvolvida e mantida pelo Centro Acadêmico (CA).

---

## Stack

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** CSS Modules
- **PWA:** `@ducanh2912/next-pwa` — habilita o botão "Adicionar Atalho" na TopBar

---

## Primeiros Passos

### Instalação das dependências

```bash
npm install
```

### Rodando o servidor de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de produção

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Estrutura do Projeto

```
src/
├── app/          # Páginas (App Router do Next.js)
├── components/   # Componentes React reutilizáveis
├── data/         # Dados estáticos das páginas
├── types/        # Interfaces e tipos globais (.d.ts)
└── utils/        # Funções utilitárias
```

Consulte a pasta [`documentation/`](./documentation/) para entender as convenções de código, nomenclatura de interfaces e guia de componentes.

---

## Fluxo de Branches

O repositório segue um modelo simples de três camadas:

```
main
└── dev
    └── feature/issue-XX-descricao   ← branch de trabalho
```

- **`main`** — produção. Só recebe merge de `dev` quando tudo estiver funcionando.
- **`dev`** — integração. Base para todas as branches de trabalho.
- **`feature/*` / `fix/*`** — criadas a partir de `dev` para cada issue ou task. Apagadas após o merge.

### Fluxo padrão

```bash
# 1. Criar branch a partir de dev
git switch dev
git switch -c feature/issue-01-responsividade

# 2. Trabalhar, commitar...

# 3. Merge de volta para dev (via PR ou direto)
git switch dev
git merge feature/issue-01-responsividade

# 4. Deletar a branch de trabalho
git branch -d feature/issue-01-responsividade

# 5. Quando dev estiver estável, merge para main
git switch main
git merge dev
```

---

## Deploy

O deploy é feito via [Vercel](https://vercel.com). Qualquer push para `main` dispara o deploy automaticamente.

Documentação de deploy do Next.js: [nextjs.org/docs/app/building-your-application/deploying](https://nextjs.org/docs/app/building-your-application/deploying)
