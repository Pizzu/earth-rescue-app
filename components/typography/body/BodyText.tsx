export interface IBodyText {
  type: 'text-bodyLarge' | 'text-bodyDefault' | 'text-bodySmall';
  className?: string;
  children: React.ReactNode;
}

const BodyText: React.FC<IBodyText> = ({ type, className, children }) => {
  return <p className={`${type} ${className}`}>{children}</p>;
};

export default BodyText;
