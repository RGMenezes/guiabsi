import LinkStyles from "./category.module.css";
import styles from "./category.module.css";
import {ReactElem} from "@/types/components/ReactElem";

interface AttrCategory {
   titleText: string;
   divider?: boolean;
   children: React.ReactNode;
   grid?: boolean;
}

export default function Category(
   {titleText, divider = true, grid = false, children}: AttrCategory
) {
   return (
      <section className={styles.section}>
         <h2 className={styles.sectionTitle}>{titleText}</h2>
         <div className={!grid ? styles.containerFlow : styles.containerGrid}>{children}</div>
         {divider && <hr/>}
      </section>
   );
}