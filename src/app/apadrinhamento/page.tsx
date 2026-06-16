import styles from "../inner.module.css";
import {beneficios} from "@/data/apadrinhamento";

import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Card from "@/components/Card";
import CallToAction from "@/components/CallToAction";

/*const beneficios = [
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
]; // OK */

export default function ApadrinhamentoPage() {
  return (
    <>
      <TopBar />
      <main>
        {/* <Link href="/" className={styles.back}>← voltar</Link> */}
        <BackButton />
        
        {/* <h1 className={styles.title}>Apadrinhamento</h1>
        <p className={styles.subtitle}>
          Uma rede de mentoria direta. Cada calouro conectado a um veterano que
          já percorreu o caminho que você está começando agora.
        </p> */}

        <Header titleText="Apadrinhamento">
          Uma rede de mentoria direta. Cada calouro conectado a um veterano que
          já percorreu o caminho que você está começando agora.
        </Header>

        <Category titleText="Como Funciona?">
          <p>
            Não é uma aula extra. É um contato direto — via WhatsApp ou
            presencial — com alguém de referência para as dúvidas que você
            tem vergonha de perguntar ao professor.
          </p>
          <p>
            Fazemos o <strong>match</strong> entre calouro e veterano com base
            no perfil de cada um. Preencha o formulário e a gente cuida do
            resto.
          </p>
        </Category>

        {/*<div className={styles.section}>
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

        <div className={styles.divider} />*/}

        <Category titleText="O que o padrinho faz por você?">
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {beneficios.map((b) => (
              // <div key={b.title} className={styles.card}>
              //   <p className={styles.cardTitle}>{b.title}</p>
              //   <p className={styles.cardBody}>{b.desc}</p>
              // </div>
              <Card key={b.title} titleText={b.title}>
                {b.desc}
              </Card>
            ))}
          </div>
        </Category>

        {/*<div className={styles.section}>
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

        <div className={styles.divider} />*/}

        {/* <a
          href="https://forms.gle/mKffnbdotMWouqCQ6"
          className={styles.ctaBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Preencher formulário →
        </a> */}

        <CallToAction url="https://forms.gle/mKffnbdotMWouqCQ6">
          Preencher formulário →
        </CallToAction>

        <p style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          {/* TODO: substituir href="#" pelo link do formulário de inscrição */}
        </p>
      </main>
    </>
  );
}
