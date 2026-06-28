import styleHeader from "./header.module.css";
import BodyText from "./BodyText";

export default function Header({titleText, children}: headerAttr) {
  return (
    <header className={styleHeader.container}>
      <h1 className={styleHeader.title}>{titleText}</h1>
      <BodyText>{children}</BodyText>
    </header>
  );
}