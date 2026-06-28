import styleCategory from "./category.module.css";

export default function Category(
  {titleText, divider = true, children}: categoryAttr
) {
  return (
    <section className={styleCategory.section}>
      <h2 className={styleCategory.sectionTitle}>{titleText}</h2>
      <div className={styleCategory.containerFlow}>{children}</div>
      {divider && <hr/>}
    </section>
  );
}