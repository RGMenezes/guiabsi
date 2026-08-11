import { videos } from "@/data/videos";
import styleVideos from "./videos.module.css";

import BackButton from "@/components/BackButton";
import BodyText from "@/components/BodyText";
import Category from "@/components/Category";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";

export default function VideosPage() {
  return (
    <>
      <TopBar />
      <main>
        <BackButton />
        <Header titleText="Vídeos de localização">
          Encontre vídeos curtos mostrando como chegar aos principais locais do
          campus, facilitando sua locomoção nos primeiros dias.
        </Header>
        {videos.map(({ title, desc, youtubeId }) => (
          <Category key={youtubeId} titleText={title}>
            <BodyText>{desc}</BodyText>
            <iframe
              className={styleVideos.video}
              src={`https://www.youtube.com/embed/${youtubeId}?mute=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Category>
        ))}
      </main>
    </>
  );
}
