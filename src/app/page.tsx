import Link from "next/link";
import styles from "./page.module.css";
import Nav from "@/components/Nav";

const navCards = [
  {
    href: "/links",
    tag: "Acesso Diário",
    title: "Portais e Sistemas",
    desc: "SUAP, Moodle, Grade, Registro Acadêmico e o Portal de Periódicos da CAPES.",
    color: "#4ade80",
  },
  {
    href: "/whatsapp",
    tag: "Comunidade",
    title: "Grupos de WhatsApp",
    desc: "Comunicação direta: grupos por período, monitoria e outros.",
    color: "#25d366",
  },
  {
    href: "/drive",
    tag: "Repositório",
    title: "Drive de Provas",
    desc: "Material de estudo compartilhado, provas antigas e listas de exercícios.",
    color: "#00e5a0",
  },
  {
    href: "/grade",
    tag: "Matriz 2025",
    title: "Matriz Curricular",
    desc: "Os 8 períodos e as 4 trilhas: Algoritmos, Infra, Software e Gestão.",
    color: "#38bdf8",
  },
  {
    href: "/accs",
    tag: "300h Obrigatórias",
    title: "Horas Complementares",
    desc: "O que conta, o que tem paridade fixa e como validar com a coordenação.",
    color: "#ff6b35",
  },
  {
    href: "/carreira",
    tag: "Experiência",
    title: "Carreira e Oportunidades",
    desc: "Regras para estágio, bolsas e oportunidades de carreira.",
    color: "#ffcc00",
  },
  {
    href: "/apadrinhamento",
    tag: "Mentoria",
    title: "Apadrinhamento",
    desc: "Conexão entre veteranos e calouros para facilitar sua adaptação.",
    color: "#a78bfa",
  },
  {
    href: "/infra",
    tag: "Laboratórios",
    title: "Equipes e Espaços",
    desc: "Goytaborgs, Sete Capitães, Goytacar E-Racing, Áurea e os labs do campus.",
    color: "#f472b6",
  },
  {
    href: "/faq",
    tag: "Manual do Aluno",
    title: "Dúvidas Frequentes",
    desc: "Regras de TCC, Eletivas, trancamento e prazos acadêmicos.",
    color: "#94a3b8",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.heroTag}>Centro Acadêmico BSI — IFF Campos</p>
          <h1 className={styles.heroTitle}>
            Guia do<br />
            <span className={styles.heroAccent}>Estudante BSI</span>
          </h1>
          <p className={styles.heroDesc}>
            Central de informações atualizada conforme o{" "}
            <strong>PPC 2025 (Resolução CONSUP 304/2025)</strong>.
            Tudo o que você precisa em um só lugar.
          </p>
        </section>

        <section className={styles.grid}>
          {navCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={styles.card}
              style={{ "--card-accent": card.color } as React.CSSProperties}
            >
              <span className={styles.cardTag}>{card.tag}</span>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDesc}>{card.desc}</p>
              <span className={styles.cardArrow}>→</span>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
