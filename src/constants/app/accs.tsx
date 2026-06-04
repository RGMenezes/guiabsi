
const linkRegistro = {
  nome: "Horas Complementares",
  url: "https://inf.centro.iff.edu.br/",
  desc: "Site para registro de horas complementares.",
};

const tabelaSemLimite: IlistElement[] = [
  {text: "Curso de idioma realizado durante o curso"},
  {text: "Emprego na área realizado durante o curso"},
  {text: "Estágio realizado durante o curso"},
  {text: "Participação em bolsa de monitoria"},
  {text: "Participação em bolsa de Iniciação Científica"},
  {text: "Participação em bolsa de desenvolvimento tecnológico ou inovação"},
  {text: "Participação em eventos como ouvinte"},
  {text: "Participação em congressos, jornadas, fóruns, debates, visitas técnicas, workshop e minicursos"},
  {text: "Serviço voluntário de caráter sócio comunitário (Lei 9.608/1998)"},
];

const tabelaComConversao: IlistElement[] = [
  { text: "Apresentação de artigo em eventos científicos", label: "5h por publicação" },
  { text: "Publicação de artigo científico (autor ou coautor)", label: "3h por publicação" },
  { text: "Publicação de produção autoral (foto, artigo, reportagem ou similar) em periódico ou site", label: "2h por publicação" },
  { text: "Autor ou coautor de capítulo de livro", label: "5h por publicação" },
  { text: "Participação como ouvinte em banca de conclusão de curso (graduação, pós, mestrado ou doutorado)", label: "1h por banca" },
  { text: "Certificação na área do curso", label: "3h por certificação" },
];

export {linkRegistro, tabelaSemLimite, tabelaComConversao};