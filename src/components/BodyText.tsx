import styleBodyText from "./bodyText.module.css";

export default function BodyText({children}: {children: React.ReactNode}) {
   return (
      <p className={styleBodyText.textSecondary}>
         {children}
      </p>
   );
}