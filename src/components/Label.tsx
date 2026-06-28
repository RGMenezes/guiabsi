import styleLabel from "./label.module.css";

export default function Label({dynamic = false, children}: labelAttr) {
  return (
    <span className={`${styleLabel.label} ${dynamic ? styleLabel.dynamic : styleLabel.static}`}>
      {children}
    </span>
  );
};