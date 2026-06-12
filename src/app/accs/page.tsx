import Link from "next/link";
import styles from "../inner.module.css";
import accStyles from "./accs.module.css";
import TopBar from "@/components/TopBar";
import {linkRegistro, tabelaSemLimite, tabelaComConversao} from "@/constants/app/accs";
import Category from "@/components/category/Category";
import ListItem from "@/components/listitem/ListItem";
import {createLiArray} from "@/utils/createLiArray";
import Aside from "@/components/aside/Aside";

/* const linkRegistro = {
  nome: "Horas Complementares",
  url: "https://inf.centro.iff.edu.br/",
  desc: "Site para registro de horas complementares.",
}; // OK

const tabelaSemLimite = [
  "Curso de idioma realizado durante o curso",
  "Emprego na área realizado durante o curso",
  "Estágio realizado durante o curso",
  "Participação em bolsa de monitoria",
  "Participação em bolsa de Iniciação Científica",
  "Participação em bolsa de desenvolvimento tecnológico ou inovação",
  "Participação em eventos como ouvinte",
  "Participação em congressos, jornadas, fóruns, debates, visitas técnicas, workshop e minicursos",
  "Serviço voluntário de caráter sócio comunitário (Lei 9.608/1998)",
]; // OK

const tabelaComConversao = [
  { atividade: "Apresentação de artigo em eventos científicos", paridade: "5h por publicação" },
  { atividade: "Publicação de artigo científico (autor ou coautor)", paridade: "3h por publicação" },
  { atividade: "Publicação de produção autoral (foto, artigo, reportagem ou similar) em periódico ou site", paridade: "2h por publicação" },
  { atividade: "Autor ou coautor de capítulo de livro", paridade: "5h por publicação" },
  { atividade: "Participação como ouvinte em banca de conclusão de curso (graduação, pós, mestrado ou doutorado)", paridade: "1h por banca" },
  { atividade: "Certificação na área do curso", paridade: "3h por certificação" },
]; // OK */

const classCategory = styles.body;

export default function ACCPage() {
  return (
    <>
      <TopBar />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <p className={styles.tag}>ACCs — PPC 2025</p>
        <h1 className={styles.title}>Horas Complementares</h1>
        <p className={styles.subtitle}>
          São obrigatórias <strong>300 horas</strong> (360h/a) ao longo do curso.
          O aproveitamento é feito via requerimento à coordenação com os certificados comprobatórios.
        </p>

        {/**/}

        <Category titleText="Tabela 6 — Sem limite de aproveitamento">
          <p className={styles.body} style={{ marginBottom: "8px" }}>
            Atividades abaixo são aproveitadas integralmente (as horas do certificado valem direto),
            sem teto máximo de horas por categoria.
          </p>
          <ul className={accStyles.listaSemLimite}>
            {createLiArray(tabelaSemLimite)}
            
            {/* {tabelaSemLimite.map((item) => (
              <li key={item} className={accStyles.itemSemLimite}>
                <div>
                  <span style={{color: "var(--accent)"}}>→ </span>
                  {item}
                </div>
              </li>
            ))} */}
          </ul>
        </Category>

        {/* {<div className={styles.section}>
          <p className={styles.sectionTitle}>Tabela 6 — Sem limite de aproveitamento</p>
          <div className={styles.body} style={{ marginBottom: "8px" }}>
            <p>
              Atividades abaixo são aproveitadas integralmente (as horas do certificado valem direto),
              sem teto máximo de horas por categoria.
            </p>
          </div>
          <ul className={accStyles.listaSemLimite}>
            {tabelaSemLimite.map((item) => (
              <li key={item} className={accStyles.itemSemLimite}>
                {item}
              </li>
            ))}
          </ul>
        </div>} */}

        {/*<div className={styles.divider} />*/}

        <Category titleText="Tabela 7 — Com conversão de horas">
          <p className={styles.body} style={{ marginBottom: "16px" }}>
            Atividades com paridade definida: o número de horas de ACC é fixo
            independente do tempo dedicado.
          </p>
          <ul className={accStyles.listaConversao}>
            {createLiArray(tabelaComConversao)}

            {/* {tabelaComConversao.map((item) => (
              <li key={item.atividade} className={accStyles.rowConversao}>
                <div>
                  <span className={accStyles.atividadeNome}>{item.atividade}</span>
                </div>

                <div style={{textAlign: "center"}}>
                  <span className={accStyles.paridade}>{item.paridade}</span>
                </div>
              </li>
            ))} */}
          </ul>
        </Category>

        {/* {<div className={styles.section}>
          <p className={styles.sectionTitle}>Tabela 7 — Com conversão de horas</p>
          <div className={styles.body} style={{ marginBottom: "16px" }}>
            <p>
              Atividades com paridade definida: o número de horas de ACC é fixo
              independente do tempo dedicado.
            </p>
          </div>
          <div className={accStyles.tabelaConversao}>
            {tabelaComConversao.map((item) => (
              <div key={item.atividade} className={accStyles.rowConversao}>
                <span className={accStyles.atividadeNome}>{item.atividade}</span>
                <span className={accStyles.paridade}>{item.paridade}</span>
              </div>
            ))}
          </div>
        </div>} */}

        <Aside>
          📋 <strong>Como validar as horas:</strong> registre suas horas no{" "}
          <a href={linkRegistro.url} target="_blank" rel="noopener noreferrer">
            {linkRegistro.nome}
          </a>{" "}
          e submeta os comprovantes à coordenação para análise. Casos não previstos
          nas tabelas são decididos pelo colegiado. Guarde todos os seus certificados.
        </Aside>

        <Aside>
          <strong>Dica de Veterano:</strong> Começa desde o 1º período. Participar de eventos, congressos e
          minicursos como ouvinte já conta (Tabela 6). Não deixa acumular para o último ano.
        </Aside>

        {/* <aside>
          <strong>Começa desde o 1º período.</strong> Participar de eventos, congressos e
          minicursos como ouvinte já conta (Tabela 6). Não deixa acumular para o último ano.
        </aside> */}
      </main>
    </>
  );
}