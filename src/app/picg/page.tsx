import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import BodyText from "@/components/BodyText";
import GridBox from "@/components/GridBox";
import Card from "@/components/Card";
import Aside from "@/components/Aside";

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
            Se realmente possui o necessário e deseja trilhar essa trajetória científica, é
            importante que você se atente...
          </BodyText>
          
          <GridBox>
            <a
              href="https://www.instagram.com/iff.picg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card titleText="Ao Instagram" url="https://www.instagram.com/iff.picg/">
                A instituição sempre atualiza sua rede social sobre eventos e processos seletivos.
              </Card>
            </a>
            <a
              href="https://selecoes.iff.edu.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card titleText="Ao Portal de Seleções" url="https://selecoes.iff.edu.br/">
                De nada adianta saber do processo e não se inscrever. Adquira sua cópia do edital
                e crie sua inscrição aqui.
              </Card>
            </a>
            <a
              href="https://linktr.ee/iff.picg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card titleText="Ao Site Oficial do PICG" url="https://linktr.ee/iff.picg">
                Aqui, tudo relacionado à PICG está melhor organizado. Saiba o que ainda está em
                andamento por aqui.
              </Card>
            </a>
          </GridBox>

          <Aside>
            Vale destacar que, como é um centro de desenvolvimento científico, todas as vagas
            ofertadas são destinadas a quem <strong>já possui</strong> elevado grau de
            instrução, ou seja,de ensino superior (quase) completo em diante.
          </Aside>
        </Category>

        <footer>
          Coming Soon...
        </footer>
      </main>
    </>
  );
}