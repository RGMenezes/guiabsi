# [ISSUE-01] — Refatoração Estrutural do GuiaBSI

## Objetivo

Preparar a base técnica do GuiaBSI para suportar novas funcionalidades, crescimento do projeto e manutenção de longo prazo.

A refatoração deve melhorar a organização do código, promover reutilização de componentes, padronizar a experiência do usuário e garantir que futuras funcionalidades possam ser implementadas de forma consistente.

---

## Contexto

O GuiaBSI começou como um projeto de menor escopo e atualmente atende bem às funcionalidades existentes.

Com a expansão planejada da plataforma, incluindo recursos acadêmicos, biblioteca de vídeos, empresas parceiras, projetos da comunidade e novas áreas de conteúdo, torna-se necessário fortalecer sua arquitetura.

Esta issue concentra as tarefas responsáveis por estruturar a aplicação antes da implementação das novas funcionalidades.

---

## Escopo

### Arquitetura

* Reorganização da estrutura de pastas
* Separação de responsabilidades
* Centralização de tipos, utilitários e dados

### Componentização

* Criação de componentes compartilhados
* Remoção de duplicações
* Padronização visual

### Responsividade

* Revisão completa da experiência mobile
* Ajustes para tablets e desktops
* Correção de inconsistências visuais

### Estados da Aplicação

* Loading
* Erro
* Vazio
* Sucesso

---

## Tasks Relacionadas

* [ ] TASK-01-FRONT — Reestruturar Arquitetura do Projeto
* [ ] TASK-02-FRONT — Padronizar Componentes Compartilhados
* [ ] TASK-03-FRONT — Revisar Responsividade Global
* [ ] TASK-04-FRONT — Implementar Estados Padronizados da Aplicação

---

## Critérios de Conclusão da Issue

* [ ] Estrutura do projeto reorganizada
* [ ] Componentes compartilhados implementados
* [ ] Responsividade revisada
* [ ] Estados padronizados implementados
* [ ] Build sem erros
* [ ] Sem regressões funcionais
* [ ] Projeto preparado para receber as próximas funcionalidades
