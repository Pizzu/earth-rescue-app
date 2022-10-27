import SidebarLink from '@components/link/sidebar/SidebarLink';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-[5.25rem] bg-neutral-200">
      <div className="flex justify-center flex-col items-center">
        <div className="flex flex-col gap-3 pt-3">
          <Link href={'/'} passHref>
            <a className="relative w-[3.3125rem] h-14">
              <Image className="object-contain" src="/logo.png" alt="Earth Rescue" layout="fill" />
            </a>
          </Link>
          <div className="w-full h-[0.0625rem] bg-neutral-300"></div>
        </div>
        <div className="mt-11">
          <div className="flex flex-col gap-8 justify-items-center">
            <SidebarLink title="Home" href="/" icon="houseIcon" width="1.5" height="1.5" />
            <SidebarLink title="Trees" href="/trees" icon="treesIcon" width="1.875" height="1.79" />
            <SidebarLink title="Goals" href="/goals" icon="goalsIcon" width="1.875" height="1.875" />
            <SidebarLink title="News" href="/news" icon="newsIcon" width="1.8" height="1.8" />
            <SidebarLink title="Community" href="/community" icon="communityIcon" width="2.19" height="2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
