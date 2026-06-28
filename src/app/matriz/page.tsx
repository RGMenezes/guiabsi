import gradeStyles from "./matriz.module.css";
import {trilhas, schoolSchedule} from "@/data/matriz";

import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Aside from "@/components/Aside";



export default function GradePage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />

        <Header titleText="Matriz Curricular">
          8 semestres, 3.000h totais. Noturno, matrícula por componente curricular.
          Mínimo 8 e máximo 16 semestres para integralizar (máx. 2 trancamentos).
        </Header>

        <div className={gradeStyles.legenda}>
          {Object.values(trilhas).map(({name, color}) => (
            <div key={name} className={gradeStyles.legendaItem}>
              <span className={gradeStyles.dot} style={{ backgroundColor: color }} />
              <small>{name}</small>
            </div>
          ))}
        </div>

        <div className={gradeStyles.grid}>
          {schoolSchedule.map(({semester, subjects}) => (
            <div key={semester} className={gradeStyles.periodoCard}>
              <p className={gradeStyles.periodoLabel}>{semester}</p>
              <ul className={gradeStyles.lista}>
                {subjects.map(({name, hours, info}, idx) => (
                  <li
                    key={idx}
                    className={gradeStyles.disciplina}
                    style={{ borderLeft: `4px solid ${info?.color ?? "#333"}` }}
                  >
                    <span>{name}</span>
                    <span className={gradeStyles.hora}>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Aside>
          <strong>Eletivas:</strong> os temas das 2 eletivas do 8º período são definidos
          pelo NDE a cada semestre. Não é você que escolhe — o NDE define o que será
          ofertado naquele semestre.
        </Aside>
      </main>
    </>
  );
}
