import styleTutoriais from "./tutoriais.module.css";
import { tutorials } from "@/data/tutoriais";

import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import BodyText from "@/components/BodyText";
import Figure from "@/components/Figure";

export default function TutorialPage() {
  return (
    <>
      <TopBar />

      <main>
        <BackButton />

        <Header titleText="Tutoriais de Navegação">
          As plataformas digitais do instituto podem parecer complexas para os novatos. Aqui, você encontrará
          um guia que o ajudará a realizar os acessos mais importantes.
        </Header>

        {
          tutorials.map(({categoryName, desc, alert, rules}, index) => (
            <Category
              key={categoryName}
              titleText={categoryName}
              divider={index !== tutorials.length - 1}>
              <BodyText>{desc}</BodyText>

              <ol className={styleTutoriais.list}>{
                rules.map(({action, image, alternative, landscape, caption}) => (
                  <li key={image}>
                    <BodyText>{action}</BodyText>

                    <Figure
                      img={image}
                      alt={alternative}
                      landscape={landscape}>
                      {caption}
                    </Figure>
                  </li>
                ))
              }</ol>

              {alert}
            </Category>
          ))
        }
      </main>
    </>
  );
}