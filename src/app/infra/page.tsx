import styleInfra from "./infra.module.css";
import {teams, labs} from "@/data/infra";

import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Card from "@/components/Card";
import BigCard from "@/components/BigCard";
import Label from "@/components/Label";
import BodyText from "@/components/BodyText";
import Aside from "@/components/Aside";



export default function InfraPage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />
        
        <Header titleText="Infraestrutura & Equipes">
          Conheça os laboratórios do curso e as equipes onde a teoria do BSI vira prática.
        </Header>

        <Category titleText="Recursos e Espaços">
          <div className={styleInfra.infraGrid}>
            {labs.map(({name, desc}) => (
              <Card key={name} titleText={name}>
                {desc}
              </Card>
            ))}
          </div>
        </Category>

        <Category titleText="Equipes De Competição E Prática" divider={false}>
          <div className={styleInfra.equipeList}>
            {teams.map(({tag, name, color, desc, insta, site, email, siteInter}) => (
              <BigCard key={name}>
                <header style={{"--c-label": "#202020", "--accent-dim": color} as React.CSSProperties}>
                  <div>
                    <span
                      className={styleInfra.tag}
                      style={ {backgroundColor: `${color}15`} }
                    >{tag}</span>


                    <p style={{ marginTop: "8px" }}>{name}</p>
                  </div>
                  
                  {/* Links Sociais (Aparecem apenas se existirem) */}
                  {(insta || site) && (
                    <div
                      className={styleInfra.socials}
                      style={{"--c-label": color} as React.CSSProperties}
                    >
                      {email && <a href={email} target="_blank" title="E-mail"><Label dynamic>E-mail</Label></a>}
                      {siteInter && <a href={siteInter} target="_blank" title="WebsiteInternacional"><Label dynamic>Site Inter</Label></a>}
                      {insta && <a href={insta} target="_blank" title="Instagram"><Label dynamic>Insta</Label></a>}
                      {site && <a href={site} target="_blank" title="Website"><Label dynamic>Site</Label></a>}
                    </div>
                  )}
                </header>
                
                <BodyText>{desc}</BodyText>
              </BigCard>
            ))}
          </div>
        </Category>

        <Aside>
          <strong>Dica de veterano:</strong> Participar de uma empresa júnior como a Áurea é a forma mais rápida de entender como o mercado de TI funciona na prática.
        </Aside>
      </main>
    </>
  );
}