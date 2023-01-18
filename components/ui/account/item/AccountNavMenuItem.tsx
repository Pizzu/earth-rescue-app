import { SingleText } from '@components/typography';
import SvgHandler from '@components/ui/svg/SvgHandler';
import { useHover } from '@hooks/useHover';
import Link from 'next/link';
import { Icon } from '../../../../types/icons';

export interface IAccountNavMenuItem extends Icon {
  title: string;
  href: string;
  width?: string;
  height?: string;
  danger?: boolean;
}

const AccountNavMenuItem: React.FC<IAccountNavMenuItem> = ({ title, href, icon, width, height, danger = false }) => {
  const { ref, hover } = useHover();

  return (
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
  );
};

export default AccountNavMenuItem;
