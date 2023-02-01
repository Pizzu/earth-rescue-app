import Link from 'next/link';
import { MouseEventHandler } from 'react';
export interface IButton {
  type: 'btn-small' | 'btn-medium' | 'btn-large';
  color?: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  linkUrl?: string;
  newTab?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<IButton> = ({
  type = 'btn-medium',
  color = 'primary',
  onClick,
  linkUrl,
  disabled = false,
  newTab = false,
  children,
}) => {
  let btnSize;
  if (type === 'btn-small') {
    btnSize = 'text-btnSmall font-bold py-3 px-4';
  } else if (type === 'btn-medium') {
    btnSize = 'text-btnMedium font-bold py-4 px-5';
  } else if (type === 'btn-large') {
    btnSize = 'text-btnLarge font-bold py-5 px-8';
  }

  return !linkUrl ? (
    <button
      onClick={onClick}
      className={`${btnSize} rounded-full ${
        color === 'primary' ? 'bg-primaryGreen text-neutral-100' : 'bg-neutral-100 text-primaryGreen border-neutral-300 border-0.06'
      } hover:scale-110 transition-all`}
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <Link href={linkUrl} passHref>
      <a
        target={newTab ? '_blank' : ''}
        className={`${btnSize} rounded-full ${
          color === 'primary' ? 'bg-primaryGreen text-neutral-100' : 'bg-neutral-100 text-primaryGreen border-neutral-300 border-0.06'
        } hover:scale-110 transition-all`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
