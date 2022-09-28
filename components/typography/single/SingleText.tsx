export interface ISingleText {
  type: 'text-400' | 'text-300' | 'text-200' | 'text-100' | 'text-50';
  weight?: 'font-normal' | 'font-medium' | 'font-bold';
  isUppercase?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SingleText: React.FC<ISingleText> = ({ type, weight = 'font-normal', isUppercase = false, className, children }) => {
  return <div className={`${type} ${weight} ${isUppercase && 'uppercase'} ${className}`}>{children}</div>;
};

export default SingleText;
