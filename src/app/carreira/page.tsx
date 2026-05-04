import Link from "next/link";
import styles from "../inner.module.css";
import Nav from "@/components/Nav";

const portals = [
  { name: "Acadêmico", desc: "Diários, boletins e matrícula semestral." },
  { name: "Moodle / Google Classroom", desc: "Salas virtuais: materiais, tarefas e provas online." },
  { name: "SUAP", desc: "Trancamentos, alteração de dados e processos internos." },
  { name: "Portal de Seleções", desc: "Editais de bolsas (DAAT) e prazos de trancamento." },
  { name: "Portal de Eventos", desc: "Inscrições em palestras e semanas acadêmicas para horas complementares." },
  { name: "Portal de Requerimentos", desc: "Declarações para transporte universitário e documentos oficiais." },
];

const bolsas = [
  { name: "Monitoria", desc: "Ajude outros alunos nas matérias que você domina e receba por isso." },
  { name: "Pesquisa e Extensão", desc: "Leve tecnologia para a comunidade ou para o laboratório." },
  { name: "Desenvolvimento Institucional", desc: "Trabalhe no código dos sistemas que o IFF usa. Currículo de peso." },
];

export default function CarreiraPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <p className={styles.tag}>02 — Carreira</p>
        <h1 className={styles.title}>Carreira & Oportunidades</h1>
        <p className={styles.subtitle}>
          Os portais que você precisa dominar, as bolsas disponíveis e as
          dicas para não perder oportunidades logo no início.
        </p>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Portais Essenciais</p>
          <ul className={styles.list}>
            {portals.map((portal) => (
              <li key={portal.name}>
                <span>
                  <strong>{portal.name}:</strong> {portal.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Bolsas: Ganhar para Aprender</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {bolsas.map((bolsa) => (
              <div key={bolsa.name} className={styles.card}>
                <p className={styles.cardTitle}>{bolsa.name}</p>
                <p className={styles.cardBody}>{bolsa.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Estágios & ACCs</p>
          <div className={styles.body}>
            <p>
              <strong>Estágio:</strong> foca na base agora. As melhores vagas aparecem
              do 3º ou 4º período. Lembra:{" "}
              <strong>estágio sem contrato oficial não conta como hora complementar</strong>.
            </p>
            <p>
              <strong>ACCs:</strong> não deixa para o último ano. Cursos online,
              eventos, IEEE, Centro Acadêmico — tudo conta. Começa a acumular
              desde o 1º período.
            </p>
          </div>
        </div>

        <div className={styles.tip}>
          <strong>Dica de veterano:</strong> participar da representação estudantil
          e de grupos técnicos te dá a casca de liderança que o mercado paga caro
          pra ter.
        </div>
      </main>
    </>
  );
}
