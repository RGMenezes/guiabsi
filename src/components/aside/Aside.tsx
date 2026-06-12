import AsideStyles from "./aside.module.css";

export default function Aside({children}: {children: React.ReactNode}) {
   return (
      <aside className = {AsideStyles.aside}>
         {children}
      </aside>
   );
}