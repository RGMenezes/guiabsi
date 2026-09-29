import styleCategory from "./category.module.css";
import SectionTitle from "./SectionTitle";

export default function Category(
  {titleText, divider = true, children}: categoryAttr
) {
  return (
    <section className={styleCategory.section}>
      <SectionTitle>{titleText}</SectionTitle>
      <div className={styleCategory.containerFlow}>{children}</div>
      {divider && <hr/>}
    </section>
  );
}