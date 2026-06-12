import {ReactElem} from "@/types/components/ReactElem";
import style from "./ListItem.module.css";

interface Topic {
   tagContent?: string;
   children: ReactElem;
}

export default function ListItem({tagContent, children}: Topic): ReactElem {
   let labelElem: any = null;

   if (tagContent) {
      labelElem = (
         <span className={style.label}>{tagContent}</span>
      );
   }

   return (
      <li className={style.compactLi}>
         <div>
            <span className={style.arrow}>→ </span>
            {children}
         </div>

         {labelElem}
      </li>
   );
}