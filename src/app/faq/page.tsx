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
        a: "Na Matriz 2025, são obrigatórias 300 horas relógio (que equivalem a 360 horas-aula). É importante começar a pontuar desde o primeiro período."
      },
      {
        q: "O que mudou nas ACCs no novo PPC 2025?",
        a: "A carga horária foi ajustada para 300h e as tabelas de pontuação foram atualizadas. Agora existe uma divisão mais clara entre Ensino, Pesquisa e Extensão com limites específicos para cada grupo."
      },
      {
        q: "Como eu cadastro minhas horas?",
        a: "Todo o processo é via SUAP. Você deve anexar o certificado digitalizado e aguardar a validação do Coordenador de Atividades Complementares."
      },
      {
        q: "Cursos online valem como ACC?",
        a: "Sim! Cursos de extensão e aperfeiçoamento na área de computação contam pontos na proporção 1:1 (1 hora de curso = 1 hora de ACC), respeitando o limite do Grupo I."
      }
    ]
  },
  {
    categoria: "Estágio e Trabalho",
    perguntas: [
      {
        q: "O estágio é obrigatório no BSI?",
        a: "Não. O estágio é optativo. Porém, se você fizer, ele pode ser aproveitado como horas de ACC (Grupo I), com carga mínima de 200h."
      },
      {
        q: "Trabalho na área de TI conta como ACC?",
        a: "Sim, experiências profissionais ou estágios não obrigatórios podem ser validados como ACC, desde que devidamente comprovados e relacionados ao curso."
      }
    ]
  },
  {
    categoria: "Matriz Acadêmica",
    perguntas: [
      {
        q: "O que são as disciplinas Eletivas?",
        a: "São matérias que você escolhe no 8º período. Os temas são definidos semestralmente pelo NDE para garantir que o curso aborde tecnologias atuais do mercado."
      },
      {
        q: "Qual o tempo máximo para concluir o curso?",
        a: "O tempo padrão é de 8 semestres (4 anos), mas o aluno tem o limite máximo de 16 semestres (8 anos) para integralizar todas as disciplinas."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>
        <h1 className={styles.title}>Dúvidas Frequentes</h1>
        <p className={styles.subtitle}>
          Tudo o que você precisa saber sobre o funcionamento do BSI no IFF.
        </p>

        <div className={faqStyles.container}>
          {faqs.map((secao) => (
            <div key={secao.categoria} className={faqStyles.section}>
              <h2 className={faqStyles.sectionTitle}>{secao.categoria}</h2>
              <div className={faqStyles.list}>
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