import styleCard from "./card.module.css";

export default function Card({titleText, children}: headerAttr) {
   return (
      <div className={styleCard.card}>
         <h3 className={styleCard.cardTitle}>{titleText}</h3>
         <p className={styleCard.cardBody}>{children}</p>
      </div>
   );
}