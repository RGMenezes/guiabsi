import {veteranWorks} from "@/data/apadrinhamento";
import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import BodyText from "@/components/BodyText";
import Card from "@/components/Card";
import CallToAction from "@/components/CallToAction";



export default function ApadrinhamentoPage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />

        <Header titleText="Apadrinhamento">
          Uma rede de mentoria direta. Cada calouro conectado a um veterano que
          já percorreu o caminho que você está começando agora.
        </Header>

        <Category titleText="Como Funciona?">
          <BodyText>
            Não é uma aula extra. É um contato direto — via WhatsApp ou
            presencial — com alguém de referência para as dúvidas que você
            tem vergonha de perguntar ao professor.
          </BodyText>
          <BodyText>
            Fazemos o <strong>match</strong> entre calouro e veterano com base
            no perfil de cada um. Preencha o formulário e a gente cuida do
            resto.
          </BodyText>
        </Category>

        <Category titleText="O que o padrinho faz por você?">
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {veteranWorks.map(({name, desc}) => (
              <Card key={name} titleText={name}>
                {desc}
              </Card>
            ))}
          </div>
        </Category>

        <CallToAction url="https://forms.gle/mKffnbdotMWouqCQ6">
          Preencher formulário →
        </CallToAction>
      </main>
    </>
  );
}
