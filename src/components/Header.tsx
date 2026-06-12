import styleHeader from "./header.module.css";

export default function Header({titleText, children}: headerAttr) {
   return (
      <header>
         <h1 className={styleHeader.title}>{titleText}</h1>
         <p className={styleHeader.subtitle}>{children}</p>
      </header>
   );
}