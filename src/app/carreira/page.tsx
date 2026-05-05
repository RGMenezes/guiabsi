import Link from "next/link";
import styles from "../inner.module.css";
import Nav from "@/components/Nav";

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

        <h1 className={styles.title}>Carreira & Oportunidades</h1>
        <p className={styles.subtitle}>
          Bolsas disponíveis e as dicas para não perder oportunidades logo no início.
        </p>

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
