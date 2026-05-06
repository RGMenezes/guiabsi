import Link from "next/link";
import styles from "../inner.module.css";
import carreiraStyles from "./carreira.module.css";
import Nav from "@/components/Nav";

const bolsas = [
  { name: "Monitoria", desc: "Apoio a disciplinas do núcleo básico ou específico. Ótimo para revisar conteúdo e já conta como ACC (Tabela 6, sem limite)." },
  { name: "Pesquisa (PIBIC/PIBITI)", desc: "Iniciação científica com foco em inovação tecnológica e acadêmica. Conta como ACC pela Tabela 6." },
  { name: "Extensão", desc: "Projetos que levam o conhecimento do BSI para a comunidade externa. Conta como ACC pela Tabela 6." },
  { name: "Desenvolvimento Institucional", desc: "Trabalhe no código dos sistemas que o IFF usa. Currículo de peso e também conta como ACC." },
];

export default function CarreiraPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <h1 className={styles.title}>Carreira & Oportunidades</h1>
        <p className={styles.subtitle}>
          Tudo sobre bolsas, estágio e como aproveitar experiências de carreira
          dentro do curso.
        </p>

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

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Estágio (PPC 2025)</p>
          <div className={styles.body}>
            <p>
              O estágio curricular no BSI é <strong>não obrigatório (optativo)</strong>.
              Se você fizer, precisa de contrato oficial (TCE) e carga mínima de{" "}
              <strong>200 horas</strong>. Estágio sem contrato não conta nada.
            </p>
            <p>
              Tanto o estágio quanto o emprego na área contam como ACC pela{" "}
              <strong>Tabela 6</strong> (sem limite de aproveitamento). As horas do
              certificado valem diretamente — não tem fórmula de conversão.
            </p>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <p className={styles.sectionTitle}>ACCs e Carreira</p>
          <div className={styles.body}>
            <p>
              Monitoria, bolsas, estágio e emprego na área entram todos na{" "}
              <strong>Tabela 6 de ACCs</strong> — sem teto e sem conversão.
              Submeta os comprovantes à coordenação para validação.
            </p>
            <p>
              Para ver a lista completa de atividades válidas e as paridades da
              Tabela 7 (publicações, certificações etc.), acesse a página de{" "}
              <Link href="/accs" style={{ color: "var(--accent)" }}>
                Horas Complementares
              </Link>.
            </p>
          </div>
        </div>

        <div className={styles.tip}>
          <strong>Dica de veterano:</strong> não foca só no dinheiro. Projetos de{" "}
          <strong>Iniciação Científica</strong> e <strong>Empresa Júnior</strong> pesam
          muito mais no currículo para vagas em empresas boas do que estágios em
          empresas que não usam tecnologias modernas.
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Canais de Apoio e Vagas</p>
          <div className={carreiraStyles.linkGrid}>
            <a
              href="https://portal1.iff.edu.br/nossos-campi/campos-centro/estagios"
              target="_blank"
              rel="noopener noreferrer"
              className={carreiraStyles.portalLink}
            >
              <strong>Setor de Estágios (CENAPE)</strong>
              <span>Orientações sobre contratos e convênios.</span>
            </a>

            <a
              href="https://suap.iff.edu.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={carreiraStyles.portalLink}
            >
              <strong>Mural de Vagas (SUAP)</strong>
              <span>Onde aparecem os editais de monitoria e bolsas.</span>
            </a>

            <a
              href="https://selecoes.iff.edu.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={carreiraStyles.portalLink}
            >
              <strong>Portal de Seleções</strong>
              <span>Todos os editais de bolsas DAAT e prazos oficiais.</span>
            </a>

            <div className={carreiraStyles.portalLink}>
              <strong>Coordenação do Curso</strong>
              <span>Para tirar dúvidas sobre validação de ACCs e estágio.</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
