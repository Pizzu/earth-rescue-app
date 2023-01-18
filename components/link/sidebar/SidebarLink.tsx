import { SingleText } from '@components/typography';
import { SvgHandler } from '@components/ui';
import { useHover } from '@hooks/useHover';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface ISidebarLink {
  title: string;
  href: string;
  icon: 'houseIcon' | 'goalsIcon' | 'communityIcon' | 'treesIcon' | 'newsIcon';
  width?: string;
  height?: string;
}

const SidebarLink: React.FC<ISidebarLink> = ({ title, icon, width, height, href }) => {
  const { ref, hover } = useHover();
  const { pathname } = useRouter();
  const isActive = pathname === href ? true : false;

  return (
    <Link href={href} passHref>
      <a ref={ref} className="inline-block">
        <div className="grid auto-cols-auto gap-2 justify-items-center">
          <SvgHandler icon={icon} width={width} height={height} isHighlighted={isActive || hover ? true : false} />
          <SingleText className={`${isActive || hover ? 'text-primaryGreen' : 'text-neutral-800'} transition-colors`} type="text-100">
            {title}
          </SingleText>
        </div>
      </a>
    </Link>
  );
};

export default SidebarLink;
