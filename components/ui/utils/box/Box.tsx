export interface IBox {
  className?: string;
  children: React.ReactNode;
}

const Box: React.FC<IBox> = ({ className, children }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default Box;
