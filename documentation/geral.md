# Convenções no Tutorial

Em todo o projeto, serão válidas as seguintes convenções de código e didática:

* Sempre respeite maiúsculas/minúsculas em comandos de escrita fornecidos a você por este manual.
   * "escreva AlgumNomeEtc": Significa que você deve escrever, **literalmente**, "AlgumNomeEtc".
   * "escreva 'AlgumNome'Etc": Aqui, "AlgumNome" é contextualizado. Deve-se inserir um substituto para
   "AlgumNome" e, logo após, inserir "Etc". Exemplo: "Escreva 'Variavel'Main" => ContadorMain.

* Qualquer nome criado no projeto deve ser escrito em camelCase/PascalCase.
   * PascalCase: Nomes de componentes e de interfaces auxiliares;
   * camelCase: Nomes de constantes de dados, dos demais interfaces e de classes css.

* Múltiplos dados agrupados devem ser ordenados de modo a facilitar sua localização.
   * Ordem alfabética: Objetos em arquivo dedicado, atributos de objetos para dados; classes css
   em arquivos dedicados; interfaces em arquivos dedicados.
   * Ordem de uso: Atributos de objetos para atributos de componentes; Importações, mas seguindo
   a ordem das subclassificações abaixo:
      1. Comece importando os estilos de css,
      2. Depois, as constantes de dados,
      3. Só então, os componentes.

Agora que você conhece as nossas convenções, está na hora de você aprender a criar [tipos](./tipos.md).