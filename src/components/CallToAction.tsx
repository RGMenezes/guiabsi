import styleCTA from "./callToAction.module.css";

export default function CallToAction({url, click, children}: callToActionAttr) {

  if(url) return (
    <a
      href={url}
      className={styleCTA.button}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );

  if(click) return (
    <button onClick={click} className={styleCTA.button}>
      {children}
    </button>
  );

  return (
    <button className={styleCTA.button}>
      CTA de teste
    </button>
  );
}
