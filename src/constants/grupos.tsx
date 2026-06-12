import { FaDiscord, FaInfoCircle, FaShoppingBag, FaUsers, FaUtensils, FaWhatsapp } from "react-icons/fa";
import { MdSearchOff } from "react-icons/md";

/* TODO: preencha os links reais dos grupos abaixo
export const grupos = [
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
];*/

const turmas = [
  { nome: "Turma 2026.1", link: "https://chat.whatsapp.com/HIIuoNmAeIdKU1F69lQKC7", icon: <FaUsers /> }
];

const centroAcademico = [
  { nome: "BSI Geral", link: "https://chat.whatsapp.com/L5C2FIyzkeQEbMWkaTrmlC", icon: <FaWhatsapp /> },
  { nome: "Server do Discord", link: "https://discord.gg/DVjBuAVSf", icon: <FaDiscord /> },
  { nome: "Ensino Superior", link: "https://chat.whatsapp.com/L27CtbuNxljGFnFMnIxCWx?mode=wwc", icon: <FaInfoCircle /> }
];

const outros = [
  { nome: "Achados e Perdidos", link: "https://chat.whatsapp.com/D3j4sh1mDBVIuWcWI2cPai", icon: <MdSearchOff /> },
  { nome: "Vendas IFF", link: "https://chat.whatsapp.com/Di7uuDAgIJQETNmyodJmlq", icon: <FaShoppingBag /> },
  { nome: "IFFormações 2", link: "https://chat.whatsapp.com/KzPZnsiKaBi1nphapux4ll", icon: <FaInfoCircle /> },
  { nome: "Point alimentação IFF campus", link: "https://chat.whatsapp.com/CGKFiVT8b29H1bSEDR4Gai", icon: <FaUtensils /> },
  { nome: "Cardápio do Dia (3º grupo)", link: "https://chat.whatsapp.com/C8xWRbonu8mIPOylMkXZBn", icon: <FaUtensils /> }
];

export {turmas, centroAcademico, outros};