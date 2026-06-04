import {ReactElem} from "@/types/components/ReactElem";
import ListItem from "@/components/listitem/ListItem";

export function createLiArray(texts: IlistElement[]): ReactElem | null {
   const result: any[] = [], size: number = texts.length;

   for (let index = 0; index < size; index++) {
      result.push(
         <ListItem key={`${index} ${texts[index].text}`} tagContent={texts[index].label}>{texts[index].text}</ListItem>
      );
   }

   return result;
}