import Link from "next/link";
import styles from "../inner.module.css";
import infraStyles from "./infra.module.css";
import Nav from "@/components/Nav";

const equipes = [
  {
    tag: "Empresa Júnior",
    name: "Áurea",
    color: "#fbbf24",
    desc: "Localizada no IFF Centro, a Áurea é uma Empresa Júnior multidisciplinar que une Engenharia (Computação, Elétrica, Mecânica e Automação), Arquitetura, Sistemas de Informação e Design. Aqui, você lidera projetos reais, atende clientes de verdade e antecipa sua entrada no mercado com soft skills e experiência técnica de alto nível.",
    insta: "https://www.instagram.com/aureaej/",
    site: "https://www.aureaej.com/",
  },
  {
    tag: "Robótica",
    name: "Goytaborgs",
    color: "#00e5a0",
    desc: "Equipe de robótica de alto rendimento do IFF. Em breve traremos mais detalhes sobre como participar e os projetos atuais.",
  },
  {
    tag: "Eficiência Energética",
    name: "Sete Capitães",
    color: "#38bdf8",
    desc: "Equipe multidisciplinar focada em eficiência energética e sistemas de telemetria. Aguarde mais informações.",
  },
];

const laboratorios = [
  {
    name: "Laboratórios de Informática",
    desc: "Ambientes climatizados com softwares específicos para desenvolvimento, banco de dados e redes.",
  },
  {
    name: "Laboratório de Hardware e Redes",
    desc: "Espaço dedicado à montagem de computadores, configuração de roteadores/switches e práticas físicas.",
  },
  {
    name: "Sala de Estudos BSI",
    desc: "Espaço de convivência e estudo em grupo, ideal para o desenvolvimento dos Projetos de Extensão (PEXT) e TCC.",
  },
  {
    name: "Biblioteca Central",
    desc: "Acervo físico atualizado e acesso aos periódicos CAPES via rede CAFe.",
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
                  <div>
                    <span className={infraStyles.tag} style={{ backgroundColor: `${e.color}22`, color: e.color }}>
                      {e.tag}
                    </span>
                    <p className={styles.cardTitle} style={{ marginTop: "8px" }}>{e.name}</p>
                  </div>
                  
                  {/* Links Sociais (Aparecem apenas se existirem) */}
                  {(e.insta || e.site) && (
                    <div className={infraStyles.socials}>
                      {e.insta && <a href={e.insta} style={{ color: e.color, borderColor: e.color }} target="_blank" title="Instagram">Insta</a>}
                      {e.site && <a href={e.site} style={{ color: e.color, borderColor: e.color}} target="_blank" title="Website">Site</a>}
                    </div>
                  )}
                </div>
                
                <p className={styles.cardBody}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.tip}>
          <strong>Dica de veterano:</strong> Participar de uma empresa júnior como a Áurea é a forma mais rápida de entender como o mercado de TI funciona na prática.
        </div>
      </main>
    </>
  );
}