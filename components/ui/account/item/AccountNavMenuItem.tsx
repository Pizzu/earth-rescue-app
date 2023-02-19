import { SingleText } from '@components/typography';
import SvgHandler from '@components/ui/svg/SvgHandler';
import { useHover } from '@hooks/useHover';
import Link from 'next/link';
import { MouseEventHandler } from 'react';
import { Icon } from '../../../../type/icons';

export interface IAccountNavMenuItem extends Icon {
  title: string;
  href?: string;
  width?: string;
  height?: string;
  danger?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const AccountNavMenuItem: React.FC<IAccountNavMenuItem> = ({ title, href, icon, width, height, danger = false, onClick }) => {
  const { ref, hover } = useHover();

  return href ? (
    <Link href={href} passHref>
      <a ref={ref} className="flex gap-2 justify-start items-center">
        <div>
          <SvgHandler icon={icon} width={width} height={height} isHighlighted={true} />
        </div>
        <SingleText
          type="text-200"
          weight="font-medium"
          className={`${danger ? 'text-secondaryRed-700' : hover ? 'text-primaryGreen' : 'text-neutral-600'} transition-colors`}
        >
          {title}
        </SingleText>
      </a>
    </Link>
  ) : (
    <button onClick={onClick} className="flex gap-2 justify-start items-center">
      <div>
        <SvgHandler icon={icon} width={width} height={height} isHighlighted={true} />
      </div>
      <SingleText
        type="text-200"
        weight="font-medium"
        className={`${danger ? 'text-secondaryRed-700' : hover ? 'text-primaryGreen' : 'text-neutral-600'} transition-colors`}
      >
        {title}
      </SingleText>
    </button>
  );
};

export default AccountNavMenuItem;
