export interface ICard {
  width?: string;
  height?: string;
  background: 'bg-neutral-100' | 'bg-neutral-200';
  children: React.ReactNode;
}

const Card: React.FC<ICard> = ({ width = 'w-full', height = 'h-auto', background, children }) => {
  return (
    <div
      className={`${width} ${height} ${background} shadow-[0_2px_25px_rgba(0,0,0,0.05)] border-neutral-300 border-0.06 rounded-3xl`}
    >
      {children}
    </div>
  );
};

export default Card;
