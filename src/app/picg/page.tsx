import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import BodyText from "@/components/BodyText";
import GridBox from "@/components/GridBox";
import Card from "@/components/Card";
import Aside from "@/components/Aside";
import BoxContacts from "@/components/BoxContacts";
import Contact from "@/components/Contact";

import { importantLinks, contacts } from "@/data/picg";

export default function PageOfPICG() {
  return (
    <>
      <TopBar/>

      <main>
        <BackButton/>

        <Header titleText="Polo de Inovação Campos dos Goytacazes IFF (PICG)">
          Graças ao Termo de Cooperação Tecnológica n° 01/2015, firmado entre o IFF e a
          Empresa Brasileira de Pesquisa e Inovação Industrial (Embrapii) em 21/09/2015,
          foi desenvolvido o PICG. 
        </Header>

        <Category titleText="O que o PICG realmente faz?">
          <BodyText>
            O objetivo do polo é desenvolver projetos de Pesquisa, Desenvolvimento e Inovação
            (projetos PD&I), que são contratados pelo IFF e por empresas do setor industrial.
          </BodyText>
          <BodyText>
            <strong>Pesquisa, desenvolvimento e inovação</strong>... essas são as palavras-chave
            que definem se isso é ou não é para você. Quem entra lá deve possuir um desejo
            nato pelo desenvolvimento científico sustentável.
          </BodyText>
        </Category>

        <Category titleText="Como entrar?">
          <BodyText>
            Se você realmente possui o necessário e deseja trilhar essa trajetória científica, é
            importante se atentar...
          </BodyText>
          
          <GridBox>
            {importantLinks.map(({link, title, desc}) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={title}
              >
                <Card titleText={title} url={link}>
                  {desc}
                </Card>
              </a>
            ))}
          </GridBox>

          <Aside>
            Vale destacar que, como é um centro de desenvolvimento científico, todas as vagas
            ofertadas são destinadas a quem <strong>já possui</strong> elevado grau de
            instrução, ou seja, de ensino superior (quase) completo em diante.
          </Aside>
        </Category>

        <BoxContacts>
          {contacts.map(({contactMethod, data}) => (
            <Contact key={data} chanel={contactMethod}>{data}</Contact>
          ))}
        </BoxContacts>
      </main>
    </>
  );
}