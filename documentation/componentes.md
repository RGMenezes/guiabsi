# Convenções do Tutorial

Neste arquivo, serão válidas as convenções de didática a seguir:
* Ao fazer referência a atributos de componentes, este manual utiliza "?atributo" para indicar que o
mesmo é de atribuição facultativa ao utilizar o componente.
* Ao dizer que um componente é tag aberta, já infere-se que ele possui o atributo "children".

# Organização

Atualmente, os componentes estão presentes no diretório [components](../src/components) com as seguintes diretrizes:
* *'NomeDoComponente'.tsx*: contém a função que gera o componente.
* *'nomeDoComponente'.module.css*: possui as estilizações necessárias para o componente em forma de classes css.
* O módulo css importado deve ser nomeado assim: *style'NomeDoCompornente'*.
* Os interfaces de atributo são globais, portanto não precisa importá-los explicitamente.

Como consequência das diretrizes, seu explorador de arquivos, quando configurado para ordem alfabética (crescente ou não),
exibirá os arquivos alternando entre ".tsx" e ".css". Portanto, a ordem alfabética será o seu principal meio para encontrar
componentes e sua estilizações dentro do diretório.

No futuro, com o aumento do número de componentes, ~~pode ser~~ será necessário alterar a organização em termos de
diretórios. Fique a vontade para criar novas pastas, mas lembre-se de registrar a mudança aqui e manter ao máximo
as outras diretrizes.

# Glossário

A seguir, uma explicação breve de cada componente atualmente existente.

### Aside
* **Definição:** Um elemento aside estilizado.
* **Tipo de Tag:** Aberta.
* **Atributos:** ...

### BackButton
* **Definição:** Link que retorna à página inicial.
* **Tipo de Tag:** Fechada.
* **Atributos:** ...

### BigCard
* **Definição:** Um card que contém muitos dados.
* **Tipo de Tag:** Aberta.
* **Atributos:** ...

### BodyText
* **Definição:** Um elemento de parágrafo com cor --text-secondary.
* **Tipo de Tag:** Aberta.
* **Atributos:** ...

### CallToAction
* **Definição:** Um botão/link que lava a ações fora do Guia.
* **Tipo de Tag:** Aberta.
* **Atributos:** ?url, ?click.

### Card
* **Definição:** Um card mais estático para títulos e descrições. Pode ter um link e/ou uma tag.
* **Tipo de Tag:** Aberta.
* **Atributos:** ?tagText, ?url, titleText.

### Category
* **Definição:** Um section com elemento hr facultativo e título.
* **Tipo de Tag:** Aberta.
* **Atributos:** titleText, ?divider.

### GridBox
* **Definição:** Um div para exibição em grid display.
* **Tipo de Tag:** Aberta.
* **Atributos:** ...

### Header
* **Definição:** Um header com título e descrição abaixo.
* **Tipo de Tag:** Aberta.
* **Atributos:** titleText.

### InstallButton
* **Definição:** Botão para instalar atalho para o site na área de trabalho.
* **Tipo de Tag:** Fechada.
* **Atributos:** ...

### Label
* **Definição:** Um span chamativo para palavras-chave/informações.
* **Tipo de Tag:** Aberta.
* **Atributos:** ?dynamic.

### ListItem
* **Definição:** Uma estrutura estática e estilizada de um elemento li.
* **Tipo de Tag:** Aberta.
* **Atributos:** ?tagContent.

### TopBar
* **Definição:** Uma barra superior que toda página do projeto deve ter.
* **Tipo de Tag:** Fechada.
* **Atributos:** ...

Encerrando essa leitura, você já tem os conhecimentos básicos necessários para trabalhar no
projeto. Agora é praticar e expandir o aprendizado. Sempre que precisar, os veteranos do Centro
Acadêmico o ajudarão o mais rápido possível. **Boa jornada, dev!**