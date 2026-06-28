import { FaDiscord, FaInfoCircle, FaShoppingBag, FaUsers, FaUtensils, FaWhatsapp } from "react-icons/fa";
import { MdSearchOff } from "react-icons/md";

const classes: LinkWithIconData[] = [
  { name: "Turma 2026.1", link: "https://chat.whatsapp.com/HIIuoNmAeIdKU1F69lQKC7", icon: <FaUsers /> }
];

const academicCenter: LinkWithIconData[] = [
  { name: "BSI Geral", link: "https://chat.whatsapp.com/L5C2FIyzkeQEbMWkaTrmlC", icon: <FaWhatsapp /> },
  { name: "Server do Discord", link: "https://discord.gg/DVjBuAVSf", icon: <FaDiscord /> },
  { name: "Ensino Superior", link: "https://chat.whatsapp.com/L27CtbuNxljGFnFMnIxCWx?mode=wwc", icon: <FaInfoCircle /> }
];

const others: LinkWithIconData[] = [
  { name: "Achados e Perdidos", link: "https://chat.whatsapp.com/D3j4sh1mDBVIuWcWI2cPai", icon: <MdSearchOff /> },
  { name: "Vendas IFF", link: "https://chat.whatsapp.com/Di7uuDAgIJQETNmyodJmlq", icon: <FaShoppingBag /> },
  { name: "IFFormações 2", link: "https://chat.whatsapp.com/KzPZnsiKaBi1nphapux4ll", icon: <FaInfoCircle /> },
  { name: "Point alimentação IFF campus", link: "https://chat.whatsapp.com/CGKFiVT8b29H1bSEDR4Gai", icon: <FaUtensils /> },
  { name: "Cardápio do Dia (3º grupo)", link: "https://chat.whatsapp.com/C8xWRbonu8mIPOylMkXZBn", icon: <FaUtensils /> }
];

export {classes, academicCenter, others};