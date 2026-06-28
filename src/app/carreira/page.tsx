import Link from "next/link";
import {scholarships} from "@/data/carreira";

import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import GridBox from "@/components/GridBox";
import BodyText from "@/components/BodyText";
import Card from "@/components/Card";
import Aside from "@/components/Aside";



export default function CarreiraPage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />

        <Header titleText="Carreira & Oportunidades">
          Tudo sobre bolsas, estágio e como aproveitar experiências de carreira
          dentro do curso.
        </Header>

        <Category titleText="Bolsas: Ganhar para Aprender">
          <GridBox>
            {scholarships.map(({name, desc}) => (
              <Card key={name} titleText={name}>
                {desc}
              </Card>
            ))}
          </GridBox>
        </Category>

        <Category titleText="Estágio (PPC 2025)">
          <BodyText>
            O estágio curricular no BSI é <strong>não obrigatório (optativo)</strong>.
            Se você fizer, precisa de contrato oficial (TCE) e carga mínima de{" "}
            <strong>200 horas</strong>. Estágio sem contrato não conta nada.
          </BodyText>

          <BodyText>
            Tanto o estágio quanto o emprego na área contam como ACC pela{" "}
            <strong>Tabela 6</strong> (sem limite de aproveitamento). As horas do
            certificado valem diretamente — não tem fórmula de conversão.
          </BodyText>
        </Category>

        <Category titleText="ACCs e Carreira">
          <BodyText>
            Monitoria, bolsas, estágio e emprego na área entram todos na{" "}
            <strong>Tabela 6 de ACCs</strong> — sem teto e sem conversão.
            Submeta os comprovantes à coordenação para validação.
          </BodyText>
          <BodyText>
            Para ver a lista completa de atividades válidas e as paridades da
            Tabela 7 (publicações, certificações etc.), acesse a página de{" "}
            <Link href="/accs" style={{ color: "var(--accent)" }}>
              Horas Complementares
            </Link>.
          </BodyText>

          <Aside>
            <strong>Dica de veterano:</strong> não foca só no dinheiro. Projetos de{" "}
            <strong>Iniciação Científica</strong> e <strong>Empresa Júnior</strong> pesam
            muito mais no currículo para vagas em empresas boas do que estágios em
            empresas que não usam tecnologias modernas.
          </Aside>
        </Category>

        <Category titleText="Canais de Apoio e Vagas" divider={false}>
          <GridBox>
            <a
              href="https://portal1.iff.edu.br/nossos-campi/campos-centro/estagios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                tagText="CENAPE"
                titleText="Setor de Estágios"
                url="https://portal1.iff.edu.br/nossos-campi/campos-centro/estagios"
              >
                Orientações sobre contratos e convênios.
              </Card>
            </a>

            <a
              href="https://suap.iff.edu.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                tagText="SUAP"
                titleText="Mural de Vagas"
                url="https://suap.iff.edu.br/"
              >
                Onde aparecem os editais de monitoria e bolsas.
              </Card>
            </a>

            <a
              href="https://selecoes.iff.edu.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                tagText="Seleções"
                titleText="Portal de Seleções"
                url="https://selecoes.iff.edu.br/"
              >
                Todos os editais de bolsas DAAT e prazos oficiais.
              </Card>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                tagText="Dúvidas"
                titleText="Coordenação do Curso"
                url="Indisponível :("
              >
                Para tirar dúvidas sobre validação de ACCs e estágio.
              </Card>
            </a>
          </GridBox>
        </Category>
      </main>
    </>
  );
}
