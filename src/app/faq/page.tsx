import styleFaq from "./faq.module.css";
import {faqs} from "@/data/faq";

import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";



export default function FAQPage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />

        <Header titleText="Dúvidas Frequentes">
          Respostas baseadas no PPC 2025 (Resolução CONSUP 304/2025).
          Se a dúvida não estiver aqui, fala com a coordenação.
        </Header>

        <div className={styleFaq.container}>
          {faqs.map(({category, doubts}) => (
            <div key={category}>
              <h2 className={styleFaq.sectionTitle}>{category}</h2>
              <div>
                {doubts.map(({question, answer}, idx) => (
                  <details key={idx} className={styleFaq.item}>
                    <summary className={styleFaq.question}>{question}</summary>
                    <div className={styleFaq.answer}>{answer}</div>
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
