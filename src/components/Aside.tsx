import styles from "./Aside.module.css";

export default function Aside({children}: {children: React.ReactNode}){
  return (
    <aside className={styles.aside}>
      {children}
    </aside>
  );
}
