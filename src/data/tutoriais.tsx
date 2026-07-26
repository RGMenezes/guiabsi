import Aside from "@/components/Aside";

export const tutorials: tutorialsData[] = [
  {
    categoryName: "Acadêmico",
    desc: "O portal para consultar notas, presenças, mensagens e mais.",

    alert: (
      <Aside>
        <strong>Aviso:</strong> Infelizmente, o site não possui boa aparência em dispositivos móveis. Se você precisar acessá-lo
        pelo celular, recomendamos que deixe seu celular em orientação paisagem.
      </Aside>
    ),

    rules: [
      {
        action: "Selecione a sua categoria dentro do IFF;",
        image: "/images/academicoCategoria.webp",
        alternative: "Tela de seleção de categoria do acadêmico.",
        landscape: true,
        caption: "Selecione \"Alunos\"."
      },
      {
        action: "Faça login ou crie seu pefil no acadêmico;",
        image: "/images/academicoLogin.webp",
        alternative: "Tela de login do acadêmico.",
        landscape: true,
        caption: "Insira o seu número de matrícula e sua senha do acadêmico."
      },
      {
        action: "Ao entrar, você será encaminhado para uma página com todos os serviços disponíveis, em lista, com nome e descrição.",
        image: "/images/academicoInicial.webp",
        alternative: "Tela inicial do acadêmico.",
        landscape: true,
        caption: "Tela inicial do acadêmico."
      }
    ]
  },
  {
    categoryName: "SUAP",
    desc: "O portal para resolver questões administrativas.",
    alert: null,

    rules: [
      {
        action: "Faça login ou crie seu perfil no SUAP;",
        image: "/images/suapLogin.webp",
        alternative: "Tela de login do SUAP.",
        landscape: false,
        caption: "Insira seu número de matrícula e sua senha do SUAP."
      },
      {
        action: "Logado, você já tem acesso ao seu perfil SUAP e aos recursos da plataforma.",
        image: "/images/suapInicial.webp",
        alternative: "Tela inicial do SUAP",
        landscape: false,
        caption: "Serviços do SUAP e, em baixo, barra de navegação."
      }
    ]
  },
  {
    categoryName: "Portal de Seleções",
    desc: "O portal para participar da maioria dos processos seletivos.",
    alert: null,

    rules: [{
      action: "Aqui, basta buscar o processo seletivo que deseja consultar e seguir as etapas dele.",
      image: "/images/portalSelecoes.webp",
      alternative: "Tela inicial do portal de seleções.",
      landscape: false,
      caption: "Busque seu processo seletivo por categorias, datas, e mais."
    }]
  },
  {
    categoryName: "Portal de Eventos",
    desc: "O portal para se inscrever em eventos promovidos pelo IFF.",

    alert: (<Aside>
      <strong>Atenção!</strong> Essa página contem os eventos atuais de <strong>todos os
      campus</strong>. Sempre leia os detalhes dos eventos com bastante atenção.
    </Aside>),

    rules: [
      {
        action: "No menu superior direito, selecione \"entrar\" e faça login ou crie seu perfil;",
        image: "/images/eventosLogin.webp",
        alternative: "Tela de login do portal de eventos",
        landscape: false,
        caption: "Insira seu login e senha para se inscrever em eventos."
      },
      {
        action: "Inscreva-se no que mais te interessar. Lembre-se de constar os eventos como horas complementares depois.",
        image: "/images/eventosInicial.webp",
        alternative: "tela inicial do portal de eventos",
        landscape: false,
        caption: "Navegue pelo catálogo e inscreva-se no que quiser."
      }
    ]
  },
  {
    categoryName: "Accs",
    desc: "O portal para consultar e validar suas horas complementares.",
    alert: null,

    rules: [
      {
        action: "Faça login ou crie seu perfil no portal de Accs;",
        image: "/images/horasLogin.webp",
        alternative: "Tela de login das Accs.",
        landscape: false,
        caption: "Insira seu email e sua senha do portal de Accs."
      },
      {
        action: "Logado, você tem acesso ao seu perfil pelo menu tracejado e a algumas estatísticas da plataforma.",
        image: "/images/horasInicial.webp",
        alternative: "Tela inicial da página de Accs",
        landscape: false,
        caption: "Algumas estatísticas na tela inicial."
      }
    ]
  }
];