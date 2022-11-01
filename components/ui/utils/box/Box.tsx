export interface IBox {
  className?: string;
  children?: React.ReactNode;
}

const Box: React.FC<IBox> = ({ className, children }) => {
  return className ? <div className={`${className}`}>{children}</div> : <div>{children}</div>;
};

export default Box;
