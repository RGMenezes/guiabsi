import Link from "next/link";
import styles from "../inner.module.css";
import carreiraStyles from "./carreira.module.css";
import Nav from "@/components/Nav";

const bolsas = [
  { name: "Monitoria", desc: "Apoio a disciplinas do núcleo básico ou específico. Ótimo para revisar conteúdo." },
  { name: "Pesquisa (PIBIC/PIBITI)", desc: "Iniciação científica com foco em inovação tecnológica e acadêmica." },
  { name: "Extensão", desc: "Projetos que levam o conhecimento do BSI para a comunidade externa." },
  { name: "Treinamento e Dev", desc: "Bolsas para atuar no desenvolvimento de sistemas internos do IFF." },
];

export default function CarreiraPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <h1 className={styles.title}>Carreira & Oportunidades</h1>
        <p className={styles.subtitle}>
          Tudo sobre bolsas, o mercado de trabalho e como validar suas experiências.
        </p>

        {/* Seção de Bolsas */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Bolsas: Ganhar para Aprender</p>
          <div className={carreiraStyles.bolsaGrid}>
            {bolsas.map((bolsa) => (
              <div key={bolsa.name} className={styles.card}>
                <p className={styles.cardTitle}>{bolsa.name}</p>
                <p className={styles.cardBody}>{bolsa.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Seção de Estágio - Informação precisa do PPC */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Estágio (PPC 2025)</p>
          <div className={styles.body}>
            <p>
              O estágio curricular no BSI é <strong>não obrigatório (optativo)</strong>. 
              Para ser validado, deve ter carga mínima de 200h e contrato oficial (TCE).
            </p>
            <div className={carreiraStyles.infoTag}>
              Regra: Máximo de 30h semanais e 6h diárias.
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Conexão com ACCs */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>ACCs e Carreira</p>
          <div className={styles.body}>
            <p>
              Toda experiência de carreira pode virar <strong>horas de ACC</strong> (Grupo I):
            </p>
            <ul className={carreiraStyles.lista}>
              <li><strong>Estágio:</strong> Cada 60h trabalhadas = 20h de ACC.</li>
              <li><strong>Monitoria/Bolsa:</strong> 1 semestre = 40h de ACC.</li>
              <li><strong>Trabalho em TI:</strong> Experiência profissional também pode ser validada.</li>
            </ul>
          </div>
        </div>

        <div className={styles.tip}>
          <strong>Dica de veterano:</strong> Não foque apenas no dinheiro. Projetos de 
          <strong> Iniciação Científica</strong> e <strong>Empresa Júnior</strong> contam 
          muito mais no currículo para vagas de Big Techs do que estágios em empresas que não usam tecnologias modernas.
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Canais de Apoio e Vagas</p>
          <div className={carreiraStyles.linkGrid}>
            <a 
              href="https://portal1.iff.edu.br/nossos-campi/campos-centro/estagios" 
              target="_blank" 
              className={carreiraStyles.portalLink}
            >
              <strong>Setor de Estágios (CENAPE)</strong>
              <span>Orientações sobre contratos e convênios.</span>
            </a>
    
            <a 
              href="https://suap.iff.edu.br/" 
              target="_blank" 
              className={carreiraStyles.portalLink}
            >
              <strong>Mural de Vagas (SUAP)</strong>
              <span>Onde aparecem os editais de monitoria e bolsas.</span>
            </a>

            <div className={carreiraStyles.portalLink}>
              <strong>Coordenação do Curso</strong>
              <span>Para tirar dúvidas sobre se uma vaga vale como ACC.</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}