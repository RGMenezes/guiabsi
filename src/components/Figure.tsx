import Image from "next/image";
import styleFigure from "./figure.module.css";

export default function Figure({img, alt, landscape = false, children}: figureAttr) {
  return (
    <figure className={`${styleFigure.figure} ${landscape ? styleFigure.landscape : styleFigure.portrait}`}>
      <Image
        src={img}
        alt={alt}
        width={800}
        height={450} />
      
      <figcaption>{children}</figcaption>
    </figure>
  );
}