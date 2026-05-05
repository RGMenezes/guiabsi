import Link from "next/link";
import styles from "../inner.module.css";
import accStyles from "./accs.module.css";
import Nav from "@/components/Nav";

const gruposACC = [
  {
    titulo: "Grupo I - Ensino",
    desc: "Monitoria, projetos de ensino, estágios extracurriculares e cursos.",
    limite: "Até 150h",
    atividades: [
      { nome: "Monitoria (Semestre)", pontos: "40h" },
      { nome: "Cursos de Extensão (por hora)", pontos: "1:1" },
      { nome: "Estágio Não Obrigatório (cada 60h)", pontos: "20h" },
    ]
  },
  {
    titulo: "Grupo II - Pesquisa e Extensão",
    desc: "Iniciação científica, publicação de artigos e projetos de extensão.",
    limite: "Até 200h",
    atividades: [
      { nome: "Artigo em Periódico", pontos: "40h" },
      { nome: "Apresentação em Evento", pontos: "10h" },
      { nome: "Participação em Projeto", pontos: "40h/sem" },
    ]
  },
  {
    titulo: "Grupo III - Eventos e Representação",
    desc: "Participação em congressos, semanas acadêmicas e órgãos colegiados.",
    limite: "Até 100h",
    atividades: [
      { nome: "Ouvinte em Evento (por hora)", pontos: "1:1" },
      { nome: "Representação Discente", pontos: "20h/ano" },
      { nome: "Organização de Evento", pontos: "20h" },
    ]
  }
];

export default function ACCPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>
        <h1 className={styles.title}>Horas Complementares (ACC)</h1>
        <p className={styles.subtitle}>
          Regras para a Matriz 2025: Total de <strong>300 horas</strong> obrigatórias.
        </p>

        <section className={accStyles.infoCard}>
          <p>⚠️ <strong>Atenção:</strong> As atividades devem ser cadastradas via SUAP e validadas pela coordenação. Guarde todos os seus certificados!</p>
        </section>

        <div className={accStyles.grid}>
          {gruposACC.map((grupo) => (
            <div key={grupo.titulo} className={accStyles.card}>
              <div className={accStyles.cardHeader}>
                <h2>{grupo.titulo}</h2>
                <span className={accStyles.limite}>{grupo.limite}</span>
              </div>
              <p className={accStyles.desc}>{grupo.desc}</p>
              <ul className={accStyles.lista}>
                {grupo.atividades.map((item, idx) => (
                  <li key={idx} className={accStyles.item}>
                    <span>{item.nome}</span>
                    <span className={accStyles.pontos}>{item.pontos}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}