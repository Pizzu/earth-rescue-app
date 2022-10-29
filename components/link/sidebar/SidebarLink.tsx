import { SingleText } from '@components/typography';
import SvgHandler from '@components/ui/svg/SvgHandler';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export interface ISidebarLink {
  title: string;
  href: string;
  icon: 'houseIcon' | 'goalsIcon' | 'communityIcon' | 'treesIcon' | 'newsIcon';
  width?: string;
  height?: string;
}

const SidebarLink: React.FC<ISidebarLink> = ({ title, icon, width, height, href }) => {
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  const { pathname } = useRouter();
  const isActive = pathname === href ? true : false;

  useEffect(() => {
    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);

    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

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
