# Escrevendo Interfaces

* Para muitos **atributos de componentes**, nomeie seu interface da seguinte
forma: 'nomeDoComponente'Attr. Perceba que a primeira letra é **minúscula**!
* Para tipar **objetos de dados**, nomeie os interfaces assim: 'nomeDoConst'Data.
* Para **interfaces auxiliares**: 'NomeDescritivo'. Note a primeira letra **maiúscula** nesse caso!
* **Todos os interfaces são globais (.d.)**

# Organizando Interfaces

* **[IBasics.d.ts](../src/types/IBasics.d.ts):** Arquivo para interfaces auxiliares, ou seja, usados
na confecção de outros interfaces.
* **[IComponents.d.ts](../src/types/IComponents.d.ts):** Insira aqui iterfaces de objetos que definem
os atributos de um componente.
* **[IData.d.ts](../src/types/IData.d.ts):** Interfaces das const, ou seja, dos dados.

# E os types?
Não se preocupe! ainda não houve nenhum type efetivo escrito no projeto. Lembre-se de alterar
os arquivos necessários na documentação em caso de mudança. **Os types também devem ser globais (.d.).**

Agora que você sabe criar as tipagens necessárias, vamos falar dos [componentes](./componentes.md).