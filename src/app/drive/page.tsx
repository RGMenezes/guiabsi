import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import BodyText from "@/components/BodyText";
import Aside from "@/components/Aside";
import CallToAction from "@/components/CallToAction";



export default function DrivePage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />

        <Header titleText="Drive de Provas">
          O repositório colaborativo com exames anteriores. A ferramenta mais
          importante na semana de provas.
        </Header>

        <Category titleText="O que é?">
          <BodyText>
            Um Google Drive compartilhado com provas de períodos anteriores,{" "}
            organizadas por matéria. É a melhor forma de entender o estilo de
            cada professor e os temas que mais caem.
          </BodyText>

          <BodyText>
            As pastas estão divididas por <strong>matéria</strong> e{" "}
            <strong>período</strong>. Quer saber como é a P1 de Lógica
            Matemática? Está lá.
          </BodyText>
        </Category>

        <Category titleText="A Regra De Ouro">
          <Aside>
            <strong>Usou? Contribuiu.</strong> Esse Drive só existe porque alguém
            decidiu ajudar quem viria depois. Terminou uma prova? Tire uma foto,
            apague seu nome e manda para o Centro Acadêmico. Simples assim.
          </Aside>
        </Category>

        <CallToAction url="https://drive.google.com/drive/folders/1nhrcyKYEns-JBUoH1tpj4id01QOGTrlT?usp=drive_link">
          Acessar o Drive →
        </CallToAction>

        {/* <p style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          {/* TODO: substituir o href="#" pelo link real do Drive }
          Salva nos favoritos. Você vai precisar na semana de provas.
        </p> */}
      </main>
    </>
  );
}
