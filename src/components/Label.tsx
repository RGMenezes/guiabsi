import styleLabel from "./label.module.css"
type container = (obj: labelAttr) => React.ReactNode;

const Label: container = ({dynamic = false, children}) => (
   <span className={`${styleLabel.label} ${dynamic ? styleLabel.dynamic : styleLabel.static}`}>
      {children}
   </span>
);

export default Label;