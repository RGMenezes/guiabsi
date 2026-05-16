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
    desc: "A Goytaborgs é uma equipe brasileira de robótica competitiva, sediada no Instituto Federal Fluminense, Campus Campos Centro, localizado em Campos dos Goytacazes, no Rio de Janeiro. Composta por estudantes de diferentes cursos de graduação, a equipe tem como principal objetivo fomentar o desenvolvimento tecnológico e profissional de seus membros e colaboradores.",
    insta: "https://www.instagram.com/goytaborgs/",
    site: "https://goytaborgs.com.br",
    email: "mailto:goytaborgs.centro@iff.edu.br"
  },
  {
    tag: "Eficiência Energética",
    name: "7 Capitães",
    color: "#38bdf8",
    desc: "A equipe 7 Capitães é um projeto de pesquisa e inovação do Instituto Federal Fluminense, ligado ao IFF Campus Campos Centro. O grupo reúne estudantes de cursos técnicos e engenharias com o objetivo de desenvolver embarcações movidas a energia solar e soluções sustentáveis para o setor naval. O principal projeto é a construção de um barco solar para o Desafio Solar Brasil, além do desenvolvimento de softwares de gerenciamento energético.",
    insta: "https://www.instagram.com/equipe7capitaes/"
  },
  {
    tag: "Sociedade",
    name: "IEEE",
    color: "#1d4ed8",
    desc: "O Institute of Electrical and Electronic Engineers é uma sociedade técnico-profissional internacional dedicada ao avanço da teoria e prática da engenharia nos campos da eletricidade, eletrônica e computação. O IEEE colabora no incremento da prosperidade mundial, promovendo a engenharia de criação, desenvolvimento, integração e o compartilhamento de conhecimento aplicado em benefício da humanidade.",
    insta: "https://www.instagram.com/ieeebrasil/",
    siteInter: "https://www.ieee.org",
    site: "https://www.ieee.org.br"
  },
  {
    tag: "Automotiva / Elétricos",
    name: "Goytacar e-Racing",
    color: "#ef4444",
    desc: "A Goytacar e-Racing é uma equipe de competição formada por estudantes do Instituto Federal Fluminense, voltada para o desenvolvimento de veículos elétricos de competição para disputar torneios como a Fórmula SAE Brasil. O projeto possui caráter multidisciplinar, reunindo alunos de Engenharia (Mecânica, Elétrica, Controle e Automação, Computação), Design e cursos técnicos para atuar em chassi, suspensão, eletrônica, programação, aerodinâmica e gestão.",
    insta: "https://www.instagram.com/goytacareracing/"
  },
  {
    tag: "Programa Acadêmico",
    name: "DAAT",
    color: "#a855f7",
    desc: "A DAAT (Desenvolvimento Acadêmico e Apoio Tecnológico) é um programa de bolsas do IFF Campus Campos Centro voltado para inserir estudantes de cursos técnicos e de graduação em projetos acadêmicos, tecnológicos e laboratoriais. O objetivo principal é aproximar os alunos da prática profissional em áreas como tecnologia, engenharia, comunicação, acessibilidade, pesquisa aplicada, produção multimídia e suporte acadêmico.",
    site: "https://portal1.iff.edu.br/nossos-campi/campos-centro/noticias/inscricoes-abertas-para-bolsa-daat-no-iff-campos-centro"
  }
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
                      {e.email && <a href={e.email} style={{ color: e.color, borderColor: e.color }} target="_blank" title="E-mail">E-mail</a>}
                      {e.siteInter && <a href={e.siteInter} style={{ color: e.color, borderColor: e.color}} target="_blank" title="WebsiteInternacional">Site Inter</a>}
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