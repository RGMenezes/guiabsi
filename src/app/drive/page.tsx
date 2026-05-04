import Link from "next/link";
import styles from "../inner.module.css";
import Nav from "@/components/Nav";

export default function DrivePage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <h1 className={styles.title}>Drive de Provas</h1>
        <p className={styles.subtitle}>
          O repositório colaborativo com exames anteriores. A ferramenta mais
          importante na semana de provas.
        </p>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>O que é</p>
          <div className={styles.body}>
            <p>
              Um Google Drive compartilhado com provas de períodos anteriores,{" "}
              organizadas por matéria. É a melhor forma de entender o estilo de
              cada professor e os temas que mais caem.
            </p>
            <p>
              As pastas estão divididas por <strong>matéria</strong> e{" "}
              <strong>período</strong>. Quer saber como é a P1 de Lógica
              Matemática? Está lá.
            </p>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <p className={styles.sectionTitle}>A Regra de Ouro</p>
          <div className={styles.tip}>
            <strong>Usou? Contribuiu.</strong> Esse Drive só existe porque alguém
            decidiu ajudar quem viria depois. Terminou uma prova? Tire uma foto,
            apague seu nome e manda para o Centro Acadêmico. Simples assim.
          </div>
        </div>

        <div className={styles.divider} />

        <a
          href="https://drive.google.com/drive/folders/1nhrcyKYEns-JBUoH1tpj4id01QOGTrlT?usp=drive_link"
          className={styles.ctaBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar o Drive →
        </a>
        <p style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          {/* TODO: substituir o href="#" pelo link real do Drive */}
          Salva nos favoritos. Você vai precisar na semana de provas.
        </p>
      </main>
    </>
  );
}
