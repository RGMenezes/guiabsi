import Link from "next/link";
import styles from "./card_link.module.css";

export default function CardLink({cardObject}: {cardObject: CardObject}) {
   return (
      <Link
         key={cardObject.href}
         href={cardObject.href}
         className={styles.card}
         style={{ "--card-accent": cardObject.color } as React.CSSProperties}
      >
         <span className={styles.cardTag}>{cardObject.tag}</span>
         <h2 className={styles.cardTitle}>{cardObject.title}</h2>
         <p className={styles.cardDesc}>{cardObject.desc}</p>
         <span className={styles.cardArrow}>→</span>
      </Link>
   );
}