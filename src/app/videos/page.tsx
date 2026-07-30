/*
Componente de pagina padrão.
import TopBar from "@/components/TopBar";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Category from "@/components/Category";
*/

import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";

export default function VideosPage() { 

  return (
    <>
      <TopBar/>
      <main>
        <BackButton/>
        <Header titleText="Vídeos de localização">
          Encontre vídeos curtos mostrando como chegar aos principais locais do campus, facilitando sua locomoção nos primeiros dias.
        </Header>
          
      </main>
    </>
  );
}

