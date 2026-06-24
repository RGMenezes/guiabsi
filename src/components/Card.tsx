import styleCard from "./card.module.css";

export default function Card({tagText, titleText, url, children}: cardAttr) {
  return (
    <div className={`${styleCard.card} ${url && styleCard.link}`}>
      {tagText && (<span className={styleCard.linkTag}>{tagText}</span>)}
      <h3 className={styleCard.cardTitle}>{titleText}</h3>
      <p className={styleCard.cardBody}>{children}</p>

      {
        url && (
          <div className={styleCard.urlContainer}>
            <span className={styleCard.url}>
              {url.replace("https://", "").replace(/\/$/, "")}
            </span>

            <span className={styleCard.urlArrow}>→</span>
          </div>
        )
      }
    </div>
  );
}
