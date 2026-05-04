import Link from "next/link";
import styles from "../inner.module.css";
import Nav from "@/components/Nav";

const beneficios = [
  {
    title: "Caminho das Pedras",
    desc: "Quais livros realmente usar e como cada professor gosta que as provas sejam feitas.",
  },
  {
    title: "Sobrevivência Institucional",
    desc: "Como navegar no sistema acadêmico, entender o histórico e não perder prazos de matrícula.",
  },
  {
    title: "Networking",
    desc: "Te apresenta ao restante da faculdade e ajuda a entrar no ritmo da cultura de BSI.",
  },
];

export default function ApadrinhamentoPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <p className={styles.tag}>03 — Mentoria</p>
        <h1 className={styles.title}>Apadrinhamento</h1>
        <p className={styles.subtitle}>
          Uma rede de mentoria direta. Cada calouro conectado a um veterano que
          já percorreu o caminho que você está começando agora.
        </p>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Como funciona</p>
          <div className={styles.body}>
            <p>
              Não é uma aula extra. É um contato direto — via WhatsApp ou
              presencial — com alguém de referência para as dúvidas que você
              tem vergonha de perguntar ao professor.
            </p>
            <p>
              Fazemos o <strong>match</strong> entre calouro e veterano com base
              no perfil de cada um. Preenche o formulário e a gente cuida do
              resto.
            </p>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <p className={styles.sectionTitle}>O que o padrinho faz por você</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {beneficios.map((b) => (
              <div key={b.title} className={styles.card}>
                <p className={styles.cardTitle}>{b.title}</p>
                <p className={styles.cardBody}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <a
          href="#"
          className={styles.ctaBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Preencher formulário →
        </a>
        <p style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          {/* TODO: substituir href="#" pelo link do formulário de inscrição */}
        </p>
      </main>
    </>
  );
}
