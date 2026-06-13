import styles from "./category.module.css";

export default function Category(
   {titleText, divider = true, grid = false, children}: categoryAttr
) {
   return (
      <section className={styles.section}>
         <h2 className={styles.sectionTitle}>{titleText}</h2>
         <div className={!grid ? styles.containerFlow : styles.containerGrid}>{children}</div>
         {divider && <hr/>}
      </section>
   );
}