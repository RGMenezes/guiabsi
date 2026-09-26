import StyleBoxContact from "./boxContacts.module.css";
import SectionTitle from "./SectionTitle";

interface boxContactsAttr {
  titleText: string;
  children: React.ReactNode
}

export default function BoxContacts({titleText, children}: boxContactsAttr) {
  return (
    <>
      <footer className={StyleBoxContact.box}>
        <SectionTitle>Entre em contato com {titleText}</SectionTitle>
        <div className={StyleBoxContact.content}>{children}</div>
        <span className={StyleBoxContact.credits}>
          * Icons <a href="https://www.magnific.com">designed by juicy_fish - Magnific.com</a>
        </span>
      </footer>
    </>
  );
}