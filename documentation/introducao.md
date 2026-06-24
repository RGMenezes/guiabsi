# O Guia BSI

O Guia BSI é a plataforma que orienta todos os cursandos de BSI do IFF Campos campus centro no seu curso e
no sistema do instituto. Ela foi criada pelo grupo do Centro Acadêmico (CA), uma iniciativa de estudantes
para estudantes que fornece uma experiência realista no desenvolvimento de projetos úteis para uma comunidade.
Em decorrência da amplitude alcançada pelo Guia BSI, o projeto passou a necessitar de uma documentação
formalizada para que sua manutenção e seu desenvolvimento continuassem coesos e bem estruturados.

Na pasta "documentation", você encontrará toda a explicação necessária para que você, (futuro) dev,
trabalhe no Guia BSI da forma mais organizada e eficaz possível. **Lembre-se:** para que este manual continue
sendo de qualidade, toda alteração notável no projeto demandará revisões nesses arquivos também.

# O que Você já Deve Saber?

Para a melhor leitura deste material, é esperado que você já tenha conhecimentos prévios em:
* Html, Css e Javascript;
* TypeScript e Next.js;
* Git e GitHub.

Não possui algum requesito listado? Sem problemas, o aprendizado é o motivo pelo qual estamos aqui! Nessa
ocasião, os veteranos do CA o guiará da melhor forma possível para que você faça um bom trabalho.

# Arquitetura do Guia BSI

O projeto é elaborado em cima do framework javascript "Next.js", utilizando como principal linguagem o
"TypeScript", a extensão fortemente tipada do javascript. Os diretórios mais importantes serão explicados abaixo:
| Diretório          | Descrição                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------- |
| **documentation:** | Contém todo o manual do projeto.                                                         |
| **src:**           | O projeto de fato. Quase sempre, você trabalhará apenas nele.                            |
| **src/app**        | Cada página do site fica guardada nela em seu próprio diretório, salvo a página inicial. |
| **src/components** | Cada componente React utilizado no projeto encontra-se aqui.                             |
| **src/data**       | Textos das páginas que são inseridos por loops são guardados aqui em objetos "const".    |
| **src/types**      | A alma do TypeScript! Todos os componentes e variáveis tem tipagem registrada aqui.      |

# Convenções do Tutorial

_"O combinado não sai caro"_, portanto todo arquivo deste manual que utilizar alguma(s) sintaxe(s) exclusiva(s)
para fins de simplificação terão uma seção "Convenções do Tutorial" para explicar a(s) sintaxe(s).

Introduzidos o manual e o projeto, está na hora de saber algumas [normas gerais](./geral.md) a serem
seguidas ao trabalhar no Guia BSI.