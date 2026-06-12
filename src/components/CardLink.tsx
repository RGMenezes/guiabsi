import Link from "next/link";
import styles from "./card_link.module.css";

// Apenas o card. Elemento de link necessário
export default function CardLink({titleText, tagText, children}: cardLinkElems) {
   return (
      <div className={styles.cardLink}>
         <span className={styles.cardLinkTag}>{tagText}</span>
         <h2 className={styles.cardLinkTitle}>{titleText}</h2>
         <p className={styles.cardLinkDesc}>{children}</p>
         <span className={styles.cardLinkArrow}>→</span>
      </div>
   );
}