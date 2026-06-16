import styleCTA from "./callToAction.module.css";

export default function CallToAction({url, click, children}: callToActionAttr) {
   let result: any = undefined;

   if (url) {
      result = (
         <button onClick={click} className={styleCTA.button}>
            {children}
         </button>
      );
   } else if (click) {
      result = (
         <a
            href={url}
            className={styleCTA.button}
            target="_blank"
            rel="noopener noreferrer"
         >
            {children}
         </a>
      );
   }

   return result;
}