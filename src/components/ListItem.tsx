import style from "./ListItem.module.css";
import Label from "./Label";

export default function ListItem({tagContent, children}: listItemAttr) {
  return (
    <li className={style.compactLi}>
      <div>
        <span className={style.arrow}>→ </span>
        {children}
      </div>

      {tagContent && <Label>{tagContent}</Label>}
    </li>
  );
}