import styleBigCard from "./bigCard.module.css";

export default function BigCard({children}: {children: React.ReactNode}) {
   return (
      <div className={styleBigCard.bigCard}>
         {children}
      </div>
   );
}