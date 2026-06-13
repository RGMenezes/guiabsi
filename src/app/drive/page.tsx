import styles from "../inner.module.css";

import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Aside from "@/components/Aside";

export default function DrivePage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />

        {/* <h1 className={styles.title}>Drive de Provas</h1>
        <p className={styles.subtitle}>
          O repositório colaborativo com exames anteriores. A ferramenta mais
          importante na semana de provas.
        </p> */}

        <Header titleText="Drive de Provas">
          O repositório colaborativo com exames anteriores. A ferramenta mais
          importante na semana de provas.
        </Header>

        <Category titleText="O que é?">
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
        </Category>

        {/*<div className={styles.section}>
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

        <div className={styles.divider} />*/}

        <Category titleText="A Regra De Ouro">
          <Aside>
            <strong>Usou? Contribuiu.</strong> Esse Drive só existe porque alguém
            decidiu ajudar quem viria depois. Terminou uma prova? Tire uma foto,
            apague seu nome e manda para o Centro Acadêmico. Simples assim.
          </Aside>
        </Category>

        {/*<div className={styles.section}>
          <p className={styles.sectionTitle}>A Regra de Ouro</p>
          <aside>
            <strong>Usou? Contribuiu.</strong> Esse Drive só existe porque alguém
            decidiu ajudar quem viria depois. Terminou uma prova? Tire uma foto,
            apague seu nome e manda para o Centro Acadêmico. Simples assim.
          </aside>
        </div>

        <div className={styles.divider} />*/}

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
