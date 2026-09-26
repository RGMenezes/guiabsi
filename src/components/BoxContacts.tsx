import StyleBoxContact from "./boxContacts.module.css";

export default function BoxContacts({children}: {children: React.ReactNode}) {
  return (
    <>
      <footer className={StyleBoxContact.box}>
        <div className={StyleBoxContact.content}>{children}</div>
        <span className={StyleBoxContact.credits}>
          * Icons <a href="https://www.magnific.com">designed by juicy_fish - Magnific.com</a>
        </span>
      </footer>
    </>
  );
}