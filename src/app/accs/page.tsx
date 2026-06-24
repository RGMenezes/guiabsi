import styleAccs from "./accs.module.css";

import { fixedHours, recordingHours, unlimitedHours } from "@/data/accs";
import { createLiArray } from "@/utils/createLiArray";

import Aside from "@/components/Aside";
import BackButton from "@/components/BackButton";
import BodyText from "@/components/BodyText";
import Category from "@/components/Category";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";



export default function ACCPage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />

        <Header titleText="Horas Complementares">
          São obrigatórias <strong>300 horas</strong> (360h/a) ao longo do curso.
          O aproveitamento é feito via requerimento à coordenação com os certificados comprobatórios.
        </Header>

        <Aside>
          📋 <strong>Como validar as horas:</strong> registre suas horas no{" "}
          <a href={recordingHours.url} target="_blank" rel="noopener noreferrer">
            {recordingHours.name}
          </a>{" "}
          e submeta os comprovantes à coordenação para análise. Casos não previstos
          nas tabelas são decididos pelo colegiado. Guarde todos os seus certificados.
        </Aside>

        <Category titleText="Tabela 6 — Sem limite de aproveitamento">
          <BodyText>
            Atividades abaixo são aproveitadas integralmente (as horas do certificado valem direto),
            sem teto máximo de horas por categoria.
          </BodyText>

          <ul className={styleAccs.list}>
            {createLiArray(unlimitedHours)}

            {/* {unlimitedHours.map((item) => (
              <li key={item} className={styleAccs.itemSemLimite}>
                <div>
                  <span style={{color: "var(--accent)"}}>→ </span>
                  {item}
                </div>
              </li>
            ))} */}
          </ul>
        </Category>

        <Category titleText="Tabela 7 — Com conversão de horas">
          <BodyText>
            Atividades com paridade definida: o número de horas de ACC é fixo
            independente do tempo dedicado.
          </BodyText>

          <ul className={styleAccs.list}>
            {createLiArray(fixedHours)}

            {/* {fixedHours.map((item) => (
              <li key={item.atividade} className={styleAccs.rowConversao}>
                <div>
                  <span className={styleAccs.atividadeNome}>{item.atividade}</span>
                </div>

                <div style={{textAlign: "center"}}>
                  <span className={styleAccs.paridade}>{item.paridade}</span>
                </div>
              </li>
            ))} */}
          </ul>
        </Category>

        <Aside>
          <strong>Dica de Veterano:</strong> Começa desde o 1º período. Participar de eventos, congressos e
          minicursos como ouvinte já conta (Tabela 6). Não deixa acumular para o último ano.
        </Aside>
      </main>
    </>
  );
}
