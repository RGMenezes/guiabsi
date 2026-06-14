import groupStyles from "./grupos.module.css";
/* import { FaDiscord, FaInfoCircle, FaShoppingBag, FaUsers, FaUtensils, FaWhatsapp } from "react-icons/fa";
import { MdSearchOff } from "react-icons/md"; */
import {turmas, centroAcademico, outros} from "@/data/grupos";

import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
import Aside from "@/components/Aside";

/* TODO: preencha os links reais dos grupos abaixo
const grupos = [
  {
    categoria: "Turmas",
    items: [
      { nome: "Turma 2026.1", link: "https://chat.whatsapp.com/HIIuoNmAeIdKU1F69lQKC7", icon: <FaUsers /> },
    ],
  },
  {
    categoria: "Centro Acadêmico",
    items: [
      { nome: "BSI Geral", link: "https://chat.whatsapp.com/L5C2FIyzkeQEbMWkaTrmlC", icon: <FaWhatsapp /> },
      { nome: "Server do Discord", link: "https://discord.gg/DVjBuAVSf", icon: <FaDiscord /> },
      { nome: "Ensino Superior", link: "https://chat.whatsapp.com/L27CtbuNxljGFnFMnIxCWx?mode=wwc", icon: <FaInfoCircle /> },
    ],
  },
  {
    categoria: "Outros",
    items: [
      { nome: "Achados e Perdidos", link: "https://chat.whatsapp.com/D3j4sh1mDBVIuWcWI2cPai", icon: <MdSearchOff /> },
      { nome: "Vendas IFF", link: "https://chat.whatsapp.com/Di7uuDAgIJQETNmyodJmlq", icon: <FaShoppingBag /> },
      { nome: "IFFormações 2", link: "https://chat.whatsapp.com/KzPZnsiKaBi1nphapux4ll", icon: <FaInfoCircle /> },
      { nome: "Point alimentação IFF campus", link: "https://chat.whatsapp.com/CGKFiVT8b29H1bSEDR4Gai", icon: <FaUtensils /> },
      { nome: "Cardápio do Dia (3º grupo)", link: "https://chat.whatsapp.com/C8xWRbonu8mIPOylMkXZBn", icon: <FaUtensils /> },
    ],
  },
]; // OK */

const classCategory = groupStyles.grid;

export default function WhatsAppPage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />

        {/* <h1 className={styles.title}>Grupos e Comunidades</h1>
        <p className={styles.subtitle}>
          Todos os grupos organizados. Entre nos que fazem sentido pro seu
          momento agora.
        </p> */}

        <Header titleText="Grupos e Comunidades">
          Todos os grupos organizados. Entre nos que fazem sentido pro seu
          momento agora.
        </Header>

        <Category titleText="Turmas">
          {turmas.map(({nome, link, icon}) => (
            <a
              key={nome}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={groupStyles.groupCard}
            >
              <div className={groupStyles.iconWrapper}>
                {icon}
              </div>
              <span className={groupStyles.groupName}>{nome}</span>
              <span className={groupStyles.arrow}>→</span>
            </a>
          ))}
        </Category>

        <Category titleText="Centro Acadêmico">
          {centroAcademico.map(({nome, link, icon}) => (
            <a
              key={nome}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={groupStyles.groupCard}
            >
              <div className={groupStyles.iconWrapper}>
                {icon}
              </div>
              <span className={groupStyles.groupName}>{nome}</span>
              <span className={groupStyles.arrow}>→</span>
            </a>
          ))}
        </Category>

        <Category titleText="Outros" divider={false}>
          {outros.map(({nome, link, icon}) => (
            <a
              key={nome}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={groupStyles.groupCard}
            >
              <div className={groupStyles.iconWrapper}>
                {icon}
              </div>
              <span className={groupStyles.groupName}>{nome}</span>
              <span className={groupStyles.arrow}>→</span>
            </a>
          ))}
        </Category>

        {/*grupos.map((categoria) => (
          <div key={categoria.categoria} className={styles.section}>
            <p className={styles.sectionTitle}>{categoria.categoria}</p>
            <div className={groupStyles.grid}>
              {categoria.items.map((grupo) => (
                <a
                  key={grupo.nome}
                  href={grupo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={groupStyles.groupCard}
                >
                  <div className={groupStyles.iconWrapper}>
                    {grupo.icon}
                  </div>
                  <span className={groupStyles.groupName}>{grupo.nome}</span>
                  <span className={groupStyles.arrow}>→</span>
                </a>
              ))}
            </div>
          </div>
        ))*/}

        <Aside>
          <strong>Atenção:</strong> links de grupo podem expirar. Se algum não
          funcionar, fale com o CA para atualizar.
        </Aside>
      </main>
    </>
  );
}
