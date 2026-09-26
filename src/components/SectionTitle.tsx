import StyleSectionTitle from "./sectionTitle.module.css";

export default function SectionTitle({children}: {children: React.ReactNode}) {
  return (<h2 className={StyleSectionTitle.text}>{children}</h2>);
}