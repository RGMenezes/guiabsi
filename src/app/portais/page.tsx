import linkStyles from "./portais.module.css";
import {academicLife, docServices, opportunities, virtualClassrooms, contributeToThisProject} from "@/data/portais";

import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Card from "@/components/Card";



export default function LinksPage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />

        <Header titleText="Portais e Links">
          Todos os portais do IFF em um lugar só. Salva essa página nos
          favoritos — você vai precisar deles toda semana.
        </Header>

        <Category titleText="Vida Acadêmica">
          {academicLife.map(({name, url, desc, tag}) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles.linkCard}
            >
              <Card tagText={tag ? tag : undefined} titleText={name} url={url}>
                {desc}
              </Card>
            </a>
          ))}
        </Category>

        <Category titleText="Salas Virtuais">
          {virtualClassrooms.map(({name, url, desc, tag}) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles.linkCard}
            >
              <Card tagText={tag ? tag : undefined} titleText={name} url={url}>
                {desc}
              </Card>
            </a>
          ))}
        </Category>

        <Category titleText="Oportunidades">
          {opportunities.map(({name, url, desc, tag}) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles.linkCard}
            >
              <Card tagText={tag ? tag : undefined} titleText={name} url={url}>
                {desc}
              </Card>
            </a>
          ))}
        </Category>

        <Category titleText="Documentos & Serviços">
          {docServices.map(({name, url, desc, tag}) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles.linkCard}
            >
              <Card tagText={tag ? tag : undefined} titleText={name} url={url}>
                {desc}
              </Card>
            </a>
          ))}
        </Category>

        <Category titleText="Contribua com este projeto" divider={false}>
          {contributeToThisProject.map(({name, url, desc, tag}) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles.linkCard}
            >
              <Card tagText={tag ? tag : undefined} titleText={name} url={url}>
                {desc}
              </Card>
            </a>
          ))}
        </Category>
      </main>
    </>
  );
}
