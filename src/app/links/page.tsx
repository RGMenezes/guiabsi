import Link from "next/link";
import styles from "../inner.module.css";
import linkStyles from "./links.module.css";
import Nav from "@/components/Nav";

const portais = [
  {
    categoria: "Vida Acadêmica",
    items: [
      {
        nome: "Acadêmico",
        url: "https://academico.iff.edu.br/",
        desc: "Sua vida escolar: diários, boletins e solicitação de matrícula todo semestre.",
        tag: "essencial",
      },
      {
        nome: "SUAP",
        url: "https://suap.iff.edu.br/",
        desc: "Foco administrativo: trancamentos, alteração de dados cadastrais e processos internos.",
        tag: "essencial",
      },
    ],
  },
  {
    categoria: "Salas Virtuais",
    items: [
      {
        nome: "Moodle (EAD)",
        url: "https://ead2.iff.edu.br/login/",
        desc: "Plataforma de ensino a distância. Professores enviam materiais, tarefas e aplicam provas por aqui.",
        tag: null,
      },
      {
        nome: "Google Classroom",
        url: "https://classroom.google.com/",
        desc: "Alternativa ao Moodle usada por vários professores. Verifique qual plataforma cada um usa.",
        tag: null,
      },
    ],
  },
  {
    categoria: "Oportunidades",
    items: [
      {
        nome: "Portal de Seleções",
        url: "https://selecoes.iff.edu.br/",
        desc: "O site mais importante para quem quer bolsa. Todos os editais da DAAT e prazos saem aqui.",
        tag: "essencial",
      },
      {
        nome: "Portal de Eventos",
        url: "https://eventos.iff.edu.br/",
        desc: "Inscrições em palestras e semanas acadêmicas. Fonte de horas complementares (ACCs).",
        tag: null,
      },
    ],
  },
  {
    categoria: "Documentos & Serviços",
    items: [
      {
        nome: "Portal de Requerimentos",
        url: "https://requerimentos.centro.iff.edu.br/",
        desc: "Declarações para transporte universitário, histórico e outros documentos oficiais.",
        tag: null,
      },
      {
        nome: "Portal IFF",
        url: "https://portal1.iff.edu.br/",
        desc: "Portal institucional geral. Notícias, contatos e navegação para os outros sistemas.",
        tag: null,
      },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <h1 className={styles.title}>Links Importantes</h1>
        <p className={styles.subtitle}>
          Todos os portais do IFF em um lugar só. Salva essa página nos
          favoritos — você vai precisar deles toda semana.
        </p>

        {portais.map((grupo) => (
          <div key={grupo.categoria} className={styles.section}>
            <p className={styles.sectionTitle}>{grupo.categoria}</p>
            <div className={linkStyles.grid}>
              {grupo.items.map((portal) => (
                <a
                  key={portal.nome}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyles.portalCard}
                >
                  <div className={linkStyles.cardHeader}>
                    <span className={linkStyles.portalName}>{portal.nome}</span>
                    {portal.tag && (
                      <span className={linkStyles.badge}>{portal.tag}</span>
                    )}
                  </div>
                  <p className={linkStyles.portalDesc}>{portal.desc}</p>
                  <span className={linkStyles.url}>
                    {portal.url.replace("https://", "").replace(/\/$/, "")}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
