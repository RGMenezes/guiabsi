
const trilhas: trilhasData = {
  algorithm: { name: "Algoritmo e Estruturas de Dados", color: "#4ade80" },
  eletiva: { name: "Eletivas", color: "#526580" },
  infra: { name: "Infraestrutura de TI", color: "#38bdf8" },
  management: { name: "Gestão e Projetos de TI", color: "#fb923c" },
  others: { name: "Outros / Base", color: "#94a3b8" },
  software: { name: "Desenvolvimento de Software", color: "#a78bfa" },
};

const schoolSchedule: schoolScheduleData[] = [
  {
    semester: "1º Período",
    subjects: [
      { name: "Algoritmo", hours: "60h", info: trilhas.algorithm },
      { name: "Linguagem de Programação", hours: "60h", info: trilhas.algorithm },
      { name: "Fundamentos de SI", hours: "60h", info: trilhas.others },
      { name: "Introdução à Informática", hours: "60h", info: trilhas.others },
      { name: "Lógica para Computação", hours: "60h", info: trilhas.others },
      { name: "Álgebra Linear e Geom. Analítica", hours: "80h", info: trilhas.others },
    ],
  },
  {
    semester: "2º Período",
    subjects: [
      { name: "Prog. Orientada a Objetos", hours: "80h", info: trilhas.algorithm },
      { name: "Análise Orientada a Objetos", hours: "60h", info: trilhas.software },
      { name: "Engenharia de Software", hours: "60h", info: trilhas.software },
      { name: "Org. e Arq. de Computadores", hours: "80h", info: trilhas.infra },
      { name: "Cálculo", hours: "120h", info: trilhas.others },
    ],
  },
  {
    semester: "3º Período",
    subjects: [
      { name: "Estruturas de Dados", hours: "80h", info: trilhas.algorithm },
      { name: "Processo de Desenv. de Software", hours: "60h", info: trilhas.software },
      { name: "Fundamentos de Banco de Dados", hours: "80h", info: trilhas.infra },
      { name: "Sistemas Operacionais", hours: "80h", info: trilhas.infra },
      { name: "Administração", hours: "60h", info: trilhas.management },
      { name: "Estatística", hours: "60h", info: trilhas.others },
    ],
  },
  {
    semester: "4º Período",
    subjects: [
      { name: "Estruturas de Dados Avançadas", hours: "80h", info: trilhas.algorithm },
      { name: "Projeto Orientado a Objetos", hours: "80h", info: trilhas.software },
      { name: "IHC e Hipermídia", hours: "80h", info: trilhas.software },
      { name: "Redes de Computadores", hours: "80h", info: trilhas.infra },
      { name: "Adm. de Banco de Dados", hours: "80h", info: trilhas.infra },
    ],
  },
  {
    semester: "5º Período",
    subjects: [
      { name: "Lab. de Orientação a Objetos", hours: "80h", info: trilhas.software },
      { name: "Gerência de Projetos", hours: "80h", info: trilhas.management },
      { name: "Programação Web", hours: "80h", info: trilhas.software },
      { name: "Pesquisa Operacional", hours: "60h", info: trilhas.others },
      { name: "Inteligência Computacional", hours: "60h", info: trilhas.software },
      { name: "Projeto de Extensão I", hours: "80h", info: trilhas.algorithm },
    ],
  },
  {
    semester: "6º Período",
    subjects: [
      { name: "Metodologia Científica", hours: "80h", info: trilhas.others },
      { name: "Sistema de Suporte à Decisão", hours: "80h", info: trilhas.software },
      { name: "Gerência de Processos", hours: "60h", info: trilhas.management },
      { name: "Segurança da Informação", hours: "60h", info: trilhas.infra },
      { name: "Direito, Ética e Cidadania", hours: "60h", info: trilhas.others },
      { name: "Projeto de Extensão II", hours: "100h", info: trilhas.infra },
    ],
  },
  {
    semester: "7º Período",
    subjects: [
      { name: "Projeto de Graduação I", hours: "80h", info: trilhas.others },
      { name: "Gestão da Qualidade", hours: "80h", info: trilhas.management },
      { name: "Engenharia do Conhecimento", hours: "60h", info: trilhas.software },
      { name: "Empreendedorismo", hours: "40h", info: trilhas.management },
      { name: "Sistemas Distribuídos", hours: "60h", info: trilhas.infra },
      { name: "Projeto de Extensão III", hours: "100h", info: trilhas.software },
    ],
  },
  {
    semester: "8º Período",
    subjects: [
      { name: "Projeto de Graduação II (TCC)", hours: "40h", info: trilhas.others },
      { name: "Eletiva 1", hours: "80h", info: trilhas.eletiva },
      { name: "Eletiva 2", hours: "60h", info: trilhas.eletiva },
      { name: "Gestão de TI", hours: "60h", info: trilhas.management },
      { name: "Projeto de Extensão IV", hours: "100h", info: trilhas.management },
    ],
  },
];

export {trilhas, schoolSchedule};