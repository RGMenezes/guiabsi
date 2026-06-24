import Link from "next/link";
import stylePage from "./page.module.css";
import TopBar from "@/components/TopBar";
import Card from "@/components/Card";
import {cards} from "@/data/home";



export default function Home() {
  return (
    <>
      <TopBar />
      <main className={stylePage.main}>
        <header className={stylePage.hero}>
          <p className={stylePage.heroTag}>Centro Acadêmico BSI — IFF Campos</p>
          <h1 className={stylePage.heroTitle}>
            Guia do<br />
            <span className={stylePage.heroAccent}>Estudante BSI</span>
          </h1>
          <p className={stylePage.heroDesc}>
            Central de informações atualizada conforme o{" "}
            <strong>PPC 2025 (Resolução CONSUP 304/2025)</strong>.
            Tudo o que você precisa em um só lugar.
          </p>
        </header>

        <nav className={stylePage.grid}>
          {cards.map(({href, tag, name, desc, color}) => (
            <Link
              key={href}
              href={href}
              style={{ "--card-accent": color } as React.CSSProperties}
            >
              <Card tagText={tag} titleText={name} url={href}>
                {desc}
              </Card>
            </Link>
          ))}
        </nav>
      </main>
    </>
  );
}
