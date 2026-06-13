import styleGridBox from "./gridBox.module.css";

export default function GridBox({children}: {children: React.ReactNode}) {
   return (
      <div className={styleGridBox.containerGrid}>
         {children}
      </div>
   );
}