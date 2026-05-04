import Link from "next/link";
import styles from "../inner.module.css";
import Nav from "@/components/Nav";

const grupos = [
  {
    tag: "Empresa Júnior",
    name: "Áurea",
    color: "#fbbf24",
    desc: `A empresa júnior do curso. É aqui que você aprende a lidar com
    clientes reais, gerenciar projetos e trabalhar em equipe antes de ir para
    o mercado. Clima de startup. O melhor lugar para errar rápido e aprender
    mais rápido ainda. Fique de olho no processo seletivo.`,
  },
  {
    tag: "Robótica",
    name: "Goytaborgs",
    color: "#00e5a0",
    desc: `A computação ganha corpo aqui. Se você gosta de ver código movendo
    motores e lendo sensores, esse é o lugar. É lógica aplicada ao hardware.
    Competições nacionais de robótica com a galera do IFF.`,
  },
  {
    tag: "Aerodesign",
    name: "Sete Capitães",
    color: "#38bdf8",
    desc: `Trabalho multidisciplinar de alto nível. O pessoal de BSI cuida
    da telemetria, sistemas de bordo e análise de dados de voo. É computação
    de alta precisão aplicada a aeronaves remanufaturadas. Se você quer
    dados, sensores e análise real, esse time é pra você.`,
  },
];

const infraestrutura = [
  {
    name: "Labs de Informática",
    desc: "Onde a galera passa a maior parte do tempo. Verifique os horários de monitoria — é lá que as dúvidas de código se resolvem.",
  },
  {
    name: "Biblioteca",
    desc: "Foque na seção de Exatas e Computação. Os clássicos de lá ajudam mais do que vídeo no YouTube para a base teórica.",
  },
  {
    name: "Secretaria / Coordenação",
    desc: "Para resolver burocracia: matrícula, trancamento e horas complementares.",
  },
];

export default function ComunidadePage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <p className={styles.tag}>04 — Comunidade</p>
        <h1 className={styles.title}>Comunidade & Equipes</h1>
        <p className={styles.subtitle}>
          Onde a teoria vira prática. Equipes, espaços e grupos que fazem a
          diferença na sua formação além da sala de aula.
        </p>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Grupos & Equipes</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {grupos.map((g) => (
              <div
                key={g.name}
                className={styles.card}
                style={{ borderLeft: `3px solid ${g.color}` }}
              >
                <span className={styles.highlight} style={{ "--card-accent": g.color } as React.CSSProperties}>
                  {g.tag}
                </span>
                <p className={styles.cardTitle} style={{ marginTop: "8px" }}>
                  {g.name}
                </p>
                <p className={styles.cardBody}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Infraestrutura</p>
          <ul className={styles.list}>
            {infraestrutura.map((local) => (
              <li key={local.name}>
                <span>
                  <strong>{local.name}:</strong> {local.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
