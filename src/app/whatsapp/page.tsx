import Link from "next/link";
import styles from "../inner.module.css";
import groupStyles from "./whatsapp.module.css";
import Nav from "@/components/Nav";

// TODO: preencha os links reais dos grupos abaixo
const grupos = [
  {
    categoria: "Turmas",
    items: [
      { nome: "Turma 2025.1", link: "#" },
      { nome: "Turma 2025.2", link: "#" },
    ],
  },
  {
    categoria: "Centro Acadêmico",
    items: [
      { nome: "CA — BSI Geral", link: "#" },
      { nome: "Avisos Oficiais", link: "#" },
    ],
  },
  {
    categoria: "Equipes & Projetos",
    items: [
      { nome: "Goytaborgs — Robótica", link: "#" },
      { nome: "Sete Capitães — Aerodesign", link: "#" },
      { nome: "Áurea — Empresa Júnior", link: "#" },
    ],
  },
];

export default function WhatsAppPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <h1 className={styles.title}>Grupos do WhatsApp</h1>
        <p className={styles.subtitle}>
          Todos os grupos organizados. Entre nos que fazem sentido pro seu
          momento agora.
        </p>

        {grupos.map((categoria) => (
          <div key={categoria.categoria} className={styles.section}>
            <p className={styles.sectionTitle}>{categoria.categoria}</p>
            <div className={groupStyles.grid}>
              {categoria.items.map((grupo) => (
                <a
                  key={grupo.nome}
                  href={grupo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={groupStyles.groupCard}
                >
                  <span className={groupStyles.icon}>💬</span>
                  <span className={groupStyles.groupName}>{grupo.nome}</span>
                  <span className={groupStyles.arrow}>→</span>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.tip}>
          <strong>Atenção:</strong> links de grupo podem expirar. Se algum não
          funcionar, fale com o CA para atualizar.
        </div>
      </main>
    </>
  );
}
