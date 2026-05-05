import Link from "next/link";
import styles from "../inner.module.css";
import infraStyles from "./infra.module.css";
import Nav from "@/components/Nav";

const equipes = [
  {
    tag: "Empresa Júnior",
    name: "Áurea",
    color: "#fbbf24",
    desc: "A empresa júnior de TI do IFF. Focada em desenvolvimento de software real, gestão de projetos e consultoria. Excelente para quem quer vivência de mercado e networking.",
  },
  {
    tag: "Robótica",
    name: "Goytaborgs",
    color: "#00e5a0",
    desc: "Equipe de alto rendimento que integra hardware e software. Desenvolvem robôs para competições nacionais, aplicando conceitos de sistemas embarcados e IA.",
  },
  {
    tag: "Eficiência Energética",
    name: "Sete Capitães",
    color: "#38bdf8",
    desc: "Equipe de barco solar onde o BSI atua na telemetria, sistemas de controle e análise de dados em tempo real durante as competições.",
  },
];

const laboratorios = [
  {
    name: "Laboratórios de Informática",
    desc: "Ambientes climatizados com softwares específicos para desenvolvimento, banco de dados e redes.",
  },
  {
    name: "Laboratório de Hardware e Redes",
    desc: "Espaço dedicado à montagem de computadores, configuração de roteadores/switches e práticas de infraestrutura física.",
  },
  {
    name: "Sala de Estudos BSI",
    desc: "Espaço de convivência e estudo em grupo, ideal para o desenvolvimento dos Projetos de Extensão (PEXT) e TCC.",
  },
  {
    name: "Biblioteca Central",
    desc: "Possui acervo físico atualizado de computação e cabines de estudo individual. Link direto no portal para os periódicos CAPES.",
  },
];

export default function InfraPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <h1 className={styles.title}>Infraestrutura & Equipes</h1>
        <p className={styles.subtitle}>
          Conheça os laboratórios do curso e as equipes onde a teoria do BSI vira prática.
        </p>

        {/* Seção de Laboratórios (Destaque maior agora) */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Recursos e Espaços</p>
          <div className={infraStyles.infraGrid}>
            {laboratorios.map((local) => (
              <div key={local.name} className={infraStyles.infraCard}>
                <strong>{local.name}</strong>
                <p>{local.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Seção de Equipes */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Equipes de Competição e Prática</p>
          <div className={infraStyles.equipeList}>
            {equipes.map((e) => (
              <div
                key={e.name}
                className={styles.card}
                style={{ borderLeft: `4px solid ${e.color}` }}
              >
                <div className={infraStyles.cardHeader}>
                  <p className={styles.cardTitle}>{e.name}</p>
                  <span className={infraStyles.tag} style={{ backgroundColor: `${e.color}22`, color: e.color }}>
                    {e.tag}
                  </span>
                </div>
                <p className={styles.cardBody}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.tip}>
          <strong>Acesso aos Labs:</strong> Como aluno de BSI, você tem prioridade de uso nos laboratórios de informática para trabalhos acadêmicos, desde que não haja aula ocorrendo no momento.
        </div>
      </main>
    </>
  );
}