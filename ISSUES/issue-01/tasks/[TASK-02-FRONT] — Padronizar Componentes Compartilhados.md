# [TASK-02-FRONT] — Padronizar Componentes Compartilhados

**Issue pai:** ISSUE-01 — Refatoração Estrutural do GuiaBSI
**Depende de:** TASK-01-FRONT

---

## Objetivo

Criar uma biblioteca interna de componentes reutilizáveis para manter consistência visual e reduzir duplicação de código.

Após a conclusão desta task, novas páginas poderão ser construídas utilizando componentes padronizados.

---

## Contexto

Atualmente existem elementos visuais semelhantes implementados de formas diferentes ao longo da aplicação.

Esta task centraliza os principais componentes compartilhados que serão utilizados pelas futuras funcionalidades.

---

## Tasks

### Componentes e Páginas

* [ ] Criar componente `Container`
* [ ] Criar componente `Section`
* [ ] Criar componente `PageHeader`
* [ ] Criar componente `Card`
* [ ] Criar componente `Button`
* [ ] Criar componente `Badge`
* [ ] Criar componente `EmptyState`
* [ ] Criar componente `LoadingState`
* [ ] Criar componente `ErrorState`

### Refatoração

* [ ] Identificar componentes duplicados
* [ ] Substituir implementações antigas
* [ ] Padronizar estilos compartilhados
* [ ] Padronizar nomenclatura dos componentes

---

## Estados a implementar

* [ ] Estado padrão
* [ ] Estado de loading
* [ ] Estado de erro
* [ ] Estado vazio

---

## Validações client-side

* Não se aplica

---

## Acessibilidade e UX

* [ ] Navegação por teclado quando aplicável
* [ ] Feedback visual consistente
* [ ] Estados visuais facilmente identificáveis

---

## Sugestões de Testes

* [ ] Componentes renderizam corretamente
* [ ] Props são recebidas adequadamente
* [ ] Estados visuais funcionam conforme esperado
* [ ] Componentes mantêm responsividade

---

## Critérios de Aceite

* [ ] Biblioteca de componentes criada
* [ ] Componentes duplicados removidos
* [ ] Interface visual consistente
* [ ] Componentes reutilizáveis documentados
