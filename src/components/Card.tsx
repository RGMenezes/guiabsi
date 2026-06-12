import styleCard from "./card.module.css";

export default function Card({titleText, children}: headerAttr) {
   return (
      <div className={styleCard.card}>
         <h1 className={styleCard.cardTitle}>{titleText}</h1>
         <p className={styleCard.cardBody}>{children}</p>
      </div>
   );
}