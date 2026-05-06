import Link from "next/link";
import styles from "../inner.module.css";
import gradeStyles from "./grade.module.css";
import Nav from "@/components/Nav";

const trilhas = {
  algoritmos: { nome: "Algoritmos e Estruturas de Dados", color: "#4ade80" },
  infra: { nome: "Infraestrutura de TI", color: "#38bdf8" },
  software: { nome: "Desenvolvimento de Software", color: "#a78bfa" },
  gestao: { nome: "Gestão e Projetos de TI", color: "#fb923c" },
  outros: { nome: "Outros / Base", color: "#94a3b8" },
  eletiva: { nome: "Eletivas", color: "#526580" },
};

const matrizOficial = [
  {
    periodo: "1º Período",
    disciplinas: [
      { nome: "Algoritmos", h: "60h", info: trilhas.algoritmos },
      { nome: "Linguagem de Programação", h: "60h", info: trilhas.algoritmos },
      { nome: "Fundamentos de SI", h: "60h", info: trilhas.outros },
      { nome: "Introdução à Informática", h: "60h", info: trilhas.outros },
      { nome: "Lógica para Computação", h: "60h", info: trilhas.outros },
      { nome: "Álgebra Linear e Geom. Analítica", h: "80h", info: trilhas.outros },
    ],
  },
  {
    periodo: "2º Período",
    disciplinas: [
      { nome: "Prog. Orientada a Objetos", h: "80h", info: trilhas.algoritmos },
      { nome: "Análise Orientada a Objetos", h: "60h", info: trilhas.software },
      { nome: "Engenharia de Software", h: "60h", info: trilhas.software },
      { nome: "Org. e Arq. de Computadores", h: "80h", info: trilhas.infra },
      { nome: "Cálculo", h: "120h", info: trilhas.outros },
    ],
  },
  {
    periodo: "3º Período",
    disciplinas: [
      { nome: "Estruturas de Dados", h: "80h", info: trilhas.algoritmos },
      { nome: "Processo de Desenv. de Software", h: "60h", info: trilhas.software },
      { nome: "Fundamentos de Banco de Dados", h: "80h", info: trilhas.infra },
      { nome: "Sistemas Operacionais", h: "80h", info: trilhas.infra },
      { nome: "Administração", h: "60h", info: trilhas.gestao },
      { nome: "Estatística", h: "60h", info: trilhas.outros },
    ],
  },
  {
    periodo: "4º Período",
    disciplinas: [
      { nome: "Estruturas de Dados Avançadas", h: "80h", info: trilhas.algoritmos },
      { nome: "Projeto Orientado a Objetos", h: "80h", info: trilhas.software },
      { nome: "IHC e Hipermídia", h: "80h", info: trilhas.software },
      { nome: "Redes de Computadores", h: "80h", info: trilhas.infra },
      { nome: "Adm. de Banco de Dados", h: "80h", info: trilhas.infra },
    ],
  },
  {
    periodo: "5º Período",
    disciplinas: [
      { nome: "Lab. de Orientação a Objetos", h: "80h", info: trilhas.software },
      { nome: "Gerência de Projetos", h: "80h", info: trilhas.gestao },
      { nome: "Programação Web", h: "80h", info: trilhas.software },
      { nome: "Pesquisa Operacional", h: "60h", info: trilhas.outros },
      { nome: "Inteligência Computacional", h: "60h", info: trilhas.software },
      { nome: "Projeto de Extensão I", h: "80h", info: trilhas.algoritmos },
    ],
  },
  {
    periodo: "6º Período",
    disciplinas: [
      { nome: "Metodologia Científica", h: "80h", info: trilhas.outros },
      { nome: "Sistema de Suporte à Decisão", h: "80h", info: trilhas.software },
      { nome: "Gerência de Processos", h: "60h", info: trilhas.gestao },
      { nome: "Segurança da Informação", h: "60h", info: trilhas.infra },
      { nome: "Direito, Ética e Cidadania", h: "60h", info: trilhas.outros },
      { nome: "Projeto de Extensão II", h: "100h", info: trilhas.infra },
    ],
  },
  {
    periodo: "7º Período",
    disciplinas: [
      { nome: "Projeto de Graduação I", h: "80h", info: trilhas.outros },
      { nome: "Gestão da Qualidade", h: "80h", info: trilhas.gestao },
      { nome: "Engenharia do Conhecimento", h: "60h", info: trilhas.software },
      { nome: "Empreendedorismo", h: "40h", info: trilhas.gestao },
      { nome: "Sistemas Distribuídos", h: "60h", info: trilhas.infra },
      { nome: "Projeto de Extensão III", h: "100h", info: trilhas.software },
    ],
  },
  {
    periodo: "8º Período",
    disciplinas: [
      { nome: "Projeto de Graduação II (TCC)", h: "40h", info: trilhas.outros },
      { nome: "Eletiva 1", h: "80h", info: trilhas.eletiva },
      { nome: "Eletiva 2", h: "60h", info: trilhas.eletiva },
      { nome: "Gestão de TI", h: "60h", info: trilhas.gestao },
      { nome: "Projeto de Extensão IV", h: "100h", info: trilhas.gestao },
    ],
  },
];

export default function GradePage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Link href="/" className={styles.back}>← voltar</Link>

        <p className={styles.tag}>Matriz 2025.1</p>
        <h1 className={styles.title}>Matriz Curricular</h1>
        <p className={styles.subtitle}>
          8 semestres, 3.000h totais. Noturno, matrícula por componente curricular.
          Mínimo 8 e máximo 16 semestres para integralizar (máx. 2 trancamentos).
        </p>

        <div className={gradeStyles.legenda}>
          {Object.values(trilhas).map((t) => (
            <div key={t.nome} className={gradeStyles.legendaItem}>
              <span className={gradeStyles.dot} style={{ backgroundColor: t.color }} />
              <small>{t.nome}</small>
            </div>
          ))}
        </div>

        <div className={gradeStyles.grid}>
          {matrizOficial.map((semestre) => (
            <div key={semestre.periodo} className={gradeStyles.periodoCard}>
              <p className={gradeStyles.periodoLabel}>{semestre.periodo}</p>
              <ul className={gradeStyles.lista}>
                {semestre.disciplinas.map((disc, idx) => (
                  <li
                    key={idx}
                    className={gradeStyles.disciplina}
                    style={{ borderLeft: `4px solid ${disc.info?.color ?? "#333"}` }}
                  >
                    <span>{disc.nome}</span>
                    <span className={gradeStyles.hora}>{disc.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.tip} style={{ marginTop: "32px" }}>
          <strong>Eletivas:</strong> os temas das 2 eletivas do 8º período são definidos
          pelo NDE a cada semestre. Não é você que escolhe — o NDE define o que será
          ofertado naquele semestre.
        </div>
      </main>
    </>
  );
}
