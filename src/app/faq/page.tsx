import Link from "next/link";
import styles from "../inner.module.css";
import faqStyles from "./faq.module.css";
import Nav from "@/components/Nav";

const faqs = [
  {
    categoria: "Horas Complementares (ACC)",
    perguntas: [
      {
        q: "Quantas horas de ACC eu preciso para me formar?",
        a: "Na Matriz 2025, são obrigatórias 300 horas-relógio (360 horas-aula). Comece a acumular desde o 1º período — não deixa para o fim.",
      },
      {
        q: "Como eu valido minhas horas?",
        a: "Pelo requerimento à coordenação do curso. Você submete os certificados comprobatórios e a coordenação analisa conforme as tabelas do PPC. Casos não previstos são decididos pelo colegiado.",
      },
      {
        q: "Qual a diferença entre a Tabela 6 e a Tabela 7?",
        a: "A Tabela 6 contém atividades sem limite e sem conversão: as horas do certificado valem diretamente (monitoria, estágio, emprego na área, bolsas, eventos como ouvinte, idiomas, etc.). A Tabela 7 tem paridades fixas: publicação de artigo vale 3h, apresentação em evento vale 5h, certificação na área vale 3h, e assim por diante — independente do tempo dedicado.",
      },
      {
        q: "Cursos online valem como ACC?",
        a: "Cursos de idioma e cursos na área realizados durante o curso entram na Tabela 6. As horas do certificado valem direto, sem teto máximo para essa categoria.",
      },
    ],
  },
  {
    categoria: "Estágio e Trabalho",
    perguntas: [
      {
        q: "O estágio é obrigatório no BSI?",
        a: "Não. O estágio é optativo no PPC 2025. Se você fizer, precisa de contrato oficial (TCE) e carga mínima de 200 horas para ser considerado válido. Estágio sem contrato não conta.",
      },
      {
        q: "Estágio e emprego na área contam como ACC?",
        a: "Sim, ambos entram na Tabela 6 (sem limite de aproveitamento). As horas do contrato valem diretamente como ACC, após validação pela coordenação.",
      },
    ],
  },
  {
    categoria: "Matriz Acadêmica",
    perguntas: [
      {
        q: "O que são as disciplinas Eletivas?",
        a: "São 2 disciplinas obrigatórias do 8º período cujo conteúdo é definido semestralmente pelo NDE — o tema pode mudar a cada semestre para acompanhar as tendências do mercado. Você não escolhe qual cursar: o NDE define a oferta daquele semestre.",
      },
      {
        q: "Qual o tempo máximo para concluir o curso?",
        a: "O mínimo é 8 semestres. O máximo é 16 semestres, descontados os semestres de trancamento — que são no máximo 2 (consecutivos ou não).",
      },
      {
        q: "O que são as trilhas formativas?",
        a: "O PPC 2025 organiza o curso em 4 trilhas: Algoritmos e Estruturas de Dados, Infraestrutura de TI, Desenvolvimento de Software e Gestão e Projetos de TI. Cada trilha termina com um Projeto de Extensão onde você aplica o que aprendeu em situações reais.",
      },
      {
        q: "O que é o Projeto de Graduação (TCC)?",
        a: "O TCC é dividido em dois componentes: Projeto de Graduação I (7º período, 80h) e Projeto de Graduação II (8º período, 40h). São obrigatórios para a conclusão do curso.",
      },
    ],
  },
  {
    categoria: "Avaliação",
    perguntas: [
      {
        q: "Qual a nota mínima para passar?",
        a: "A aprovação exige mínimo de 60% de aproveitamento (nota mínima 6,0 na escala de 0 a 10) e pelo menos 75% de presença em cada componente curricular.",
      },
      {
        q: "Como funciona a recuperação?",
        a: "O semestre é dividido em duas etapas (A1 e A2). Cada etapa tem pelo menos 2 atividades avaliativas — uma individual e uma coletiva. Consulte a Regulamentação Didático-Pedagógica do IFF para os critérios detalhados de recuperação.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <p className={styles.tag}>Dúvidas — PPC 2025</p>
        <h1 className={styles.title}>Dúvidas Frequentes</h1>
        <p className={styles.subtitle}>
          Respostas baseadas no PPC 2025 (Resolução CONSUP 304/2025).
          Se a dúvida não estiver aqui, fala com a coordenação.
        </p>

        <div className={faqStyles.container}>
          {faqs.map((secao) => (
            <div key={secao.categoria}>
              <h2 className={faqStyles.sectionTitle}>{secao.categoria}</h2>
              <div>
                {secao.perguntas.map((item, idx) => (
                  <details key={idx} className={faqStyles.item}>
                    <summary className={faqStyles.question}>{item.q}</summary>
                    <div className={faqStyles.answer}>{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
