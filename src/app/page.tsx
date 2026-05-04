import Link from "next/link";
import styles from "./page.module.css";
import Nav from "@/components/Nav";

const navCards = [
  {
    href: "/drive",
    tag: "01",
    title: "Drive de Provas",
    desc: "Repositório colaborativo com provas anteriores. A ferramenta que vai salvar seu semestre.",
    color: "#00e5a0",
  },
  {
    href: "/carreira",
    tag: "02",
    title: "Carreira & Oportunidades",
    desc: "Bolsas, estágios, ACCs e os portais que você precisa conhecer desde o primeiro dia.",
    color: "#ff6b35",
  },
  {
    href: "/apadrinhamento",
    tag: "03",
    title: "Apadrinhamento",
    desc: "Conectamos cada calouro a um veterano. Mentoria direta, sem enrolação.",
    color: "#a78bfa",
  },
  {
    href: "/comunidade",
    tag: "04",
    title: "Comunidade & Equipes",
    desc: "Empresa Júnior, equipes de robótica e aerodesign. Onde a teoria vira prática.",
    color: "#38bdf8",
  },
  {
    href: "/whatsapp",
    tag: "05",
    title: "Grupos do WhatsApp",
    desc: "Todos os grupos organizados por turma e área. Entre agora e fique por dentro.",
    color: "#4ade80",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.heroTag}>Centro Acadêmico — IFF Campos</p>
          <h1 className={styles.heroTitle}>
            Guia do<br />
            <span className={styles.heroAccent}>Calouro BSI</span>
          </h1>
          <p className={styles.heroDesc}>
            Tudo que você precisa saber para sobreviver — e prosperar — no curso de
            Sistemas de Informação. Sem rodeios.
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
