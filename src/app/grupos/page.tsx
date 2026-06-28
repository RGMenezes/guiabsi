import { academicCenter, classes, others } from "@/data/grupos";
import styleGroup from "./grupos.module.css";

import Aside from "@/components/Aside";
import BackButton from "@/components/BackButton";
import Category from "@/components/Category";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";



export default function WhatsAppPage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />

        <Header titleText="Grupos e Comunidades">
          Todos os grupos organizados. Entre nos que fazem sentido pro seu
          momento agora.
        </Header>

        <Category titleText="Turmas">
          {classes.map(({name, link, icon}) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styleGroup.groupCard}
            >
              <div className={styleGroup.iconWrapper}>
                {icon}
              </div>
              <span className={styleGroup.groupName}>{name}</span>
              <span className={styleGroup.arrow}>→</span>
            </a>
          ))}
        </Category>

        <Category titleText="Centro Acadêmico">
          {academicCenter.map(({name, link, icon}) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styleGroup.groupCard}
            >
              <div className={styleGroup.iconWrapper}>
                {icon}
              </div>
              <span className={styleGroup.groupName}>{name}</span>
              <span className={styleGroup.arrow}>→</span>
            </a>
          ))}
        </Category>

        <Category titleText="Outros" divider={false}>
          {others.map(({name, link, icon}) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styleGroup.groupCard}
            >
              <div className={styleGroup.iconWrapper}>
                {icon}
              </div>
              <span className={styleGroup.groupName}>{name}</span>
              <span className={styleGroup.arrow}>→</span>
            </a>
          ))}
        </Category>

        <Aside>
          <strong>Atenção:</strong> links de grupo podem expirar. Se algum não
          funcionar, fale com o CA para atualizar.
        </Aside>
      </main>
    </>
  );
}
